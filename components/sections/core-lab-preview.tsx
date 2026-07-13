"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Beaker } from "lucide-react";
import { Button, SectionHeading } from "@/components/ui";
import { coreLabServices, researchGroup } from "@/lib/constants";

export function CoreLabPreview() {
  return (
    <section className="py-20 lg:py-28 bg-background-alt">
      <div className="section-container">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
          {/* Studies */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="order-2 lg:order-1"
          >
            <div className="rounded-lg border border-border bg-surface p-8">
              <div className="flex items-center gap-2 mb-6">
                <Beaker className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-semibold text-foreground">
                  Current & Recent Studies
                </h3>
              </div>

              <div className="space-y-4">
                {["Epidemiological", "Collaborative", "COVID-Related"].map(
                  (type) => {
                    const studies = coreLabServices.currentStudies.filter(
                      (s) => s.type === type
                    );
                    if (studies.length === 0) return null;

                    return (
                      <div key={type}>
                        <div className="text-xs font-medium text-foreground-muted uppercase tracking-wider mb-2">
                          {type}
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {studies.map((study) => (
                            <span
                              key={study.name}
                              className="inline-block px-2 py-1 text-sm bg-primary-muted text-primary rounded"
                            >
                              {study.name}
                            </span>
                          ))}
                        </div>
                      </div>
                    );
                  }
                )}
              </div>
            </div>

            {/* Certification */}
            <div className="mt-6 flex items-start gap-4 p-4 rounded-lg border border-border bg-surface">
              <Shield className="h-8 w-8 text-primary shrink-0" />
              <div>
                <div className="font-medium text-foreground">
                  ISO 9001:2015 Certified
                </div>
                <div className="text-sm text-foreground-muted">
                  Quality management systems certification, assessed annually since 2003.
                  UKAS accredited.
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <span className="text-sm font-medium text-primary">
              Clinical Trials Support
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              ECG Core Laboratory
            </h2>
            <p className="mt-4 text-lg text-foreground-muted">
              {coreLabServices.intro}
            </p>

            <div className="mt-8 space-y-4">
              {coreLabServices.services.slice(0, 4).map((service) => (
                <div key={service.title} className="flex items-start gap-3">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <div>
                    <span className="font-medium text-foreground">
                      {service.title}
                    </span>
                    <span className="text-foreground-muted">
                      {" "}— {service.description}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/services/core-lab">
                <Button>
                  Core Lab &amp; Trials
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/training">
                <Button variant="secondary">Training Resources</Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
