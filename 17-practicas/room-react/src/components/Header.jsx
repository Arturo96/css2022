import { useState } from "react";
import ImgHero1 from "../assets/desktop-image-hero-1.jpg";
import ImgHero2 from "../assets/desktop-image-hero-2.jpg";
import ImgHero3 from "../assets/desktop-image-hero-3.jpg";
import AngleLeft from "../assets/icon-angle-left.svg";
import AngleRight from "../assets/icon-angle-right.svg";
import Arrow from "./Arrow";

const Header = () => {
  const images = [ImgHero1, ImgHero2, ImgHero3];

  const [indexImage, setIndexImage] = useState(0);

  const handlePrevImage = () => {
    setIndexImage(indexImage === 0 ? images.length - 1 : indexImage - 1);
  };

  const handleNextImage = () => {
    setIndexImage(indexImage === images.length - 1 ? 0 : indexImage + 1);
  };

  return (
    <header className="grid grid-cols-3 lg:grid-cols-7 grid-rows-[300px_75px_10fr] lg:grid-rows-[400px_75px]">
      <img
        className="col-start-1 col-end-4 lg:col-start-1 lg:col-end-5 row-start-1 row-end-3 lg:row-start-1 lg:row-end-3 w-full h-full"
        src={images[indexImage]}
        alt="Image Hero 1"
      />
      <article className="col-start-1 col-end-4 lg:col-start-5 lg:col-end-8 row-start-3 row-end-4 lg:row-start-1 lg:row-end-2 py-16 lg:py-4 xl:py-10 px-10 lg:px-20">
        <h1 className="text-4xl xl:text-5xl font-semibold">
          Discover innovative ways to decorate
        </h1>
        <p className="pt-5 pb-8 lg:py-5 text-gray-400">
          We provide unmatched quality, comfort, and style for property owners
          across the country. Our experts combine form and function in bringing
          your vision to life. Create a room in your own style with our
          collection and make your property a reflection of you and what you
          love.
        </p>
        <a
          className="flex gap-5 items-center hover:text-gray-400 hover:fill-gray-400"
          href="#"
        >
          <span className="tracking-[10px]">SHOP NOW</span>
          <Arrow />
        </a>
      </article>
      <section className="flex col-start-3 col-end-4 lg:col-start-5 lg:col-end-6 row-start-2 row-end-3">
        <figure
          className="flex-auto grid place-content-center
         bg-black hover:bg-gray-800 cursor-pointer"
          onClick={handlePrevImage}
        >
          <img src={AngleLeft} alt="Angle Left" />
        </figure>
        <figure
          className="flex-auto grid place-content-center
         bg-black hover:bg-gray-800 cursor-pointer"
          onClick={handleNextImage}
        >
          <img src={AngleRight} alt="Angle Right" />
        </figure>
      </section>
    </header>
  );
};

export default Header;
