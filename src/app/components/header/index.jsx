"use client";
import styles from "./style.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { background, opacity } from "./anim";
import Nav from "./nav";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isActive, setActive] = useState(false);

  const pathName = usePathname();

  useEffect(() => {
    setActive(false);
  }, [pathName]);

  return (
    <header className={styles.headerContainer}>
      <div className={styles.header}>
        <div className={styles.logolabel}>CAO&apos;S GRILL</div>
        <div
          onClick={() => setActive(!isActive)}
          className={styles.triggerwrapper}
        >
          <div
            className={`${styles.triggermenu} ${
              isActive ? styles.triggerActive : ""
            }`}
          ></div>
          <div className={styles.menulabel}>
            <motion.p
              variants={opacity}
              animate={!isActive ? "open" : "closed"}
            >
              MENU
            </motion.p>
            <motion.p
              variants={opacity}
              animate={isActive ? "open" : " closed"}
            >
              CLOSE
            </motion.p>
          </div>
        </div>
        <div className={styles.logocontainer}>
          <div className={styles.logo}>
            <Image src={"/images/logocaos.svg"} fill={true} alt="image" />
          </div>
        </div>
      </div>
      <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
      <motion.div
        variants={background}
        animate={`${isActive ? "open" : "closed"}`}
        className={styles.backgroundHeader}
      ></motion.div>
    </header>
  );
}
