import React from 'react';
import Image from 'next/image';

import { grpahCMSImageLoader } from '../util';

const Author = ({ author }) => (
  <div className="text-center py-5 px-10 relative border-b border-gray-200 mb-20">
    
    <span className='text-sm text-gray-400 capitalized'>Posted by:</span><br /> 
    <span className="text-gray-500 capitalize mb-2 font-semibold">  {author.name}</span>
    <p className="text-black text-sm mb-2">{author.bio}</p>
    <div className="mb-8 ">
      <Image
        unoptimized
        loader={grpahCMSImageLoader}
        alt={author.name}
        height="70px"
        width="70px"
        className="align-middle rounded-full"
        src={author.photo.url}
      />
    </div>
  </div>
  
);

export default Author;
