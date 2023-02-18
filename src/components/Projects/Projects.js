import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "../../ReuseComponents/hooks/useMediaQuery";
import { projectsCardInfo, projectsNavInfo } from "../../Info/Info";
import { AppWrapper } from "../../ReuseComponents/Wrapper/AppWrapper";
import { AppAnimate } from "../../ReuseComponents/Wrapper/AppAnimate";
import Discount from "./Discount";
import { ProjectCard } from "./ProjectCard";

const Projects = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 768px)");
  const [selectedPage, setSelectedPage] = useState("home");
  const [nav, setNav] = useState({ name: "all" });
  const [filteredProjects, setFilterProjects] = useState([]);
  const [selectedProjects, setSelectedProjects] = useState(4);
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  const handleProjectsClicked = (e, index) => {
    setNav({ name: e.target.textContent.toLowerCase() });
    setSelectedProjects(index);
    setAnimateCard([{ y: 100, opacity: 0 }]);
    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);
    }, 500);
  };

  useEffect(() => {
    if (nav.name === "all") {
      setFilterProjects(projectsCardInfo);
    } else {
      const newProjects = projectsCardInfo.filter((projects) => {
        return nav.name === projects.name.toLowerCase();
      });
      setFilterProjects(newProjects);
    }
  }, [nav]);

  return (
    <main id="projects" className="projects-main">
      {/* Projects header */}
      <motion.header
        whileInView={{ y: [100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.7 }}
        className="font-bold flex flex-col gap-2 text-center md:gap-4 px-4"
      >
        {isAboveMediumScreens ? (
          <>
            <h1 className="text-[1.75rem] xs:text-4xl md:text-5xl">
              My Amazing <span className="text-blue">Portfolio</span> section
            </h1>

            <p className="text-gray text-sm xs:text-base md:text-lg">
              Some of my exciting and latest Web Applications
            </p>
          </>
        ) : (
          <>
            <h1 className="text-[1.75rem] xs:text-4xl md:text-5xl">
              My Amazing <br /> <span className="text-blue">Portfolio</span>{" "}
              section
            </h1>
            <p className="text-gray text-sm xs:text-base">
              Some of my exciting and latest <br /> Web Application
            </p>
          </>
        )}
      </motion.header>

      {/* Projects nav */}
      <nav className="text-xs font-medium px-4 max-w-xl mx-auto ">
        <motion.ul
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1 }}
          className="grid grid-cols-2 gap-2 xs:grid-cols-3 ss:flex justify-evenly items-center"
        >
          {projectsNavInfo.map((nav, index) => (
            <li
              key={index}
              className={`bg-white py-1 px-2 rounded cursor-pointer hover:bg-blue hover:text-white transition duration-500 ${selectedProjects === index ? "text-white bg-blue " : ""
                }`}
              onClick={(e) => handleProjectsClicked(e, index)}
            >
              {nav.name}
            </li>
          ))}
        </motion.ul>
      </nav>

      {/* Projects section */}
      <section>
        <motion.div
          animate={animateCard}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
          className="flex flex-wrap justify-center items-center gap-8 px-4"
        >
          {filteredProjects.map((project) => {
            // Project component
            return <ProjectCard key={project.id} project={project} />;
          })}
        </motion.div>
      </section>
      <section>
        {/* Discount component */}
        <Discount
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
      </section>
    </main>
  );
};

export default AppWrapper(
  AppAnimate(Projects, "flex flex-col w-full"),
  "projects",
  "bg-lightBlue"
);
