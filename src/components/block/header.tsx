import { motion } from "framer-motion";
import { springConfig } from "~/const";
import { useMobile } from "~/hooks/use-mobile";

const HEADER_ANIMATION = {
  visible: { opacity: 1, y: 0, x: "-50%" },
  hidden: { opacity: 0, y: 100 },
};

const HEADER_TRANSITION = { type: "spring", ...springConfig, stiffness: 300 };

interface HeaderProps {
  active: boolean;
  hook: string;
  letter: string;
}

export const Header: React.FC<HeaderProps> = ({ active, hook, letter }) => {
  const isMobile = useMobile();
  const state = active || isMobile ? "visible" : "hidden";

  return (
    <motion.div
      className="absolute bottom-8 bg-white/80 flex gap-2.5 items-center whitespace-nowrap shadow-lg shadow-neutral-600/5 text-xs lg:text-sm backdrop-blur-sm left-1/2 py-1 pr-2.5 pl-1.5 rounded-full"
      initial="visible"
      animate={state}
      variants={HEADER_ANIMATION}
      transition={HEADER_TRANSITION}
    >
      <Icon letter={letter?.at(0)} />
      {hook}
    </motion.div>
  );
};

const Icon: React.FC<{ letter?: string }> = ({ letter }) => {
  return (
    <div className="size-6 aspect-square rounded-full bg-[#FF6B00] text-white  flex items-center justify-center ">
      {letter?.toUpperCase().slice(0, 1)}
    </div>
  );
};
