import React from "react";
import { motion } from "framer-motion";
import { discountInfo } from "../../Info/Info";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { BsArrowRight } from "react-icons/bs";

const Discount = ({ setSelectedPage }) => {
  return (
    // Discount section
    <section className="discount-section">
      {discountInfo.map((data) => (
        // Discount info
        <div key={data.id} className="discount-container">
          <motion.div
            whileInView={{ x: [-100, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="discount-info"
          >
            <h1 className="discount-title">{data.title}</h1>
            <p className="discount-discription">{data.discription}</p>
            <AnchorLink
              className="discount-link"
              onClick={() => setSelectedPage("contact")}
              href="#contact"
            >
              {data.button}
              <BsArrowRight className="text-lg font-bold" />
            </AnchorLink>
          </motion.div>

          {/* Dicount img */}
          <motion.img
            whileInView={{ scale: [0, 1] }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            src={data.img}
            alt={data.name}
            className="discount-img"
          />
        </div>
      ))}
    </section>
  );
};

export default Discount;
