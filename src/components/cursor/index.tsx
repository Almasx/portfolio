import React, { useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CHAR_WIDTH, TAG_PADDING } from "./const";
import {
  useMousePosition,
  useTagExtraction,
  useTagPosition,
  type MousePosition,
} from "./hooks";

import {
  tagVariants,
  tagContentVariants,
  scaleTransition,
  opacityTransition,
  createTagContentTransition,
  generateRandomMotion,
} from "./animations";

export const Cursor: React.FC = () => {
  const mousePosition = useMousePosition();
  const tags = useTagExtraction();

  return (
    <AnimatePresence>
      {tags.map((tag, index) => (
        <FloatingTag
          key={tag.id}
          text={tag.text}
          index={index}
          total={tags.length}
          mousePosition={mousePosition}
        />
      ))}
    </AnimatePresence>
  );
};

interface FloatingTagProps {
  text: string;
  index: number;
  total: number;
  mousePosition: MousePosition;
}

const FloatingTag: React.FC<FloatingTagProps> = (props) => {
  const tagWidth = useMemo(
    () => props.text.length * CHAR_WIDTH + TAG_PADDING,
    [props.text]
  );
  const { smoothX, smoothY } = useTagPosition({ ...props, tagWidth });

  const randomMotion = useMemo(() => generateRandomMotion(2), []);

  return (
    <motion.div
      className="fixed pointer-events-none"
      transition={{
        scale: scaleTransition,
        opacity: opacityTransition,
      }}
      style={{ x: smoothX, y: smoothY }}
      variants={tagVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <motion.div
        className="px-3 py-1.5 rounded-full text-sm bg-neutral-50/80 text-neutral-800 backdrop-blur-md  "
        variants={tagContentVariants}
        animate={{ ...tagContentVariants.animate, ...randomMotion }}
        transition={createTagContentTransition(props.index)}
      >
        {props.text}
      </motion.div>
    </motion.div>
  );
};
