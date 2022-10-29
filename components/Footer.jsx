import React from 'react';
import Link from 'next/link';
import { AiFillFacebook, AiFillInstagram, AiFillTwitterSquare, AiFillYoutube, AiFillLinkedin } from "react-icons/ai";
import logo from './logo.jpg'
import Image from 'next/image';



const Footer = () => {
  
  return (
    <div className="p-4 py-10 flex flex-col lg:flex-row gap-8 lg:gap-10 justify-between bg-gradient-to-r from-blue-900 rounded-lg shadow-md m-2">
      <div className='w-[45%]'>
        <Image
            unoptimized
            alt=''
            height="50px"
            width="50px"
            className="rounded-full"
            src={logo}
        />
        <br />
        <span className='text-white'> &copy; 2021 - {new Date().getFullYear()} | All Rights Reserved. astermira, inc</span>
      </div>
      <div className=''>
        <span className='text-white lg:text-blue-900 lg:font-bold'>Company</span>
        <br />
        <span className='text-gray-400 lg:text-black hover:text-white cursor-pointer'>About Us</span> <br />
        <span className='text-gray-400 lg:text-black hover:text-white cursor-pointer'>Contact Us</span> <br />
        <span className='text-gray-400 lg:text-black hover:text-white cursor-pointer'>Career</span> <br />
        <span className='text-gray-400 lg:text-black hover:text-white cursor-pointer'>Advertisement</span> <br />
      </div>
      <div className=''>
        <span className='text-white lg:text-blue-900 lg:font-bold'>Quick Links</span>
        <br />
        <span className='text-gray-400 lg:text-black hover:text-white cursor-pointer'>Privacy</span> <br />
        <span className='text-gray-400 lg:text-black hover:text-white cursor-pointer'>Terms & Conditions</span> <br />
        <span className='text-gray-400 lg:text-black hover:text-white cursor-pointer'>News Categories</span> <br />
      </div>
      <div className='lg:w-[30%] w-[60%] lg:justify-center justify-left'>
        <span className='text-white lg:text-gray-600 lg:text-blue-900 lg:font-bold'>We Are Social</span> <br />
        <div className='flex gap-3 mt-3'>
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
