import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
// import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import News from './Components/News/News';
import Destination from './Components/Destination/Destination';
import Blog from './Components/Blog/Blog';
import Contact from './Components/Contact/Contact';
import Booking from './Components/Booking/Booking';
import Search from './Components/Search/Search';
import Login from './Components/Login/Login';
import SignIn from "./Components/SignIn/SignIn";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/news">
            <News></News>
          </Route>
          <Route path="/destination">
            <Destination></Destination>
          </Route>
          <Route path="/blog">
            <Blog></Blog>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/booking/:id">
            <Booking></Booking>
          </Route>
          <Route path="/search/:id">
            <Search></Search>
          </Route>
          <Route path="/signin">
            <SignIn></SignIn>
          </Route>
          <Route path="/">
            <Home></Home>
          </Route>
          
        </Switch>

      </Router>
    </div>
  );
}

export default App;
