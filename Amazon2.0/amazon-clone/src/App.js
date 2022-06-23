import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import React, { useEffect, useState } from "react";
import Payment from "./Payment";
import Orders from "./Orders";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51JtU3kSBcyuSSCkDA53rgXOnLu9C7kophleAdupSMLv7OgAzOAiDVpwnKKihMSQmaf4I45cQeYIn4S68Bll1hpCr003nhXO8du"
);

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    // will only run once when the app component loads..

    auth.onAuthStateChanged((authUser) => {
      console.log("The User Is >>>>>", authUser);

      if (authUser) {
        // the user just logged in/ was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is not logged in
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={[<Header />, <Home />]}></Route>
          <Route path="/orders" element={[<Header />, <Orders />]}></Route>
          <Route path="/Checkout" element={[<Header />, <Checkout />]}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route
            path="/payment"
            element={[
              <Header />,
              <Elements stripe={promise}>
                <Payment />
              </Elements>,
            ]}
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
