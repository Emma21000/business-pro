"use client";
import { aboutSection } from "../../data/aboutSection";
import { cardData } from "../../data/card";
import { heroData } from "../../data/hero";
import { knowmore } from "../../data/knowMore";
import { ourServices } from "../../data/ourServices";
import { testimonials } from "../../data/testimonials";
import AboutSection from "./components/AboutSection";
import Card from "./components/Card";
import Hero from "./components/Hero";
import KnowMore from "./components/KnowMore";
import OurServices from "./components/OurServices";
import Testimonials from "./components/Testimonials";

export default function Home() {

  return (
    <div>
      <Hero data={heroData} />
      <AboutSection data={aboutSection} />
      <OurServices data={ourServices}/>
      <Card data={cardData} />
      <Testimonials data={testimonials} />
      <KnowMore data={knowmore} />
    </div>
  );
}

 