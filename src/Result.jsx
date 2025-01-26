import React, { useState, useEffect } from "react";
import axios from "axios";
import ConfettiExplosion from "react-confetti-explosion";

const Result = () => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    axios.get("https://events-yv65.onrender.com/result").then((result) => {
      setInfo(result.data || []);
    });
  }, []);

  return (
    <>
      {/* Confetti Explosion */}
      <ConfettiExplosion
        force={0.8}
        duration={7000}
        particleCount={250}
        width={3600}
      />

      {/* Container for the Results Section */}
      <div className="allevents flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Results</h1>

        {/* Map Through Data */}
        {info?.length > 0 ? (
          <div className="flex flex-wrap justify-center items-start gap-8">
            {info.map((val, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg p-6 max-w-sm w-full"
              >
                <h3 className="text-lg font-semibold text-gray-700">
                  Category:
                </h3>
                <h2 className="text-xl font-bold text-gray-800 mb-4">
                  {val?.eventname}
                </h2>

                {/* Winners */}
                <div className="list-group">
                  <div className="list-group-item bg-green-100 text-green-800 rounded p-2 mb-2">
                    Winner: <strong>{val?.firstwinner}</strong>
                  </div>
                  <div className="list-group-item bg-yellow-100 text-yellow-800 rounded p-2 mb-2">
                    2nd: <strong>{val?.secondwinner}</strong>
                  </div>
                  <div className="list-group-item bg-gray-100 text-gray-800 rounded p-2">
                    3rd: <strong>{val?.thirdwinner}</strong>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex items-center justify-center text-gray-800 text-xl">
            No data found. Please check back later!
          </div>
        )}
      </div>

      {/* Congratulatory Message */}
      <div className="flex items-center justify-center bg-gray-800 text-white py-6">
        <h1 className="text-2xl font-bold">
          🎉🎉🎊🎊 Congratulations 🎉🎉🎊🎊
        </h1>
      </div>
    </>
  );
};

export default Result;
