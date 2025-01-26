import React from "react";

const TeamMembers = ({ team }) => {
  return (
    <div>
      {team.map((person, index) => {
        return (
          <div key={index} className="font-semibold text-xl">
            <span>{person.position}</span> - <span>{person.name}</span>
          </div>
        );
      })}
    </div>
  );
};

export default TeamMembers;
