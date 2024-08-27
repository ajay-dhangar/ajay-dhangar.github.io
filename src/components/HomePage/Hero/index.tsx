import React from "react";
import { Spotlight } from "../../../ui/Spotlight";
import { TextGenerateEffect } from "../../../ui/TextGenerateEffect";
import MagicButton from "../../../ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import { SparklesCore } from "../../../ui/Sparkles";
import Link from "@docusaurus/Link";

const Hero = () => {
  return (
    <div className="noise-bg pb-2 pt-2 md:pt-4 p-4 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="green" />
      </div>

      <div className="flex flex-col items-center justify-center h-screen">
        <div className="relative z-10 flex flex-col md:flex-row items-center md:gap-10 mb-10">
          <div className="text-center md:text-left flex flex-col items-center md:items-start md:max-w-[70%]">
            <h2 className="animate-fadeIn uppercase text-sx text-gray-400">
              Seeking Full Stack Development Opportunities
            </h2>

            <div className="hidden md:inline-flex">
              <TextGenerateEffect
                mobScreen={false}
                className="w-[90%] text-left text-5xl lg:text-6xl"
                words="Hi I'm Ajay, an Aspiring Full Stack Developer"
              />
            </div>
            <div className="inline-flex md:hidden">
              <TextGenerateEffect
                mobScreen={true}
                className="text-[36px] text-center"
                words="Hi I'm Ajay Dhangar, Full Stack Developer"
              />
            </div>

            <p className="animate-fadeIn md:max-w-[50vw] mb-4 tracking-wider md:tracking-normal text-md md:text-lg lg:text-2xl">
              A Software engineer specialized in the MERN stack with problem
              solving skills and a passion for clean, efficient code. I turn
              ideas into solutions through curiosity and collaboration.
            </p>
            <Link
              to="https://drive.google.com/file/d/1kXgSKUjLyc0kcKuOz2SjfNnDfjXv9sHl/view?usp=sharing"
              className="animate-fadeIn lg:w-28"
            >
              <MagicButton
                title="My Resume"
                icon={<FaLocationArrow />}
                position="right"
              />
            </Link>
          </div>

          <div className="hidden md:inline-flex">
            <div className="relative">
              <img
                className="object-cover h-full drop-shadow-lg custom-drop-shadow"
                src="/img/ajay-dhangar.png"
                alt="Portfolio Owner Image"
                width={400}
                height={400}
              />
              <div className="absolute inset-0 mt-[121%] bg-gradient-to-t from-primaryColor via-transparent to-transparent opacity-20 h-1/4 rounded-lg" />
              <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-black/30 to-transparent rounded-lg" />
            </div>

            <SparklesCore
              className="absolute z-0 h-full"
              background="transparent"
              particleColor="#48df84"
              minSize={0.5}
              maxSize={1.6}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
