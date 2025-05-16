import { cn } from "@/lib/utils"
import { Logo } from "./logo"

export function Footer() {
  return (
    <footer className="mt-20">
      {/* prettier-ignore */}
      <div
        className={cn(`
          pointer-events-none relative -z-2 mx-auto my-[-18.8rem] h-[50rem] overflow-hidden [mask-image:radial-gradient(ellipse_at_center_center,#000,transparent_50%)] 
          
          before:absolute before:inset-0 before:h-full before:w-full 
          before:[background-image:radial-gradient(circle_at_bottom_center,var(--color-blue-600),transparent_70%)] before:opacity-40 
          
          after:bg-background after:absolute after:top-1/2 after:-left-1/2 after:aspect-[1/0.7] after:w-[200%] after:rounded-[50%] after:border-t after:border-[hsl(var(--border))]
          `,
        )}
      />

      <div className="mx-auto max-w-5xl space-y-16 px-6 py-8 lg:px-4 lg:py-32">
        <div className="space-y-6 lg:grid lg:grid-cols-3 lg:space-y-0">
          <Logo />
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 lg:col-span-2">
            <div>
              <h3 className="block text-sm font-medium text-[--title-text-color]">
                Resources
              </h3>
              <ul className="mt-4 list-inside space-y-2">
                <li>
                  <a
                    className="text-sm font-normal text-[--body-text-color] transition hover:text-gray-950 dark:hover:text-white"
                    href="https://dev.to/tailus/"
                    target="_blank"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    className="text-sm font-normal text-[--body-text-color] transition hover:text-gray-950 dark:hover:text-white"
                    href="https://tailus.lemonsqueezy.com/"
                    target="_blank"
                  >
                    Store
                  </a>
                </li>
                <li>
                  <a
                    className="text-sm font-normal text-[--body-text-color] transition hover:text-gray-950 dark:hover:text-white"
                    href="https://tailus.gumroad.com/"
                    target="_blank"
                  >
                    Gumroad
                  </a>
                </li>
                <li>
                  <a
                    className="text-sm font-normal text-[--body-text-color] transition hover:text-gray-950 dark:hover:text-white"
                    href="https://preview.tailus.io/"
                    target="_blank"
                  >
                    Preview
                  </a>
                </li>
                <li>
                  <a
                    className="text-sm font-normal text-[--body-text-color] transition hover:text-gray-950 dark:hover:text-white"
                    href="https://tailus.lemonsqueezy.com/"
                    target="_blank"
                  >
                    VS Code extension
                  </a>
                </li>
                <li>
                  <a
                    className="text-sm font-normal text-[--body-text-color] transition hover:text-gray-950 dark:hover:text-white"
                    href="https://tailtips.dev"
                    target="_blank"
                  >
                    Tailtips
                  </a>
                </li>
                <li>
                  <a
                    className="text-sm font-normal text-[--body-text-color] transition hover:text-gray-950 dark:hover:text-white"
                    href="https://spectr.irung.me"
                    target="_blank"
                  >
                    Spectr
                  </a>
                </li>
                <li>
                  <a
                    className="text-sm font-normal text-[--body-text-color] transition hover:text-gray-950 dark:hover:text-white"
                    href="https://aspect.irung.me"
                    target="_blank"
                  >
                    Aspect
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="block text-sm font-medium text-[--title-text-color]">
                UI Kits
              </h3>
              <ul className="mt-4 list-inside space-y-2">
                <li>
                  <a
                    className="text-sm font-normal text-[--body-text-color] transition hover:text-gray-950 dark:hover:text-white"
                    href="https://ui.tailus.io"
                    target="_self"
                  >
                    React
                  </a>
                </li>
                <li>
                  <a
                    className="text-sm font-normal text-[--body-text-color] transition hover:text-gray-950 dark:hover:text-white"
                    href="https://html.tailus.io"
                    target="_self"
                  >
                    HTML
                  </a>
                </li>
                <li>
                  <a
                    className="text-sm font-normal text-[--body-text-color] transition hover:text-gray-950 dark:hover:text-white"
                    href="https://ui.tailus.io/themer/get-started/introduction/"
                    target="_self"
                  >
                    Themer
                  </a>
                </li>
                <li>
                  <a
                    className="text-sm font-normal text-[--body-text-color] transition hover:text-gray-950 dark:hover:text-white"
                    href="https://github.com/tailus-ui/html.tailus.io"
                    target="_self"
                  >
                    Symfony
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="block text-sm font-medium text-[--title-text-color]">
                Templates
              </h3>
              <ul className="mt-4 list-inside space-y-2">
                <li>
                  <a
                    className="text-sm font-normal text-[--body-text-color] transition hover:text-gray-950 dark:hover:text-white"
                    href="https://preview.tailus.io/ampire/"
                    target="_self"
                  >
                    Ampire
                  </a>
                </li>
                <li>
                  <a
                    className="text-sm font-normal text-[--body-text-color] transition hover:text-gray-950 dark:hover:text-white"
                    href="https://preview.tailus.io/radiant/"
                    target="_self"
                  >
                    Radiant
                  </a>
                </li>
                <li>
                  <a
                    className="text-sm font-normal text-[--body-text-color] transition hover:text-gray-950 dark:hover:text-white"
                    href="https://preview.tailus.io/astrolus/"
                    target="_self"
                  >
                    Astrolus Premium
                  </a>
                </li>
                <li>
                  <a
                    className="text-sm font-normal text-[--body-text-color] transition hover:text-gray-950 dark:hover:text-white"
                    href="https://preview.tailus.io/oxymor-ns/"
                    target="_self"
                  >
                    Oxymor NS
                  </a>
                </li>
                <li>
                  <a
                    className="text-sm font-normal text-[--body-text-color] transition hover:text-gray-950 dark:hover:text-white"
                    href="https://preview.tailus.io/oxymor-st/"
                    target="_self"
                  >
                    Oxymor ST
                  </a>
                </li>
                <li>
                  <a
                    className="text-sm font-normal text-[--body-text-color] transition hover:text-gray-950 dark:hover:text-white"
                    href="https://preview.tailus.io/oxymor-yv/"
                    target="_self"
                  >
                    Oxymor YV
                  </a>
                </li>
                <li>
                  <a
                    className="text-sm font-normal text-[--body-text-color] transition hover:text-gray-950 dark:hover:text-white"
                    href="https://preview.tailus.io/alt/"
                    target="_self"
                  >
                    Alt
                  </a>
                </li>
                <li>
                  <a
                    className="text-sm font-normal text-[--body-text-color] transition hover:text-gray-950 dark:hover:text-white"
                    href="https://preview.tailus.io/aria/"
                    target="_self"
                  >
                    Aria
                  </a>
                </li>
                <li>
                  <a
                    className="text-sm font-normal text-[--body-text-color] transition hover:text-gray-950 dark:hover:text-white"
                    href="https://preview.tailus.io/tailfolio/"
                    target="_self"
                  >
                    Tailfolio
                  </a>
                </li>
                <li>
                  <a
                    className="text-sm font-normal text-[--body-text-color] transition hover:text-gray-950 dark:hover:text-white"
                    href="https://preview.tailus.io/ada/"
                    target="_self"
                  >
                    Ada
                  </a>
                </li>
                <li>
                  <a
                    className="text-sm font-normal text-[--body-text-color] transition hover:text-gray-950 dark:hover:text-white"
                    href="https://preview.tailus.io/alt/"
                    target="_self"
                  >
                    Alt
                  </a>
                </li>
                <li>
                  <a
                    className="text-sm font-normal text-[--body-text-color] transition hover:text-gray-950 dark:hover:text-white"
                    href="https://preview.tailus.io/astrolus-free/"
                    target="_self"
                  >
                    Astrolus
                  </a>
                </li>
                <li>
                  <a
                    className="text-sm font-normal text-[--body-text-color] transition hover:text-gray-950 dark:hover:text-white"
                    href="/templates"
                    target="_self"
                  >
                    All templates
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="block text-sm font-medium text-[--title-text-color]">
                Community
              </h3>
              <ul className="mt-4 list-inside space-y-2">
                <li>
                  <a
                    className="text-sm font-normal text-[--body-text-color] transition hover:text-gray-950 dark:hover:text-white"
                    href="https://github.com/tailus-ui/html.tailus.io"
                    target="_blank"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    className="text-sm font-normal text-[--body-text-color] transition hover:text-gray-950 dark:hover:text-white"
                    href="https://www.youtube.com/@tailus-ui"
                    target="_blank"
                  >
                    Youtube
                  </a>
                </li>
                <li>
                  <a
                    className="text-sm font-normal text-[--body-text-color] transition hover:text-gray-950 dark:hover:text-white"
                    href="https://twitter.com/tailus_ui"
                    target="_blank"
                  >
                    X / Twitter
                  </a>
                </li>
                <li>
                  <a
                    className="text-sm font-normal text-[--body-text-color] transition hover:text-gray-950 dark:hover:text-white"
                    href="https://www.linkedin.com/company/95954582"
                    target="_blank"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* <div>
        <div className="-mb-2 flex flex-wrap gap-1 overflow-hidden text-sm font-medium text-gray-700 dark:text-gray-300">
          Designed by Tailus UI in
          <div className="flex items-start justify-center gap-2 text-center font-semibold text-gray-950 sm:gap-1 dark:text-white">
            <div className="block">
              <div className="block pb-2">DR Congo</div>
              <div className="-mt-5 grow overflow-hidden">
                <svg
                  aria-hidden="true"
                  className="w-16"
                  height="22"
                  viewBox="0 0 283 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.24715 19.3744C72.4051 10.3594 228.122 -4.71194 281.724 7.12332"
                    stroke="url(#paint0_linear_pl)"
                    stroke-width="4"
                  ></path>
                  <defs>
                    <linearGradient
                      id="paint0_linear_pl"
                      x1="282"
                      y1="5.49999"
                      x2="40"
                      y2="13"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#facc15"></stop>
                      <stop offset="1" stop-color="#a855f7"></stop>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      </div>
    </footer>
  )
}
