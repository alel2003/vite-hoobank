import ClientsLogo from '../ui/ClientsLogo'
import {clients} from '../../constants'

const Clients = () => {
  return (
    <section className='flex md:flex-row flex-col justify-between items-center md:py-[50px] py-[25px] md:gap-y-0 gap-y-[10px]'>
     {clients.map(client => (
       <ClientsLogo 
       key={client.id}
       img={client.logo}
       text={client.id}
       />
     ))}
    </section>
  )
}

export default Clients
