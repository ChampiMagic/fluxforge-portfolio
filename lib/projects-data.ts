export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  image: string
  images: string[]
  category: "web" | "mobile" | "cloud"
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
  featured: boolean
  client: string
  duration: string
  teamSize: string
  challenge: string
  solution: string
  results: string[]
  timeline: {
    phase: string
    duration: string
    description: string
  }[]
}

export const projects: Project[] = [
  {
    "id": "laposta-amicizia",
    "title": "LaPosta Amicizia",
    "description": "Plataforma de venta y gestión de entradas para el evento musical Amicizia Eterna.",
    "longDescription": "LaPosta Amicizia es un sistema integral de gestión y venta de entradas creado para \"AMICIZIA ETERNA\" en Santa Ana, Corrientes. Ofrece un flujo completo de compra orientado al cliente —incluyendo lotes de entradas dinámicos, disponibilidad en tiempo real, verificación de edad (18+), pago vía Mercado Pago, envío por correo electrónico con códigos QR y posibilidad de compartir en redes sociales—, además de una interfaz para el personal con escáner para validación de acceso. La PWA cuenta con soporte offline, optimización SEO, mejoras de rendimiento y un diseño responsive tanto en escritorio como en móvil.",
    "image": "/images/la-posta-logo.png",
    "images": [
      "/images/AMICIZIA_ETERNA_background.png",
      "/images/la-posta-logo.png",
      "/images/ignacio-tressens.jpeg"
    ],
    "category": "web",
    "technologies": [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Radix UI",
      "Zod",
      "Axios",
      "Leaflet",
      "jsQR",
      "Mercado Pago"
    ],
    "liveUrl": "https://www.laposta.site",
    "githubUrl": "https://github.com/ChampiMagic/LaPosta_Amicizia",
    "featured": true,
    "client": "Lapostagroup",
    "duration": "2 meses",
    "teamSize": "2 desarrolladores",
    "challenge": "Construir una plataforma de extremo a extremo que gestione la venta pública de entradas con niveles de precios dinámicos, disponibilidad en tiempo real y pago seguro, al mismo tiempo que proporcione al personal un sistema de validación de acceso con QR sencillo y eficiente —todo en una PWA de alto rendimiento y con capacidad offline.",
    "solution": "Desarrollo de una PWA con Next.js que incluye un flujo de compra en varios pasos, integración con Mercado Pago, sondeo en tiempo real, envío de entradas con código QR por correo electrónico y una interfaz móvil optimizada (React + jsQR) para el escaneo y validación por parte del personal; se añadieron soporte offline, optimizaciones SEO y un UI responsive con Tailwind y Radix.",
    "results": [
      "500 entradas vendidas en el primer mes",
      "100 % de validaciones QR exitosas en el acceso",
      "50 % de aumento en tráfico móvil"
    ],
    "timeline": [
      {
        "phase": "Descubrimiento y Planificación",
        "duration": "2 semanas",
        "description": "Recopilación de requisitos, mapeo de detalles del evento y diseño de la arquitectura técnica"
      },
      {
        "phase": "Diseño y Prototipado",
        "duration": "2 semanas",
        "description": "Diseño de UI/UX para el flujo de cliente y el escáner de personal, creación de prototipos interactivos y recogida de feedback"
      },
      {
        "phase": "Desarrollo",
        "duration": "3 semanas",
        "description": "Implementación full‑stack del frontend en Next.js, integración con API de backend, módulos de pago y QR"
      },
      {
        "phase": "Pruebas y Lanzamiento",
        "duration": "1 semana",
        "description": "Aseguramiento de calidad, ajuste de rendimiento, auditorías PWA y despliegue en producción"
      }
    ]
  }  
]

export const projectsEN: Project[] = [
  {
    "id": "laposta-amicizia",
    "title": "LaPosta Amicizia",
    "description": "Event ticketing and management platform for the Amicizia Eterna music event.",
    "longDescription": "LaPosta Amicizia is a comprehensive event ticketing & management system built for \"AMICIZIA ETERNA\" in Santa Ana, Corrientes. It offers a full customer-facing purchase flow—including dynamic ticket lots, real‑time availability, age verification (18+), payment via Mercado Pago, email delivery with QR codes and social sharing—and a staff‑facing scanner interface for entry validation. The PWA features offline support, SEO optimization, performance optimizations and a responsive design across desktop and mobile." ,
    "image": "/images/la-posta-logo.png",
    "images": [
      "/images/AMICIZIA_ETERNA_background.png",
      "/images/la-posta-logo.png",
      "/images/ignacio-tressens.jpeg"
    ],
    "category": "web",
    "technologies": [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Radix UI",
      "Zod",
      "Axios",
      "Leaflet",
      "jsQR",
      "Mercado Pago"
    ],
    "liveUrl": "https://www.laposta.site",
    "githubUrl": "https://github.com/ChampiMagic/LaPosta_Amicizia",
    "featured": true,
    "client": "Lapostagroup",
    "duration": "2 months",
    "teamSize": "2 developers",
    "challenge": "Build an end‑to‑end platform that handles public ticket sales with dynamic pricing tiers, real‑time availability and secure payment, while providing staff with a seamless QR‑based entry validation system—all in a performant, offline‑capable PWA.",
    "solution": "Developed a Next.js PWA with a multi‑step purchase flow, Mercado Pago integration, real‑time polling, email delivery of QR tickets, and a mobile‑optimized React + jsQR scanner interface for staff; added offline support, SEO optimizations and responsive UI with Tailwind & Radix.",
    "results": [
      "500 tickets sold in the first month",
      "100% successful QR validations at entry",
      "50% increase in mobile user traffic",
    ],
    "timeline": [
      {
        "phase": "Discovery & Planning",
        "duration": "2 weeks",
        "description": "Requirements gathering, event details mapping and technical architecture design"
      },
      {
        "phase": "Design & Prototyping",
        "duration": "2 weeks",
        "description": "UI/UX design for both customer flow and staff scanner, interactive prototypes and feedback"
      },
      {
        "phase": "Development",
        "duration": "3 weeks",
        "description": "Full‑stack implementation of Next.js front‑end, backend API integration, payment and QR modules"
      },
      {
        "phase": "Testing & Launch",
        "duration": "1 weeks",
        "description": "Quality assurance, performance tuning, PWA audits and production deployment"
      }
    ]
  },
]

export function getProjectById(id: string): Project | undefined {
  return projects.find((project) => project.id === id)
}

export function getProjectENById(id: string): Project | undefined {
  return projectsEN.find((project) => project.id === id)
}

export function getRelatedProjects(currentProjectId: string, category: string, limit = 3): Project[] {
  return projects.filter((project) => project.id !== currentProjectId && project.category === category).slice(0, limit)
}

export function getRelatedENProjects(currentProjectId: string, category: string, limit = 3): Project[] {
  return projectsEN.filter((project) => project.id !== currentProjectId && project.category === category).slice(0, limit)
}

// Helper function to get projects based on language
export function getProjectsByLanguage(language: "en" | "es"): Project[] {
  return language === "en" ? projectsEN : projects
}

// Helper function to get project by ID and language
export function getProjectByIdAndLanguage(id: string, language: "en" | "es"): Project | undefined {
  return language === "en" ? getProjectENById(id) : getProjectById(id)
}

// Helper function to get related projects by language
export function getRelatedProjectsByLanguage(currentProjectId: string, category: string, language: "en" | "es", limit = 3): Project[] {
  return language === "en" ? getRelatedENProjects(currentProjectId, category, limit) : getRelatedProjects(currentProjectId, category, limit)
}

// DATA EXAMPLE
/*
{
    id: "ecocommerce-platform",
    title: "EcoCommerce Platform",
    description: "A sustainable e-commerce platform with AI-powered recommendations and carbon footprint tracking.",
    longDescription:
      "EcoCommerce is a revolutionary e-commerce platform that combines cutting-edge technology with environmental consciousness. The platform features AI-powered product recommendations, real-time carbon footprint tracking, and a comprehensive sustainability scoring system that helps consumers make environmentally responsible purchasing decisions.",
    image: "/placeholder.svg?height=400&width=600",
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    category: "web",
    technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "AI/ML", "Docker", "AWS"],
    liveUrl: "https://ecocommerce-demo.com",
    githubUrl: "https://github.com/fluxforge/ecocommerce",
    featured: true,
    client: "GreenTech Solutions",
    duration: "6 months",
    teamSize: "5 developers",
    challenge:
      "Create a scalable e-commerce platform that not only provides excellent user experience but also promotes environmental awareness and sustainable shopping habits.",
    solution:
      "We developed a comprehensive platform with AI-driven recommendations, carbon footprint calculations, and gamified sustainability features that encourage eco-friendly purchases.",
    results: [
      "40% increase in user engagement",
      "25% reduction in average carbon footprint per order",
      "300% growth in sustainable product sales",
      "95% customer satisfaction rate",
    ],
    timeline: [
      {
        phase: "Discovery & Planning",
        duration: "2 weeks",
        description: "Requirements gathering, market research, and technical architecture planning",
      },
      {
        phase: "Design & Prototyping",
        duration: "3 weeks",
        description: "UI/UX design, user journey mapping, and interactive prototypes",
      },
      {
        phase: "Development",
        duration: "16 weeks",
        description: "Full-stack development, AI integration, and payment system implementation",
      },
      {
        phase: "Testing & Launch",
        duration: "3 weeks",
        description: "Quality assurance, performance optimization, and production deployment",
      },
    ],
  },
  {
    id: "healthtracker-mobile",
    title: "HealthTracker Mobile App",
    description: "Cross-platform mobile app for health monitoring with real-time data synchronization.",
    longDescription:
      "HealthTracker is a comprehensive mobile health application that enables users to monitor their vital signs, track fitness goals, and maintain detailed health records. The app features real-time data synchronization across devices and integrates with popular wearable devices for seamless health monitoring.",
    image: "/placeholder.svg?height=400&width=600",
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    category: "mobile",
    technologies: ["React Native", "Firebase", "Node.js", "MongoDB", "HealthKit", "Google Fit"],
    liveUrl: "https://apps.apple.com/healthtracker",
    githubUrl: "https://github.com/fluxforge/healthtracker",
    featured: true,
    client: "MedTech Innovations",
    duration: "4 months",
    teamSize: "4 developers",
    challenge:
      "Develop a cross-platform mobile app that can securely handle sensitive health data while providing real-time synchronization and integration with various health devices.",
    solution:
      "Built a React Native app with robust security measures, HIPAA compliance, and seamless integration with major health platforms and wearable devices.",
    results: [
      "50,000+ downloads in first 3 months",
      "4.8/5 app store rating",
      "99.9% uptime reliability",
      "HIPAA compliance certification",
    ],
    timeline: [
      {
        phase: "Research & Planning",
        duration: "1 week",
        description: "Health industry research, compliance requirements, and technical planning",
      },
      {
        phase: "UI/UX Design",
        duration: "2 weeks",
        description: "User-centered design, accessibility considerations, and prototype development",
      },
      {
        phase: "Development",
        duration: "12 weeks",
        description: "Cross-platform development, API integration, and security implementation",
      },
      {
        phase: "Testing & Deployment",
        duration: "1 week",
        description: "Comprehensive testing, app store submission, and launch preparation",
      },
    ],
  },
  {
    id: "cloudsync-enterprise",
    title: "CloudSync Enterprise",
    description: "Enterprise cloud solution for document management and team collaboration.",
    longDescription:
      "CloudSync Enterprise is a comprehensive cloud-based document management and collaboration platform designed for large organizations. It features advanced security, real-time collaboration tools, and seamless integration with existing enterprise systems.",
    image: "/placeholder.svg?height=400&width=600",
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    category: "cloud",
    technologies: ["AWS", "Docker", "Kubernetes", "React", "Python", "Redis", "Elasticsearch"],
    liveUrl: "https://cloudsync-enterprise.com",
    githubUrl: "https://github.com/fluxforge/cloudsync",
    featured: false,
    client: "Enterprise Corp",
    duration: "8 months",
    teamSize: "8 developers",
    challenge:
      "Create a scalable, secure cloud platform that can handle enterprise-level document management while ensuring compliance with industry regulations.",
    solution:
      "Developed a microservices-based architecture with advanced security features, real-time collaboration capabilities, and comprehensive audit trails.",
    results: [
      "500+ enterprise clients",
      "99.99% uptime SLA",
      "SOC 2 Type II compliance",
      "60% improvement in team productivity",
    ],
    timeline: [
      {
        phase: "Architecture Design",
        duration: "3 weeks",
        description: "System architecture, security planning, and scalability considerations",
      },
      {
        phase: "Core Development",
        duration: "20 weeks",
        description: "Microservices development, database design, and API implementation",
      },
      {
        phase: "Security & Compliance",
        duration: "4 weeks",
        description: "Security audits, compliance certification, and penetration testing",
      },
      {
        phase: "Deployment & Optimization",
        duration: "5 weeks",
        description: "Production deployment, performance optimization, and monitoring setup",
      },
    ],
  },
  {
    id: "fintech-dashboard",
    title: "FinTech Dashboard",
    description: "Real-time financial analytics dashboard with advanced data visualization.",
    longDescription:
      "A sophisticated financial analytics dashboard that provides real-time market data, portfolio analysis, and risk assessment tools for financial professionals and institutions.",
    image: "/placeholder.svg?height=400&width=600",
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    category: "web",
    technologies: ["Vue.js", "D3.js", "Node.js", "Redis", "WebSocket", "Python", "TensorFlow"],
    liveUrl: "https://fintech-dashboard-demo.com",
    githubUrl: "https://github.com/fluxforge/fintech-dashboard",
    featured: true,
    client: "Financial Analytics Inc",
    duration: "5 months",
    teamSize: "6 developers",
    challenge:
      "Build a high-performance dashboard capable of processing and visualizing massive amounts of real-time financial data with sub-second latency.",
    solution:
      "Implemented a real-time data pipeline with WebSocket connections, advanced caching strategies, and optimized data visualization components.",
    results: [
      "Processing 1M+ data points per second",
      "Sub-100ms data visualization updates",
      "40% faster decision-making process",
      "99.95% system availability",
    ],
    timeline: [
      {
        phase: "Data Architecture",
        duration: "2 weeks",
        description: "Real-time data pipeline design and performance optimization planning",
      },
      {
        phase: "Frontend Development",
        duration: "12 weeks",
        description: "Dashboard UI, data visualization components, and user experience optimization",
      },
      {
        phase: "Backend Integration",
        duration: "6 weeks",
        description: "API development, real-time data processing, and system integration",
      },
      {
        phase: "Performance Tuning",
        duration: "2 weeks",
        description: "Load testing, optimization, and production deployment",
      },
    ],
  },
  {
    id: "smart-iot-platform",
    title: "Smart IoT Platform",
    description: "IoT device management platform with real-time monitoring and analytics.",
    longDescription:
      "A comprehensive IoT platform that enables businesses to connect, monitor, and manage their IoT devices at scale with real-time analytics and predictive maintenance capabilities.",
    image: "/placeholder.svg?height=400&width=600",
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    category: "cloud",
    technologies: ["React", "MQTT", "InfluxDB", "Grafana", "Docker", "Kubernetes", "Go"],
    liveUrl: "https://smart-iot-platform.com",
    githubUrl: "https://github.com/fluxforge/iot-platform",
    featured: false,
    client: "IoT Solutions Ltd",
    duration: "7 months",
    teamSize: "7 developers",
    challenge:
      "Create a scalable IoT platform that can handle millions of connected devices while providing real-time monitoring and predictive analytics.",
    solution:
      "Built a microservices architecture with MQTT messaging, time-series database, and machine learning algorithms for predictive maintenance.",
    results: [
      "1M+ connected devices supported",
      "99.9% message delivery rate",
      "30% reduction in device downtime",
      "Real-time processing of 10K+ messages/second",
    ],
    timeline: [
      {
        phase: "Platform Architecture",
        duration: "3 weeks",
        description: "IoT architecture design, protocol selection, and scalability planning",
      },
      {
        phase: "Core Platform Development",
        duration: "18 weeks",
        description: "Device management, data processing, and analytics implementation",
      },
      {
        phase: "Dashboard & Visualization",
        duration: "6 weeks",
        description: "Real-time dashboard, reporting tools, and user interface development",
      },
      {
        phase: "Testing & Deployment",
        duration: "3 weeks",
        description: "Load testing, security validation, and production deployment",
      },
    ],
  },
  {
    id: "social-learning-app",
    title: "Social Learning App",
    description: "Mobile learning platform with gamification and social features.",
    longDescription:
      "An innovative mobile learning platform that combines educational content with social interaction and gamification elements to create an engaging learning experience for students of all ages.",
    image: "/placeholder.svg?height=400&width=600",
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    category: "mobile",
    technologies: ["Flutter", "Firebase", "Node.js", "Socket.io", "MongoDB", "TensorFlow Lite"],
    liveUrl: "https://social-learning-app.com",
    githubUrl: "https://github.com/fluxforge/social-learning",
    featured: false,
    client: "EduTech Innovations",
    duration: "6 months",
    teamSize: "5 developers",
    challenge:
      "Develop an engaging mobile learning platform that combines education with social interaction while maintaining focus on learning outcomes.",
    solution:
      "Created a gamified learning experience with peer-to-peer interaction, progress tracking, and adaptive learning algorithms.",
    results: [
      "100,000+ active users",
      "85% course completion rate",
      "4.7/5 user satisfaction rating",
      "40% improvement in learning retention",
    ],
    timeline: [
      {
        phase: "Educational Research",
        duration: "2 weeks",
        description: "Learning methodology research, gamification strategy, and user persona development",
      },
      {
        phase: "App Development",
        duration: "16 weeks",
        description: "Cross-platform development, social features, and gamification implementation",
      },
      {
        phase: "Content Integration",
        duration: "4 weeks",
        description: "Educational content management, assessment tools, and progress tracking",
      },
      {
        phase: "Beta Testing & Launch",
        duration: "2 weeks",
        description: "User testing, feedback integration, and app store deployment",
      },
    ],
  },
*/