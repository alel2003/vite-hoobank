import {feedback} from '../../constants'
import TestiomonialsCard from '../ui/TestiomonialsCard'

const Testimonials = () => {
  return (
    <section
      name="clients"
      className="flex flex-col md:gap-y-[80px] gap-y-[40px] md:pt-[70px] md:pb-[50px] pt-[35px] pb-[25px]"
    >
      <div
        className="flex md:flex-row md:justify-between flex-col justify-start 
      md:items-center items-start"
      >
        <h2
          className="font-poppins md:text-[48px] text-[px] md:leading-[80px] 
        leading-[30px] font-semibold text-white md:mb-[24px] mb-[15px] md:max-w-[40%] max-w-full"
        >
          What people are saying about us
        </h2>
        <p
          className="font-poppins text-[18px] font-normal leading-[30px]
         text-dimWhite mb:mb-[48px] mb-[24px] md:max-w-[40%] max-w-full"
        >
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1">
        {feedback.map((item) => (
          <TestiomonialsCard
            key={item.id}
            text={item.content}
            name={item.name}
            title={item.title}
            icon={item.img}
          />
        ))}
      </div>
    </section>
  );
}

export default Testimonials
