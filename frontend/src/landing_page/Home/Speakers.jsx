import React, { useEffect } from "react";
import Frame from "../../../public/Speakers/Frame.png";
import { useFfect, useRef, useState } from "react";
import { gsap } from "gsap";
import Sp1 from "../../../public/Speakers/Sp1.png";
import Sp2 from "../../../public/Speakers/Sp2.png";
import Sp3 from "../../../public/Speakers/Sp3.png";
import Sp4 from "../../../public/Speakers/Sp4.png";
import Sp5 from "../../../public/Speakers/Sp5.png";
import Sp6 from "../../../public/Speakers/Sp6.png";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Sp7 from "../../../public/Speakers/Sp7.png";

const Speakers = () => {
  const [activeSpeaker, setActiveSpeaker] = useState(0);
  const speakerNameRef = useRef(null);
  const speakerImageRef = useRef(null);
  const carouselRef = useRef(null);
  const carouselItemsRef = useRef([]);
  const mainRef = useRef(null);

  const speakerTextRef = useRef(null);

  const centerActiveSpeaker = (index) => {
    if (!carouselRef.current || !carouselItemsRef.current[index]) return;

    const carousel = carouselRef.current;
    const item = carouselItemsRef.current[index];
    const carouselWidth = carousel.offsetWidth;
    const itemWidth = item.offsetWidth;

    const scrollLeft = item.offsetLeft - carouselWidth / 2 + itemWidth / 2;

    const width = window.innerWidth;
    carousel.scrollTo({
      left: width > 640 ? scrollLeft - 400 : scrollLeft,
      behavior: "smooth",
    });
  };

  const handleSpeakerClick = (index) => {
    if (index === activeSpeaker) return;
    const timeline = gsap.timeline();

    setActiveSpeaker(index);

    centerActiveSpeaker(index);

    gsap.fromTo(
      speakerNameRef.current.children,
      {
        opacity: -10,
        y: +500,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.3,
        stagger: 0.1,
        ease: "power1.out",
      }
    );
    gsap.fromTo(
      speakerImageRef.current,
      {
        opacity: 0,
        x: 50,
        duration: 0.1,
        ease: "power2.out",
      },
      {
        opacity: 1,
        x: 0,
        duration: 0.5,
        ease: "power2.out",
      }
    );
  };

  useEffect(() => {
    // Main container animation
    gsap.fromTo(
      mainRef.current,
      { opacity: -1, y: 100, delay: 0 },
      {
        opacity: 1,
        y: 0,
        ease: "power3.out",
        duration: 1,
        delay: 1,
        scrollTrigger: {
          trigger: mainRef.current,
          start: "top 95%",
          end: "bottom 60%",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      speakerNameRef.current.children,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        // delay: 0.2,
        // stagger: 0.2,
        // immediateRender: false,
        scrollTrigger: {
          trigger: speakerNameRef.current,
          start: "top 99%",
          end: "bottom 80%",
          scrub: true,
        },
      }
    );

    // Speaker image animation
    gsap.fromTo(
      speakerImageRef.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        // delay: 0.2,
        // immediateRender: false,
        scrollTrigger: {
          trigger: speakerImageRef.current,
          start: "top 99%",
          end: "bottom 80%",
          scrub: true,
        },
      }
    );

    // Carousel items animation
    gsap.fromTo(
      carouselRef.current.children,
      { opacity: 0 },
      {
        opacity: 1,
        stagger: 0.2,
        // immediateRender: false,
        scrollTrigger: {
          trigger: carouselRef.current,
          start: "top 140%",
          end: "bottom 110%",
          scrub: true,
        },
      }
    );

    // Center the active speaker on mount
    centerActiveSpeaker(activeSpeaker);
  }, []);

  useEffect(() => {
    centerActiveSpeaker(activeSpeaker);
  }, [activeSpeaker]);

  const speakers = [
    { id: 1, name: "ANUJ", image: `${Sp1}` },
    {
      id: 2,
      name: "SARAH SMITH",
      image: `${Sp2}`,
    },
    {
      id: 3,
      name: "VIDISH MISHRA",
      image: `${Sp3}`,
    },
    {
      id: 4,
      name: "ALEX WONG",
      image: `${Sp4}`,
    },
    {
      id: 5,
      name: "KRISHAN KUMAR",
      image: `${Sp5}`,
    },
    {
      id: 6,
      name: "AMAN KUMAR",
      image: `${Sp6}`,
    },
    {
      id: 7,
      name: "KARAN KUTHE",
      image: `${Sp7}`,
    },
    {
      id: 7,
      name: "VIDISH MISHRA",
      image: `${Sp7}`,
    },
    {
      id: 7,
      name: "VIDISH MISHRA",
      image: `${Sp7}`,
    },
    {
      id: 7,
      name: "VIDISH MISHRA",
      image: `${Sp7}`,
    },
    {
      id: 7,
      name: "VIDISH MISHRA",
      image: `${Sp7}`,
    },
  ];

  return (
    <div
      className="w-full min-h-screen bg-cover bg-center "
      ref={mainRef}
      style={{
        backgroundImage: `url(${Frame})`,
      }}
    >
      <div className="w-full flex justify-center md:justify-end">
        <h1
          className=" text-[5rem] lg:text-[8rem] xl:text-[9rem] font-lexend font-extrabold leading-none tracking-[0.05em]"
          style={{
            WebkitTextFillColor: "black",
            WebkitTextStrokeWidth: "0.90px",
            WebkitTextStrokeColor: "white",
          }}
        >
          SPEAKER
        </h1>
      </div>

      <div className="flex flex-col items-center sm:flex-row md:gap-10 md:justify-center h-[25rem] ">
        <div
          className="flex flex-col justify-center items-end md:pl-12"
          ref={speakerNameRef}
        >
          <div className="text-white text-6xl md:text-7xl font-bold tracking-[0.5rem]">
            {speakers[activeSpeaker].name.split(" ")[0]}
          </div>
          <div className="text-white text-4xl md:text-5xl font-bold tracking-[0.75rem]">
            {speakers[activeSpeaker].name.split(" ")[1]}
          </div>
        </div>
        <div>
          <div ref={speakerImageRef} className="z-10">
            <img
              src={speakers[activeSpeaker].image || "/placeholder.svg"}
              alt={speakers[activeSpeaker].name}
              className="z-10 w-100px md:w-[400px]"
            />
          </div>
        </div>
      </div>
      <div className="relative z-10  flex justify-center items-end ">
        <div
          ref={carouselRef}
          className="flex gap-4 px-4 overflow-x-auto pb-8 pt-3 carousel carousel-center  max-w-md md:max-w-2xl mx-auto"
        >
          {speakers.map((speaker, index) => (
            <div
              key={index}
              ref={(el) => (carouselItemsRef.current[index] = el)}
              className={`carousel-item rounded-3xl overflow-hidden border-3 transition-all duration-300 cursor-pointer ${
                index === activeSpeaker
                  ? "scale-125 z-20 active bg-gradient-to-t from-black to-red-500 "
                  : "border-transparent bg-gradient-to-t from-black to-transparent "
              }`}
              onClick={() => handleSpeakerClick(index)}
            >
              <img
                src={speaker.image}
                alt={speaker.name}
                className="w-16 h-20  md:h-22 md:w-18 object-cover "
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Speakers;
