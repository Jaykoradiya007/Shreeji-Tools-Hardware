import { TopBar } from "@/components/sections/TopBar";
import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { Products } from "@/components/sections/Products";
import { Brands } from "@/components/sections/Brands";
import { About } from "@/components/sections/About";
import { Features } from "@/components/sections/Features";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary selection:text-white">
      <TopBar />
      <Navbar />
      
      <main>
        <Hero />
        <Stats />
        <Products />
        <Features />
        <Brands />
        <About />
        <Contact />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
