"use client";
import React, { useState } from "react";
import Image from "next/image";
import prod1 from "../../public/products/product1.jpg";
import prod2 from "../../public/products/product2.jpg";
import prod3 from "../../public/products/product3.jpg";
import prod4 from "../../public/products/product4.jpg";
import prod5 from "../../public/products/product5.jpg";
import prod6 from "../../public/products/product6.jpg";
import prod7 from "../../public/products/product7.jpg";

const imagesMock = [prod1, prod2, prod3, prod4, prod5, prod6, prod7];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const visibleImages = imagesMock.slice(currentIndex, currentIndex + 3);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? imagesMock.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imagesMock.length);
  };

  return (
    <div className=" max-w-7xl mx-auto lg:w-screen-2xl">
      <div className=" flex flex-col justify-center items-center h-24 bg-purple-400 border">
        <h1 className="text-3xl font-serif font-bold">Image Slider</h1>
      </div>

      <div className="relative h-[350px] w-600px flex justify-center items-center mt-12 mx-12">
        <div
          onClick={() => handlePrev()}
          className="absolute bg-white text-black rounded-full h-8 w-8 left-0 text-center">
          <button className="text-2xl  ">{"<"}</button>
        </div>
        <div className="flex justify-center items-center ml-20">
          {visibleImages.map((img, index) => (
            <li key={index} className="list-none  h-96 w-96">
              <Image
                src={img}
                alt="image"
                width={300}
                height={300}
                className="bg-white"
              />
            </li>
          ))}
        </div>

        <div
          onClick={() => handleNext()}
          className="absolute bg-white text-black rounded-full h-8 w-8 right-0 text-center">
          <button className="text-2xl  ">{">"}</button>
        </div>
      </div>
    </div>
  );
};

export default Slider;
