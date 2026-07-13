import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  Mail,
  ShieldCheck,
  AlertCircle,
  Cpu,
  FileText,
  Building2,
} from "lucide-react";
import { Button, SectionHeading } from "@/components/ui";
import {
  licensingInfo,
  glasgowProgram,
  languages,
  regulatoryStatus,
  integrationSpec,
  licensingProcess,
  contactRoutes,
  TBC_VALUE,
} from "@/lib/constants";

export const metadata: Metadata = {
  title: "Licensing",
  description:
    "License the Glasgow ECG Program — non-exclusive commercial licensing through the University of Glasgow.",
};

/** Renders a spec value, visibly flagging placeholders the Section must confirm. */
function TbcText({ value }: { value: string }) {
  if (value === TBC_VALUE) {
    return (
      <span className="inline-flex items-center rounded border border-dashed border-border px-1.5 py-0.5 text-xs italic text-foreground-muted">
        {value}
      </span>
    );
  }
  return <span className="text-foreground">{value}</span>;
}

const specGroups = [
  { title: "Input", rows: integrationSpec.input },
  { title: "Output", rows: integrationSpec.output },
  { title: "Platform", rows: integrationSpec.platform },
];

export default function LicensingPage() {
  return (
    <div className="pt-20 lg:pt-24">
      {/* Header */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="section-container">
          <div className="grid gap-12 lg:grid-cols-2 items-start">
            <div>
              <span className="text-sm font-medium text-primary">
                For device manufacturers
              </span>
              <h1 className="mt-2 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                License the Glasgow Program
              </h1>
              <p className="mt-6 text-xl text-foreground-muted">
                {licensingInfo.intro}
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "Non-exclusive commercial licensing",
                  "Available through the University of Glasgow",
                  "Over 50 years of continuous development",
                ].map((point) => (
                  <div key={point} className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-foreground">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Enquiry card — role-based, not a personal inbox */}
            <div className="p-8 rounded-lg border border-primary bg-surface">
              <h2 className="text-lg font-semibold text-foreground">
                Start a licensing enquiry
              </h2>
              <p className="mt-2 text-sm text-foreground-muted">
                Tell us your device class, target markets, and expected volumes,
                and we&apos;ll follow up with the integration datasheet and next
                steps.
              </p>

              <Link href="/contact" className="block mt-6">
                <Button className="w-full">
                  Contact the licensing team
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>

              <p className="mt-4 flex items-center gap-2 text-xs text-foreground-muted">
                <Mail className="h-4 w-4 shrink-0" />
                Dedicated licensing inbox —{" "}
                <span className="italic">to be confirmed</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Regulatory status */}
      <section className="py-16 lg:py-20 bg-surface">
        <div className="section-container">
          <SectionHeading
            title="Regulatory status"
            subtitle="What the Glasgow Program is built to — and where confirmation is still needed before you rely on it."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="p-6 rounded-lg border border-border bg-background">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-primary" />
                <h3 className="font-semibold text-foreground">
                  Standards &amp; quality
                </h3>
              </div>
              <ul className="mt-4 space-y-3">
                {regulatoryStatus.standards.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 rounded-lg border border-border bg-background">
              <div className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-primary" />
                <h3 className="font-semibold text-foreground">
                  Market clearances
                </h3>
              </div>
              <ul className="mt-4 space-y-3">
                {regulatoryStatus.clearances.map((c) => (
                  <li
                    key={c.market}
                    className="flex items-center justify-between gap-3 text-sm"
                  >
                    <span className="text-foreground">{c.market}</span>
                    <TbcText value={c.status} />
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="mt-6 max-w-3xl text-sm text-foreground-muted">
            {regulatoryStatus.note}
          </p>
        </div>
      </section>

      {/* Integration at a glance */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="section-container">
          <SectionHeading
            title="Integration at a glance"
            subtitle="What a manufacturer needs to embed the Glasgow Program. Items marked “to be confirmed” will be finalised with the Section."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {specGroups.map((group) => (
              <div
                key={group.title}
                className="p-6 rounded-lg border border-border bg-surface"
              >
                <div className="flex items-center gap-2">
                  <Cpu className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold text-foreground">
                    {group.title}
                  </h3>
                </div>
                <dl className="mt-4 space-y-3">
                  {group.rows.map((row) => (
                    <div key={row.label}>
                      <dt className="text-xs uppercase tracking-wide text-foreground-muted">
                        {row.label}
                      </dt>
                      <dd className="mt-0.5 text-sm">
                        <TbcText value={row.value} />
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </div>

          <div className="mt-8 flex items-center gap-3 rounded-lg border border-dashed border-border bg-surface p-4">
            <FileText className="h-5 w-5 text-foreground-muted shrink-0" />
            <span className="text-sm text-foreground-muted">
              One-page integration datasheet (PDF) —{" "}
              <span className="italic">coming soon</span>.
            </span>
          </div>
        </div>
      </section>

      {/* How licensing works */}
      <section className="py-16 lg:py-20 bg-surface">
        <div className="section-container">
          <SectionHeading
            title="How licensing works"
            subtitle="A non-exclusive licence, executed through the University of Glasgow."
          />

          <ol className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {licensingProcess.map((stage, i) => (
              <li
                key={stage.step}
                className="p-6 rounded-lg border border-border bg-background"
              >
                <div className="font-mono text-sm text-primary">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-2 font-semibold text-foreground">
                  {stage.step}
                </h3>
                <p className="mt-2 text-sm text-foreground-muted">
                  {stage.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Program features */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="section-container">
          <SectionHeading
            title="What you license"
            subtitle="The Glasgow Program provides comprehensive automated ECG interpretation."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {glasgowProgram.keyFeatures.map((feature) => (
              <div
                key={feature.title}
                className="p-6 rounded-lg border border-border bg-surface"
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
        </div>
      </section>

      {/* Manufacturers */}
      <section className="py-16 lg:py-20 bg-surface">
        <div className="section-container">
          <SectionHeading
            title="Manufacturers using the Glasgow Program"
            subtitle="Licensed to medical device manufacturers internationally."
          />

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {licensingInfo.currentLicensees.map((licensee) => (
              <div
                key={licensee.name}
                className="flex flex-col rounded-lg border border-border bg-background p-5"
              >
                <div className="font-semibold tracking-tight text-foreground">
                  {licensee.name}
                </div>
                <div className="mt-1 text-sm text-foreground-muted">
                  {licensee.description}
                </div>
              </div>
            ))}
          </div>

          <p className="mt-6 max-w-3xl text-sm text-foreground-muted">
            Manufacturer logos will be shown here with permission; regions and
            device categories per licensee are{" "}
            <span className="italic">to be confirmed</span>.
          </p>
        </div>
      </section>

      {/* Languages */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="section-container">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-2xl font-bold text-foreground">
                Multilingual output
              </h2>
              <p className="mt-4 text-foreground-muted">
                Diagnostic statements are available in {languages.length}+
                languages, supporting international deployment of licensed
                devices.
              </p>
              <p className="mt-4 text-foreground-muted">
                Language options include regional variants (UK and US English,
                Iberian and Brazilian Portuguese) for appropriate terminology in
                each market.
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

      {/* Contact routes */}
      <section className="py-16 lg:py-20 bg-surface">
        <div className="section-container">
          <SectionHeading
            title="Talk to the right team"
            subtitle="Dedicated routes for licensing, collaboration, and core-lab work. Inbox addresses to be confirmed."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {contactRoutes.map((route) => (
              <div
                key={route.title}
                className="flex flex-col rounded-lg border border-border bg-background p-6"
              >
                <div className="flex items-center gap-2">
                  <Building2 className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold text-foreground">
                    {route.title}
                  </h3>
                </div>
                <p className="mt-2 flex-1 text-sm text-foreground-muted">
                  {route.description}
                </p>
                <div className="mt-4 flex items-center gap-2 text-sm">
                  <Mail className="h-4 w-4 text-foreground-muted shrink-0" />
                  <TbcText value={route.email} />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link href="/contact">
              <Button>
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
