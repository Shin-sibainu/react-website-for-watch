import { motion } from "framer-motion";
import Lottie from "lottie-react";
import heroAnimation from "../assets/animations/heroAnimation.json";

const Hero = () => {
  return (
    <div id="home" className="pb-14">
      <motion.header
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          duration: 1,
          delay: 0.5,
          stiffness: 150,
          damping: 15,
        }}
        className="flex items-center justify-between md:h-14"
      >
        <motion.span className="font-bold lg:text-3xl text-xl">
          React Website
        </motion.span>
        <nav className="hidden lg:block">
          <ul className="flex items-center gap-4 font-medium">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#service">Service</a>
            </li>
          </ul>
        </nav>

        {/* hamburger menu */}
      </motion.header>

      <main className="flex flex-col flex-1 items-center">
        <div className="lg:py-14 py-10 max-w-[50rem] text-center">
          <motion.h2
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              duration: 1,
              delay: 0.7,
              stiffness: 150,
              damping: 15,
            }}
            className="lg:text-5xl text-2xl lg:leading-[3.5rem]"
          >
            We make high impact investments that transform lives
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              duration: 1,
              delay: 0.7,
              stiffness: 150,
              damping: 15,
            }}
          >
            <Lottie animationData={heroAnimation} />
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Hero;
