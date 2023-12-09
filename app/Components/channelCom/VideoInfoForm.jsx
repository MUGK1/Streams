"use client";
import { useState } from "react";
import Image from "next/image";
import logo from "@/public/images/Logo.svg";
import { motion } from "framer-motion";
function VideoInfoForm({ isClicked, setIsClicked }) {
  function handleClick() {
    setIsClicked(!isClicked);
  }
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1] }}
        transition={{ type: "spring", duration: 1 }}
        exit={{ opacity: 0 }}
        className="fixed left-0 top-0 w-screen h-screen bg-primaryBlack opacity-70 z-10"
        onClick={handleClick}
      ></motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1] }}
        transition={{ type: "spring", duration: 1 }}
        exit={{ opacity: 0 }}
        className="fixed top-1/2 left-1/2 -translate-x-2/4 -translate-y-1/2  w-9/12 h-5/6 bg-secondaryBlack rounded-xl z-30"
      >
        <div className="flex flex-col justify-center items-center h-full w-fit center ">
          <div className="mb-16 ">
            <Image src={logo} alt="Logo" className="w-40" />
          </div>

          <>
            <input
              type="text"
              placeholder="Video Tiltle"
              className="focus:outline-none mb-4 bg-transparent rounded-3xl border-2 border-textColor text-textColor w-rem26 h-12 pl-5 pr-5 pt-2 pb-2 text-sm"
            />
            <input
              type="text"
              placeholder="Video URL"
              className="focus:outline-none mb-5  bg-transparent rounded-3xl border-2 border-textColor text-textColor w-rem26 h-12 pl-5 pr-5 pt-2 pb-2 text-sm"
            />
            <input
              type="text"
              placeholder="Thumbnail URL"
              className="focus:outline-none mb-5  bg-transparent rounded-3xl border-2 border-textColor text-textColor w-rem26 h-12 pl-5 pr-5 pt-2 pb-2 text-sm"
            />
            <input
              type="text"
              placeholder="Video Genre"
              className="focus:outline-none mb-5  bg-transparent rounded-3xl border-2 border-textColor text-textColor w-rem26 h-12 pl-5 pr-5 pt-2 pb-2 text-sm"
            />
            <input
              type="number"
              placeholder="Video Duration"
              className="focus:outline-none mb-5  bg-transparent rounded-3xl border-2 border-textColor text-textColor w-rem26 h-12 pl-5 pr-5 pt-2 pb-2 text-sm"
            />
            <textarea
              rows={4}
              cols={50}
              placeholder="Video Description"
              className="focus:outline-none mb-5 max-h-32 bg-transparent rounded-3xl border-2 border-textColor text-textColor w-rem26 min-h-min3 pl-5 pr-5 pt-2 pb-2 text-sm"
            ></textarea>
          </>
          <button className="bg-primaryRed w-64 h-12 rounded-3xl mt-16 border-2 border-primaryRed hover:bg-transparent transition-all hover:scale-105 active:scale-95">
            Upload Video
          </button>
        </div>
      </motion.div>
    </div>
  );
}

export default VideoInfoForm;
