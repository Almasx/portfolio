import clsx from "clsx";
import { useState } from "react";
import { Header } from "./header";

interface BlockProps extends React.HTMLAttributes<HTMLDivElement> {
  slug: string;
  hook: string;
  tags: string[];
  size?: "md" | "sm";
  active?: boolean;
}

export const Block: React.FC<BlockProps> = ({
  className,
  children,
  slug,
  tags,
  hook,
  size = "md",
  active = true,
}) => {
  const [hover, setHover] = useState(false);

  if (!active) return <></>;

  return (
    <a
      href={`/projects/${slug}`}
      id={`${slug}#${tags.join("#")}`}
      className={clsx(
        "block col-span-1 interactable",
        size === "md" ? "md:col-span-3" : "md:col-span-2"
      )}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div
        className={clsx(
          "bg-neutral-50 relative rounded-2xl overflow-hidden 2xl:min-h-[512px]",
          "duration-300 ease-in-out md:col-span-3 aspect-square",
          className
        )}
      >
        {children}
        <Header active={hover} hook={hook} letter={slug} />
      </div>
    </a>
  );
};
