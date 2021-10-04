import "./App.css";
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "../components/Header";
import Home from "../pages/Home";
import Checkout from "../components/Checkout";
function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Switch>
          <Route exact path="/">
            <Header />
            <Home/>
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout/>
          </Route>
          <Route path="/login">
            <h2>login</h2>
          </Route>
          <Route path="*">
            <Header />
            <h2>404</h2>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
