import React from 'react';
import Link from 'next/link';
import { AiFillFacebook, AiFillInstagram, AiFillTwitterSquare, AiFillYoutube } from "react-icons/ai";

const Footer = () => {
  
  return (
    <div className="bg-blue-50 px-4 my-2 mx-6 rounded-lg shadow-md m-2 md:w-full">
      
        <div className="flex justify-evenly">
        <div className='mt-4'>
            <Link href="/">
                <span className='text-sm cursor-pointer'> About Us</span> 
            </Link>
        </div>
        <div className='mt-4'>
            <Link href="/">
                <span className='text-sm cursor-pointer'>Privacy</span> 
            </Link>
        </div>
        <div className='mt-4'>
            <Link href="/">
                <span className='text-sm cursor-pointer'> Advertisement</span> 
            </Link>
        </div>
        </div>
        
        <div className=' text-gray-600 flex items-center justify-center mt-4 items-center'>
            <p className='text-sm'>We're Social: </p>
            <div className='h-10 w-10 flex justify-center items-center bg-white shadow-sm rounded-full mr-2 ml-2'>
                <Link href="https://fb.me/astamira">
                <AiFillFacebook className='text-2xl cursor-pointer'/>
                </Link>
            </div>
            <div className='h-10 w-10 flex justify-center items-center bg-white shadow-sm rounded-full mr-2'>
                <Link href="https://www.instagram.com/astermirablog">
                <AiFillInstagram className='text-2xl cursor-pointer'/>
                </Link>
            </div>
            <div className='h-10 w-10 flex justify-center items-center bg-white shadow-sm rounded-full mr-2'>
                <Link href="/">
                <AiFillYoutube className='text-2xl cursor-pointer'/>
                </Link>
            </div>
            <div className='h-10 w-10 flex justify-center items-center bg-white shadow-sm rounded-full'>
                <Link href="/">
                <AiFillTwitterSquare className='text-2xl cursor-pointer' />
                </Link>
            </div>
            
            
            
        </div>
        <div className='flex items-center justify-center mt-2 items-center'>
            <p className='mb-4 text-[10px] mt-2'> <span className='mr-1'> &copy; 2021 - {new Date().getFullYear()}</span> | <span className="ml-1"> All Rights Reserved. astermira, Inc.</span> </p>
        </div>
        
    </div>
  );
};

export default Footer;
