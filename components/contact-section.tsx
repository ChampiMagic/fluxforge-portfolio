"use client"

import type React from "react"

import { useState } from "react"
import { Send, Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from "@/components/language-provider"

export function ContactSection() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const contactInfo = [
    {
      icon: Mail,
      title: t("contact.info.email"),
      value: "hgazze0@gmail.com",
      href: "mailto:hgazze0@gmail.com",
    },
    {
      icon: Phone,
      title: t("contact.info.phone"),
      value: "+54 37943886865",
      href: "tel:+5437943886865",
    },
    {
      icon: MapPin,
      title: t("contact.info.location"),
      value: "Buenos Aires, Argentina",
      href: "#",
    },
  ]

  return (
    <section id="contact" className="section-padding bg-neutral-light/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">{t("contact.title")}</h2>
          <p className="text-xl text-accent font-medium mb-6">{t("contact.subtitle")}</p>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t("contact.description")}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="border-0 shadow-xl rounded-2xl">
            <CardHeader>
              <CardTitle className="text-2xl font-heading font-bold text-primary">
                {t("contact.send_message")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    name="name"
                    placeholder={t("contact.form.name")}
                    value={formData.name}
                    onChange={handleChange}
                    className="rounded-xl border-gray-200 focus:border-accent"
                    required
                  />
                </div>
                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder={t("contact.form.email")}
                    value={formData.email}
                    onChange={handleChange}
                    className="rounded-xl border-gray-200 focus:border-accent"
                    required
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder={t("contact.form.message")}
                    value={formData.message}
                    onChange={handleChange}
                    className="rounded-xl border-gray-200 focus:border-accent min-h-[120px]"
                    required
                  />
                </div>
                <Button type="submit" className="btn-primary w-full group">
                  {t("contact.form.submit")}
                  <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="flex items-center space-x-4 p-6 bg-white rounded-2xl shadow-lg card-hover">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
                    <info.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-primary mb-1">{info.title}</h3>
                  <a href={info.href} className="text-gray-600 hover:text-accent transition-colors">
                    {info.value}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
