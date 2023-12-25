import { logo } from '../../assets'
import { footerLinks } from '../../constants'

const Footer = () => {
  return (
    <section
      className="flex md:flex-row flex-col justify-between items-center
    md:pt-[70px] md:pb-[40px] pt-[25px] pb-[20px] md:gap-y-0 gap-y-[20px]"
    >
      <div className="flex flex-col gap-y-[34px]">
        <img
          className="w-[250px] h-[72px] object-contain"
          src={logo}
          alt="logo"
        />
        <p className="font-poppins text-[18px] font-normal text-dimWhite max-w-[312px]">
          A new way to make the payments easy, reliable and secure.
        </p>
      </div>
      <div className="flex md:w-auto w-full md:flex-nowrap flex-wrap flex-row md:justify-start justify-between md:gap-x-[100px] gap-y-[10px]">
        {footerLinks.map((footerLink) => (
          <div
            key={footerLink.title}
            className="flex flex-col min-w-[150px]"
          >
            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
              {footerLink.title}
            </h4>
            <ul className="list-none mt-4">
              {footerLink.links.map((link) => (
                <li
                  key={link.name}
                  className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer"
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Footer
