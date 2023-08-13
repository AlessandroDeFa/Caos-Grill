import Image from "next/image";
import styles from "./style.module.css";
import { motion } from "framer-motion";
import { opacity } from "../../anim";
export default function ImageNav({ src, isHover }) {
  return (
    <motion.div
      variants={opacity}
      initial="initial"
      animate={`${isHover ? "open" : "closed"}`}
      className={styles.imageContainer}
    >
      <Image fill={true} alt="image" src={`/images/${src}`} />
    </motion.div>
  );
}
