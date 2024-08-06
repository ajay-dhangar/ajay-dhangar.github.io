import { BackgroundGradientAnimation } from "./GradientAnimation";
import GridGlobe from "./GlobeConfig";
import { leftTechStack, rightTechStack } from "../data";
import { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";

import animationData from "../data/confetti.json";
import MagicButton from "./MagicButton";
import Lottie from "react-lottie";
import React from "react";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto"
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
  icon,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
  icon?: React.ReactNode;
}) => {
  const [copied, setCopied] = useState(false);

  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleCopy = () => {
    const text = "ubaidlodhi2667@gmail.com";
    navigator.clipboard.writeText(text);
    setCopied(true);
  };
  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className,
      )}
      style={{
        background: "rgb(6,23,0)",
        backgroundColor:
          "linear-gradient(90deg, rgba(10,50,0,1) 4%, rgba(0,72,5,1) 36%, rgba(2,178,12,1) 100%)",
      }}
    >
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center ")}
            />
          )}
        </div>
        {id == 1 || id == 5 ? (
          <div className="bg-[rgb(10,50,0)] h-full w-full absolute opacity-50"></div>
        ) : (
          <></>
        )}
        <div
          className={`absolute right-0 -bottom-5 ${
            id === 5 && "w-full opacity-80"
          } `}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              //   width={220}
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>
        {id === 6 && (
          <BackgroundGradientAnimation>
            <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
          </BackgroundGradientAnimation>
        )}
        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10",
          )}
        >
          <div className="font-sans font-semibold md:text-xs lg:text-base text-sm text-[#3de07b] z-10">
            {description}
          </div>

          <div
            className={`font-sans text-lg lg:text-3xl max-w-lg font-bold z-10`}
          >
            {title}
          </div>

          {id == 2 && <GridGlobe />}

          {id === 3 && (
            <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
              {/* tech stack lists */}
              <div className="flex flex-col gap-4 z-50">
                {leftTechStack.map((item) => (
                  <span
                    key={item.id}
                    className=" lg:px-3 py-2 px-3 text-xs lg:text-base opacity-90 
                    lg:opacity-100 rounded-lg text-center bg-[#072c15]"
                  >
                    {item.title}
                  </span>
                ))}
                <span className="py-2 px-3  rounded-lg text-center bg-transparent"></span>
              </div>
              <div className="flex flex-col gap-4 z-50">
                <span className=" py-2 px-3  rounded-lg text-center bg-transparent"></span>
                {rightTechStack.map((item) => (
                  <span
                    key={item.id}
                    className=" lg:px-3 px-3 py-2 text-xs lg:text-base opacity-90 
                    lg:opacity-100 rounded-lg text-center text-white bg-[#072c15]"
                  >
                    {item.title}
                  </span>
                ))}
              </div>
            </div>
          )}

          {id === 6 && (
            <div className="mt-5 relative">
              <div
                className={`absolute -bottom-5 right-0 ${
                  copied ? "block" : "block"
                }`}
              >
                <Lottie options={defaultOptions} height={200} width={400} />
              </div>

              <MagicButton
                title={copied ? "Email is Copied!" : "Copy my Email"}
                icon={<IoCopyOutline />}
                position="left"
                onClickHandler={handleCopy}
                otherClasses="!bg-[#072c15] text-sm"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
