import { useEffect, useRef } from "react";

const ClickAwayListener = ({ children, onClickAway }) => {
  const containerRef = useRef(null);

  const handleClick = (event) => {
    if (
      containerRef.current &&
      !containerRef.current.contains(event.target) &&
      typeof onClickAway === "function"
    ) {
      onClickAway(event);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  return <div ref={containerRef}>{children}</div>;
};

export default ClickAwayListener;
