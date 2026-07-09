import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, ExternalLink, FileText } from "lucide-react";
import { Button, SectionHeading } from "@/components/ui";
import {
  glasgowProgram,
  diagnosticCapabilities,
  keyPublications,
  languages,
  licensingInfo,
} from "@/lib/constants";

export const metadata: Metadata = {
  title: "The Glasgow Program",
  description:
    "Automated ECG interpretation software developed at the University of Glasgow, based on over 50 years of research.",
};

export default function ProgramPage() {
  return (
    <div className="pt-20 lg:pt-24">
      {/* Header */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="section-container">
          <div className="max-w-3xl">
            <span className="text-sm font-medium text-primary">
              Research Output
            </span>
            <h1 className="mt-2 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              The Glasgow Program
            </h1>
            <p className="mt-6 text-xl text-foreground-muted">
              {glasgowProgram.intro}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/services/licensing">
                <Button>
                  Licensing Information
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="#validation">
                <Button variant="secondary">Validation Studies</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 lg:py-20 bg-surface">
        <div className="section-container">
          <SectionHeading
            title="Key Features"
            subtitle="Distinctive capabilities developed through decades of research and clinical validation."
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
          <div className="mt-12 p-6 rounded-lg border border-primary/20 bg-primary-muted">
            <h3 className="font-semibold text-foreground">
              Regulatory Compliance
            </h3>
            <div className="mt-4 flex flex-wrap gap-4">
              {glasgowProgram.compliance.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 px-3 py-1 rounded bg-background text-sm"
                >
                  <Check className="h-4 w-4 text-primary" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Diagnostic Capabilities */}
      <section id="capabilities" className="py-16 lg:py-20 bg-background scroll-mt-24">
        <div className="section-container">
          <SectionHeading
            title="Diagnostic Capabilities"
            subtitle="Comprehensive automated analysis spanning rhythm, conduction, ischaemia, and structural abnormalities."
          />

          <div className="mt-12 space-y-12">
            {Object.entries(diagnosticCapabilities).map(([key, category]) => (
              <div key={key}>
                <h3 className="text-lg font-semibold text-foreground mb-6">
                  {category.title}
                </h3>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {category.items.map((item) => (
                    <div
                      key={item.title}
                      className="p-4 rounded-lg border border-border bg-surface"
                    >
                      <h4 className="font-medium text-foreground">
                        {item.title}
                      </h4>
                      <p className="mt-1 text-sm text-foreground-muted">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Validation Studies */}
      <section
        id="validation"
        className="py-16 lg:py-20 bg-surface scroll-mt-24"
      >
        <div className="section-container">
          <SectionHeading
            title="Validation & Research"
            subtitle="The Glasgow Program is based on careful scientific research with numerous peer-reviewed publications."
          />

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {/* Publications */}
            <div className="lg:col-span-2 space-y-4">
              <h3 className="text-lg font-semibold text-foreground">
                Key Publications
              </h3>
              {keyPublications.map((pub) => (
                <div
                  key={pub.title}
                  className="p-4 rounded-lg border border-border bg-background"
                >
                  <div className="flex items-start gap-4">
                    <FileText className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-foreground leading-tight">
                        {pub.title}
                      </h4>
                      <p className="mt-1 text-sm text-foreground-muted">
                        {pub.authors}
                      </p>
                      <p className="text-sm text-foreground-muted">
                        {pub.journal}, {pub.year}
                      </p>
                      {pub.note && (
                        <p className="mt-1 text-xs text-primary">{pub.note}</p>
                      )}
                    </div>
                    {pub.url && (
                      <a
                        href={pub.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shrink-0 p-2 text-foreground-muted hover:text-primary transition-colors"
                        aria-label="View on PubMed"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>
              ))}

              <Link href="/publications">
                <Button variant="secondary" className="mt-4">
                  View All Publications
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            {/* Guidelines contribution */}
            <div className="space-y-6">
              <div className="p-6 rounded-lg border border-primary/20 bg-primary-muted">
                <h3 className="font-semibold text-foreground">
                  Guideline Contributions
                </h3>
                <p className="mt-2 text-sm text-foreground-muted">
                  Research from the Electrocardiology Section has influenced
                  international guidelines for acute myocardial infarction
                  diagnosis, including ESC, ACC, and AHA recommendations for
                  ST-elevation criteria.
                </p>
              </div>

              <div className="p-6 rounded-lg border border-border bg-background">
                <h3 className="font-semibold text-foreground">
                  Paediatric Database
                </h3>
                <p className="mt-2 text-sm text-foreground-muted">
                  The program includes a paediatric ECG database of 1,750
                  healthy children, enabling accurate interpretation from birth
                  through adulthood.
                </p>
              </div>

              <div className="p-6 rounded-lg border border-border bg-background">
                <h3 className="font-semibold text-foreground">
                  Population Studies
                </h3>
                <p className="mt-2 text-sm text-foreground-muted">
                  Extensive research into age, sex, and racial variation in ECG
                  parameters, with criteria adjusted for different populations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Languages */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="section-container">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-2xl font-bold text-foreground">
                Multilingual Support
              </h2>
              <p className="mt-4 text-foreground-muted">
                Diagnostic statements available in {languages.length}+ languages
                to support worldwide deployment.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {languages.map((lang) => (
                <span
                  key={lang}
                  className="px-3 py-1 text-sm rounded border border-border bg-surface text-foreground-muted"
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Licensing CTA */}
      <section className="py-16 lg:py-20 bg-surface">
        <div className="section-container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-foreground">
              Licensing the Glasgow Program
            </h2>
            <p className="mt-4 text-foreground-muted">
              {licensingInfo.intro}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/services/licensing">
                <Button>
                  Licensing Information
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="secondary">Contact Us</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
