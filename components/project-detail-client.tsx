"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ExternalLink, Github, Building, Clock, Users, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { useLanguage } from "@/components/language-provider"
import { getProjectByIdAndLanguage, getRelatedProjectsByLanguage } from "@/lib/projects-data"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import type { Project } from "@/lib/projects-data"

interface ProjectDetailClientProps {
  project: Project
}

export function ProjectDetailClient({ project: initialProject }: ProjectDetailClientProps) {
  const { t, language } = useLanguage()
  const [project, setProject] = useState(initialProject)

  // Update project when language changes
  useEffect(() => {
    const updatedProject = getProjectByIdAndLanguage(project.id, language)
    if (updatedProject) {
      setProject(updatedProject)
    }
  }, [language, project.id])

  const relatedProjects = getRelatedProjectsByLanguage(project.id, project.category, language)

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="container-custom">
            <div className="max-w-6xl mx-auto">
              <Link
                href="/projects"
                className="inline-flex items-center text-primary hover:text-accent transition-colors mb-6"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                {t("project.back")}
              </Link>

              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Project Info */}
                <div>
                  <div className="flex items-center space-x-3 mb-4">
                    <Badge variant="secondary" className="bg-accent/10 text-accent border-accent/20">
                      {t(`common.${project.category}_development`)}
                    </Badge>
                    {project.featured && (
                      <Badge variant="default" className="bg-primary text-white">
                        {t("portfolio.featured")}
                      </Badge>
                    )}
                  </div>

                  <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-primary">
                    {project.title}
                  </h1>

                  <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-3 mb-8">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="border-gray-300 text-gray-700">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    {project.liveUrl && (
                      <Button className="btn-primary group" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          {t("project.live")}
                        </a>
                      </Button>
                    )}
                    {project.githubUrl && (
                      <Button variant="outline" className="btn-outline group" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          {t("project.github")}
                        </a>
                      </Button>
                    )}
                  </div>
                </div>

                {/* Project Image */}
                <div className="relative">
                  <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={600}
                      height={600}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Project Details */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-3 gap-12">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-12">
                  {/* Overview */}
                  <div>
                    <h2 className="text-3xl font-heading font-bold mb-6 text-primary">{t("project.overview")}</h2>
                    <p className="text-gray-600 leading-relaxed text-lg">{project.longDescription}</p>
                  </div>

                  {/* Challenge */}
                  <div>
                    <h2 className="text-3xl font-heading font-bold mb-6 text-primary">{t("project.challenge")}</h2>
                    <p className="text-gray-600 leading-relaxed text-lg">{project.challenge}</p>
                  </div>

                  {/* Solution */}
                  <div>
                    <h2 className="text-3xl font-heading font-bold mb-6 text-primary">{t("project.solution")}</h2>
                    <p className="text-gray-600 leading-relaxed text-lg">{project.solution}</p>
                  </div>

                  {/* Results */}
                  <div>
                    <h2 className="text-3xl font-heading font-bold mb-6 text-primary">{t("project.results")}</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                      {project.results.map((result, index) => (
                        <div key={index} className="flex items-start space-x-3 p-4 bg-accent/5 rounded-xl">
                          <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-gray-700 font-medium">{result}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Timeline */}
                  <div>
                    <h2 className="text-3xl font-heading font-bold mb-6 text-primary">{t("project.timeline")}</h2>
                    <div className="space-y-6">
                      {project.timeline.map((phase, index) => (
                        <div key={index} className="flex space-x-6">
                          <div className="flex-shrink-0">
                            <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-bold">
                              {index + 1}
                            </div>
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center space-x-3 mb-2">
                              <h3 className="text-xl font-heading font-bold text-primary">{phase.phase}</h3>
                              <Badge variant="outline" className="text-sm">
                                {phase.duration}
                              </Badge>
                            </div>
                            <p className="text-gray-600">{phase.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Sidebar */}
                <div className="space-y-8">
                  {/* Project Info */}
                  <Card className="border-0 shadow-lg rounded-2xl">
                    <CardHeader>
                      <CardTitle className="text-xl font-heading font-bold text-primary">{t("project.info")}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <Building className="h-5 w-5 text-accent" />
                        <div>
                          <p className="text-sm text-gray-500">{t("project.client")}</p>
                          <p className="font-medium text-primary">{project.client}</p>
                        </div>
                      </div>
                      <Separator />
                      <div className="flex items-center space-x-3">
                        <Clock className="h-5 w-5 text-accent" />
                        <div>
                          <p className="text-sm text-gray-500">{t("project.duration")}</p>
                          <p className="font-medium text-primary">{project.duration}</p>
                        </div>
                      </div>
                      <Separator />
                      <div className="flex items-center space-x-3">
                        <Users className="h-5 w-5 text-accent" />
                        <div>
                          <p className="text-sm text-gray-500">{t("project.team")}</p>
                          <p className="font-medium text-primary">{project.teamSize}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Technologies */}
                  <Card className="border-0 shadow-lg rounded-2xl">
                    <CardHeader>
                      <CardTitle className="text-xl font-heading font-bold text-primary">{t("project.technologies")}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="outline" className="border-gray-300 text-gray-700">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Projects */}
        {relatedProjects.length > 0 && (
          <section className="section-padding bg-neutral-light/30">
            <div className="container-custom">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-heading font-bold mb-12 text-center text-primary">{t("project.related")}</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {relatedProjects.map((relatedProject) => (
                    <Card
                      key={relatedProject.id}
                      className="group border-0 shadow-lg card-hover bg-white rounded-2xl overflow-hidden"
                    >
                      <div className="relative overflow-hidden">
                        <Image
                          src={relatedProject.image}
                          alt={relatedProject.title}
                          width={400}
                          height={250}
                          className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-lg font-heading font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                          {relatedProject.title}
                        </h3>
                        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{relatedProject.description}</p>
                        <Button asChild variant="ghost" className="p-0 h-auto text-primary hover:text-accent">
                          <Link href={`/projects/${relatedProject.id}`}>
                            {t("portfolio.view")} <ArrowRight className="ml-1 h-4 w-4" />
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        <Footer />
      </main>
    </>
  )
}
