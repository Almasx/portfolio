import type { Variants } from "framer-motion";

// Spring configurations
export const tagSpringConfig = {
  stiffness: 400,
  damping: 30,
  mass: 0.8,
};

export const createTagSpringConfig = (index: number) => ({
  stiffness: 400,
  damping: 30,
  mass: 0.5 + index * 0.2,
});

// Transition configurations
export const scaleTransition = {
  type: "spring",
  ...tagSpringConfig,
};

export const opacityTransition = {
  duration: 0.3,
};

// Variants
export const tagVariants: Variants = {
  initial: { scale: 0.5, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  exit: { scale: 0.5, opacity: 0 },
};

export const tagContentVariants: Variants = {
  animate: {
    x: [0, 1, -1, 0],
    y: [0, -1, 1, 0],
  },
};

export const createTagContentTransition = (index: number) => ({
  duration: 3 + index * 0.5,
  repeat: Infinity,
  repeatType: "reverse" as const,
  ease: "easeInOut",
});

// Utility function for random motion
export const generateRandomMotion = (amplitude: number = 1) => ({
  x: (Math.random() - 0.5) * amplitude,
  y: (Math.random() - 0.5) * amplitude,
});
