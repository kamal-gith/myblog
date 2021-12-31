import React from 'react';

import Link from 'next/link';
import { AiFillFacebook, AiFillInstagram, AiFillTwitterSquare, AiFillYoutube } from "react-icons/ai";

const Footer = () => {
  
  return (
    <div className="p-2 m-2 md:w-full">
      
        <div className="border-t flex justify-evenly">
        <div className='mt-10'>
            <Link href="/">
                <span className='text-gray-500 font-bold cursor-pointer'> About Us</span> 
            </Link>
        </div>
        <div className='mt-10'>
            <Link href="/">
                <span className='text-gray-500 font-bold cursor-pointer'> Join Us</span> 
            </Link>
        </div>
        <div className='mt-10 cursor-pointer'>
            <Link href="/">
                <span className='text-gray-500 font-bold cursor-pointer'> Advertise with Us</span> 
            </Link>
        </div>
        
        </div>
        
        <div className='flex items-center justify-center mt-8 items-center'>
            <p className='text-gray-500 font-bold'>We're Social: </p>
            <Link href="https://fb.me/astamira">
            <AiFillFacebook className='text-2xl bg-gray-300 mr-4 ml-4 cursor-pointer transform motion-safe:hover:scale-110 hover:bg-green-200'/>
            </Link>
            <Link href="https://www.instagram.com/astermirablog">
            <AiFillInstagram className='text-2xl bg-gray-300 mr-4 cursor-pointer transform motion-safe:hover:scale-110 hover:bg-pink-200'/>
            </Link>
            <Link href="/">
            <AiFillYoutube className='text-2xl bg-gray-300 mr-4 cursor-pointer transform motion-safe:hover:scale-110 hover:bg-red-200'/>
            </Link>
            <Link href="/">
            <AiFillTwitterSquare className='text-2xl bg-gray-300 cursor-pointer transform motion-safe:hover:scale-110 hover:bg-blue-200' />
            </Link>
        </div>
        <div className='flex items-center justify-center mt-8 items-center'>
            <p className='mb-8 text-gray-500 text-sm mt-2'>&copy; 2021 | All Rights Reserved. Astermira, Inc. </p>
        </div>
        
    </div>
  );
};

export default Footer;
