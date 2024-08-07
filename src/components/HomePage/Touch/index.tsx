import { FaLocationArrow } from "react-icons/fa6";
import Link from "@docusaurus/Link";
import MagicButton from "../../../ui/MagicButton";
import React from "react";

const Touch = () => {
  return (
    <div className="w-full pt-20 pb-10 p-4">
      <div className="flex flex-col items-center">
        <h1 className="heading text-5xl lg:text-6xl w-[90%]">
          <span className="text-primaryColor">Ready</span> to take your team to
          the
          <span className="text-primaryColor"> next level</span>?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center md:w-[70%]">
          I&apos;m eager to bring my skills and passion for software development
          to a new role. Let’s connect and explore how I can contribute to your
          team’s success. I’m looking forward to hearing from you!
        </p>

        <Link to="mailto:ajaydhangar49@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </Link>
      </div>
    </div>
  );
};

export default Touch;
