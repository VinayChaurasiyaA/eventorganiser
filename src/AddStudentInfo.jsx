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

  const [eventData, setEventData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:5000/all").then((res) => {
      console.log(res.data);
      setEventData(res.data);
    });
  }, []);
  const handleOnClick = (e, _id) => {
    e.preventDefault();
    console.log("clicked on : " + _id);
    axios.delete(`http://localhost:5000/event-remove/${_id}`).then((result) => {
      console.log(result?.data?.messsage);
      console.log(result.data?.messsage);
      if (result.data.messsage === "Success") {
        alert("Done, event deleted");
      }
    });
  };
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
    axios
      .post("http://localhost:5000/admineventmore", anotherData)
      .then((result) => {
        console.log(result);
      });
  };

  return (
    <>
      {/* <MDBContainer > */}
      <div className="width-inc">
        <MDBRow className="d-flex justify-content-center align-items-center">
          <MDBCol lg="8">
            <MDBCard className="my-2 rounded-3" style={{ maxWidth: "600px" }}>
              <MDBCardBody className="px-2">
                <MDBInput
                  wrapperClass="mb-4"
                  id="form1"
                  type="text"
                  name="name"
                  placeholder="Enter eventname like Sport , Dance , Technical"
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
      </div>
      {/* </MDBContainer> */}
      {/* <div></div> */}
      <div class="relative overflow-x-auto">
        <table class=" w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              {/* <th scope="col" class="px-6 py-3">
                Description
              </th> */}
              <th scope="col" class="px-6 py-3">
                Category
              </th>
              <th scope="col" class="px-6 py-3">
                eventname
              </th>
              <th scope="col-2" class="px-6 py-3">
                Delete
              </th>
              {/* <th scope="col" class="px-6 py-3">
                player1
              </th>
              <th scope="col" class="px-6 py-3">
                player2
              </th>
              <th scope="col" class="px-6 py-3">
                player3
              </th>
              <th scope="col" class="px-6 py-3">
                player4
              </th>
              <th scope="col" class="px-6 py-3">
                player5
              </th> */}
            </tr>
          </thead>
          <tbody>
            {eventData.length > 0
              ? eventData.map((val) => (
                  <>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      {/* <th
                        scope="row"
                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black"
                      >
                        {val?.description.slice(0 , 5)}
                      </th> */}
                      <td className="px-6 py-4 dark:text-black">
                        {val?.category}
                      </td>
                      <td class="px-6 py-4 dark:text-black">
                        {val?.eventname}
                      </td>
                      <td class="px-6 py-4 dark:text-black">
                        <button
                          className="border border-danger"
                          onClick={(e) => handleOnClick(e, val?._id)}
                        >
                          Delete
                        </button>
                      </td>
                      {/* <td class="px-6 py-4 dark:text-black">{val?.player2}</td>
                      <td class="px-6 py-4 dark:text-black">{val?.player3}</td>
                      <td class="px-6 py-4 dark:text-black">{val?.player4}</td>
                      <td class="px-6 py-4 dark:text-black">{val?.player5}</td> */}
                    </tr>
                  </>
                ))
              : "No data entried"}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AddStudentInfo;
