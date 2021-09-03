import React from "react";
import Routes from "./routes";
import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "./style";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes />
    </BrowserRouter>
  );
};

export default App;
