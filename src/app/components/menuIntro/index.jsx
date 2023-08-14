"use client";
import Image from "next/image";
import styles from "./style.module.css";
import { useTransform, useScroll, motion } from "framer-motion";
import { useRef } from "react";
import { setCursorHover } from "@/redux/features/cursor-slice";
import { useDispatch } from "react-redux";
import Link from "next/link";

export default function MenuIntro() {
  const dispatch = useDispatch();

  const isHover = () => {
    dispatch(setCursorHover());
  };

  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 325]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <div ref={container} className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.menuTitle}>I NOSTRI MENU</div>
        <div className={styles.wrapperMenu}>
          <div className={styles.containerImages}>
            <div className={styles.cardMenu}>
              <motion.div
                style={{
                  y: y1,
                }}
                className={styles.imgMenu}
                onMouseEnter={() => dispatch(setCursorHover(true))}
                onMouseLeave={() => dispatch(setCursorHover(false))}
                onClick={() => dispatch(setCursorHover(false))}
              >
                <Link href={"/specialita"}>
                  {" "}
                  <Image
                    fill={true}
                    src={"/images/imagemenu1.webp"}
                    alt="image"
                  />
                </Link>
              </motion.div>
              <div className={styles.cardTitle}>GRIGLIERIA</div>
              <p className={styles.menuText}>
                Carni di alta qualità da rinomati produttori, tra cui
                Fiorentina, scottona, costate, filetti e molto altro. Scegli la
                tua preferita!
              </p>
            </div>
            <div className={styles.cardMenu2}>
              <motion.div
                style={{
                  y: y2,
                }}
                className={styles.imgMenu2}
                onMouseEnter={() => dispatch(setCursorHover(true))}
                onMouseLeave={() => dispatch(setCursorHover(false))}
                onClick={() => dispatch(setCursorHover(false))}
              >
                <Link href={"/specialita"}>
                  <Image
                    fill={true}
                    src={"/images/imagemenu2.webp"}
                    alt="image"
                  />
                </Link>
              </motion.div>
              <div className={styles.cardTitle}>PRIMI E SECONDI</div>
              <p className={styles.menuText}>
                Carni di alta qualità da rinomati produttori, tra cui
                Fiorentina, scottona, costate, filetti e molto altro. Scegli la
                tua preferita!
              </p>
            </div>
          </div>
          <div className={styles.cardMenu3}>
            <motion.div
              style={{
                y: y3,
              }}
              className={styles.imgMenu}
              onMouseEnter={() => dispatch(setCursorHover(true))}
              onMouseLeave={() => dispatch(setCursorHover(false))}
              onClick={() => dispatch(setCursorHover(false))}
            >
              <Link href={"/specialita"}>
                {" "}
                <Image fill src={"/images/imagemenu3.webp"} alt="image" />
              </Link>
            </motion.div>
            <div className={styles.textCenter}>
              <div className={styles.cardTitle}>PIZZA</div>
              <p className={styles.menuText}>
                Pizza, pizza e ancora pizza! Oltre 60 varianti, servite al
                tagliere e realizzate con ingredienti naturali ed altamente
                digeribili.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
