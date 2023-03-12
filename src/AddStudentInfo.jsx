import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
  const [event, setevent] = useState("");
  const [Cname, setName] = useState("");
  const [username, setUserName] = useState("");
  const [collegename, setCollegeName] = useState("");
  const [id, setId] = useState("");
  const [selection, setSelection] = useState();
  const navigate = useNavigate();
  const [player1, setPlayerName] = useState("");
  const [player2, setPlayerName2] = useState("");
  const [player3, setPlayerName3] = useState("");
  const [player4, setPlayerName4] = useState("");
  const [player5, setPlayerName5] = useState("");

  const handleOnSubmit = () => {
    //todo
  }

  return (
    <>
      <MDBContainer fluid>
        <MDBRow className="d-flex justify-content-center align-items-center">
          <MDBCol lg="8">
            <MDBCard className="my-2 rounded-3" style={{ maxWidth: "600px" }}>
              <MDBCardImage
                src={`https://unsplash.com/s/photos/${data[0]?.eventname}-event`}
                className="w-100 rounded-top"
                alt="Sample photo"
              />

              <MDBCardBody className="px-2">
                <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">
                  {data[0]?.eventname}
                </h3>
                <MDBInput
                  wrapperClass="mb-4"
                  id="form1"
                  type="text"
                  name="name"
                  placeholder="Enter Contigent name"
                  onChange={(e) => setName(e.target.value)}
                />
                <MDBInput
                  wrapperClass="mb-4"
                  id="form1"
                  type="text"
                  name="college"
                  onChange={(e) => setCollegeName(e.target.value)}
                  placeholder="Contigent Leader"
                />
                <MDBInput
                  wrapperClass="mb-4"
                  id="form1"
                  type="text"
                  placeholder="Username"
                  name="username"
                  onChange={(e) => setUserName(e.target.value)}
                />
                <h3>Player</h3>
                <MDBInput
                  wrapperClass="mb-4"
                  id="form1"
                  type="text"
                  name="name"
                  placeholder="Enter your Player1 name"
                  onChange={(e) => setPlayerName(e.target.value)}
                />
                <MDBInput
                  wrapperClass="mb-4"
                  id="form1"
                  type="text"
                  name="name"
                  placeholder="Enter your Player2 name"
                  onChange={(e) => setPlayerName2(e.target.value)}
                />
                <MDBInput
                  wrapperClass="mb-4"
                  id="form1"
                  type="text"
                  name="name"
                  placeholder="Enter your Player3 name"
                  onChange={(e) => setPlayerName3(e.target.value)}
                />
                <MDBInput
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
                </MDBRow>

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
