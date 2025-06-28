"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Github, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/components/language-provider"
import { getProjectsByLanguage } from "@/lib/projects-data"

export function PortfolioSection() {
  const { t, language } = useLanguage()

  // ---- State & Filtering ----
  const [activeFilter, setActiveFilter] = useState<"all" | "web" | "mobile" | "cloud" | "ai">("all")

  const filters = [
    { id: "all", label: t("projects.filter.all") },
    { id: "web", label: t("projects.filter.web") },
    { id: "mobile", label: t("projects.filter.mobile") },
    { id: "cloud", label: t("projects.filter.cloud") },
    { id: "ai", label: t("projects.filter.ai") },
  ] as const

  const allProjects = getProjectsByLanguage(language)
  const projects = activeFilter === "all" ? allProjects : allProjects.filter((p) => p.category === activeFilter)
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 6)

  return (
    <section id="portfolio" className="section-padding bg-neutral-light/30">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">{t("portfolio.title")}</h2>
          <p className="text-xl text-accent font-medium mb-6">{t("portfolio.subtitle")}</p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">{t("portfolio.description")}</p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter.id}
              variant={activeFilter === filter.id ? "default" : "outline"}
              onClick={() => setActiveFilter(filter.id)}
              className={`rounded-full px-6 py-3 transition-all duration-300 ${
                activeFilter === filter.id
                  ? "bg-primary text-white shadow-lg"
                  : "border-primary text-primary hover:bg-primary hover:text-white"
              }`}
            >
              {filter.label}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProjects.map((project) => (
            <Card key={project.id} className="group py-0 border-0 shadow-lg card-hover bg-white rounded-2xl overflow-hidden">
              {/* Image + overlay */}
              <div className="relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                    {project.liveUrl && (
                      <Button
                        asChild
                        size="sm"
                        className="bg-white/20 backdrop-blur-sm text-white border-white/30 hover:bg-white hover:text-primary"
                      >
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-1" />
                          {t("common.live")}
                        </a>
                      </Button>
                    )}
                    {project.githubUrl && (
                      <Button
                        asChild
                        size="sm"
                        variant="outline"
                        className="bg-white/20 backdrop-blur-sm text-white border-white/30 hover:bg-white hover:text-primary"
                      >
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
                {project.featured && (
                  <Badge className="absolute top-4 right-4 bg-accent text-white border-0">
                    {t("portfolio.featured")}
                  </Badge>
                )}
              </div>

              <CardContent className="p-6">
                {/* ----  TITLE now LINKS to project detail ---- */}
                <Link href={`/projects/${project.id}`} className="block mb-3">
                  <h3 className="text-xl font-heading font-bold text-primary group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                </Link>

                <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">{project.description}</p>

                {/* Technologies (show first 4) */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <Badge key={tech} variant="secondary" className="bg-neutral-light text-primary border-0 text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 4 && (
                    <Badge variant="secondary" className="bg-neutral-light text-primary border-0 text-xs">
                      +{project.technologies.length - 4}
                    </Badge>
                  )}
                </div>

                {/* Learn-more CTA */}
                <Button
                  asChild
                  variant="ghost"
                  className="text-primary hover:text-accent hover:bg-accent/5 p-2 h-auto font-medium group rounded-lg transition-all duration-300 hover:shadow-md active:scale-95 active:bg-accent/10"
                >
                  <Link href={`/projects/${project.id}`}>
                    {t("portfolio.learn_more")}
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button className="btn-primary group" asChild>
            <Link href="/projects">
              {t("portfolio.view_all")}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
