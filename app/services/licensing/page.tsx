import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, Mail, Phone, Building2 } from "lucide-react";
import { Button, SectionHeading } from "@/components/ui";
import { licensingInfo, glasgowProgram, languages, siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Licensing",
  description:
    "License the Glasgow ECG Program — non-exclusive commercial licensing through the University of Glasgow.",
};

export default function LicensingPage() {
  return (
    <div className="pt-20 lg:pt-24">
      {/* Header */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="section-container">
          <div className="grid gap-12 lg:grid-cols-2 items-start">
            <div>
              <Link
                href="/services"
                className="text-sm text-foreground-muted hover:text-primary transition-colors"
              >
                Services
              </Link>
              <h1 className="mt-2 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                Licensing the Glasgow Program
              </h1>
              <p className="mt-6 text-xl text-foreground-muted">
                {licensingInfo.intro}
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-primary shrink-0" />
                  <span className="text-foreground">
                    Non-exclusive commercial licensing
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-primary shrink-0" />
                  <span className="text-foreground">
                    Available through the University of Glasgow
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-primary shrink-0" />
                  <span className="text-foreground">
                    Over 50 years of continuous development
                  </span>
                </div>
              </div>
            </div>

            {/* Contact Card */}
            <div className="p-8 rounded-lg border border-primary bg-surface">
              <h2 className="text-lg font-semibold text-foreground mb-6">
                Licensing Enquiries
              </h2>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Building2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <div className="font-medium text-foreground">
                      {licensingInfo.contact.name}
                    </div>
                    <div className="text-sm text-foreground-muted">
                      Electrocardiology Section
                    </div>
                    <div className="text-sm text-foreground-muted">
                      {siteConfig.institution}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary shrink-0" />
                  <a
                    href={`mailto:${licensingInfo.contact.email}`}
                    className="text-primary hover:underline"
                  >
                    {licensingInfo.contact.email}
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary shrink-0" />
                  <span className="text-foreground">
                    {licensingInfo.contact.phone}
                  </span>
                </div>
              </div>

              <Link href="/contact" className="block mt-8">
                <Button className="w-full">
                  Contact Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 lg:py-20 bg-surface">
        <div className="section-container">
          <SectionHeading
            title="Program Features"
            subtitle="The Glasgow Program provides comprehensive automated ECG interpretation capabilities."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {glasgowProgram.keyFeatures.map((feature) => (
              <div
                key={feature.title}
                className="p-6 rounded-lg border border-border bg-background"
              >
                <h3 className="font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm text-foreground-muted">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Compliance */}
          <div className="mt-12 p-6 rounded-lg border border-border bg-background">
            <h3 className="font-semibold text-foreground mb-4">
              Regulatory Compliance
            </h3>
            <div className="flex flex-wrap gap-4">
              {glasgowProgram.compliance.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 px-3 py-1 rounded bg-primary-muted text-sm"
                >
                  <Check className="h-4 w-4 text-primary" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Current Licensees */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="section-container">
          <SectionHeading
            title="Current Licensees"
            subtitle="The Glasgow Program is licensed to medical device manufacturers internationally."
          />

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {licensingInfo.currentLicensees.map((licensee) => (
              <div
                key={licensee.name}
                className="p-4 rounded-lg border border-border bg-surface"
              >
                <div className="font-semibold text-foreground">
                  {licensee.name}
                </div>
                <div className="text-sm text-foreground-muted">
                  {licensee.description}
                </div>
                {licensee.since && (
                  <div className="mt-2 text-xs text-primary">
                    Licensed since {licensee.since}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Languages */}
      <section className="py-16 lg:py-20 bg-surface">
        <div className="section-container">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-2xl font-bold text-foreground">
                Multilingual Support
              </h2>
              <p className="mt-4 text-foreground-muted">
                Diagnostic statements are available in {languages.length}+
                languages, supporting international deployment of licensed devices.
              </p>
              <p className="mt-4 text-foreground-muted">
                Language options include regional variants (e.g., UK and US
                English, Iberian and Brazilian Portuguese) to ensure appropriate
                terminology for each market.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {languages.map((lang) => (
                <span
                  key={lang}
                  className="px-3 py-1 text-sm rounded border border-border bg-background text-foreground-muted"
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Learn More */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="section-container">
          <div className="grid gap-6 md:grid-cols-2">
            <Link
              href="/program"
              className="p-8 rounded-lg border border-border bg-surface hover:border-primary transition-colors group"
            >
              <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                Technical Capabilities
              </h3>
                <p className="mt-2 text-foreground-muted">
                  Detailed information about the Glasgow Program&rsquo;s diagnostic
                  capabilities, validation studies, and technical specifications.
                </p>
              <div className="mt-4 flex items-center text-primary font-medium text-sm">
                Learn more
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link
              href="/publications"
              className="p-8 rounded-lg border border-border bg-surface hover:border-primary transition-colors group"
            >
              <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                Research & Validation
              </h3>
              <p className="mt-2 text-foreground-muted">
                Peer-reviewed publications describing the methodology and
                validation of the Glasgow Program.
              </p>
              <div className="mt-4 flex items-center text-primary font-medium text-sm">
                View publications
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-surface">
        <div className="section-container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-foreground">
              Interested in Licensing?
            </h2>
            <p className="mt-4 text-foreground-muted">
              Contact Professor Macfarlane to discuss licensing requirements and
              learn more about integrating the Glasgow Program into your
              products.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <Button>
                  Contact Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <a href={`mailto:${licensingInfo.contact.email}`}>
                <Button variant="secondary">
                  <Mail className="mr-2 h-4 w-4" />
                  Email Directly
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
