
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import Download from "@/components/Download";
import Footer from "@/components/Footer";
import DepositCheckpoint from "@/components/DepositCheckpoint";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <DepositCheckpoint />
      <Testimonials />
      <Download />
      <Footer />
    </div>
  );
};

export default Index;
