import { Link } from "react-router-dom";
import kenyaCollage from "@/assets/kenya-collage.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-[420px] md:min-h-[480px] flex items-center overflow-hidden"
      style={{
        background: "linear-gradient(135deg, hsl(207, 78%, 82%) 0%, hsl(210, 70%, 72%) 40%, hsl(207, 68%, 65%) 70%, hsl(210, 60%, 60%) 100%)"
      }}
    >
      {/* Decorative circles */}
      <div className="absolute left-[10%] top-[20%] w-40 h-40 rounded-full bg-white/10" />
      <div className="absolute left-[5%] bottom-[10%] w-24 h-24 rounded-full bg-white/8" />
      <div className="absolute left-[30%] bottom-[5%] w-16 h-16 rounded-full bg-white/10" />

      <div className="container mx-auto px-4 relative z-10 py-12 md:py-20 flex items-center">
        {/* Left content */}
        <div className="flex-1 max-w-xl">
          <h1 className="text-3xl md:text-[2.75rem] font-bold text-primary-foreground leading-tight">
            Get first loan online<br />
            within 15 minutes
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground mt-1 font-semibold">
            Fast and safe apply
          </p>
          <Link
            to="/apply"
            className="inline-block mt-8 px-14 py-4 bg-secondary text-secondary-foreground font-semibold rounded-lg text-base hover:brightness-110 transition-all shadow-lg"
          >
            Apply for a loan
          </Link>
        </div>

        {/* Right - Kenya map collage */}
        <div className="hidden md:block flex-1 relative">
          <img
            src={kenyaCollage}
            alt="Kenyan professionals collage in Kenya map shape"
            className="w-full max-w-[500px] ml-auto object-contain"
            width={800}
            height={900}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
