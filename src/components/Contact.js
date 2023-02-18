import React from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { AppAnimate } from "../ReuseComponents/Wrapper/AppAnimate";
import { AppWrapper } from "../ReuseComponents/Wrapper/AppWrapper";
import { useMediaQuery } from "../ReuseComponents/hooks/useMediaQuery";
import { contactInfo } from "../Info/Info";
import { FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 768px)");
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e) => {
    console.log("~ e", e);
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <main
      id="contact"
      className="flex flex-col gap-14 w-full px-4 sm:gap-20 sm:px-16"
    >
      {/* Contact header */}
      <motion.div
        whileInView={{ y: [100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.7 }}
        className="font-bold flex text-center flex-col gap-2 md:gap-4"
      >
        {isAboveMediumScreens ? (
          <>
            <h1 className="text-[1.75rem] xs:text-4xl md:text-5xl">
              Take a<span className="text-blue"> coffee</span> &
              <span className="text-blue"> chat </span>with me
            </h1>
            <p className="text-gray text-sm xs:text-base md:text-lg">
              I'm responsive to your messages and always available 24/7
            </p>
          </>
        ) : (
          <>
            <h1 className="text-[1.75rem] xs:text-4xl md:text-5xl">
              Take a<span className="text-blue "> coffee</span> &
              <br />
              <span className="text-blue "> chat</span> with me
            </h1>
            <p className="text-gray text-sm xs:text-base">
              I'm responsive to your messages <br />
              and always available 24/7
            </p>
          </>
        )}
      </motion.div>

      {/* Contact direct reach */}
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 1, delayChildren: 0.5 }}
        className="flex justify-center items-center flex-col gap-5 mx-auto w-full sm:flex-row sm:max-w-[70%] md:max-w-[55%] lg:max-w-[45%]"
      >
        {contactInfo.map(({ id, href, phoneNumber, gmail, img, bgColor }) => (
          <motion.a
            whileInView={{ scale: [0, 1] }}
            transition={{ duration: 1, ease: "easeInOut" }}
            key={id}
            href={href}
            className="flex justify-center items-center gap-4 mx-auto rounded-md px-6 py-3 sm:px-4 sm:py-2"
            style={{ backgroundColor: bgColor }}
          >
            <img
              className="w-[2rem] object-contain sm:w-[1.6rem]"
              src={img}
              alt="contact profile"
            />
            {phoneNumber ? (
              <p className="text-xs text-gray ">{phoneNumber}</p>
            ) : (
              <p className="text-xs text-gray ">{gmail}</p>
            )}
          </motion.a>
        ))}
      </motion.div>

      {/* Contact form */}
      <motion.div
        // whileInView={{ scale: [0, 1] }}
        // transition={{ duration: 1, ease: "easeInOut" }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        {/* {isFormSubmitted ? (
          <h3 className="text-4xl text-blue">
            Thank you for getting in touch!
          </h3>
        ) : ( */}
        <form
          target="_blank"
          onSubmit={onSubmit}
          action="https://formsubmit.co/a27eafbd3179309322a9345399d2d861"
          method="POST"
          className="font-medium flex flex-col mx-auto xs:w-[87%] ss:w-[80%] sm:w-[75%] md:w-[60%] lg:w-[50%]"
        >
          <input
            className="text-sm p-3 w-full bg-white placeholder-blue rounded-md outline-none focus:outline focus:outline-1 focus:outline-blue"
            type="text"
            placeholder="Your Name"
            {...register("name", {
              required: true,
              maxLength: 100,
            })}
          />
          {errors.name && (
            <p className="text-blue mt-1">
              {errors.name.type === "required" && "This field is required."}
              {errors.name.type === "maxLength" && "Max length is 100 char."}
            </p>
          )}
          <input
            className="text-sm p-3 mt-5 w-full bg-white placeholder-blue rounded-md outline-none focus:outline focus:outline-1 focus:outline-blue"
            type="text"
            placeholder="Your Email"
            {...register("email", {
              required: true,
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            })}
          />
          {errors.email && (
            <p className="text-blue mt-1">
              {errors.email.type === "required" && "This field is required."}
              {errors.email.type === "pattern" && "Invalid email address."}
            </p>
          )}
          <textarea
            className="text-sm mt-5 p-3 w-full bg-white placeholder-blue rounded-md resize-none outline-none focus:outline focus:outline-1 focus:outline-blue"
            name="message"
            placeholder="Your Message..."
            rows="7"
            cols="50"
            {...register("message", {
              required: true,
              maxLength: 2000,
            })}
          />
          {errors.message && (
            <p className="text-blue mt-1">
              {errors.message.type === "required" && "This field is required."}
              {errors.message.type === "maxLength" &&
                "Max length is 2000 char."}
            </p>
          )}
          <div className="flex items-center justify-center mt-8 sm:mt-10">
            <button
              className="text-sm font-bold text-white px-4 py-2 flex justify-center items-center gap-2 bg-blue rounded-md outline-none border border-blue hover:text-blue hover:bg-white transition duration-500 sm:px-6 sm:py-3"
              type="submit"
            >
              Send Message
              <FaPaperPlane className="text-xs" />
            </button>
          </div>
          {/* <input type="submit" /> */}
        </form>
        {/* )} */}
      </motion.div>
    </main>
  );
};

export default AppWrapper(
  AppAnimate(Contact, "flex-col w-full"),
  "contact",
  "bg-lightBlue"
);
