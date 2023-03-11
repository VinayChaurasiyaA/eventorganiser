import React, { useState, useEffect } from "react";
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

const Event = ({ eventId  , uniqueEvent}) => {
  const [name, setName] = useState("");
  const [username, setUserName] = useState("");
  const [collegename, setCollegeName] = useState("");
  const [id, setId] = useState("");
  const [selection, setSelection] = useState("");
  const navigate = useNavigate();

  const [data, setData] = useState({});
  useEffect(() => {
    axios.get(`http://localhost:5000/${eventId}`).then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  }, []);
  const handleOnSubmit = (e) => {
    //todo
    e.preventDefault();
    // console.log(name, username, collegename, id);
    const data = [
      {
        name,
        username,
        collegename,
        id,
        selection,
      },
    ];
    console.log(data);
    axios.put("http://localhost:5000/event", data).then((result) => {
      console.log(result.status);
      if (result.status === 200) {
        alert("Done registration");
        // navigate("/");
      }
    });
    console.log(data);
  };
  return (
    <>
      <div className="allevents">
        <div>
          {console.log(data)}
          {console.log(data[0]?.eventname)}
          {/* <h1></h1> */}
        </div>
        <MDBContainer fluid>
          <MDBRow className="d-flex justify-content-center align-items-center">
            <MDBCol lg="8">
              <MDBCard className="my-5 rounded-3" style={{ maxWidth: "600px" }}>
                <MDBCardImage
                  src={`https://unsplash.com/s/photos/${data[0]?.eventname}`}
                  className="w-100 rounded-top"
                  alt="Sample photo"
                />

                <MDBCardBody className="px-5">
                  <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">
                    {data[0]?.eventname}
                  </h3>
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Name"
                    id="form1"
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    onChange={(e) => setName(e.target.value)}
                  />
                  <MDBInput
                    wrapperClass="mb-4"
                    label="College Name"
                    id="form1"
                    type="text"
                    name="college"
                    onChange={(e) => setCollegeName(e.target.value)}
                    placeholder="College Name"
                  />
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Username"
                    id="form1"
                    type="text"
                    placeholder="Username"
                    name="username"
                    onChange={(e) => setUserName(e.target.value)}
                  />

                  <MDBRow>
                    <MDBCol md="6">
                      <select
                        class="form-select"
                        aria-label="Default select example"
                        name="selection"
                        onChange={(e) => setSelection(e.target.value)}
                      >
                        <option selected>Register In event</option>
                        <option>BasketBall</option>
                        <option>Kabadi</option>
                        <option>KHOKHO</option>
                      </select>
                    </MDBCol>
                  </MDBRow>
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
                    Submit
                  </MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    </>
  );
};

export default Event;
