import clsx from "clsx";
import { Link } from "~/components/link";

export const Title: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  children,
  ...props
}) => {
  return (
    <h2
      className={clsx(
        "text-4xl md:text-8xl font-medium md:leading-[90px] mb-6 tracking-tighter text-balance md:mb-auto text-neutral-500",
        className
      )}
      {...props}
    >
      {children}
    </h2>
  );
};

interface TextBlockProps extends React.HTMLAttributes<HTMLDivElement> {}

export const TextBlock: React.FC<TextBlockProps> = ({
  children,
  className,
}) => {
  return (
    <p
      className={clsx(
        "md:w-96 font-mono mb-2 text-inherit relative z-10",
        className
      )}
    >
      {children}
    </p>
  );
};

interface TagProps extends React.HTMLAttributes<HTMLDivElement> {
  tags: string[];
  highlight?: string;
}

export const Tags: React.FC<TagProps> = ({
  className,
  tags,
  highlight = "hover:text-[#F66E25]",
}) => {
  return (
    <div
      className={clsx(
        "flex flex-wrap gap-3 gap-y-0 md:w-96 text-inherit mb-auto md:mb-0 relative z-10",
        className
      )}
    >
      {tags.map((tag) => (
        <p
          className={clsx(
            "before:content-['['] whitespace-nowrap before:mr-1 after:content-[']'] after:ml-1 ",
            highlight
          )}
        >
          {tag}
        </p>
      ))}
    </div>
  );
};
