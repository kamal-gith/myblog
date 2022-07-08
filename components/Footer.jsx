import React from 'react';

import Link from 'next/link';
import { AiFillFacebook, AiFillInstagram, AiFillTwitterSquare, AiFillYoutube } from "react-icons/ai";

const Footer = () => {
  
  return (
    <div className="p-2 m-2 md:w-full">
      
        <div className="border-t border-slate-30 flex justify-evenly">
        <div className='mt-4'>
            <Link href="/">
                <span className='text-sm cursor-pointer'> About Us</span> 
            </Link>
        </div>
        <div className='mt-4'>
            <Link href="/">
                <span className='text-sm cursor-pointer'>Career</span> 
            </Link>
        </div>
        <div className='mt-4'>
            <Link href="/">
                <span className='text-sm cursor-pointer'> Advertisement</span> 
            </Link>
        </div>
        </div>
        
        <div className='flex items-center justify-center mt-4 items-center'>
            <p className='text-slate-400 text-sm'>We're Social: </p>
            <Link href="https://fb.me/astamira">
            <AiFillFacebook className='text-2xl mr-4 ml-4 cursor-pointer'/>
            </Link>
            <Link href="https://www.instagram.com/astermirablog">
            <AiFillInstagram className='text-2xl mr-4'/>
            </Link>
            <Link href="/">
            <AiFillYoutube className='text-2xl mr-4 '/>
            </Link>
            <Link href="/">
            <AiFillTwitterSquare className='text-2xl' />
            </Link>
        </div>
        <div className='flex items-center justify-center mt-4 items-center'>
            <p className='mb-4 text-sm mt-2'> <span className='mr-1'> &copy; 2021 - {new Date().getFullYear()}</span> | <span className="ml-1"> All Rights Reserved. Astermira</span> </p>
        </div>
        
    </div>
  );
};

export default Footer;
