import React, { useState, useEffect } from "react";
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

const Event = ({ eventId }) => {
  const [data, setData] = useState({});
  useEffect(() => {
    axios.get(`http://localhost:5000/${eventId}`).then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  }, []);
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
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img3.webp"
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
                    placeholder="Enter your name"
                  />
                  <MDBInput
                    wrapperClass="mb-4"
                    label="College Name"
                    id="form1"
                    type="text"
                    placeholder="College Name"
                  />
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Username"
                    id="form1"
                    type="text"
                    placeholder="Username"
                  />

                  <MDBRow>
                    <MDBCol md="6">
                      <MDBInput
                        wrapperClass="datepicker mb-4"
                        label="Register in event"
                        id="form2"
                        type="text"
                      />
                    </MDBCol>
                  </MDBRow>
                  <MDBRow>
                    <MDBCol md="6">
                      <MDBInput
                        wrapperClass="mb-4"
                        label="CollegeId code"
                        id="form3"
                        type="text"
                      />
                    </MDBCol>
                  </MDBRow>

                  <MDBBtn color="success" className="mb-4" size="lg">
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
