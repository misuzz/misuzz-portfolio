import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Myprofile from './Myprofile';
import Main from './Main'

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path={'/'} component={Main} />
            <Route path={'/myplofile'} component={Myprofile} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  };
}

export default App;
