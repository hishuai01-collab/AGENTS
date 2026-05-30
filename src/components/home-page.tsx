import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { AboutSection } from "@/components/sections/about-section";
import { ContactSection } from "@/components/sections/contact-section";
import { ConversionSection } from "@/components/sections/conversion-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { ServicesSection } from "@/components/sections/services-section";

export function HomePage() {
  return (
    <div className="relative min-h-screen bg-white text-zinc-950">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,#f4f4f5_1px,transparent_1px),linear-gradient(to_bottom,#f4f4f5_1px,transparent_1px)] bg-[size:56px_56px] opacity-40" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_4%,#f4f4f5,transparent_36%),radial-gradient(circle_at_83%_10%,#f8fafc,transparent_33%)]" />
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
