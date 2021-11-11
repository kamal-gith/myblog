import React from 'react';
import Image from 'next/image';

import { grpahCMSImageLoader } from '../util';

const Author = ({ author }) => (
  <div className="text-center p-12 relative rounded-lg border-b border-gray-400 mb-20">
    
    <p>Posted by:</p> <h3 className="text-green-400  mb-2 font-bold">  {author.name}</h3>
    <p className="text-black text-ls">{author.bio}</p>
    <div className="mb-8 ">
      <Image
        unoptimized
        loader={grpahCMSImageLoader}
        alt={author.name}
        height="100px"
        width="100px"
        className="align-middle rounded-full"
        src={author.photo.url}
      />
    </div>
  </div>
  
);

export default Author;
