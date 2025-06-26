"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone, Send } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"
import CtaParallax from "./cta-parallax"

export default function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const { t } = useLanguage()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <>
      {/* Header Banner */}
     <CtaParallax />

      {/* Contact Form Section */}
      <section ref={ref} className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-4xl font-light text-slate-900 mb-6">{t("contact.title")}</h3>
                <div className="w-20 h-1 bg-amber-400 mb-8" />
                <p className="text-lg text-gray-700 leading-relaxed mb-8">{t("contact.description1")}</p>
                <p className="text-lg text-gray-700 leading-relaxed">{t("contact.description2")}</p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="flex items-start space-x-4"
                >
                  <div className="w-12 h-12 bg-amber-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">{t("contact.email")}</h4>
                    <p className="text-gray-600">contacto@camachodelrio.com</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="flex items-start space-x-4"
                >
                  <div className="w-12 h-12 bg-amber-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">{t("contact.location")}</h4>
                    <p className="text-gray-600">Polanco - CDMX</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="flex items-start space-x-4"
                >
                  <div className="w-12 h-12 bg-amber-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">{t("contact.phone")}</h4>
                    <p className="text-gray-600">+52 (55) 1513-6357</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-xl p-8"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      {t("contact.form.name")}
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all duration-300"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      {t("contact.form.email")}
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all duration-300"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    {t("contact.form.message")}
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all duration-300 resize-none"
                    required
                  />
                </div>

                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    type="submit"
                    className="w-full bg-slate-900 hover:bg-slate-800 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
                  >
                    <Send className="w-5 h-5" />
                    <span>{t("contact.form.send")}</span>
                  </Button>
                </motion.div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400 mb-2">{t("footer.copyright")}</p>
          </div>
        </div>
      </footer>
    </>
  )
}
