import { siteConfig } from "@/lib/constants";

export function OrganizationSchema() {
  const sameAs = [
    siteConfig.links.universityMain,
    siteConfig.links.robertsonCentre,
    siteConfig.links.schoolOfHealth,
  ].filter(Boolean);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "University of Glasgow Electrocardiology Group",
    alternateName: "Glasgow ECG Program",
    url: siteConfig.url,
    logo: `${siteConfig.url}/images/uofg-logo.svg`,
    description: siteConfig.description,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Glasgow",
      addressCountry: "United Kingdom",
    },
    parentOrganization: {
      "@type": "EducationalOrganization",
      name: "University of Glasgow",
    },
    sameAs,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function SoftwareApplicationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Glasgow ECG Program",
    applicationCategory: "MedicalApplication",
    operatingSystem: "Cross-platform",
    description: siteConfig.description,
    publisher: {
      "@type": "Organization",
      name: "University of Glasgow Electrocardiology Group",
    },
    featureList: [
      "Rhythm & Arrhythmia Detection",
      "Conduction Analysis",
      "Ischaemia Detection",
      "Structural Abnormality Recognition",
      "12-Lead ECG Interpretation",
      "Multiple Output Formats",
      "AI-Ready Structured Data",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
