import { useState } from "react";
import { Navigation } from "./components/Navigation";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { ServicesSection } from "./components/ServicesSection";
import { CarConfigurator } from "./components/CarConfigurator";
import { PackagesSection } from "./components/PackagesSection";
import { GallerySection } from "./components/GallerySection";
import { QuoteForm } from "./components/QuoteForm";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { Toaster } from "./components/ui/sonner";
import LoginModal from "./components/LoginModal";

export default function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      {/* Navigation gets a function to open the modal */}
      <Navigation onNavigateToLogin={() => setIsLoginOpen(true)} />

      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <CarConfigurator />
      <PackagesSection />
      <GallerySection />
      <QuoteForm />
      <ContactSection />
      <Footer />
      <Toaster />

      {/* Render the LoginModal at the root, completely separate from Navigation */}
      <LoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
      />
    </div>
  );
}
