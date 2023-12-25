import ButtonGet from '../ui/ButtonGet'
import HorizontalCard from '../ui/HorizontalCard'
import TextBlock from '../ui/TextBlock'
import { features } from '../../constants'

const Business = () => {
  return (
    <section name="product" className='grid md:grid-cols-2 grid-cols-1 md:gap-x-[40px] gap-y-[15px] md:pt-[180px] mb:pd-[80px] pt-[70px] pb-[40px]'>
      <div>
        <TextBlock 
        title='You do the business, we’ll handle the money.'
        text='With the right credit card, you can 
        improve your financial life by building 
        credit, earning rewards and saving money. 
        But with hundreds of credit cards on the market.'
        />
        <ButtonGet />
      </div>
      <div className='grid grid-rows-3'>
      {features.map(item => (
        <HorizontalCard 
        key={item.id}
        text={item.content}
        icon={item.icon}
        title={item.title}
        />
      ))}
      </div>
    </section>
  )
}

export default Business
