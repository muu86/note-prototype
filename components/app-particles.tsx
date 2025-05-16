"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Particles } from "./magicui/particles"
import { Leaves } from "./leaves"

export function AppParticles() {
  const { resolvedTheme } = useTheme()
  const [color, setColor] = useState("#ffffff")

  useEffect(() => {
    setColor(resolvedTheme === "dark" ? "#ffffff" : "#000000")
  }, [resolvedTheme])

  return (
    <div className="bg-background relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg">
      {/* <div className="absolute top-48 left-1/2 hidden h-[300px] w-[700px] -translate-x-1/2 bg-orange-100 opacity-50 blur-3xl md:block dark:opacity-40" /> */}

      <h1 className="pointer-events-none z-10 text-center text-8xl leading-none font-semibold whitespace-pre-wrap">
        노트앱 프로토타입
      </h1>
      <p className="text-muted-foreground text-center">
        노트 테이킹 앱 프론트엔드
      </p>
      {/* <Particles
        className="absolute inset-0 z-0"
        quantity={100}
        ease={80}
        color={color}
        refresh
      /> */}

      {/* <Leaves /> */}
    </div>
  )
}
