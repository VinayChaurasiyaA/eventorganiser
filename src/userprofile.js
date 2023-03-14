import axios from "axios";
import React , {useState , useEffect} from "react";
import { Link } from "react-router-dom";

const userprofile = ({ userDetails  , data}) => {
  return (
    <div className="ml-10">
      <div className="student-details">
        <p className="text-plain image">UserId : {userDetails?._id}</p>
        
        <h1 className="image">Profile : {userDetails?.firstname}</h1>
        <p className="image">Date : {userDetails?.date}</p>
        <p className="image">Gender : {userDetails?.gender}</p>
        <p className="image">Username : {userDetails?.username}</p>
        <p className="image">Year : {userDetails?.year}</p>
        <p className="image">Email : {userDetails?.email}</p>
        <p className="image">Contact : {userDetails?.contact}</p>
        <h1 className="image">Events : </h1>

        {data?.category === null ? (
          <p>"No event registered"</p>
        ) : (
          <p className="image">{data}</p>
        )}
      </div>
    </div>
  );
};
export default userprofile;
