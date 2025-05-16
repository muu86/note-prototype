"use client"

import { headerNavLinks } from "@/data/nav-links"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { ThemeSwitch } from "./theme-switch"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu"
import { useTheme } from "next-themes"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  // const router = useRouter()
  const pathname = usePathname()

  const { resolvedTheme } = useTheme()

  useEffect(() => {
    const changeBackground = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    document.addEventListener("scroll", changeBackground)

    return () => document.removeEventListener("scroll", changeBackground)
  }, [])

  return (
    <header
      className={cn(
        "border-border bg-card fixed inset-x-0 top-4 left-[calc(100vw-100%)] z-40 mx-8 flex h-[60px] items-center justify-between rounded-3xl border px-4 shadow-sm saturate-100 backdrop-blur-[4px] transition-all duration-200 md:mx-auto md:max-w-[768px] md:px-8 lg:max-w-[1168px]",
        isScrolled && "bg-background/80 border-transparent",
      )}
    >
      <div className="mx-auto flex h-[60px] w-full items-center justify-between">
        <Link href="/" className="flex gap-2">
          <div className="flex size-8 place-items-center">
            <Image
              className="bg-contain dark:invert"
              src="/logo.svg"
              width="200"
              height="200"
              alt="logo"
            />
          </div>
          <p className="text-xl font-bold">Fluxly</p>

          {/* <SiteLogo kind={"logo"} size={10} logoType="link" /> */}
        </Link>
        <div className="mx-auto flex items-center md:space-x-3">
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              {headerNavLinks.map(
                (link, _) =>
                  !link.hidden && (
                    <NavigationMenuItem key={link.href}>
                      <NavigationMenuLink
                        active={
                          (pathname.startsWith(link.href) &&
                            link.href !== "/") ||
                          pathname === link.href
                        }
                        className={cn(
                          navigationMenuTriggerStyle(),
                          (pathname.startsWith(link.href) &&
                            link.href !== "/") ||
                            pathname === link.href
                            ? "text-foreground"
                            : "text-foreground/60",
                        )}
                        asChild
                      >
                        <Link
                          href={link.href}
                          // key={`link-${link.href}`}
                          // legacyBehavior
                          // passHref
                        >
                          {link.title}
                        </Link>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  ),
              )}
            </NavigationMenuList>
          </NavigationMenu>

          {/* <SearchButton />
          <AnalyticsButton /> */}
          <ThemeSwitch />
          {/* {session ? (
            <UserDropdown session={session} />
          ) 
          : // (
          //   <Suspense fallback="...">
          //     <SignInModal />
          //   </Suspense>
          // )
          null} 
          */}
          {/* <MobileNav /> */}
        </div>
      </div>
    </header>
  )
}
