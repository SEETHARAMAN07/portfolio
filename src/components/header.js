import { Bars3Icon } from "@heroicons/react/24/solid";
import { useState } from "react";
function Header() {
  const [ToogleMenu, setToogleMenu] = useState(false);
  return (
    <header className="flex justify-between px-5 py-2 bg-primary">
      <a className="font-bold text-black" href="www.google.com">
        Seetharaman
      </a>
      <nav className="hidden md:block">
        <ul className="flex text-white">
          <li>
            <a href="/">HOME</a>
          </li>
          <li>
            <a href="#about">ABOUT</a>
          </li>
          <li>
            <a href="#projects">PROJECTS</a>
          </li>
          <li>
            <a href="#resume">RESUME</a>
          </li>
          <li>
            <a href="#contact">CONTACT</a>
          </li>
        </ul>
      </nav>
      {ToogleMenu && (
        <nav className="block md:hidden ">
          <ul onClick={()=>setToogleMenu(!ToogleMenu)} className="flex text-white flex-col mobile-nav">
            <li>
              <a href="/">HOME</a>
            </li>
            <li>
              <a href="#about">ABOUT</a>
            </li>
            <li>
              <a href="#projects">PROJECTS</a>
            </li>
            <li>
              <a href="#contact">CONTACT</a>
            </li>
          </ul>
        </nav>
      )}
      <button
        onClick={() => setToogleMenu(!ToogleMenu)}
        className="block md:hidden"
      >
        <Bars3Icon className="text-white h-5"></Bars3Icon>
      </button>
    </header>
  );
}

export default Header;
