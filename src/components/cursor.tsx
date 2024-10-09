// import React, { useEffect, useRef, useState } from "react";
// import { motion } from "framer-motion";

// interface InteractiveCursorProps {
//   className?: string;
//   initialScale?: number;
//   activeScale?: number;
//   inactiveOpacity?: number;
//   activeOpacity?: number;
//   smoothAnimation?: boolean;
//   transitionDuration?: number;
// }

// export const Cursor: React.FC<InteractiveCursorProps> = ({
//   className = "",
//   initialScale = 0.1,
//   activeScale = 1,
//   inactiveOpacity = 0,
//   activeOpacity = 1,
//   smoothAnimation = false,
//   transitionDuration = 0.1,
// }) => {
//   const cursorRef = useRef<HTMLDivElement>(null);
//   const [cursorStyle, setCursorStyle] = useState({
//     opacity: inactiveOpacity,
//     scale: initialScale,
//     x: -100,
//     y: -100,
//   });
//   const [cursorText, setCursorText] = useState<string>("");

//   const processId = (url: string): string => {
//     const parts = url.split("#");
//     const lastPart = parts[parts.length - 1];
//     const words = lastPart.split("-");
//     return words
//       .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
//       .join(" ");
//   };

//   useEffect(() => {
//     const handleMouseMove = (e: MouseEvent) => {
//       const interactable = (e.target as Element).closest(
//         ".interactable"
//       ) as HTMLElement | null;
//       const interacting = interactable !== null;

//       if (!cursorRef.current) return;

//       const x = e.clientX - cursorRef.current.offsetWidth / 2;
//       const y = e.clientY - cursorRef.current.offsetHeight / 2;

//       setCursorStyle({
//         opacity: interacting ? activeOpacity : inactiveOpacity,
//         scale: interacting ? activeScale : initialScale,
//         x,
//         y,
//       });

//       if (interacting && interactable.id) {
//         const processedText = processId(interactable.id);
//         setCursorText(processedText);
//       } else {
//         setCursorText("");
//       }
//     };

//     window.addEventListener("mousemove", handleMouseMove);
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, [initialScale, activeScale, inactiveOpacity, activeOpacity]);

//   const motionProps = smoothAnimation
//     ? {
//         animate: cursorStyle,
//         transition: { duration: transitionDuration },
//       }
//     : {
//         style: cursorStyle,
//       };

//   return (
//     <motion.div
//       ref={cursorRef}
//       className={`fixed left-0 top-0 bg-white text-black rounded-full pointer-events-none flex items-center justify-center z-[10000] px-4 py-2 text-sm font-medium ${className}`}
//       initial={{ opacity: inactiveOpacity, scale: initialScale }}
//       {...motionProps}
//     >
//       {cursorText}
//     </motion.div>
//   );
// };
