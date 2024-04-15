import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import * as data from "../../data/Data";
const Tool = () => {
  const [arrow, setArrow] = React.useState(false);
  const [arrow2, setArrow2] = React.useState(false);
  const [arrow3, setArrow3] = React.useState(false);
  return (
    <div className="p-2 flex flex-col gap-y-4">
      <div className="bg-[#121212] shadow-xl rounded-md p-2">
        <div className="flex justify-between  mb-1">
          <p className="text-[#fead71] font-extrabold">Front-End:</p>
          <FontAwesomeIcon
            onClick={() => setArrow(!arrow)}
            className={`transition-transform duration-300 hover:text-red-500 hover:cursor-pointer  ${
              arrow ? "rotate-[360deg]" : "rotate-0"
            }`}
            icon={arrow ? faArrowUp : faArrowDown}></FontAwesomeIcon>
        </div>
        <div
          className={`flex gap-x-2 gap-y-2 flex-wrap transition-max-h duration-300 overflow-y-hidden ${
            arrow ? "max-h-0" : "max-h-[200px]"
          }`}>
          {data.frontEnd.map((item, index) => (
            <img key={index} src={`/${item}.svg`} alt="" />
          ))}
        </div>
      </div>
      <div className="bg-[#121212] shadow-xl rounded-md p-2">
        <div className="flex justify-between  mb-1">
          <p className="text-[#fead71] font-extrabold">Back-End:</p>
          <FontAwesomeIcon
            onClick={() => setArrow2(!arrow2)}
            className={`transition-transform duration-300 hover:text-red-500 hover:cursor-pointer  ${
              arrow2 === false ? "rotate-[360deg]" : "rotate-0"
            }`}
            icon={arrow2 === false ? faArrowUp : faArrowDown}></FontAwesomeIcon>
        </div>
        <div
          className={`flex gap-x-2 gap-y-2 flex-wrap transition-max-h duration-300 overflow-y-hidden ${
            arrow2 === false ? "max-h-0" : "max-h-[200px]"
          }`}>
          {data.backEnd.map((item, index) => (
            <img key={index} src={`/${item}.svg`} alt="" />
          ))}
        </div>
      </div>
      <div className="bg-[#121212] shadow-xl rounded-md p-2">
        <div className="flex justify-between  mb-1">
          <p className="text-[#fead71] font-extrabold">Tools:</p>
          <FontAwesomeIcon
            onClick={() => setArrow3(!arrow3)}
            className={`transition-transform duration-300 hover:text-red-500 hover:cursor-pointer  ${
              arrow3 === false ? "rotate-[360deg]" : "rotate-0"
            }`}
            icon={arrow3 === false ? faArrowUp : faArrowDown}></FontAwesomeIcon>
        </div>
        <div
          className={`flex gap-x-2 gap-y-2 flex-wrap transition-max-h duration-300 overflow-y-hidden ${
            arrow3 === false ? "max-h-0" : "max-h-[200px]"
          }`}>
          {data.tools.map((item, index) => (
            <img key={index} src={`/${item}.svg`} alt="" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tool;
