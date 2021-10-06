import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import {Navbar} from './MyComponents/Navbar'
import {Home} from './MyComponents/Home.jsx';
import {Services} from './MyComponents/Services.jsx';
import {Progress} from './MyComponents/Progress.jsx';
import {Switch,Route,Redirect} from 'react-router-dom';

export const App = () => {
  const name="Suhotra";
  return (
    <div>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={() =><Home name={name}/>} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/progress" component={Progress} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
};
