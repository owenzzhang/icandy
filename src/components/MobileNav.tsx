import iCD from "../assets/iCD.svg";
import { Link } from "react-router";
import { HiOutlineMenu } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";

interface MobileNavProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

function MobileNav({ isOpen, setIsOpen }: MobileNavProps) {
  return (
    <div className="md:hidden flex flex-row justify-between items-center py-1.5 px-6">
      <img className="w-16 h-16" src={iCD} alt="iCD logo" />
      <button onClick={() => setIsOpen(!isOpen)}>
        <HiOutlineMenu size={28} />
      </button>
      <div
        className={`absolute top-[5rem] text-black z-30 flex flex-col p-3 gap-3 shadow-md right-1 bg-white ${
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <Link to="/ourWork" className="inline-flex items-center  gap-1">
          Our Work <IoIosArrowDown className="text-[#F6B600]" />
        </Link>
        <Link to="/about">About</Link>
        <Link to="/news">News</Link>
        <Link to="/team">Team</Link>
        <button className="bg-[#F6B600] hover:bg-yellow-400 transition-colors duration-300 cursor-pointer text-[#151515] py-1 px-3">
          Contact
        </button>
      </div>
    </div>
  );
}

export default MobileNav;
