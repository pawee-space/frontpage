import React, { useEffect } from 'react';
import {
  FiAlertCircle,
  FiCheckCircle,
  FiInfo,
  FiXCircle,
} from 'react-icons/fi';

import { ToastMessage } from '../../../hooks/toast';

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
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log('removeToast(message.id)');
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

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
        onClick={() => console.log('removeToast(message.id)')}
        type="button"
      >
        <FiXCircle size={18} />
      </button>
    </Container>
  );
};

export default ToastView;
