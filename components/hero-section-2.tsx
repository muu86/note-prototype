"use client"

import { motion } from "motion/react"
import React from "react"
import { AuroraBackground } from "@/components/aurora-background"

export function HeroSection() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col items-center justify-center gap-4 px-4"
      >
        <h1 className="text-center text-3xl font-bold md:text-7xl dark:text-white">
          팀의 흐름을 바꾸는 단 하나의 협업 도구
        </h1>
        <p className="text-muted-foreground mt-10 py-4 text-base font-extralight md:text-4xl dark:text-neutral-200">
          Fluxly는 빠르고 유연한 협업을 위해 태어났습니다.
        </p>
        <p className="text-muted-foreground py-4 text-base font-extralight md:text-4xl dark:text-neutral-200">
          지금, 당신의 팀에 가장 자연스러운 워크플로우를 만나보세요.
        </p>
        {/* <button className="w-fit rounded-full bg-black px-4 py-2 text-white dark:bg-white dark:text-black">
          Debug now
        </button> */}
      </motion.div>
    </AuroraBackground>
  )
}
