import {
  faBookmark,
  faHandshakeAngle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Activities = () => {
  return (
    <div className="p-4">
      <div className="text-white rounded-md leading-loose text-sm md:text-[16px]">
        <div className=" flex justify-between items-center">
          <div className="flex items-center gap-x-1">
            <FontAwesomeIcon
              className="text-pink-300"
              icon={faHandshakeAngle}></FontAwesomeIcon>
            <p className="font-bold">Communication Project</p>
          </div>
          <div>
            <p className="italic font-thin">Jan 2024 - March 2024</p>
          </div>
        </div>
        <div className="flex items-center mb-1">
          <strong>Role:</strong>
          <p className="ml-1">Member</p>
        </div>
        <strong className="">Description</strong>
        <div className="flex flex-col">
          <div className="flex gap-x-2 ">
            <div>
              <FontAwesomeIcon
                className="text-yellow-300"
                icon={faBookmark}></FontAwesomeIcon>
            </div>
            <p className="w-full">
              Built WordPress website with search function provide information
              about volunteer centers.
            </p>
          </div>
          <div className="flex gap-x-2 mb-1">
            <div>
              <FontAwesomeIcon
                className="text-yellow-300"
                icon={faBookmark}></FontAwesomeIcon>
            </div>
            <p>Website using AzDigi services as a server host.</p>
          </div>
        </div>
        <strong>Responsibilities</strong>
        <div className="flex flex-col">
          <div className="flex gap-x-2">
            <div>
              <FontAwesomeIcon
                className="text-yellow-300"
                icon={faBookmark}></FontAwesomeIcon>
            </div>
            <p className="">
              Collaborated with the development team to propose new features and
              website designs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activities;
