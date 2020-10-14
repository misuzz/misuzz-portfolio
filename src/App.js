import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Myprofile from './Myprofile';
import Main from './Main'

class App extends React.Component {
  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path={'/'} component={Main} />
          <Route path={'/myplofile'} component={Myprofile} />
        </Switch>
      </BrowserRouter>
    );
  };
}

export default App;
