import Image from "next/image";
import styles from "./style.module.css";

export default function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.footer}>
        <div className={styles.logoFooter}>
          <Image src={"/images/logocaos.svg"} fill={true} alt="image" />
        </div>
        <div className={styles.separator}></div>
        <div className={styles.infoFooter}>
          <p>Via Giacomo Matteotti, 8</p>
          <p>20813 Bovisio Masciago MB</p>
          <p>
            Aperi dal lunedì al sabato: dalle 12:00 alle 14:00 e dalle 19:00
            alle 23:00
          </p>
          <p>Domenica apertura serale dalle 19:00 alle 23:00</p>
          <p className={styles.facebookLink}>
            Seguici su Facebook{" "}
            <span className={styles.svg}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M22.06,11.987a10.061,10.061,0,1,0-11.633,9.939V14.9H7.872V11.987h2.555V9.771a3.551,3.551,0,0,1,3.8-3.915,15.427,15.427,0,0,1,2.252.2V8.529H15.211a1.454,1.454,0,0,0-1.64,1.571v1.887h2.791L15.915,14.9H13.571v7.03A10.064,10.064,0,0,0,22.06,11.987Z"></path>
              </svg>
            </span>
          </p>
        </div>
        <div className={styles.separator}></div>
        <div className={styles.containerCopy}>
          <div className={styles.copyright}>All rights reserved © 2023</div>
          <div className={styles.personalSign}>Coded by Alessandro</div>
        </div>
      </div>
    </footer>
  );
}
