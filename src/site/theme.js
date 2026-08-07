// Direction B — Signal / Infrastructure Dark. Single source of truth for tokens.
export const T = {
  bg: "#090B0E",
  panel: "#0E1116",
  panel2: "#11161C",
  text: "#EEF1F4",
  muted: "#A6AFBA",
  faint: "#6E7884",
  signal: "#5CF0CE",
  border: "rgba(238,241,244,0.10)",
  hl: "rgba(92,240,206,0.07)",
};

// Navigation model — the 15 sections defined by the client, no invented sections.
export const SOLUTIONS = [
  { label: "Core Banking", to: "/solutions/core-banking", desc: "Core banking platform" },
  { label: "Fahim AI", to: "/solutions/fahim-ai", desc: "Applied AI tooling" },
  { label: "MBuke", to: "/solutions/mbuke", desc: "Product" },
  { label: "Managed Services", to: "/solutions/managed-services", desc: "Operations & support" },
  { label: "Banking Systems", to: "/solutions/banking-systems", desc: "Systems integration" },
  { label: "Software Management Systems", to: "/solutions/software-management-systems", desc: "Software management" },
];

export const NAV = [
  { label: "Solutions", to: "/solutions", children: SOLUTIONS },
  { label: "About", to: "/about" },
  { label: "Careers", to: "/careers" },
  { label: "Blog", to: "/blog" },
];
