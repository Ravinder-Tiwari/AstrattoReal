import React from 'react';

const Section4Card = ({ data }) => {
  return (
    <div className='bottom  border border-[#ffffff58] rounded-3xl mt-10  flex flex-row flex-wrap  shadow-amber-200 gap-8 p-3 justify-center'>
      {data.map(function (item,idx) {
        return (
          <div className='flex flex-col items-center  relative gap-8 w-100 lg:w-130 xl:w-150' key={idx}>
            <video className='h-130 w-full object-cover rounded-3xl' muted loop autoPlay src={item.video}></video>
            <div className="bg-[#ffffff5b] flex justify-center items-center h-15 w-15 rounded-full absolute right-1/12 top-1/20"><i className="ri-arrow-right-up-line text-4xl font-light text-black"></i></div>
            <div className='flex flex-col gap-2'>
              <h4 className='text-3xl text-orange-500'>{item.data1}</h4>
              <p className='text-lg text-gray-300'>{item.data2}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Section4Card;