import React, { useState, useEffect } from "react";
import axios from "axios";
import ConfettiExplosion from "react-confetti-explosion";

const Result = () => {
  const [info, setInfo] = useState({});
  useEffect(() => {
    axios.get("https://events-yv65.onrender.com/result").then((result) => {
      console.log(result.data);
      setInfo(result.data);
    });
  }, []);
  return (
    <>
      <ConfettiExplosion
        force={0.8}
        duration={7000}
        particleCount={250}
        width={3600}
      />
      <div className="allevents">
        <h1>Results</h1>
      </div>
      <div className="allevents">
        {/* map out the data and then show which event has the winner , second place and then 3rd place */}
        <div className="flex">
          <div className="flex wrap">
            {info?.length > 0
              ? info?.map((val) => (
                  <>
                    <div style={{ marginLeft: "10px" }} className="list-group">
                      <h3>Category:</h3>
                      <h2>{val?.eventname}</h2>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action active result"
                      >
                        Winner : <h1>{val?.firstwinner}</h1>
                      </a>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action result"
                      >
                        2nd : <h1>{val?.secondwinner}</h1>
                      </a>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action result"
                      >
                        3rd : <h1>{val?.thirdwinner}</h1>
                      </a>
                    </div>
                  </>
                ))
              : "No data Found"}
          </div>
        </div>
        {/* {console.log(data.firstwinner)} */}
      </div>
      <div className="allevents">
        <div className="ml-10 congo">
          <h1>🎉🎉🎊🎊 Congratualtions 🎉🎉🎊🎊 </h1>
        </div>
      </div>
    </>
  );
};

export default Result;
