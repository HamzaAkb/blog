import Appbar from './Components/Appbar';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/Home';
import Article from './Components/Article';
import Admin from './Components/Admin';
import Add from './Components/Add';

const App = () => {
  return (
    <>
      <Appbar />
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/article' component={Article} />
          <Route exact path='/admin' component={Admin} />
          <Route exact path='/admin/add' component={Add} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
