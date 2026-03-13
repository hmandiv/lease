import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import CTASection from "../sections/CTASection";
import FeatureSection from "../sections/FeatureSection";
import HeroSection from "../sections/HeroSection";
import Seo from "../ui/Seo";
export default function HomePage() {
  return (
    <>
      <Seo
        title="Lease Opportunities | Brand Name"
        description="Explore current lease opportunities, flexible terms, and available units. Contact us for pricing, availability, and next steps."
      />
      <Navbar />
      <HeroSection />
      <FeatureSection />
      <CTASection />
      <Footer />
    </>
  );
}
