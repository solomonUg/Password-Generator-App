import React, { useState } from "react";
import { FaRegCopy } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

export default function passwordGenerator() {
  const [isCopied, setIsCopied] = useState(false);
  const [length, setLength] = useState('');

  function copyToClipBoard(password) {
    navigator.clipboard.writeText(password);
    setIsCopied(true);
    console.log(password);
  }




  return (
    <div className="w-[80%] sm:w-[60%] md:w-[50%] lg:w-[40%] font-mono text-slate-300 flex flex-col gap-4">
      <div className="bg-[#24232b] flex justify-between px-4 h-12 items-center">
        {" "}
        <span>PTx1f5DaFX</span>
        <div className="flex items-center justify-center gap-1 text-[#a4ffb1]">
          <p className={isCopied ? "flex" : "hidden"}>copied!</p>
          <div onClick={copyToClipBoard}>
            <FaRegCopy className="cursor-pointer" />
          </div>
        </div>
      </div>

      <div className="h-fit bg-[#24232b]">
        <div className="flex justify-between px-4">
          <p>Character Length</p> <div>{length}</div>
        </div>

        <div className="mx-4">
          <input
            type="range"
            name="length"
            id="length-range"
            min={0}
            max={10}
            value={length}
            onChange={(e)=>{ setLength(e.target.value);
            }}
            className="w-full  rounded-3xl h-2 accent-green-300 "
          />
        </div>

        <div className="flex flex-col px-4 gap-2">
          <label htmlFor="upperCase" className="flex gap-1">
            <input type="checkbox" name="upperCase" id="upperCase"  className="w-4 h-4 top-1 appearance-none border-2 border-gray-400 cursor-pointer 
               checked:bg-green-500 checked:border-green-500 checked:ring-2 checked:ring-green-300 
               relative transition-all duration-200
               checked:before:content-['✔'] checked:before:absolute checked:before:text-white checked:before:text-sm 
               checked:before:font-bold checked:before:left-1/2 checked:before:top-1/2 
               checked:before:-translate-x-1/2 checked:before:-translate-y-1/2 " />
            <span >Include Uppercase Letters</span>
          </label>

          <label htmlFor="lowerCase" className="flex gap-1" >
            <input type="checkbox" name="lowerCase" id="lowerCase" className="w-4 h-4 top-1 appearance-none border-2 border-gray-400 cursor-pointer 
               checked:bg-green-500 checked:border-green-500 checked:ring-2 checked:ring-green-300 
               relative transition-all duration-200
               checked:before:content-['✔'] checked:before:absolute checked:before:text-white checked:before:text-sm 
               checked:before:font-bold checked:before:left-1/2 checked:before:top-1/2 
               checked:before:-translate-x-1/2 checked:before:-translate-y-1/2 " />
            <span>Include Lowercase Letters</span>
          </label>

          <label htmlFor="number" className="flex gap-1">
            <input type="checkbox" name="number" id="number" className="w-4 h-4 top-1 appearance-none border-2 border-gray-400 cursor-pointer 
               checked:bg-green-500 checked:border-green-500 checked:ring-2 checked:ring-green-300 
               relative transition-all duration-200
               checked:before:content-['✔'] checked:before:absolute checked:before:text-white checked:before:text-sm 
               checked:before:font-bold checked:before:left-1/2 checked:before:top-1/2 
               checked:before:-translate-x-1/2 checked:before:-translate-y-1/2 " />
            <span>Include Numbers</span>
          </label>

          <label htmlFor="symbols" className="flex gap-1">
            <input type="checkbox" name="symbols" id="symbols"  className="w-4 h-4 top-1 appearance-none border-2 border-gray-400 cursor-pointer 
               checked:bg-green-500 checked:border-green-500 checked:ring-2 checked:ring-green-300 
               relative transition-all duration-200
               checked:before:content-['✔'] checked:before:absolute checked:before:text-white checked:before:text-sm 
               checked:before:font-bold checked:before:left-1/2 checked:before:top-1/2 
               checked:before:-translate-x-1/2 checked:before:-translate-y-1/2 "/>
            <span>Include Numbers</span>
          </label>
        </div>

        <div className="bg-gray-900 flex px-4 justify-between py-4 my-4 mx-4">
          <p className="text-gray-600 font-semibold">STRENGTH</p>
          <div className="flex gap-4">
            <span>MEDIUM</span>
            <div className="flex gap-2">
              <div className="w-2.5 bg-yellow-500 h-6 border-2"></div>
              <div className="w-2.5 bg-yellow-500 h-6 border-2"></div>
              <div className="w-2.5 bg-yellow-500 h-6 border-2"></div>
              <div className="w-2.5  h-6 border-2 "></div>
            </div>
          </div>
        </div>

        <div className="flex mx-4 my-4">
          <button className="flex items-center justify-center bg-[#a4ffb1] text-gray-900 w-full py-4 font-semibold gap-2 cursor-pointer hover:bg-[#97e7a3ee]">
            <span>GENERATE </span>
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}
