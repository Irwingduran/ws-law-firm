"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Briefcase, DollarSign, Shield, Plane, GraduationCap, Users } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"

export default function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const { t } = useLanguage()

  const services = [
    {
      icon: Briefcase,
      title: t("services.litigio.title"),
      description: t("services.litigio.description"),
    },
    {
      icon: DollarSign,
      title: t("services.compras.title"),
      description: t("services.compras.description"),
    },
    {
      icon: Shield,
      title: t("services.responsabilidades.title"),
      description: t("services.responsabilidades.description"),
    },
    {
      icon: Plane,
      title: t("services.migratorio.title"),
      description: t("services.migratorio.description"),
    },
    {
      icon: GraduationCap,
      title: t("services.capacitacion.title"),
      description: t("services.capacitacion.description"),
    },
    {
      icon: Users,
      title: t("services.asesoria.title"),
      description: t("services.asesoria.description"),
    },
  ]

  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="w-20 h-1 bg-amber-400 mx-auto mb-6" />
          <h2 className="text-4xl lg:text-5xl font-light text-slate-900 mb-8">
            {t("services.title")} <span className="font-serif italic text-amber-600">{t("services.subtitle")}</span>
          </h2>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
            >
              {/* Icon */}
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl flex items-center justify-center group-hover:from-amber-400 group-hover:to-amber-500 transition-all duration-500">
                  <service.icon className="w-8 h-8 text-slate-600 group-hover:text-white transition-colors duration-500" />
                </div>
                <div className="absolute inset-0 w-16 h-16 bg-amber-400 rounded-xl opacity-0 group-hover:opacity-20 group-hover:animate-ping transition-opacity duration-500" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-slate-900 mb-4 group-hover:text-amber-600 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">{service.description}</p>

              {/* Hover Effect Line */}
              <div className="w-0 h-0.5 bg-gradient-to-r from-amber-400 to-amber-500 mt-6 group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">{t("services.cta.text")}</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            {t("services.cta.button")}
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
