import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo_mkopohub.svg";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img 
                src={logo} 
                alt="Mkopo Hub Logo" 
                width={120} 
                className="brightness-0 invert" 
              />
            </div>
            <p className="text-sm text-primary-foreground/70">
              Mkopo Hub is a digital financial platform providing fast, secure mobile loans 
              and seamless payment solutions across Kenya.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Reference Information</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li>
                <a href="#advantages" className="hover:text-primary-foreground transition-colors">
                  Our advantages
                </a>
              </li>
              <li>
                <a href="#steps" className="hover:text-primary-foreground transition-colors">
                  How to borrow
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition-colors">
                  Promotions & News
                </a>
              </li>
            </ul>
          </div>

          {/* Platform Links */}
          <div>
            <h4 className="font-semibold mb-4">Mkopo Hub Platform</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li>
                <a href="#" className="hover:text-primary-foreground transition-colors">
                  Web App
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition-colors">
                  Mobile Access
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a 
                  href="tel:+254700000000" 
                  className="hover:text-primary-foreground transition-colors"
                >
                  +254 700 000 000
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a 
                  href="mailto:support@mkopohub.ke" 
                  className="hover:text-primary-foreground transition-colors"
                >
                  support@mkopohub.ke
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span>Nairobi, Kenya</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-10 pt-6 text-center text-sm text-primary-foreground/50">
          © {new Date().getFullYear()} Mkopo Hub. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
