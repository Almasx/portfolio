import { useMobile } from "~/hooks/use-mobile";

export const About = () => {
  const isMobile = useMobile();

  const content = isMobile ? "below ↓" : "on the right →";

  return (
    <div className="p-6 bg-white rounded-xl tracking-tight">
      <p className="leading-5 text-neutral-500">
        Design Engineer at{" "}
        <a href="https://replit.com" target="_blank"
          className="text-neutral-600 hover:text-black duration-200">
          Replit
        </a>
        , based in SF. Previously Dex (YC W25),{" "}
        <a href="https://yandex.ru/jobs/services/lavka" target="_blank"
          className="text-neutral-600 hover:text-black duration-200">
          Yandex
        </a>
        .<br />
        <br />
        See projects {content}
      </p>
    </div>
  );
};
