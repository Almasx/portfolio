import { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  useSpring,
  useScroll,
  AnimatePresence,
} from "framer-motion";
import { springConfig } from "~/const";
import { useMobile } from "~/hooks/use-mobile";

const MOVE_DISTANCE = 180;
const MOVE_ROTATE = 360 * 2;

const MOBILE_ANIMATION = {
  initial: { y: 100, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: { y: 100, opacity: 0 },
  transition: { type: "spring", ...springConfig },
};

export const CTA = () => {
  const { scrollY } = useScroll();
  const scrollProgress = useMotionValue(0);
  const [isEndOfPage, setIsEndOfPage] = useState(false);
  const isMobile = useMobile();

  const onClick = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const unsubscribe = scrollY.onChange((latest) => {
      const progress =
        latest / (document.documentElement.scrollHeight - window.innerHeight);
      scrollProgress.set(progress);
      setIsEndOfPage(progress > 0.95);
    });

    return () => {
      unsubscribe();
    };
  }, [scrollY, scrollProgress]);

  const x = useTransform(scrollProgress, [0, 1], [0, MOVE_DISTANCE]);
  const rotate = useTransform(scrollProgress, [0, 1], [0, MOVE_ROTATE]);

  const springX = useSpring(x, springConfig);
  const springRotate = useSpring(rotate, springConfig);

  return (
    <AnimatePresence>
      {(!isMobile || (isMobile && !isEndOfPage)) && (
        <motion.div
          className="fixed z-10 flex items-center h-10 px-2 mt-auto bg-white rounded-full inset-x-20 lg:relative bottom-8 lg:left-0 lg:translate-x-0 lg:bottom-0 lg:rounded-xl lg:w-full lg:h-14"
          {...(isMobile ? MOBILE_ANIMATION : {})}
        >
          <motion.span
            className="text-2xl leading-none lg:text-3xl"
            style={{ x: springX, rotate: springRotate }}
          >
            👋
          </motion.span>
          <AnimatePresence mode="wait">
            <motion.button
              onClick={onClick}
              className="bg-[#FF6B00] text-white absolute right-1 lg:right-2 inset-y-1 lg:inset-y-auto lg:h-9 shadow-[0px_0px_4px_#FFB682_inset] flex items-center gap-2 rounded-full lg:rounded-xl px-4 lg:px-3 lg:py-1.5 leading-4"
            >
              <motion.span
                key={isEndOfPage ? "end" : "start"}
                initial={{ opacity: 0, filter: "blur(10px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, filter: "blur(10px)" }}
                transition={{ duration: 0.2 }}
                className="hidden lg:block"
              >
                {isEndOfPage ? "Ready to chat?" : "Drop a message"}
              </motion.span>
              <span className="font-mono text-xl">→</span>
            </motion.button>
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
