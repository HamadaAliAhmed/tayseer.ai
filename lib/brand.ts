export const brand = {
  name: "Tayseer Innovations",
  colors: {
    background: "#090B0E",
    panel: "#0E1116",
    panelElevated: "#11161C",
    text: "#EEF1F4",
    muted: "#A6AFBA",
    faint: "#6E7884",
    signal: "#5CF0CE",
    border: "rgba(238, 241, 244, 0.10)",
    highlight: "rgba(92, 240, 206, 0.07)",
  },
} as const;

export const solutions = [
  { label: "Core Banking", href: "/solutions/core-banking", description: "Core banking platform" },
  { label: "Fahim AI", href: "/solutions/fahim-ai", description: "Applied AI tooling" },
  { label: "MBuke", href: "/solutions/mbuke", description: "Digital banking platform" },
  { label: "Managed Services", href: "/solutions/managed-services", description: "Operations & support" },
  { label: "Banking Systems", href: "/solutions/banking-systems", description: "Systems integration" },
  {
    label: "Software Management Systems",
    href: "/solutions/software-management-systems",
    description: "Software management",
  },
] as const;

export const navigation = [
  { label: "Solutions", href: "/solutions" },
  { label: "About", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "Blog", href: "/blog" },
] as const;
