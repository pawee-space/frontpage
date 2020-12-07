import React, { useEffect } from 'react';
import {
  FiAlertCircle,
  FiCheckCircle,
  FiInfo,
  FiXCircle,
} from 'react-icons/fi';

import { ToastMessage, useToast } from '../../../hooks/toast';

import { Container } from './styles';

interface ToastViewProps {
   message: ToastMessage;
   style: object;
}

const icons = {
  success: <FiCheckCircle size={20} />,
  error: <FiAlertCircle size={20} />,
  default: <FiInfo size={20} />,
};

const ToastView: React.FC<ToastViewProps> = ({ message, style }) => {
  const { removeToast } = useToast();
  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(message.id);
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [message.id, removeToast]);

  return (
    <Container
      type={message.type}
      hasDescription={!!message.description}
      style={style}
    >
      {icons[message.type || 'default']}

      <div>
        <strong>{message.title}</strong>
        <p>{message.description}</p>
      </div>

      <button
        onClick={() => removeToast(message.id)}
        type="button"
      >
        <FiXCircle size={18} />
      </button>
    </Container>
  );
};

export default ToastView;
