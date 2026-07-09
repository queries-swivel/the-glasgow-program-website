import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin, Calendar, Award } from "lucide-react";
import { Button, SectionHeading } from "@/components/ui";
import {
  siteConfig,
  researchGroup,
  history,
  teamMembers,
} from "@/lib/constants";

export const metadata: Metadata = {
  title: "Research",
  description:
    "The Electrocardiology Section at the University of Glasgow — over 50 years of research into automated ECG interpretation.",
};

export default function ResearchPage() {
  const professorMacfarlane = teamMembers[0];

  return (
    <div className="pt-20 lg:pt-24">
      {/* Header */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="section-container">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-sm text-foreground-muted mb-4">
              <Link
                href={siteConfig.links.robertsonCentre}
                className="hover:text-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Robertson Centre for Biostatistics
              </Link>
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Electrocardiology Section
            </h1>

            <p className="mt-6 text-xl text-foreground-muted">
              {history.intro}
            </p>

            <div className="mt-8 flex flex-wrap gap-6 text-sm">
              <div className="flex items-center gap-2 text-foreground-muted">
                <Calendar className="h-4 w-4 text-primary" />
                <span>Over 50 years of research</span>
              </div>
              <div className="flex items-center gap-2 text-foreground-muted">
                <MapPin className="h-4 w-4 text-primary" />
                <span>{siteConfig.location}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Focus */}
      <section className="py-16 lg:py-20 bg-surface">
        <div className="section-container">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold text-foreground">
                Research Focus
              </h2>
              <p className="mt-4 text-foreground-muted">
                The Section&rsquo;s work spans two main areas: research into automated
                ECG diagnosis techniques (the Glasgow Program) and ECG Core
                Laboratory services for clinical trials. Both maintain ISO
                9001:2015 certification.
              </p>

              <ul className="mt-8 space-y-4">
                {researchGroup.focus.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/program">
                  <Button>
                    The Glasgow Program
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/services/core-lab">
                  <Button variant="secondary">ECG Core Lab</Button>
                </Link>
              </div>
            </div>

            {/* Certifications */}
            <div className="space-y-4">
              {researchGroup.certifications.map((cert) => (
                <div
                  key={cert.name}
                  className="p-6 rounded-lg border border-border bg-background"
                >
                  <div className="font-semibold text-foreground">
                    {cert.name}
                  </div>
                  <p className="mt-1 text-sm text-foreground-muted">
                    {cert.description}
                  </p>
                  {'since' in cert && (cert as { since?: string }).since && (
                    <p className="mt-2 text-xs text-primary">
                      Certified since {cert.since}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="section-container">
          <h2 className="text-2xl font-bold text-foreground mb-8">
            Leadership
          </h2>

          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2 p-8 rounded-lg border border-border bg-surface">
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="shrink-0">
                  <div className="w-32 h-32 rounded-lg bg-primary-muted flex items-center justify-center text-primary text-4xl font-bold">
                    PM
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {professorMacfarlane.name}
                  </h3>
                  <p className="text-sm text-primary">
                    {professorMacfarlane.titles}
                  </p>
                  <p className="text-foreground-muted">
                    {professorMacfarlane.role}
                  </p>
                  <p className="mt-4 text-foreground-muted">
                    {professorMacfarlane.bio}
                  </p>
                </div>
              </div>

              {professorMacfarlane.achievements?.length ? (
                <div className="mt-6 pt-6 border-t border-border">
                  <h4 className="font-medium text-foreground mb-3">
                    Honours & Recognition
                  </h4>
                  <ul className="space-y-2">
                    {professorMacfarlane.achievements?.slice(0, 4).map((achievement) => (
                      <li
                        key={achievement}
                        className="flex items-start gap-2 text-sm"
                      >
                        <Award className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        <span className="text-foreground-muted">
                          {achievement}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {professorMacfarlane.email ? (
                <div className="mt-6 pt-6 border-t border-border">
                  <a
                    href={`mailto:${professorMacfarlane.email}`}
                    className="text-sm text-primary hover:underline"
                  >
                    {professorMacfarlane.email}
                  </a>
                </div>
              ) : null}
            </div>

            <div className="space-y-4">
              {teamMembers.slice(1).map((member) => (
                <div
                  key={member.name}
                  className="p-4 rounded-lg border border-border bg-surface"
                >
                  <div className="font-medium text-foreground">{member.name}</div>
                  <div className="text-sm text-foreground-muted">
                    {member.role}
                  </div>
                </div>
              ))}

              <Link href="/team" className="block mt-4">
                <Button variant="ghost" className="w-full">
                  View Full Team
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section
        id="history"
        className="py-16 lg:py-20 bg-background-alt scroll-mt-24"
      >
        <div className="section-container">
          <SectionHeading
            title="History"
            subtitle="From early cardiology research at Glasgow Royal Infirmary to international adoption of the Glasgow Program."
          />

          <div className="mt-12 relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

            <div className="space-y-8">
              {history.timeline.map((event, index) => (
                <div
                  key={event.year}
                  className={`relative flex flex-col md:flex-row gap-4 md:gap-8 ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary border-4 border-background-alt -translate-x-1.5 md:-translate-x-1.5 mt-1" />

                  {/* Content */}
                  <div
                    className={`ml-12 md:ml-0 md:w-1/2 ${
                      index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                    }`}
                  >
                    <div className="p-6 rounded-lg border border-border bg-surface">
                      <div className="text-sm font-medium text-primary">
                        {event.year}
                      </div>
                      <h3 className="mt-1 font-semibold text-foreground">
                        {event.title}
                      </h3>
                      <p className="mt-2 text-sm text-foreground-muted">
                        {event.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 lg:py-20 bg-surface">
        <div className="section-container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-foreground">
              Contact the Section
            </h2>
            <p className="mt-4 text-foreground-muted">
              For enquiries about research collaboration, clinical trials
              support, or licensing the Glasgow Program.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <Button>
                  Get in Touch
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
