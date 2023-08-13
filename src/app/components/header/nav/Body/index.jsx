import Link from "next/link";
import styles from "./style.module.css";
import { motion } from "framer-motion";
import { blur, translate } from "../../anim";

export default function Body({ links, selectedLink, setSelectedLink }) {
  const getChar = (word) => {
    let charArray = [];
    word.split("").forEach((char, index) => {
      charArray.push(
        <motion.span
          variants={translate}
          custom={[index * 0.05, (word.length - index) * 0.01]}
          initial="initial"
          animate="enter"
          exit="exit"
          key={`char_${index}`}
        >
          {char}
        </motion.span>
      );
    });
    return charArray;
  };

  return (
    <div className={styles.body}>
      {links.map((link, index) => {
        return (
          <Link key={`el_${index}`} href={link.href}>
            <motion.p
              onMouseEnter={() =>
                setSelectedLink({ isHover: true, index: index })
              }
              onMouseLeave={() =>
                setSelectedLink({ isHover: false, index: index })
              }
              variants={blur}
              animate={`${
                selectedLink.isHover && index !== selectedLink.index
                  ? "open"
                  : "closed"
              }`}
            >
              {getChar(link.title)}
            </motion.p>
          </Link>
        );
      })}
    </div>
  );
}
