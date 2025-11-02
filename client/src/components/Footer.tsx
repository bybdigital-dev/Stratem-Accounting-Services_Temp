import { Link } from "wouter";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-card-border">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-primary mb-4">
              Stratem Accounting Services
            </h3>
            <p className="text-muted-foreground text-sm md:text-base">
              Professional accounting, payroll, and tax solutions for Namibian businesses.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm md:text-base text-muted-foreground">
              <li>
                <Link href="/">
                  <a className="hover:text-primary transition-colors">Home</a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a className="hover:text-primary transition-colors">About Us</a>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <a className="hover:text-primary transition-colors">Services</a>
                </Link>
              </li>
              <li>
                <Link href="/process">
                  <a className="hover:text-primary transition-colors">Our Process</a>
                </Link>
              </li>
              <li>
                <Link href="/gallery">
                  <a className="hover:text-primary transition-colors">Gallery</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="hover:text-primary transition-colors">Contact</a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-sm md:text-base text-muted-foreground">
              <li>Serving clients across Namibia</li>
              <li>Phone: +264 81 250 5637</li>
              <li>Email: zelodiav@gmail.com</li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 pt-8 border-t border-border text-center text-sm md:text-base text-muted-foreground">
          <p>&copy; {currentYear} Stratem Accounting Services. Serving Namibia.</p>
          <p>
            Developed by{" "}
            <a
              href="https://buildyourbrand.web.za/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              BYB Digital
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
