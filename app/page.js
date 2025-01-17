import Contact from "@/components/Contact";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Product from "@/components/Product";
import About from "@/components/About";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <About/>
      <Product />
      <Gallery />
      <Contact />
    </main>
  );
}
