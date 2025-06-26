"use client"

import { useState } from "react"
import { ChevronDown, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/hooks/use-language"
import Image from "next/image"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const { language, setLanguage, t } = useLanguage()

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
  }

  const handleLanguageChange = (lang: "es" | "en") => {
    setLanguage(lang)
    setActiveDropdown(null)
  }

  return (
    <nav className="bg-slate-900 text-white relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="hover:text-gray-300 transition-colors">
              {t("nav.inicio")}
            </a>
            <span className="text-gray-400">/</span>
            <a href="#" className="hover:text-gray-300 transition-colors">
              {t("nav.nosotros")}
            </a>
            <span className="text-gray-400">/</span>

            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown("services")}
                className="flex items-center space-x-1 hover:text-gray-300 transition-colors"
              >
                <span>{t("nav.servicios")}</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {activeDropdown === "services" && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white text-gray-900 rounded-md shadow-lg py-2 z-50">
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                    {t("services.responsabilidades.title")}
                  </a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                    {language === "es" ? "Derecho Corporativo" : "Corporate Law"}
                  </a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                    {language === "es" ? "Litigios" : "Litigation"}
                  </a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                    {language === "es" ? "Consultoría Legal" : "Legal Consulting"}
                  </a>
                </div>
              )}
            </div>

            <span className="text-gray-400">/</span>
            <a href="#" className="hover:text-gray-300 transition-colors">
              {t("nav.contacto")}
            </a>
            <span className="text-gray-400">/</span>

          </div>

          {/* Brand */}
          <div className="flex items-center space-x-4">
            <div className="text-right">
             <Image src="/logo.png" alt="logo" width={150} height={150} />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-gray-300"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-700">
            <div className="flex flex-col space-y-4">
              <a href="#" className="hover:text-gray-300 transition-colors">
                {t("nav.inicio")}
              </a>
              <a href="#" className="hover:text-gray-300 transition-colors">
                {t("nav.nosotros")}
              </a>
              <a href="#" className="hover:text-gray-300 transition-colors">
                {t("nav.servicios")}
              </a>
              <a href="#" className="hover:text-gray-300 transition-colors">
                {t("nav.contacto")}
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
