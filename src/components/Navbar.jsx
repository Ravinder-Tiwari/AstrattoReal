import React from 'react';

const Navbar = () => {
  return (
    <div className='relative py-3  
      w-full 
      flex 
      items-center justify-between
      px-6 flex-row-reverse border-b border-[#909090] md:flex-row'>
        <div className='flex gap-5'>
            <h3 className='hover:text-black'>Services</h3>
            <h3 className='hover:text-black'> Work</h3>
            <h3 className='hover:text-black'>About</h3>
        </div>
        <div className='flex gap-3 items-center'>
            <div className='h-13 w-13 bg-[#8017F5] flex items-center justify-center rounded-full'><i className="ri-bard-line text-2xl"></i></div>
            <h1 className='text-lg'>Astratto</h1>
        </div>
        <div className='hidden gap-10 items-center md:flex'>
            <h3 className='text-lg hover:text-[#8017F5] hover:border-b-2'>Careers</h3>
            <h3 className='text-lg px-2.5 py-2 border rounded-3xl border-white/30  hover:border-[#FFB120] '>Contact Us <i className="ri-arrow-right-up-line"></i></h3>
        </div>
        
        
      </div>
  );
};

export default Navbar;