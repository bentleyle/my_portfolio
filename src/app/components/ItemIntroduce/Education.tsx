import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
const Education = () => {
  return (
    <div className="p-4">
      <div className="text-white rounded-md leading-loose text-sm md:text-[16px]">
        <div className=" flex justify-between items-center">
          <span>
            <span className="text-[#0071ba] font-bold">F</span>
            <span className="text-[#f38218] font-bold">P</span>
            <span className="text-[#70bf42] font-bold">T</span> Polytechnic
            College
          </span>{" "}
          <div>
            <p className="italic font-thin">May 2024 - Present</p>
          </div>
        </div>
        <div className="flex items-center">
          <strong>Major:</strong>
          <p className="ml-1">Web Development</p>
        </div>
        <div className="flex items-center">
          <strong>GPA Present:</strong>
          <p className="ml-1">8.5</p>
        </div>
        <div className="flex flex-col">
          <div className="flex gap-x-2 mt-2">
            <div>
              <FontAwesomeIcon
                className="text-yellow-300"
                icon={faBookmark}></FontAwesomeIcon>
            </div>
            <p>
              When i was still in high school. I have always been intersested
              work with computer and design <strong>&</strong> development a
              website this is reason why i chose to follow this major.
            </p>
          </div>
          <div className="flex gap-x-2 mt-2">
            <div>
              <FontAwesomeIcon
                className="text-yellow-300"
                icon={faBookmark}></FontAwesomeIcon>
            </div>
            <p>
              While studying at FPT Polytechnic, I practiced some personal
              projects, and I believe I can apply that knowledge in my future
              work.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
