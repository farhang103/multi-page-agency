"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import ErrorSpan from "./ErrorSpan";
import { motion } from "framer-motion";

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setIsSubmitted(true);
  };
  const { name, phone, email, message } = watch();

  return (
    <div className="flex flex-col gap-12 bg-peach  bg-[url(../assets/contact/mobile/bg-pattern-hero-contact-mobile.svg)] bg-no-repeat py-[4.5rem] px-6 text-white md:gap-10 md:rounded-2xl md:bg-[url(../assets/contact/desktop/bg-pattern-hero-desktop.svg)] md:bg-[position:left_-120px_top_-40px] md:px-14 md:shadow-[0px_40px_80px_rgba(93,2,2,0.3)] lg:flex-row lg:justify-between lg:gap-24 lg:bg-[position:left_bottom] lg:px-24 ">
      <motion.div
        variants={containerVariants}
        initial="initial"
        animate="animate"
        className="self-center text-center md:text-left"
      >
        <motion.h1
          variants={textVariants}
          className="mb-6 text-[2rem] font-medium capitalize leading-[1.125em]  md:mb-8 md:text-5xl"
        >
          Contact Us
        </motion.h1>
        <motion.p
          variants={textVariants}
          className="text-[0.9375rem] leading-relaxed md:text-body"
        >
          Ready to take it to the next level? Let’s talk about your project or
          idea and find out how we can help your business grow. If you are
          looking for unique digital experiences that’s relatable to your users,
          drop us a line.
        </motion.p>
      </motion.div>
      <form
        action="post"
        className="text-[0.9375rem] leading-[1.7em] lg:w-96 lg:shrink-0"
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
      >
        <motion.div
          variants={containerVariants}
          initial="initial"
          animate="animate"
          className="mb-14 flex flex-col gap-6"
        >
          <motion.label
            variants={inputVariants}
            className={`relative before:absolute before:left-0  before:-bottom-3 before:w-full before:bg-white focus-within:before:h-0.5 ${
              name ? "before:h-0.5" : "before:h-[0.0625rem]"
            }`}
          >
            <input
              disabled={isSubmitted}
              type="text"
              placeholder="Name"
              {...register("name", { required: "Can't be empty" })}
              className="w-full bg-transparent py-3 px-3.5 font-medium capitalize outline-none placeholder:text-white placeholder:opacity-50 md:px-6 lg:pt-0"
            />
            {errors.name && <ErrorSpan errorMessage={errors.name.message} />}
          </motion.label>
          <motion.label
            variants={inputVariants}
            className={`relative before:absolute before:left-0 before:-bottom-3 before:w-full before:bg-white focus-within:before:h-0.5 ${
              email ? "before:h-0.5" : "before:h-[0.0625rem]"
            }`}
          >
            <input
              disabled={isSubmitted}
              placeholder="Email Address"
              type="email"
              {...register("email", {
                required: "Can't be empty",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Please use a valid email address",
                },
              })}
              className="w-full bg-transparent py-3 px-3.5 font-medium outline-none placeholder:text-white placeholder:opacity-50 md:px-6"
            />
            {errors.email && <ErrorSpan errorMessage={errors.email.message} />}
          </motion.label>
          <motion.label
            variants={inputVariants}
            className={`relative before:absolute before:left-0 before:-bottom-3 before:w-full before:bg-white focus-within:before:h-0.5 ${
              phone ? "before:h-0.5" : "before:h-[0.0625rem]"
            }`}
          >
            <input
              disabled={isSubmitted}
              placeholder="Phone"
              {...register("phone", { required: "Can't be empty" })}
              type="tel"
              className="w-full bg-transparent py-3 px-3.5 font-medium outline-none placeholder:text-white placeholder:opacity-50 md:px-6"
            />
            {errors.phone && <ErrorSpan errorMessage={errors.phone.message} />}
          </motion.label>
          <motion.label
            variants={inputVariants}
            className={`relative before:absolute before:left-0 before:-bottom-3 before:w-full before:bg-white focus-within:before:h-0.5 ${
              message ? "before:h-0.5" : "before:h-[0.0625rem]"
            }`}
          >
            <textarea
              disabled={isSubmitted}
              placeholder="Your Message"
              {...register("message", { required: "Can't be empty" })}
              className="w-full resize-none bg-transparent py-3 px-3.5 font-medium outline-none placeholder:text-white placeholder:opacity-50 md:px-6"
              rows={3}
            ></textarea>
            {errors.message && (
              <ErrorSpan errorMessage={errors.message.message} />
            )}
          </motion.label>
        </motion.div>
        <motion.button
          initial={{ opacity: 0, translateY: "10px" }}
          animate={{ opacity: 1, translateY: "0px" }}
          transition={{ ease: "easeOut", duration: 0.15, delay: 0.8 }}
          disabled={isSubmitted}
          type="submit"
          className={`button dark mx-auto block lg:mr-0 ${
            isSubmitted ? "cursor-not-default" : "cursor-pointer"
          } self-center px-12 md:text-xl`}
        >
          {isSubmitted ? "Thank you!" : "Submit"}
        </motion.button>
      </form>
    </div>
  );
};

const containerVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
      ease: "easeOut",
    },
  },
};

const textVariants = {
  initial: { opacity: 0, translateY: "10px" },
  animate: {
    opacity: 1,
    translateY: "0px",
    transition: { ease: "easeOut", duration: 0.15 },
  },
};
const inputVariants = {
  initial: { opacity: 0, translateY: "10px" },
  animate: {
    opacity: 1,
    translateY: "0px",
    transition: { ease: "easeOut", duration: 0.15 },
  },
};

export default Form;
