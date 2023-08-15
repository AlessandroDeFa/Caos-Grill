"use client";
import styles from "./style.module.css";
import useMousePosition from "@/app/utils/useMousePosition";
import { motion } from "framer-motion";
import Image from "next/image";
import { useSelector } from "react-redux";

export default function Cursor() {
  const isHover = useSelector((state) => state.cursorReducer.value.isHover);

  const { x, y } = useMousePosition();
  const size = isHover ? 100 : 10;

  if (typeof window !== "undefined" && window.innerWidth > 1000) {
    return (
      <motion.div
        animate={{
          left: `${x - size / 2}px`,
          top: `${y - size / 2}px`,
          width: `${size}px`,
          height: `${size}px`,
        }}
        transition={{ type: "tween", ease: "circOut" }}
        className={styles.cursor}
      >
        {isHover && <span>VIEW</span>}
        {isHover && (
          <div className={styles.svg}>
            <Image alt="icon" src={"/images/arrow-right.svg"} fill={true} />
          </div>
        )}
      </motion.div>
    );
  }
}
