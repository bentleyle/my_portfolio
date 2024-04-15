import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMouse,
  faRepeat,
  faUser,
  faBook,
  faSchool,
  faEarthAmericas,
  faAward,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import Introduce from "../ItemIntroduce/Introduce";
import Tool from "../ItemIntroduce/Tool";
import Education from "../ItemIntroduce/Education";
import Activities from "../ItemIntroduce/Activities";
import Certification from "../ItemIntroduce/Certification";
const textVariant = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const aboutMe = [
  { icon: faUser, text: "Introduce" },
  { icon: faBook, text: "Skills" },
  { icon: faSchool, text: "Education" },
  { icon: faEarthAmericas, text: "Activities" },
  { icon: faAward, text: "Certifications" },
];
const renderStep = [
  <Introduce key="introduce"></Introduce>,
  <Tool key="tool"></Tool>,
  <Education key="education"></Education>,
  <Activities key="activities"></Activities>,
  <Certification key="certification"></Certification>,
];
const Skills = () => {
  const [fromStep, setFromStep] = React.useState(0);
  const [activeIndex, setActiveIndex] = React.useState(0);

  const handleItemClick = (index: any) => {
    setActiveIndex(index);
  };
  const handleClickWithSetFromStep = (index: any) => {
    handleItemClick(index);
    setFromStep(index);
  };

  return (
    <div className="md:pt-0">
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, scale: 1 }}
        className="">
        <p
          className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400
          to-secondary-600 font-bold mb-0 text-2xl md:text-[40px] md:text-4xl text-center">
          ABOUT ME
        </p>
        <div className="grid grid-col-1 justify-items-center items-center md:flex items-center ">
          <div className="w-[40%]">
            <img
              src="/about.png"
              className="w-full md:rounded-md md:h-[600px]"
              alt=""
            />
          </div>
          <div className="bg-[#232732] lg:h-[320px] lg:mt-[20px] md:h-full md:w-full lg:w-[50%] shadow-xl rounded-lg text-white">
            <div className="grid grid-cols-3 justify-items-center gap-y-2 gap-x-4 md:flex items-center justify-between p-2">
              {aboutMe.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-x-2 md:flex md:items-center text-md cursor-pointer ${
                    activeIndex === index ? "text-sky-300 font-bold" : ""
                  }`}
                  onClick={() => handleClickWithSetFromStep(index)}>
                  <FontAwesomeIcon icon={item.icon}></FontAwesomeIcon>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
            <hr />
            <div className="">{renderStep[fromStep]}</div>
          </div>
          {/* <motion.p
              className="text-white bg-[#232732] shadow-2xl p-2 rounded-md leading-loose text-sm md:p-4 md:text-[16px]"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 1, ease: "easeOut" }}>
              Hi, My name is Long. I'm a Front-End Developer, currently studying
              at{" "}
              <span>
                <span className="text-[#0071ba] font-bold">F</span>
                <span className="text-[#f38218] font-bold">P</span>
                <span className="text-[#70bf42] font-bold">T</span>
              </span>{" "}
              Polytechnic College. With a relentless drive for innovation and a
              solid foundation in programming, I aspire to become a Frontend
              Leader.
            </motion.p> */}
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;
