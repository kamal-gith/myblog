import moment from 'moment';
import Image from 'next/image';
import React from 'react';

import coverPhoto from "./welcome.jpg"

const WelcomeSection = () => {
  return (
    <>
    <div className="bg-peach-500 flex flex-col md:flex-row justify-center md:space-x-2 px-10 m-5 border-b">
        <div className="md:mt-40 md:mr-8">
            <h1 className="font-bold md:text-2xl text-xl text-gray-600">astermira</h1>
            <span className="text-xl ">brings you balanced perspectives to trending news</span> <br />
            <span className="font-semibold md:text-2xl text-lg text-gray-600 ">Our reportage is</span>
            <span className="font-semibold text-xl mr-1 ml-2 text-blue-700">authentic</span>
            <span className="text-xl text-gray-600 mr-2"> and </span>
            <span className="font-semibold md:text-2xl text-lg text-red-400">unbiased</span>
        </div>
        
        <div className="hidden md:block mb-10 mr-10">
        <Image
            unoptimized
            alt=''
            height="730px"
            width="1000px"
            className="md:mr-10"
            src={coverPhoto}
          />
        </div >
        <div className="hidden md:mt-20">
            <h1 className="text-xl">We also publish</h1>
            <span className="font-bold text-xl text-gray-600">exciting articles </span> 
            <span className="text-xl">that cover</span>
            <span className="font-semibold text-xl mr-1 ml-2 text-blue-700">wide range</span>
            <span className="text-xl mr-2">of</span>
            <span className="font-semibold text-xl text-red-400">topical issues</span>
        </div>

    </div>
    <div className="flex justify-center w-full px-10 m-5 mt-10">
    <span className='text-xl '> Read Our Recent Posts Today</span>
    </div>
    </>
  );
};

export default WelcomeSection;
