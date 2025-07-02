"use client"
import React, { useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import CameraHeroSlider from "./hero-slider"

interface CtaParallaxProps {
  title?: string
  subtitle?: string
  buttonText?: string
  onClick?: () => void
}

export default function CtaParallax({
  title = "En Camacho del Río Abogados y Consultores",
  subtitle = "Tu tranquilidad es nuestra prioridad.",
  buttonText = "CONTÁCTANOS",
  onClick,
}: CtaParallaxProps) {
  const parallaxRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!parallaxRef.current) return
      const offset = window.scrollY
      parallaxRef.current.style.backgroundPositionY = `${offset * 0.4}px`
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      ref={parallaxRef}
      className="relative w-full h-[100px] md:h-[250px] flex items-center justify-center overflow-hidden bg-gray-900/80"
      style={{
        backgroundImage: 'url(/img/books.png)',
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black/50 z-10" />
      <div className="relative z-20 flex flex-col items-center justify-center text-center text-white px-4">
        <h2 className="text-3xl md:text-5xl font-bold mb-2 drop-shadow-lg">{title}</h2>
        <p className="text-lg md:text-2xl mb-6 drop-shadow-md">{subtitle}</p>
        <Button onClick={CameraHeroSlider} size="lg" className="bg-[#941514] hover:bg-[#941514]/80 text-white shadow-lg">
          {buttonText}
        </Button>
      </div>
    </div>
  )
}
