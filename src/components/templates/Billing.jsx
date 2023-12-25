import { apple, bill, google } from "../../assets";
import TextBlock from '../ui/TextBlock'

function Billing() {
  return (
    <section id="product" className='grid md:grid-cols-2 grid-cols-1 md:gap-x-[70px] gap-y-[30px] md:py-[60px] py-[45px]'>
       <div>
       <img src={bill} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

       {/* gradient start */}
       <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
       <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
       {/* gradient end */}
       </div>

       <div className='md:pt-[65px] pt-0 md:mb-[24px] mb-[15px]'>
        <TextBlock 
        title='Easily control your billing & invoicing.'
        text='With the right credit card, you can improve your 
        financial life by building credit, earning rewards 
        and saving money. But with hundreds of credit cards on 
        the market.'
        />
        <div className="flex flex-row flex-wrap">
        <img src={apple} alt="google_play" className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer" />
        <img src={google} alt="google_play" className="w-[144.17px] h-[43.08px] object-contain cursor-pointer" />
        </div>
       </div>
    </section>
  )
}

export default Billing
