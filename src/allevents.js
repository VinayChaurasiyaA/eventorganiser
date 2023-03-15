import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import mindevent from "./Images/mindevent.jpg";
import informalevent from "./Images/informalevent.jpg";
import sportevent from "./Images/sportevent.jpg";
import finearts from "./Images/finearts.jpg";
import technicalevent from "./Images/technicalevent.jpg";
import performingevent from "./Images/performingevent.jpg";
function GroupExample({ setEventId, eventId, setEventName, eventName }) {
  const [events, setEvents] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    axios.get("http://localhost:5000/allevents").then((res) => {
      console.log(res.data[0].eventname);
      setEvents(res.data);
      setEventName(res?.data[0]?.eventname);
    });
  }, []);
  const handlOnClick = (e , eventname , id) => {
    // Todo
    // axios.get("http://localhost:5000/event-register").then((res) => {
    //   console.log()
    // })
    setEventName(eventname)
    setEventId(id);
    console.log(id);
    navigate(`/more-events/${eventname}`);
  };
  // const image = (eventname) => {
  //   console.log(eventname)
  //   return `${eventname.toLowerCase().concat("event")}.jpg`;
  // };
  return (
    <>
      {console.log(events.length)}
      <div className="allevents event-container">
        {events.length > 0
          ? events.map((event) => (
              <div className="shift ">
                <div className={`firstcard-${event.id} cards`}>
                  <Card style={{ width: "26rem" }}>
                    {/* <Card.Img variant="top" src={`${event.eventname.toLowerCase()}event`.jpg} height="300px" /> */}
                    <Card.Img
                      variant="top"
                      src={sportevent}
                      height="300px"
                    />
                    {console.log(event.eventname.toLowerCase().concat("event"))}
                    <Card.Body className="cardbody">
                      <Card.Title className="cardtitle">
                        Event Name : {event.eventname}
                      </Card.Title>
                      <Card.Title className="cardtitle">
                        Date : {event.date}
                      </Card.Title>
                      <Card.Title className="cardtitle">
                        Location : {event.place}
                      </Card.Title>

                      <Card.Text className="cardtext">
                        {event.description}
                      </Card.Text>
                      <Button
                        variant="primary"
                        onClick={(e) => handlOnClick(e , event.eventname , event.id)}
                      >
                        ENROLL
                      </Button>
                    </Card.Body>
                  </Card>
                </div>
              </div>
            ))
          : "No events Found"}
      </div>
    </>
  );
}

export default GroupExample;
