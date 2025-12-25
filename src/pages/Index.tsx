import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import LoadingIndicator from "@/components/LoadingIndicator";


const Index = () => {
  const [loadingInterval, setLoadingInterval] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingInterval(prev => prev - 1);
    }, 1000); // 1 segundo

    return () => clearInterval(interval);
  }, []);

  if (loadingInterval > 0) {
    return (
      <LoadingIndicator />
    )
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <div id="features">
        <Features />
      </div>
      <div id="how">
        <HowItWorks />
      </div>
      {/* <div id="testimonials">
        <Testimonials />
      </div> */}
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
