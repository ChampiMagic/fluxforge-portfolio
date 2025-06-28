"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type Language = "en" | "es"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.about": "About",
    "nav.services": "Services",
    "nav.portfolio": "Portfolio",
    "nav.contact": "Contact",

    // Hero Section
    "hero.title": "Forging the Future of",
    "hero.subtitle": "Software Development",
    "hero.description":
      "We create innovative digital solutions that transform businesses and drive growth through cutting-edge technology.",
    "hero.cta.primary": "Start Your Project",
    "hero.cta.secondary": "View Our Work",

    // About Section
    "about.title": "About FluxForge",
    "about.subtitle": "Crafting Digital Excellence",
    "about.description":
      "We are a team of passionate developers, designers, and strategists dedicated to creating exceptional digital experiences.",
    "about.experience": "Years of Experience",
    "about.projects": "Projects Completed",
    "about.clients": "Happy Clients",
    "about.success": "Success Rate",

    // Services Section
    "services.title": "Our Services",
    "services.subtitle": "Comprehensive Development Solutions",
    "services.web.title": "Web Development",
    "services.web.description": "Modern, responsive websites built with the latest technologies",
    "services.mobile.title": "Mobile Apps",
    "services.mobile.description": "Native and cross-platform mobile applications",
    "services.cloud.title": "Cloud Solutions",
    "services.cloud.description": "Scalable cloud infrastructure and deployment",
    "services.ai.title": "AI Development",
    "services.ai.description": "Intelligent solutions powered by machine learning and artificial intelligence",
    "services.consulting.title": "Tech Consulting",
    "services.consulting.description": "Strategic technology guidance for your business",

    // Portfolio Section
    "portfolio.title": "Our Portfolio",
    "portfolio.subtitle": "Featured Projects",
    "portfolio.description": "Discover some of our most successful projects and the impact we've made for our clients.",
    "portfolio.view": "View Project",
    "portfolio.tech": "Technologies",
    "portfolio.featured": "Featured",
    "portfolio.learn_more": "Learn More",
    "portfolio.view_all": "View All Projects",

    // Contact Section
    "contact.title": "Get In Touch",
    "contact.subtitle": "Ready to Start Your Project?",
    "contact.description": "Let's discuss how we can help bring your ideas to life.",
    "contact.form.name": "Name",
    "contact.form.email": "Email",
    "contact.form.message": "Message",
    "contact.form.submit": "Send Message",
    "contact.send_message": "Send us a message",
    "contact.info.email": "Email",
    "contact.info.phone": "Phone",
    "contact.info.location": "Location",

    // Footer
    "footer.description": "Forging the future of software development, one project at a time.",
    "footer.rights": "All rights reserved.",
    "footer.quick_links": "Quick Links",
    "footer.services": "Services",

    // Projects Page
    "projects.title": "All Projects",
    "projects.subtitle": "Our Complete Portfolio",
    "projects.description": "Explore our full range of projects across different industries and technologies.",
    "projects.filter.all": "All Projects",
    "projects.filter.web": "Web Development",
    "projects.filter.mobile": "Mobile Apps",
    "projects.filter.cloud": "Cloud Solutions",
    "projects.filter.ai": "AI Development",
    "projects.results": "projects found",
    "projects.back": "Back to Home",
    "projects.search": "Search projects...",
    "projects.no_results": "No projects found matching your criteria.",

    // Project Detail Page
    "project.overview": "Project Overview",
    "project.challenge": "The Challenge",
    "project.solution": "Our Solution",
    "project.results": "Results & Impact",
    "project.technologies": "Technologies Used",
    "project.timeline": "Project Timeline",
    "project.client": "Client",
    "project.duration": "Duration",
    "project.team": "Team Size",
    "project.live": "View Live Site",
    "project.github": "View Code",
    "project.back": "Back to Projects",
    "project.next": "Next Project",
    "project.related": "Related Projects",
    "project.info": "Project Info",
    "project.view_details": "View Details",

    // Common
    "common.live": "Live",
    "common.home": "Home",
    "common.web_development": "Web Development",
    "common.mobile_apps": "Mobile Apps",
    "common.cloud_solutions": "Cloud Solutions",
    "common.ai_development": "AI Development",
    "common.consulting": "Consulting",
  },
  es: {
    // Navigation
    "nav.home": "Inicio",
    "nav.about": "Nosotros",
    "nav.services": "Servicios",
    "nav.portfolio": "Portafolio",
    "nav.contact": "Contacto",

    // Hero Section
    "hero.title": "Forjando el Futuro del",
    "hero.subtitle": "Desarrollo de Software",
    "hero.description":
      "Creamos soluciones digitales innovadoras que transforman negocios e impulsan el crecimiento a través de tecnología de vanguardia.",
    "hero.cta.primary": "Iniciar Proyecto",
    "hero.cta.secondary": "Ver Nuestro Trabajo",

    // About Section
    "about.title": "Acerca de FluxForge",
    "about.subtitle": "Creando Excelencia Digital",
    "about.description":
      "Somos un equipo de desarrolladores, diseñadores y estrategas apasionados dedicados a crear experiencias digitales excepcionales.",
    "about.experience": "Años de Experiencia",
    "about.projects": "Proyectos Completados",
    "about.clients": "Clientes Satisfechos",
    "about.success": "Tasa de Éxito",

    // Services Section
    "services.title": "Nuestros Servicios",
    "services.subtitle": "Soluciones Integrales de Desarrollo",
    "services.web.title": "Desarrollo Web",
    "services.web.description": "Sitios web modernos y responsivos construidos con las últimas tecnologías",
    "services.mobile.title": "Apps Móviles",
    "services.mobile.description": "Aplicaciones móviles nativas y multiplataforma",
    "services.cloud.title": "Soluciones Cloud",
    "services.cloud.description": "Infraestructura cloud escalable y despliegue",
    "services.ai.title": "Desarrollo IA",
    "services.ai.description": "Soluciones inteligentes impulsadas por machine learning e inteligencia artificial",
    "services.consulting.title": "Consultoría Tech",
    "services.consulting.description": "Orientación tecnológica estratégica para tu negocio",

    // Portfolio Section
    "portfolio.title": "Nuestro Portafolio",
    "portfolio.subtitle": "Proyectos Destacados",
    "portfolio.description":
      "Descubre algunos de nuestros proyectos más exitosos y el impacto que hemos generado para nuestros clientes.",
    "portfolio.view": "Ver Proyecto",
    "portfolio.tech": "Tecnologías",
    "portfolio.featured": "Destacado",
    "portfolio.learn_more": "Saber Más",
    "portfolio.view_all": "Ver Todos los Proyectos",

    // Contact Section
    "contact.title": "Contáctanos",
    "contact.subtitle": "¿Listo para Iniciar tu Proyecto?",
    "contact.description": "Hablemos sobre cómo podemos ayudarte a dar vida a tus ideas.",
    "contact.form.name": "Nombre",
    "contact.form.email": "Correo",
    "contact.form.message": "Mensaje",
    "contact.form.submit": "Enviar Mensaje",
    "contact.send_message": "Envíanos un mensaje",
    "contact.info.email": "Correo",
    "contact.info.phone": "Teléfono",
    "contact.info.location": "Ubicación",

    // Footer
    "footer.description": "Forjando el futuro del desarrollo de software, un proyecto a la vez.",
    "footer.rights": "Todos los derechos reservados.",
    "footer.quick_links": "Enlaces Rápidos",
    "footer.services": "Servicios",

    // Projects Page
    "projects.title": "Todos los Proyectos",
    "projects.subtitle": "Nuestro Portafolio Completo",
    "projects.description": "Explora nuestra gama completa de proyectos en diferentes industrias y tecnologías.",
    "projects.filter.all": "Todos los Proyectos",
    "projects.filter.web": "Desarrollo Web",
    "projects.filter.mobile": "Apps Móviles",
    "projects.filter.cloud": "Soluciones Cloud",
    "projects.filter.ai": "Desarrollo IA",
    "projects.results": "proyectos encontrados",
    "projects.back": "Volver al Inicio",
    "projects.search": "Buscar proyectos...",
    "projects.no_results": "No se encontraron proyectos que coincidan con tus criterios.",

    // Project Detail Page
    "project.overview": "Resumen del Proyecto",
    "project.challenge": "El Desafío",
    "project.solution": "Nuestra Solución",
    "project.results": "Resultados e Impacto",
    "project.technologies": "Tecnologías Utilizadas",
    "project.timeline": "Cronograma del Proyecto",
    "project.client": "Cliente",
    "project.duration": "Duración",
    "project.team": "Tamaño del Equipo",
    "project.live": "Ver Sitio en Vivo",
    "project.github": "Ver Código",
    "project.back": "Volver a Proyectos",
    "project.next": "Siguiente Proyecto",
    "project.related": "Proyectos Relacionados",
    "project.info": "Información del Proyecto",
    "project.view_details": "Ver Detalles",

    // Common
    "common.live": "En Vivo",
    "common.home": "Inicio",
    "common.web_development": "Desarrollo Web",
    "common.mobile_apps": "Apps Móviles",
    "common.cloud_solutions": "Soluciones Cloud",
    "common.ai_development": "Desarrollo IA",
    "common.consulting": "Consultoría",
  },
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  useEffect(() => {
    // Detect browser language
    const browserLang = navigator.language.split("-")[0] as Language
    if (browserLang === "es" || browserLang === "en") {
      setLanguage(browserLang)
    }
  }, [])

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)[typeof language]] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
