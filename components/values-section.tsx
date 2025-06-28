eriencia"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Settings, Lightbulb, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/hooks/use-language"

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
          <h3 className="text-2xl lg:text-3xl font-serif italic text-amber-600 mb-6">{t("values.subtitle")}</h3>
          <div className="w-20 h-1 bg-amber-400 mx-auto mb-8" />
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
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-amber-400 to-amber-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <value.icon className="w-10 h-10 text-white" />
                </div>
                <div className="absolute inset-0 w-20 h-20 mx-auto bg-amber-400 rounded-full opacity-20 group-hover:animate-ping" />
              </div>
              <h4 className="text-2xl font-semibold text-slate-900 mb-4">{value.title}</h4>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative overflow-hidden rounded-3xl"
          style={{
            backgroundImage: "url('/images/values-bg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/80 to-slate-900/70" />
          <div className="relative py-20 px-8 text-center">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-3xl lg:text-4xl font-light text-white mb-8 max-w-4xl mx-auto leading-tight"
            >
              {t("values.cta.text")}
            </motion.h3>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <Button
                size="lg"
                className="bg-amber-400 hover:bg-amber-500 text-slate-900 px-10 py-4 text-lg font-semibold tracking-wide transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                {t("values.cta.button")}
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
