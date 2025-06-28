import type { Metadata } from "next"
import { ProjectsPageClient } from "@/components/projects-page-client"

export const metadata: Metadata = {
  title: "All Projects - FluxForge Portfolio",
  description: "Explore our complete portfolio of web development, mobile apps, and cloud solutions.",
  openGraph: {
    title: "All Projects - FluxForge Portfolio",
    description: "Explore our complete portfolio of web development, mobile apps, and cloud solutions.",
    url: "https://fluxforge.dev/projects",
  },
}

export default function ProjectsPage() {
  return <ProjectsPageClient />
}
