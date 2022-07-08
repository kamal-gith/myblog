import React from 'react';

import Link from 'next/link';
import { AiFillFacebook, AiFillInstagram, AiFillTwitterSquare, AiFillYoutube, AiOutlineMessage, AiTwotoneMessage } from "react-icons/ai";

const Message = () => {
  
  return (
    <div className='py-8 flex flex-col justify-center shadow-lg relative sticky right-0 bottom-0 z-10 container px-10 cursor-pointer'>
        <div className='space-between'>
            <span className=''> Let's Connect on facebook</span>
        </div>
        <div className='flex-3 justify-self-end ml-10'>
            <Link href="https://fb.me/astamira" > 
                <span className=' text-gray-600'>
                <AiOutlineMessage size={50}/> 
                </span>
            </Link>
       </div>
       
    </div>
  );
};

export default Message;
