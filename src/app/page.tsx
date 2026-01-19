import About from "./pages/about";
import Home from "./pages/home";
import Headers from "./components/header";
import Skills from "./pages/skills";
import Projects from "./pages/projects";
import Contact from "./pages/contact";
import Footer from "./components/footer";

export default function HomePage() {
  return (
    <div className="min-h-screen hero-bg text-white flex flex-col">
      <Headers />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
