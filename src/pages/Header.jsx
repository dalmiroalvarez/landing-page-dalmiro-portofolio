
// Hooks
import { useState } from "react";

// Icons
import {
  RiCheckboxBlankCircleFill,
  RiMenu3Fill,
  RiCloseLine,
} from "react-icons/ri";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header 
        className="
        flex items-center 
        justify-between xl:justify-start 
        w-full py-4 
        px-8 h-[10vh] z-50">
      <div className="xl:w-1/6 text-center -mt-4">
        <a href="index" className="text-2xl font-bold relative p-1 bg-white">
          Dalmiro Alvarez<span className="text-indigo-600 text-5xl">.</span>{" "}
          <RiCheckboxBlankCircleFill 
            className="absolute -left-3 -bottom-3 text-indigo-600 -z-10" />
        </a>
      </div>
      <nav
        className={`fixed bg-white w-[80%] md:w-[40%] xl:w-full h-full 
        ${ showMenu ? "left-0" : "-left-full" } 
        top-0 xl:static flex-1 
        flex flex-col xl:flex-row 
        items-center justify-center 
        gap-10 transition-all duration-500 z-50`}
      >
        <a href='#' className="text-lg font-mono hover:text-xl">
          Home
        </a>
        <a href='#skills' className="text-lg font-mono hover:text-xl">
          Skills
        </a>
        <a href='#projects' className="text-lg font-mono hover:text-xl">
          Projects
          </a>
          <a target='_blank' href='https://www.linkedin.com/in/dalmiro-alvarez-b47641174/' className="text-lg font-mono hover:text-xl">
          Contact
          </a>
      </nav>
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="xl:hidden text-2xl p-2"
      >
        {showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
      </button>
    </header>
  );
};

export default Header;