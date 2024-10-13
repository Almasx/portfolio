import { useMobile } from "~/hooks/use-mobile";

export const About = () => {
  const isMobile = useMobile();

  const content = isMobile ? "below ↓" : "on the right →";

  return (
    <div className="p-6 bg-white rounded-xl">
      <p className="font-mono leading-5 text-neutral-400">
        Currently{" "}
        <a
          href="https://minerva.edu"
          className="underline interactable"
          id="minerva#Most Innovative#7 rotation cities#Fun"
        >
          Minerva
        </a>{" "}
        student based in SF. Previously at{" "}
        <a
          href="https://yandex.ru/jobs/services/lavka"
          id="yandex-lavka#E Grocery#Lavka"
          className="underline interactable"
        >
          Yandex
        </a>
        .<br />
        <br />
        See projects {content}
      </p>
    </div>
  );
};
