import { AppParticles } from "@/components/app-particles"
import { Safari } from "@/components/magicui/safari"

export function HeroSection() {
  return (
    <section className="relative mx-auto flex max-w-7xl items-center justify-center space-y-2 overflow-x-visible pt-32 pb-20">
      <AppParticles />

      {/* <Safari
        // url="magicui.design"
        className="size-full"
        videoSrc="https://videos.pexels.com/video-files/27180348/12091515_2560_1440_50fps.mp4"
      /> */}
    </section>
  )
}
