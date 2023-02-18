import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { BackToTopToolTip } from "../ReuseComponents/ToolTips/ToolTip";
// import { animateScroll as scroll } from "react-scroll";

export const BackToButton = () => {
  const [showTopButton, setshowTopButton] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 250
        ? setshowTopButton(true)
        : setshowTopButton(false);
    });
  });
  const scrollToTop = () => {
    // scroll.scrollToTop();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {showTopButton && (
        <BackToTopToolTip
          placement="top"
          title={
            <>
              <p>Scroll To Top</p>
            </>
          }
        >
          <button
            onClick={() => scrollToTop()}
            className="bg-white text-blue flex justify-center items-center w-8 h-8 border border-blue rounded-full cursor-pointer fixed bottom-24 right-4 z-50 hover:bg-blue hover:text-white transition duration-500"
          >
            <FaArrowUp />
          </button>
        </BackToTopToolTip>
      )}
    </>
  );
};
