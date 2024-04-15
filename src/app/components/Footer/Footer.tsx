import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
  return (
    <div className="bg-[#20293a] w-full h-[70px] flex justify-center items-center shadow-xl mt-[60px]">
      <div className="text-[14px] text-center md:text-base flex items-center text-white font-bold">
        <p>
          Thank you for taking the time to watch my Portfolio. Have a nice day
        </p>
        <FontAwesomeIcon
          className="text-red-500 ml-2 hidden md:block"
          icon={faHeart}></FontAwesomeIcon>
      </div>
    </div>
  );
};

export default Footer;
