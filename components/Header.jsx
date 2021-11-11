import React, { useState, useEffect } from 'react';

import Link from 'next/link';
import { getCategories } from '../services';

const Header = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="border-b w-full inline-block border-blue-400 py-8 ">
        <div className="md:float-left block">
          <div className='bg-green-500 w-1/2 border-none rounded-lg transform motion-safe:hover:scale-110 mb-4'>
          <Link href="/">
            <span className="cursor-pointer font-bold text-3xl text-white ml-1">AsterMira </span>
          </Link>
          </div>

            <p className='text-green-500 font-normal'>Balanced Perspectives to Trending News </p>
        </div>
        <div className="hidden md:float-left md:contents ">
          {categories.map((category, index) => (
            <Link key={index} href={`/category/${category.slug}`}><span className="md:float-right mt-2 align-middle text-blue ml-4 font-semibold cursor-pointer transform motion-safe:hover:scale-110">{category.name}</span></Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
