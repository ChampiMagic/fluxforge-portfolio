"use client"

import { Code, Users, Zap, Award } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export function AboutSection() {
  const { t } = useLanguage()

  const stats = [
    { icon: Award, value: "5+", label: t("about.experience") },
    { icon: Code, value: "100+", label: t("about.projects") },
    { icon: Users, value: "50+", label: t("about.clients") },
    { icon: Zap, value: "99%", label: t("about.success") },
  ]

  return (
    <section id="about" className="section-padding bg-neutral-light/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">{t("about.title")}</h2>
          <p className="text-xl text-accent font-medium mb-6">{t("about.subtitle")}</p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">{t("about.description")}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-2xl shadow-lg card-hover">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl mb-4">
                <stat.icon className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-heading font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
