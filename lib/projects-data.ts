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
]

export function getProjectById(id: string): Project | undefined {
  return projects.find((project) => project.id === id)
}

export function getRelatedProjects(currentProjectId: string, category: string, limit = 3): Project[] {
  return projects.filter((project) => project.id !== currentProjectId && project.category === category).slice(0, limit)
}
