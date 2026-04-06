import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import logo from "@/assets/logo_mkopohub.svg";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [appDropdown, setAppDropdown] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background shadow-sm">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Mkopo Hub Logo" width={120} />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          <a href="#advantages" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Why Choose Us
          </a>
          <a href="#steps" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            How It Works
          </a>

          <div
            className="relative"
            onMouseEnter={() => setAppDropdown(true)}
            onMouseLeave={() => setAppDropdown(false)}
          >
            <button className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-primary transition-colors">
              Mkopo Hub Platform <ChevronDown className="w-4 h-4" />
            </button>

            {appDropdown && (
              <div className="absolute top-full left-0 mt-1 bg-background border border-border rounded-md shadow-lg py-2 min-w-[180px]">
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-foreground hover:bg-accent transition-colors"
                >
                  Web App
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-foreground hover:bg-accent transition-colors"
                >
                  Mobile Access
                </a>
              </div>
            )}
          </div>

          <a
            href="#"
            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            Updates & News
          </a>
        </nav>

        {/* Phone & Login */}
        <div className="hidden lg:flex items-center gap-6">
          <div className="text-right">
            <a
              href="tel:+254700000000"
              className="text-sm font-bold text-foreground flex items-center gap-1"
            >
              <Phone className="w-4 h-4" /> +254 700 000 000
            </a>
            <span className="text-xs text-muted-foreground">
              Mon-Sun: 8am - 6pm
            </span>
          </div>

          <a
            href="#"
            className="px-6 py-2 border border-primary text-primary rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            Get Started
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-background px-4 py-4 space-y-3">
          <a href="#advantages" className="block text-sm font-medium text-foreground">
            Why Choose Us
          </a>
          <a href="#steps" className="block text-sm font-medium text-foreground">
            How It Works
          </a>
          <a href="#" className="block text-sm font-medium text-foreground">
            Web App
          </a>
          <a href="#" className="block text-sm font-medium text-foreground">
            Mobile Access
          </a>
          <a href="#" className="block text-sm font-medium text-foreground">
            Updates & News
          </a>

          <div className="pt-3 border-t border-border">
            <a
              href="tel:+254700000000"
              className="text-sm font-bold text-foreground"
            >
              +254 700 000 000
            </a>
            <p className="text-xs text-muted-foreground">
              Mon-Sun: 8am - 6pm
            </p>
          </div>

          <a
            href="#"
            className="inline-block px-6 py-2 border border-primary text-primary rounded-full text-sm font-medium"
          >
            Get Started
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
