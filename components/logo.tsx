import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"

type LogoProps = {
  iconClassName?: string
  textClassName?: string
}

export function Logo({ iconClassName, textClassName }: LogoProps) {
  return (
    <Link href="/" className="flex gap-2">
      <div className={cn("flex size-8 place-items-center", iconClassName)}>
        <Image
          className="bg-contain dark:invert"
          src="/logo.svg"
          width="200"
          height="200"
          alt="logo"
        />
      </div>
      <p className={cn("text-xl font-bold", textClassName)}>Fluxly</p>
    </Link>
  )
}
