import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './App';
import Header from './components/header';
import Footer from './components/footer';


export default function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/home" component={Home} exact />
      </Switch>
      <Footer></Footer>
    </Router>
  );
}
