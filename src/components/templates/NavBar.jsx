import { useState } from 'react';
import { Link } from 'react-scroll'
import {logo, menu, close} from '../../assets'
import { navLinks } from "../../constants/index.js";

function NavBar() {
  const [toggle, setToggle] = useState(false)

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <Link to="/">
        <img
          src={logo}
          alt="logo"
          className="w-[124px] h-[32px]"
        />
      </Link>
      <ul className="list-none sm:flex hidden items-center gap-x-[56px]">
        {navLinks.map((a) => (
          <li
            key={a.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] text-white`}
          >
            <Link to={a.id} smooth={true} duration={500}>{a.title}</Link>
          </li>
        ))}
      </ul>

      {/* burger menu */}
      <div className="sm:hidden flex flex-1 justify-end items-center cursor-pointer">
        <img
          className="w-[28px] h-[28px] object-contain"
          src={toggle ? close : menu}
          alt="menu"
          onClick={() => setToggle((prev) => !prev)}
        />
      </div>
      {/* mobile links */}
      <div
        className={`${toggle ? "flex" : "hidden"} 
      sm:hidden flex
      p-6 bg-black-gradient absolute top-20 right-0 gap-y-[20px] min-w-[140px] rounded-xl sidebar`}
      >
        <ul className="w-full list-none  flex-col justify-center items-center gap-y-[20px] text-center">
          {navLinks.map((a) => (
            <li
              key={a.id}
              className={`font-poppins font-normal cursor-pointer text-[16px] text-white`}
            >
              <Link to={a.id} smooth={true} duration={300}>{a.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default NavBar
