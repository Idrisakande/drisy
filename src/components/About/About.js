import React from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "../../ReuseComponents/hooks/useMediaQuery";
import { AppWrapper } from "../../ReuseComponents/Wrapper/AppWrapper";
import { AppAnimate } from "../../ReuseComponents/Wrapper/AppAnimate";
import { aboutsInfo } from "../../Info/Info";
import { AboutCard } from "./AboutCard";

const About = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 768px)");

  return (
    <main id="about" className="flex flex-col gap-14 px-4 sm:gap-20 sm:px-12">
      {/* About header */}
      <motion.header
        whileInView={{ y: [100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.7 }}
        className="font-bold flex flex-col gap-2 text-center md:gap-4"
      >
        {isAboveMediumScreens ? (
          <>
            <h1 className="text-[1.75rem] xs:text-4xl md:text-5xl">
              More<span className="text-blue"> about</span> who I
              <span className="text-blue"> am</span>
            </h1>
            <p className="text-gray text-sm xs:text-base md:text-lg">
              I know that good development means good business
            </p>
          </>
        ) : (
          <>
            <h1 className="text-[1.75rem] xs:text-4xl md:text-5xl">
              More
              <span className="text-blue ">
                {" "}
                about
                <br /> who
              </span>{" "}
              I am
            </h1>
            <p className="text-gray text-sm xs:text-base">
              I know that good development <br /> means good business
            </p>
          </>
        )}
      </motion.header>

      {/* About section */}
      <section className="flex flex-wrap justify-center items-center gap-10">
        {aboutsInfo.map((data) => (
          // About card
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="flex flex-col gap-2 justify-center text-center w-56 xs:w-80 ss:w-56 sm:w-64"
            key={data.id}
          >
            <AboutCard data={data} />
          </motion.div>
        ))}
      </section>
    </main>
  );
};

export default AppWrapper(
  AppAnimate(About, "flex-col w-full"),
  "about",
  "bg-white"
);
