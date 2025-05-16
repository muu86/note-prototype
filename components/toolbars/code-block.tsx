"use client"

import { Code, Code2 } from "lucide-react"
import React from "react"

import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"
import { useToolbar } from "@/components/toolbars/toolbar-provider"

export function CodeBlockToolbar({
  className,
  onClick,
  children,
  ...props
}: React.ComponentProps<"button">) {
  const { editor } = useToolbar()
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className={cn(
            "h-8 w-8",
            editor?.isActive("codeBlock") && "bg-accent",
            className,
          )}
          onClick={(e) => {
            editor?.chain().focus().toggleCodeBlock().run()
            onClick?.(e)
          }}
          disabled={!editor?.can().chain().focus().toggleCodeBlock().run()}
          {...props}
        >
          {children || <Code className="h-4 w-4" />}
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <span>Code Block</span>
      </TooltipContent>
    </Tooltip>
  )
}
