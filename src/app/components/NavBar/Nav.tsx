"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { Link } from "react-scroll";

const Nav = (props: any) => {
  const handleModal = () => {
    props.setModal(!props.modal);
  };

  return (
    <div className="w-ful">
      {props.modal ? (
        <div className="fixed h-full w-[50%] top-0 left-0 z-50 bg-white shadow-2xl  transition-transform duration-300 ease-in-out transform translate-x-0 md:hidden">
          <div className="flex flex-col text-black">
            <div
              onClick={() => props.setModal(false)}
              className="flex justify-end mr-4 mt-2 text-black">
              <FontAwesomeIcon
                className="text-2xl text-[#765be0]"
                icon={faXmark}></FontAwesomeIcon>
            </div>
            <div className="flex flex-col justify-center items-center p-4 gap-y-6">
              <Link
                onClick={() => props.setModal(false)}
                className="group text-black transition-all duration-300 ease-in-out hover:cursor-pointer"
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}>
                <span className="p-2 text-lg bg-left-bottom bg-gradient-to-r from-indigo-500 via-purple-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out hover:opacity-75">
                  Home
                </span>
              </Link>
              <Link
                onClick={() => props.setModal(false)}
                className="group text-black transition-all duration-300 ease-in-out hover:cursor-pointer"
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}>
                <span className="p-2 text-lg bg-left-bottom bg-gradient-to-r from-indigo-500 via-purple-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out hover:opacity-75">
                  About
                </span>
              </Link>

              <Link
                onClick={() => props.setModal(false)}
                className="group text-black transition-all duration-300 ease-in-out hover:cursor-pointer"
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}>
                <span className="p-2 text-lg bg-left-bottom bg-gradient-to-r from-indigo-500 via-purple-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out hover:opacity-75">
                  Projects
                </span>
              </Link>
              <Link
                onClick={() => props.setModal(false)}
                className="group text-black transition-all duration-300 ease-in-out hover:cursor-pointer"
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}>
                <span className="p-2 text-lg bg-left-bottom bg-gradient-to-r from-indigo-500 via-purple-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out hover:opacity-75">
                  Contact me
                </span>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="fixed h-full w-0 top-0 left-0 bg-black transition-transform duration-300 ease-in-out transform translate-x-[-100%]"></div>
      )}
      <div className="fixed top-0 left-0 w-full  bg-[#121212] bg-opacity-50  shadow-xl">
        <div className="p-6 font-Poppins text-white">
          <div className="flex items-center justify-between ">
            <div className="flex items-center gap-x-4">
              <div onClick={handleModal}>
                <FontAwesomeIcon className="text-2xl md:hidden" icon={faList} />
              </div>
              <p className="font-bold text-2xl md:text-lg">LongLe Dev</p>
            </div>
            <div className="items-center gap-x-[34px] hidden md:flex ">
              <Link
                className="group text-white transition-all duration-300 ease-in-out hover:cursor-pointer"
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}>
                <span className="p-2 bg-left-bottom bg-gradient-to-r from-indigo-500 via-purple-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out hover:opacity-75">
                  Home
                </span>
              </Link>
              <Link
                className="group text-white transition-all duration-300 ease-in-out hover:cursor-pointer"
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}>
                <span className="p-2 bg-left-bottom bg-gradient-to-r from-indigo-500 via-purple-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out hover:opacity-75">
                  About me
                </span>
              </Link>
              <Link
                className="group text-white transition-all duration-300 ease-in-out hover:cursor-pointer"
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}>
                <span className="p-2 bg-left-bottom bg-gradient-to-r from-indigo-500 via-purple-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out hover:opacity-75">
                  Projects
                </span>
              </Link>

              <Link
                className="group text-white transition-all duration-300 ease-in-out hover:cursor-pointer"
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}>
                <button className="transform bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 font-bold p-3 rounded-xl shadow-xl text-lg  hover:opacity-75 hover:scale-110 transition duration-300 ease-in-out">
                  Contact me
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
