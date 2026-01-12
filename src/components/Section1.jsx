import React from 'react';
import img1 from '../assets/heroimg1.jpg';
import img2 from '../assets/heroimg2.webp';
import img3 from '../assets/svg1.webp';
const Section1 = () => {
    return (
        <div className='mt-4 flex flex-col gap-10 relative items-center z-999'>
            <div className='flex gap-3 justify-center md:flex-col md:items-end md:ml-auto'>
                <button className='px-2 py-2 rounded-xl bg-white/20 backdrop-blur-2xl border border-white/20 shadow-[inset_0_0_10px_rgba(0,0,0,0.35)]'>Via della Creative,23</button>
                <button className='px-2 py-2 rounded-xl bg-white/20 backdrop-blur-xl border border-white/20 shadow-[inset_0_0_10px_rgba(0,0,0,0.35)]'>202121 Milano</button>
            </div>
            <div className='flex flex-col gap-4 items-center'>
                <p className='md:text-[2vw]'>Igniting the spark of inspiration</p>
                <h1 className='text-4xl md:text-[5vw]'>Unleash Your</h1>
                <h1 className='text-4xl flex items-center gap-1.5 md:text-[7vw]'>Brand <span className='h-10 w-10 bg-white/20 backdrop-blur-xl border border-white/20 shadow-[inset_0_0_10px_#8017F5] flex items-center justify-center rounded-full '><i className="ri-bard-line text-2xl animate-spin "></i></span> with Our</h1>
                <h1 className='text-4xl flex gap-3'><span className='pb-4 rotate-5 rounded-lg px-4 bg-[#FFFF7D] text-[#8017F5] font-semibold'>Magico</span>Design</h1>
            </div>
            <div className='flex mt-10 w-full justify-evenly items-center md:justify-center md:rotate-[-10deg]'>
                <h4 className='bg-white/16.5 backdrop-blur-[300px] shadow-[inset_0_0_5px_rgba(255,255,255,0.165)] border-white/1.5 shadow-[0 0 0] text-2xl px-2 py-2 border rounded-lg'>Create Magic</h4>
                <h4 className='px-3 py-2 bg-[#8017F5] rounded-[50%]'><i className='ri-shining-fill text-2xl'></i></h4>
            </div>
            <img src={img1} className="h-[40vw]  max-h-75 absolute z-[-1] left-0 md:left-[15%] lg:left-[20%] xl:left-[25%] bg-emerald-500  animate-bounce rotate-[-10deg] top-1/5" alt="" style={{
                clipPath: 'inset(5% 20% 15% 10% round 5% 5% 50% 50%)'
            }} />
            <img src={img2} className="h-[40vw] max-h-75  absolute z-[-1]  animate-pulse rotate-35 bottom-0 right-1/19 md:right-[5%] lg:right-[20%]" alt="" style={{
                clipPath: 'inset(5% 20% 15% 10% round 90% 90% 95% 5%)'
            }} />
            <img src={img3} alt="" className='absolute h-10 bottom-1/5 left-1/10 opacity-40 md:left-[25%] md:h-20 md:bottom-[0%] ' />
        </div>
    );
};

export default Section1;