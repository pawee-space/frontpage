import React, {
  createContext, useContext, useCallback, useState,
} from 'react';
import { v4 as uuid } from 'uuid';

import Toast from '../components/Toast';

export interface ToastMessage {
   id: string;
   type?: 'success' | 'error' | 'default';
   title: string;
   description?: string;
}

interface ToastContextData {
   addToast(message: Omit<ToastMessage, 'id'>): void;
   removeToast(id: string): void;
}

const ToastContext = createContext<ToastContextData>({} as ToastContextData);

export const ToastProvider: React.FunctionComponent = ({ children }) => {
  const [messages, setMessages] = useState<ToastMessage[]>([]);

  const addToast = useCallback(
    ({ type, title, description }: Omit<ToastMessage, 'id'>) => {
      const id = uuid();

      const toast = {
        id,
        type,
        title,
        description,
      };

      setMessages((state) => [...state, toast]);
    }, [],
  );

  const removeToast = useCallback((id: string) => {
    setMessages((state) => state.filter((message) => message.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <Toast messages={messages} />
    </ToastContext.Provider>
  );
};

export function useToast(): ToastContextData {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error('use Toast must be used within a ToastProvider');
  }
  return context;
}
