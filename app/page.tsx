import Hero from "@/components/Hero";
import AuthorityBar from "@/components/AuthorityBar";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <AuthorityBar />
      <hr className="section-divider mx-8" />
      <Services />
      <hr className="section-divider mx-8" />
      <Testimonials />
      <Footer />
    </main>
  );
}
