"use client"

import { useRef, useState } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { Briefcase, DollarSign, Shield, GraduationCap, Users, X, ChevronRight } from "lucide-react"
import { useLanguage } from "@/app/providers/language-provider"
import { Button } from "./ui/button"


interface Service {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
  details?: string[]
  benefits?: string[]
}

export default function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const [selectedService, setSelectedService] = useState<Service | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const { t } = useLanguage()

  const handleClick = () => {
    window.open('https://tu-url-de-contacto.com', '_blank')
  }

  const services: Service[] = [
    {
      icon: Briefcase,
      title: t("services.litigio.title"),
      description: t("services.litigio.description"),
      details: [
        t("services.litigio.details.1"),
        t("services.litigio.details.2"),
        t("services.litigio.details.3"),
      ],
      benefits: [
        t("services.benefits.1"),
        t("services.benefits.2"),
        t("services.benefits.3"),
      ]
    },
    {
      icon: DollarSign,
      title: t("services.compras.title"),
      description: t("services.compras.description"),
      details: [
        t("services.compras.details.1"),
        t("services.compras.details.2"),
        t("services.compras.details.3"),
      ],
      benefits: [
        t("services.benefits.1"),
        t("services.benefits.2"),
        t("services.benefits.3"),
      ]
    },
    {
      icon: Shield,
      title: t("services.responsabilidades.title"),
      description: t("services.responsabilidades.description"),
      details: [
        t("services.responsabilidades.details.1"),
        t("services.responsabilidades.details.2"),
        t("services.responsabilidades.details.3"),
      ],
      benefits: [
        t("services.benefits.1"),
        t("services.benefits.2"),
        t("services.benefits.3"),
      ]
    },
    /*{
      icon: Plane,
      title: t("services.migratorio.title"),
      description: t("services.migratorio.description"),
      details: [
        t("services.migratorio.details.1"),
        t("services.migratorio.details.2"),
        t("services.migratorio.details.3"),
      ],
      benefits: [
        t("services.migratorio.benefits.1"),
        t("services.migratorio.benefits.2"),
        t("services.migratorio.benefits.3"),
      ]
    },*/
    {
      icon: GraduationCap,
      title: t("services.capacitacion.title"),
      description: t("services.capacitacion.description"),
      details: [
        t("services.capacitacion.details.1"),
        t("services.capacitacion.details.2"),
        t("services.capacitacion.details.3"),
      ],
      benefits: [
        t("services.benefits.1"),
        t("services.benefits.2"),
        t("services.benefits.3"),
      ]
    },
    {
      icon: Users,
      title: t("services.asesoria.title"),
      description: t("services.asesoria.description"),
      details: [
        t("services.asesoria.details.1"),
        t("services.asesoria.details.2"),
        t("services.asesoria.details.3"),
      ],
      benefits: [
        t("services.benefits.1"),
        t("services.benefits.2"),
        t("services.benefits.3"),
      ]
    },
  ]

  const openModal = (service: Service) => {
    setSelectedService(service)
    setIsModalOpen(true)
    document.body.style.overflow = 'hidden' // Prevent scrolling when modal is open
  }

  const closeModal = () => {
    setIsModalOpen(false)
    document.body.style.overflow = 'auto' // Re-enable scrolling
  }

  return (
    <section ref={ref} className="py-20 bg-gray-50 relative">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-amber-50 to-transparent opacity-30" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-amber-100 rounded-full filter blur-3xl opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="w-20 h-1 bg-[#941614] mx-auto mb-6" />
          <h2 className="text-4xl lg:text-5xl font-light text-slate-900 mb-8">
            {t("services.title")} <span className="font-serif italic text-[#941614]">{t("services.subtitle")}</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t("services.intro")}
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 cursor-pointer"
              onClick={() => openModal(service)}
            >
              {/* Icon */}
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl flex items-center justify-center group-hover:from-[#941614] group-hover:to-[#b31a17] transition-all duration-500">
                  <service.icon className="w-8 h-8 text-slate-600 group-hover:text-white transition-colors duration-500" />
                </div>
                <div className="absolute inset-0 w-16 h-16 bg-[#941614] rounded-xl opacity-0 group-hover:opacity-20 group-hover:animate-ping transition-opacity duration-500" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-slate-900 mb-4 group-hover:text-[#941614] transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm mb-6">{service.description}</p>

              {/* Learn more link */}
              <div className="flex items-center text-[#941614] group-hover:text-[#b31a17] transition-colors duration-300">
                <span className="text-sm font-medium">{t("services.learnMore")}</span>
                <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
              </div>

              {/* Hover Effect Line */}
              <div className="w-0 h-0.5 bg-gradient-to-r from-[#941614] to-[#b31a17] mt-6 group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && selectedService && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black bg-opacity-50 z-50"
              onClick={closeModal}
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 flex items-center justify-center p-4 z-50"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative">
                {/* Close button */}
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
                  aria-label="Close modal"
                >
                  <X className="w-6 h-6 text-gray-500" />
                </button>

                {/* Modal content */}
                <div className="p-8 md:p-12">
                  {/* Service header */}
                  <div className="flex items-start mb-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#941614] to-[#b31a17] rounded-xl flex items-center justify-center mr-6 flex-shrink-0">
                      <selectedService.icon className="w-10 h-10 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-2">{selectedService.title}</h3>
                      <p className="text-gray-600">{selectedService.description}</p>
                    </div>
                  </div>

                  {/* Details and benefits */}
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Details */}
                    <div>
                      <h4 className="text-lg font-semibold text-slate-900 mb-4 pb-2 border-b border-gray-200">
                        {t("services.detailsTitle")}
                      </h4>
                      <ul className="space-y-3">
                        {selectedService.details?.map((detail, index) => (
                          <li key={index} className="flex items-start">
                            <div className="w-5 h-5 bg-amber-100 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                              <ChevronRight className="w-3 h-3 text-[#941614]" />
                            </div>
                            <span className="text-gray-700">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Benefits */}
                    <div>
                      <h4 className="text-lg font-semibold text-slate-900 mb-4 pb-2 border-b border-gray-200">
                        {t("services.benefitsTitle")}
                      </h4>
                      <ul className="space-y-3">
                        {selectedService.benefits?.map((benefit, index) => (
                          <li key={index} className="flex items-start">
                            <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                              <ChevronRight className="w-3 h-3 text-green-600" />
                            </div>
                            <span className="text-gray-700">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  )
}
