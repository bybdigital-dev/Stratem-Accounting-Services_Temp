import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export default function Navigation() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close the menu when navigating to a new route
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Optional: close menu if user resizes (helps avoid awkward states)
  useEffect(() => {
    const handleResize = () => setIsMenuOpen(false);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
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
        isScrolled
          ? "bg-background/95 backdrop-blur-sm shadow-md"
          : "bg-background/100 backdrop-blur-sm shadow-md"
      }`}
    >
      <div className="max-w-8xl mx-auto px-6 md:px-4">
        <div className="flex items-center justify-between gap-4 py-4 md:py-5 lg:py-6">

          <Link href="/" data-testid="link-logo" className="min-w-0">
            <span className="block text-lg sm:text-3xl md:text-3xl lg:text-5xl font-bold text-primary cursor-pointer whitespace-nowrap leading-normal pb-1">
              Stratem Services
            </span>

          </Link>

          {/* Always show hamburger */}
          <Button
            size="icon"
            variant="ghost"
            onClick={() => setIsMenuOpen((v) => !v)}
            data-testid="button-menu-toggle"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Menu panel (works on all screen sizes) */}
      {isMenuOpen && (
        <div className="bg-background border-t">
          <div className="max-w-8xl mx-auto px-6 md:px-4 py-4">
            <div className="grid gap-2">
              {navItems.map((item) => {
                const isActive = location === item.path;

                return (
                  <Link
                    key={item.path}
                    href={item.path}
                    data-testid={`link-menu-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    <div
                      className={`px-4 py-3 rounded-md transition-all duration-300 cursor-pointer ${
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
          </div>
        </div>
      )}
    </nav>
  );
}
