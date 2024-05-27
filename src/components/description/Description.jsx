import React from "react";
import { slides } from "@/utils/index";
import left from "../../../public/left.svg";
import right from "../../../public/right.svg";
import { motion } from "framer-motion";
import Image from "next/image";

const Description = ({ activeImage, clickNext, clickPrev }) => {
  return (
    <div className="relative w-full h-full flex flex-col justify-between md:rounded-tr-3xl md:rounded-br-3xl p-5">
      <div className="uppercase text-sm italic right-4 top-2 underline-offset-4">
        NUESTROS CLIENTES
      </div>
      {slides.map((elem, idx) => (
        <div
          key={idx}
          className={`${
            idx === activeImage ? "block" : "hidden"
          } w-full h-full transition-all duration-500 ease-in-out`}
        >
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.5,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              ease: "linear",
              duration: 2,
            }}
            className="w-full"
          >
            <div className="py-16 text-5xl font-extrabold">{elem.name}</div>
            <div className="leading-relaxed font-medium text-base tracking-wide h-60 md:h-40 italic text-gray-600"></div>
          </motion.div>
        </div>
      ))}
      <div className="absolute bottom-4 right-0 left-0 w-full flex justify-center items-center gap-4 md:bottom-10">
        <div className="cursor-pointer" onClick={clickPrev}>
          <Image src={left} alt="Anterior" width={40} height={40} />
        </div>
        <div className="cursor-pointer" onClick={clickNext}>
          <Image src={right} alt="Siguiente" width={40} height={40} />
        </div>
      </div>
    </div>
  );
};

export default Description;

