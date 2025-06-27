"use client"
import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react"
import { useLanguage } from "@/hooks/use-language";

export default function CameraHeroSlider() {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [isPlaying, setIsPlaying] = useState(true)
  const [loadingProgress, setLoadingProgress] = useState(0)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const sliderRef = useRef<HTMLDivElement>(null)

  const slides = [
    {
      id: 1,
      image: "/slider/portada.jpeg",
      title: t("hero.slide1.title"),
      subtitle: t("hero.slide1.subtitle"),
      description: t("hero.slide1.description"),
      buttonText: t("hero.slide1.button"),
    },
    {
      id: 2,
      image: "/slider/slide3.jpeg",
      title: t("hero.slide2.title"),
      subtitle: t("hero.slide2.subtitle"),
      description: t("hero.slide2.description"),
      buttonText: t("hero.slide2.button"),
    },
    {
      id: 3,
      image: "/slider/slide3.jpeg",
      title: t("hero.slide3.title"),
      subtitle: t("hero.slide3.subtitle"),
      description: t("hero.slide3.description"),
      buttonText: t("hero.slide3.button"),
    },
    {
      id: 4,
      image: "/slider/Mision.jpeg",
      title: t("hero.slide4.title"),
      subtitle: t("hero.slide4.subtitle"),
      description: t("hero.slide4.description"),
      buttonText: t("hero.slide4.button"),
    },
  ];

  // Solo usamos 'mosaicSpiral' como efecto
  const createGridBlocks = () => {
    const cols = 8
    const rows = 6
    const blocks = []

    for (let i = 0; i < rows * cols; i++) {
      const row = Math.floor(i / cols)
      const col = i % cols
      const centerRow = Math.floor(rows / 2)
      const centerCol = Math.floor(cols / 2)
      const distance = Math.abs(row - centerRow) + Math.abs(col - centerCol)
      const delay = distance * 100

      blocks.push({
        id: i,
        row,
        col,
        delay,
        style: {
          gridRow: row + 1,
          gridColumn: col + 1,
        },
      })
    }

    return { blocks, cols, rows }
  }

  const nextSlide = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setLoadingProgress(0)

    const progressInterval = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          return 100
        }
        return prev + 2
      })
    }, 30)

    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
      setTimeout(() => {
        setIsTransitioning(false)
        setLoadingProgress(0)
      }, 1500)
    }, 500)
  }

  const prevSlide = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setLoadingProgress(0)

    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
      setTimeout(() => {
        setIsTransitioning(false)
        setLoadingProgress(0)
      }, 1500)
    }, 500)
  }

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentSlide) return
    setIsTransitioning(true)
    setLoadingProgress(0)

    setTimeout(() => {
      setCurrentSlide(index)
      setTimeout(() => {
        setIsTransitioning(false)
        setLoadingProgress(0)
      }, 1500)
    }, 500)
  }

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  // Auto-advance slides
  useEffect(() => {
    if (isPlaying && !isTransitioning) {
      intervalRef.current = setInterval(() => {
        nextSlide()
      }, 7000)
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isPlaying, isTransitioning])

  const { blocks, cols, rows } = createGridBlocks()

  return (
    <div
      ref={sliderRef}
      className="relative h-screen overflow-hidden bg-slate-900"
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => setIsPlaying(true)}
    >
      {/* Main Slides Container */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/60 to-transparent" />
            {/* Content */}
            <div className="relative z-20 h-full flex items-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="max-w-3xl">
                  <div className="mb-6">
                    <div className="w-20 h-1 bg-amber-400 mb-6"></div>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-white mb-4 leading-tight tracking-wide">
                      {slide.title}
                      <br />
                      <span className="font-serif italic text-amber-400">{slide.subtitle}</span>
                    </h1>
                  </div>
                  <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl font-light leading-relaxed">
                    {slide.description}
                  </p>
                  <Button
                    size="lg"
                    className="bg-amber-400 hover:bg-amber-500 text-slate-900 px-10 py-4 text-lg font-semibold tracking-wide transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    {slide.buttonText}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Mosaic Spiral Transition Grid Overlay */}
      {isTransitioning && (
        <div
          className="absolute inset-0 z-30 camera-grid camera-mosaicSpiral"
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${cols}, 1fr)`,
            gridTemplateRows: `repeat(${rows}, 1fr)`,
          }}
        >
          {blocks.map((block) => (
            <div
              key={block.id}
              className="camera-block"
              style={{
                animationDelay: `${block.delay}ms`,
                backgroundImage: `url(${slides[currentSlide].image})`,
                backgroundSize: `${cols * 100}% ${rows * 100}%`,
                backgroundPosition: `${(block.col * 100) / (cols - 1)}% ${(block.row * 100) / (rows - 1)}%`,
              }}
            />
          ))}
        </div>
      )}

      {/* Navigation Buttons */}
      <div className="absolute top-1/2 -translate-y-1/2 left-8 z-40">
        <button
          onClick={prevSlide}
          disabled={isTransitioning}
          className="group bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white p-4 rounded-full transition-all duration-300 disabled:opacity-50 border border-white/20"
        >
          <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform" />
        </button>
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 right-8 z-40">
        <button
          onClick={nextSlide}
          disabled={isTransitioning}
          className="group bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white p-4 rounded-full transition-all duration-300 disabled:opacity-50 border border-white/20"
        >
          <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform" />
        </button>
      </div>

      {/* Play/Pause Button */}
      <div className="absolute top-8 right-8 z-40">
        <button
          onClick={togglePlayPause}
          className="group bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300 border border-white/20"
        >
          {isPlaying ? (
            <Pause className="w-5 h-5 group-hover:scale-110 transition-transform" />
          ) : (
            <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
          )}
        </button>
      </div>

      {/* Pagination */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-40">
        <div className="flex items-center space-x-4 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              disabled={isTransitioning}
              className={`relative w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? "bg-amber-400 scale-125" : "bg-white/50 hover:bg-white/70"
              }`}
            >
              {index === currentSlide && (
                <div className="absolute inset-0 rounded-full bg-amber-400 animate-ping opacity-75"></div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Loading Progress Indicator */}
      {isTransitioning && loadingProgress < 100 && (
        <div className="absolute top-8 left-8 z-40">
          <div className="relative w-12 h-12">
            <svg className="w-12 h-12 transform -rotate-90" viewBox="0 0 36 36">
              <path
                className="text-white/20"
                stroke="currentColor"
                strokeWidth="3"
                fill="none"
                d="M18 2.0845a15.9155 15.9155 0 010 31.831a15.9155 15.9155 0 010-31.831"
              />
              <path
                className="text-amber-400"
                stroke="currentColor"
                strokeWidth="3"
                strokeDasharray={`${loadingProgress}, 100`}
                strokeLinecap="round"
                fill="none"
                d="M18 2.0845a15.9155 15.9155 0 010 31.831a15.9155 15.9155 0 010-31.831"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-xs text-white font-semibold">{Math.round(loadingProgress)}%</span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
