import React from "react";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Home from './App';
// import CarDetails from './CarDetails';
// import Header from './components/header';
// import Footer from './components/footer';
// import Fav from './FavouriteCars';
// import NotFound from './notFound';



export default function App() {
  return (
    <Router>
        <div>
        {/* <Header></Header> */}
        <Switch>
          {/* <Route path="/car/:id" component={CarDetails} exact/> */}
          <Route path="/" component={Home} exact />    
          </Switch>
          {/* <Footer></Footer> */}
          </div>
    </Router>
  );
}
