import { Hero } from "@/components/sections";
import { ProgramShowcase } from "@/components/sections/program-showcase";
import { GlasgowProgramPreview } from "@/components/sections/glasgow-program-preview";
import { CoreLabPreview } from "@/components/sections/core-lab-preview";
import { PublicationsPreview } from "@/components/sections/publications-preview";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProgramShowcase />
      <GlasgowProgramPreview />
      <CoreLabPreview />
      <PublicationsPreview />
    </>
  );
}
