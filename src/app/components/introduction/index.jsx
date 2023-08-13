import Link from "next/link";
import styles from "./style.module.css";
import Image from "next/image";
import { useTransform, useScroll, motion, useInView } from "framer-motion";
import { useRef } from "react";
import { opacityIntro, slideUp } from "./anim";

export default function Introduction() {
  const topPhrase =
    "Un locale storico, con 160 posti a sedere, ed un ambiente accogliente e giovanile, dove poter trascorrere serate e ricorrenze in allegria.";

  const middlePhrase =
    "Qualità dei prodotti, professionalità e cortesia nel servizio, selezionata carta dei vini a livello nazionale, ottimo rapporto qualità prezzo: ecco gli ingredienti che rendono genuino e speciale il nostro locale.";

  const bottomPhrase =
    "Cao's Grill: un ambiente familiare, dove poter mangiar bene e al giusto prezzo.Ecco ciò che trova chi continua a sceglierci da tanti anni.";
  const container = useRef(null);
  const wrapperInView = useRef(null);
  const isInView = useInView(wrapperInView);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 125]);

  const getWords = (phrase) => {
    let words = [];
    phrase.split(" ").map((word, index) => {
      words.push(
        <span key={index} className={styles.mask}>
          <motion.span
            custom={index}
            variants={slideUp}
            initial="initial"
            animate={isInView ? "open" : "closed"}
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
    <div ref={container} className={styles.mw}>
      <div className={styles.wrapper}>
        <div ref={wrapperInView} className={styles.introText}>
          <p className={styles.introTitle}>{getWords("CHI SIAMO", isInView)}</p>
          <p>{getWords(topPhrase, isInView)}</p>
          <p>{getWords(middlePhrase, isInView)}</p>
          <p>{getWords(bottomPhrase, isInView)}</p>
        </div>
        <div className={styles.container}>
          <motion.div
            variants={opacityIntro}
            initial="initial"
            animate={isInView ? "open" : "closed"}
            className={styles.containerBtn}
          >
            <Link href={"/contatti"}>VIENICI A TROVARE!</Link>
          </motion.div>
          <motion.div
            style={{
              y: y,
            }}
            className={styles.imgIntro}
          >
            <Image src={"/images/img-intro.jpeg"} fill={true} alt="image" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
