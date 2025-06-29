# 🚀 FluxForge Portfolio

Un portafolio profesional moderno y bilingüe (Español/Inglés) para mostrar proyectos de desarrollo de software, construido con Next.js 15 y las mejores prácticas de desarrollo web.

![FluxForge Portfolio](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.0-38B2AC?style=for-the-badge&logo=tailwind-css)
![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react)

## 📋 Tabla de Contenidos

- [Descripción del Proyecto](#-descripción-del-proyecto)
- [Características](#-características)
- [Tecnologías Utilizadas](#-tecnologías-utilizadas)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Instalación y Configuración](#-instalación-y-configuración)
- [Uso](#-uso)
- [Características Principales](#-características-principales)
- [Sistema de Traducción](#-sistema-de-traducción)
- [Gestión de Proyectos](#-gestión-de-proyectos)
- [Deployment](#-deployment)
- [Contribución](#-contribución)
- [Licencia](#-licencia)

## 🎯 Descripción del Proyecto

FluxForge Portfolio es una aplicación web moderna y responsiva diseñada para mostrar proyectos de desarrollo de software de manera profesional. El sitio incluye:

- **Portafolio de Proyectos**: Galería interactiva con filtros por categoría
- **Sistema Bilingüe**: Soporte completo para Español e Inglés
- **Diseño Responsivo**: Optimizado para todos los dispositivos
- **Animaciones Modernas**: Efectos visuales suaves y atractivos
- **SEO Optimizado**: Configurado para motores de búsqueda
- **PWA Ready**: Preparado para funcionar como aplicación web progresiva

## ✨ Características

### 🌐 **Multilingüe**
- Soporte completo para Español e Inglés
- Detección automática del idioma del navegador
- Cambio dinámico de idioma sin recargar la página
- Contenido de proyectos traducido automáticamente

### 📱 **Responsivo**
- Diseño adaptativo para móviles, tablets y desktop
- Navegación optimizada para touch
- Imágenes optimizadas para diferentes resoluciones

### 🎨 **UI/UX Moderna**
- Diseño limpio y profesional
- Animaciones suaves y transiciones
- Efectos hover interactivos
- Paleta de colores consistente

### ⚡ **Performance**
- Optimización de imágenes automática
- Lazy loading de componentes
- Código dividido automático
- Caché inteligente

## 🛠 Tecnologías Utilizadas

### **Frontend Framework**
- **Next.js 15**: Framework de React con App Router
- **React 18**: Biblioteca de interfaz de usuario
- **TypeScript 5.0**: Tipado estático para JavaScript

### **Styling & UI**
- **Tailwind CSS 3.0**: Framework de CSS utility-first
- **Radix UI**: Componentes de interfaz accesibles
- **Lucide React**: Iconografía moderna
- **Framer Motion**: Animaciones avanzadas

### **Development Tools**
- **ESLint**: Linting de código
- **Prettier**: Formateo de código
- **PostCSS**: Procesamiento de CSS
- **Autoprefixer**: Prefijos CSS automáticos

### **Build & Deployment**
- **Vercel**: Plataforma de deployment
- **Next.js Image Optimization**: Optimización automática de imágenes
- **Webpack 5**: Bundling de módulos

## 📁 Estructura del Proyecto

```
fluxforge-portfolio/
├── app/                          # App Router de Next.js 15
│   ├── globals.css              # Estilos globales
│   ├── layout.tsx               # Layout principal
│   ├── page.tsx                 # Página de inicio
│   └── projects/                # Páginas de proyectos
│       ├── page.tsx             # Lista de proyectos
│       └── [id]/                # Páginas dinámicas
│           └── page.tsx         # Detalle de proyecto
├── components/                   # Componentes React
│   ├── ui/                      # Componentes base (shadcn/ui)
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── badge.tsx
│   │   └── ...
│   ├── hero-section.tsx         # Sección hero
│   ├── about-section.tsx        # Sección sobre nosotros
│   ├── services-section.tsx     # Sección de servicios
│   ├── portfolio-section.tsx    # Sección de portafolio
│   ├── contact-section.tsx      # Sección de contacto
│   ├── navbar.tsx               # Navegación
│   ├── footer.tsx               # Pie de página
│   ├── language-provider.tsx    # Proveedor de idiomas
│   └── language-toggle.tsx      # Toggle de idioma
├── lib/                         # Utilidades y datos
│   ├── projects-data.ts         # Datos de proyectos
│   └── utils.ts                 # Funciones utilitarias
├── hooks/                       # Custom hooks
│   ├── use-mobile.tsx           # Hook para detección móvil
│   └── use-toast.ts             # Hook para notificaciones
├── public/                      # Archivos estáticos
│   └── images/                  # Imágenes del proyecto
├── styles/                      # Estilos adicionales
└── package.json                 # Dependencias del proyecto
```

## 🚀 Instalación y Configuración

### **Prerrequisitos**
- Node.js 18.0 o superior
- npm, yarn, pnpm o bun

### **1. Clonar el Repositorio**
```bash
git clone https://github.com/tu-usuario/fluxforge-portfolio.git
cd fluxforge-portfolio
```

### **2. Instalar Dependencias**
```bash
npm install
# o
yarn install
# o
pnpm install
```

### **3. Configurar Variables de Entorno**
Crea un archivo `.env.local` en la raíz del proyecto:
```env
NEXT_PUBLIC_SITE_URL=https://tu-dominio.com
NEXT_PUBLIC_GA_ID=tu-google-analytics-id
```

### **4. Ejecutar en Desarrollo**
```bash
npm run dev
# o
yarn dev
# o
pnpm dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver el resultado.

### **5. Construir para Producción**
```bash
npm run build
npm start
```

## 📖 Uso

### **Navegación Principal**
- **Inicio**: Página principal con hero section
- **Nosotros**: Información sobre FluxForge
- **Servicios**: Servicios ofrecidos
- **Portafolio**: Galería de proyectos
- **Contacto**: Formulario de contacto

### **Filtros de Proyectos**
- **Todos**: Muestra todos los proyectos
- **Desarrollo Web**: Proyectos web
- **Apps Móviles**: Aplicaciones móviles
- **Soluciones Cloud**: Proyectos cloud

### **Cambio de Idioma**
- Toggle EN/ES en la barra de navegación
- Detección automática del idioma del navegador
- Persistencia del idioma seleccionado

## 🔧 Características Principales

### **Sistema de Traducción**
```typescript
// Ejemplo de uso del sistema de traducción
const { t, language } = useLanguage()
const translatedText = t("hero.title")
```

### **Gestión de Proyectos**
```typescript
// Obtener proyectos por idioma
const projects = getProjectsByLanguage(language)

// Obtener proyecto específico
const project = getProjectByIdAndLanguage(id, language)
```

### **Componentes Reutilizables**
- Sistema de componentes basado en shadcn/ui
- Componentes accesibles y semánticos
- Estilos consistentes con Tailwind CSS

## 🌍 Sistema de Traducción

El proyecto utiliza un sistema de traducción personalizado con las siguientes características:

### **Estructura de Traducciones**
```typescript
const translations = {
  en: {
    "nav.home": "Home",
    "hero.title": "Forging the Future of",
    // ... más traducciones
  },
  es: {
    "nav.home": "Inicio",
    "hero.title": "Forjando el Futuro del",
    // ... más traducciones
  }
}
```

### **Datos de Proyectos Bilingües**
```typescript
// Estructura de datos separada por idioma
export const projects: Project[] = [/* proyectos en español */]
export const projectsEN: Project[] = [/* proyectos en inglés */]
```

## 📊 Gestión de Proyectos

### **Estructura de un Proyecto**
```typescript
interface Project {
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
  timeline: TimelinePhase[]
}
```

### **Agregar un Nuevo Proyecto**
1. Agregar datos en `lib/projects-data.ts`
2. Incluir imágenes en `public/images/`
3. Crear traducciones para ambos idiomas
4. Actualizar filtros si es necesario

## 🚀 Deployment

### **Vercel (Recomendado)**
1. Conecta tu repositorio a Vercel
2. Configura las variables de entorno
3. Deploy automático en cada push

### **Otros Proveedores**
- **Netlify**: Compatible con Next.js
- **Railway**: Deploy rápido y fácil
- **DigitalOcean App Platform**: Escalable

### **Variables de Entorno de Producción**
```env
NEXT_PUBLIC_SITE_URL=https://tu-dominio.com
NEXT_PUBLIC_GA_ID=tu-google-analytics-id
```

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

### **Guías de Contribución**
- Usa TypeScript para todo el código nuevo
- Sigue las convenciones de ESLint
- Agrega tests para nuevas funcionalidades
- Documenta cambios importantes

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 📞 Contacto

- **Email**: fluxforgeagency@gmail.com
- **Teléfono**: +54 37943886865
- **Ubicación**: Buenos Aires, Argentina

## 🙏 Agradecimientos

- [Next.js](https://nextjs.org/) - Framework de React
- [Tailwind CSS](https://tailwindcss.com/) - Framework de CSS
- [shadcn/ui](https://ui.shadcn.com/) - Componentes de UI
- [Lucide](https://lucide.dev/) - Iconografía
- [Vercel](https://vercel.com/) - Plataforma de deployment

---

**Desarrollado con ❤️ por FluxForge**
