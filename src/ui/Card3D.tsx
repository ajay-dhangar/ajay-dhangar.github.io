import React from "react";
import { CardBody, CardContainer, CardItem } from "./Card3DConfig";
import { FaLocationArrow } from "react-icons/fa6";
import Link from "@docusaurus/Link";

export const ThreeDCardDemo = ({
  title,
  description,
  imgSource,
  icons,
  link,
  onClickHandler,
  otherClasses,
}: {
  title?: string;
  description?: string;
  imgSource: string;
  icons: string[];
  link: string;
  onClickHandler?: () => void;
  otherClasses?: string;
}) => {
  return (
    <CardContainer className="inter-var">
      <CardBody
        className="bg-gray-50 relative group/card dark:hover:shadow-2xl cursor-pointer dark:hover:shadow-emerald-500/[0.1] dark:bg-[#1e293b] dark:border-white/[0.2] border-black/[0.1]
       grid grid-cols-1 grid-rows-1 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out w-auto  h-auto rounded-xl p-6 border-[1px] border-gray-200 dark:border-[#1e293b] dark:text-white"
      >
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {description}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4 p-2">
          <img
            src={imgSource}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between gap-2 items-center mt-10">
          <CardItem
            translateZ={20}
            as="button"
            className=" py-2 rounded-xl text-sm font-normal dark:bg-[#1e293b] dark:text-black text-primaryColor bg-gray-100"
          >
            <div className="flex items-center">
              {icons.map((icon, index) => (
                <div
                  key={index}
                  className="border border-primaryColor/[.4] rounded-full bg-gray-700 lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                  style={{
                    transform: `translateX(-${5 * index + 2}px)`,
                  }}
                >
                  <img src={icon} alt="icon5" className="p-2" />
                </div>
              ))}
            </div>
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="flex items-center gap-x-2 px-4 py-2 rounded-xl bg-gray dark:bg-[#1e293b] dark:text-black text-sm md:text-base font-bold"
          >
            <Link to={link} target="_blank">
              Demo
            </Link>

            <FaLocationArrow />
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
};
