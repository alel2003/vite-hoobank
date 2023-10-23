import React from 'react'

const InfoLine = ({num, text}) => {
  return (
    <div className='flex md:justify-around md:flex-row flex-col items-center'>
      <p className='font-poppins font-semibold sm:text-[40px] 
      text-[20px] text-white'>
        {num}
      </p>
      <p 
      className='font-poppins font-normal sm:text-[20px]
      text-[15px] uppercase text-gradient'>
        {text}
      </p>
    </div>
  )
}

export default InfoLine
