import HeroComponent from "../components/heroComponent";
import SpecialitaSection from "../components/specialitaSection";
import styles from "./page.module.css";

export default function Specialita() {
  const title = "UNA SELEZIONE QUALITATIVA";
  const subtitle = "LA NOSTRA OFFERTA";
  const src = "/images/img-specialita.jpg";

  return (
    <main>
      <HeroComponent title={title} subtitle={subtitle} src={src} />
      <SpecialitaSection />
    </main>
  );
}
