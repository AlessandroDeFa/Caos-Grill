import ContactInfo from "../components/contactInfo";
import HeroComponent from "../components/heroComponent";

export default function Contact() {
  const title = "GODITI UN VIAGGIO CULINARIO";
  const subtitle = "CONTATTI";
  const src = "/images/img-contatti.webp";
  return (
    <main>
      <HeroComponent title={title} subtitle={subtitle} src={src} />
      <ContactInfo />
    </main>
  );
}
