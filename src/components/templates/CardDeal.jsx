import { card } from "../../assets";
import TextBlock from '../ui/TextBlock'
import ButtonGet from '../ui/ButtonGet'

const CardDeal = () => {
  return (
    <section
      name="features"
      className="grid md:grid-cols-2 grid-cols-1 md:py-[80px] py-[50px]
    md:gap-x-[60px] gap-y-[30px]
    "
    >
      <div>
        <TextBlock
          title="Find a better card deal in few easy steps."
          text="Arcu tortor, purus in mattis at sed integer 
      faucibus. Aliquet quis aliquet eget mauris tortor.ç
       Aliquet ultrices ac, ametau."
        />
        <ButtonGet />
      </div>
      <div>
        <img
          src={card}
          alt="billing"
          className="w-[100%] h-[100%]"
        />
      </div>
    </section>
  );
}

export default CardDeal
