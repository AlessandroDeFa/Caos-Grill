"use client";
import Image from "next/image";
import styles from "./style.module.css";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ContactInfo() {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <div ref={container} className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.flex}>
          <div className={styles.singleInfo}>
            <h3>TELEFONO</h3>
            <p>0362592998</p>
          </div>
          <div className={styles.singleInfo}>
            <h3>E-MAIL</h3>
            <p>info@caosgrill.it</p>
          </div>
          <div className={styles.singleInfo}>
            <h3>INDIRIZZO</h3>
            <p>Via Giacomo Matteotti, 8</p>
            <p>20813 Bovisio Masciago MB</p>
          </div>
          <div className={styles.singleInfo}>
            <h3>ORARI DI APERTURA</h3>
            <p>
              <span>Lunedì - Sabato:</span> 12:00 - 14:00, 19:00 - 23:00
            </p>
            <p>
              <span>Domenica</span> 19:00 - 23:00
            </p>
          </div>
        </div>
        <motion.div
          style={{
            y: y,
          }}
          className={styles.imgContact}
        >
          <Image fill={true} alt="image" src={"/images/img-contatti1.webp"} />
        </motion.div>
      </div>
      <div className={styles.wrapper}>
        <motion.div
          style={{
            y: y,
          }}
          className={styles.imgContact2}
        >
          <Image fill={true} alt="image" src={"/images/img-contatti2.webp"} />
        </motion.div>

        <div className={styles.wrapperBottomText}>
          <h2>ASPETTIAMO CON ANSIA LA TUA VISITA!</h2>
        </div>
      </div>
    </div>
  );
}
