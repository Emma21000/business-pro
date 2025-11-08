import { aboutSection } from "../../data/aboutSection";
import { cardData } from "../../data/card";
import { heroData } from "../../data/hero";
import { ourServices } from "../../data/ourServices";
import { testimonials } from "../../data/testimonials";
import AboutSection from "./component/AboutSection";
import Card from "./component/Card";
import Hero from "./component/Hero";
import OurServices from "./component/OurServices";
import Testimonials from "./component/Testimonials";

export default function Home() {
  return (
     <div>
        <Hero data={heroData} />
        <AboutSection data={aboutSection} />
        <OurServices data={ourServices}/>
        <Card data={cardData} />
        <Testimonials data={testimonials} />
     </div>
  );
}
