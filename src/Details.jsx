import React from "react";

const Details = ({ data }) => {
  return (
    <div className="ml-2">
      <h1>Details</h1>
      <div>
        <p>Username : vinu</p>
        <p>Category : sport</p>
        <p>Player : vinaynoob</p>
        <p>Selection : BasketBall</p>
        <p>College Name : Thakur College</p>
        {/* <h1>{data.username}</h1>
        <h1>{data.category}</h1> */}
      </div>
    </div>
  );
};

export default Details;
