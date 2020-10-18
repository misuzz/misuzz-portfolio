import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Myprofile from './Myprofile';
import Main from './Main'

class App extends React.Component {
  render() {
    return (
      <HashRouter basename="/">
        <Route exact path="/" component={Main} />
        <Route path="/Myprofile" component={Myprofile} />
      </HashRouter>
    );
  };
}

export default App;


// {process.env.PUBLIC_URL}