import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";

import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Gallery from "@/components/sections/Gallery";
import Advantages from "@/components/sections/Advantages";
import Testimonial from "@/components/sections/Testimonial";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Advantages />
        <Testimonial />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
