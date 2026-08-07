// Brand palette — navy dominant on paper/white, green as a SPARING accent.
export const T = {
  bg: "#F7F6F2",      // paper background
  panel: "#FFFFFF",   // cards / panels
  panel2: "#EEF1F4",  // alternate sections
  text: "#0F2333",    // ink
  muted: "#47586A",   // slate body
  faint: "#8090A0",   // light slate / labels
  signal: "#0D5A8C",  // NAVY — primary/dominant accent
  green: "#62A945",   // sparing green accent only
  border: "rgba(13,35,51,0.12)",
  hl: "rgba(13,90,140,0.07)", // hairline grid, navy tint
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
