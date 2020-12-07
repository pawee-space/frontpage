import React from 'react';
import { ToastProvider } from './toast';

const AppProvider: React.FunctionComponent = ({ children }) => (
  <ToastProvider>
    {children}
  </ToastProvider>
);

export default AppProvider;
