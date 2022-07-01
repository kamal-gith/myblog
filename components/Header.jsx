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
    <div className="container mx-auto px-10 mb-8">
      <div className="border-b w-full inline-block border-gray-200 py-8 mb-8">
        <div className="flex md:float-left block">
              <Image
            unoptimized
            alt=''
            href='/'
            height="50px"
            width="50px"
            borderRadius="50%"
            className="cursor-pointer mt-0 mb-0"
            src={logo}
          />
          <div className='border-none rounded-lg transform motion-safe:hover:scale-110 border-gray-200'>
            <Link href="/">
            <span className="m-3 font-bold transition duration-500 ease inline-block hover:text-black text-red-500 text-2xl cursor-pointer">astermira</span>
            </Link>
          </div>
          {/* <div className='ml-20'>
            <span className="mt-5 inline-block text-gray-600 font-semibold justify-end md:hidden">{moment().format('dddd Do MMMM, YYYY.')}</span>
          </div> */}
          
        </div>
        
        <div className="hidden md:float-left md:contents ">
          {/* <BsSearch className="md:float-right mt-2 align-middle ml-4 cursor-pointer transform motion-safe:hover:scale-110 hover:text-red-500"/> */}
          {categories.map((category, index) => (
            <Link key={index} href={`/category/${category.slug}`}><span className="md:float-right mt-2 align-middle text-blue ml-4 uppercase cursor-pointer transform motion-safe:hover:scale-110 hover:text-red-500">{category.name}</span></Link>
            ))}
        
        </div>
      </div>
          <div className="center mt-2"> 
            <span> Welcome to Astermira. </span>
            <span className='text-red-500 '> Read Our Recent Posts Today </span>
            <span> {moment().format('dddd Do MMMM, YYYY.')}  </span>
            
            
            {/* <span className='text-pink-500 font-normal'>   {moment().format('h:mm:ss a')}  </span> */}
          </div>
    </div>
    </>
  );
};

export default Header;
