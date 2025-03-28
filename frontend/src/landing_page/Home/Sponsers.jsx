import React from "react";
import AWS from "../../../public/Sponsers/AWS.png";
import Cashify from "../../../public/Sponsers/Cashify.png";
import CashKaro from "../../../public/Sponsers/CashKaro.png";
import Infosys from "../../../public/Sponsers/Infosys.png";
import NPCI from "../../../public/Sponsers/NPCI.png";
import OYO from "../../../public/Sponsers/OYO.png";
import Samsung from "../../../public/Sponsers/Samsung.png";
import Tides from "../../../public/Sponsers/Tides.png";
import TOI from "../../../public/Sponsers/TOI.png";

const Sponsers = () => {
  return (
    <main>
      <section>
        <h1
          className="text-[#d9d9d9] text-7xl  md:text-7xl lg:text-8xl text-center mb-16  font-passion font-extrabold leading-normal"
          style={{
            background:
              "linear-gradient(180deg, rgba(110, 110, 110, 0.46) 46.23%, rgba(212, 212, 212, 0.00) 90.52%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontWeight: "10rem",
          }}
        >
          Sponsers
        </h1>
        <div className="flex flex-col gap-10">
          <div className="flex justify-evenly ">
            <div>
              <img src={NPCI} alt="" />
            </div>
            <div>
              <img src={Tides} alt="" />
            </div>
            <div>
              <img src={CashKaro} alt="" />
            </div>
            <div>
              <img src={TOI} alt="" />
            </div>
          </div>
          <div className="flex flex-row justify-evenly ">
            <div className="bg-white">
              <img src={Infosys} alt="" />
            </div>
            <div>
              <img src={NPCI} alt="" />
            </div>
            <div className="bg-white pt-3 px-2">
              <img src={Samsung} alt="" />
            </div>
          </div>
          <div className="flex flex-row justify-evenly ">
            <div>
              <img src={OYO} alt="" />
            </div>
            <div className="bg-white">
              <img src={Cashify} alt="" />
            </div>
          </div>
          <div className="flex flex-row justify-evenly ">
            <div className="bg-white px-3 py-2">
              <img src={AWS} alt="" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Sponsers;
