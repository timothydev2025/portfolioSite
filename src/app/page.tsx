import HeroSection from "@/components/home/hero-section";
import AboutSection from "@/components/home/about-section";
import { AuroraBackground } from "@/components/ui/aurora-background";
import MarqueeSection from "@/components/home/marqee-section";
import SkillsSection from "@/components/home/skills-section";
// import ProjectsSection from "@/components/home/projects-section"
// import ContactSection from "@/components/home/contact-section"

export default function HomePage() {
  return (
    <main>
      <AuroraBackground>
        <HeroSection id="hero" />
      </AuroraBackground>
      <MarqueeSection id="marquee" />
      <AboutSection id="about" />


      <SkillsSection id="skills" />
     {/* <ProjectsSection id="projects" />
      <ContactSection id="contact" /> */}
    </main>
  );
}
