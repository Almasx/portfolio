import type { HTMLAttributes } from "react";

interface LinkProps extends HTMLAttributes<HTMLAnchorElement> {
  href: string;
}

export const Link: React.FC<LinkProps> = ({ href, children }) => {
  return (
    <span className="font-mono text-neutral-500 group">
      <span className="group-hover:inline-block group-hover:pr-0.5 hidden ">
        {"→"}
      </span>
      <a
        href={href}
        target="_blank"
        className=" before:content-['['] whitespace-nowrap before:mr-1 after:content-[']'] after:ml-1 group-hover:text-[#F66E25] duration-300"
      >
        {children}
      </a>
    </span>
  );
};
