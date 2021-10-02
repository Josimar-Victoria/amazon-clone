import "./App.css";
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "../components/Header";
function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Switch>
          <Route exact path="/">
            <Header />
            <h2>Home</h2>
          </Route>
          <Route path="/checkout">
            <h2>checkout</h2>
          </Route>
          <Route path="/login">
            <h2>login</h2>
          </Route>
          <Route path="*">
            <h2>404</h2>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
