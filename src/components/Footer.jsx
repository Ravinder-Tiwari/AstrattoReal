import React from 'react';

const Footer = () => {
    return (
        <div className='flex flex-col gap-5 mt-6'>
            <div className='flex justify-center flex-col w-full items-center gap-4'>
                <p className='text-sm text-amber-600 md:text-3xl'>Open the door to forging your brand's story</p>
                <div className='flex flex-col items-center  md:gap-3'>
                    <h1 className='text-xl flex gap-1 md:text-5xl'> <i className="ri-bard-fill text-amber-400 text-xl md:text-5xl"></i>Ebark on a Transformative journey</h1>
                    <h1 className='text-xl'>Shaping <span className='text-sm py-1 px-2 bg-amber-300 text-black rounded-3xl b rotate-[4deg] inline-block
                md:text-[2vw]'>Your Bransd's Destiny</span>Through Our</h1>
                    <h1 className='md:text-2xl'>Dedicated Partnership</h1>
                </div>
                <p className='text-md text-gray-300 text-center'>Join us on a Transformative journey yo shape yout brand's through our dedicated partnership,crafting a narrative that resonates</p>
            </div>
            <div className='flex flex-col items-center justify-between gap-3 py-2 mb-4  border-t border-b border-[#ffffff91]   text-gray-300 px-3 md:flex-row'>
                <h2>Ravinder Tiwari</h2>
                <div className='flex gap-5'>
                    <a href="https://www.instagram.com/aimima2027/?next=%2F"><i class="ri-instagram-line text-3xl"></i></a>
                    <a href="https://www.linkedin.com/in/ravinder-tiwari-11426a323/"><i class="ri-linkedin-box-fill text-3xl"></i></a>
                    <a href="https://x.com/RAVINDER_WEBDEV"><i class="ri-twitter-line text-3xl"></i></a>
                </div>
                <div className='flex gap-3'>
                    <p className='text-sm'>Privacy & Cookie Policyy</p>
                    <p className='text-sm'>Astratto @ 2026</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;