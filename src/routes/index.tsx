import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../pages/home";
import About from "../pages/about";
import Project from "../pages/project";
import Contact from "../pages/contact";
import PageDefault from "../components/PageDefault";

// Desafio master blaster na descrição
const Pagina404 = () => (
  <>
    <PageDefault>
      <a href="/">Volte para home</a>
      <div>Página 404</div>
    </PageDefault>
  </>
);

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/project" component={Project} />
    <Route path="/contact/form" component={Contact} />
    <Route component={Pagina404} />
  </Switch>
);

export default Routes;
