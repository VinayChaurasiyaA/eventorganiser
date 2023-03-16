import React from "react";

const Cards = ({data}) => {
  return (
    <div className="flex mt-8 ml-24 justify-center w-3/4 h-auto flex-wrap ">
      {/* BOX 01 */}
      <div className="w-80 h-2/4 mx-2 bg-gray-100 rounded-xl border-2  border-gray-200 flex flex-col ">
        <div className="bg-gray-100 h-1/4 flex justify-center items-center">
          <p className="text-xl font-bold text-gray-800">Total Registration</p>
        </div>
        <div className="bg-blue-200 h-3/4 flex justify-center items-center">
          <p className=" font-bold text-6xl text-blue-600">
            {data.length + 1}
          </p>
        </div>
      </div>
      {/* BOX 02 */}
      <div className="w-80 h-2/4 mx-2 bg-gray-100 rounded-xl border-2  border-gray-200 flex flex-col ">
        <div className="bg-gray-100 h-1/4 flex justify-center items-center">
          <p className="text-xl font-bold text-gray-800">Total Events</p>
        </div>
        <div className="bg-yellow-200 h-3/4 flex justify-center items-center">
          <p className=" font-bold text-6xl text-yellow-600">
            {14}
          </p>
        </div>
      </div>
      {/* BOX 03 */}
      <div className="w-80 h-2/4 mx-2 bg-gray-100 rounded-xl border-2  border-gray-200 flex flex-col ">
        <div className="bg-gray-100 h-1/4 flex justify-center items-center">
          <p className="text-xl font-bold text-gray-800">Total Players</p>
        </div>
        <div className="bg-green-200 h-3/4 flex justify-center items-center">
          <p className=" font-bold text-6xl text-green-600">
            {(data.length + 1) * 5}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
