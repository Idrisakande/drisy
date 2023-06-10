import React from "react";
import { motion } from "framer-motion";
import images from "../constants/images";
import { useMediaQuery } from "../ReuseComponents/hooks/useMediaQuery";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { heroImgInfo } from "../Info/Info";
import { BsArrowRight } from "react-icons/bs";

const Home = ({ setSelectedPage }) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 768px)");
  const scaleVariants = {
    whileInView: {
      scale: [0, 1],
      opacity: [0, 1],
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  return (
    <main id="home" className="pt-16 pb-20 px-4 sm:px-16 sm:pb-24 md:pb-20">
      {/* Client section */}
      <motion.section
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="flex justify-end text-right mt-11 sm:mt-16 sm:justify-start"
      >
        <div className="flex sm:w-60 gap-4 bg-white shadow-lg rounded-xl py-4 px-2 ">
          {isAboveMediumScreens ? (
            <img
              className="w-[30%] object-contain"
              src={images.glassesemoji}
              alt="emoji"
            />
          ) : (
            <span className="text-[2rem]">😎</span>
          )}
          <div className="text-2xl text-black font-semibold">
            <p className="">Hi,</p>
            <h1 className=" sm:text-3xl text-blue">My Client</h1>
          </div>
        </div>
      </motion.section>

      {/* Hero section */}
      <section className="profile-section">
        {/* Hero imagee div */}
        <div className="basis-[55%] flex justify-center sm:order-2">
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 1, delayChildren: 0.5 }}
            className="relative flex justify-center items-center"
          >
            <img
              className="z-20 w-4/5 ss:w-1/2 sm:w-[65%]"
              src={images.hero}
              alt="hero img"
            />
            <motion.img
              src={images.circle}
              alt="circle img"
              className="z-0 absolute -top-2 w-[90%] ss:w-[58%] sm:-top-2 sm:w-[75%]"
            />
            {heroImgInfo.map((data) => (
              <div key={data.id} className={data.divStyle}>
                <motion.img
                  variants={scaleVariants}
                  whileInView={scaleVariants.whileInView}
                  src={data.img}
                  alt={data.name}
                  className={data.imgStyle}
                />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Hero info div */}
        <div className="profile-info">
          <motion.div
            whileInView={{ x: [-100, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="text-black font-bold mx-auto ss:w-[85%] sm:w-full"
          >
            {/* <span>👋</span> */}
            <h1 className="text-3xl xs:text-4xl md:text-5xl">
              l'm{" "}
              <span className="text-blue block ss:inline-block sm:block">
                Idris Akande
              </span>
            </h1>
            <p className="text-gray text-xs font-normal mt-3 xs:text-sm md:max-w-[90%]">
              I a React Frontend Developer with 3 years of experience developing
              quality and productive Web Applications. I also build a Fullstack
              Web Applications with React and firebase development software to
              execute beautifull user interfaces.
            </p>
          </motion.div>
          {/* Call to action */}
          <motion.div
            whileInView={{ x: [-100, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="flex justify-start items-start"
          >
            <AnchorLink
              className="profile-link"
              onClick={() => setSelectedPage("contact")}
              href="#contact"
            >
              Contact Me <BsArrowRight className="text-lg font-bold" />
            </AnchorLink>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Home;
