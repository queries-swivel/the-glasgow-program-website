import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Shield,
  Check,
  Beaker,
  FileText,
  Users,
  BarChart,
} from "lucide-react";
import { Button, SectionHeading } from "@/components/ui";
import { coreLabServices, trainingResources, teamMembers } from "@/lib/constants";

export const metadata: Metadata = {
  title: "ECG Core Lab & Clinical Trials",
  description:
    "ISO 9001:2015 certified ECG Core Laboratory — centralised ECG processing and end-to-end clinical trials support from the University of Glasgow.",
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

const lifecycle = [
  {
    phase: "Setup",
    items: ["Protocol review", "Endpoint definition", "Site requirements", "Training materials"],
  },
  {
    phase: "Training",
    items: ["Site certification", "Equipment checks", "Quality standards", "Documentation"],
  },
  {
    phase: "During Trial",
    items: ["ECG receipt & QC", "Automated analysis", "Quality feedback", "Ongoing support"],
  },
  {
    phase: "Close-out",
    items: ["Final database", "Minnesota coding", "Statistical output", "Archive"],
  },
];

export default function CoreLabPage() {
  return (
    <div className="pt-20 lg:pt-24">
      {/* Header */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="section-container">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <span className="text-sm font-medium text-primary">
                For research &amp; clinical trials
              </span>
              <h1 className="mt-2 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                ECG Core Laboratory
              </h1>
              <p className="mt-6 text-xl text-foreground-muted">
                {coreLabServices.intro} We support national and international
                clinical trials from design consultation through to final data
                analysis and reporting.
              </p>

              <div className="mt-8 flex items-center gap-4 p-4 rounded-lg border border-primary/20 bg-primary-muted">
                <Shield className="h-8 w-8 text-primary shrink-0" />
                <div>
                  <div className="font-semibold text-foreground">
                    ISO 9001:2015 Certified
                  </div>
                  <div className="text-sm text-foreground-muted">
                    Quality management certification, assessed annually since 2003
                  </div>
                </div>
              </div>
            </div>

            {/* Quick contact */}
            <div className="p-8 rounded-lg border border-border bg-surface">
              <h2 className="text-lg font-semibold text-foreground mb-4">
                Contact the Core Lab
              </h2>
              <div className="space-y-3 text-sm">
                <div>
                  <div className="text-foreground-muted">General Enquiries</div>
                  <div className="font-medium text-foreground">
                    {teamMembers[0].name}
                  </div>
                  {"email" in teamMembers[0] && (
                    <a
                      href={`mailto:${teamMembers[0].email}`}
                      className="text-primary hover:underline"
                    >
                      {teamMembers[0].email}
                    </a>
                  )}
                </div>
                <div>
                  <div className="text-foreground-muted">
                    Administrative &amp; Data Queries
                  </div>
                  <div className="font-medium text-foreground">
                    {teamMembers.find((m) => m.role.includes("Trials"))?.name}
                  </div>
                  <a
                    href="mailto:louise.inglis@glasgow.ac.uk"
                    className="text-primary hover:underline"
                  >
                    louise.inglis@glasgow.ac.uk
                  </a>
                </div>
              </div>
              <Link href="/contact" className="block mt-6">
                <Button className="w-full">
                  Get in Touch
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Core Lab services */}
      <section className="py-16 lg:py-20 bg-surface">
        <div className="section-container">
          <SectionHeading
            title="Core Lab Services"
            subtitle="Comprehensive ECG processing and analysis for clinical trials and epidemiological studies."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {coreLabServices.services.map((service) => (
              <div
                key={service.title}
                className="p-6 rounded-lg border border-border bg-background"
              >
                <h3 className="font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-foreground-muted">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How we support trials */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="section-container">
          <SectionHeading
            title="How We Support Trials"
            subtitle="From protocol development to final analysis, we provide end-to-end ECG support."
          />

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {trialSupport.map((item) => (
              <div
                key={item.title}
                className="p-8 rounded-lg border border-border bg-surface"
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

      {/* Trial lifecycle */}
      <section className="py-16 lg:py-20 bg-surface">
        <div className="section-container">
          <SectionHeading
            title="Trial Lifecycle Support"
            subtitle="Our involvement typically spans the entire trial lifecycle."
          />

          <div className="mt-12 relative">
            <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-border" />

            <div className="grid gap-8 md:grid-cols-4">
              {lifecycle.map((phase, index) => (
                <div key={phase.phase} className="relative">
                  <div className="hidden md:flex absolute -top-1 left-1/2 -translate-x-1/2 h-4 w-4 rounded-full bg-primary border-4 border-surface" />

                  <div className="p-6 rounded-lg border border-border bg-background mt-8">
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

      {/* Current & recent studies */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="section-container">
          <SectionHeading
            title="Current & Recent Studies"
            subtitle="The Core Lab actively supports national and international clinical trials and epidemiological studies."
          />

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {["Epidemiological", "Collaborative", "COVID-Related"].map((type) => {
              const studies = coreLabServices.currentStudies.filter(
                (s) => s.type === type
              );
              if (studies.length === 0) return null;

              return (
                <div
                  key={type}
                  className="p-6 rounded-lg border border-border bg-surface"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <Beaker className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold text-foreground">{type}</h3>
                  </div>
                  <ul className="space-y-2">
                    {studies.map((study) => (
                      <li
                        key={study.name}
                        className="flex items-center gap-2 text-sm"
                      >
                        <div className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                        <span className="text-foreground-muted">
                          {study.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What we provide + experience */}
      <section className="py-16 lg:py-20 bg-surface">
        <div className="section-container">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold text-foreground">
                What We Provide
              </h2>
              <p className="mt-4 text-foreground-muted">
                The Core Lab handles secure central interpretation, storage and
                retrieval of ECGs used in clinical trials. Benefits include
                improved accuracy through computerised analysis and standardised
                procedures performed by trained specialists.
              </p>

              <ul className="mt-8 space-y-4">
                {[
                  "Secure central ECG database",
                  "Standardised interpretation protocols",
                  "Minnesota coding for epidemiological studies",
                  "Serial ECG comparison for change detection",
                  "Blinded measurements for endpoint adjudication",
                  "Quality feedback to trial centres",
                  "Experienced research staff",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              {/* Experience */}
              <div className="p-6 rounded-lg border border-border bg-background">
                <h3 className="font-semibold text-foreground">
                  Extensive Trial Experience
                </h3>
                <p className="mt-2 text-sm text-foreground-muted">
                  The ECG Core Lab has supported clinical trials since the 1990s,
                  including landmark studies such as WOSCOPS (West of Scotland
                  Coronary Prevention Study). Our team has experience across:
                </p>
                <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {[
                    "Cardiovascular outcome trials",
                    "Epidemiological studies",
                    "Drug safety (QT/QTc) studies",
                    "Device trials",
                    "COVID-related cardiac studies",
                    "Multi-centre international trials",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm text-foreground-muted"
                    >
                      <div className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Data formats */}
              <div className="p-6 rounded-lg border border-border bg-background">
                <h3 className="font-semibold text-foreground mb-4">
                  Accepted Formats
                </h3>
                <p className="text-sm text-foreground-muted mb-4">
                  We accept ECGs in both electronic and paper formats, managing
                  database storage and retrieval to support endpoint
                  determination and serial comparisons.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["XML (FDA/HL7 aECG)", "SCP-ECG", "DICOM", "PDF", "Paper ECGs"].map(
                    (format) => (
                      <span
                        key={format}
                        className="px-2 py-1 text-xs rounded bg-primary-muted text-primary"
                      >
                        {format}
                      </span>
                    )
                  )}
                </div>
              </div>

              {/* Testimonial */}
              <div className="p-6 rounded-lg border border-primary/20 bg-primary-muted">
                <blockquote className="text-foreground italic">
                  &ldquo;Any problems addressed and sorted promptly. No complaints.&rdquo;
                </blockquote>
                <p className="mt-2 text-sm text-foreground-muted">
                  — Trial Partner Feedback
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training link */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="section-container">
          <div className="p-8 rounded-lg border border-primary/20 bg-primary-muted">
            <div className="grid gap-8 lg:grid-cols-2 items-center">
              <div>
                <h2 className="text-xl font-bold text-foreground">
                  Training &amp; Resources
                </h2>
                <p className="mt-2 text-foreground-muted">
                  {trainingResources.intro} We provide online guides, video
                  tutorials, and personalised training for trial staff.
                </p>
              </div>
              <div className="flex lg:justify-end">
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
            <h2 className="text-2xl font-bold text-foreground">Work With Us</h2>
            <p className="mt-4 text-foreground-muted">
              For enquiries about using the ECG Core Lab for your clinical trial
              or research study, please contact us.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <Button>
                  Contact Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/services/licensing">
                <Button variant="secondary">Licensing</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
