"use client";

import { useState } from "react";
import { Button } from "@/components/ui";
import { licensingInfo } from "@/lib/constants";

const enquiryTypes = [
  { value: "clinical-trials", label: "Clinical Trials Support" },
  { value: "licensing", label: "Licensing Enquiry" },
  { value: "research", label: "Research Collaboration" },
  { value: "training", label: "Training Request" },
  { value: "other", label: "Other" },
];

const fieldClass =
  "w-full rounded-md border border-border bg-surface px-4 py-2.5 text-foreground placeholder:text-foreground-muted focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary";
const labelClass = "block text-sm font-medium text-foreground mb-2";

/**
 * Contact form. With no server backend wired up, submission composes a
 * pre-filled email to the Section (mailto) so an enquiry is never silently
 * lost.
 *
 * TODO(backend): replace the mailto compose with a POST to a Next.js API
 * route (app/api/contact/route.ts) that sends via the University of Glasgow
 * SMTP relay — keeps enquiries in-house for GDPR. Add spam protection
 * (honeypot / rate-limit / Cloudflare Turnstile) at the same time.
 */
export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const firstName = String(data.get("firstName") ?? "").trim();
    const lastName = String(data.get("lastName") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const organisation = String(data.get("organisation") ?? "").trim();
    const interest = String(data.get("interest") ?? "");
    const message = String(data.get("message") ?? "").trim();
    const typeLabel =
      enquiryTypes.find((t) => t.value === interest)?.label ?? "Enquiry";

    const subject = `[${typeLabel}] Website enquiry from ${firstName} ${lastName}`;
    const body = [
      `Name: ${firstName} ${lastName}`,
      `Email: ${email}`,
      organisation ? `Organisation: ${organisation}` : "",
      `Enquiry type: ${typeLabel}`,
      "",
      message,
    ]
      .filter(Boolean)
      .join("\n");

    window.location.href = `mailto:${licensingInfo.contact.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <fieldset className="m-0 space-y-6 border-0 p-0">
        <legend className="sr-only">Contact the Electrocardiology Section</legend>

        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label htmlFor="firstName" className={labelClass}>
              First name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              required
              aria-required="true"
              autoComplete="given-name"
              className={fieldClass}
              placeholder="John"
            />
          </div>
          <div>
            <label htmlFor="lastName" className={labelClass}>
              Last name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              required
              aria-required="true"
              autoComplete="family-name"
              className={fieldClass}
              placeholder="Smith"
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className={labelClass}>
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            aria-required="true"
            autoComplete="email"
            className={fieldClass}
            placeholder="john.smith@institution.ac.uk"
          />
        </div>

        <div>
          <label htmlFor="organisation" className={labelClass}>
            Organisation <span className="text-foreground-muted">(optional)</span>
          </label>
          <input
            type="text"
            id="organisation"
            name="organisation"
            autoComplete="organization"
            className={fieldClass}
            placeholder="University / Company name"
          />
        </div>

        <div>
          <label htmlFor="interest" className={labelClass}>
            Enquiry type
          </label>
          <select
            id="interest"
            name="interest"
            required
            aria-required="true"
            defaultValue=""
            className={fieldClass}
          >
            <option value="" disabled>
              Select an option
            </option>
            {enquiryTypes.map((t) => (
              <option key={t.value} value={t.value}>
                {t.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="message" className={labelClass}>
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            aria-required="true"
            aria-describedby="contact-form-help"
            className={`${fieldClass} resize-none`}
            placeholder="Please describe your enquiry..."
          />
        </div>
      </fieldset>

      <Button type="submit" className="w-full">
        Send Message
      </Button>

      <p id="contact-form-help" className="text-xs text-foreground-muted">
        Submitting opens your email application with the message pre-addressed to{" "}
        <a
          href={`mailto:${licensingInfo.contact.email}`}
          className="text-primary hover:underline"
        >
          {licensingInfo.contact.email}
        </a>
        .
      </p>

      {submitted && (
        <p role="status" className="text-sm text-primary">
          Your email application should have opened with your enquiry ready to
          send. If it didn&apos;t, please email {licensingInfo.contact.email}{" "}
          directly.
        </p>
      )}
    </form>
  );
}
