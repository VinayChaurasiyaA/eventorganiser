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

const AddDetails = () => {
  const [event, setEvent] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [place, setPlace] = useState("");
  const [eventType, setEventType] = useState("");
  const [confirm , setConfirm] = useState("");
  const navigate = useNavigate();
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const newData = {
      username : description,
      password : place , 
      cpassword : confirm,
      role : eventType ,
      firstname : event
    };
    // console.log(newData , anotherData)
    //todo
    // on handlesubmit the data will go in 2 type of slabs which are 1 event and another more event
    axios.post("http://localhost:5000/register", newData).then((result) => {
      console.log(result);
      if(result.data === "ok") {
        alert("Done registration");
      }
    });
  };
  return (
    <>
      <MDBContainer fluid>
        <MDBRow className="d-flex justify-content-center align-items-center width-inc" >
          <MDBCol lg="8">
            <MDBCard className="my-2 rounded-3">
              <MDBCardBody className="px-2">
                <MDBInput
                  wrapperClass="mb-4"
                  id="form1"
                  type="text"
                  name="name"
                  placeholder="Enter Name"
                  onChange={(e) => setEvent(e.target.value)}
                />
                <MDBInput
                  wrapperClass="mb-4"
                  id="form1"
                  type="text"
                  name="date"
                  onChange={(e) => setDate(e.target.value)}
                  placeholder="date"
                />
                <MDBInput
                  wrapperClass="mb-4"
                  id="form1"
                  type="text"
                  placeholder="username"
                  name="username"
                  onChange={(e) => setDescription(e.target.value)}
                />
                <MDBInput
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
                />
                <MDBInput
                  wrapperClass="mb-4"
                  id="form1"
                  type="text"
                  name="role"
                  placeholder="Role like Teacher , Student"
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

export default AddDetails;
