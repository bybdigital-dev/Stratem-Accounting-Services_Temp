import { Link } from "wouter";
import ProcessStep from "@/components/ProcessStep";

export default function OurProcess() {
  return (
    <div className="pt-20">
      <section className="py-16 md:py-20 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Our Process</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A simple, proven approach to managing your accounting needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            <ProcessStep
              number="1"
              title="Discovery"
              description="We gather information about your business and staff"
            />
            <ProcessStep
              number="2"
              title="Setup"
              description="We align bookkeeping, payroll, and PAYE with NamRA requirements"
            />
            <ProcessStep
              number="3"
              title="Monthly Processing"
              description="We process transactions, payroll, and submit PAYE"
            />
            <ProcessStep
              number="4"
              title="Reporting & Support"
              description="We send reports and provide fast support when questions arise"
              isLast
            />
          </div>

          <div className="mt-16 bg-card rounded-md p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Streamline Your Accounting?</h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Our proven process ensures accuracy, compliance, and peace of mind. Let's get started.
            </p>
            <Link href="/contact">
              <button
                className="inline-flex items-center justify-center rounded-md text-base font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover-elevate active-elevate-2 min-h-10 px-8 py-6 text-lg"
                data-testid="button-start"
              >
                Start Your Journey
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
