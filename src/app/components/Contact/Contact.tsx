"use client";
import React from "react";
import { motion } from "framer-motion";
const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      transition={{ duration: 0.5 }}
      whileInView={{ opacity: 1, x: 0 }}
      className="mt-[60px]">
      <div
        className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400
          to-secondary-600 font-bold md:mb-[60px] text-2xl md:text-[40px] md:text-4xl text-center">
        CONNECT WITH ME <br />
        <p className="text-base font-normal text-white italic">
          (If you are interested, please contact me!)
        </p>
      </div>
      <div className="grid grid-cols-1 gap-4 mt-4 lg:mt-0 lg:flex justify-center md:gap-12">
        <div className="p-4 flex gap-6 bg-[#232732] shadow-xl rounded-md md:p-6 ">
          <img src="/phone-call.png" width={50} alt="" />
          <div className="flex flex-col gap-y-1 text-[15px] text-white ">
            <p>Connect with me on phone number</p>
            <a className="font-bold hover:text-sky-500" href="tel:0384985533">
              0384-985-533
            </a>
          </div>
        </div>
        <div className="p-4 flex gap-6 bg-[#232732] shadow-xl rounded-md md:p-6">
          <img src="/linkedin.png" width={50} alt="" />
          <div className="flex flex-col gap-y-1 text-[15px] text-white">
            <p>
              Connect with me on <strong>Linkedin</strong>
            </p>
            <a
              className="font-bold hover:text-sky-500"
              href="https://www.linkedin.com/in/long-le-03696a301/">
              long_le
            </a>
          </div>
        </div>
        <div className="p-4 flex  gap-6 bg-[#232732] shadow-xl rounded-md md:p-6 ">
          <img src="/gmail.png" width={50} alt="" />
          <div className="flex flex-col gap-y-1 text-[15px] text-white">
            <p>
              Connect with me on <strong>Gmail</strong>
            </p>{" "}
            <a
              className="font-bold hover:text-sky-500 "
              href="mailto:longle1882@gmail.com">
              longle1882@gmail.com
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
