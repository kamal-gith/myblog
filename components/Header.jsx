import React, { useState, useEffect } from 'react';
import moment from 'moment'
import Link from 'next/link';
import { getCategories } from '../services';
import {BsSearch } from "react-icons/bs";
import Image from 'next/image';
import logo from './miralogo.jpg'
import { AiFillFacebook, AiFillInstagram, AiFillTwitterSquare, AiFillYoutube } from "react-icons/ai";

const Header = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  return (
    <>
    <div className='hidden border-none h-14 sm:bg-red-500 bg-gradient-to-r from-red-500 mt-4 flex items-center justify-center items-center'>
        <Link href="/">
          <span className="mr-10 text-white font-normal cursor-pointer transform motion-safe:hover:scale-110 hover:text-black">About Us</span>
        </Link>
        <Link href="/">
          <span className="mr-10 text-white font-normal cursor-pointer transform motion-safe:hover:scale-110 hover:text-black">Contact Us</span>
        </Link>
        <Link href="/">
          <span className="mr-10 text-white font-normal cursor-pointer transform motion-safe:hover:scale-110 hover:text-black">Career</span>
        </Link>
        <Link href="/">
          <span className="mr-10 text-white font-normal cursor-pointer transform motion-safe:hover:scale-110 hover:text-black">Advertise with Us</span>
        </Link>
        <Link href="/">
          <span className="mr-10 text-white font-normal cursor-pointer transform motion-safe:hover:scale-110 hover:text-black">Our Privacy Policy</span>
        </Link>
                
        <Link href="https://fb.me/astamira">
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
        <span className='ml-10 text-black font-semibold'> {moment().format('dddd, MMMM Do YYYY')}  </span>
   </div>
  
    
    <div className="container mx-auto px-10 mb-8">
      <div className="border-b w-full inline-block border-gray-200 py-8 mb-8 ">
        <div className="flex md:float-left block">
              <Image
            unoptimized
            alt=''
            href='/'
            height="50px"
            width="50px"
            className="cursor-pointer mt-0 mb-0"
            src={logo}
          />
          <div className='border-none rounded-lg transform motion-safe:hover:scale-110 border-gray-200'>
          <Link href="/">
           <span className="m-3 font-bold transition duration-500 ease inline-block hover:text-red-500 text-2xl rounded-sm border-none text-blue-600 cursor-pointer">ASTERMIRA </span>
          </Link>
          </div>
          
        </div>
        
        <div className="hidden md:float-left md:contents ">
          <BsSearch className="md:float-right mt-2 align-middle ml-4 text-2xl text-gray-500 cursor-pointer transform motion-safe:hover:scale-110 hover:text-green-500"/>
          {categories.map((category, index) => (
            <Link key={index} href={`/category/${category.slug}`}><span className="md:float-right mt-2 align-middle text-blue ml-4 font-semibold cursor-pointer transform motion-safe:hover:scale-110 hover:text-green-500">{category.name}</span></Link>
            ))}
        </div>
      </div>
          <div className="align-center mt-2"> 
            <span className='text-black text-center'> Welcome to Astermira and thanks for visiting us. </span>
            <span className='text-red-500 text-center'> Read Our Recent Posts Today - </span>
            <span className='text-black text-center'> {moment().format('dddd Do MMMM, YYYY.')}  </span>
            
            
            {/* <span className='text-pink-500 font-normal'>   {moment().format('h:mm:ss a')}  </span> */}
          </div>
    </div>
    </>
  );
};

export default Header;
