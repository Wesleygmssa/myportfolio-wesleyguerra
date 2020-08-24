import React from "react";
import { BrowserRouter } from "react-router-dom";

import GlobalStyle from "./styles/global";
import Routes from "./routes";
import { ToastProvider } from "./hook/ToastContext";

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <ToastProvider>
          <Routes />
        </ToastProvider>
      </BrowserRouter>
      <GlobalStyle />
    </>
  );
};

export default App;
