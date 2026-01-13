import { useState, useEffect } from "react";

function useCustomPointer(content) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    document.body.style.cursor = "none";

    const handleMouseMove = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.style.cursor = "default";
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        left: position.x,
        top: position.y,
        transform: "translate(-50%, -50%)",
        pointerEvents: "none",
        fontSize: "24px",
        zIndex: 9999,
      }}
    >
      {content}
    </div>
  );
}

export default useCustomPointer;