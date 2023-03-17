import React, { useState, useEffect } from "react";
import axios from "axios";
import sport from "./Images/sportevent.jpg"
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
export default function Topevents({setEventId, eventId, setEventName, eventName}) {
  let newData = {};
  const [data, setData] = useState();
  const [another, setAnother] = useState();
  useEffect(() => {
    axios.get("http://localhost:5000/allevents").then((result) => {
      // console.log(result.data);
      setData(result.data[0]);
      setAnother(result.data[1]);
      // Object.assign(newData , result.data[0]);
      // Object.assign(newData , result.data[1]);
    });
  }, []);
  const navigate = useNavigate();
  const handlOnClick = (e , eventname , id) => {
    //todo
    setEventName(eventname)
    setEventId(id);
    console.log(id);
    navigate(`/more-events/${eventname}`);
  }
  return (
    <div className="allevents">
      {
        <>
          <div class="card mb-3" >
            <div class="row no-gutters">
              <div class="col-md-4">
                <img src={sport} class="card-img" alt="..." />
              </div>
              <div class="col-md-4">
                <div class="card-body">
                  <h3 class="card-title">{data?.eventname}</h3>
                  <h2 class="card-text">
                    {data?.description}
                  </h2>
                  <p className="card-title">
                    {data?.place}
                  </p>
                  <p className="card-text">
                    {data?.date}
                  </p>
                  <p className="card-title">
                    You can enroll in the event by clicking on the below button
                  </p>
                  <Button
                        variant="primary"
                        onClick={(e) => handlOnClick(e , data?.eventname , data?.id)}
                      >
                        ENROLL
                  </Button>
                  {/* <p class="card-text">
                    <small class="text-muted">Last updated 3 mins ago</small>
                  </p> */}
                </div>
              </div>
            </div>
          </div>
          <div class="card mb-3" >
            <div class="row no-gutters">
              <div class="col-md-4">
                <img src={sport} class="card-img" alt="..." />
              </div>
              <div class="col-md-4">
                <div class="card-body">
                  <h2 class="card-title">{another?.eventname}</h2>
                  <p class="card-text">
                    {another?.description}
                  </p>
                  <p className="card-title">
                    {another?.place}
                  </p>
                  <p className="card-text">
                    {data?.date}
                  </p>
                  <p className="card-title">
                    You can enroll in the event by clicking on the below button
                  </p>
                  <Button
                        variant="primary"
                        onClick={(e) => handlOnClick(e , another?.eventname , another?.id)}
                      >
                        ENROLL
                  </Button>
                  {/* <p class="card-text">
                    <small class="text-muted">Last updated 3 mins ago</small>
                  </p> */}
                </div>
              </div>
            </div>
          </div>
         
        </>
      }
    </div>
  );
}
