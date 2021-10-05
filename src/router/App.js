import "./App.css";
import React, { useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "../components/Header";
import Home from "../pages/Home";
import Checkout from "../components/Checkout";
import Login from "../pages/Login";
import { useStateValue } from "../StateProvider";
import { auth } from "../firebase";
import { actionTypes } from "../reducer";
function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: actionTypes.SET_USER,
          user: authUser,
        });
      } else {
        dispatch({
          type: actionTypes.SET_USER,
          user: null,
        });
      }
    });

    return () => {
      unsubscribe();
    };
  }, [dispatch]);

  console.log(user)
  return (
    <BrowserRouter>
      <div className="app">
        <Switch>
          <Route exact path="/">
            <Header />
            <Home />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/login">
            <Login />
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
