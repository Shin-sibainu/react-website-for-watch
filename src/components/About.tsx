import Lottie from "lottie-react";
import aboutAnimation from "../assets/animations/aboutAnimation.json";
import { motion } from "framer-motion";
import SectionLayout from "./layout/SectionLayout";

const About = () => {
  return (
    <SectionLayout
      id="about"
      title="About Us"
      description="We just launched our awesome new site built entirely with ReactWebsite. Our team poured their heart (and a lot of coffee ☕) into crafting this sleek, responsive masterpiece."
    >
      {({ isInView }) => (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="py-2"
        >
          <Lottie animationData={aboutAnimation} />
        </motion.div>
      )}
    </SectionLayout>
  );
};

export default About;
