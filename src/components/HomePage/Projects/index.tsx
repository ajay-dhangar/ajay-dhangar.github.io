import React from "react";
import { projects } from "../../../data";
import { ThreeDCardDemo } from "../../../ui/Card3D";

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <h1 className="heading text-4xl text-center lg:text-6xl mb-10">
        A collection of{" "}
        <span className="text-primaryColor">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-10">
        {projects.map((item) => (
          <div
            className="h-[35rem] md:h-[37rem] lg:min-h-[32.5rem] w-90"
            key={item.id}
          >
            <ThreeDCardDemo
              title={item.title}
              description={item.des}
              imgSource={item.img}
              icons={item.iconLists}
              link={item.link}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
