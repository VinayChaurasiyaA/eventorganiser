import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import sport from "./Images/sportevent.jpg"; // Default image placeholder
import { Button } from "react-bootstrap";

export default function Topevents({
  setEventId,
  eventId,
  setEventName,
  eventName,
}) {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("https://events-yv65.onrender.com/allevents").then((result) => {
      setData(result.data || []);
    });
  }, []);

  const handleOnClick = (e, eventname, id) => {
    setEventName(eventname);
    setEventId(id);
    navigate(`/more-events/${eventname}`);
  };

  return (
    <div className="allevents min-h-screen py-5">
      <h1 className="text-center text-primary mb-5">Top Events</h1>
      <div className="row g-4">
        {data.length > 0 ? (
          data.map((event, index) => (
            <div key={index} className="col-lg-6">
              <EventCard
                event={{ ...event, image: sport }}
                onEnroll={(e) => handleOnClick(e, event.eventname, event.id)}
              />
            </div>
          ))
        ) : (
          <div className="col-12 mt-10 text-black text-center">
            No events found. Please check back later!
          </div>
        )}
      </div>
    </div>
  );
}

const EventCard = ({ event, onEnroll }) => {
  return (
    <div className="card mb-4 shadow-lg border-0">
      <div className="row no-gutters">
        {/* Event Image */}
        <div className="col-md-4">
          <img
            src={event.image || "https://via.placeholder.com/300"}
            className="card-img"
            alt={event.eventname || "Event"}
          />
        </div>
        {/* Event Details */}
        <div className="col-md-8 d-flex flex-column justify-content-center p-3">
          <div className="card-body">
            <h3 className="card-title text-primary fw-bold">
              {event.eventname}
            </h3>
            <p className="card-text text-muted">{event.description}</p>
            <p className="card-title">
              <strong>Place:</strong> {event.place}
            </p>
            <p className="card-text">
              <strong>Date:</strong> {event.date}
            </p>
            <p className="card-title text-secondary">
              You can enroll in the event by clicking on the button below.
            </p>
            <Button variant="primary" onClick={onEnroll}>
              Enroll
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
