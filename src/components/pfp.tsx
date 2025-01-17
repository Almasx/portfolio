import { useState, useRef } from "react";
import { Progress } from "./progress";

export const ProfilePicture = () => {
  const [progress, setProgress] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.play();
      videoElement.addEventListener("timeupdate", () => {
        const progress =
          (videoElement.currentTime / videoElement.duration) * 100;
        setProgress(progress);
      });
    }
  };

  const handleMouseLeave = () => {
    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.pause();
      setProgress(0);
    }
  };

  return (
    <div className="relative mb-8 duration-200 size-16 group hover:size-32">
      <div className="absolute -top-4 -right-4 rotate-3 font-mono text-neutral-600 pointer-events-none ">
        ?
      </div>
      <video
        ref={videoRef}
        src="/pfp.mp4"
        className="size-16 rounded-xl group-hover:scale-[2] transform origin-top-left group-hover:mb-20 duration-200 ease-out cursor-help"
        muted
        loop
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-11 group-hover:opacity-100 opacity-0 backdrop-blur h-1.5 rounded-full">
        <Progress value={progress} />
      </div>
    </div>
  );
};
