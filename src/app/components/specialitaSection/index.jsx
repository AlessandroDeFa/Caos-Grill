"use client";
import Image from "next/image";
import styles from "./style.module.css";
import Link from "next/link";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";
import { clipPath, slideUp, slideUpText } from "@/app/utils/anim";

export default function SpecialitaSection() {
  const text =
    "Piaceri gastronomici, vini dal carattere unico e un'atmosfera accogliente donano gioia a tutti. Ottenere questa fusione richiede passione, abilità e dedizione. Da Caos Grill, ci dedichiamo a offrire sempre l'eccellenza ai nostri ospiti, donando un'esperienza culinaria esclusiva.";

  const textInView = useRef(null);
  const textIsInView = useInView(textInView);

  const imagesInView = useRef(null);
  const imagesIsInView = useInView(imagesInView);

  const getWords = (phrase) => {
    let words = [];
    phrase.split(" ").map((word, index) => {
      words.push(
        <span key={index} className={styles.mask}>
          <motion.span
            custom={index}
            variants={slideUpText}
            initial="initial"
            animate={textIsInView ? "open" : "closed"}
            key={index}
          >
            {word}
          </motion.span>
        </span>
      );
    });

    return words;
  };

  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 150]);

  return (
    <div className={styles.container}>
      <div className={styles.title} ref={textInView}>
        <h2>{getWords(text)}</h2>
      </div>
      <div className={styles.wrapperTop}>
        <div className={styles.wrapperImages}>
          <motion.div
            style={{
              y: y1,
            }}
            className={styles.imgLeft}
          >
            <Image
              fill={true}
              alt="image"
              src={"/images/img-specialita4.jpeg"}
            />
          </motion.div>
          <motion.div
            style={{
              y: y2,
            }}
            className={styles.imgRight}
          >
            <Image
              fill={true}
              alt="image"
              src={"/images/img-specialita5.jpeg"}
            />
          </motion.div>
        </div>
        <div className={styles.text}>
          <p>
            Dalla scelta accurata di carni provenienti da razze nazionali
            certificate I.G.P., fino a oltre 60 varietà di pizza con impasto a
            lievitazione lenta, che spazia da 7 a 20 giorni di cura, ottenendo
            così pizze croccanti e altamente digeribili. Ma non è tutto: la
            nostra offerta si estende con una varietà di primi e secondi piatti
            prelibati, specialità dalla griglia, dolci artigianali e una carta
            dei vini ben fornita.
          </p>
        </div>
      </div>
      <div ref={imagesInView} className={styles.wrapperMiddle}>
        <motion.div
          style={{
            y: y2,
          }}
          custom={0.2}
          variants={clipPath}
          animate={imagesIsInView ? "enter" : "exit"}
          className={styles.middleLeftImg}
        >
          <Image fill={true} alt="image" src={"/images/img-specialita3.jpeg"} />
        </motion.div>
        <motion.div
          custom={0.4}
          variants={clipPath}
          animate={imagesIsInView ? "enter" : "exit"}
          style={{
            y: y1,
          }}
          className={styles.middleRightImg}
        >
          <Image fill={true} alt="image" src={"/images/img-specialita2.jpg"} />
        </motion.div>
      </div>
      <div>
        <div className={styles.textBottom}>
          <p>
            Presso di noi, ogni dettaglio culinario è parte di
            un&apos;esperienza completa.
          </p>
        </div>
        <div className={styles.containerBtn}>
          <Link href={"/contatti"}>VIENICI A TROVARE!</Link>
        </div>
      </div>
    </div>
  );
}
