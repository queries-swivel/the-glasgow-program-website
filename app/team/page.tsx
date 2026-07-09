import type { Metadata } from "next";
import { Mail, Phone } from "lucide-react";
import { teamMembers } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Team",
  description:
    "Meet the University of Glasgow Electrocardiology Section — the researchers behind the Glasgow ECG Program.",
};

function getInitials(name: string) {
  return name
    .replace(/^(Professor|Prof\.?|Dr\.?)\s+/i, "")
    .split(" ")
    .filter(Boolean)
    .map((part) => part[0])
    .join("");
}

function TeamMemberCard({
  member,
  primary = false,
}: {
  member: typeof teamMembers[0];
  primary?: boolean;
}) {
  return (
    <div
      className={`p-6 rounded-lg border border-border bg-surface flex flex-col gap-4 ${
        primary ? "ring-1 ring-primary/20" : ""
      }`}
    >
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-full bg-primary-muted flex items-center justify-center shrink-0">
          <span className="text-base font-bold text-primary">
            {getInitials(member.name)}
          </span>
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-base font-semibold text-foreground leading-snug">
            {member.name}
          </h3>
          {member.titles && (
            <p className="text-sm text-primary mt-0.5">{member.titles}</p>
          )}
          {member.role && (
            <p className="text-sm text-foreground-muted">{member.role}</p>
          )}
          {member.secondaryRole && (
            <p className="text-xs text-foreground-muted">{member.secondaryRole}</p>
          )}
        </div>
      </div>

      <p className="text-sm text-foreground-muted leading-relaxed">{member.bio}</p>

      {member.achievements && member.achievements.length > 0 && (
        <ul className="space-y-1.5 border-t border-border pt-4">
          {member.achievements.map((achievement) => (
            <li key={achievement} className="flex gap-2 text-xs text-foreground-muted">
              <span className="text-primary/60 shrink-0 mt-px">—</span>
              <span>{achievement}</span>
            </li>
          ))}
        </ul>
      )}

      {(member.email || member.phone) && (
        <div className="flex flex-col gap-1 pt-3 border-t border-border">
          {member.email && (
            <a
              href={`mailto:${member.email}`}
              className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
            >
              <Mail className="h-3.5 w-3.5 shrink-0" />
              {member.email}
            </a>
          )}
          {member.phone && (
            <p className="inline-flex items-center gap-2 text-sm text-foreground-muted">
              <Phone className="h-3.5 w-3.5 shrink-0" />
              {member.phone}
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export default function TeamPage() {
  const [peter, derek, ...rest] = teamMembers;

  return (
    <div className="pt-20 lg:pt-24">
      {/* Header */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="section-container">
          <div className="max-w-3xl">
            <span className="text-sm font-medium text-primary">
              The Electrocardiology Section
            </span>
            <h1 className="mt-2 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Our Team
            </h1>
            <p className="mt-6 text-xl text-foreground-muted">
              Based at Glasgow Royal Infirmary, the Electrocardiology Section
              has been advancing computerised ECG interpretation for over 50 years.
            </p>
          </div>
        </div>
      </section>

      {/* All team members — one unified section */}
      <section className="py-12 lg:py-16 bg-surface">
        <div className="section-container">
          {/* Senior pair — wider cards, more room for content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <TeamMemberCard member={peter} primary />
            <TeamMemberCard member={derek} />
          </div>

          {/* Rest of the team — naturally narrower in 4-col */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {rest.map((member) => (
              <TeamMemberCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
