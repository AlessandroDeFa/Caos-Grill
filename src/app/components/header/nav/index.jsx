import styles from "./style.module.css";
import Body from "./Body";
import ImageNav from "./Image";
import { motion } from "framer-motion";
import { height } from "../anim";
import { useState } from "react";
import Footer from "./Footer";

const links = [
  {
    title: "Home",
    href: "/",
    srcImg: "img-storiasec.jpeg",
  },
  {
    title: "Storia",
    href: "/storia",
    srcImg: "storia-header.jpeg",
  },
  {
    title: "Specialità",
    href: "/specialita",
    srcImg: "specialita-header.jpg",
  },
  {
    title: "Contatti",
    href: "/contatti",
    srcImg: "img-caosgrill2.jpeg",
  },
];

export default function Nav() {
  const [selectedLink, setSelectedLink] = useState({
    isHover: false,
    index: 0,
  });

  return (
    <motion.nav
      variants={height}
      initial="initial"
      animate="open"
      exit="closed"
      className={styles.nav}
    >
      <div className={styles.containerNav}>
        <div className={styles.wrapper}>
          <Body
            links={links}
            className={styles.body}
            selectedLink={selectedLink}
            setSelectedLink={setSelectedLink}
          />
          <Footer />
        </div>
        <ImageNav
          src={links[selectedLink.index].srcImg}
          isHover={selectedLink.isHover}
        />
      </div>
    </motion.nav>
  );
}
