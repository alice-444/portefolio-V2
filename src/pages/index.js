import Hero from "@/components/Hero.jsx";
import Navbar from "@/components/Navbar.jsx";
import Skills from "@/components/Skills.jsx";
import Success from "@/components/Success.jsx";
import AboutPage from "@/components/AboutMe.jsx";
import Education from "@/components/Education.jsx";
import Experience from "@/components/Experience.jsx";
import Certification from "@/components/Certification.jsx";

const Home = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <hr className="my-8 h-px border-0 bg-gray-300" />
        <Success />
        <hr className="my-8 h-px border-0 bg-gray-300" />
        <AboutPage />
        <hr className="my-8 h-px border-0 bg-gray-300" />
        <Skills />
        <hr className="my-8 h-px border-0 bg-gray-300" />
        <Education />
        <hr className="my-8 h-px border-0 bg-gray-300" />
        <Experience />
        <hr className="my-8 h-px border-0 bg-gray-300" />
        <Certification />
      </main>
    </div>
  );
};

export default Home;
