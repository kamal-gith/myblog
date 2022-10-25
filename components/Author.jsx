import React from 'react';
import Image from 'next/image';

import { graphCMSImageLoader } from '../util';

const Author = ({ author }) => (
  <div className="py-5 relative bg-gradient-to-r from-blue-100 flex justify-center mb-10 rounded-lg">
    
    <div className="mr-4 ">
      <Image
        unoptimized
        loader={graphCMSImageLoader}
        alt={author.name}
        height="100px"
        width="100px"
        className="align-middle rounded-full"
        src={author.photo.url}
      />
    </div>
    <div className="items-left">
    <span className='text-[12px] uppercase'>Written by:</span><br /> 
    <span className="text-gray-600 font-semibold capitalize text-md">  {author.name}</span>
    <p className="text-black text-sm">{author.bio}</p>
    </div>
  </div>
  
);

export default Author;
