"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button, SectionHeading, TwelveLeadECG } from "@/components/ui";

/**
 * Home "product moment" — shows what the Glasgow Program actually reads: a real
 * 12-lead ECG rendered to clinical scale. Leads with the software, not the
 * research group. The full showcase with feature detail lives on /program.
 */
export function ProgramShowcase() {
  return (
    <section className="py-20 lg:py-28 bg-surface">
      <div className="section-container">
        <SectionHeading
          badge="The 12-lead ECG"
          title="What the Glasgow Program reads"
          subtitle="A real recording, rendered to scale in the browser — the standard 3×4 layout with a lead-II rhythm strip, at 25 mm/s and 10 mm/mV. This is the signal Uni-G analyses beat by beat."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10 overflow-hidden rounded-lg border border-border bg-surface p-3 shadow-soft sm:p-5"
        >
          <TwelveLeadECG src="/data/ecg-ptbxl-00351-afib.json" />
        </motion.div>

        <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <p className="max-w-2xl text-xs text-foreground-muted">
            Example recording — atrial fibrillation — from PTB-XL (Wagner et&nbsp;al.,{" "}
            <span className="italic">Scientific Data</span> 2020, record 00351), used
            under CC&nbsp;BY&nbsp;4.0 via PhysioNet. Shown to illustrate the 12-lead
            signal; the interpretation label is the dataset&rsquo;s own, not output of
            the Glasgow Program.
          </p>
          <Link href="/program" className="shrink-0">
            <Button variant="secondary">
              Explore the Program
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
