import { useState } from "react";
import ImgHero1 from "../assets/desktop-image-hero-1.jpg";
import ImgHero2 from "../assets/desktop-image-hero-2.jpg";
import ImgHero3 from "../assets/desktop-image-hero-3.jpg";
import AngleLeft from "../assets/icon-angle-left.svg";
import AngleRight from "../assets/icon-angle-right.svg";
import Arrow from "./Arrow";

const posts = [
  {
    image: ImgHero1,
    title: "Discover innovative ways to decorate",
    text: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
  },
  {
    image: ImgHero2,
    title: "We are available all across the globe",
    text: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
  },
  {
    image: ImgHero3,
    title: "Manufactured with the best materials",
    text: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
  },
];

const Header = () => {
  const [indexPost, setIndexPost] = useState(0);

  const handlePrevImage = () => {
    setIndexPost(indexPost === 0 ? posts.length - 1 : indexPost - 1);
  };

  const handleNextImage = () => {
    setIndexPost(indexPost === posts.length - 1 ? 0 : indexPost + 1);
  };

  return (
    <header className="grid grid-cols-3 lg:grid-cols-7 grid-rows-[300px_75px_10fr] lg:grid-rows-[400px_75px]">
      <img
        className="col-start-1 col-end-4 lg:col-start-1 lg:col-end-5 row-start-1 row-end-3 lg:row-start-1 lg:row-end-3 w-full h-full"
        src={posts[indexPost].image}
        alt="Image Hero 1"
      />
      <article className="col-start-1 col-end-4 lg:col-start-5 lg:col-end-8 row-start-3 row-end-4 lg:row-start-1 lg:row-end-2 py-16 lg:py-4 xl:py-10 px-10 lg:px-20">
        <h1 className="text-4xl xl:text-5xl font-semibold">
          {posts[indexPost].title}
        </h1>
        <p className="pt-5 pb-8 lg:py-5 text-gray-400">
          {posts[indexPost].text}
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
         bg-black hover:bg-gray-800"
          onClick={handlePrevImage}
          role="button"
        >
          <img src={AngleLeft} alt="Angle Left" />
        </figure>
        <figure
          className="flex-auto grid place-content-center
         bg-black hover:bg-gray-800"
          onClick={handleNextImage}
          role="button"
        >
          <img src={AngleRight} alt="Angle Right" />
        </figure>
      </section>
    </header>
  );
};

export default Header;
