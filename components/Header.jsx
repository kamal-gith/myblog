import React, { useState, useEffect } from 'react';

import Link from 'next/link';
import { getCategories } from '../services';
import { BsSearch } from "react-icons/bs";

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
            
            
            <span className="font-bold transition duration-500 ease inline-block hover:text-pink-500 text-2xl rounded-sm border-none text-green-500 px-8 py-3 cursor-pointer">ASTERMIRA </span>
          </Link>
          </div><p className='text-sm mb-2'>Balanced Perspectives to Trending News </p></div>
        
        
        <div className="hidden md:float-left md:contents ">
          <BsSearch className="md:float-right mt-2 align-middle ml-4 text-2xl text-gray-500 cursor-pointer transform motion-safe:hover:scale-110 hover:text-green-500"/>
          {categories.map((category, index) => (
            <Link key={index} href={`/category/${category.slug}`}><span className="md:float-right mt-2 align-middle text-blue ml-4 font-semibold cursor-pointer transform motion-safe:hover:scale-110 hover:text-green-500">{category.name}</span></Link>
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
