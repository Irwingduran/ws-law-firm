"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Settings, Lightbulb, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/app/providers/language-provider"
import CtaParallax from "./cta-parallax"

export default function ValuesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const { t } = useLanguage()

  const values = [
    {
      icon: Settings,
      title: t("values.mission.title"),
      description: t("values.mission.description"),
    },
    {
      icon: Lightbulb,
      title: t("values.vision.title"),
      description: t("values.vision.description"),
    },
    {
      icon: TrendingUp,
      title: t("values.values.title"),
      description: t("values.values.description"),
    },
  ]

  return (
    <section ref={ref} className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-light text-slate-900 mb-4">{t("values.title")}</h2>
          <h3 className="text-2xl lg:text-3xl font-serif italic text-[#941614] mb-6">{t("values.subtitle")}</h3>
          <div className="w-20 h-1 bg-[#941614] mx-auto mb-8" />
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">{t("values.description")}</p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group text-center p-8 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-500"
            >
              <div className="relative mb-6">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-[#941614] to-[#b31a17] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <value.icon className="w-10 h-10 text-white" />
                </div>
                <div className="absolute inset-0 w-20 h-20 mx-auto bg-[#941614] rounded-full opacity-20 group-hover:animate-ping" />
              </div>
              <h4 className="text-2xl font-semibold text-slate-900 mb-4">{value.title}</h4>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>

      </div>
       <CtaParallax />
    </section>
  )
}
