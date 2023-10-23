import React from 'react'
import styles from '../../style';
import { discount, robotHand, cardOne } from "../../assets";
import Button from "../ui/Button";

const Hero = () => {
  return (
    <section 
    className={`grid md:grid-cols-2 grid-cols-1 sm:pt-[200px] sm:pb-[100px] pb-[30px] pt-[50px] px-6 sm:gap-x-[5px] gap-y-[5px]`}
    id='home'>
      <div className={`flex ${styles.flexStart} flex-col`}>
         {/* discount block start */}
          <div className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient 
           rounded-[10px] mb-2 gap-x-[13px]'>
              <img 
              className='w-[32px] h-[32px]'
              src={discount} alt="discount"
              />
            <p className={`${styles.paragraph}`}>
              <span className='text-white'>20%</span> DISCOUNT FOR
              <span className='text-white'>1 MONTH</span> ACCOUNT
            </p>
          </div>
          {/* discount block end */}

          {/* title block start */}
          <div className='flex flex-row justify-between items-center w-full'>
              <h1 
              className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px]
              text-white ss:leading-[100px] leading-[75px]
              '>
              The Next <br className='sm:block hidden'/> 
              <span className='text-gradient '>Generation</span> <br className='sm:block hidden'/>
              </h1>
              <div className='ss:flex hidden md:mr-4 mr-0'>
                <Button />
              </div>
          </div>
          <h1 
              className='font-poppins font-semibold ss:text-[68px] text-[52px]
              text-white
              '>
              Payment Method.
          </h1>
          <p className={`${styles.paragraph} md:max-w-[80%] max-w-full mt-5`}>
          Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. 
          We examine annual percentage rates, annual fees.
          </p>
          {/* title block end */}
      </div>
      {/* robo bg start*/}
      <div className={`hidden md:flex flex-col ${styles.flexCenter}  relative bg-primary`}>
        <img 
        className='element w-full h-full absolute top-[-200px] left-0 z-[5]'
        src={cardOne} alt="plastic card" />
          <img 
          className='element w-full h-full absolute bottom-0 left-0 z-[5]'
          src={robotHand} alt="robot" />
          {/* gradient start*/}
          <div className='absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient'></div>
          <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
          <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
           {/* gradient end*/}
      </div>
       {/* robo bg end*/}
        
        {/* mobile button start */}
       <div className={`ss:hidden ${styles.flexCenter}`}>
         <Button /> 
       </div>
       {/* mobile button end*/}
    </section>
  )
}

export default Hero
