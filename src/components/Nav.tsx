import { Link } from "react-router";
import { IoIosArrowDown } from "react-icons/io";
import MobileNav from "./MobileNav";
import iCD from "../assets/iCD.svg";
import { useState } from "react";

function Nav() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className="bg-white">
      <div className="hidden md:flex md:flex-row md:justify-between md:items-center px-6 py-4 text-sm">
        <img className="w-12 h-12" src={iCD} alt="iCD logo" />

        <div className="flex flex-row gap-10 text-small items-center">
          <Link
            to="/ourWork"
            className="inline-flex items-center justify-center gap-1"
          >
            Our Work <IoIosArrowDown className="text-[#F6B600]" />
          </Link>
          <Link to="/about">About</Link>
          <Link to="/news">News</Link>
          <Link to="/team">Team</Link>
          <button className="bg-[#F6B600] hover:bg-yellow-400 transition-colors duration-300 cursor-pointer text-[#151515] py-3 px-10">
            Contact
          </button>
        </div>
      </div>

      <MobileNav isOpen={isOpen} setIsOpen={setIsOpen} />
    </nav>
  );
}

export default Nav;
