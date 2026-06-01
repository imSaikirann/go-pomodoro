import Benefits from "@/components/landing/Benefits";
import Commands from "@/components/landing/Commands";
import CTA from "@/components/landing/CTA";
import Features from "@/components/landing/Features";
import Footer from "@/components/landing/Footer";
import Hero from "@/components/landing/Hero";
import Navbar from "@/components/landing/Navbar";
import Problem from "@/components/landing/Problem";

export default function Home() {
  return (
    <div className="bg-white text-black">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Features />
        <Benefits />
        <Commands />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
