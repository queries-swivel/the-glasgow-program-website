"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { Button, SectionHeading } from "@/components/ui";
import { glasgowProgram, licensingInfo } from "@/lib/constants";

export function GlasgowProgramPreview() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="section-container">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-sm font-medium text-primary">
              Flagship software
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              The Glasgow Program (Uni-G)
            </h2>
            <p className="mt-4 text-lg text-foreground-muted">
              {glasgowProgram.intro}
            </p>

            <ul className="mt-8 space-y-3">
              {glasgowProgram.keyFeatures.slice(0, 4).map((feature) => (
                <li key={feature.title} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium text-foreground">
                      {feature.title}
                    </span>
                    <span className="text-foreground-muted">
                      {" "}— {feature.description}
                    </span>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/program">
                <Button>
                  Explore the Program
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/services/licensing">
                <Button variant="secondary">Licensing Information</Button>
              </Link>
            </div>

            <p className="mt-6 text-sm text-foreground-muted">
              Actively developed at the University of Glasgow, including ongoing
              AI research by Dr Ioannis Valasakis (PhD, King&rsquo;s College
              London).{" "}
              <Link href="/team" className="text-primary hover:underline">
                Meet the team
              </Link>
              .
            </p>
          </motion.div>

          {/* Licensees */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-lg border border-border bg-surface p-8"
          >
            <h3 className="text-lg font-semibold text-foreground">
              Adopted by Leading Manufacturers
            </h3>
            <p className="mt-2 text-sm text-foreground-muted">
              The Glasgow Program is licensed to medical device manufacturers internationally
              through the University of Glasgow.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-4">
              {licensingInfo.currentLicensees.slice(0, 8).map((licensee) => (
                <div
                  key={licensee.name}
                  className="text-sm"
                >
                  <div className="font-medium text-foreground">
                    {licensee.name}
                  </div>
                  {licensee.since && (
                    <div className="text-xs text-foreground-muted">
                      Since {licensee.since}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-border">
              <div className="text-sm text-foreground-muted">
                <span className="font-medium text-foreground">Compliance:</span>{" "}
                {glasgowProgram.compliance.join(" · ")}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
