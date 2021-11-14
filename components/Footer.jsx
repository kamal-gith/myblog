import React from 'react';

import Link from 'next/link';

const Footer = () => {
  
  return (
    <div className="border-t border-gray-200 container mx-auto px-10 mb-8">
      
        <div className="flex items-center justify-center mr-8 items-center mt-8">
        <div>
            <Link href="/">
                <span className='mt- mr-20 font-normal text-gray-600 cursor-pointer'> About Us</span> 
            </Link>
        </div>
        <div>
            <Link href="/">
                <span className='mt- mr-20 font-normal text-gray-600 cursor-pointer'> Join our Team</span> 
            </Link>
        </div>
        <div>
            <Link href="/">
                <span className='mt-2 mr-20 font-normal text-gray-600 cursor-pointer '> Advertise with Us</span> 
            </Link>
        </div>
        <div>
            <Link href="/">
                <span className='mt-2 mr-20 font-normal text-gray-600 cursor-pointer'> Our Privacy Policy</span> 
            </Link>
        </div>
        </div>
        
        <div className='border-t border-gray-100 flex items-center justify-center mt-8 items-center'>
            <p className='text-sm mt-2'>&copy; 2021 | All Rights Reserved. Astermira, Inc. </p>
        </div>
        
    </div>
  );
};

export default Footer;
