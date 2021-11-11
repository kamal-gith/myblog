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
      <div className="border-b w-full inline-block border-gray-200 py-8 ">
        <div className="md:float-left block">
          <div className='border-none rounded-lg transform motion-safe:hover:scale-110 border-gray-200'>
          <Link href="/">
            {/* <span className="cursor-pointer font-bold text-3xl text-green-600">Aster Mira </span> */}
            <span className="font-bold transition duration-500 ease hover:bg-indigo-900 inline-block bg-green-600 text-4xl rounded-sm border-none text-white px-8 py-3 cursor-pointer">Aster Mira </span>
          </Link>
          </div><p className='text-sm mb-2'>Balanced Perspectives to Trending News </p></div>
        
        
        <div className="hidden md:float-left md:contents ">
          {categories.map((category, index) => (
            <Link key={index} href={`/category/${category.slug}`}><span className="md:float-right mt-2 align-middle text-blue ml-4 font-semibold cursor-pointer transform motion-safe:hover:scale-110">{category.name}</span></Link>
            ))}
        </div>
          <div className="float-middle mt-24"> 
            <p className='text-red-500 text-sm text-center font-semibold'>
            Welcome to Aster Mira, best site for all your favorite and trending gists:
            Politics, Sport, Health, Education, Entertainment, Inspiration and so much more...
            </p>
          </div>
      </div>
    </div>
  );
};

export default Header;
