import { translate } from "../../anim";
import styles from "./style.module.css";
import { motion } from "framer-motion";
export default function Footer() {
  return (
    <div className={styles.footerContainer}>
      <motion.div
        variants={translate}
        custom={[0.3, 0]}
        initial="initial"
        animate="enter"
        exit="exit"
      >
        <span className={styles.title}>SOCIAL:</span>
        SEGUICI SU FACEBOOK
      </motion.div>
      <motion.div
        variants={translate}
        custom={[0.3, 0]}
        initial="initial"
        animate="enter"
        exit="exit"
      >
        <span className={styles.title}>TEL:</span>
        0362592998
      </motion.div>
    </div>
  );
}
