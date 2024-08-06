import { motion, useInView } from "framer-motion";
import Lottie from "lottie-react";
import { useRef } from "react";
import ourMissionAnimation from "../assets/animations/ourMission.json";

const sections = [
  {
    title: "Growth Web Trend",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, recusandae?",
  },
  {
    title: "Growth Web Trend",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, recusandae?",
  },
  {
    title: "Growth Web Trend",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, recusandae?",
  },
];

const OurMission = () => {
  // const [isScrollingInside, setIsScrollingInside] = useState(false);
  // const [allowMainScroll, setAllowMainScroll] = useState(true);

  const mainRef = useRef(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const scrollableRef = useRef<HTMLDivElement>(null);
  const sectionsRef = useRef<HTMLDivElement>(null);

  const isInView = useInView(mainRef, {
    once: false,
    amount: 0.3,
  });

  // useEffect(() => {
  //   const triggerElement = triggerRef.current!;

  //   //右側のスクロールする要素
  //   const scrollableElement = scrollableRef.current!;

  //   const handleScroll = () => {
  //     //スクロール位置(量)の取得
  //     const scrollTop =
  //       window.pageYOffset || document.documentElement.scrollTop;

  //     //トリガー位置
  //     const triggerPosition =
  //       triggerElement?.getBoundingClientRect().top + window.scrollY * 0.86;

  //     // トリガー位置よりもスクロール位置が来たら発火
  //     if (scrollTop >= triggerPosition && !isScrollingInside) {
  //       console.log("内部スクロールモードに切り替え");
  //       setIsScrollingInside(true);
  //       setAllowMainScroll(false);
  //       window.scrollTo({ top: triggerPosition, behavior: "smooth" });
  //       document.body.style.overflow = "hidden";

  //       scrollableElement.focus(); // 内部要素にフォーカスを移す
  //     } else if (scrollTop < triggerPosition && isScrollingInside) {
  //       console.log("通常スクロールモードに戻る");
  //       setIsScrollingInside(false);
  //       setAllowMainScroll(true);
  //       document.body.style.overflow = "";
  //     }
  //   };

  //   const handleScrollableScroll = () => {
  //     if (
  //       scrollableElement.scrollTop + scrollableElement.clientHeight >=
  //       scrollableElement.scrollHeight - 20
  //     ) {
  //       setIsScrollingInside(false);
  //       setAllowMainScroll(true);
  //       document.body.style.overflow = "";
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   scrollableElement.addEventListener("scroll", handleScrollableScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //     scrollableElement.removeEventListener("scroll", handleScrollableScroll);
  //   };
  // }, [isScrollingInside, allowMainScroll]);

  return (
    <section ref={mainRef} className="lg:py-28">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="text-center space-y-6 lg:max-w-[65rem] mx-auto px-4"
      >
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center"
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
          className="lg:text-xl text-sm lg:leading-8"
        >
          At React Website, we take a holistic approach to investing, focusing
          on areas that create both social and financial value. Our strategy is
          built on three key pillars:
        </motion.p>

        <div ref={triggerRef} className="lg:pt-6">
          <div className="md:flex gap-5">
            <motion.div
              initial={{ opacity: 0, x: -150 }}
              animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -150 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              <Lottie animationData={ourMissionAnimation} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 150 }}
              animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : 150 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              ref={scrollableRef}
            >
              {/* scroll area */}
              <div ref={sectionsRef} className="space-y-28">
                {sections.map((section, index) => (
                  <motion.div
                    initial={{ opacity: 0, x: 150 }}
                    animate={{
                      opacity: isInView ? 1 : 0,
                      x: isInView ? 0 : 150,
                    }}
                    transition={{ duration: 0.7, delay: index * 0.3 }}
                    key={index}
                    className="text-left"
                  >
                    <h4 className="font-medium lg:text-2xl">{section.title}</h4>
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
