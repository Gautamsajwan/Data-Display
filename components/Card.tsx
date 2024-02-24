"use client";
import React, { useState } from "react"
import { motion } from 'framer-motion'
import { TiHeartFullOutline } from "react-icons/ti"

type Props = {
  name: string;
  description: string;
  jobsApplied: number;
  likes: number;
};

function Card({ name, description, jobsApplied, likes }: Props) {
  const [heartColor, setHeartColor] = useState<string>("text-gray-100");
  const changeColor = () => {
    setHeartColor((prev) =>
      prev === "text-gray-100" ? "text-orange-500" : "text-gray-100"
    );
  };
  return (
    <motion.article
      initial={{
        opacity: 0,
        scale: 0.5
      }}
      whileInView={{
        opacity: 1,
        scale: 1
      }}
      viewport={{
        once: true,
      }}
      transition={{
        type: "spring",
        duration: 1,
      }}
      className="bg-gray-100 border-[rgb(32,32,32)] border-4 overflow-hidden rounded-lg font-montserrat flex flex-col gap-2 shadow-lg shadow-[rgba(73,73,73,0.5)]">
      <div className="flex gap-2 px-3 pt-2">
        <h1 className="text-2xl font-bold text-gray-900 capitalize">{name}</h1>
        <button className="bg-gray-300 font-semibold outline-none border-none px-2 text-sm rounded-[3px] hover:text-white hover:bg-orange-500 transition-colors ease-in-out duration-200">
          Resume
        </button>
      </div>

      <p className="font-semibold px-3">
        {description.split(" ").slice(0, 50).join(" ")}
        {description.split(" ").length > 50 && "..."}
      </p>

      <div className="px-3 py-2 text-xs sm:text-sm flex justify-between items-center bg-[rgb(32,32,32)]">
        <p className="font-semibold text-gray-200">
          Applied for <span className="text-orange-500">{jobsApplied}</span> jobs
        </p>
        <div className="flex gap-1 items-center">
          <p className="font-semibold text-gray-200 text-wrap float-end">
            <span className="text-orange-500">{likes}</span> people liked the profile
          </p>
          <button onClick={changeColor}>
            <TiHeartFullOutline className={`w-8 h-8 ${heartColor}`} />
          </button>
        </div>
      </div>
    </motion.article>
  );
}

export default Card;
