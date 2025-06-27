"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Language = "es" | "en"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  es: {
    // Navbar
    "nav.inicio": "INICIO",
    "nav.nosotros": "NOSOTROS",
    "nav.servicios": "SERVICIOS",
    "nav.contacto": "CONTACTO",
    "nav.idioma": "IDIOMA",
    "nav.brand": "Camacho del Río",
    "nav.subtitle": "Abogados y Consultores S.C.",

    // Hero
    "hero.slide1.title": "RESPONSABILIDADES",
    "hero.slide1.subtitle": "ADMINISTRATIVAS",
    "hero.slide1.description":
      "Protegemos sus intereses con experiencia y dedicación en el ámbito del derecho administrativo.",
    "hero.slide1.button": "CONTÁCTANOS",
    "hero.slide2.title": "COMPRAS",
    "hero.slide2.subtitle": "GUBERNAMENTALES",
    "hero.slide2.description": "Coordinamos la participación de empresas en procedimeintos de contratación.",
    "hero.slide2.button": "CONTÁCTANOS",
    "hero.slide3.title": "CONSULTORÍA",
    "hero.slide3.subtitle": "LEGAL",
    "hero.slide3.description": "Soluciones jurídicas personalizadas para cada necesidad de nuestros clientes.",
    "hero.slide3.button": "CONTÁCTANOS",
    "hero.slide4.title": "LITIGIO",
    "hero.slide4.subtitle": "ADMINISTRATIVO",
    "hero.slide4.description": "Representación legal especializada con un enfoque estratégico y resultados efectivos.",
    "hero.slide4.button": "CONTÁCTANOS",

    // About
    "about.title": "NUESTRA",
    "about.subtitle": "FIRMA",
    "about.description1":
      "Somos una firma Mexicana de abogados especialistas en Derecho Administrativo, integrada por profesionales que compartimos la vocación de servir a México a través de nuestro trabajo.",
    "about.description2":
      "Tenemos como objetivo proporcionar a nuestros clientes un servicio personalizado, eficaz y de calidad, buscando siempre la solución más efectiva a los asuntos planteados.",
    "about.stats.cases": "Casos Exitosos",
    "about.stats.specialists": "Especialistas",
    "about.stats.availability": "Disponibilidad",
    "about.years": "Años de",
    "about.experience": "Experiencia",

    // Values
    "values.title": "CAMACHO DEL RÍO",
    "values.subtitle": "ABOGADOS Y CONSULTORES",
    "values.description": "Comprometidos con todos nuestros clientes, para ofrecerles el mejor servicio.",
    "values.mission.title": "Profesionalismo",
    "values.mission.description":
      "Brindar servicios jurídicos de excelencia con un enfoque integral y personalizado para cada cliente.",
    "values.vision.title": "Altamente preparados",
    "values.vision.description":
      "Ser la firma líder en Derecho Administrativo, reconocida por nuestra innovación y resultados.",
    "values.values.title": "Crecimietno continuo",
    "values.values.description":
      "Integridad, profesionalismo, compromiso y excelencia en cada uno de nuestros servicios.",
    "values.cta.text": "Somos una firma de abogados con más de 10 años de experiencia en Derecho Administrativo",
    "values.cta.button": "CONTÁCTANOS",

    // Services
    "services.title": "NUESTROS",
    "services.subtitle": "SERVICIOS",
    "services.litigio.title": "Litigio Administrativo",
    "services.litigio.description":
      "Asesoría y defensa en contra de actos u omisiones de las dependencias y entidades de la administración pública en todos los niveles de gobierno.",
    "services.detailsTitle": "Litigio"
    "sevices.litigio.details.1": "Interposición de recursos administrativos ante autoridades.",
    "sevices.litigio.details.2": "Juicios ante el TFJA y Tribunales locales.",
    "sevices.litigio.details.3": "Defensa de sanciones impuestas por las autoridades administrativas.",
    "services.benefitsTitle": "Beneficios",
    "services.litigio.benefits.1": "Atención personalizada",
    "services.litigio.benefits.2": "Contestación en tiempo real",
    "services.litigio.benefits.3": "Expertos en tu caso",
    "services.compras.title": "Compras Gubernamentales",
    "services.compras.description":
      "Coordinamos la participación de empresas en procedimientos de contratación con las diversas dependencias y entidades del sector público.",
    "services.responsabilidades.title": "Responsabilidades Administrativas",
    "services.responsabilidades.description":
      "Representación a servidores públicos o ex servidores, así como a particulares, en procedimientos administrativos de responsabilidades.",
    "services.migratorio.title": "Migratorio",
    "services.migratorio.description":
      "Asesoramos a nuestros clientes y sus familiares de nacionalidad extranjera para que obtengan la calidad migratoria que requieran en México.",
    "services.capacitacion.title": "Capacitación",
    "services.capacitacion.description":
      "Impartición de cursos de capacitación en materia de responsabilidades administrativas y Anticorrupción a servidores públicos.",
    "services.asesoria.title": "Asesoría",
    "services.asesoria.description":
      "Ofrecemos servicios de acompañamiento a dependencias y entidades durante la ejecución de las revisiones y auditorías gubernamentales.",
    "services.cta.text":
      "¿Necesita asesoría especializada en alguna de estas áreas? Nuestro equipo de expertos está listo para ayudarle.",
    "services.cta.button": "Solicitar Consulta",
    "services.ctaText": "En Camacho del Río Abogados y Consultores tu tranquilidad es lo más importante.",

    // Buttons
    "services.learnMore": "Ver más",
    "services.contactButton": "CONTÁCTANOS",

    // Contact
    "contact.banner": "Asesoría Jurídica en Materia de Fiscalización",
    "contact.title": "Contáctanos",
    "contact.description1":
      "Ponte en contacto con nosotros para cualquier duda sobre alguno de nuestros servicios, con gusto estaremos atendiendo tus peticiones.",
    "contact.description2":
      "En Camacho del Río Abogados y Consultores tu tranquilidad es lo más importante.",
    "contact.email": "Correo:",
    "contact.location": "Dónde nos Encontramos:",
    "contact.phone": "Teléfono:",
    "contact.form.name": "Nombre:",
    "contact.form.email": "Correo:",
    "contact.form.message": "Mensaje:",
    "contact.form.send": "Enviar Mensaje",
    "footer.copyright": "© Copyrights 2025. All Rights Reserved. / Delta Consultora Digital",
  },
  en: {
    // Navbar
    "nav.inicio": "HOME",
    "nav.nosotros": "ABOUT US",
    "nav.servicios": "SERVICES",
    "nav.contacto": "CONTACT",
    "nav.idioma": "LANGUAGE",

    // Hero
    "hero.slide1.title": "ADMINISTRATIVE",
    "hero.slide1.subtitle": "RESPONSIBILITIES",
    "hero.slide1.description":
      "We protect your interests with experience and dedication in the field of administrative law.",
    "hero.slide1.button": "CONTACT US",
    "hero.slide2.title": "CORPORATE",
    "hero.slide2.subtitle": "LAW",
    "hero.slide2.description": "Comprehensive advisory for companies at all stages of their corporate development.",
    "hero.slide2.button": "LEARN MORE",
    "hero.slide3.title": "LEGAL",
    "hero.slide3.subtitle": "CONSULTING",
    "hero.slide3.description": "Personalized legal solutions for each of our clients' needs.",
    "hero.slide3.button": "CONSULT",
    "hero.slide4.title": "STRATEGIC",
    "hero.slide4.subtitle": "LITIGATION",
    "hero.slide4.description": "Specialized legal representation with a strategic approach and effective results.",
    "hero.slide4.button": "GET ADVICE",

    // About
    "about.title": "OUR",
    "about.subtitle": "FIRM",
    "about.description1":
      "We are a Mexican law firm specializing in Administrative Law, comprised of professionals who share the vocation of serving Mexico through our work.",
    "about.description2":
      "Our objective is to provide our clients with personalized, efficient, and quality service, always seeking the most effective solution to the matters presented.",
    "about.stats.cases": "Successful Cases",
    "about.stats.specialists": "Specialists",
    "about.stats.availability": "Availability",
    "about.years": "Years of",
    "about.experience": "Experience",

    // Values
    "values.title": "CAMACHO DEL RÍO",
    "values.subtitle": "ATTORNEYS & CONSULTANTS",
    "values.description": "Committed to all our clients, to offer them the best service.",
    "values.mission.title": "Mission",
    "values.mission.description":
      "To provide excellent legal services with a comprehensive and personalized approach for each client.",
    "values.vision.title": "Vision",
    "values.vision.description":
      "To be the leading firm in Administrative Law, recognized for our innovation and results.",
    "values.values.title": "Values",
    "values.values.description": "Integrity, professionalism, commitment and excellence in each of our services.",
    "values.cta.text": "We are a law firm with more than 10 years of experience in Administrative Law",
    "values.cta.button": "CONTACT US",

    // Services
    "services.title": "OUR",
    "services.subtitle": "SERVICES",
    "services.litigio.title": "Administrative Litigation",
    "services.litigio.description":
      "Advisory and defense against acts or omissions of dependencies and entities of public administration at all levels of government.",
    "services.compras.title": "Government Procurement",
    "services.compras.description":
      "We coordinate the participation of companies in contracting procedures with various dependencies and entities of the public sector.",
    "services.responsabilidades.title": "Administrative Responsibilities",
    "services.responsabilidades.description":
      "Representation of public servants or former servants, as well as individuals, in administrative responsibility procedures.",
    "services.migratorio.title": "Immigration",
    "services.migratorio.description":
      "We advise our clients and their foreign family members to obtain the immigration status they require in Mexico.",
    "services.capacitacion.title": "Training",
    "services.capacitacion.description":
      "Training courses on administrative responsibilities and Anti-corruption for public servants.",
    "services.asesoria.title": "Advisory",
    "services.asesoria.description":
      "We offer accompaniment services to dependencies and entities during the execution of government reviews and audits.",
    "services.cta.text":
      "Do you need specialized advice in any of these areas? Our team of experts is ready to help you.",
    "services.cta.button": "Request Consultation",

    // Contact
    "contact.banner": "Legal Advisory in Audit Matters",
    "contact.title": "Contact Us",
    "contact.description1":
      "Get in touch with us for any questions about any of our services, we will be happy to attend to your requests.",
    "contact.description2":
      "Get in touch with us for any questions about any of our services, we will be happy to attend to your requests.",
    "contact.email": "Email:",
    "contact.location": "Where to Find Us:",
    "contact.phone": "Phone:",
    "contact.form.name": "Name:",
    "contact.form.email": "Email:",
    "contact.form.message": "Message:",
    "contact.form.send": "Send Message",
    "footer.copyright": "© Copyrights 2025. All Rights Reserved.",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("es")

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)[typeof language]] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
