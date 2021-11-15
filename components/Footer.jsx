import React from 'react';

import Link from 'next/link';
import { AiFillFacebook, AiFillInstagram, AiFillTwitterSquare, AiFillYoutube } from "react-icons/ai";

const Footer = () => {
  
  return (
    <div className="border-t border-gray-200 container mx-auto px-10 mb-8">
      
        <div className="flex items-center justify-center mr-8 items-center mt-8">
        <div>
            <Link href="/">
                <span className='mt- mr-20 font-normal text-gray-600 cursor-pointer'> About Us</span> 
            </Link>
        </div>
        <div>
            <Link href="/">
                <span className='mt- mr-20 font-normal text-gray-600 cursor-pointer'> Join Our Team</span> 
            </Link>
        </div>
        <div>
            <Link href="/">
                <span className='mt-2 mr-20 font-normal text-gray-600 cursor-pointer '> Advertise with Us</span> 
            </Link>
        </div>
        <div>
            <Link href="/">
                <span className='mt-2 mr-20 font-normal text-gray-600 cursor-pointer'> Our Privacy Policy</span> 
            </Link>
        </div>
        </div>
        
        <div className='border-t border-gray-100 flex items-center justify-center mt-8 items-center'>
            <p className='font-normal'>Follow Us: </p>
            <Link href="/">
            <AiFillFacebook className='text-2xl bg-gray-300 mr-4 ml-4 cursor-pointer transform motion-safe:hover:scale-110 hover:bg-green-200'/>
            </Link>
            <Link href="/">
            <AiFillInstagram className='text-2xl bg-gray-300 mr-4 cursor-pointer transform motion-safe:hover:scale-110 hover:bg-pink-200'/>
            </Link>
            <Link href="/">
            <AiFillYoutube className='text-2xl bg-gray-300 mr-4 cursor-pointer transform motion-safe:hover:scale-110 hover:bg-red-200'/>
            </Link>
            <Link href="/">
            <AiFillTwitterSquare className='text-2xl bg-gray-300 cursor-pointer transform motion-safe:hover:scale-110 hover:bg-blue-200' />
            </Link>
        </div>
        <div className='border-t border-gray-100 flex items-center justify-center mt-8 items-center'>
            <p className='text-sm mt-2'>&copy; 2021 | All Rights Reserved. Astermira, Inc. </p>
        </div>
        
    </div>
  );
};

export default Footer;
