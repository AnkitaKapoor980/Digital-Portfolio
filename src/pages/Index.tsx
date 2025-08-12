import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import AIChat from "@/components/AIChat";
import CursorRipple from "@/components/CursorRipple";
import WaterBackground from "@/components/WaterBackground";

const Index = () => {
  return (
    <div className="min-h-screen">
      <WaterBackground />
      <CursorRipple />
      <Navigation />
      <main>
        <section id="home">
          <Hero />
        </section>
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <AIChat />
    </div>
  );
};

export default Index;
