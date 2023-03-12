import React from "react";
import { Link } from "react-router-dom";
const User = ({ userDetails }) => {
  return (
    <div className="allevents">
      {/* <p>{userDetails}</p> */}
      {/* <h1>Hellow</h1> */}
      <div className="student-details">
        <p className="text-plain image">UserId : {userDetails._id}</p>
        <div className="image">
          <img
            src="https://w7.pngwing.com/pngs/148/892/png-transparent-computer-icons-user-symbol-light-client-icon-service-computer-orange.png"
            alt="image"
          />
        </div>
        <h1 className="image">Profile : {userDetails.firstname}</h1>
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
        <Link to="/">
          <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer bg-gray-500 hover:bg-red-400 text-black">
            <i className="bi bi-box-arrow-in-right" />
            <button className="btn primary">
              Logout
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default User;
