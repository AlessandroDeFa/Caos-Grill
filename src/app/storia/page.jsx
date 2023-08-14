import HeroComponent from "../components/heroComponent";
import StoriaSection from "../components/storiaSection";

export default function Storia() {
  const title = "LA TRADIZIONE SI UNISCE ALLA CREATIVITÀ";
  const subtitle = "LA NOSTRA STORIA";
  const src = "/images/img-storia.webp";
  return (
    <main>
      <HeroComponent title={title} subtitle={subtitle} src={src} />
      <StoriaSection />
    </main>
  );
}
