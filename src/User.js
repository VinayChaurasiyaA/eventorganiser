import React, { useState , useEffect} from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import Userprofile from "./Userprofile";
const User = ({ userDetails }) => {
  const [addInfo, setAddInfo] = useState(false);
  const [myDetails, setMyDetails] = useState(true);
  const [changePass, setChangePass] = useState(false);
  const [data, getData] = useState({});

  useEffect(() => {
    axios.get(`https://events-yv65.onrender.com/${userDetails?.username}`).then((result) => {
      // console.log(result.data);
      getData(result.data);
    })
  } , []);
  return (
    <div className="flex allevents">
      <div className="sidebar justify-self-start  px-4 w-[300px] h-screen overflow-y-auto text-center bg-gray-800">
        <div className="text-gray-100 text-xl">
          <div className="p-2.5 mt-1 flex items-center">
            <i className="bi bi-app-indicator px-2 py-1 rounded-md bg-blue-600" />
            <h1 className="font-bold text-gray-200 text-[15px] ml-3">
              Student Panel
            </h1>
          </div>
          <div className="my-2 bg-gray-400 h-[1px]" />
          <div className=" grid grid-cols-2 gap-1 p-4 w-full h-26 bg-gray-100 rounded-md ">
            <span className="text-[15px] ml-4 text-gray-700 font-bold">
              Name
            </span>
            <span className=" font-bold ml-1 text-[12px] bg-blue-500 px-4 py-1 rounded-full text-slate-100">
              Student
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
            Student details
          </span>
        </button>
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
          {console.log(data)}
          {<Userprofile userDetails={userDetails} data={data}/>}
        </div>
      )}
    </div>
  );
};

export default User;
