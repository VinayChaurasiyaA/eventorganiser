import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBInput,
} from "mdb-react-ui-kit";
const Results = () => {
  const [event, setEvent] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");

  const [eventType, setEventType] = useState("");

  const navigate = useNavigate();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const data = [
      {
        eventname: event,
        firstwinner: date,
        secondwinner: description,
        thirdwinner: eventType,
      },
    ];
    console.log(data);
    axios.post("https://events-yv65.onrender.com00/result", data).then((result) => {
      console.log(result);
      if (result.status === 200) {
        alert("done, result added");
      }
    });
  };
  return (
    <>
      <MDBContainer fluid>
        <MDBRow className="d-flex justify-content-center align-items-center width-inc">
          <MDBCol lg="8">
            <MDBCard className="my-2 rounded-3">
              <MDBCardBody className="px-2">
                <MDBInput
                  wrapperClass="mb-4"
                  id="form1"
                  type="text"
                  name="eventname"
                  placeholder="Enter event name"
                  onChange={(e) => setEvent(e.target.value)}
                />
                <MDBInput
                  wrapperClass="mb-4"
                  id="form1"
                  type="text"
                  name="firstwinner"
                  onChange={(e) => setDate(e.target.value)}
                  placeholder="firstwinner"
                />
                <MDBInput
                  wrapperClass="mb-4"
                  id="form1"
                  type="text"
                  placeholder="secondwinner"
                  name="secondwinner"
                  onChange={(e) => setDescription(e.target.value)}
                />
                {/* <MDBInput
                wrapperClass="mb-4"
                id="form1"
                type="password"
                name="password"
                placeholder="password"
                onChange={(e) => setPlace(e.target.value)}
              />
              <MDBInput
                wrapperClass="mb-4"
                id="form1"
                type="password"
                name="password"
                placeholder="Confirm password"
                onChange={(e) => setConfirm(e.target.value)}
              /> */}
                <MDBInput
                  wrapperClass="mb-4"
                  id="form1"
                  type="text"
                  name="thirdwinner"
                  placeholder="thirdwinner"
                  onChange={(e) => setEventType(e.target.value)}
                />
                <MDBBtn
                  color="success"
                  className="mb-4"
                  size="lg"
                  onClick={handleOnSubmit}
                >
                  Register
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
};

// const adminevent = new MoreEvents({
//     eventname: req.body[0].category,
//     category: req.body[0].eventname,
//     description: req.body[0].description,
//   });
//   const moreEvents = adminevent.save();
//   res.status(200).send("ok");
export default Results;
