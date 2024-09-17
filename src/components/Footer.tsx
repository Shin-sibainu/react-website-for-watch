import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import FooterSection from "./layout/FooterSection";
import { QUICK_LINKS, SOCIAL_ICONS } from "../data/footer";

const Footer = () => {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: false,
    amount: 0.3,
  });

  return (
    <footer className="sm:pt-12" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="container mx-auto px-4"
      >
        <div className="md:flex justify-between">
          <FooterSection
            title="React Website"
            className="w-full md:w-1/4 mb-6 md:mb-0"
          >
            <p className="text-sm">
              Making high impact investments that transform lives.
            </p>
          </FooterSection>

          <FooterSection
            title="Quick Links"
            className="w-full md:w-1/4 mb-6 md:mb-0"
          >
            <ul className="text-sm">
              {QUICK_LINKS.map((link) => (
                <li key={link.href} className="mb-1">
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </FooterSection>

          <FooterSection
            title="Contact Us"
            className="w-full md:w-1/4 mb-6 md:mb-0"
          >
            <p className="text-sm mb-1">123 Investment Street</p>
            <p className="text-sm mb-1">Email: info@reactwebsite.com</p>
            <p className="text-sm">Phone: (123) 456-7890</p>
          </FooterSection>

          <FooterSection title="Follow Us" className="w-full md:w-1/4">
            <div className="flex space-x-4">
              {SOCIAL_ICONS.map((icon, index) => (
                <a
                  key={index}
                  href={icon.href}
                  className="text-slate-800 hover:text-slate-900"
                  aria-label={icon.label}
                >
                  {icon.icon}
                </a>
              ))}
            </div>
          </FooterSection>
        </div>

        <div className="mt-5 border-t border-gray-700 pt-4 text-sm text-center">
          © {new Date().getFullYear()} React Website. All rights reserved.
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
