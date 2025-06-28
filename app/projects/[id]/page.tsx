import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { getProjectByIdAndLanguage } from "@/lib/projects-data"
import { ProjectDetailClient } from "@/components/project-detail-client"

interface ProjectPageProps {
  params: Promise<{
    id: string
  }>
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { id } = await params
  // Default to English for metadata since we don't have access to language context here
  const project = getProjectByIdAndLanguage(id, "en")

  if (!project) {
    return {
      title: "Project Not Found - FluxForge",
    }
  }

  return {
    title: `${project.title} - FluxForge Portfolio`,
    description: project.description,
    openGraph: {
      title: `${project.title} - FluxForge Portfolio`,
      description: project.description,
      url: `https://fluxforge.dev/projects/${project.id}`,
      images: [
        {
          url: project.image,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params
  // Default to English for server-side rendering, the client component will handle language switching
  const project = getProjectByIdAndLanguage(id, "en")

  if (!project) {
    notFound()
  }

  return <ProjectDetailClient project={project} />
}
