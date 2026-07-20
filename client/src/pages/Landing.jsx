import Navbar from "../components/common/Navbar";
import Hero from "../components/landing/Hero";
import Stats from "../components/landing/Stats";
import Features from "../components/landing/Features";
import CTA from "../components/landing/CTA";
import Footer from "../components/common/Footer";

export default function Landing() {
  return (
    <div className="bg-[#09090b] text-white overflow-x-hidden">

      <Navbar/>

      <Hero/>

      <Stats/>

      <Features/>

      <CTA/>

      <Footer/>

    </div>
  );
}