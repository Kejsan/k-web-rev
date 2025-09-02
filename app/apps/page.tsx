"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface WebApp {
  id: number
  name: string
  url: string
  description: string
}

export default function AppsPage() {
  const [apps, setApps] = useState<WebApp[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("/api/apps")
      .then((res) => res.json())
      .then((data) => {
        setApps(data)
        setLoading(false)
      })
      .catch((err) => {
        console.error("Failed to fetch apps:", err)
        setLoading(false)
      })
  }, [])

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            My Applications
          </h1>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
            A collection of tools and web apps I&apos;ve built.
          </p>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="bg-slate-800/50 rounded-lg shadow-lg p-6 animate-pulse">
                <div className="h-8 bg-slate-700 rounded w-3/4 mb-4"></div>
                <div className="h-4 bg-slate-700 rounded w-full mb-2"></div>
                <div className="h-4 bg-slate-700 rounded w-5/6"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {apps.map((app) => (
              <div
                key={app.id}
                className="bg-slate-800/50 rounded-lg shadow-lg p-6 flex flex-col justify-between"
              >
                <div>
                  <h2 className="text-2xl font-bold text-white mb-2">
                    {app.name}
                  </h2>
                  <p className="text-slate-400 mb-4">{app.description}</p>
                </div>
                <a
                  href={app.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-[#54a09b] hover:text-[#54a09b]/90 font-semibold"
                >
                  View App <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  )
}
