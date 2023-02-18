import React from "react";
import { motion } from "framer-motion";

export const AboutCard = ({ data }) => {
  return (
    // About card info
    <>
      <div className={data.divStyle}>
        {data.emojiImg && (
          <motion.img
            whileInView={{ scale: [0, 1] }}
            transition={{ duration: 1, ease: "easeInOut" }}
            src={data.emojiImg}
            alt="emoji Img"
            className={data.emojiImgStyle}
          />
        )}
        <motion.div
          whileInView={{ rotate: [50, 0] }}
          transition={{ duration: 1 }}
          className="relative h-36 w-36 rounded-full bg-white shadow-lg flex justify-center items-center"
        >
          {data.img && (
            <div className="h-16 w-16 rounded-full bg-white shadow-lg flex justify-center items-center">
              <motion.img
                src={data.img}
                alt="about img"
                className="w-1/2 object-contain"
              />
            </div>
          )}
          {data.img1 && (
            <div className={data.imgStyle1}>
              <motion.img
                src={data.img1}
                alt="about img"
                className="w-1/2 object-contain"
              />
            </div>
          )}
          {data.img2 && (
            <div className={data.imgStyle2}>
              <motion.img
                src={data.img2}
                alt="about img"
                className="w-1/2 object-contain"
              />
            </div>
          )}
          {data.img3 && (
            <div className={data.imgStyle3}>
              <motion.img
                src={data.img3}
                alt="about img"
                className="w-1/2 object-contain"
              />
            </div>
          )}
        </motion.div>
      </div>
      <motion.div
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <h2 className="text-base font-bold mt-2">{data.title}</h2>
        <p className="text-gray text-xs px-1 sm:px-0">{data.description}</p>
      </motion.div>
    </>
  );
};
