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
function GroupExample({setEventId , eventId , setEventName , eventName}) {
  const [events, setEvents] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    axios.get("http://localhost:5000/allevents").then((res) => {
      console.log(res.data[0].eventname);
      setEvents(res.data);
      setEventName(res.data[0].eventname)
    });
  }, []);
  const handlOnClick = (id) => {
    // Todo
    // axios.get("http://localhost:5000/event-register").then((res) => {
    //   console.log()
    // })
    setEventId(id);
    console.log(id);
    navigate(`/more-events/${eventName}`);
  }
  return (
    <>
      {console.log(events.length)}
      {events.length > 0
        ? events.map((event) => (
            <div className="allevents" key={event._id}>
              <div className="shift">
                <div className={`firstcard-${event.id}`} >
                  <Card style={{ width: "26rem" }}>
                    <Card.Img variant="top" src={mindevent} height="300px" />
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
                      <Button variant="primary" onClick={() => handlOnClick(event.id)}>
                        ENROLL
                      </Button>
                    </Card.Body>
                  </Card>

                  <div className="sidedesc">
                    <div className="side">{event.description}</div>
                  </div>
                </div>
              </div>
            </div>
          ))
        : "No events Found"}
    </>
  );
}

export default GroupExample;
