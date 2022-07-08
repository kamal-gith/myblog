import React from 'react'
import moment from 'moment';
<<<<<<< HEAD
import { AiFillFacebook, AiFillInstagram, AiFillTwitterSquare, AiFillYoutube, AiOutlineHome } from "react-icons/ai";
=======
import { AiFillFacebook, AiFillInstagram, AiFillTwitterSquare, AiFillYoutube } from "react-icons/ai";
>>>>>>> 89742aa04f09709a7548f48453a5e106ad521a46
import Link from 'next/link';

const Banner = () => {
  return (
    <div className="sticky top-0 z-10 border-blue-400 w-full flex justify-center px-1 w-full bg-sky-500">
        <div className="flex justify-center relative py-2 md:py-2 px-1 rounded-md w-full bg-white">
<<<<<<< HEAD
            <div className="mt-3 mr-[120px] md:mr-10">
              <Link href='/'>
                <AiOutlineHome size={25} className="text-gray-600 cursor-pointer"/>
              </Link>
            </div>
            <div className="md:flex-3 md:w-[70%] mt-4 flex justify-center">
              {/* <span className="mr-3"> <strong>astermira</strong> is social </span> */}
              <Link href="https://fb.me/astamira">
                <AiFillFacebook className='cursor-pointer mr-2 text-xl text-gray-600 md:text-2xl'/>
              </Link>
              <Link href="https://www.instagram.com/astermirablog">
                <AiFillInstagram className='text-gray-600 cursor-pointer mr-2 text-xl md:text-2xl'/>
              </Link>
              <Link href="/">
                <AiFillYoutube className='text-gray-600 text-xl md:text-2xl mr-2 cursor-pointer'/>
              </Link>
              <Link href="/">
                <AiFillTwitterSquare className='text-gray-600 cursor-pointer text-xl md:text-2xl' />
              </Link>
              </div>
=======
            <div className="md:flex-3 md:w-[70%] mt-4 flex justify-center">
            <span className="mr-3"> <strong>astermira</strong> is social </span>
            <Link href="https://fb.me/astamira">
            <AiFillFacebook className='cursor-pointer mr-2 text-xl md:text-2xl'/>
            </Link>
            <Link href="https://www.instagram.com/astermirablog">
            <AiFillInstagram className='cursor-pointer mr-2 text-xl md:text-2xl'/>
            </Link>
            <Link href="/">
            <AiFillYoutube className='text-xl md:text-2xl mr-2 cursor-pointer'/>
            </Link>
            <Link href="/">
            <AiFillTwitterSquare className='cursor-pointer text-xl md:text-2xl' />
            </Link>
            </div>
>>>>>>> 89742aa04f09709a7548f48453a5e106ad521a46
            
        <div className="hidden md:block mt-1 ml-10 py-2 md:py-2 px-1">
            <span className="text-sm ">{moment().format('dddd Do MMMM, YYYY.')}</span>
        </div>
        </div>
    </div>
  )
}

export default Banner