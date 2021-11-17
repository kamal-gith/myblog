import React, { useState, useEffect } from 'react';
import moment from 'moment'
import Link from 'next/link';
import { getCategories } from '../services';
import { BsSearch } from "react-icons/bs";
import Image from 'next/image';
import logo from './miralogo.jpg'

const Header = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="border-b w-full inline-block border-gray-200 py-8 mb-8 ">
        <div className="md:float-left block">
              <Image
            unoptimized
            alt=''
            href='/'
            height="30px"
            width="170px"
            className="cursor-pointer mt-0 mb-0"
            src={logo}
          />
          <div className='border-none rounded-lg transform motion-safe:hover:scale-110 border-gray-200'>
          <Link href="/">
           <span className="font-bold transition duration-500 ease inline-block hover:text-red-500 text-2xl rounded-sm border-none text-blue-600 cursor-pointer">ASTERMIRA </span>
          </Link>
          </div>
          <span className='text-sm text-green-300'>Balanced Perspectives to Trending News </span>
        </div>
        
        <div className="hidden md:float-left md:contents ">
          <BsSearch className="md:float-right mt-2 align-middle ml-4 text-2xl text-gray-500 cursor-pointer transform motion-safe:hover:scale-110 hover:text-green-500"/>
          {categories.map((category, index) => (
            <Link key={index} href={`/category/${category.slug}`}><span className="md:float-right mt-2 align-middle text-blue ml-4 font-semibold cursor-pointer transform motion-safe:hover:scale-110 hover:text-green-500">{category.name}</span></Link>
            ))}
        </div>
      </div>
          <div className="align-center mt-2"> 
            <span className='text-pink-500 text-center font-normal'> Welcome to Astermira and thanks for visiting us today: </span>
            <span className='text-green-500 font-normal'> {moment().format('dddd, MMMM Do YYYY')}  </span>
            {/* <span className='text-pink-500 font-normal'>   {moment().format('h:mm:ss a')}  </span> */}
          </div>
    </div>
  );
};

export default Header;
