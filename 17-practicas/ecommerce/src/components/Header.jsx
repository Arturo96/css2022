import { useRef } from "react";
import LinkPage from "./LinkPage";

const Header = () => {
  const navRef = useRef(null),
    modalRef = useRef(null);

  const handleNavOpen = () => {
    navRef.current.classList.remove("-translate-x-full");
    modalRef.current.classList.remove("hidden");
  };

  const handleNavClose = () => {
    navRef.current.classList.add("-translate-x-full");
    modalRef.current.classList.add("hidden");
  };

  return (
    <header className="lg:border-b-[1px] mx-auto max-w-5xl flex items-center lg:gap-14 px-5 lg:px-0 py-5 lg:py-8">
      <figure className="lg:hidden" onClick={handleNavOpen}>
        <img src="src/assets/icon-menu.svg" alt="Cart icon" />
      </figure>
      <a href="#" className="ml-5 lg:ml-0">
        <img src="src/assets/logo.svg" alt="Logo" />
      </a>
      <nav
        className="fixed z-10 lg:static top-0 left-0 
      w-52 h-full lg:w-auto lg:h-auto
      bg-white lg:flex px-5 lg:px-0 py-6 lg:py-0 
      font-bold lg:font-normal lg:gap-8
      -translate-x-full lg:translate-x-0 transition-transform duration-300"
        ref={navRef}
      >
        <figure className="mb-8 lg:hidden" onClick={handleNavClose}>
          <img
            className="w-4"
            src="src/assets/icon-close.svg"
            alt="Icon Close"
          />
        </figure>
        <LinkPage page="Collections" />
        <LinkPage page="Men" />
        <LinkPage page="Women" />
        <LinkPage page="About" />
        <LinkPage page="Contact" />
      </nav>
      <div className="flex items-center ml-auto gap-6">
        <figure>
          <img src="src/assets/icon-cart.svg" alt="Cart icon" />
        </figure>
        <figure>
          <img
            className="w-7 lg:w-12"
            src="src/assets/image-avatar.png"
            alt="Avatar"
          />
        </figure>
      </div>
      <div
        className="hidden lg:hidden fixed top-0 left-0 w-full h-full bg-black opacity-75"
        ref={modalRef}
      ></div>
    </header>
  );
};

export default Header;
