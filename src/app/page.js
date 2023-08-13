"use client";
import styles from "./page.module.css";
import Hero from "./components/heroSection";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Lenis from "@studio-freight/lenis";
import Preloader from "./components/preloader";
import Introduction from "./components/introduction";
import MenuIntro from "./components/menuIntro";
export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    setTimeout(() => {
      setIsLoading(false);
      window.scrollTo(0, 0);
    }, 2000);
  }, []);

  return (
    <main className={styles.main}>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>

      <Hero />
      <Introduction />
      <MenuIntro />
    </main>
  );
}
