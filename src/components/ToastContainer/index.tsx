import React, { useCallback, useEffect } from "react";
import { FiAlertCircle, FiXCircle } from "react-icons/fi";

import { ToastMessage, useToast } from "../../hook/ToastContext";
import { Container, Toast } from "./styles";

interface ToastContainerProps {
  messages: ToastMessage[];
}

const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => {
  const { removeToast } = useToast();

  const handleRemoveToast = useCallback((id) => {
    removeToast(id);
  }, []);

  return (
    <Container>
      {messages.map((message) => {
        return (
          <Toast
            key={message.id}
            //vericação do tipo
            type={message.type}
            //verificação se aparece description true/false boolean
            hasDescription={!!message.description}
          >
            <FiAlertCircle size={20} />
            <div>
              <strong>{message.title}</strong>
              {message.description && <p>{message.description}</p>}
            </div>
            <button onClick={() => handleRemoveToast(message.id)} type="button">
              <FiXCircle size={18} />
            </button>
          </Toast>
        );
      })}
    </Container>
  );
};

export default ToastContainer;
