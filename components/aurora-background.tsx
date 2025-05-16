"use client"

import { cn } from "@/lib/utils"
import React from "react"

interface AuroraBackgroundProps extends React.ComponentProps<"div"> {
  showRadialGradient?: boolean
}

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <main>
      <div
        className={cn(
          "transition-bg relative flex min-h-[80svh] flex-col items-center justify-center bg-zinc-50 text-slate-950 dark:bg-zinc-900",
          className,
        )}
        {...props}
      >
        <div className="absolute inset-0 overflow-hidden">
          <div
            //   I'm sorry but this is what peak developer performance looks like // trigger warning
            className={cn(
              "absolute",
              "pointer-events-none",

              "opacity-50",

              "after:animate-aurora",
              "after:absolute",
              "after:inset-0",
              "after:[background-image:var(--color-white-gradient),var(--aurora)]",
              "after:[background-size:200%,_100%]",
              "after:[background-attachment:fixed]",
              `after:mix-blend-difference after:content-[""]`,
              "after:dark:[background-image:var(--dark-gradient),var(--aurora)]",

              "[background-image:var(--color-white-gradient),var(--aurora)]",
              "[background-size:300%,_200%]",
              "[background-position:50%_50%,50%_50%]",

              "-inset-[10px]",
              "blur-[10px]",
              "invert",
              "filter",
              "will-change-transform",

              "dark:[background-image:var(--dark-gradient),var(--aurora)]",
              "dark:invert-0",

              showRadialGradient &&
                `[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,transparent_70%)]`,
            )}
          ></div>
        </div>
        {children}
      </div>
    </main>
  )
}
