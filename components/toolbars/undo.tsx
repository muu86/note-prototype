"use client"

import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"

import { CornerUpLeft } from "lucide-react"
import { useToolbar } from "./toolbar-provider"

export function UndoToolbar({
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
          className={cn("h-8 w-8", className)}
          onClick={(e) => {
            editor?.chain().focus().undo().run()
            onClick?.(e)
          }}
          disabled={!editor?.can().chain().focus().undo().run()}
          {...props}
        >
          {children || <CornerUpLeft className="h-4 w-4" />}
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <span>Undo</span>
      </TooltipContent>
    </Tooltip>
  )
}
