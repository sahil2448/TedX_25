import React, { useRef, useState } from "react";
import Theme from "../../../public/Videos/Theme.mp4";
import { IoVolumeMute } from "react-icons/io5";
import { VscUnmute } from "react-icons/vsc";

const Hero = () => {
  const [sound, setSound] = useState(true);
  const videoRef = useRef(null);

  const handlePlayVideo = () => {
    if (videoRef.current) {
      if (videoRef.current.muted == true) {
        videoRef.current.muted = false;
        setSound(false);
      } else {
        videoRef.current.muted = true;
        setSound(true);
      }
      videoRef.current.play();
    }
  };

  return (
    <div className="relative w-full min-h-screen">
      <video
        ref={videoRef}
        src={Theme}
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />
      <div className="relative z-10 flex items-center justify-center h-screen">
        <button
          onClick={handlePlayVideo}
          className="bg-black hover:bg-red-700 transition-all duration-300 bg-opacity-50 text-white px-4 py-2 rounded hover:scale-1.5 absolute left-3 cursor-pointer tooltip"
          data-tip={`${sound ? "Unmute" : "Mute"}`}
        >
          {sound ? <VscUnmute /> : <IoVolumeMute />}
        </button>
      </div>
    </div>
  );
};

export default Hero;
