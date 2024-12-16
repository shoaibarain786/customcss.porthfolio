import HeroSection from "./hero/page";
import AboutSection from "./about/page";
import Skills from "./skills/page";
import Projects from "./project/page";
import ContactForm from "./contact/page";








export default function home(){
  return(
    <div>
      <HeroSection/>
      <AboutSection/>
      <Skills/>
      <Projects/>
      <ContactForm/>
    </div>
  )
}