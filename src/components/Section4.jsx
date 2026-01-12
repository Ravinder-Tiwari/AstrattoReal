import React from 'react';
import Section4Card from './Section4Card';
import v4 from '../assets/v4.mp4'
import v5 from '../assets/v5.mp4'
import v6 from '../assets/v6.mp4'
import v7 from '../assets/v7.mp4'
const Section4 = () => {
  let arr = [
    {
      data1: "Snowscape Haven",
      data2: "Crafting a visual identify that mirrors the serenity and allure a einter sanctuary",
      video: v4,
    },
    {
      data1: "The Lighthouse",
      data2: "Adding a new dimension to projects through thoughtfully designed 2D animations",
      video: v5,
    },
    {
      data1: "Navgating Possibilities",
      data2: "Motion graphics breather life into the project blending direction and creativity",
      video: v6,
    },
    {
      data1: "Nocturnal symphony",
      data2: "Thriugh 3D artistry,we orchestrate an animated ode to the evening, a dance of shadows and dreams",
      video: v7,
    },
  ]
  return (
    <div className='p-2 flex flex-col mt-20'>
      <div className='top flex w-full flex-col items-left  gap-4'>
        <h2 className='text-4xl md:text-7xl'>Recent Projects</h2>
        <p className='w-85 md:text-2xl md:w-full'>Step into the workld od our most recent Projects a showcase of our unwavering commitment to progressive design.</p>
      </div>

      <Section4Card data={arr} />

    </div>
  );
};

export default Section4;