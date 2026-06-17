import { useEffect, useState } from "react";

export default function MouseGlow() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const move = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", move);

    return () =>
      window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="
      fixed
      w-96
      h-96
      rounded-full
      pointer-events-none
      blur-[120px]
      bg-blue-300/20
      z-0
      "
      style={{
        left: position.x - 180,
        top: position.y - 180,
      }}
    />
  );
}