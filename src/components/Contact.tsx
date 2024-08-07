import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Contact = () => {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: false,
    amount: 0.3,
  });

  return (
    <section ref={ref} className="lg:py-24 py-14">
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
          Contact Me
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="lg:text-xl text-sm lg:leading-8"
        >
          Contact Me! We are waiting for your messages! Thank you for watching!
        </motion.p>

        {/* form section */}
        <div className="">
          <form className="space-y-5 text-left max-w-[40rem] mx-auto">
            <div className="mt-4">
              <label htmlFor="title" className="font-medium">
                Title
              </label>
              <input
                type="text"
                name="title"
                placeholder="ex. Web Development Advice"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-300"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="font-medium">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="ex. xxxxxxx@gmail.com"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-300"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="font-medium">
                Content
              </label>
              <textarea
                name="message"
                placeholder="ex. Please help me."
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-300 lg:h-[20rem]"
                required
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="border-2 border-gray-300 px-5 py-2 rounded-md hover:border-orange-300 duration-150 transition"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
