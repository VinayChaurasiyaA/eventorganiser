import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { Link } from "react-router-dom";
import Details from "./Details";
import AddStudentInfo from "./AddStudentInfo";

const AdminPanel = () => {
  const [addInfo, setAddInfo] = useState(false);
  const [myDetails, setMyDetails] = useState(true);
  const [changePass, setChangePass] = useState(false);
  const [data, getData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/admin").then((res)=> {
        console.log(res);
        getData(res);
    })
  }, []);
  const [event, setEvent] = useState("");
//   const navigate = useNavigate();
//   const handleOnClick = (e) => {
//     e.preventDefault();
//     navigate("/userdetails");
//   };

  return (
    <div className="flex">
      <div className="sidebar justify-self-start  px-4 w-[300px] h-screen overflow-y-auto text-center bg-gray-800">
        <div className="text-gray-100 text-xl">
          <div className="p-2.5 mt-1 flex items-center">
            <i className="bi bi-app-indicator px-2 py-1 rounded-md bg-blue-600" />
            <h1 className="font-bold text-gray-200 text-[15px] ml-3">
              Admin Panel
            </h1>
          </div>
          <div className="my-2 bg-gray-400 h-[1px]" />
          <div className=" grid grid-cols-2 gap-1 p-4 w-full h-26 bg-gray-100 rounded-md ">
            <span className="text-[15px] ml-4 text-gray-700 font-bold">
              Name
            </span>
            <span className=" font-bold ml-1 text-[12px] bg-blue-500 px-4 py-1 rounded-full text-slate-100">
              Admin
            </span>
          </div>
        </div>

        <button
          className=" w-full p-2.5 mt-8 flex items-center rounded-md px-4 duration-300 cursor-pointer bg-gray-700 hover:bg-blue-600 text-black"
          onClick={() => {
            setMyDetails(true);
            setAddInfo(false);
            setChangePass(false);
          }}
        >
          <span className="text-[15px] ml-4 text-gray-200 font-bold">
            My details
          </span>
        </button>
        {/* <div
          className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer bg-gray-700 hover:bg-red-400 text-black"
          onClick={() => {
            setChangePass(true);
            setMyDetails(false);
            setAddInfo(false);
          }}
        >
          <span className="text-[15px] ml-4 text-gray-200 font-bold">
            Change Password
          </span>
        </div> */}
        <div
          className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer bg-gray-700 hover:bg-green-500 text-black"
          onClick={() => {
            setAddInfo(true);
            setMyDetails(false);
            // setChangePass(false);
          }}
        >
          <span className="text-[15px] ml-4 text-gray-200 font-bold">
            Add Info
          </span>
        </div>
        <Link to="/">
          <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer bg-gray-500 hover:bg-red-400 text-black">
            <i className="bi bi-box-arrow-in-right" />
            <span className="text-[15px] ml-4 text-gray-200 font-bold">
              Logout
            </span>
          </div>
        </Link>
      </div>

      {myDetails && (
        <div>
          {/* BOX 01 */}
          {<Details />}
          {/* <div className="mx-2 bg-gray-100 rounded-xl border-2  border-gray-200 flex flex-col ">
            <div className="bg-gray-100  flex justify-center items-center">
              <p className="text-xl font-bold text-gray-800">All resgister details</p>
            </div>
            <div className="bg-blue-200 flex justify-center items-center">
              <p className=" font-bold text-6xl text-blue-600">
                {data.room_number}
              </p>
            </div>
          </div> */}
          
          {/* <div className="w-80 h-2/4 mx-2 bg-gray-100 rounded-xl border-2  border-gray-200 flex flex-col ">
            <div className="bg-gray-100 h-1/4 flex justify-center items-center">
              <p className="text-xl font-bold text-gray-800">Room Type</p>
            </div>
            <div className="bg-yellow-200 h-3/4 flex justify-center items-center">
              <p className=" font-bold text-6xl text-yellow-600">
                {data.room_type}
              </p>
            </div>
          </div>
          
          <div className="w-80 h-2/4 mx-2 bg-gray-100 rounded-xl border-2  border-gray-200 flex flex-col ">
            <div className="bg-gray-100 h-1/4 flex justify-center items-center">
              <p className="text-xl font-bold text-gray-800">College ID</p>
            </div>
            <div className="bg-green-200 h-3/4 flex justify-center items-center">
              <p className=" font-bold text-6xl text-green-600">
                {data.collegeId}
              </p>
            </div>
          </div> */}
        </div>
      )}

      {addInfo && <AddStudentInfo/>}
    </div>
  );
};

export default AdminPanel;
