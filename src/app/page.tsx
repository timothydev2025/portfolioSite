import HeroSection from "@/components/home/hero-section";
import AboutSection from "@/components/home/about-section";
import { AuroraBackground } from "@/components/ui/aurora-background";
import MarqueeSection from "@/components/home/marqee-section";
import SkillsSection from "@/components/home/skills-section";
import ExperienceSection from "@/components/home/experience-section";
import NewsletterSection from "@/components/home/newsletter-section";
import BackToTop from "@/components/shared/back-to-top";
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
      <ExperienceSection id="experience" />
      <NewsletterSection id="newsletter" />
      {/* <ProjectsSection id="projects" />
      <ContactSection id="contact" /> */}
      <BackToTop />
    </main>
  );
}
