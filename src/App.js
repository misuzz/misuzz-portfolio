import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import './App.css';
import Myplofile from './myplofile';
import HOME from './HOME'

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path={'/'} component={HOME} />
            <Route path={'/myplofile'} component={Myplofile} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  };
}

export default App;
