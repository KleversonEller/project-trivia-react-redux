import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './Pages/Login';

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ Login } />
      </Switch>
    );
  }
}

export default App;
