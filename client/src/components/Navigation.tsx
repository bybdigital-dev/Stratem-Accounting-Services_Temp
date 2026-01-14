import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export default function Navigation() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/services", label: "Services" },
    { path: "/process", label: "Our Process" },
    { path: "/tax-regime", label: "Basic Namibian Tax Regime" },
    { path: "/legislation", label: "Legislation" },
    { path: "/gallery", label: "Gallery" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-sm shadow-md" : "bg-background/100 backdrop-blur-sm shadow-md"
      }`}
    >
      <div className="max-w-8xl mx-auto px-6 md:px-4">
        <div className="flex items-center justify-between h-16 md:h-20 gap-8">
          <Link
            href="/"
            data-testid="link-logo"
            className="mr-auto"
          >
            <span className="text-xl md:text-5xl font-bold text-primary cursor-pointer whitespace-nowrap">
              Stratem Accounting Services
            </span>
          </Link>




          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => {
              const isActive = location === item.path;
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  data-testid={`link-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <div
                    className={`px-4 py-2 rounded-md transition-all duration-300 cursor-pointer ${
                      isActive
                        ? "bg-primary text-primary-foreground shadow-sm"
                        : "text-foreground hover:bg-primary/10"
                    }`}
                  >
                    <span className="text-base font-medium">{item.label}</span>
                  </div>
                </Link>
              );
            })}
          </div>


          <Button
            size="icon"
            variant="ghost"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="button-mobile-menu-toggle"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-t">
          <div className="px-6 py-4 space-y-3">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path} data-testid={`link-mobile-${item.label.toLowerCase().replace(/\s+/g, '-')}`}>
                <div
                  className={`block py-2 text-base font-medium cursor-pointer ${
                    location === item.path ? "text-primary" : "text-foreground"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
