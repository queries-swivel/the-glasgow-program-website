import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  PlayCircle,
  FileText,
  Phone,
  Monitor,
  BookOpen,
  Users,
  ExternalLink,
} from "lucide-react";
import { Button, SectionHeading } from "@/components/ui";
import { trainingResources, externalResources, keyPublications } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Training & Resources",
  description:
    "ECG recording training and support resources from the University of Glasgow Electrocardiology Section.",
};

const resourceIcons: Record<string, typeof Monitor> = {
  Online: Monitor,
  "On-site/Remote": Users,
  Print: BookOpen,
  Phone: Phone,
};

export default function TrainingPage() {
  // Get electrode placement publication
  const electrodePlacementPub = keyPublications.find((p) =>
    p.title.toLowerCase().includes("electrode")
  );

  return (
    <div className="pt-20 lg:pt-24">
      {/* Header */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="section-container">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Training & Resources
            </h1>
            <p className="mt-6 text-xl text-foreground-muted">
              {trainingResources.intro}
            </p>
          </div>
        </div>
      </section>

      {/* ECG Recording Guide */}
      <section className="py-16 lg:py-20 bg-surface">
        <div className="section-container">
          <div className="grid gap-12 lg:grid-cols-2 items-start">
            {/* Video Guide Card */}
            <div className="p-8 rounded-lg border border-primary bg-background">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-primary-muted">
                  <PlayCircle className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-foreground">
                    ECG Recording Guide
                  </h2>
                  <p className="text-sm text-foreground-muted">
                    Step-by-step instruction with video
                  </p>
                </div>
              </div>

              <p className="text-foreground-muted mb-6">
                A comprehensive online guide to recording a 12-lead ECG,
                supplemented with video clips demonstrating correct technique at
                each step of the process.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-primary-muted text-primary flex items-center justify-center text-sm font-medium">
                    1
                  </div>
                  <div>
                    <div className="font-medium text-foreground">
                      Patient Preparation
                    </div>
                    <div className="text-sm text-foreground-muted">
                      Positioning, skin preparation, and patient communication
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-primary-muted text-primary flex items-center justify-center text-sm font-medium">
                    2
                  </div>
                  <div>
                    <div className="font-medium text-foreground">
                      Limb Electrode Placement
                    </div>
                    <div className="text-sm text-foreground-muted">
                      Correct anatomical positions for limb leads
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-primary-muted text-primary flex items-center justify-center text-sm font-medium">
                    3
                  </div>
                  <div>
                    <div className="font-medium text-foreground">
                      Precordial Electrode Placement
                    </div>
                    <div className="text-sm text-foreground-muted">
                      V1-V6 positioning including special considerations for
                      women
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-primary-muted text-primary flex items-center justify-center text-sm font-medium">
                    4
                  </div>
                  <div>
                    <div className="font-medium text-foreground">
                      Recording & Quality Check
                    </div>
                    <div className="text-sm text-foreground-muted">
                      Signal quality assessment and troubleshooting
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Link href="/contact">
                  <Button>
                    Request Access
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Best Practice */}
            <div className="space-y-6">
              <div className="p-6 rounded-lg border border-border bg-background">
                <h3 className="font-semibold text-foreground mb-4">
                  Best Practice Guidance
                </h3>
                <p className="text-sm text-foreground-muted mb-4">
                  Tips and guidance demonstrating best practice to reduce errors
                  before, during, and after ECG recording.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-sm">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    <span className="text-foreground-muted">
                      Common sources of artefact and how to avoid them
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    <span className="text-foreground-muted">
                      Patient positioning for optimal signal quality
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    <span className="text-foreground-muted">
                      Electrode lead reversal detection and correction
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    <span className="text-foreground-muted">
                      Documentation requirements for clinical trials
                    </span>
                  </li>
                </ul>
              </div>

              {/* Research on electrode placement */}
              {electrodePlacementPub && (
                <div className="p-6 rounded-lg border border-primary/20 bg-primary-muted">
                  <h3 className="font-semibold text-foreground mb-2">
                    Research on Electrode Placement
                  </h3>
                  <p className="text-sm text-foreground-muted mb-4">
                    Our research into precordial electrode placement in women
                    has demonstrated that anatomically correct positioning
                    produces more consistent measurements than the traditional
                    approach of placing electrodes under breast tissue.
                  </p>
                  {electrodePlacementPub.url && (
                    <a
                      href={electrodePlacementPub.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
                    >
                      Read the publication
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Training Options */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="section-container">
          <SectionHeading
            title="Training Options"
            subtitle="Multiple formats available to support clinical trial nurses and healthcare professionals."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {trainingResources.offerings.map((offering) => {
              const Icon = resourceIcons[offering.type] || FileText;

              return (
                <div
                  key={offering.title}
                  className="p-6 rounded-lg border border-border bg-surface"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-md bg-primary-muted">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-xs font-medium text-foreground-muted uppercase tracking-wider">
                      {offering.type}
                    </span>
                  </div>
                  <h3 className="font-semibold text-foreground">
                    {offering.title}
                  </h3>
                  <p className="mt-2 text-sm text-foreground-muted">
                    {offering.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* External Resources */}
      <section className="py-16 lg:py-20 bg-surface">
        <div className="section-container">
          <SectionHeading
            title="Educational Resources"
            subtitle="External resources for ECG education and reference."
          />

          <div className="mt-12">
            {externalResources
              .filter((cat) => cat.category === "Educational Resources")
              .map((category) => (
                <div
                  key={category.category}
                  className="grid gap-4 md:grid-cols-2 lg:grid-cols-4"
                >
                  {category.links.map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 rounded-lg border border-border bg-background hover:border-primary transition-colors flex items-center justify-between"
                    >
                      <span className="font-medium text-foreground text-sm">
                        {link.name}
                      </span>
                      <ExternalLink className="h-4 w-4 text-foreground-muted" />
                    </a>
                  ))}
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="section-container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-foreground">
              Request Training
            </h2>
            <p className="mt-4 text-foreground-muted">
              For personalised training courses or access to our online
              resources, please contact the Electrocardiology Section.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <Button>
                  Contact Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/services/core-lab">
                <Button variant="secondary">ECG Core Lab &amp; Trials</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
