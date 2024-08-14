import { motion } from "framer-motion";
import Lottie from "lottie-react";
import heroAnimation from "../assets/animations/heroAnimation.json";

const Hero = () => {
  return (
    <div id="home" className="pb-14">
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
            className="lg:text-5xl md:text-4xl sm:text-3xl text-2xl lg:leading-[3.5rem]"
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
            className="md:w-[840px] -z-10"
          >
            <Lottie animationData={heroAnimation} />
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Hero;
