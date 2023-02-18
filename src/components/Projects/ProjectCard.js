import React from "react";
import { motion } from "framer-motion";
import { AiFillEye, AiFillGithub } from "react-icons/ai";

export const ProjectCard = ({ project }) => {
  const {
    name,
    divStyle,
    img1,
    img2,
    img2Style,
    title,
    discription,
    url,
    gitHub,
    tag,
  } = project;
  return (
    // Project section
    <motion.section
      whileInView={{ scale: [0, 1] }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="bg-white flex flex-col gap-4 p-3 w-56 rounded-lg cursor-pointer xs:w-64"
    >
      <div className="relative overflow-hidden">
        <div className={divStyle} />
        <img className="h-44 rounded-lg xs:h-52" src={img1} alt={name} />
        {img2 && <img className={img2Style} src={img2} alt={name} />}

        <motion.div
          whileHover={{ opacity: [0, 1] }}
          transition={{
            duration: 0.25,
            ease: "easeInOut",
            staggerChildren: 0.5,
          }}
          className="project-black-card"
        >
          {url && (
            <a href={url} target="_blank" rel="noreferrer">
              <motion.div
                whileInView={{ scale: [0, 1] }}
                whileHover={{ scale: [1, 0.9] }}
                transition={{ duration: 0.25 }}
                className="bg-black flex justify-center items-center w-10 h-10 rounded-full bg-opacity-80"
              >
                <AiFillEye className="text-lg text-white" />
              </motion.div>
            </a>
          )}
          {gitHub && (
            <a href={gitHub} target="_blank" rel="noreferrer">
              <motion.div
                whileInView={{ scale: [0, 1] }}
                whileHover={{ scale: [1, 0.9] }}
                transition={{ duration: 0.25 }}
                className="bg-black flex justify-center items-center w-10 h-10 rounded-full bg-opacity-80"
              >
                <AiFillGithub className="text-lg text-white" />
              </motion.div>
            </a>
          )}
        </motion.div>
      </div>

      <div className="font-bold relative flex flex-col gap-1 xs:gap-2">
        <h4 className="text-sm">{title}</h4>
        <p className="text-xs text-gray">{discription}</p>

        <div className="flex justify-center items-center absolute -top-9 left-0 right-0">
          <p className="bg-white text-xs text-gray py-1 px-2 rounded-md">
            {tag}
          </p>
        </div>
      </div>
    </motion.section>
  );
};
