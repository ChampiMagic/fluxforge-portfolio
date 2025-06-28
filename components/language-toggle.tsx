"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex items-center space-x-1 bg-neutral-light/50 rounded-full p-1">
      <Button
        variant={language === "en" ? "default" : "ghost"}
        size="sm"
        onClick={() => setLanguage("en")}
        className={`rounded-full px-3 py-1 text-xs font-medium transition-all ${
          language === "en" ? "bg-primary text-white shadow-sm" : "text-primary hover:bg-primary/10"
        }`}
      >
        EN
      </Button>
      <Button
        variant={language === "es" ? "default" : "ghost"}
        size="sm"
        onClick={() => setLanguage("es")}
        className={`rounded-full px-3 py-1 text-xs font-medium transition-all ${
          language === "es" ? "bg-primary text-white shadow-sm" : "text-primary hover:bg-primary/10"
        }`}
      >
        ES
      </Button>
    </div>
  )
}
