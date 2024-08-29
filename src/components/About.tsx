import Lottie from "lottie-react";
import aboutAnimation from "../assets/animations/aboutAnimation.json";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    amount: 0.2,
  });

  return (
    <section id="about" className="lg:py-14 py-2">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="text-center space-y-6 lg:max-w-[50rem] mx-auto "
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:text-5xl md:text-4xl sm:text-3xl text-2xl lg:leading-[3.5rem] font-bold"
        >
          About Us
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="space-y-6 lg:text-xl text-base"
        >
          <p className="lg:leading-8">
            Hey there! 👋 We just launched our awesome new site built entirely
            with ReactWebsite. Can you believe it? Our team poured their heart
            (and a lot of coffee ☕) into crafting this sleek, responsive
            masterpiece. From snappy page loads to buttery-smooth animations,
            we're pretty proud of how it turned out!
          </p>
          <p>
            But it's not just about looking pretty (though we think it does 😉).
            This bad boy is packed with React goodness - reusable components,
            efficient state management, and all the hooks you could shake a
            stick at. Plus, it's so easy to update, even our office plant could
            probably do it (if it had thumbs).
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="py-2"
        >
          <Lottie animationData={aboutAnimation} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
