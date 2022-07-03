import React from 'react'
import moment from 'moment';
import { AiFillFacebook, AiFillInstagram, AiFillTwitterSquare, AiFillYoutube } from "react-icons/ai";
import Link from 'next/link';

const Banner = () => {
  return (
    <div className="sticky top-0 z-10 bg-red-200 w-full flex justify-center gap-5 py-3 px-3 w-full bg-sky-500">
        <div className="flex-3 relative py-2 md:py-2 px-1 rounded-md w-full bg-white">
            <div className="mt-4 flex justify-center">
            <span className="uppercase mr-4">We are Social </span>
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
            
        </div>
        <div className="py-3 w-[70%">
            <span className="text-sm ">{moment().format('dddd Do MMMM, YYYY.')}</span>
        </div>
    </div>
  )
}

export default Banner