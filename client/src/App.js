import React from "react";
import Nav from './components/Nav'
import Footer from './components/Footer'
import Library from './components/Library'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import GameCard from "./components/GameCard";
import User from "./pages/User";




function App() {
  
  
  return (
    <>

      <Nav />
      <Router>
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <User />
      </Router>
      <Library />
      <Footer />
     

    </>
  );
}

export default App;
