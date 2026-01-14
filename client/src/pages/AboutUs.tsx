import { CheckCircle } from "lucide-react";
import teamImage from "@assets/generated_images/Business_team_collaboration_025a22d5.png";

export default function AboutUs() {
  return (
    <div className="pt-20">
      <section className="py-16 md:py-20 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">About Stratem</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Your trusted accounting partner in Namibia
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img
                src={teamImage}
                alt="Stratem team collaboration"
                className="rounded-md w-full h-auto"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Our Story</h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Stratem Accounting Services was founded with a simple mission: to provide Namibian businesses with reliable, professional accounting services that help them thrive. Based right here in Namibia, we understand the unique challenges local businesses face when it comes to compliance, taxation, and financial management.
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Our team of experienced accountants specializes in helping businesses avoid costly NamRA penalties through proactive compliance management. We believe that every business deserves access to professional accounting services, with fast turnaround times and responsive support.
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                What sets us apart is our commitment to quick response times and transparent communication. When you work with Stratem, you're not just gaining an accounting service - you're gaining a dedicated partner invested in your success.
              </p>
            </div>
          </div>

          <div className="bg-card rounded-md p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Choose Stratem</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <div className="w-16 h-16 rounded-md bg-primary/10 flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold">Local Expertise</h3>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  Deep understanding of Namibian business regulations, NamRA requirements, and local market conditions.
                </p>
              </div>
              <div className="space-y-4">
                <div className="w-16 h-16 rounded-md bg-primary/10 flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold">Quick Response Times</h3>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  We pride ourselves on responding to all client inquiries within 1 business day, ensuring you never feel left in the dark.
                </p>
              </div>
              <div className="space-y-4">
                <div className="w-16 h-16 rounded-md bg-primary/10 flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold">Transparent Reporting</h3>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  Clear, detailed financial reports and regular updates so you always know exactly where your business stands.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
