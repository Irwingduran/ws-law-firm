"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { useLanguage } from "@/hooks/use-language"

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const [imageLoaded, setImageLoaded] = useState(false)
  const { t } = useLanguage()

  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative group"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="/img/nosotros.jpeg"
                alt="Profesional trabajando en documentos legales"
                className={`w-full h-[500px] object-cover transition-all duration-700 ${
                  imageLoaded ? "scale-100" : "scale-110"
                } group-hover:scale-105`}
                onLoad={() => setImageLoaded(true)}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Floating Elements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-6 border border-gray-100"
            >
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-amber-400 rounded-full flex items-center justify-center">
                  <span className="text-slate-900 font-bold text-lg">15+</span>
                </div>
                <div>
                  <p className="text-sm text-gray-600">{t("about.years")}</p>
                  <p className="font-semibold text-slate-900">{t("about.experience")}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <motion.div
                initial={{ width: 0 }}
                animate={isInView ? { width: "80px" } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="h-1 bg-amber-400 mb-6"
              />
              <h2 className="text-4xl lg:text-5xl font-light text-slate-900 mb-6">
                {t("about.title")} <span className="font-serif italic text-amber-600">{t("about.subtitle")}</span>
              </h2>
            </div>

            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                {t("about.description1")}
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                {t("about.description2")}
              </motion.p>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1 }}
              className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600 mb-2">500+</div>
                <div className="text-sm text-gray-600">{t("about.stats.cases")}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600 mb-2">15+</div>
                <div className="text-sm text-gray-600">{t("about.stats.specialists")}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600 mb-2">24/7</div>
                <div className="text-sm text-gray-600">{t("about.stats.availability")}</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
