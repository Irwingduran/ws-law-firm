"use client"
import React, { useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/app/providers/language-provider"

export default function CtaParallax() {
  const parallaxRef = useRef<HTMLDivElement>(null)
  const { t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      if (!parallaxRef.current) return
      const offset = window.scrollY
      // Cambiamos backgroundPositionY para el efecto parallax
      parallaxRef.current.style.backgroundPositionY = `${offset * 0.4}px`
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      ref={parallaxRef}
      className="relative w-full h-[300px] md:h-[400px] overflow-hidden flex items-center justify-center"
      style={{
        backgroundImage: 'url(/img/books.png)', // Asegúrate de que esta ruta sea correcta
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed', // Esto ayuda a enfatizar el efecto
        transition: 'background-position-y 0.1s linear'
      }}
    >
      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Contenido */}
      <div className="relative z-20 text-center px-4 text-white">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg">
          {t("values.cta.text")}
        </h2>
        <p className="text-xl md:text-2xl mb-8 drop-shadow-md">
          {t("services.ctaText")}
        </p>
        <Button
          onClick={() => window.open("https://wa.me/55515136357", "_blank")}
          size="lg"
          className="bg-[#941614] hover:bg-[#941614]/90 text-white shadow-lg transition-all"
        >
          {t("services.contactButton")}
        </Button>
      </div>
    </div>
  )
}