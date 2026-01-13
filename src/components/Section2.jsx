import React from 'react';
import Cards from './Cards';
import  v1 from '../assets/v1.mp4'
import  v2 from '../assets/v2.mp4'
import  v3 from '../assets/v3.mp4'
const Section2 = () => {
    const arr =[
        {
            data1:"Motion",
            data2:"Graphics",
            arrow : true,
            para:"ideas to life through dynamic visuals and engaging animations.",
            video:v1
        },
        {
            data1:"2D/3D",
            data2:"Animation",
            arrow :false,
            para:"ideas to life through dynamic visuals and engaging animations.",
            video:v2,
            bottom:0,
            left:0,
        },
        {
            data1:"Visual",
            data2:"Identity",
            arrow : true,
            para:"Shape a unique brand persona through our comprehensive Visual identity solutions.",
            video:v3
        }
    ]
  return (
    <div className='flex flex-col justify-between gap-10 items-center mt-24 p-4 rounded border border-gray-400 '>
        <div  className='section2top p-4 flex flex-col gap-3 md:flex-row w-full justify-evenly items-center '>
            <h2 className='text-4xl'>Our Services</h2>
            <p className='font-light md:text-lg w-90  lg:w-150 xl:w-190'>Discover a wide range of opportunities thorugh a comprehensive range of qualified services</p>
        </div>
        <Cards data = {arr} />
    </div>
  );
};

export default Section2;