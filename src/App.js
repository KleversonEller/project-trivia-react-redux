import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './Pages/Login';
import Game from './Pages/Game';

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/game" component={ Game } />
      </Switch>
    );
  }
}

export default App;
