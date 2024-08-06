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
          className="lg:text-5xl text-2xl"
        >
          About Us
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="space-y-6 lg:text-xl text-sm"
        >
          <p className="lg:leading-8">
            HealthAxon is a UK based organisation which makes investments in
            happiness. We quantify both social and financial returns generated
            by our holdings, with a portfolio made up of sustainable Health and
            Social Care services. Our clients include Local Authorities, the NHS
            and private individuals.
          </p>
          <p>
            We think holistically about returns and believe in creating durable,
            scalable impact based on our values whilst aligning stakeholders.
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
