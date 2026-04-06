import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import logo from "@/assets/logo_lend.svg";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [appDropdown, setAppDropdown] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background shadow-sm">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-1">
          <span className="text-xl font-bold text-primary">Lend</span>
          <img src={logo} alt="LendPlus Logo" width={60} height={27} />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          <a href="#advantages" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Our advantages</a>
          <a href="#steps" className="text-sm font-medium text-foreground hover:text-primary transition-colors">How to borrow</a>
          <div className="relative" onMouseEnter={() => setAppDropdown(true)} onMouseLeave={() => setAppDropdown(false)}>
            <button className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-primary transition-colors">
              LendPlus Loan App <ChevronDown className="w-4 h-4" />
            </button>
            {appDropdown && (
              <div className="absolute top-full left-0 mt-1 bg-background border border-border rounded-md shadow-lg py-2 min-w-[160px]">
                <a href="#" className="block px-4 py-2 text-sm text-foreground hover:bg-accent transition-colors">For Android</a>
                <a href="#" className="block px-4 py-2 text-sm text-foreground hover:bg-accent transition-colors">For iOS</a>
              </div>
            )}
          </div>
          <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Promotions & News</a>
        </nav>

        {/* Phone & Login */}
        <div className="hidden lg:flex items-center gap-6">
          <div className="text-right">
            <a href="tel:0709029000" className="text-sm font-bold text-foreground flex items-center gap-1">
              <Phone className="w-4 h-4" /> 0709-029-000
            </a>
            <span className="text-xs text-muted-foreground">Mon-Sun: 8am - 6pm</span>
          </div>
          <a href="#" className="px-6 py-2 border border-primary text-primary rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors">
            Log in
          </a>
        </div>

        {/* Mobile toggle */}
        <button className="lg:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-background px-4 py-4 space-y-3">
          <a href="#advantages" className="block text-sm font-medium text-foreground">Our advantages</a>
          <a href="#steps" className="block text-sm font-medium text-foreground">How to borrow</a>
          <a href="#" className="block text-sm font-medium text-foreground">For Android</a>
          <a href="#" className="block text-sm font-medium text-foreground">For iOS</a>
          <a href="#" className="block text-sm font-medium text-foreground">Promotions & News</a>
          <div className="pt-3 border-t border-border">
            <a href="tel:0709029000" className="text-sm font-bold text-foreground">0709-029-000</a>
            <p className="text-xs text-muted-foreground">Mon-Sun: 8am - 6pm</p>
          </div>
          <a href="#" className="inline-block px-6 py-2 border border-primary text-primary rounded-full text-sm font-medium">Log in</a>
        </div>
      )}
    </header>
  );
};

export default Header;
