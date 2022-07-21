import React, { useState, useEffect } from 'react';
import moment from 'moment'
import Link from 'next/link';
import { getCategories } from '../services';
import {BsSearch } from "react-icons/bs";
import Image from 'next/image';
import logo from './logo.jpg'
import { AiFillFacebook, AiFillInstagram, AiFillTwitterSquare, AiFillYoutube, AiOutlineMenu, AiOutlineMenuFold, AiOutlineMenuUnfold, AiTwotoneFolderOpen } from "react-icons/ai";

const Header = () => {
  const [categories, setCategories] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  return (
    <>
    <div className="container mx-auto px-10 mb-8">
      <div className=" w-full inline-block py-2">
        <div className="mb-4 flex justify-center md:float-left block">
              <Image
            unoptimized
            alt=''
            href='/'
            height="10px"
            width="39px"
            className="cursor-pointer "
            src={logo}
          />
          <div className='border-none rounded-lg transform motion-safe:hover:scale-110 border-gray-200'>
            <Link href="/">
            <span className="m-2 font-bold inline-block text-gray-600 md:text-2xl text-xl cursor-pointer">
              astermira 
            </span>
            </Link>
          </div>
            
          {/* <div className='ml-20'>
            <span className="mt-5 inline-block text-gray-600 font-semibold justify-end md:hidden">{moment().format('dddd Do MMMM, YYYY.')}</span>
          </div> */}
        <div onClick={() => setOpen((prev)=> !prev)} className="md:hidden flex justify-center ml-20 flex-col cursor-pointer motion-safe:hover:scale-110">
          {!open? <AiOutlineMenu className="text-3xl text-gray-600"/> : <span className="text-2xl text-gray-600">X</span> }
          
        </div>
        </div>
        
        
        <div className="hidden md:float-left md:contents ">
          {/* <BsSearch className="md:float-right mt-2 align-middle ml-4 cursor-pointer transform motion-safe:hover:scale-110 hover:text-red-500"/> */}
          {categories.map((category, index) => (
            <Link key={index} href={`/category/${category.slug}`}><span className="md:float-right mt-2 align-middle text-blue ml-4 uppercase cursor-pointer transform motion-safe:hover:scale-110 hover:text-red-500">{category.name}</span></Link>
            ))}
        
        </div>
        {open &&
        <>
          <span className="md:hidden ml-[50px] uppercase text-gray-400 text-sm text-center">sort Posts by categories</span>
        <div className='md:hidden flex flex-wrap justify-center w-full mt-3 border-t'>
          {categories.map((category, index) => (
            <Link  key={index} href={`/category/${category.slug}`}>
              <span onClick={() => setOpen((prev)=> !prev)} className="mt-2 align-middle text-sm font-semibold ml-4 uppercase cursor-pointer transform motion-safe:hover:scale-110 hover:text-red-500">{category.name}
              </span>
            </Link>
            ))}
        </div>
        </>
        }
      </div>          
    </div>
    </>
  );
};

export default Header;
