import { motion, useInView } from "framer-motion";
import Lottie from "lottie-react";
import { useRef } from "react";
import ourMissionAnimation from "../assets/animations/ourMission.json";

const sections = [
  {
    title: "Lightning-Fast Performance",
    content:
      "Experience the speed of light with ReactWebsite! Our optimized components and efficient rendering ensure your visitors won't be left waiting. Say goodbye to sluggish load times!",
  },
  {
    title: "Responsive Design Magic",
    content:
      "Watch your site transform like a chameleon across devices! ReactWebsite's fluid layouts and adaptive components ensure a pixel-perfect experience from smartphones to ultrawide monitors.",
  },
  {
    title: "Easy-Peasy Updates",
    content:
      "Updating your site is now as easy as ordering pizza! With ReactWebsite's intuitive interface and reusable components, you can make changes faster than you can say 'React hooks'!",
  },
];

const OurMission = () => {
  const mainRef = useRef(null);

  const isInView = useInView(mainRef, {
    once: false,
    amount: 0.3,
  });

  return (
    <section
      id="ourmission"
      ref={mainRef}
      className="lg:py-14 py-2 overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="text-center space-y-6 lg:max-w-[65rem] mx-auto px-4"
      >
        <motion.h2
          className="lg:text-5xl md:text-4xl sm:text-3xl text-2xl lg:leading-[3.5rem] font-bold"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Our Mission
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="lg:text-xl text-base lg:leading-8"
        >
          At React Website, we take a holistic approach to investing, focusing
          on areas that create both social and financial value. Our strategy is
          built on three key pillars:
        </motion.p>

        <div className="lg:pt-6">
          <div className="lg:flex gap-5">
            <motion.div
              initial={{ opacity: 0, x: -150 }}
              animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -150 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="lg:w-1/2"
            >
              <Lottie animationData={ourMissionAnimation} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 150 }}
              animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : 150 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="lg:w-1/2"
            >
              {/* scroll area */}
              <div className="space-y-28">
                {sections.map((section, index) => (
                  <motion.div
                    initial={{ opacity: 0, x: 150 }}
                    animate={{
                      opacity: isInView ? 1 : 0,
                      x: isInView ? 0 : 150,
                    }}
                    transition={{ duration: 0.7, delay: index * 0.3 }}
                    key={index}
                    className="text-left border-b-2 border-slate-500 pb-2"
                  >
                    <h4 className="font-medium lg:text-2xl mb-2">
                      {section.title}
                    </h4>
                    <p>{section.content}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default OurMission;
