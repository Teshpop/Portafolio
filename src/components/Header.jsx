import { styles } from "../style";
import { logo } from "../assets";
import { navLinks } from "../constans";
import { useState } from "react";

function Header() {
  const [active, setActive] = useState([]);
  return (
    <nav
      className={`${styles.paddingX} w-full items-center py-5 z-20 fixed top-0 bg-secondary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <img src={logo} alt="logo" className="w-14 h-14 object-contain" />
          <p className="text-white text-[1.125rem] font-bold flex">
            Pedro Tello &nbsp;{" "}
            <span className="sm:block hidden">| Desarrollador Front-End</span>
          </p>
        </div>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map(({ id, title }, index) => (
            <li
              key={index}
              className={`${
                active === title ? "text-white" : " text-gray-300 "
              } hover:text-white text-[1.125rem] font-medium cursor-pointer`}
              onClick={() => setActive(title)}
            >
              <a href={`#${id}`}>{title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Header;
