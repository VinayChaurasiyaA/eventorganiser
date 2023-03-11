import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const MoreEvents = ({ eventId, eventName, setEventName , setUniqueEvent}) => {
  const [data, setData] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    axios.get(`http://localhost:5000/more-events/${eventName}`).then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  }, []);
  const handleOnSubmit = ( e, id , eventname) => {
    e.preventDefault();
    setUniqueEvent(id);
    // todo 
    setEventName(eventname);
    navigate(`/${eventId}`);
  };
  return (
    <>
      {data?.length > 0
        ? data.map((val) => (
            <>
              <div className="allevents" key={val?._id}>
                <h1>{val?.category}</h1>
                <div class="col-sm-4">
                  <div class="card">
                    <div class="card-body">
                      <h5 class="card-title">{val?.eventname}</h5>
                      <p class="card-text">{val?.description}</p>

                      <button
                        onClick={(e) => handleOnSubmit(e , val._id , val.eventname)}
                        className="btn btn-primary"
                      >
                        Register
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ))
        : " No data found"}
    </>
  );
};

export default MoreEvents;
