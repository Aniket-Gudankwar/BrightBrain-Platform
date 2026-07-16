import { useEffect, useState } from "react";

import "./scroll-progress.css";

function ScrollProgress() {
  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.scrollY;

      const pageHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

      const progress =
        (scrollTop / pageHeight) * 100;

      setScrollWidth(progress);
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    handleScroll();

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  return (
    <div
      className="scroll-progress"
      style={{
        width: `${scrollWidth}%`,
      }}
    ></div>
  );
}

export default ScrollProgress;