import clsx from "clsx";

interface BlockProps extends React.HTMLAttributes<HTMLDivElement> {
  slug: string;
  tags: string[];
  size?: "md" | "sm";
}

export const Block: React.FC<BlockProps> = ({
  className,
  children,
  slug,
  tags,
  size = "md",
}) => {
  return (
    <a
      href={`/projects/${slug}`}
      id={`${slug}#${tags.join("#")}`}
      className={clsx(
        "block col-span-1 interactable",
        size === "md" ? "md:col-span-3" : "md:col-span-2"
      )}
    >
      <div
        className={clsx(
          "bg-neutral-50 relative rounded-2xl overflow-hidden 2xl:min-h-[512px]",
          "duration-300 ease-in-out md:col-span-3 aspect-square",
          className
        )}
      >
        {children}
      </div>
    </a>
  );
};
