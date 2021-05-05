import React from "react";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Home from './App';
import Header from '../src/form/header';
import Footer from '../src/form/footer';


export default function App() {
  return (
    <Router>
        <div>
        <Header></Header>
        <Switch>
          <Route path="/" component={Home} exact />  
          <Route path="/home" component={Home} exact /> 
          </Switch>
          <Footer></Footer>
          </div>
    </Router>
  );
}
