import { motion } from "framer-motion";

const Header = () => {
  return (
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
      <motion.span className="font-bold lg:text-3xl md:text-2xl text-xl">
        React Website
      </motion.span>
      <nav className="hidden md:block">
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
  );
};

export default Header;
