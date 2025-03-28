import React, { useEffect, useRef } from "react";
import X from "../../../public/Logos/X.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);

const Tapestry = () => {
  // const contentRef = useRef(null);
  // const imageRef = useRef(null);

  // useGSAP(() => {
  //   gsap.fromTo(
  //     contentRef.current,
  //     { x: -100, opacity: 0 },
  //     { x: 0, opacity: 1, duration: 1, ease: "power2.out" }
  //   );
  //   gsap.fromTo(
  //     imageRef.current,
  //     { x: 100, opacity: 0 },
  //     { x: 0, opacity: 1, duration: 1, ease: "power2.out", delay: 0.2 }
  //   );
  // }, []);

  return (
    <div className=" flex flex-col md:flex-row justify-center gap-20 items-center min-h-screen md:px-16 md:py-8">
      <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
        <h1 className="text-5xl md:text-7xl lg:text-8xl uppercase tracking-wider mb-6">
          <p className="mb-8">Tapestry</p>
          <p>of Time</p>
        </h1>

        <p className="text-lg md:text-xl lg:text-1xl mb-8 max-w-[600px]">
          Life is a delicate wave of moments—threads of memories, choices, and
          experiences that shape who we are.
        </p>

        <div className="flex flex-row gap-4">
          <button className=" w-[10rem] py-2 border-2 cursor-pointer bg-red-600 rounded-xl border-none hover:bg-black hover:text-white transition-all duration-300 text-lg">
            Buy Ticket
          </button>
          <button className=" w-[10rem] py-2 border-2 cursor-pointer border-white rounded-xl hover:bg-white hover:text-black transition-all duration-300 text-lg">
            Buy T-Shirt
          </button>
        </div>
      </div>

      <div>
        <img
          src={X}
          alt="Tapestry visual"
          className="w-[30rem] md:max-w-[500px] h-auto object-contain"
        />
      </div>
    </div>
  );
};

export default Tapestry;
