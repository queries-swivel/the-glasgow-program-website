import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, FlaskConical, Beaker, Key } from "lucide-react";
import { Button } from "@/components/ui";
import { navigation } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Services",
  description:
    "ECG Core Laboratory services, clinical trials support, and Glasgow Program licensing from the University of Glasgow.",
};

const serviceDetails = [
  {
    icon: FlaskConical,
    name: "ECG Core Lab",
    href: "/services/core-lab",
    description:
      "Centralised ECG processing and interpretation for research studies, with ISO 9001:2015 certification maintained since 2003.",
    features: [
      "Secure ECG data management",
      "Automated interpretation with expert review",
      "Serial ECG comparison",
      "Blinded endpoint adjudication",
    ],
  },
  {
    icon: Beaker,
    name: "Research Studies",
    href: "/services/clinical-trials",
    description:
      "Comprehensive support for national and international research studies with experience across cardiovascular and epidemiological projects.",
    features: [
      "Study design consultation",
      "Quality feedback to centres",
      "Serial ECG comparison",
      "Custom reporting",
    ],
  },
  {
    icon: Key,
    name: "Licensing",
    href: "/services/licensing",
    description:
      "Non-exclusive commercial licensing of the Glasgow Program through the University of Glasgow, adopted by leading medical device manufacturers internationally.",
    features: [
      "Flexible licensing terms",
      "Technical integration support",
      "Multilingual output",
      "Ongoing algorithm updates",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-20 lg:pt-24">
      {/* Header */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="section-container">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Services
            </h1>
            <p className="mt-6 text-xl text-foreground-muted">
              The Electrocardiology Section provides ECG Core Laboratory
              services for research studies and licenses the Glasgow Program to
              medical device manufacturers internationally.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-20 bg-surface">
        <div className="section-container">
          <div className="grid gap-8 lg:grid-cols-3">
            {serviceDetails.map((service) => (
              <Link
                key={service.name}
                href={service.href}
                className="group p-8 rounded-lg border border-border bg-background hover:border-primary transition-colors"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-muted text-primary mb-6">
                  <service.icon className="h-6 w-6" />
                </div>

                <h2 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {service.name}
                </h2>
                <p className="mt-3 text-foreground-muted">
                  {service.description}
                </p>

                <ul className="mt-6 space-y-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-foreground-muted"
                    >
                      <div className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex items-center text-primary font-medium text-sm">
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="section-container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-foreground">
              Enquire About Our Services
            </h2>
            <p className="mt-4 text-foreground-muted">
              For more information about our services or to discuss your
              requirements, please contact the Electrocardiology Section.
            </p>
            <div className="mt-8">
              <Link href="/contact">
                <Button>
                  Contact Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
