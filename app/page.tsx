import { Leaves } from "@/components/leaves"
import { MarqueeSection } from "@/components/marquee-section"
import { FeatureSection } from "@/components/feature-section"
import { HeroSection } from "@/components/hero-section-2"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <HeroSection />
      {/* <Leaves /> */}
      <MarqueeSection />
      <FeatureSection />
      <Footer />
    </>
  )
}
