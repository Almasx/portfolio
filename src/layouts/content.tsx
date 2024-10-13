import clsx from "clsx";

interface Title extends React.HTMLAttributes<HTMLDivElement> {
  href?: string;
}

export const Title: React.FC<Title> = ({
  className,
  children,
  href,
  ...props
}) => {
  return (
    <div className="flex flex-col gap-3 md:gap-5 grow md:mb-auto">
      <h2
        className={clsx(
          "text-4xl md:text-8xl font-medium md:leading-[90px] tracking-tighter text-balance 2xl:mr-96 text-neutral-500",
          className
        )}
        {...props}
      >
        {children}
      </h2>
      {href && (
        <a
          href={href}
          className="bg-neutral-50 rounded-full text-sm text-black hover:text-neutral-500 duration-200 items-center flex gap-2 border border-neutral-300 py-1.5 px-2.5 mr-auto mb-8"
        >
          Visit link <span className="font-mono h-4">↗</span>
        </a>
      )}
    </div>
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
  skills: string[];
  highlight?: string;
}

export const Skills: React.FC<TagProps> = ({
  className,
  skills,
  highlight = "hover:text-[#F66E25]",
}) => {
  return (
    <div
      className={clsx(
        "flex flex-wrap gap-3 gap-y-0 md:w-96 text-inherit mb-auto md:mb-0 relative z-10",
        className
      )}
    >
      {skills.map((tag) => (
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
