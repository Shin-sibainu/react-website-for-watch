import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";

export default function useSmoothScroll() {
  const scrollRef = useRef(null);

  useEffect(() => {
    let locomotiveScroll: LocomotiveScroll;

    if (scrollRef.current) {
      locomotiveScroll = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
        multiplier: 1, // スクロールの速度を調整します。1がデフォルト値です。
        class: "is-revealed",
        initPosition: { x: 0, y: 0 },
      });
    }

    // locomotiveScroll.on("scroll", (instance) => {
    //   const sections = document.querySelectorAll("[data-scroll-section]");
    //   let closestSection = null;
    //   let minDistance = Infinity;

    //   sections.forEach((section) => {
    //     const rect = section.getBoundingClientRect();
    //     const distance = Math.abs(rect.top);
    //     if (distance < minDistance) {
    //       minDistance = distance;
    //       closestSection = section;
    //     }
    //   });

    //   if (closestSection && !locomotiveScroll.isBusy) {
    //     locomotiveScroll.scrollTo(closestSection, {
    //       offset: 0,
    //       duration: 500,
    //       disableLerp: true,
    //     });
    //   }
    // });

    const resizeObserver = new ResizeObserver(() => {
      locomotiveScroll.update();
    });

    if (scrollRef.current) {
      resizeObserver.observe(scrollRef.current);
    }

    window.addEventListener("resize", () => locomotiveScroll.update());

    setTimeout(() => {
      locomotiveScroll.update();
    }, 500);

    return () => {
      if (locomotiveScroll) locomotiveScroll.destroy();
    };
  }, []);

  return scrollRef;
}
