import { useEffect, useState } from "react";

export default function useMousePosition() {
  const [mousePosition, setmousePosition] = useState({ x: 0, y: 0 });

  const updateMousePosition = (e) => {
    setmousePosition({ x: e.clientX, y: e.clientY });
    console.log("render");
  };

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return mousePosition;
}
