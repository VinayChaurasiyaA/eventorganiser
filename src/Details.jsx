import React from "react";

const Details = ({ data }) => {
  return (
    <div className="ml-2 ">
      <h1>Details</h1>
      <div className="flex">
        <div>
          {data.length > 0
            ? data.map((val) => (
                <>
                  <div key={val.category}>
                    <p>{val.username}</p>
                    <p>{val.leader}</p>
                    <p>{val.category}</p>
                    <p>{val.collegeId}</p>
                  </div>
                </>
              ))
            : "No Entries made"}
        </div>
      </div>
    </div>
  );
};

export default Details;
