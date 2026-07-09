import type { Metadata } from "next";
import { Mail, MapPin, Phone, ExternalLink } from "lucide-react";
import { ContactForm } from "@/components/sections/contact-form";
import { siteConfig, teamMembers, licensingInfo } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact the University of Glasgow Electrocardiology Section for clinical trials support, licensing enquiries, or research collaboration.",
};

export default function ContactPage() {
  return (
    <div className="pt-20 lg:pt-24">
      {/* Header */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="section-container">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Contact Us
            </h1>
            <p className="mt-6 text-xl text-foreground-muted">
              Get in touch with the Electrocardiology Section for clinical
              trials support, licensing enquiries, or research collaboration.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-16 lg:py-20 bg-surface">
        <div className="section-container">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <div className="p-8 rounded-lg border border-border bg-background">
              <h2 className="text-xl font-semibold text-foreground mb-6">
                Send us a message
              </h2>
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-6">
                  Contact Information
                </h2>
                <div className="space-y-6">
                  {/* Primary Contact */}
                  <div className="p-6 rounded-lg border border-border bg-background">
                    <h3 className="font-medium text-foreground mb-4">
                      General & Licensing Enquiries
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <Mail className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <div>
                          <div className="font-medium text-foreground">
                            {licensingInfo.contact.name}
                          </div>
                          <a
                            href={`mailto:${licensingInfo.contact.email}`}
                            className="text-primary hover:underline"
                          >
                            {licensingInfo.contact.email}
                          </a>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone className="h-5 w-5 text-primary shrink-0" />
                        <span className="text-foreground-muted">
                          {licensingInfo.contact.phone}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Clinical Trials Contact */}
                  <div className="p-6 rounded-lg border border-border bg-background">
                    <h3 className="font-medium text-foreground mb-4">
                      Clinical Trials Administration
                    </h3>
                    <div className="flex items-start gap-3">
                      <Mail className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <div className="font-medium text-foreground">
                          Louise Inglis
                        </div>
                        <div className="text-sm text-foreground-muted">
                          Clinical Trials Manager
                        </div>
                        <a
                          href="mailto:louise.inglis@glasgow.ac.uk"
                          className="text-primary hover:underline"
                        >
                          louise.inglis@glasgow.ac.uk
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Address */}
              <div
                id="location"
                className="p-6 rounded-lg border border-primary/20 bg-primary-muted scroll-mt-24"
              >
                <h3 className="font-medium text-foreground mb-4">
                  Visit Us
                </h3>
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <address className="not-italic text-foreground-muted">
                    <span className="font-medium text-foreground">
                      Electrocardiology Section
                    </span>
                    <br />
                    {siteConfig.address.building}
                    <br />
                    {siteConfig.address.street}
                    <br />
                    {siteConfig.address.city} {siteConfig.address.postcode}
                    <br />
                    {siteConfig.address.country}
                  </address>
                </div>
              </div>

              {/* University link */}
              <div className="p-6 rounded-lg border border-border bg-background">
                <h3 className="font-medium text-foreground mb-2">
                  Part of the University of Glasgow
                </h3>
                <p className="text-sm text-foreground-muted mb-4">
                  {siteConfig.department}, {siteConfig.school}
                </p>
                <a
                  href={siteConfig.links.robertsonCentre}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
                >
                  Robertson Centre for Biostatistics
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
