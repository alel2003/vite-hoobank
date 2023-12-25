import { stats } from "../../constants";
import InfoLine from '../ui/InfoLine';

const Stats = () => {
  return (
    <section className='grid grid-cols-3 gap-x-[52px]'>
      {stats.map(stat => (
        <InfoLine key={stat.id} num={stat.value} text={stat.title}/>
      ))}
    </section>
  )
}

export default Stats
