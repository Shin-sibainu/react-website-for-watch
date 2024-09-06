import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

type SectionLayoutProps = {
  id: string;
  title: string;
  description: string;
  children:
    | React.ReactNode
    | ((props: { isInView: boolean }) => React.ReactNode);
};

const SectionLayout = ({
  id,
  title,
  description,
  children,
}: SectionLayoutProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    amount: 0.2,
  });

  return (
    <section id={id} className="lg:py-14 py-2">
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
          {title}
        </motion.h2>
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="lg:leading-8 lg:text-xl text-base"
          >
            {description}
          </motion.p>
        )}
        {typeof children === "function" ? children({ isInView }) : children}
      </motion.div>
    </section>
  );
};

export default SectionLayout;
