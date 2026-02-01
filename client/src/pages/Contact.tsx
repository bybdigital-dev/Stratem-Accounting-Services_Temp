import ContactForm from "@/components/ContactForm";
import { Mail, Phone, MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";

const WORKER_URL = "https://forms.afriwafel.co.za/submit";
const FORM_ID = "stratem-contact"; // <-- make sure this exists in KV

export default function Contact() {
  return (
    <div className="pt-20">
      <section className="py-16 md:py-20 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Contact Us</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Get in touch with our team. We respond within 1 business day.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
            <div className="lg:col-span-2">
              <Card className="p-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Send Us a Message</h2>

                {/* use the worker-powered form */}
                <ContactForm workerUrl={WORKER_URL} formId={FORM_ID} />
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Location</h3>
                    <p className="text-muted-foreground">Serving clients across Namibia</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Phone</h3>
                    <p className="text-muted-foreground">+264 81 773 3911</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Email</h3>
                    <p className="text-muted-foreground">stratemservices@gmail.com</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-primary/5 border-primary/20">
                <p className="text-base font-semibold text-primary">
                  We respond within 1 business day
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Our team is committed to providing quick, professional responses to all inquiries.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
