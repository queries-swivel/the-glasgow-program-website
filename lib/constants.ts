export const siteConfig = {
  name: "University of Glasgow Electrocardiology",
  shortName: "Glasgow ECG",
  description:
    "The Electrocardiology Section at the University of Glasgow — over 50 years of research into automated ECG interpretation, clinical trials support, and the internationally adopted Glasgow Program.",
  url: "https://glasgowecg.com",
  ogImage: "/images/og-image.png",
  institution: "University of Glasgow",
  department: "Robertson Centre for Biostatistics",
  school: "School of Health & Wellbeing",
  location: "Glasgow Royal Infirmary",
  address: {
    building: "New Lister Building, Level 1",
    street: "10 Alexandra Parade",
    city: "Glasgow",
    postcode: "G31 2ER",
    country: "Scotland, UK",
  },
  links: {
    universityMain: "https://www.gla.ac.uk",
    robertsonCentre: "https://www.gla.ac.uk/schools/healthwellbeing/research/robertsoncentreforbiostatistics/",
    schoolOfHealth: "https://www.gla.ac.uk/schools/healthwellbeing/",
  },
};

export type TeamMember = {
  name: string;
  role: string;
  image?: string;
  email?: string;
  phone?: string;
  bio: string;
  achievements?: string[];
  research?: string[];
  titles?: string;
  secondaryRole?: string;
};

export const navigation = {
  main: [
    { name: "About", href: "#footer" },
    { name: "Research", href: "/research" },
    { name: "Glasgow Program", href: "/program" },
    { name: "Services", href: "/services" },
    { name: "Publications", href: "/publications" },
    { name: "Training", href: "/training" },
    { name: "Team", href: "/team" },
  ],
  solutions: [
    {
      name: "Device Manufacturers",
      href: "/program",
      description: "Embed validated ECG interpretation in monitors, carts, and wearables.",
    },
    {
      name: "Healthcare Providers",
      href: "/services/core-lab",
      description: "Quality-assured ECG workflows and reporting services.",
    },
    {
      name: "Clinical Research & Trials",
      href: "/services/clinical-trials",
      description: "ISO 9001:2015 ECG Core Lab services for multicentre studies.",
    },
    {
      name: "AI & Data Partners",
      href: "/research",
      description: "Collaborate on annotated ECG datasets and methodology development.",
    },
  ],
  services: [
    { name: "ECG Core Lab", href: "/services/core-lab", description: "Centralised ECG processing for clinical trials" },
    { name: "Clinical Trials", href: "/services/clinical-trials", description: "ISO 9001:2015 certified trial support" },
    { name: "Licensing", href: "/services/licensing", description: "Non-exclusive licensing through the University" },
  ],
  footer: [
    {
      title: "Research",
      links: [
        { name: "Electrocardiology Section", href: "/research" },
        { name: "History", href: "/research/history" },
        { name: "Publications", href: "/publications" },
      ],
    },
    {
      title: "Glasgow Program",
      links: [
        { name: "Overview", href: "/program" },
        { name: "Diagnostic Capabilities", href: "/program#capabilities" },
        { name: "Validation Studies", href: "/program#validation" },
        { name: "Licensing", href: "/services/licensing" },
      ],
    },
    {
      title: "Services",
      links: [
        { name: "ECG Core Lab", href: "/services/core-lab" },
        { name: "Clinical Trials", href: "/services/clinical-trials" },
        { name: "Training Resources", href: "/training" },
      ],
    },
    {
      title: "Contact",
      links: [
        { name: "Get in Touch", href: "/contact" },
        { name: "Find Us", href: "/contact#location" },
        { name: "University of Glasgow", href: siteConfig.links.universityMain, external: true },
      ],
    },
  ],
};

// Research group information
export const researchGroup = {
  established: 1964,
  yearsActive: new Date().getFullYear() - 1964,
  focus: [
    "Automated ECG diagnosis techniques",
    "ECG Core Laboratory services",
    "Research and epidemiological studies",
  ],
  certifications: [
    {
      name: "ISO 9001:2015",
      description: "Quality management systems certification (UKAS accredited)",
      since: "2003",
    },
    {
      name: "IEC 60601-2-51",
      description: "Medical electrical equipment safety requirements for ECG analysis",
    },
    {
      name: "IEC 60601-2-25",
      description: "Requirements for electrocardiographs",
    },
  ],
};

// History of Cardiology at GRI and the Electrocardiology Section
export const history = {
  intro: "The Electrocardiology Section has over 50 years of history, beginning as Computer Assisted Reporting of Electrocardiograms (CARE) research and building on a rich tradition of cardiac medicine at Glasgow Royal Infirmary.",
  timeline: [
    {
      year: "1950s",
      title: "Cardiology at GRI",
      description: "Dr Joseph Wright leads cardiology research at Glasgow Royal Infirmary, studying 400 patients with rheumatic mitral valve disease and collaborating on the development of open-heart surgery. As President of the Royal Faculty of Physicians and Surgeons (1960-62), he achieves its promotion to Royal College.",
    },
    {
      year: "1964",
      title: "CARE Research Begins",
      description: "Work on Computer Assisted Reporting of Electrocardiograms (CARE) commences at the University of Glasgow under Peter Macfarlane, laying the foundation for automated ECG interpretation.",
    },
    {
      year: "1966",
      title: "University Department of Medical Cardiology",
      description: "The Walton family donates to the British Heart Foundation to endow the Walton Chair of Medical Cardiology. Professor T.D.V. Lawrie becomes the first holder, establishing Ward 7 as a Coronary Care Unit.",
    },
    {
      year: "1970s",
      title: "Algorithm Development",
      description: "Scottish government funding enables expansion. Core mathematical equations and rule-based logic established. Ian Hutton develops radio-isotope techniques for non-invasive myocardial perfusion assessment.",
    },
    {
      year: "1981",
      title: "First Commercial Partnership",
      description: "University partners with Siemens — whose ECG business is now part of Dräger — to make the technology available for hospital use, marking the beginning of widespread clinical adoption.",
    },
    {
      year: "Late 1980s",
      title: "Paediatric Capabilities",
      description: "Paediatric ECG database of 1,750 healthy children established. Algorithm extended to analyse ECGs from birth through adulthood.",
    },
    {
      year: "1990s",
      title: "International Adoption",
      description: "Program adopted by multiple manufacturers including Spacelabs, establishing the Glasgow Program as an international standard. Professor Stuart Cobbe co-initiates the landmark West of Scotland Coronary Prevention Study (WOSCOPS).",
    },
    {
      year: "1998",
      title: "International Recognition",
      description: "Professor Macfarlane awarded the Rijlant International Prize in Electrocardiology by the Belgian Royal Academy of Medicine.",
    },
    {
      year: "2000",
      title: "Academic Honours",
      description: "Professor Macfarlane awarded DSc for research contributions to electrocardiology.",
    },
    {
      year: "2003",
      title: "ISO Certification",
      description: "ECG Core Lab achieves ISO 9001 certification, assessed annually since. Quality standards maintained for clinical trials support.",
    },
    {
      year: "2008-2014",
      title: "International Leadership",
      description: "Professor Macfarlane serves as President of the Board of Computing in Cardiology, shaping the field internationally.",
    },
    {
      year: "2014",
      title: "CBE Awarded",
      description: "Professor Macfarlane receives Commander of the Order of the British Empire (CBE) for Services to Healthcare.",
    },
    {
      year: "Present",
      title: "Continued Research",
      description: "Millions of ECGs interpreted annually worldwide using the Glasgow Program. Active clinical trials research including COVID-HEART and CISCO-19 studies. Ongoing refinement of diagnostic algorithms.",
    },
  ],
};

// Team members - expanded with accurate details
export const teamMembers: TeamMember[] = [
  {
    name: "Professor Peter Macfarlane",
    role: "Emeritus Professor & Honorary Senior Research Fellow",
    titles: "CBE, DSc, PhD, FRSE",
    image: "/images/team/peter-macfarlane.jpg",
    email: "peter.macfarlane@glasgow.ac.uk",
    phone: "0141 201 5410",
    bio: "Professor Macfarlane is Emeritus Professor and Honorary Senior Research Fellow at the University of Glasgow. He served as Professor in Medical Cardiology (1991–1995) and Professor of Electrocardiology (1995–2010). His career has focused on applying computer techniques to ECG interpretation, and the Glasgow Program developed in his laboratory is now used worldwide. His research into ECG variations by age, gender, and ethnicity has influenced international guidelines for the ECG definition of acute myocardial infarction. He established the ECG Core Laboratory supporting national and international clinical trials and epidemiological studies. A Fellow of the Royal Society of Edinburgh and other learned societies, he has served as Treasurer of the International Society of Electrocardiology and was its President from 2007 to 2009.",
    achievements: [
      "Commander of the Order of the British Empire (CBE, 2014) for Services to Healthcare",
      "Fellow of the Royal Society of Edinburgh (FRSE)",
      "DSc (2000) for research contributions to electrocardiology",
      "Rijlant International Prize in Electrocardiology (1998), Belgian Royal Academy of Medicine",
      "President, Board of Computing in Cardiology (2008-2014)",
      "424 publications, h-index 77, 53,000+ citations (Scopus)",
    ],
    research: [
      "Computer-aided ECG interpretation",
      "Age, sex, and racial variation in ECG parameters",
      "Serial ECG comparison techniques",
      "Acute myocardial infarction diagnostic criteria",
    ],
  },
  {
    name: "Professor Derek Connelly",
    titles: "BSc (Hons), MB, ChB, FRCP",
    role: "Professor and Consultant Cardiologist",
    secondaryRole: "Lead Clinician",
    image: "/images/team/derek-connelly.jpg",
    bio: "Professor Connelly is a Professor and Consultant Cardiologist at the University of Glasgow. He is a past President of the British Heart Rhythm Society.",
  },
  {
    name: "Brian Devine",
    role: "Software Development Manager",
    image: "/images/team/brian-devine.jpg",
    bio: "Long-standing member of the Electrocardiology team with expertise in algorithm development and software implementation.",
  },
  {
    name: "Louise Inglis",
    role: "Clinical Trials and Quality Manager",
    // email: "louise.inglis@glasgow.ac.uk",
    image: "/images/team/louise-inglis.jpg",
    bio: "Manages administrative and data operations for clinical trials conducted through the ECG Core Lab.",
  },
  {
    name: "Robert Jamieson",
    role: "Software Development Support Officer",
    image: "/images/team/robert-jamieson.jpg",
    bio: "Technical support for ECG analysis systems and clinical trial infrastructure.",
  },
  {
    name: "Ioannis Valasakis",
    titles: "PhD",
    role: "Research Software Engineer",
    bio: "Researches and develops AI algorithms for ECG analysis, extending AI-enabled functionality within the Glasgow Program.",
  },
];

// Glasgow Program - technical capabilities
export const glasgowProgram = {
  intro: "The Glasgow Program is an automated ECG interpretation system based on careful scientific research, with unique approaches to ECG analysis developed over 50 years of continuous development.",
  keyFeatures: [
    {
      title: "Age and Sex Based Criteria",
      description: "Extensive use of age and sex-specific reference ranges, valid from birth through adulthood including neonatal ECGs.",
    },
    {
      title: "Racial Variation",
      description: "Race-based diagnostic criteria accounting for documented differences in ECG amplitudes across populations.",
    },
    {
      title: "Clinical Context",
      description: "Optional integration of clinical diagnosis and drug therapy information to improve interpretation accuracy.",
    },
    {
      title: "Serial Comparison",
      description: "Compare ECGs over time to detect evolving changes, critical for monitoring and research studies.",
    },
    {
      title: "Multilingual Output",
      description: "Diagnostic statements available in 15+ languages including European languages, Chinese, Russian, Japanese, and US/UK English variants.",
    },
  ],
  compliance: [
    "IEC 60601-2-51 (ECG analysis requirements)",
    "IEC 60601-2-25 (Electrocardiograph requirements)",
    "ISO 9001:2015 (Quality management)",
  ],
};

// Diagnostic capabilities - more clinical, less marketing
export const diagnosticCapabilities = {
  rhythm: {
    title: "Rhythm & Arrhythmia Analysis",
    items: [
      { title: "Atrial Fibrillation", description: "Detection in both full and limited lead configurations", icon: "Activity" },
      { title: "Atrial Flutter", description: "Typical and atypical flutter pattern recognition", icon: "Pulse" },
      { title: "Ventricular Tachycardia", description: "Sustained and non-sustained VT detection", icon: "Zap" },
      { title: "Bradyarrhythmias", description: "Sinus bradycardia, AV block classification", icon: "Timer" },
      { title: "Premature Complexes", description: "PAC, PVC identification and burden analysis", icon: "Waves" },
      { title: "Pacemaker Rhythms", description: "Implanted pacemaker signal analysis", icon: "ActivitySquare" },
    ],
  },
  conduction: {
    title: "Conduction & Interval Measurement",
    items: [
      { title: "Bundle Branch Blocks", description: "RBBB, LBBB, and fascicular block detection", icon: "GitBranch" },
      { title: "QT/QTc Analysis", description: "Standardised interval measurement with multiple correction formulae", icon: "Ruler" },
      { title: "PR Interval", description: "AV conduction assessment, block classification", icon: "Timeline" },
      { title: "QRS Duration", description: "Intraventricular conduction delay measurement", icon: "Hourglass" },
    ],
  },
  ischaemia: {
    title: "Ischaemia & Infarction",
    items: [
      { title: "STEMI Detection", description: "ST-elevation MI screening with age/sex-specific criteria (contributed to ESC/ACC/AHA guideline development)", icon: "Activity" },
      { title: "NSTEMI Indicators", description: "ST depression and T-wave abnormality detection", icon: "TrendingDown" },
      { title: "Infarct Localisation", description: "Anterior, inferior, lateral, posterior territory identification", icon: "Crosshair" },
      { title: "Prior MI Recognition", description: "Pathological Q-wave and scar pattern identification", icon: "Search" },
      { title: "Serial Comparison", description: "Detection of evolving ischaemic changes over time", icon: "History" },
    ],
  },
  structural: {
    title: "Structural & Hypertrophy",
    items: [
      { title: "Ventricular Hypertrophy", description: "LVH and RVH criteria with age/sex/race adjustment. Glasgow-modified Romhilt-Estes scoring.", icon: "BarChart3" },
      { title: "Atrial Enlargement", description: "LAE and RAE pattern recognition", icon: "Expand" },
      { title: "Early Repolarisation", description: "J-wave patterns per current nomenclature", icon: "Sparkles" },
      { title: "Long QT Syndrome", description: "QTc prolongation screening", icon: "AlarmClock" },
    ],
  },
};

// Key publications with PubMed links
export type Publication = {
  title: string;
  authors: string;
  journal: string;
  year: number;
  pmid?: string;
  pmcid?: string;
  url?: string;
  note?: string;
};

export const keyPublications: Publication[] = [
  {
    title: "Methodology of ECG interpretation in the Glasgow program",
    authors: "Macfarlane PW, Devine B, Latif S, McLaughlin S, Shoat DB, Watts MP",
    journal: "Methods Inf Med",
    year: 1990,
    pmid: "2233383",
    url: "https://pubmed.ncbi.nlm.nih.gov/2233383/",
  },
  {
    title: "Evolution of the Glasgow program for computer-assisted reporting of electrocardiograms—1964/1998",
    authors: "Macfarlane PW",
    journal: "Acta Cardiol",
    year: 1998,
    pmid: "9684035",
    url: "https://pubmed.ncbi.nlm.nih.gov/9684035/",
  },
  {
    title: "Evaluation of the electrocardiographic criteria for left ventricular hypertrophy",
    authors: "Morrison I, Clark E, Macfarlane PW",
    journal: "Anadolu Kardiyol Derg",
    year: 2007,
    pmid: "17584713",
    url: "https://pubmed.ncbi.nlm.nih.gov/17584713/",
    note: "Assessment of ECG criteria for left ventricular hypertrophy",
  },
  {
    title: "Localization of accessory pathways in the Wolff-Parkinson-White pattern — physician versus computer interpretation of the same algorithm",
    authors: "McGavigan AD, Clark E, Quinn FR, Rankin AC, Macfarlane PW",
    journal: "Pacing Clin Electrophysiol",
    year: 2007,
    pmid: "17669083",
    url: "https://pubmed.ncbi.nlm.nih.gov/17669083/",
    note: "Validation of WPW localisation algorithm",
  },
  {
    title: "Precordial electrode placement in women",
    authors: "Macfarlane PW, Colaco R, Stevens K, Reay P, Beckett C, Aitchison T",
    journal: "Neth Heart J",
    year: 2003,
    pmcid: "PMC2499893",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC2499893/",
  },
];

// Books edited by the group
export const books = [
  {
    title: "Comprehensive Electrocardiology",
    editors: "Macfarlane PW, van Oosterom A, Pahlm O, Kligfield P, Janse M, Camm J",
    publisher: "Springer",
    edition: "2nd Edition",
    note: "Definitive reference work in 4 volumes covering all aspects of electrocardiology",
    url: "https://doi.org/10.1007/978-1-84882-046-3",
  },
];

// ECG Core Lab - research services
export const coreLabServices = {
  intro: "The ECG Core Lab provides centralised electrocardiogram processing and interpretation for research studies, with ISO 9001:2015 certification maintained since 2003.",
  services: [
    {
      title: "ECG Data Management",
      description: "Secure storage and retrieval of study ECGs in electronic and paper formats. Database systems supporting endpoint determination and serial comparison.",
    },
    {
      title: "Automated Interpretation",
      description: "ECG interpretation using the Glasgow Program with reports reviewed by experienced staff.",
    },
    {
      title: "Blinded Measurements",
      description: "Independent, blinded ECG measurement and interpretation for research endpoints.",
    },
    {
      title: "Quality Feedback",
      description: "Feedback to study centres on ECG recording quality and data accuracy.",
    },
    {
      title: "Research Consultation",
      description: "Support with endpoint discussions and electrocardiology aspects of study design.",
    },
  ],
  currentStudies: [
    { name: "AIRWAVE", type: "Epidemiological" },
    { name: "Scottish Family Health Study", type: "Epidemiological" },
    { name: "Whitehall II Phase 12", type: "Epidemiological" },
    { name: "British Regional Heart Study", type: "Collaborative" },
    { name: "Tromsø Study", type: "Collaborative" },
    { name: "COVID-HEART", type: "COVID-Related" },
    { name: "CISCO-19", type: "COVID-Related" },
    { name: "Leiden 85+", type: "Collaborative" },
    { name: "ELSA-Brasil", type: "Collaborative" },
    { name: "Moli-sani", type: "Collaborative" },
  ],
};

// Training resources
export const trainingResources = {
  intro: "The Electrocardiology Section provides training and support for clinical trial nurses and healthcare professionals recording ECGs.",
  offerings: [
    {
      title: "ECG Recording Guide",
      description: "Step-by-step online guide to recording a 12-lead ECG, supplemented with video clips demonstrating correct technique.",
      type: "Online",
    },
    {
      title: "Electrode Placement",
      description: "Detailed guidance on correct anatomical electrode positioning, including research on precordial placement in women.",
      type: "Online",
    },
    {
      title: "Best Practice Guidance",
      description: "Hints and tips demonstrating best practice to reduce errors before, during, and after recording.",
      type: "Online",
    },
    {
      title: "Personalised Training Courses",
      description: "Tailored training courses for nurses using our services as part of clinical trials.",
      type: "On-site/Remote",
    },
    {
      title: "Training Manuals",
      description: "Paper-based training materials based on our online support resources.",
      type: "Print",
    },
    {
      title: "Helpline Support",
      description: "Telephone support available for trial partners.",
      type: "Phone",
    },
  ],
};

// Licensing information - more academic, less sales
export const licensingInfo = {
  intro: "The Glasgow Program is available for non-exclusive commercial licensing through the University of Glasgow. The software has been adopted by numerous medical device manufacturers internationally.",
  currentLicensees: [
    { name: "Draeger", description: "Patient monitoring and diagnostic ECG (Glasgow algorithm via the former Siemens ECG business)" },
    { name: "Spacelabs Healthcare", description: "Patient monitoring and diagnostic cardiology", since: "1990s" },
    { name: "Mindray", description: "Patient monitoring and ECG devices", since: "2000s" },
    { name: "Physio-Control (Stryker)", description: "LIFEPAK defibrillator/monitor series", since: "2000s" },
    { name: "BPL Medical Technologies", description: "ECG devices", since: "2010s" },
    { name: "Mediana", description: "Defibrillator and patient monitoring", since: "2010s" },
    { name: "Vitalograph", description: "Cardiopulmonary diagnostic devices", since: "2000s" },
    { name: "Edan Instruments", description: "ECG machines and patient monitors", since: "2010s" },
    { name: "Cardioline", description: "ECG and Holter monitoring devices", since: "2000s" },
    { name: "Cardiolex", description: "ECG analysis software", since: "2000s" },
    { name: "Change Healthcare", description: "Hospital ECG management systems" },
  ],
  contact: {
    name: "Professor Peter Macfarlane",
    email: "peter.macfarlane@glasgow.ac.uk",
    phone: "0141 201 5410",
  },
};

// External resources and links
export const externalResources = [
  {
    category: "Professional Organisations",
    links: [
      { name: "International Society for Computerized Electrocardiology (ISCE)", url: "https://www.isce.org" },
      { name: "International Society for Electrocardiology (ISE)", url: "http://www.ise-infocentre.org" },
      { name: "Computing in Cardiology", url: "https://www.cinc.org" },
    ],
  },
  {
    category: "Educational Resources",
    links: [
      { name: "The ECG Library", url: "https://litfl.com/ecg-library/" },
      { name: "Alan E. Lindsay ECG Learning Center", url: "https://ecg.utah.edu" },
      { name: "ECG Wave-Maven (Harvard)", url: "https://ecg.bidmc.harvard.edu" },
    ],
  },
  {
    category: "University of Glasgow",
    links: [
      { name: "Robertson Centre for Biostatistics", url: "https://www.gla.ac.uk/schools/healthwellbeing/research/robertsoncentreforbiostatistics/" },
      { name: "School of Health & Wellbeing", url: "https://www.gla.ac.uk/schools/healthwellbeing/" },
      { name: "Glasgow Clinical Trials Unit", url: "https://www.glasgowctu.org" },
    ],
  },
  {
    category: "Healthcare Partners",
    links: [
      { name: "NHS Greater Glasgow & Clyde", url: "https://www.nhsggc.org.uk" },
      { name: "Glasgow Royal Infirmary", url: "https://www.nhsggc.org.uk/patients-and-visitors/main-hospital-sites/glasgow-royal-infirmary/" },
    ],
  },
];

// Stats - more measured, academic tone
export const stats = [
  { value: "Millions", label: "ECGs analysed worldwide" },
  { value: "424", label: "Publications" },
  { value: "77", label: "h-index" },
  { value: "53K+", label: "Citations" },
];

// Legacy exports for backward compatibility with old pages
export const pillars = [
  {
    icon: "Shield",
    title: "Clinically Proven",
    points: [
      "Over 50 years of continuous development",
      "Millions of ECGs interpreted annually worldwide",
      "Adopted by leading OEMs including Spacelabs, Mindray, and Draeger",
      "Influenced ESC, ACC, and AHA guidelines for acute MI definition",
    ],
  },
  {
    icon: "Eye",
    title: "Deterministic & Explainable",
    points: [
      "Transparent rule-based logic for every interpretation",
      "Extended statements available with full diagnostic reasoning",
      "Meets IEC 60601-2-51 and ISO 9001 quality standards",
      "Standardised coding for epidemiological studies",
    ],
  },
  {
    icon: "Users",
    title: "Comprehensive Coverage",
    points: [
      "Valid from birth through adulthood — including neonates",
      "Age, sex, race, medication, and clinical history factored in",
      "Paediatric database of 1,750+ healthy children's recordings",
      "Diagnostic statements in 15+ languages",
    ],
  },
];

export const useCases = [
  {
    category: "Manufacturers",
    headline: "License for your devices",
    description: "Non-exclusive licensing for ECG machines, patient monitors, defibrillators, and wearables.",
    href: "/services/licensing",
  },
  {
    category: "Healthcare",
    headline: "Clinical trials support",
    description: "ISO 9001:2015 certified ECG Core Lab services for clinical trials and epidemiological studies.",
    href: "/services/core-lab",
  },
  {
    category: "Research",
    headline: "ECG Core Lab services",
    description: "Centralised ECG processing and serial comparison for research studies.",
    href: "/services/clinical-trials",
  },
];

export const timeline = history.timeline;

export const certifications = researchGroup.certifications;

export const oemPartners = licensingInfo.currentLicensees;

export const partners = licensingInfo.currentLicensees.slice(0, 6).map(l => ({
  name: l.name,
  logo: `/images/partners/${l.name.toLowerCase().replace(/\s+/g, '-')}.svg`,
}));

// Languages supported
export const languages = [
  "English (UK)",
  "English (US)",
  "French",
  "German",
  "Italian",
  "Spanish",
  "Portuguese (Iberian)",
  "Portuguese (Brazilian)",
  "Dutch",
  "Polish",
  "Swedish",
  "Norwegian",
  "Finnish",
  "Danish",
  "Chinese",
  "Russian",
  "Japanese",
];
