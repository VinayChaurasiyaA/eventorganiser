//import logo from './logo.svg';
import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidenav from "./sidenav";
import Homepage from "./homepage";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useState } from "react";

import About from "./about";
import Allevents from "./allevents";
import Footer from "./footer";
import Topevents from "./topevents";
import Signup from "./signup";
import PRDesk from "./prdesk";
import Login from "./login";
import User from "./User";
import MoreEvents from "./MoreEvents";
import Event from "./Event";
import AdminPanel from "./AdminPanel";
import Teacher from "./Teacher";
import Result from "./Result";
import Controller from "./Controller";

function App() {
  // instead of doing this I can use context api
  const [userDetails, setUserDetails] = useState({});
  const [eventId, setEventId] = useState();
  const [eventName, setEventName] = useState("");
  const [uniqueEvent, setUniqueEvent] = useState();

  return (
    <div>
      <BrowserRouter>
        <Sidenav></Sidenav>
        <Routes>
          <Route path="/" exact element={<Homepage />} />
          <Route path="/about-us" exact element={<About />} />
          <Route
            path="/allevents"
            exact
            element={
              <Allevents
                setEventId={setEventId}
                eventId={eventId}
                setEventName={setEventName}
                eventName={eventName}
              />
            }
          />
          <Route path="/admin" exact element={<Controller />} />
          <Route path="/teacher" exact element={<Teacher />} />
          <Route
            path="/topevents"
            exact
            element={
              <Topevents
                setEventId={setEventId}
                eventId={eventId}
                setEventName={setEventName}
                eventName={eventName}
              />
            }
          />
          <Route path="/signup" exact element={<Signup />} />
          <Route path="/prdesk" exact element={<PRDesk />} />
          <Route path="/result" exact element={<Result />} />
          <Route path="/adminspanel" exact element={<AdminPanel />} />
          <Route
            path={`/more-events/${eventName}`}
            exact
            element={
              <MoreEvents
                eventId={eventId}
                setEventName={setEventName}
                eventName={eventName}
                setUniqueEvent={setUniqueEvent}
              />
            }
          />
          <Route
            path={`/${eventId}`}
            exact
            element={
              <Event
                eventId={eventId}
                uniqueEvent={uniqueEvent}
                eventName={eventName}
              />
            }
          />
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
