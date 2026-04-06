import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AdvantagesSection from "@/components/AdvantagesSection";
import HowToBorrowSection from "@/components/HowToBorrowSection";
import ReviewsSection from "@/components/ReviewsSection";
import QualificationsSection from "@/components/QualificationsSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <AdvantagesSection />
      <HowToBorrowSection />
      <ReviewsSection />
      <QualificationsSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
