import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo_lend.svg";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & About */}
          <div>
            <div className="flex items-center gap-1 mb-4">
              <span className="text-xl font-bold text-primary-foreground">Lend</span>
              <img src={logo} alt="LendPlus Logo" width={60} height={27} className="brightness-0 invert" />
            </div>
            <p className="text-sm text-primary-foreground/70">
              Online lender providing instant mobile loans for everyone in Kenya.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Reference Information</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><a href="#advantages" className="hover:text-primary-foreground transition-colors">Our advantages</a></li>
              <li><a href="#steps" className="hover:text-primary-foreground transition-colors">How to borrow</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Promotions & News</a></li>
            </ul>
          </div>

          {/* App Links */}
          <div>
            <h4 className="font-semibold mb-4">LendPlus Loan App</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">For Android</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">For iOS</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a href="tel:+254709029000" className="hover:text-primary-foreground transition-colors">+254 709 029 000</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:customer@lendplus.ke" className="hover:text-primary-foreground transition-colors">customer@lendplus.ke</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span>1st Rhapta Road, Rhapta Heights, Nairobi, Kenya</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-10 pt-6 text-center text-sm text-primary-foreground/50">
          © {new Date().getFullYear()} LendPlus. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
