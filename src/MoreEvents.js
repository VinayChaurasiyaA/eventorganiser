import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const MoreEvents = ({ eventId, eventName, setEventName, setUniqueEvent }) => {
  const [data, setData] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    axios.get(`http://localhost:5000/more-events/${eventName}`).then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  }, []);
  const handleOnSubmit = (e, id, eventname) => {
    e.preventDefault();
    setUniqueEvent(id);
    // todo
    setEventName(eventname);
    navigate(`/${eventId}`);
  };
  return (
    <>
      <div className="allevents event-container ">
        <h1 className="card-title">{data?.category}</h1>
        {data?.length > 0
          ? data.map((val) => (
              <div className="general-container">
                <h1 class="card-title">{val?.eventname}</h1>
                {/* <h1>{val?.category}</h1> */}
                <div
                  style={{ width: "auto", height: "auto" }}
                  class="col-sm-6"
                >
                  <div class="card" style={{ width: "30rem", height: "auto" }}>
                    <div class="card-body">
                      <p class="card-text">{val?.description}</p>
                      <p className="card-text">{val?.description}</p>
                      <h3>Requirements: </h3>
                      <ul>
                        <li className="card-text">{val?.description}</li>
                        <li className="card-text">{val?.description}</li>
                        <li className="card-text">{val?.description}</li>
                      </ul>
                      <button
                        onClick={(e) =>
                          handleOnSubmit(e, val._id, val.eventname)
                        }
                        className="btn btn-primary"
                      >
                        Register
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          : " No data found"}
      </div>
    </>
  );
};

export default MoreEvents;
