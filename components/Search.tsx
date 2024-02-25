"use client"
import React from "react";
import Lottie from 'lottie-react';
import animation1 from "../lotties/Animation 2.json"

type Props = {
  value: string,
  handleChange: React.EventHandler<React.SyntheticEvent>
};

function Search({value, handleChange}: Props) {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }
  return (
    <div className="max-w-7xl mx-3 xl:mx-auto mt-5 rounded-xl px-5 sm:px-3 pt-12 pb-16 flex bg-gradient-1 justify-center items-center">
      <form onSubmit={handleSubmit} className="w-full sm:w-[500px] flex flex-col gap-2">
        <label htmlFor="user" className="text-white font-bold font-spacemono pl-1 text-4xl">
          <span className="relative">Search User
          <Lottie animationData={animation1} className="w-12 absolute -top-2 -right-8 right rotate-[140deg]" loop={true} />
          </span>
        </label>
        <input
          type="text"
          id="user"
          value={value}
          onChange={handleChange}
          className="textField"
          placeholder="enter a name to search..."
        />
        {/* <Image src={waveVector} alt="vector" className="w-32 absolute top-9 -left-5"></Image> */}
      </form>
    </div>
  );
}

export default Search;
