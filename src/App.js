//import logo from './logo.svg';
import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidenav from "./sidenav";
import Homepage from "./homepage";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import About from "./about";
import Allevents from "./allevents";
import Footer from "./footer";
import Topevents from "./topevents";
import Signup from "./signup";
import PRDesk from "./prdesk";
import Login from "./login";
import User from "./User";
import { useState } from "react";

function App() {
  const [userDetails, setUserDetails] = useState({});
  return (
    <div>
      <BrowserRouter>
        <Sidenav></Sidenav>
        <Routes>
          <Route path="/" exact element={<Homepage />} />
          <Route path="/about us" exact element={<About />} />
          <Route path="/allevents" exact element={<Allevents />} />
          <Route path="/topevents" exact element={<Topevents />} />
          <Route path="/signup" exact element={<Signup />} />
          <Route path="/prdesk" exact element={<PRDesk />} />
          <Route
            path="/login"
            exact
            element={<Login setUserDetails={setUserDetails} />}
          />
          {userDetails.length !== 0 ? (
            <Route
              path="/user"
              exact
              element={<User userDetails={userDetails} />}
            />
          ) : (
            <Route path="/signup" exact element={<Signup />} />
          )}
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
