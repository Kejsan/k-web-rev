import { prisma } from "@/lib/prisma"
import Link from "next/link"
import { Linkedin, Github, Twitter, Mail } from "lucide-react"
import { NAV_LINKS } from "@/lib/navigation-links"

export default async function FooterSection() {
  const settings = await prisma.siteSettings.findFirst()

  if (!settings) {
    // If no settings are found, render a minimal footer or null.
    // This prevents the site from crashing if the settings are not configured.
    return (
      <footer className="bg-gray-100 dark:bg-gray-800 py-6 text-center">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </p>
        <p className="text-xs text-gray-400 dark:text-gray-500 mt-2">
          Footer settings not configured. Please configure them in the admin panel.
        </p>
      </footer>
    )
  }

  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Copyright */}
          <div className="text-sm text-gray-500 dark:text-gray-400 mb-4 md:mb-0">
            {settings.copyright || `© ${new Date().getFullYear()} Your Name. All rights reserved.`}
          </div>

          {/* Social Links */}
          <div className="flex space-x-4">
            {settings.linkedin && (
              <Link href={settings.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-6 w-6 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white" />
              </Link>
            )}
            {settings.github && (
              <Link href={settings.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-6 w-6 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white" />
              </Link>
            )}
            {settings.twitter && (
              <Link href={settings.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Twitter className="h-6 w-6 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white" />
              </Link>
            )}
            {settings.email && (
              <Link href={`mailto:${settings.email}`} aria-label="Email">
                <Mail className="h-6 w-6 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white" />
              </Link>
            )}
          </div>
        </div>
        {/* Navigation Links */}
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 text-center">
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2" aria-label="Footer">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                target={link.isExternal ? "_blank" : undefined}
                rel={link.isExternal ? "noopener noreferrer" : undefined}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}
