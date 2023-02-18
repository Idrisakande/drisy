import React from "react";
import { AppAnimate } from "../ReuseComponents/Wrapper/AppAnimate";
import { AppWrapper } from "../ReuseComponents/Wrapper/AppWrapper";
import { motion } from "framer-motion";
import { useMediaQuery } from "../ReuseComponents/hooks/useMediaQuery";
import { experienceInfo, skillsInfo } from "../Info/Info";
import { ExpTooltip } from "../ReuseComponents/ToolTips/ToolTip";

const Skills = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 768px)");
  return (
    <main className="skills-main">
      {/* Skills and experience header */}
      <motion.header
        whileInView={{ y: [100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.7 }}
        className="font-bold flex flex-col gap-2 text-center md:gap-4"
      >
        {isAboveMediumScreens ? (
          <>
            <h1 className="text-[1.75rem] px-4 xs:text-4xl md:text-5xl">
              My <span className="text-blue">Skills </span>and
              <span className="text-blue"> Experience</span> in Development
            </h1>

            <p className="text-sm text-gray xs:text-base md:text-lg">
              Some of most beautifull technologies and experiences have known
            </p>
          </>
        ) : (
          <>
            <h1 className="text-[1.75rem] px-4 xs:text-4xl md:text-5xl">
              My <span className="text-blue">Skills</span> and
              <br /> <span className="text-blue">Experience</span>
            </h1>
            <p className="text-gray text-sm xs:text-base">
              Some of most beautifull technologies <br /> and experiences have
              known
            </p>
          </>
        )}
      </motion.header>

      {/* Skills and experience section*/}
      <section className="flex flex-col gap-16 justify-center items-center sm:gap-0 sm:flex-row">
        {/* Skills section */}
        <section className="mx-auto max-w-[75.7%] xs:max-w-[86.3%] sm:max-w-[53.15%] md:max-w-[45.1%]">
          <div className="flex justify-center items-center flex-wrap gap-7">
            {skillsInfo.map((data) => (
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className="flex flex-col gap-2 justify-center items-center"
                key={data.id}
              >
                <div
                  className="skill-img-circle"
                  style={{ backgroundColor: data.bgColor }}
                >
                  <motion.img
                    whileInView={{ scale: [0, 1] }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    src={data.img}
                    alt="Skill Img"
                    className="w-1/2 object-contain"
                  />
                </div>
                <motion.p
                  whileInView={{ scale: [0, 1] }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                  className="text-xs sm:text-xs md:text-sm"
                >
                  {data.name}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Experience section */}
        <section className="flex flex-col gap-4 mx-auto sm:min-w-[37%]">
          {experienceInfo.map((data) => (
            <motion.div
              whileInView={{ x: [100, 0], opacity: [0, 1] }}
              transition={{ duration: 1 }}
              key={data.id}
              className="flex gap-8"
            >
              <p className="font-medium text-purple-700 text-sm md:text-base">
                {data.year}
              </p>
              <div>
                <ExpTooltip
                  placement="top-start"
                  title={
                    <>
                      <p className="">{data.discription}</p>
                    </>
                  }
                >
                  <motion.div
                    whileInView={{ opacity: [0, 1] }}
                    transition={{ duration: 0.5 }}
                    className="font-medium flex flex-col gap-1 justify-start items-start cursor-pointer"
                  >
                    <h4 className="text-sm md:text-base text-black">
                      {data.name}
                    </h4>
                    <p className="text-gray text-xs lg:text-sm">
                      {data.company}
                    </p>
                  </motion.div>
                </ExpTooltip>
              </div>
            </motion.div>
          ))}
        </section>
      </section>
    </main>
  );
};

export default AppWrapper(
  AppAnimate(Skills, "flex flex-col w-full"),
  "skills",
  "bg-white"
);
