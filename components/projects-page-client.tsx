"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ExternalLink, Github, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { useLanguage } from "@/components/language-provider"
import { getProjectsByLanguage } from "@/lib/projects-data"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export function ProjectsPageClient() {
  const { t, language } = useLanguage()
  const [activeFilter, setActiveFilter] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")

  const filters = [
    { id: "all", label: t("projects.filter.all") },
    { id: "web", label: t("projects.filter.web") },
    { id: "mobile", label: t("projects.filter.mobile") },
    { id: "cloud", label: t("projects.filter.cloud") },
    { id: "ai", label: t("projects.filter.ai") },
  ]

  const allProjects = getProjectsByLanguage(language)
  const filteredProjects = allProjects.filter((project) => {
    const matchesFilter = activeFilter === "all" || project.category === activeFilter
    const matchesSearch =
      searchQuery === "" ||
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.technologies.some((tech) => tech.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesFilter && matchesSearch
  })

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20">
        {/* Header */}
        <section className="section-padding bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <Link
                href="/"
                className="inline-flex items-center text-primary hover:text-accent transition-colors mb-6"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                {t("projects.back")}
              </Link>

              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-primary">
                {t("projects.title")}
              </h1>
              <p className="text-xl text-accent font-medium mb-4">{t("projects.subtitle")}</p>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t("projects.description")}</p>
            </div>
          </div>
        </section>

        {/* Search and Filters */}
        <section className="py-8 bg-white border-b">
          <div className="container-custom">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search */}
              <div className="relative w-full lg:w-96">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder={t("projects.search")}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 rounded-xl border-gray-200 focus:border-accent"
                />
              </div>

              {/* Filters */}
              <div className="flex flex-wrap gap-3">
                {filters.map((filter) => (
                  <Button
                    key={filter.id}
                    variant={activeFilter === filter.id ? "default" : "outline"}
                    onClick={() => setActiveFilter(filter.id)}
                    className={`rounded-full px-4 py-2 transition-all duration-300 ${
                      activeFilter === filter.id
                        ? "bg-primary text-white shadow-lg"
                        : "border-primary text-primary hover:bg-primary hover:text-white"
                    }`}
                  >
                    {filter.label}
                  </Button>
                ))}
              </div>
            </div>

            {/* Results Count */}
            <div className="mt-6 text-center">
              <p className="text-gray-600">
                <span className="font-semibold text-primary">{filteredProjects.length}</span> {t("projects.results")}
              </p>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="section-padding">
          <div className="container-custom">
            {filteredProjects.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">{t("projects.no_results")}</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project) => (
                  <Card
                    key={project.id}
                    className="group py-0 border-0 shadow-lg card-hover bg-white rounded-2xl overflow-hidden"
                  >
                    <div className="relative overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={600}
                        height={600}
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                          {project.liveUrl && (
                            <Button
                              size="sm"
                              className="bg-white/20 backdrop-blur-sm text-white border-white/30 hover:bg-white hover:text-primary"
                              asChild
                            >
                              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="h-4 w-4 mr-1" />
                                Live
                              </a>
                            </Button>
                          )}
                          {project.githubUrl && (
                            <Button
                              size="sm"
                              variant="outline"
                              className="bg-white/20 backdrop-blur-sm text-white border-white/30 hover:bg-white hover:text-primary"
                              asChild
                            >
                              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                <Github className="h-4 w-4" />
                              </a>
                            </Button>
                          )}
                        </div>
                      </div>
                      {project.featured && (
                        <Badge className="absolute top-4 right-4 bg-accent text-white border-0">Featured</Badge>
                      )}
                    </div>

                    <CardContent className="p-6">
                      <h3 className="text-xl font-heading font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">{project.description}</p>

                      <div className="mb-4">
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.slice(0, 3).map((tech, index) => (
                            <Badge
                              key={index}
                              variant="secondary"
                              className="bg-neutral-light text-primary border-0 text-xs"
                            >
                              {tech}
                            </Badge>
                          ))}
                          {project.technologies.length > 3 && (
                            <Badge variant="secondary" className="bg-neutral-light text-primary border-0 text-xs">
                              +{project.technologies.length - 3}
                            </Badge>
                          )}
                        </div>
                      </div>

                      <Button asChild className="w-full btn-primary">
                        <Link href={`/projects/${project.id}`}>{t("project.view_details")}</Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}
