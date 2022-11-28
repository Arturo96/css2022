import ImgDark from "../assets/image-about-dark.jpg";
import ImgLight from "../assets/image-about-light.jpg";

const Main = () => {
  return (
    <main className="grid grid-cols-1 lg:grid-cols-7">
      <img
        className="col-span-1 lg:col-span-2 mx-auto xl:w-full h-full"
        src={ImgDark}
        alt="Image Dark"
      />
      <article className="col-span-1 lg:col-span-3 flex flex-col py-12 lg:py-6 xl:py-0 justify-center px-10">
        <h2 className="font-bold text-xl tracking-[5px] mb-2">
          ABOUT OUR FURNITURE
        </h2>
        <p className="text-gray-400">
          Our multifunctional collection blends design and function to suit your
          individual taste. Make each room unique, or pick a cohesive theme that
          best express your interests and what inspires you. Find the furniture
          pieces you need, from traditional to contemporary styles or anything
          in between. Product specialists are available to help you create your
          dream space.
        </p>
      </article>
      <img
        className="col-span-1 lg:col-span-2 mx-auto xl:w-full h-full"
        src={ImgLight}
        alt="Image Light"
      />
    </main>
  );
};

export default Main;
