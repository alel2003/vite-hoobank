import React from 'react'
import TextBlock from '../ui/TextBlock'
import ButtonGet from '../ui/ButtonGet'

const CTA = () => {
  return (
    <section className='md:mt-[50px] md:mb-[55px] mt-[25px] mb-[30px] 
    md:py-[72px] md:px-[97px] py-[36px] px-[45px] bg-black-gradient-2 rounded-[20px]
    flex md:flex-row md:justify-between md:items-center flex-col
    '>
     <div className='md:w-[60%] w-full'>
     <TextBlock 
      title='Let’s try our service now!'
      text='Everything you need to accept 
      card payments and grow your business anywhere on the planet.'
      />
     </div>
     <ButtonGet />
    </section>
  )
}

export default CTA
