import React, { useState, useEffect } from "react";
import { motion, stagger } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMouse, faRepeat } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";

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
const typeWriterVariant = (
  <Typewriter
    words={["Front-End Developer"]}
    loop={0} // Endless loop
    cursor
    cursorStyle="|"
    typeSpeed={200}
  />
);

const Hero = () => {
  const [typeWriter, setTypeWriter] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setTypeWriter(true);
    }, 1000);
  }, []);
  return (
    <div className="text-white grid grid-cols-1 justify-items-center items-center pt-[65px] md:pt-[60px] md:flex justify-between mb-12">
      <motion.img
        variants={textVariant}
        initial="initial"
        animate="animate"
        className="w-[40%] h-[200px] object-cover block md:hidden"
        srcSet="/human.png 4x"
        alt=""
      />
      <div className="w-[100%] lg:w-[50%]">
        <motion.div
          variants={textVariant}
          initial="initial"
          animate="animate"
          className="text-transparent text-center text-4xl md:text-left sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600  md:text-[50px] mb-6 ">
          <p>So, who am I?</p>
        </motion.div>
        <div className="text-3xl text-center md:text-left md:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
          {typeWriter ? typeWriterVariant : ""}
        </div>
        <motion.div
          initial={{ x: -500, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1, staggerChildren: 0.1 }}>
          <Link
            className="group text-white transition-all duration-300 ease-in-out hover:cursor-pointer"
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}>
            <button className="transform mt-4 w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 font-bold p-3 rounded-full shadow-xl hover:scale-110 transition duration-300 ease-in-out md:w-[200px]">
              Contact me
            </button>
          </Link>
          <a
            href="https://static.topcv.vn/topcv-cv-uploads/7fd7e1ce4fa078095de2c012a899488e.pdf#toolbar=0&navpanes=0&scrollbar=0"
            target="_blank"
            className="px-1 inline-block py-1 w-full rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3  md:w-[200px] md:ml-4 ">
            <span className="block text-center bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
              View my CV
            </span>
          </a>
        </motion.div>
        <motion.div
          className="flex items-center mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: 10 }}
          transition={{ delay: 3, duration: 2, repeat: Infinity }}>
          <FontAwesomeIcon className="text-white text-xl" icon={faMouse} />
          <p className="text-white text-base ml-2 font-thin">Scroll down</p>
        </motion.div>
      </div>
      <motion.img
        variants={textVariant}
        initial="initial"
        animate="animate"
        className="w-[50%] h-[620px] object-cover hidden md:block"
        srcSet="/human.png 4x"
        alt=""
      />
    </div>
  );
};

export default Hero;
