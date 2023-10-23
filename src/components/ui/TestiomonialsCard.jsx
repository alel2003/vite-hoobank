import React from 'react'
import { quotes } from "../../assets";

const TestiomonialsCard = ({text, icon, name, title}) => {
  return (
    <div className='flex flex-col justify-between py-[60px] px-[40px] rounded-[20px]
    cursor-pointer feedback-card'>
      <img className='w-[42px] h-[27px] object-contain' src={quotes} alt="" />
      <p className='font-poppins text-[18px] font-normal mt-[40px] leading-[30px] text-white'>
        {text}
      </p>
      <div className='flex gap-x-[16px] mt-[29px]'>
        <img className='w-[48px] h-[48px] object-cover rounded-[48px]' src={icon} alt="" />
       <div className='flex flex-col'>
       <p className='font-poppins text-[20px] font-normal text-white'>
            {name}
        </p>
        <p className='font-poppins text-[16px] font-normal text-dimWhite'>
            {title}
        </p>
       </div>
      </div>
    </div>
  )
}

export default TestiomonialsCard
