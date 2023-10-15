import { SlArrowUp } from "react-icons/sl";
import useScroll from "../../Hooks/useScroll";

function ScrollUp() {

  const scrollValue = useScroll();

  return (
    <a
      href="#home"
      className={`fixed right-4 bg-primary shadow-sm inline-block px-4 py-4 
        rounded-full text-lg text-black z-50 hover:translate-y-1 ease-in duration-200 ${scrollValue >=250 ? "bottom-4" : "-bottom-1/2"}`}
    >
      <SlArrowUp />
    </a>
  );
}

export default ScrollUp;
