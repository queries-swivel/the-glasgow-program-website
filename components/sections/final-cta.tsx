"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui";

export function FinalCTA() {
  return (
    <section className="bg-surface py-20 lg:py-32">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-2xl border border-primary/20 bg-gradient-to-br from-primary-muted to-background p-8 lg:p-16"
        >
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
            <svg
              viewBox="0 0 400 400"
              className="w-full h-full"
              fill="none"
            >
              <path
                d="M0 200 L100 200 L110 200 L115 190 L120 200 L160 200 L170 100 L180 300 L190 150 L200 200 L260 200 L270 190 L280 210 L290 200 L400 200"
                stroke="var(--color-primary)"
                strokeWidth="2"
                opacity="0.5"
              />
            </svg>
          </div>

          <div className="relative z-10 max-w-2xl">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl tracking-tight">
              Bring validated ECG intelligence to your platform
            </h2>
            <p className="mt-6 text-lg text-foreground-muted">
              Whether you&apos;re an OEM, healthcare provider, researcher, or AI developer
              — the Glasgow ECG Program is ready to power your cardiac diagnostics.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button size="lg">
                  Contact Licensing Team
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/program">
                <Button variant="secondary" size="lg">
                  Explore the Program
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
