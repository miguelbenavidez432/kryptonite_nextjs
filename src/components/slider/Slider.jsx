/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { slides } from "@/utils/index";
import Description from "../description/Description";

const Slider = () => {
  const [activeImage, setActiveImage] = useState(0);

  const clickNext = () => {
    setActiveImage((prevActiveImage) =>
      prevActiveImage === slides.length - 1 ? 0 : prevActiveImage + 1
    );
  };
  const clickPrev = () => {
    setActiveImage((prevActiveImage) =>
      prevActiveImage === 0 ? slides.length - 1 : prevActiveImage - 1
    );
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      clickNext();
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  }, [activeImage]);

  return (
    <main className="w-full mx-auto shadow-2xl rounded-3xl overflow-hidden max-w-5xl md:min-w-full">
      <div className="grid md:grid-cols-2 grid-cols-2 w-full">
        <div className="flex justify-center items-center p-4 md:p-0 max-h-96">
          {slides.map((elem, idx) => (
            <div
              key={idx}
              className={`${
                idx === activeImage ? "block" : "hidden"
              } w-full h-full transition-all duration-500 ease-in-out`}
            >
              <Image
                src={elem.url}
                alt={elem.name}
                width={600}
                height={50}
                className="w-full h-full md:rounded-tl-3xl md:rounded-bl-3xl"
              />
            </div>
          ))}
        </div>
        <Description
          activeImage={activeImage}
          clickNext={clickNext}
          clickPrev={clickPrev}
        />
      </div>
    </main>
  );
};

export default Slider;
