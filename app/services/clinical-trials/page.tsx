import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, FileText, Users, BarChart } from "lucide-react";
import { Button, SectionHeading } from "@/components/ui";
import { coreLabServices, trainingResources } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Clinical Trials Support",
  description:
    "Comprehensive clinical trials support from the University of Glasgow ECG Core Laboratory.",
};

const trialSupport = [
  {
    icon: FileText,
    title: "Trial Design Consultation",
    description:
      "Support with clinical endpoint discussions and electrocardiology aspects of trial design, including ECG-related inclusion/exclusion criteria.",
  },
  {
    icon: Users,
    title: "Site Training",
    description:
      "Training courses for nurses and technicians, online resources, and ongoing support to ensure consistent ECG quality across trial sites.",
  },
  {
    icon: BarChart,
    title: "Data Analysis",
    description:
      "Minnesota coding, serial comparison, interval measurement, and custom analysis reports tailored to trial requirements.",
  },
];

export default function ClinicalTrialsPage() {
  return (
    <div className="pt-20 lg:pt-24">
      {/* Header */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="section-container">
          <div className="max-w-3xl">
            <Link
              href="/services"
              className="text-sm text-foreground-muted hover:text-primary transition-colors"
            >
              Services
            </Link>
            <h1 className="mt-2 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Clinical Trials Support
            </h1>
            <p className="mt-6 text-xl text-foreground-muted">
              Comprehensive support for national and international clinical
              trials, from design consultation through to final data analysis
              and reporting.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact">
                <Button>
                  Discuss Your Trial
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/services/core-lab">
                <Button variant="secondary">Core Lab Services</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trial Support */}
      <section className="py-16 lg:py-20 bg-surface">
        <div className="section-container">
          <SectionHeading
            title="How We Support Trials"
            subtitle="From protocol development to final analysis, we provide end-to-end ECG support."
          />

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {trialSupport.map((item) => (
              <div
                key={item.title}
                className="p-8 rounded-lg border border-border bg-background"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-muted text-primary mb-6">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-3 text-foreground-muted">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trial Lifecycle */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="section-container">
          <SectionHeading
            title="Trial Lifecycle Support"
            subtitle="Our involvement typically spans the entire trial lifecycle."
          />

          <div className="mt-12 relative">
            {/* Timeline */}
            <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-border" />

            <div className="grid gap-8 md:grid-cols-4">
              {[
                {
                  phase: "Setup",
                  items: [
                    "Protocol review",
                    "Endpoint definition",
                    "Site requirements",
                    "Training materials",
                  ],
                },
                {
                  phase: "Training",
                  items: [
                    "Site certification",
                    "Equipment checks",
                    "Quality standards",
                    "Documentation",
                  ],
                },
                {
                  phase: "During Trial",
                  items: [
                    "ECG receipt & QC",
                    "Automated analysis",
                    "Quality feedback",
                    "Ongoing support",
                  ],
                },
                {
                  phase: "Close-out",
                  items: [
                    "Final database",
                    "Minnesota coding",
                    "Statistical output",
                    "Archive",
                  ],
                },
              ].map((phase, index) => (
                <div key={phase.phase} className="relative">
                  {/* Timeline dot */}
                  <div className="hidden md:flex absolute -top-1 left-1/2 -translate-x-1/2 h-4 w-4 rounded-full bg-primary border-4 border-background" />

                  <div className="p-6 rounded-lg border border-border bg-surface mt-8">
                    <div className="text-xs font-medium text-primary uppercase tracking-wider mb-2">
                      Phase {index + 1}
                    </div>
                    <h3 className="font-semibold text-foreground mb-4">
                      {phase.phase}
                    </h3>
                    <ul className="space-y-2">
                      {phase.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-2 text-sm text-foreground-muted"
                        >
                          <Check className="h-4 w-4 text-primary shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="py-16 lg:py-20 bg-surface">
        <div className="section-container">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-2xl font-bold text-foreground">
                Extensive Trial Experience
              </h2>
              <p className="mt-4 text-foreground-muted">
                The ECG Core Lab has supported clinical trials since the 1990s,
                including landmark studies such as WOSCOPS (West of Scotland
                Coronary Prevention Study). Our team has experience with:
              </p>

              <ul className="mt-8 space-y-3">
                {[
                  "Cardiovascular outcome trials",
                  "Epidemiological population studies",
                  "Drug safety (QT/QTc) studies",
                  "Device trials",
                  "COVID-related cardiac studies",
                  "Multi-centre international trials",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Current studies */}
            <div className="p-8 rounded-lg border border-border bg-background">
              <h3 className="font-semibold text-foreground mb-6">
                Current & Recent Studies
              </h3>
              <div className="space-y-4">
                {coreLabServices.currentStudies.slice(0, 8).map((study) => (
                  <div
                    key={study.name}
                    className="flex items-center justify-between pb-2 border-b border-border last:border-0"
                  >
                    <span className="font-medium text-foreground text-sm">
                      {study.name}
                    </span>
                    <span className="text-xs text-foreground-muted px-2 py-0.5 rounded bg-surface">
                      {study.type}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training Link */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="section-container">
          <div className="p-8 rounded-lg border border-primary/20 bg-primary-muted">
            <div className="grid gap-8 lg:grid-cols-2 items-center">
              <div>
                <h2 className="text-xl font-bold text-foreground">
                  Training & Resources
                </h2>
                <p className="mt-2 text-foreground-muted">
                  {trainingResources.intro} We provide online guides, video
                  tutorials, and personalised training for trial staff.
                </p>
              </div>
              <div className="flex justify-end">
                <Link href="/training">
                  <Button variant="secondary">
                    View Training Resources
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-surface">
        <div className="section-container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-foreground">
              Discuss Your Trial Requirements
            </h2>
            <p className="mt-4 text-foreground-muted">
              Contact us to discuss how we can support your clinical trial with
              centralised ECG services.
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
