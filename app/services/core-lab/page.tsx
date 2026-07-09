import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Shield, Check, Beaker } from "lucide-react";
import { Button, SectionHeading } from "@/components/ui";
import { coreLabServices, researchGroup, teamMembers } from "@/lib/constants";

export const metadata: Metadata = {
  title: "ECG Core Lab",
  description:
    "ISO 9001:2015 certified ECG Core Laboratory providing centralised ECG processing for clinical trials.",
};

export default function CoreLabPage() {
  return (
    <div className="pt-20 lg:pt-24">
      {/* Header */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="section-container">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <Link
                href="/services"
                className="text-sm text-foreground-muted hover:text-primary transition-colors"
              >
                Services
              </Link>
              <h1 className="mt-2 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                ECG Core Laboratory
              </h1>
              <p className="mt-6 text-xl text-foreground-muted">
                {coreLabServices.intro}
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
                  {'email' in teamMembers[0] && (
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
                    Administrative & Data Queries
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

      {/* Services */}
      <section className="py-16 lg:py-20 bg-surface">
        <div className="section-container">
          <SectionHeading
            title="Core Lab Services"
            subtitle="Comprehensive ECG processing and analysis for clinical trials."
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

      {/* Current Studies */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="section-container">
          <SectionHeading
            title="Current & Recent Studies"
            subtitle="The Core Lab actively supports national and international clinical trials and epidemiological studies."
          />

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {["Epidemiological", "Collaborative", "COVID-Related"].map(
              (type) => {
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
              }
            )}
          </div>
        </div>
      </section>

      {/* What We Provide */}
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
              {/* Data Formats */}
              <div className="p-6 rounded-lg border border-border bg-background">
                <h3 className="font-semibold text-foreground mb-4">
                  Accepted Formats
                </h3>
                <p className="text-sm text-foreground-muted mb-4">
                  We accept ECGs in both electronic and paper formats, managing
                  database storage and retrieval systems to support endpoint
                  determination and serial ECG comparisons.
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "XML (FDA/HL7 aECG)",
                    "SCP-ECG",
                    "DICOM",
                    "PDF",
                    "Paper ECGs",
                  ].map((format) => (
                    <span
                      key={format}
                      className="px-2 py-1 text-xs rounded bg-primary-muted text-primary"
                    >
                      {format}
                    </span>
                  ))}
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

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="section-container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-foreground">
              Work With Us
            </h2>
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
              <Link href="/training">
                <Button variant="secondary">Training Resources</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
