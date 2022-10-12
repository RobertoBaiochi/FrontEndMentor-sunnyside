import { Header } from "./Header";
import "./Hero.scss";
import { HeroContent } from "./HeroContent";

export const Hero = () => {
  return (
    <section id="hero">
      <Header />
      <HeroContent />
    </section>
  );
};
