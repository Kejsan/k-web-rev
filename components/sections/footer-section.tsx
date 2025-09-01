import { prisma } from "@/lib/prisma"
import Link from "next/link"
import { Linkedin, Github, Twitter, Mail } from "lucide-react"
import { NAV_LINKS } from "@/lib/navigation-links"
import { FaThreads } from "react-icons/fa6";

// Default values provided by the user
const DEFAULT_SOCIALS = {
  linkedin: "https://www.linkedin.com/in/kejsan/",
  github: "https://github.com/Kejsan",
  twitter: "https://x.com/CokuKejsan",
  threads: "https://www.threads.com/@kejsancoku/",
};

const DEFAULT_TOOLS = [
  { name: "AI Job Impact Explorer", url: "https://ai-job-impact-explorer.netlify.app/" },
  { name: "AI SEO Guide", url: "https://ai-seo-guide.netlify.app/" },
  { name: "Top SEO Specialists", url: "https://topseospecialists.netlify.app/" },
  { name: "AI-Powered Prompt Optimizer", url: "https://ai-powered-prompt-optimizer.netlify.app/" },
];

export default async function FooterSection() {
  const settings = await prisma.siteSettings.findFirst();
  const tools = await prisma.tool.findMany({ orderBy: { createdAt: 'asc' } });

  const copyrightText = settings?.copyright || `© ${new Date().getFullYear()} Kejsan Coku. All rights reserved.`;
  const socials = {
    linkedin: settings?.linkedin || DEFAULT_SOCIALS.linkedin,
    github: settings?.github || DEFAULT_SOCIALS.github,
    twitter: settings?.twitter || DEFAULT_SOCIALS.twitter,
    threads: settings?.threads || DEFAULT_SOCIALS.threads,
    email: settings?.email,
  };
  const toolLinks = tools.length > 0 ? tools : DEFAULT_TOOLS;

  return (
    <footer className="bg-gray-100 dark:bg-gray-900/50 border-t border-white/10 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* About/Copyright */}
        <div className="md:col-span-2">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Kejsan Coku</h3>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            {copyrightText}
          </p>
          <div className="mt-4 flex space-x-4">
            <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="h-6 w-6 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white" />
            </a>
            <a href={socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="h-6 w-6 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white" />
            </a>
            <a href={socials.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <Twitter className="h-6 w-6 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white" />
            </a>
            <a href={socials.threads} target="_blank" rel="noopener noreferrer" aria-label="Threads">
              <FaThreads className="h-6 w-6 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white" />
            </a>
            {socials.email && (
              <a href={`mailto:${socials.email}`} aria-label="Email">
                <Mail className="h-6 w-6 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white" />
              </a>
            )}
          </div>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 tracking-wider uppercase">Navigate</h3>
          <ul className="mt-4 space-y-2">
            {NAV_LINKS.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-base text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Vibe Coding Tools */}
        <div>
          <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 tracking-wider uppercase">Vibe Coding</h3>
          <ul className="mt-4 space-y-2">
            {toolLinks.map((tool) => (
              <li key={tool.name}>
                <a
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                >
                  {tool.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </footer>
  )
}
