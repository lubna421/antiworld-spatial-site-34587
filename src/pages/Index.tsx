import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ProductBanner from "@/components/ProductBanner";
import ProductCarousel from "@/components/ProductCarousel";
import VideoSection from "@/components/VideoSection";
import Interactive3D from "@/components/Interactive3D";
import OSSection from "@/components/OSSection";
import AboutUs from "@/components/AboutUs";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <ProductBanner />
        <ProductCarousel />
        <VideoSection />
        <Interactive3D />
        <OSSection />
        <AboutUs />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
