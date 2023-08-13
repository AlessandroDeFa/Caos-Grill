import Image from "next/image";
import { preloader, translateWord } from "./anim";
import styles from "./style.module.css";
import { motion } from "framer-motion";

export default function Preloader() {
  const words = ["Esplora", "il", "sapore.", "Vivi", "l' emozione."];

  return (
    <motion.div
      variants={preloader}
      initial="initial"
      exit="exit"
      className={styles.preloader}
    >
      <div className={styles.preloaderText}>
        {words.map((word, index) => {
          return (
            <motion.div
              variants={translateWord}
              custom={[index * 0.05, (word.length - index) * 0.005]}
              initial="initial"
              animate="open"
              exit="closed"
              key={`wd_${index}`}
            >
              {word}
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
