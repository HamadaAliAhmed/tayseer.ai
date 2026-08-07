import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Tayseer Innovations",
    short_name: "Tayseer",
    description: "Banking technology and AI solutions for financial institutions.",
    start_url: "/",
    display: "standalone",
    background_color: "#090b0e",
    theme_color: "#090b0e",
    lang: "en",
  };
}
