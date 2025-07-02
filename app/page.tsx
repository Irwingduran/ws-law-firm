import Navbar from "@/components/navbar"
import CameraHeroSlider from "@/components/hero-slider"
import AboutSection from "@/components/about-section"
import ValuesSection from "@/components/values-section"
import ServicesSection from "@/components/services-section"
import ContactSection from "@/components/contact-section"
import SocialMediaButtons from "@/components/social-media-buttons"

export default function Home() {
  return (
    <main className="min-h-screen">
      <SocialMediaButtons/>
      <Navbar />
      <CameraHeroSlider />
      <AboutSection />
      <ValuesSection />
      <ServicesSection />
      <ContactSection />
    </main>
  )
}
