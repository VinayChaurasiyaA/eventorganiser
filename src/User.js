import React from "react";

const User = ({ userDetails }) => {
  return (
    <div className="allevents">
      {/* <p>{userDetails}</p> */}
      {/* <h1>Hellow</h1> */}
      <div className="student-details">
        <p className="text-plain">UserId : {userDetails._id}</p>
        <div className="image">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUJt3kjJp8q750SzS-kr7cMITugGpEh-Vdq0NeWS4&s"
            alt="image"
          />
        </div>
        <h1>Profile : {userDetails.firstname}</h1>
        <p className="image">Date : {userDetails.date}</p>
        <p className="image">Gender : {userDetails.gender}</p>
        <p className="image">Username : {userDetails.username}</p>
        <p className="image">Year : {userDetails.year}</p>
        <p className="image">Email : {userDetails.email}</p>
        <p className="image">Contact : {userDetails.contact}</p>
        <h1 className="image">Events : </h1>
        {userDetails.event === null ? (
          <p>"No event registered"</p>
        ) : (
          <p className="image">{userDetails.event}</p>
        )}
      </div>
    </div>
  );
};

export default User;
