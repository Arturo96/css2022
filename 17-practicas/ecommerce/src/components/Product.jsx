import { useState } from "react";
import IconCart from "./IconCart";

const Product = () => {
  const [counter, setCounter] = useState(0);

  const handleMinus = () => setCounter(counter === 0 ? counter : counter - 1);

  const handlePlus = () => setCounter(counter + 1);

  return (
    <main
      className="lg:pt-20 pb-20 lg:max-w-5xl xl:max-w-6xl mx-auto 
          lg:flex items-center gap-14"
    >
      <section className="lg:w-1/2 lg:px-12">
        <figure className="relative">
          <img
            className="w-full h-80 object-cover lg:h-auto lg:rounded-2xl"
            src="src/assets/image-product-1.jpg"
            alt="Product 1"
          />
          <img
            className="bg-white py-3 px-4 rounded-full absolute top-0 bottom-0 my-auto left-4 lg:hidden"
            src="src/assets/icon-previous.svg"
            alt="Icon Previous"
          />
          <img
            className="bg-white py-3 px-4 rounded-full absolute top-0 bottom-0 my-auto right-4 lg:hidden"
            src="src/assets/icon-next.svg"
            alt="Icon Next"
          />
        </figure>
        <div className="hidden lg:flex mt-8 gap-6">
          <figure>
            <img
              className="rounded-lg"
              src="src/assets/image-product-1-thumbnail.jpg"
              alt="Product 1 Thumbnail"
            />
          </figure>
          <figure>
            <img
              className="rounded-lg"
              src="src/assets/image-product-2-thumbnail.jpg"
              alt="Product 2 Thumbnail"
            />
          </figure>
          <figure>
            <img
              className="rounded-lg"
              src="src/assets/image-product-3-thumbnail.jpg"
              alt="Product 3 Thumbnail"
            />
          </figure>
          <figure>
            <img
              className="rounded-lg"
              src="src/assets/image-product-4-thumbnail.jpg"
              alt="Product 4 Thumbnail"
            />
          </figure>
        </div>
      </section>
      <article className="px-6 py-4 lg:px-0 lg:w-1/2">
        <h2 className="uppercase tracking-widest text-sm text-customOrange font-bold">
          Sneaker Company
        </h2>
        <h1 className="font-bold text-3xl lg:text-[2.75rem] lg:leading-[1.15] my-3 lg:mb-8">
          Fall Limited Edition Sneakers
        </h1>
        <p className="text-customBlue-dark-gray mb-4 lg:mb-7 lg:leading-relaxed">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
        <div className="flex lg:block justify-between items-center">
          <h3 className="flex gap-4 items-center font-bold text-3xl">
            $125.00{" "}
            <span className="px-2 py-[1px] rounded text-xl text-customOrange bg-customOrange-pale">
              50%
            </span>
          </h3>
          <h4 className="text-lg font-bold text-customBlue-gray line-through lg:mt-2">
            $250.00
          </h4>
        </div>
        <div className="lg:flex lg:gap-4 lg:mt-7">
          <div
            className="flex justify-between items-center mt-4 bg-customBlue-gray-light p-4 rounded-lg lg:flex-grow
          lg:mt-0"
          >
            <figure onClick={handleMinus}>
              <img
                src="src/assets/icon-minus.svg"
                role="button"
                alt="Icon Minus"
              />
            </figure>
            <h3 className="font-bold">{counter}</h3>
            <figure onClick={handlePlus}>
              <img
                src="src/assets/icon-plus.svg"
                role="button"
                alt="Icon Plus"
              />
            </figure>
          </div>
          <button
            className="bg-customOrange flex w-full lg:w-auto justify-center mt-4 py-4 rounded-lg font-bold text-white gap-4 shadow-2xl shadow-customOrange lg:flex-grow-[2]
          lg:mt-0"
          >
            <IconCart className="fill-white" />
            <span>Add to cart</span>
          </button>
        </div>
      </article>
    </main>
  );
};

export default Product;
