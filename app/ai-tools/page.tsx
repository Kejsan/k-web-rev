import { prisma } from '@/lib/prisma'
import { Card, CardContent } from '@/components/ui/card'
import { ExternalLink, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default async function AiToolsPage() {
  const apps = await prisma.webApp.findMany({ orderBy: { id: 'asc' } })

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#000080] to-[#fb6163] text-white py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-8 flex items-center gap-2">
          <Link href="/" className="text-white hover:text-[#fb6163] transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <h1 className="text-3xl font-bold">AI Tools</h1>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {apps.map((app) => (
            <Card key={app.id} className="bg-white/5 border-white/10">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-2">{app.title}</h2>
                <p className="text-white/70 mb-4 text-sm">{app.description}</p>
                <a
                  href={app.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-[#54a09b] hover:text-[#54a09b]/80"
                >
                  Visit
                  <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
