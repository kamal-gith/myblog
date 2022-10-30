import React from 'react';
import Link from 'next/link';
import { AiFillFacebook, AiFillInstagram, AiFillTwitterSquare, AiFillYoutube, AiFillLinkedin } from "react-icons/ai";
import logo from './logo.jpg'
import Image from 'next/image';



const Footer = () => {
  
  return (
    <div className="w-full p-4 py-10 flex flex-col md:flex-row gap-8 md:gap-10 justify-between bg-black rounded-lg shadow-md m-2">
      <div className='md:w-[40%] w-full'>
        <Image
            unoptimized
            alt=''
            height="50px"
            width="50px"
            className="rounded-full"
            src={logo}
        />
        <br />
        <span className='text-sm text-gray-300'> &copy; 2021 - {new Date().getFullYear()} | All Rights Reserved. <span className='text-white'>astermira, inc</span></span>
        <br/> <a className='text-sm text-gray-300 underline hover:text-white cursor-pointer' href='https://kamal-ai.netlify.app/' target="_blank" rel="noopener noreferrer">Contact the Developer</a>
      </div>
      <div className=''>
        <span className='text-white'>Company</span>
        <br />
        <span className='text-gray-400 hover:text-white cursor-pointer'>About Us</span> <br />
        <span className='text-gray-400 hover:text-white cursor-pointer'>Contact Us</span> <br />
        <span className='text-gray-400 hover:text-white cursor-pointer'>Career</span> <br />
        <span className='text-gray-400 hover:text-white cursor-pointer'>Advertisement</span> <br />
      </div>
      <div className=''>
        <span className='text-white'>Quick Links</span>
        <br />
        <span className='text-gray-400 hover:text-white cursor-pointer'>Privacy</span> <br />
        <span className='text-gray-400 hover:text-white cursor-pointer'>Terms & Conditions</span> <br />
        <span className='text-gray-400 hover:text-white cursor-pointer'>News Categories</span> <br />
      </div>
      <div className='md:w-[30%] w-[60%] md:justify-center justify-left'>
        <span className='text-white'>We Are Social</span> <br />
        <div className='flex gap-3 mt-3 text-gray-400'>
            <Link href="/">
            <AiFillTwitterSquare className='text-3xl cursor-pointer hover:text-white' />
            </Link>
            <Link href="https://fb.me/astamira">
            <AiFillFacebook className='text-3xl cursor-pointer hover:text-white' />
            </Link>
            <Link href="https://www.instagram.com/astermirablog">
            <AiFillInstagram className='text-3xl cursor-pointer hover:text-white' />
            </Link>
            <Link href="/">
            <AiFillYoutube className='text-3xl cursor-pointer hover:text-white' />
            </Link>
            <Link href="https://www.linkedin.com/company/astermira">
            <AiFillLinkedin className='text-3xl cursor-pointer hover:text-white' />
            </Link>
        </div>
        
        
      </div>
    </div>
  );
};

export default Footer;
