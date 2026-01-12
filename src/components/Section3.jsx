import React from 'react';

const Section3 = () => {
    return (
        <div className='flex gap-5 items-center flex-col w-full  mt-10'>
            <p className='text-center text-gray-300 md:text-2xl'>ABOUT ASTRATTO</p>
            <div className='flex flex-col gap-4  items-center'>
                <h1 className='flex gap-3 justify-center text-xl md:text-7xl'>Our<span className='text-gray-300'> visionary </span> <span className='text-amber-600'>artisans</span>  collaborate</h1>
                <h1 className='flex items-center gap-1 text-xl md:text-5xl'>to craft<span className='h-10 w-10 bg-amber-950 flex items-center justify-center rounded-full md:h-15 md:w-15'><i className="ri-bard-line text-xl md:text-3xl"></i></span> inspiring <span className='text-gray-300'>experiences</span></h1>
                <h1 className='text-xl flex gap-1 md:text-5xl md:gap-4'><span className='text-gray-300'>leaving</span>lasting <span className='text-gray-300'>imprints</span> on</h1>
                <h1 className='md:text-5xl md:gap-4'>and spaces. <i className="ri-bard-fill text-amber-400 text-xl md:text-5xl md:gap-4'"></i></h1>

            </div>
        </div>
    );
};

export default Section3;