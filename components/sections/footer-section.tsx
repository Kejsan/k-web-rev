import Link from "next/link"
import { NAV_LINKS } from "@/lib/navigation-links"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import type { SiteSettings, WebApp } from "@prisma/client"

interface FooterSectionProps {
  settings: SiteSettings | null
  apps: WebApp[]
}

export default function FooterSection({
  settings,
  apps,
}: FooterSectionProps) {

  if (!settings) {
    return (
      <footer className="bg-slate-900/50 border-t border-white/10 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="animate-pulse space-y-4">
            <div className="h-6 bg-slate-700/50 rounded w-1/4"></div>
            <div className="h-4 bg-slate-700/50 rounded w-1/3"></div>
          </div>
        </div>
      </footer>
    )
  }

  return (
    <footer className="bg-slate-900/50 border-t border-white/10 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <h3 className="text-lg font-bold text-white">Kejsan</h3>
            <p className="mt-2 text-sm text-slate-400">
              Digital Marketing Specialist
            </p>
            <div className="flex space-x-4 mt-4">
              {settings.linkedin && (
                <a
                  href={settings.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-slate-400 hover:text-white"
                >
                  <Linkedin size={20} />
                </a>
              )}
              {settings.github && (
                <a
                  href={settings.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-slate-400 hover:text-white"
                >
                  <Github size={20} />
                </a>
              )}
              {settings.twitter && (
                <a
                  href={settings.twitter}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-slate-400 hover:text-white"
                >
                  <Twitter size={20} />
                </a>
              )}
              {settings.email && (
                <a
                  href={`mailto:${settings.email}`}
                  className="text-slate-400 hover:text-white"
                >
                  <Mail size={20} />
                </a>
              )}
            </div>
          </div>

          <div className="md:col-span-1">
            <h3 className="text-base font-semibold text-slate-200">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-1">
            <h3 className="text-base font-semibold text-slate-200">My Apps</h3>
            <ul className="mt-4 space-y-2">
              {apps.map((app) => (
                <li key={app.id}>
                  <a
                    href={app.url || "#"}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-sm text-slate-400 hover:text-white"
                  >
                    {app.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-1">
            <h3 className="text-base font-semibold text-slate-200">
              Connect
            </h3>
            <p className="mt-4 text-sm text-slate-400">
              Interested in working together?
            </p>
            <a
              href="/#contact"
              className="mt-2 inline-block text-sm text-[#54a09b] hover:text-[#54a09b]/90 font-semibold"
            >
              Get in touch
            </a>
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-slate-400">
          <p>{settings.copyright || "© 2024 Kejsan. All rights reserved."}</p>
        </div>
      </div>
    </footer>
  )
}
