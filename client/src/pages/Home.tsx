import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import heroImage from "@assets/generated_images/Namibian_office_workspace_e6b8c5f4.jpg";

export default function Home() {
  return (
    <div>
      <section
        className="relative min-h-screen flex items-center justify-center"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white mb-6 md:mb-8">
            Payroll, Tax, Pension and Accounting Solutions for Namibian Individuals and Businesses
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-8 md:mb-10 leading-relaxed max-w-3xl mx-auto">
            Stratem helps employees and businesses stay compliant with NamRA while keeping their finances organised. We pride ourselves on professional service and quick response times.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                className="px-8 py-6 text-lg bg-primary/90 backdrop-blur-sm border border-primary-border hover:bg-primary"
                data-testid="button-consultation"
              >
                Request a Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/services">
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-6 text-lg bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
                data-testid="button-services"
              >
                View Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 lg:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Professional Remuneration Services You Can Trust
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
            Stratem Accounting Services supports individuals and businesses across Namibia with reliable payroll, tax, and pension assistance. We specialise in personal income tax, employee payroll matters, and pension-related compliance, ensuring everything is handled accurately and in line with NamRA regulations. Our goal is to give you peace of mind, clarity, and confidence in your financial obligations.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="flex flex-col items-center text-center space-y-3">
              <CheckCircle className="w-12 h-12 text-primary" />
              <h3 className="text-xl font-semibold">Local Expertise</h3>
              <p className="text-muted-foreground">Expert guidance through Namibian tax and NamRA requirements</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-3">
              <CheckCircle className="w-12 h-12 text-primary" />
              <h3 className="text-xl font-semibold">Quick Response Times</h3>
              <p className="text-muted-foreground">We respond to all inquiries within 1 business day, keeping your business moving</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-3">
              <CheckCircle className="w-12 h-12 text-primary" />
              <h3 className="text-xl font-semibold">Transparent Reporting</h3>
              <p className="text-muted-foreground">Clear, detailed financial reports that help you make informed decisions</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 lg:py-24 bg-card">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
            Let us handle your accounting needs so you can focus on growing your business.
          </p>
          <Link href="/contact">
            <Button size="lg" className="px-8 py-6 text-lg" data-testid="button-contact-cta">
              Contact Us Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
