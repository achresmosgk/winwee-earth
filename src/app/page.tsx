import { Metadata } from "next";
import Aboutus from "./components/home/about-us";
import Contact from "./components/home/contact";
import Faq from "./components/home/faq";
import HeroSection from "./components/home/hero";
import Portfolio from "./components/home/portfolio";

import Resources from "./components/home/resources";
import Services from "./components/home/services";
import StatsFacts from "./components/home/stats-facts";


export const metadata: Metadata = {
    title: "WinWee",
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsFacts/>
      <Services/>
      <Contact contactdataNumber="10"/>
    </>
  );
}
