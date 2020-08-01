import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/home';
import About from '../pages/about';
import Project from '../pages/project'
import Repository from '../pages/repository';

const Routes: React.FC = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route  path="/about" component={About} />
        <Route  path="/project" component={Project} />
        <Route path="/repository/:repository" component={Repository}/>
    </Switch>
)

export default Routes;