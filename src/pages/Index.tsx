
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
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
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
