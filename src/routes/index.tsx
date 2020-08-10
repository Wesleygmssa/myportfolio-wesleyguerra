import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../pages/home";
import About from "../pages/about";
import Project from "../pages/project";

// Desafio master blaster na descrição
const Pagina404 = () => (
  <>
    <a href="/">Volte para home</a>
    <div>Página 404</div>
  </>
);

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/project" component={Project} />
    <Route component={Pagina404} />
  </Switch>
);

export default Routes;
