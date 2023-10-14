import { useState } from "react";
import { HiMenuAlt1, HiSun, HiX } from "react-icons/hi";

const NavList = [
  { id: 1, name: "Home", link: "#home" },
  { id: 1, name: "About", link: "#about" },
  { id: 1, name: "Menu", link: "#menu" },
  { id: 1, name: "Review", link: "#review" },
  { id: 1, name: "Contact", link: "#contact" },
];

function Navbar() {
    const [openNav, setOpenNav] = useState(false)

  return (
    <nav className="max-w-5xl mx-auto relative h-14 flex justify-between items-center">

      <div className="">
        <a href="#" className="text-2xl uppercase">
          <span className="text-primary">Burger</span>
          <span className="text-seconday">Hub</span>
        </a>
      </div>

      <div className={`${openNav ? '' : 'hidden'} absolute top-0 left-0 w-full py-14 border-b border-seconday bg-white
        | tab:block tab:static tab:py-0 tab:border-none tab:ml-auto tab:w-auto`}>
        <ul className="text-primary flex flex-col text-center gap-5 tab:flex-row">
          {NavList.map((nav) => (
            <li>
              <a href={nav.link} className="hover:text-primary ease-in duration-200">{nav.name}</a>
            </li>
          ))}
        </ul>
        <HiX className="absolute top-[1rem] right-4 text-xl cursor-pointer | tab:hidden" onClick={()=>setOpenNav(false)}/>
      </div> 
      <div className="flex gap-5 items-center">
        <HiSun className="ml-4 text-xl"/>
        <HiMenuAlt1 className="text-xl tab:hidden" onClick={()=>setOpenNav(true)}/> 
      </div>
    </nav>
  );
}

export default Navbar;
