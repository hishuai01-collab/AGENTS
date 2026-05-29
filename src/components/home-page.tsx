import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { ServicesSection } from "@/components/sections/services-section";
import { AboutSection } from "@/components/sections/about-section";
import { ContactSection } from "@/components/sections/contact-section";
import { ConversionSection } from "@/components/sections/conversion-section";

export function HomePage() {
  return (
    <div className="relative min-h-screen bg-white text-zinc-950">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_10%,_#f4f4f5,_transparent_38%),radial-gradient(circle_at_80%_2%,_#f8fafc,_transparent_34%)]" />
      <Header />
      <main>
        <HeroSection />
        <ProjectsSection />
        <ServicesSection />
        <AboutSection />
        <ContactSection />
        <ConversionSection />
      </main>
      <Footer />
    </div>
  );
}
