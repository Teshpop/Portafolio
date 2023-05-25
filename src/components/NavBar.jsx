import { useState } from "react";
import { navLinks } from "../constans";
import { logo, menu, close } from "../assets";
import { styles } from "../style";

function NavBar() {
  const [active, setActive] = useState(false);
  return (
    <nav
      className={`${styles.paddingX} w-full items-center py-2 fixed top-0 bg-primary shadow-lg bg-opacity-70 backdrop-blur-sm z-20`}
    >
      <div className="flex justify-between items-center">
        <div className="flex flex-row items-center">
          <img src={logo} alt="Logo" className="h-24 w-24" />
          <p className="text-2xl font-bold">Pedro Tello</p>
        </div>
        <ul className="sm:flex sm:visible hidden flex-row gap-6 list-none">
          {navLinks.map(({ title, id }, index) => (
            <li key={index}>
              <a
                href={`#${id}`}
                className="hover:text-white transition-all duration-300 focus:text-white text-gray-200 font-semibold text-[1.125rem]"
              >
                {title}
              </a>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={`${active ? close : menu}`}
            alt="menu"
            className="w-12 h-12 object-contain cursor-pointer"
            onClick={() => setActive(!active)}
          />
          <div
            className={`${
              active ? "visible" : "hidden"
            } p-6 bg-primary shadow-xl bg-opacity-70 backdrop-blur-sm absolute top-[7rem] right-0 z-10`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map(({ title, id }, index) => (
                <li key={index}>
                  <a href={`#${id}`}>{title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
