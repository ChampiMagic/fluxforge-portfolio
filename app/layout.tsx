import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"
import { LanguageProvider } from "@/components/language-provider"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
})

export const metadata: Metadata = {
  title: "FluxForge - Software Development Agency",
  description: "Modern software development solutions for your business. We create innovative digital experiences.",
  keywords: "software development, web development, mobile apps, digital solutions",
  authors: [{ name: "FluxForge" }],
  
  // Configuración completa de favicons e iconos
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '16x16 32x32', type: 'image/x-icon' },
      { url: '/favicons/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicons/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/favicons/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/favicons/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
  },
  
  // Configuración de manifest para PWA
  manifest: '/manifest.json',
  
  // Configuración de Apple Touch Icons
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'FluxForge Portfolio',
  },
  
  // Configuración de Open Graph
  openGraph: {
    title: "FluxForge - Software Development Agency",
    description: "Modern software development solutions for your business",
    url: "https://fluxforge.dev",
    siteName: "FluxForge",
    images: [
      {
        url: "/images/fluxforge-logo.png",
        width: 1200,
        height: 630,
        alt: "FluxForge - Software Development Agency",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  
  // Configuración de Twitter
  twitter: {
    card: "summary_large_image",
    title: "FluxForge - Software Development Agency",
    description: "Modern software development solutions for your business",
    images: ["/images/fluxforge-logo.png"],
    creator: "@fluxforge",
  },
  
  // Configuración de robots para SEO
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  
  // Configuración adicional de metadatos
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  
  // Configuración de tema
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
  
  // Configuración de aplicación
  applicationName: 'FluxForge Portfolio',
  category: 'business',
  classification: 'Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Meta tags adicionales para compatibilidad */}
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="msapplication-TileImage" content="/favicons/android-chrome-192x192.png" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        
        {/* Preconnect para performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange={false}>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
