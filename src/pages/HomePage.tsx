import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import CTASection from "../sections/CTASection";
import FeatureSection from "../sections/FeatureSection";
import HeroSection from "../sections/HeroSection";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeatureSection />
      <CTASection />
      <Footer />
    </>
  );
}
