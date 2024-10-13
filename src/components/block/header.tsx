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
  color?: string;
}

export const Header: React.FC<HeaderProps> = ({
  active,
  hook,
  letter,
  color,
}) => {
  const isMobile = useMobile();
  const state = active || isMobile ? "visible" : "hidden";
  return (
    <motion.div
      className="flex items-center gap-1 absolute bottom-8 left-1/2"
      initial="hidden"
      whileInView={state}
      viewport={{ once: true }}
      variants={HEADER_ANIMATION}
      transition={HEADER_TRANSITION}
    >
      <div className="bg-white/80 flex gap-2.5 items-center whitespace-nowrap shadow-lg shadow-neutral-600/5 text-xs lg:text-sm backdrop-blur-sm py-1 pr-2.5 pl-1.5 rounded-full">
        <Icon letter={letter?.at(0)} color={color} />
        {hook}
      </div>
      <div className="bg-white/80 size-8 justify-center leading-5 text-neutral-500 text-2xl flex items-center shadow-lg shadow-neutral-600/5 backdrop-blur-sm rounded-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="m9 18 6-6-6-6" />
        </svg>
      </div>
    </motion.div>
  );
};

const Icon: React.FC<{ letter?: string; color?: string }> = ({
  letter,
  color,
}) => {
  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className="size-6 aspect-square rounded-full bg-[#FF6B00] text-white  flex items-center justify-center "
    >
      {letter?.toUpperCase().slice(0, 1)}
    </div>
  );
};
