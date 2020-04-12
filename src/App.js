import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Notification from './components/Notification'
import Home from "./pages/Home";
import About from "./pages/About";
import Register from './pages/Register'
import Login from './pages/Login'
import "./App.css";

function App() {
  return (
    <Router>
      <Fragment>
        <NavBar />
        <div className="container">
          <Notification />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </div>
      </Fragment>
    </Router>
  );
}

export default App;
