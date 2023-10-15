import { useEffect, useState } from "react";
import { HiMenuAlt1, HiSun, HiX, HiMoon } from "react-icons/hi";
import useScroll from "../../Hooks/useScroll";

const NavList = [
  { id: 1, name: "Home", link: "#home" },
  { id: 2, name: "Menu", link: "#menu" },
  { id: 3, name: "About", link: "#about" },
  { id: 4, name: "Contact", link: "#contact" },
];

function Navbar() {
  const [openNav, setOpenNav] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");
  const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem('theme') === 'dark');

  const scrollValue = useScroll();

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);



  return (
    <nav
      className={`max-w-7xl mx-auto relative h-14 flex justify-between items-center px-5 bg-bgPrimary dark:bg-bgPrimaryDark
      ${scrollValue > 50 && "border-b border-secondary"}`}
    >
      <div className="">
        <a href="#" className="text-2xl uppercase bg-bgTest">
          <span className="text-primary">Burger</span>
          <span className="text-secondary">Hub</span>
        </a>
      </div>

      <div
        className={`${
          openNav ? "" : "hidden"
        } absolute top-0 left-0 w-full py-14 border-b border-seconda bg-bgPrimary dark:bg-bgPrimaryDark
        | tabM:block tabM:static tabM:py-0 tabM:border-none tabM:ml-auto tabM:w-auto`}
      >
        <ul className="text-textPara dark:text-white/90 flex flex-col text-center gap-5 tabM:flex-row">
          {NavList.map((nav) => (
            <li
              className={`${
                activeSection === nav.name ? "text-secondary" : ""
              }`}
              onClick={() => {setActiveSection(nav.name) ; setOpenNav(false)}}
            >
              <a
                href={nav.link}
                className="hover:text-secondary/50 ease-in duration-200"
              >
                {nav.name}
              </a>
            </li>
          ))}
        </ul>
        <HiX
          className="absolute top-[1rem] right-4 text-xl cursor-pointer | tabM:hidden dark:fill-bgPrimary"
          onClick={() => setOpenNav(false)}
        />
      </div>
      <div className="flex gap-5 items-center cursor-pointer">
        <div onClick={()=> setIsDarkMode(!isDarkMode)}>
          {isDarkMode ? <HiSun className="ml-4 text-xl dark:fill-bgPrimary" /> : <HiMoon className="ml-4 text-xl" /> }
        </div>
        <HiMenuAlt1
          className="text-xl tabM:hidden dark:fill-bgPrimary"
          onClick={() => setOpenNav(true)}
        />
      </div>
    </nav>
  );
}

export default Navbar;
