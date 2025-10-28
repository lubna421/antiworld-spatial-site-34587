import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ProductBanner from "@/components/ProductBanner";
import ProductCarousel from "@/components/ProductCarousel";
import VideoSection from "@/components/VideoSection";
import Interactive3D from "@/components/Interactive3D";
import OSSection from "@/components/OSSection";
import AboutUs from "@/components/AboutUs";
import Footer from "@/components/Footer";
import SplashScreen from "@/components/SplashScreen";
import LoginDialog from "@/components/LoginDialog";
import { useAuth } from "@/hooks/useAuth";

const Index = () => {
  const { login, showLoginDialog, setShowLoginDialog } = useAuth();

  return (
    <>
      <SplashScreen />
      <LoginDialog 
        open={showLoginDialog} 
        onOpenChange={setShowLoginDialog}
        onLogin={login}
      />
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
    </>
  );
};

export default Index;
