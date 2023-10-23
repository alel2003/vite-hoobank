import React from 'react'

function TextBlock({title, text}) {
  return (
    <div>
        <h2 
        className='font-poppins md:text-[48px] text-[24px] md:leading-[80px] leading-[30px] font-semibold text-white md:mb-[24px] mb-[15px]'>
        {title}
        </h2>
        <p className='font-poppins text-[18px] font-normal leading-[30px] text-dimWhite mb:mb-[48px] mb-[24px]'>
        {text}
        </p>
    </div>
  )
}

export default TextBlock