import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import NavBar from './components/NavBar/NavBar';
import ProjectDetail from './pages/ProjectDetail/ProjectDetail';
import Projects from './pages/Projects/Projects';

import './App.scss';

const App = () => {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>

          <Route exact path='/'>
            <Home />
          </Route>

          <Route exact path='/projects'>
            <Projects />
          </Route>

          <Route path='/projects/:id'>
            <ProjectDetail />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
