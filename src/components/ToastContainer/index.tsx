import React from "react";

import { ToastMessage, useToast } from "../../hook/ToastContext";
import { Container } from "./styles";
import Toast from "./toast";

interface ToastContainerProps {
  messages: ToastMessage[];
}

const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => {
  // //removendo tosat
  // const handleRemoveToast = useCallback((id) => {
  //   removeToast(id);
  // }, []);

  return (
    <Container>
      {messages.map((message) => {
        return <Toast key={message.id} message={message}></Toast>;
      })}
    </Container>
  );
};

export default ToastContainer;
