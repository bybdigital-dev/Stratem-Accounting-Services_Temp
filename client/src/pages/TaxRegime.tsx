import { Card } from "@/components/ui/card";
import { FileText, Users, Building2, Calculator, Calendar, AlertCircle } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function TaxRegime() {
  const taxCategories = [
    {
      icon: Users,
      title: "Pay As You Earn (PAYE)",
      description: "Tax deducted from employee salaries by employers",
      details: [
        "Progressive tax rates from 0% to 37%",
        "Employers must register as tax agents with NamRA",
        "Monthly ETX submissions required by 20th of following month",
        "Annual reconciliation (EMP501) due by end of February",
      ],
    },
    {
      icon: Building2,
      title: "Corporate Income Tax",
      description: "Tax on company profits and business income",
      details: [
        "Standard rate of 32% for resident companies",
        "Non-resident companies taxed on Namibian-sourced income",
        "Mining companies subject to different rates",
        "Annual returns due within 7 months of year-end",
      ],
    },
    {
      icon: Calculator,
      title: "Value Added Tax (VAT)",
      description: "Consumption tax on goods and services",
      details: [
        "Standard rate of 15%",
        "Registration required if turnover exceeds N$500,000",
        "Zero-rated exports and certain basic foodstuffs",
        "VAT returns due by 25th of following month",
      ],
    },
    {
      icon: FileText,
      title: "Provisional Tax",
      description: "Advance payments of income tax",
      details: [
        "Two payments required during the tax year",
        "First payment due 6 months into tax year",
        "Second payment due at year-end",
        "Based on estimated taxable income",
      ],
    },
  ];

  const complianceTimeline = [
    { month: "Monthly", task: "PAYE/ETX submission by 20th" },
    { month: "Monthly", task: "VAT return by 25th" },
    { month: "February", task: "Annual PAYE reconciliation (EMP501)" },
    { month: "June", task: "First provisional tax payment" },
    { month: "December", task: "Second provisional tax payment" },
    { month: "Year-end + 7 months", task: "Corporate income tax return" },
  ];

  return (
    <div className="pt-20">
      <section className="py-16 md:py-20 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Basic Namibian Tax Regime
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Understanding the fundamentals of taxation in Namibia to keep your business compliant with NamRA requirements
            </p>
          </div>

          <div className="bg-card rounded-md p-6 md:p-8 mb-12">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                <AlertCircle className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Important Note</h3>
                <p className="text-muted-foreground">
                  The Namibia Revenue Agency (NamRA) is the official tax authority responsible for tax administration and collection. All businesses operating in Namibia must register with NamRA and comply with applicable tax obligations.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Key Tax Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-16">
            {taxCategories.map((category, index) => (
              <Card key={index} className="p-8 h-full">
                <div className="flex flex-col space-y-4">
                  <div className="w-16 h-16 rounded-md bg-primary/10 flex items-center justify-center">
                    <category.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold">{category.title}</h3>
                  <p className="text-muted-foreground">{category.description}</p>
                  <ul className="space-y-2">
                    {category.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="mr-2 text-primary mt-1">•</span>
                        <span className="text-base text-muted-foreground leading-relaxed">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Compliance Timeline</h2>
          <Card className="p-8 mb-12">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Calendar className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Key Deadlines</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {complianceTimeline.map((item, index) => (
                <div key={index} className="p-4 bg-background rounded-md">
                  <p className="font-semibold text-primary">{item.month}</p>
                  <p className="text-muted-foreground">{item.task}</p>
                </div>
              ))}
            </div>
          </Card>

          <div className="bg-primary/5 border border-primary/20 rounded-md p-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Need Help with Tax Compliance?</h2>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Stratem can help you navigate Namibian tax requirements and ensure timely submissions to NamRA.
            </p>
            <Link href="/contact">
              <Button className="inline-flex items-center justify-center rounded-md text-base font-medium bg-primary text-primary-foreground hover-elevate active-elevate-2 min-h-10 px-8 py-4" data-testid="button-tax-contact">
                Contact Us for Assistance
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
