import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import clsx from "clsx";
import React from "react";

export const TextGenerateEffect = ({
  words,
  className,
  mobScreen,
}: {
  words: string;
  className?: string;
  mobScreen: boolean;
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 1,
        delay: stagger(0.2),
      },
    );
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          if (mobScreen) {
            return (
              <motion.span
                key={word + idx}
                className={`${
                  idx == 4 || idx == 5
                    ? "text-[#48df84]"
                    : "dark:text-white text-black"
                } opacity-0`}
              >
                {word}{" "}
              </motion.span>
            );
          } else {
            return (
              <motion.span
                key={word + idx}
                className={`${
                  idx == 5 || idx == 6
                    ? "text-[#48df84]"
                    : "dark:text-white text-black"
                } opacity-0`}
              >
                {word}{" "}
              </motion.span>
            );
          }
        })}
      </motion.div>
    );
  };

  return (
    <div className={clsx("font-bold", className)}>
      <div className="my-4">
        <div className=" dark:text-white text-black leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
