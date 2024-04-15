"use client";
import Image from "next/image";
import Nav from "./components/NavBar/Nav";
import Hero from "./components/NavBar/Hero";
import { useState, createContext } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import Skills from "./components/Skills/Skills";
import Projects from "./components/projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
export default function Home() {
  const [modalNavbar, setModalNavBar] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const handleClose = () => {
    setModalNavBar(false);
  };

  return (
    <div className="bg-[#121212] min-h-screen w-full scroll-smooth overflow-x-hidden">
      <div className="p-6">
        <Nav
          modal={modalNavbar}
          setModal={setModalNavBar}
          style={{ paddingTop: "100px" }}></Nav>

        <div onClick={() => handleClose()} className="">
          <div id="home">
            <Hero></Hero>
          </div>
          <div id="about">
            <Skills></Skills>
          </div>
          <div id="projects">
            <Projects></Projects>
          </div>
          <div id="contact">
            <Contact></Contact>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

