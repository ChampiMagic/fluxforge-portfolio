import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { getProjectById } from "@/lib/projects-data"
import { ProjectDetailClient } from "@/components/project-detail-client"

interface ProjectPageProps {
  params: {
    id: string
  }
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = getProjectById(params.id)

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

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = getProjectById(params.id)

  if (!project) {
    notFound()
  }

  return <ProjectDetailClient project={project} />
}
