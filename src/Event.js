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

const Event = ({ eventId, uniqueEvent, eventName }) => {
  const [Cname, setName] = useState("");
  const [username, setUserName] = useState("");
  const [collegename, setCollegeName] = useState("");
  const [id, setId] = useState("");
  const [selection, setSelection] = useState(eventName);
  const navigate = useNavigate();
  const [player1, setPlayerName] = useState("");
  const [player2, setPlayerName2] = useState("");
  const [player3, setPlayerName3] = useState("");
  const [player4, setPlayerName4] = useState("");
  const [player5, setPlayerName5] = useState("");

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
        Cname,
        username,
        collegename,
        id,
        selection,
        player1,
        player2,
        player3,
        player4,
        player5,
      },
    ];
    console.log(data);
    axios.post("http://localhost:5000/event", data).then((result) => {
      console.log(result.status);
      if (result.status === 200) {
        alert("Done registration");
         navigate("/");
      }
      else {
        console.log(result)
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
                  src={`https://unsplash.com/s/photos/${data[0]?.eventname}-event`}
                  className="w-100 rounded-top"
                  alt="Sample photo"
                />

                <MDBCardBody className="px-5">
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
                    value={eventName}
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
      </div>
    </>
  );
};

export default Event;
