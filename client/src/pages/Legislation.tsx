import { Card } from "@/components/ui/card";
import { Scale, FileText, Users, Building2, Shield, BookOpen } from "lucide-react";

export default function Legislation() {
  const legislationCategories = [
    {
      icon: Scale,
      title: "Income Tax Act (Act 24 of 1981)",
      category: "Tax Legislation",
      description: "The primary legislation governing income tax in Namibia",
      keyPoints: [
        "Defines taxable income and deductions",
        "Sets tax rates for individuals and companies",
        "Establishes PAYE requirements for employers",
        "Outlines penalties for non-compliance",
      ],
    },
    {
      icon: FileText,
      title: "Value Added Tax Act (Act 10 of 2000)",
      category: "Tax Legislation",
      description: "Governs the collection and administration of VAT",
      keyPoints: [
        "15% standard VAT rate",
        "Registration thresholds and requirements",
        "Zero-rated and exempt supplies",
        "Input tax credit provisions",
      ],
    },
    {
      icon: Users,
      title: "Labour Act (Act 11 of 2007)",
      category: "Employment Legislation",
      description: "Regulates employment relationships in Namibia",
      keyPoints: [
        "Minimum employment conditions",
        "Working hours and overtime provisions",
        "Leave entitlements (annual, sick, maternity)",
        "Termination procedures and requirements",
      ],
    },
    {
      icon: Shield,
      title: "Social Security Act (Act 34 of 1994)",
      category: "Social Security",
      description: "Establishes the Social Security Commission and benefits",
      keyPoints: [
        "Maternity, sick, and death benefits",
        "Employer and employee contribution requirements",
        "Registration obligations for employers",
        "Claims procedures and entitlements",
      ],
    },
    {
      icon: Building2,
      title: "Employees' Compensation Act (Act 30 of 1941)",
      category: "Workplace Safety",
      description: "Provides for compensation for workplace injuries and diseases",
      keyPoints: [
        "Employer liability for workplace accidents",
        "Compensation calculation methods",
        "Reporting requirements for injuries",
        "Medical expense coverage provisions",
      ],
    },
    {
      icon: BookOpen,
      title: "Namibia Revenue Agency Act (Act 12 of 2017)",
      category: "Tax Administration",
      description: "Establishes NamRA as the tax collection authority",
      keyPoints: [
        "Powers and functions of NamRA",
        "Taxpayer rights and obligations",
        "Tax assessment and collection procedures",
        "Dispute resolution mechanisms",
      ],
    },
  ];

  return (
    <div className="pt-20">
      <section className="py-16 md:py-20 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Legislation
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Key legislation affecting businesses and employers in Namibia
            </p>
          </div>

          <div className="bg-card rounded-md p-6 md:p-8 mb-12">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Namibian businesses must comply with various laws and regulations governing taxation, employment, and social security. Understanding these legislative requirements is essential for maintaining compliance and avoiding penalties. Below is an overview of the key legislation that affects businesses operating in Namibia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12">
            {legislationCategories.map((item, index) => (
              <Card key={index} className="p-8 h-full">
                <div className="flex flex-col space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <span className="text-sm font-medium text-primary">{item.category}</span>
                      <h3 className="text-lg md:text-xl font-semibold">{item.title}</h3>
                    </div>
                  </div>
                  <p className="text-muted-foreground">{item.description}</p>
                  <ul className="space-y-2">
                    {item.keyPoints.map((point, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="mr-2 text-primary mt-1">•</span>
                        <span className="text-base text-muted-foreground leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>

          <Card className="p-8 mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">What This Means for Your Business</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-4 bg-background rounded-md">
                <h3 className="font-semibold text-lg mb-2">Tax Compliance</h3>
                <p className="text-muted-foreground text-sm">
                  Regular submissions to NamRA including PAYE, VAT, and income tax returns with strict deadlines
                </p>
              </div>
              <div className="p-4 bg-background rounded-md">
                <h3 className="font-semibold text-lg mb-2">Employment Obligations</h3>
                <p className="text-muted-foreground text-sm">
                  Proper employment contracts, leave management, and adherence to minimum conditions
                </p>
              </div>
              <div className="p-4 bg-background rounded-md">
                <h3 className="font-semibold text-lg mb-2">Social Security</h3>
                <p className="text-muted-foreground text-sm">
                  Registration with SSC and timely payment of contributions for all employees
                </p>
              </div>
            </div>
          </Card>

          <div className="bg-primary/5 border border-primary/20 rounded-md p-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Stay Compliant with Stratem</h2>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Our team stays up to date with Namibian legislation to ensure your business remains compliant with all requirements.
            </p>
            <a href="/contact">
              <button className="inline-flex items-center justify-center rounded-md text-base font-medium bg-primary text-primary-foreground hover-elevate active-elevate-2 min-h-10 px-8 py-4" data-testid="button-legislation-contact">
                Get Compliance Support
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
