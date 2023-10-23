import React from 'react'
import styles from "../../style";
import { arrowUp } from "../../assets";

function Button() {
  return (
    <a 
    className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full
    bg-blue-gradient p-[2px] cursor-pointer group`}>
      <div className={`${styles.flexCenter} flex-col bg-primary w-full h-full rounded-full`}>
        <div className={`${styles.flexStart} flex-row`}>
            <p className='font-poppins font-medium text-[18px] leading-[23.4px] text-gradient'>
              Get
            </p>
            <img className='w-[23px] h-[23px] object-contain group-hover:rotate-90 duration-300' src={arrowUp} alt="arrow" />
        </div>
        <p className='font-poppins font-medium text-[18px] leading-[23.4px] text-gradient'>
            Started
      </p>
      </div>
    </a>
  )
}

export default Button
