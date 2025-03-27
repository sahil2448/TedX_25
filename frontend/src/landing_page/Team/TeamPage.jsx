import TeamMemberCard from "./TeamMemberCard";
import Aman from "../../../public/MemberImages/Aman.png";
import Anuj from "../../../public/MemberImages/Anuj.png";
import Anukriti from "../../../public/MemberImages/Anukriti.png";
import Anushka from "../../../public/MemberImages/Anushka.png";
import Karan from "../../../public/MemberImages/Karan.png";
import Ram from "../../../public/MemberImages/Ram.png";
import Saksham from "../../../public/MemberImages/Saksham.png";
import Sameer from "../../../public/MemberImages/Sameer.png";
import Shaurya from "../../../public/MemberImages/Shaurya.png";
import Saumya from "../../../public/MemberImages/Saumya.png";
import V_Anuj from "../../../public/MemberImages/V_Anuj.png";
import Vidish from "../../../public/MemberImages/Vidish.png";
import Yashasvi from "../../../public/MemberImages/Yashasvi.png";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useState, useRef, useEffect } from "react";
import gsap from "gsap";

function TeamPage() {
  const teamRef = useRef(null);

  // useEffect(() => {
  //   gsap.fromTo(
  //     teamRef.current.children,
  //     {
  //       opacity: -1,
  //       // scale: 0,
  //       y: -100,
  //       stagger: 1,
  //     },
  //     {
  //       opacity: 1,
  //       // scale: 1,
  //       duration: 0.4,
  //       stagger: 0.3,
  //       y: 0,
  //     }
  //   );
  // }, []);

  const teamMembers = [
    {
      name: "Anukriti Sethi",
      role: "Advisory",
      image: `${Anukriti}`,
    },
    {
      name: "Yashashvi Chaudhary",
      role: "Advisory",
      image: `${Yashasvi}`,
    },
    {
      name: "Saumya Singh",
      role: "Curator",
      image: `${Saumya}`,
    },
    {
      name: "Vidish Mishra",
      role: "Co-Curator",
      image: `${Vidish}`,
    },
    {
      name: "Aman Kumar",
      role: "Organizing Committee",
      image: `${Aman}`,
    },
    {
      name: "Karan Kuthe",
      role: "Organizing Committee",
      image: `${Karan}`,
    },
    {
      name: "Shaurya Singhal",
      role: "Organizing Committee",
      image: `${Shaurya}`,
    },
    {
      name: "Saksham Jain",
      role: "Organizing Committee",
      image: `${Saksham}`,
    },
    {
      name: "Sameer Modi",
      role: "Senior Manager",
      image: `${Sameer}`,
    },
    {
      name: "Ramavtar Uranw",
      role: "Senior Manager",
      image: `${Ram}`,
    },
    {
      name: "V.Anuj",
      role: "Senior Manager",
      image: `${V_Anuj}`,
    },
    {
      name: "Anushka Tyagi",
      role: "Manager",
      image: `${Anushka}`,
    },
    {
      name: "Anuj Kumar",
      role: "Manager",
      image: `${Anuj}`,
    },
    {
      name: "Ramavtar Uranw",
      role: "Senior Manager",
      image: `${Aman}`,
    },
    {
      name: "V.Anuj",
      role: "Senior Manager",
      image: `${Aman}`,
    },
  ];

  return (
    <section
      className="py-16 px-6 w-full min-h-screen"
      style={{ backgroundColor: "#0E0E0E" }}
    >
      <h1 className="text-center text-[#555555] text-5xl md:text-6xl font-bold mb-16">
        MEET OUR TEAM
      </h1>

      <div
        className="flex flex-wrap  mx-auto justify-between items-center"
        ref={teamRef}
      >
        {teamMembers.map((member, index) => (
          <TeamMemberCard
            key={index}
            name={member.name}
            role={member.role}
            image={member.image}
          />
        ))}
      </div>
    </section>
  );
}

export default TeamPage;
