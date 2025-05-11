import Navbar from '@/components/navbar';
import Hero from '@/components/hero';
import Skills from '@/components/skills';
import Experience from '@/components/experience';
import Education from '@/components/education';
import Projects from '@/components/projects';
import Contact from '@/components/contact';
import Blog from '@/components/blog';
import StarryBackground from '@/components/starry-background';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <StarryBackground />
      <div className="relative z-10">
        <Navbar />
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <section id="home" className="py-20">
            <Hero />
          </section>

          <section id="skills" className="py-20">
            <Skills />
          </section>

          <section id="experience" className="py-20">
            <Experience />
          </section>

          {/* <section id="projects" className="py-20">
            <Projects />
          </section> */}

          <section id="education" className="py-20">
            <Education />
          </section>

          {/* <section id="blog" className="py-20">
            <Blog />
          </section> */}

          {/* <section id="contact" className="py-20">
            <Contact />
          </section> */}
        </div>
      </div>
      <Footer />
    </main>
  );
}
