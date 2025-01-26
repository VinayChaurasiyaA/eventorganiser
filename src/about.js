import React from "react";
import trophy from "./Images/trophy.jpg";
import TeamMembers from "./Team";

// TODO: create a object where a position and name of each person is given
const team = [
  {
    position: "Chairperson",
    name: "Deep Rajput",
  },
  {
    position: "Advisory Head",
    name: "Shubham Rai",
  },
  {
    position: "Vice-Chairperson",
    name: "Jeet Thakkar",
  },
  {
    position: "Vice-Chairperson",
    name: "Priyaal Rachn",
  },
  {
    position: "Vice-Chairperson",
    name: "Harsh Mehta",
  },
];
export default function About() {
  return (
    // <div className="aboutus">
    //   <img src="https://byensnyt.dk/wp-content/uploads/2020/02/party456.jpg" alt="bg" className="h-full w-full -z-10 absolute" />
    //   <h1 className="aboutheading">ABOUT PRARAMBH</h1>
    //   <div className="aboutpara">
    //     <p>
    //       Prarambh has always been a platform to showcase talent and witness the
    //       telents among the students. And hence we aim to ignite your creativity
    //       by providing libreal space for artists with creative fluidity which
    //       also demands confident interaction with the masses. Talent is the
    //       miner that works and brings it out.
    //     </p>
    //   </div>
    //   <div>
    //     <p className="chairperson"> CHAIRPERSON</p>
    //     <p className="chairpersonname">DEEP RAJPUT</p>
    //     <p className="advisoryhead">ADVISORY HEAD</p>
    //     <p className="advisoryheadname">SHUBHAM RAI</p>
    //     <p className="vicechairperson"> VICE-CHAIRPERSON</p>
    //     <p className="vicechairpersonname1"> JEET THAKKAR</p>
    //     <p className="vicechairpersonname2"> PRIYAAL RACHN</p>
    //     <p className="vicechairpersonname3"> HARSH MEHTA</p>
    //   </div>
    // </div>

    <div className="bg-custom-gradient h-screen w-full relative">
      <div className="text-white flex items-center  justify-center h-full">
        <h1 className="text-3xl font-bold text-black left-[60rem] absolute">
          ABOUT PRARAMBH!{" "}
        </h1>
        <div className="text-black font-semibold max-w-[30rem] absolute top-[35rem] right-[30rem]">
          <p>
            Prarambh has always been a platform to showcase talent and witness
            the telents among the students. And hence we aim to ignite your
            creativity by providing libreal space for artists with creative
            fluidity which also demands confident interaction with the masses.
            Talent is the miner that works and brings it out.
          </p>
        </div>

        <div className="text-black font-semibold max-w-[30rem] absolute top-[5rem] right-[20rem]">
          <TeamMembers team={team} />
        </div>
      </div>
    </div>
  );
}
