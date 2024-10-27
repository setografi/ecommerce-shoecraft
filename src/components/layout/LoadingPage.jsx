import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

function LoadingPage() {
  const progressRef = useRef(null);
  const percentageRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(containerRef.current, {
          opacity: 0,
          duration: 0.5,
          delay: 0.5,
        });
      },
    });

    tl.to(progressRef.current, {
      width: "100%",
      duration: 2,
      ease: "steps(12)",
    });

    tl.to(
      percentageRef.current,
      {
        innerHTML: "100%",
        duration: 2,
        snap: { innerHTML: 1 },
      },
      "<"
    );

    return () => tl.kill();
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-neutralBlack"
    >
      <div className="w-4/5 max-w-2xl">
        <h1 className="text-6xl md:text-8xl font-black text-neutralWhite mb-8 uppercase tracking-tighter transform -skew-x-12">
          SHOECRAFT
        </h1>

        <div className="relative h-16 border-4 border-accent p-2 bg-neutralBlack">
          <div ref={progressRef} className="h-full w-0 bg-accent" />
        </div>

        <div className="flex justify-between mt-4">
          <span className="text-neutralWhite font-bold text-xl">
            LOADING...
          </span>
          <span ref={percentageRef} className="text-accent font-bold text-xl">
            0%
          </span>
        </div>
      </div>
    </div>
  );
}

export default LoadingPage;
