"use client"

import { List } from "lucide-react"
import React from "react"

import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"
import { useToolbar } from "@/components/toolbars/toolbar-provider"

export function BulletListToolbar({
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
            editor?.isActive("bulletList") && "bg-accent",
            className,
          )}
          onClick={(e) => {
            editor?.chain().focus().toggleBulletList().run()
            onClick?.(e)
          }}
          disabled={!editor?.can().chain().focus().toggleBulletList().run()}
          {...props}
        >
          {children || <List className="h-4 w-4" />}
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <span>Bullet list</span>
      </TooltipContent>
    </Tooltip>
  )
}
