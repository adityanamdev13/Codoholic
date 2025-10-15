import React from "react";
import {
  AiOutlineLinux,
  AiOutlineHtml5,
  AiOutlineGithub,
} from "react-icons/ai";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Banner = ({title,BreadCrumb}) => {
  return (
    <div className="relative md:h-80  xs:h-56 overflow-hidden mb-10 mt-0.5">
      {/* Background Image */}
      <img
        src="../src/assets/bg.jpg"
        alt="banner_bg"
        className="w-full h-full object-cover"
      />

      {/* Animated Coding Icons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        {/* Linux */}
        <motion.div
          className="absolute top-[10%] left-[15%] z-10"
          animate={{
            y: [0, -20, 10, 0],
            x: [0, 10, -10, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <AiOutlineLinux className=" opacity-70 md:text-[40px] text-[30px] xs:text-[25px]" />
        </motion.div>

        {/* React */}
        <motion.div
          className="absolute top-[20%] right-[10%] z-10"
          animate={{
            y: [0, -15, 10, 0],
            x: [0, -10, 10, 0],
            rotate: [0, -10, 10, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        >
          <FaReact className="text-[#61DBFB] md:text-[50px] text-[35px] xs:text-[28px]" />
        </motion.div>

        {/* JavaScript */}
        <motion.div
          className="absolute bottom-[25%] left-[25%] z-10"
          animate={{
            y: [0, 15, -10, 0],
            rotate: [0, -10, 10, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        >
          <SiJavascript className="text-[#F7DF1E] opacity-80 md:text-[45px] text-[30px] xs:text-[25px]" />
        </motion.div>

        {/* Github */}
        <motion.div
          className="absolute bottom-[10%] right-[15%] z-10"
          animate={{
            y: [0, -10, 10, 0],
            x: [0, 10, -10, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 6.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5,
          }}
        >
          <AiOutlineGithub className="text-gray-400 opacity-70 md:text-[50px] text-[35px] xs:text-[28px]" />
        </motion.div>

        {/* NodeJS */}
        <motion.div
          className="absolute bottom-[30%] left-[10%] z-10"
          animate={{
            y: [0, -20, 15, 0],
            rotate: [0, 15, -15, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        >
          <FaNodeJs className="text-[#68A063] opacity-80 md:text-[50px] text-[35px] xs:text-[28px]" />
        </motion.div>

        {/* HTML5 */}
        <motion.div
          className="absolute bottom-[5%] right-[40%] z-10"
          animate={{
            y: [0, 10, -10, 0],
            x: [0, -10, 10, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2.5,
          }}
        >
          <AiOutlineHtml5 className="text-[#E34C26] opacity-80 md:text-[50px] text-[35px] xs:text-[28px]" />
        </motion.div>
      </motion.div>

      {/* Overlay Text */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center z-20 px-4">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl sm:text-2xl xs:text-xl md:text-5xl font-bold text-[#1a1a1af9] tracking-wide drop-shadow-lg"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-sm sm:text-xs md:text-lg mt-2 flex items-center gap-4"
        >
          <Link to="/">Home</Link>
          <span className="text-gray-600 font-bold">{">"}</span>
          <span className="text-[#E67817]">{BreadCrumb}</span>
        </motion.p>
      </div>
    </div>
  );
};

export default Banner;
