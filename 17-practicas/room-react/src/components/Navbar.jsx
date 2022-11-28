import IconMenuOpen from "./IconMenuOpen";
import IconMenuClose from "./IconMenuClose";
import { useRef } from "react";

const Navbar = () => {
  const menuRef = useRef(null),
    modalRef = useRef(null);

  const handleClickMenu = () => {
    menuRef.current.classList.toggle("translate-x-full");
    modalRef.current.classList.toggle("hidden");
  };

  return (
    <nav
      className="flex items-center lg:gap-x-14
     absolute top-8 px-8 lg:px-16 text-white w-full lg:w-auto"
    >
      <IconMenuOpen onClick={handleClickMenu} className="lg:hidden" />
      <a href="#" className="text-4xl mx-auto">
        room
      </a>

      <div
        ref={menuRef}
        className="px-8 translate-x-full lg:translate-x-0 transition-transform duration-300 lg:pt-2 lg:px-0 flex items-center justify-between lg:gap-x-10 fixed top-0 left-0 z-10 lg:static bg-white 
      lg:bg-transparent text-black lg:text-white h-28 lg:h-auto w-full lg:w-auto"
      >
        <IconMenuClose onClick={handleClickMenu} className="lg:hidden" />
        <a className="link" href="#">
          home
        </a>

        <a className="link" href="#">
          shop
        </a>
        <a className="link" href="#">
          about
        </a>
        <a className="link" href="#">
          contact
        </a>
      </div>

      <div
        ref={modalRef}
        className="opacity-70 hidden fixed top-0 left-0 w-full h-full bg-black lg:hidden"
      ></div>
    </nav>
  );
};

export default Navbar;
