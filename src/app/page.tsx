import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { ClientArc } from "@/components/ClientArc";
import { ImageDuo } from "@/components/ImageDuo";
import { Features } from "@/components/Features";
import { Testimonials } from "@/components/Testimonials";
import { Pricing } from "@/components/Pricing";
import { Blog } from "@/components/Blog";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Nav />
      <Hero />
      <Reveal><HowItWorks /></Reveal>
      <Reveal><ClientArc /></Reveal>
      <Reveal><ImageDuo /></Reveal>
      <Reveal><Features /></Reveal>
      <Reveal><Testimonials /></Reveal>
      <Reveal><Pricing /></Reveal>
      <Reveal><Blog /></Reveal>
      <Reveal><FAQ /></Reveal>
      <Footer />
    </main>
  );
}
