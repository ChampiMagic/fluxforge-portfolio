"use client"

import Link from "next/link"
import Image from "next/image"
import { Github, Twitter, Linkedin, Mail } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export function Footer() {
  const { t } = useLanguage()

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Mail, href: "mailto:hello@fluxforge.dev", label: "Email" },
  ]

  return (
    <footer className="bg-primary text-white">
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Image src="/images/fluxforge-logo.png" alt="FluxForge Logo" width={50} height={50} className="w-10 h-10"/>
              <span className="font-heading font-bold text-xl">FluxForge</span>
            </Link>
            <p className="text-gray-300 mb-6 max-w-md">{t("footer.description")}</p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-bold mb-4">{t("footer.quick_links")}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#home" className="text-gray-300 hover:text-white transition-colors">
                  {t("nav.home")}
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-300 hover:text-white transition-colors">
                  {t("nav.about")}
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-300 hover:text-white transition-colors">
                  {t("nav.services")}
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-300 hover:text-white transition-colors">
                  {t("nav.contact")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-bold mb-4">{t("footer.services")}</h3>
            <ul className="space-y-2">
              <li>
                <span className="text-gray-300">{t("common.web_development")}</span>
              </li>
              <li>
                <span className="text-gray-300">{t("common.mobile_apps")}</span>
              </li>
              <li>
                <span className="text-gray-300">{t("common.cloud_solutions")}</span>
              </li>
              <li>
                <span className="text-gray-300">{t("common.consulting")}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © {new Date().getFullYear()} FluxForge. {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  )
}
