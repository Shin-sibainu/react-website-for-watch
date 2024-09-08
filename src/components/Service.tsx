import { motion } from "framer-motion";
import SectionLayout from "./layout/SectionLayout";

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
  return (
    <SectionLayout
      id="service"
      title="Service"
      description="At ReactWebsite Wizards, we take a holistic approach to web development, focusing on creating both stunning visuals and smooth functionality. Our magical React recipe is built on three key ingredients:"
    >
      {/* service card */}
      {({ isInView }) => (
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
      )}
    </SectionLayout>
  );
};

export default Service;
