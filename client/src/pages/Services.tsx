import ServiceCard from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { FileText, Users, Wallet, HandCoins } from "lucide-react";
import { FaHandHoldingDollar } from "react-icons/fa6";


export default function Services() {
  return (
    <div className="pt-20">
      <section className="py-16 md:py-20 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Our Services</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We support Namibian businesses with full accounting admin so they can focus on operations. Our quick response times ensure clients always get the help they need, when they need it.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16">
            <ServiceCard
              icon={FileText}
              title="Bookkeeping"
              items={[
                "Transaction capturing",
                "Bank/account reconciliation",
                "Month-end reporting",
              ]}
            />
            <ServiceCard
              icon={Users}
              title="Employee Taxation (PAYE)"
              items={[
                "Preparation and submission of monthly PAYE files",
                "Correction of submitted PAYE files",
                "Tax sessions for employees on annual return completion",
                "Registration of employees as taxpayers",
              ]}
            />
            <ServiceCard
              icon={HandCoins}
              title="Payroll"
              items={[
                "Monthly payroll processing",
                "Structuring of salaries",
                "Compliance with Namibian regulations",
              ]}
            />
            <ServiceCard
              icon={Wallet}
              title="Pension Assistance"
              items={[
                "Assisting with collection of unclaimed pension monies",
                "Guiding employees/former employees through required documents",
              ]}
            />
          </div>

          <div className="bg-card rounded-md p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Expert Accounting Support?</h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Let Stratem handle your accounting needs so you can focus on what matters most—growing your business.
            </p>
            <Link href="/contact">
              <Button size="lg" className="px-8 py-6 text-lg" data-testid="button-contact">
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
