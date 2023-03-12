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

const AddStudentInfo = (data) => {
  const [event, setEvent] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [place, setPlace] = useState("");
  const [eventType, setEventType] = useState("");
  const navigate = useNavigate();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const newData = [
      {
        date: date,
        description: description,
        eventname: event,
        place: place,
      },
    ];
    const anotherData = [
      {
        eventname: event,
        description: description,
        category: eventType,
      },
    ];
    // console.log(newData , anotherData)
    //todo
    // on handlesubmit the data will go in 2 type of slabs which are 1 event and another more event
    axios.post("http://localhost:5000/adminevent", newData).then((result) => {
      console.log(result);
    });
    axios.post("http://localhost:5000/admineventmore", anotherData).then((result) => {
      console.log(result);
      if (result.status === 200) {
        alert("done");
      }
    });
  };

  return (
    <>
      <MDBContainer fluid>
        <MDBRow className="d-flex justify-content-center align-items-center">
          <MDBCol lg="8">
            <MDBCard className="my-2 rounded-3" style={{ maxWidth: "600px" }}>
              <MDBCardBody className="px-2">
                <MDBInput
                  wrapperClass="mb-4"
                  id="form1"
                  type="text"
                  name="name"
                  placeholder="Enter eventname like sport , dance , technical"
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
                  placeholder="description"
                  name="description"
                  onChange={(e) => setDescription(e.target.value)}
                />
                <MDBInput
                  wrapperClass="mb-4"
                  id="form1"
                  type="text"
                  name="place"
                  placeholder="place"
                  onChange={(e) => setPlace(e.target.value)}
                />
                <MDBInput
                  wrapperClass="mb-4"
                  id="form1"
                  type="text"
                  name="name"
                  placeholder="What is the event like : basketball, volleyball"
                  onChange={(e) => setEventType(e.target.value)}
                />
                {/* <MDBInput
                  wrapperClass="mb-4"
                  id="form1"
                  type="text"
                  name="name"
                  placeholder="Enter your Player4 name"
                  onChange={(e) => setPlayerName4(e.target.value)}
                />
                <MDBInput
                  wrapperClass="mb-4"
                  id="form1"
                  type="text"
                  name="name"
                  placeholder="Enter your Player5 name"
                  onChange={(e) => setPlayerName5(e.target.value)}
                />
                <MDBInput
                  wrapperClass="mb-4"
                  id="form1"
                  type="text"
                  name="name"
                  // placeholder="Enter your Player5 name"
                //   value={eventName}
                  // selection={eventName}
                  // onChange={(e) => setSelection(e.target.value)}
                />
                <MDBRow>
                  <MDBCol className="pt-2" md="6">
                    <MDBInput
                      wrapperClass="mb-4"
                      label="CollegeId code"
                      id="form3"
                      type="text"
                      name="collegeId"
                      onChange={(e) => setId(e.target.value)}
                    />
                  </MDBCol>
                </MDBRow> */}

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

export default AddStudentInfo;
