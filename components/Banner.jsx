import React from 'react'
import moment from 'moment';
import { AiFillFacebook, AiFillInstagram, AiFillTwitterSquare, AiOutlineHome } from "react-icons/ai";
import Link from 'next/link';

const Banner = () => {
  return (
    <div className="sticky top-0 z-10 flex py-6 justify-center px-1 bg-red-800">
        <div className="flex space-x-10 relative">
            <div className="">
              <Link href='/'>
                {/* <AiOutlineHome size={25} className="text-white cursor-pointer"/> */}
                <span className='text-white font-bold border border-white rounded-md p-2 hover:bg-white hover:text-red-900 cursor-pointer'>astermira</span>
              </Link>
            </div>
            <div className="flex gap-2 text-xl md:text-2xl text-gray-300">
              {/* <span className="mr-3"> <strong>astermira</strong> is social </span> */}
              <Link href="https://fb.me/astamira">
                <AiFillFacebook className='cursor-pointer hover:text-white'/>
              </Link>
              <Link href="https://www.instagram.com/astermirablog">
                <AiFillInstagram className='cursor-pointer hover:text-white'/>
              </Link>
              {/* <Link href="/">
                <AiFillYoutube className='text-gray-600 text-xl md:text-2xl mr-2 cursor-pointer hover:text-white'/>
              </Link> */}
              <Link href="/">
                <AiFillTwitterSquare className='cursor-pointer hover:text-white' />
              </Link>
              </div>
            
            <div className="">
                <span className="text-[14px] text-gray-200 capitalize">{moment().format('ddd.  Do MMM, YYYY.')}</span>
            </div>
        </div>
    </div>
  )
}

export default Banner