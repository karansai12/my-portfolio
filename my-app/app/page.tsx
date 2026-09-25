
import AboutSection from "./component/aboutSection";
import ContactSection from "./component/contact/page";
import HeroSection from "./component/heroSection";
import Navbar from "./component/navbar";
import ProjectsSection from "./component/projectSection";
import SkillsSection from "./component/skillSection";


export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
    </div>
  );
}
