"use client";
import Image from "next/image";
import styles from "./style.module.css";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";
import { clipPath, slideUp } from "@/app/utils/anim";

export default function StoriaSection() {
  const container = useRef(null);

  const titleInView = useRef(null);
  const titleIsInView = useInView(titleInView);
  const imagesInView = useRef(null);
  const imagesIsInView = useInView(imagesInView);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 125]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, 250]);

  const getWords = (phrase) => {
    let words = [];
    phrase.split(" ").map((word, index) => {
      words.push(
        <span key={index} className={styles.mask}>
          <motion.span
            custom={index}
            variants={slideUp}
            initial="initial"
            animate={titleIsInView ? "open" : "closed"}
            key={index}
          >
            {word}
          </motion.span>
        </span>
      );
    });

    return words;
  };

  return (
    <div className={styles.container}>
      <div ref={titleInView} className={styles.storiaTitle}>
        <h1>{getWords("DA 40 ANNI CON PASSIONE...")}</h1>
        <h1>{getWords("GIORNO DOPO GIORNO")}</h1>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.flex}>
          <motion.div
            style={{
              y: y1,
            }}
            className={styles.imgTop}
          >
            <Image fill={true} alt="image" src={"/images/img-storiasec.webp"} />
          </motion.div>
        </div>

        <div className={styles.wrapperStoriaText}>
          <h2>
            UN LUOGO CON UNA LUNGA STORIA E UN TEAM MOTIVATO PER GARANTIRE UN
            PRESENTE E UN FUTURO PIACEVOLI.
          </h2>
          <p>
            Il ristorante nasce nel 1982 dalla volontà di Onelia e Antonio di
            unire lavoro e famiglia, cuore e fatica, e di avviare
            un&apos;attività familiare. Oggi, ad oltre 35 anni di distanza,
            siamo noi figli a portare avanti la loro eredità: Maurizio, Denise e
            Mara con Paolo, entrato del tutto nello spirito e nell&apos;anima di
            questo locale.Nel rispetto di quanto avviato dai nostri genitori,
            continuiamo a lavorare con cura e professionalità, ma anche col
            sorriso e la gentilezza, che contraddistinguono il nostro servizio e
            rendono accogliente per tutti il nostro locale.
          </p>
        </div>
      </div>

      <div className={styles.wrapperBottom}>
        <div className={styles.storiaPh}>
          <h2>
            Un&apos;esplosione di sapori che ti faranno viaggiare con ogni
            morso.
          </h2>
        </div>
        <div ref={imagesInView} className={styles.containerImages}>
          <motion.div
            custom={0.2}
            variants={clipPath}
            animate={imagesIsInView ? "enter" : "exit"}
            style={{
              y: y2,
            }}
            className={styles.firstImg}
          >
            <Image
              fill={true}
              alt="image"
              src={"/images/img-storiasec2.webp"}
            />
          </motion.div>
          <motion.div
            custom={0.4}
            variants={clipPath}
            animate={imagesIsInView ? "enter" : "exit"}
            style={{
              y: y3,
            }}
            className={styles.secondImg}
          >
            <Image
              fill={true}
              alt="image"
              src={"/images/img-storiasec3.webp"}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
