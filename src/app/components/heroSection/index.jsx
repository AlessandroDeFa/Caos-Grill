import styles from "./style.module.css";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import { opacityIndicator, translateHero } from "../preloader/anim";

export default function Hero() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);

  return (
    <>
      <div ref={container} className={styles.wrapper}>
        <motion.div
          style={{
            y: y,
          }}
          className={styles.backgroundImg}
        ></motion.div>
        <motion.div
          variants={translateHero}
          initial="initial"
          animate="enter"
          className={styles.heroText}
        >
          <h1>CAO&apos;S GRILL</h1>
          <h2>PIZZERIA E GRIGLIERIA</h2>
          <h2>RISTORATORI DAL 1982</h2>
        </motion.div>
      </div>

      <motion.div
        variants={opacityIndicator}
        initial="initial"
        animate="enter"
        className={styles.scrollText}
      >
        Scroll down
      </motion.div>
      <motion.div
        variants={opacityIndicator}
        initial="initial"
        animate="enter"
        className={styles.scrollIndicator}
      ></motion.div>
    </>
  );
}
