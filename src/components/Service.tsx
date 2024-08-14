import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const services = [
  {
    title: "Speed",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, recusandae?",
    url: "/src/assets/gif/rocket.gif",
  },
  {
    title: "Save Money",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, recusandae?",
    url: "/src/assets/gif/save-money.gif",
  },
  {
    title: "Support",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, recusandae?",
    url: "/src/assets/gif/tech-support.gif",
  },
  {
    title: "PC Design",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, recusandae?",
    url: "/src/assets/gif/laptop.gif",
  },
  {
    title: "Security",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, recusandae?",
    url: "/src/assets/gif/shield.gif",
  },
  {
    title: "Settings",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, recusandae?",
    url: "/src/assets/gif/settings-unscreen.gif",
  },
];

const Service = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    amount: 0.3,
  });

  return (
    <section id="service" className="lg:py-14 py-2">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="text-center space-y-6 lg:max-w-[65rem] mx-auto px-4"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:text-5xl md:text-4xl sm:text-3xl text-2xl lg:leading-[3.5rem] font-bold"
        >
          Service
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="lg:text-xl text-base lg:leading-8"
        >
          At HealthAxon, we take a holistic approach to investing, focusing on
          areas that create both social and financial value. Our strategy is
          built on three key pillars:
        </motion.p>

        {/* service card */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-8">
          {services.map((service, index) => (
            <div key={index}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                className="space-y-3 mx-auto  rounded-e-md px-6 py-4 bg-slate-50 shadow hover:translate-y-1 duration-150"
              >
                <img
                  src={service.url}
                  width={120}
                  height={100}
                  className="mx-auto"
                />
                <span className="font-semibold lg:text-2xl inline-block">
                  {service.title}
                </span>
                <p>{service.content}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Service;
