import React from "react";
import { motion } from "framer-motion";

export const AppAnimate = (Component, classNames) =>
  function HOC() {
    return (
      <motion.div
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className={`${classNames} flex justify-center items-center`}
      >
        <Component />
      </motion.div>
    );
  };
