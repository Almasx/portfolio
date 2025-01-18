import clsx from "clsx";
import { useState } from "react";
  import { Header } from "./header";
  import { motion } from "framer-motion";

interface BlockProps extends React.HTMLAttributes<HTMLDivElement> {
  slug: string;
  hook: string;
  tags: string[];
  size?: "md" | "sm";
  active?: boolean;
  color?: string;
}

export const Block: React.FC<BlockProps> = ({
  className,
  children,
  slug,
  tags,
  hook,
  size = "md",
  active = true,
  color,
}) => {
  const [hover, setHover] = useState(false);

  if (!active) return <></>;

  return (
    <a
      href={`/projects/${slug}`}
      id={`${slug}#${tags.join("#")}`}
      className={clsx(
        "block col-span-1 interactable relative",
        size === "md" ? "md:col-span-3" : "md:col-span-2"
      )}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <motion.div
    
  
        className={clsx(
          "bg-white relative rounded-2xl overflow-hidden",
          "duration-200 ease-in-out aspect-square",
          className
        )}
      >
        {children}
      </motion.div>
      <Header color={color} active={hover} hook={hook} letter={slug} />
    </a>
  );
};
