import React from 'react';
import { Header } from './Header';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';

export const App = ()=> (
  <div>
    <Header />
    <div className="container container-fluid">
      <Main />
    </div>
  </div>
);

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/about' component={About}/>
    </Switch>
  </main>
);
