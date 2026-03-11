import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MoodSelector from "@/components/MoodSelector";
import ProductGrid from "@/components/ProductGrid";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <MoodSelector />
      <ProductGrid />
      <Footer />
    </div>
  );
};

export default Index;
