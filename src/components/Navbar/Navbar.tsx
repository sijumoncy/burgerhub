import { useState } from "react";
import { HiMenuAlt1, HiSun, HiX } from "react-icons/hi";

const NavList = [
  { id: 1, name: "Home", link: "#home" },
  { id: 2, name: "About", link: "#about" },
  { id: 3, name: "Menu", link: "#menu" },
  { id: 4, name: "Contact", link: "#contact" },
];

function Navbar() {
    const [openNav, setOpenNav] = useState(false)

  return (
    <nav className="max-w-5xl mx-auto relative h-14 flex justify-between items-center">

      <div className="">
        <a href="#" className="text-2xl uppercase">
          <span className="text-primary">Burger</span>
          <span className="text-secondary">Hub</span>
        </a>
      </div>

      <div className={`${openNav ? '' : 'hidden'} absolute top-0 left-0 w-full py-14 border-b border-seconday bg-white
        | tabM:block tabM:static tabM:py-0 tabM:border-none tabM:ml-auto tabM:w-auto`}>
        <ul className="text-secondary flex flex-col text-center gap-5 tabM:flex-row">
          {NavList.map((nav) => (
            <li>
              <a href={nav.link} className="hover:text-secondary/50 ease-in duration-200">{nav.name}</a>
            </li>
          ))}
        </ul>
        <HiX className="absolute top-[1rem] right-4 text-xl cursor-pointer | tabM:hidden" onClick={()=>setOpenNav(false)}/>
      </div> 
      <div className="flex gap-5 items-center">
        <HiSun className="ml-4 text-xl"/>
        <HiMenuAlt1 className="text-xl tabM:hidden" onClick={()=>setOpenNav(true)}/> 
      </div>
    </nav>
  );
}

export default Navbar;
