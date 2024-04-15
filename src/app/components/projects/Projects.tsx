"use client";
import { motion, AnimatePresence } from "framer-motion";
import * as data from "../../data/Data";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons/faPaperclip";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
const Projects = () => {
  const [selectedId, setSelectedId] = React.useState("");
  const modalRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setSelectedId("");
      }
    };

    window.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setSelectedId]);

  return (
    <motion.div
      initial={{ opacity: 0, x: -200 }}
      transition={{ duration: 0.5 }}
      whileInView={{ opacity: 1, x: 0 }}
      className="mt-[40px]">
      <p
        className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400
          to-secondary-600 font-bold mb-3  md:mb-[60px] text-2xl md:text-[40px] md:text-4xl text-center">
        PROJECTS
      </p>{" "}
      <motion.div className=" flex items-center justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-8 w-[90%]">
          {data.myData.map((data: any, index) => (
            <motion.div
              key={data.id}
              className={`card bg-[#232732] rounded-lg shadow-md cursor-pointer transform transition-transform duration-500  hover:scale-105 ${
                selectedId === data.id ? "card-selected" : ""
              }`}
              layoutId={`card-container-${data.id}`}
              onClick={() => setSelectedId(data.id)}
              initial={{ scale: 1 }}
              animate={{ scale: selectedId === data.id ? 1.1 : 1 }} // Increase scale on selected card
              transition={{ duration: 0.3 }}
              style={{
                gridColumn: index === 0 || index === 3 ? "span 2" : "span 3",
              }}>
              {" "}
              <div className="card-content">
                <motion.img
                  src={data.img}
                  className="w-full h-[300px] rounded-tl-lg rounded-tr-lg object-cover"
                />
                <div className="p-2 overflow-hidden ">
                  <motion.h2 className="text-xl font-bold mb-2 text-[#fead71]">
                    {data.title}
                  </motion.h2>
                  <motion.h5 className="text-sm leading-relaxed mb-1 text-white">
                    {data.subtitle}
                    <p className="font-bold mb-1 mt-1">
                      Technologies used to build this website:
                    </p>
                    <div className="flex flex-wrap items-center gap-1">
                      {data.technologies.map((item: string, index: number) => (
                        <img key={index} src={`/${item}`} alt="" />
                      ))}
                    </div>
                  </motion.h5>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <AnimatePresence>
          {selectedId && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}>
              {data.myData.map(
                (data) =>
                  data.id === selectedId && (
                    <motion.div
                      className="bg-[#232732] w-full rounded-lg p-4 shadow-md max-w-lg mx-auto"
                      layoutId={`card-container-${data.id}`}
                      key={data.id}
                      ref={modalRef}
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.8, opacity: 0 }}>
                      <motion.div className="relative">
                        <motion.button
                          className="absolute top-0 right-2 py-1 px-2 text-center text-white bg-red-500 rounded-full hover:opacity-75"
                          onClick={() => setSelectedId("")}>
                          Close
                        </motion.button>
                        <motion.h2 className="font-bold text-md mb-2 text-[#fead71]">
                          {data.title}
                          <span className="text-sm text-white ml-1">
                            ({data.teamSize})
                          </span>
                        </motion.h2>

                        <div className="text-white flex items-center gap-x-2">
                          <FontAwesomeIcon icon={faPaperclip} />
                          <a
                            href={data.githublink}
                            className="hover:underline"
                            target="_blank"
                            rel="noopener noreferrer">
                            If you interseted, you can click to view source
                            code.
                          </a>
                        </div>
                        <motion.h5 className="text-sm font-bold mb-1 text-white mt-2">
                          Key Features:
                        </motion.h5>
                        <div className="text-white text-[15px] ">
                          {data.keyFeatures && data.keyFeatures.userFunction ? (
                            <div>
                              {" "}
                              <h3 className="font-bold mb-1 text-sky-300">
                                User Function:
                              </h3>
                              <ul className="flex flex-col gap-y-2">
                                {data.keyFeatures.userFunction.map(
                                  (feature, index) => (
                                    <div key={index} className="flex gap-x-4">
                                      <FontAwesomeIcon
                                        icon={faBookmark}
                                        className="mt-1 text-yellow-500"
                                      />
                                      <li>{feature}</li>
                                    </div>
                                  )
                                )}
                              </ul>
                            </div>
                          ) : (
                            "Empty"
                          )}

                          {data.keyFeatures &&
                          data.keyFeatures.adminFunction ? (
                            <div>
                              {" "}
                              <h3 className="font-bold mb-1 text-sky-300 mt-1">
                                Admin Function:
                              </h3>
                              <ul className="flex flex-col gap-y-2">
                                {data.keyFeatures.adminFunction.map(
                                  (feature, index) => (
                                    <div key={index} className="flex gap-x-4">
                                      <FontAwesomeIcon
                                        icon={faBookmark}
                                        className="mt-1 text-yellow-500"
                                      />
                                      <li>{feature}</li>
                                    </div>
                                  )
                                )}
                              </ul>
                            </div>
                          ) : (
                            ""
                          )}
                        </div>
                      </motion.div>
                    </motion.div>
                  )
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

export default Projects;
