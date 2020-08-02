import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/home';
import About from '../pages/about';
import Project from '../pages/project'

const Routes: React.FC = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route  path="/about" component={About} />
        <Route  path="/project" component={Project} />
    </Switch>
)

export default Routes;