import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './Pages/Login';
import Settings from './Pages/Settings';
import Game from './Pages/Game';

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/settings" component={ Settings } />
        <Route exact path="/game" component={ Game } />
      </Switch>
    );
  }
}

export default App;
