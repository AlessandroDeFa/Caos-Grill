"use client";
import styles from "./style.module.css";
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { translateGlobalHero } from "../../utils/anim";

export default function HeroComponent({ title, subtitle, src }) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);

  return (
    <div ref={container} className={styles.wrapper}>
      <motion.div
        style={{
          y: y,
          backgroundImage: `url(${src})`,
        }}
        id="bgImg"
        className={styles.backgroundImg}
      ></motion.div>
      <motion.div
        variants={translateGlobalHero}
        initial="initial"
        animate="enter"
        className={styles.heroText}
      >
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </motion.div>
    </div>
  );
}