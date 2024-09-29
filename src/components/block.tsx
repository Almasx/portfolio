import clsx from "clsx";
import { useState } from "react";

interface BlockProps extends React.HTMLAttributes<HTMLDivElement> {
  slug: string;
  title: string;
  size?: "md" | "sm";
}

export const Block: React.FC<BlockProps> = ({
  className,
  children,
  slug,
  size = "md",
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={`/projects/${slug}`}
      className={clsx(
        "block col-span-1",
        size === "md" ? "md:col-span-3" : "md:col-span-2"
      )}
    >
      <div
        className={clsx(
          "bg-neutral-50 relative rounded-3xl overflow-hidden md:min-h-[512px]",
          "duration-300 ease-in-out hover:scale-[1.01] md:col-span-3 aspect-square",
          className
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {children}
      </div>
    </a>
  );
};
