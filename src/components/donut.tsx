import clsx from "clsx";
import { useEffect, useRef } from "react";

export const Donut: React.FC<{ className?: string }> = ({ className }) => {
  const preRef = useRef<HTMLPreElement>(null);

  useEffect(() => {
    let animationFrameId: number;
    let A = 1,
      B = 1;

    const asciiframe = () => {
      const b = [];
      const z = [];
      A += 0.07 * 0.5; // Slow down rotation speed
      B += 0.03 * 0.5; // Slow down rotation speed
      const cA = Math.cos(A),
        sA = Math.sin(A),
        cB = Math.cos(B),
        sB = Math.sin(B);

      for (let k = 0; k < 1760; k++) {
        b[k] = k % 80 === 79 ? "\n" : " ";
        z[k] = 0;
      }

      for (let j = 0; j < 6.28; j += 0.07) {
        const ct = Math.cos(j),
          st = Math.sin(j);
        for (let i = 0; i < 6.28; i += 0.02) {
          const sp = Math.sin(i),
            cp = Math.cos(i),
            h = ct + 2,
            D = 1 / (sp * h * sA + st * cA + 5),
            t = sp * h * cA - st * sA;

          const x = 0 | (40 + 30 * D * (cp * h * cB - t * sB)),
            y = 0 | (12 + 15 * D * (cp * h * sB + t * cB)),
            o = x + 80 * y,
            N =
              0 |
              (8 *
                ((st * sA - sp * ct * cA) * cB -
                  sp * ct * sA -
                  st * cA -
                  cp * ct * sB));

          if (y < 22 && y >= 0 && x >= 0 && x < 79 && D > z[o]) {
            z[o] = D;
            b[o] = ".,-~:;=!*#$@"[N > 0 ? N : 0];
          }
        }
      }

      if (preRef.current) {
        preRef.current.innerHTML = b.join("");
      }
      // Add a delay before the next frame
      animationFrameId = window.setTimeout(() => {
        requestAnimationFrame(asciiframe);
      }, 50); // 50ms delay between frames
    };

    asciiframe();

    return () => {
      clearTimeout(animationFrameId);
    };
  }, []);

  return (
    <div className={clsx("flex items-center justify-center", className)}>
      <pre
        ref={preRef}
        className="font-mono text-xs text-white whitespace-pre"
      ></pre>
    </div>
  );
};
