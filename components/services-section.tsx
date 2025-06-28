"use client"

import { Globe, Smartphone, Cloud, Lightbulb } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from "@/components/language-provider"

export function ServicesSection() {
  const { t } = useLanguage()

  const services = [
    {
      icon: Globe,
      title: t("services.web.title"),
      description: t("services.web.description"),
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Smartphone,
      title: t("services.mobile.title"),
      description: t("services.mobile.description"),
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Cloud,
      title: t("services.cloud.title"),
      description: t("services.cloud.description"),
      gradient: "from-green-500 to-teal-500",
    },
    {
      icon: Lightbulb,
      title: t("services.consulting.title"),
      description: t("services.consulting.description"),
      gradient: "from-orange-500 to-red-500",
    },
  ]

  return (
    <section id="services" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">{t("services.title")}</h2>
          <p className="text-xl text-accent font-medium">{t("services.subtitle")}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-0 shadow-lg card-hover bg-white rounded-2xl overflow-hidden">
              <CardHeader className="text-center pb-4">
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl mb-4 mx-auto`}
                >
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-heading font-bold text-primary">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-600 leading-relaxed">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
