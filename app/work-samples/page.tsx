import Link from "next/link"
import { ArrowLeft, ExternalLink } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { getWorkSamples } from "@/lib/work-samples"

export default async function WorkSamples() {
  const samples = await getWorkSamples()

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-[#000080] to-slate-900">
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="text-white font-bold text-xl">
              Kejsan
            </Link>
            <Link
              href="/"
              className="text-white/80 hover:text-white transition-colors flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </div>
        </div>
      </nav>

      <div className="pt-20 px-4 pb-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {samples.map((sample: any) => (
            <Card
              key={sample.id}
              className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {sample.title}
                </h3>
                {sample.description && (
                  <p className="text-white/70 mb-4">{sample.description}</p>
                )}
                {sample.url && (
                  <Link
                    href={sample.url}
                    className="text-[#fb6163] inline-flex items-center gap-2"
                  >
                    Visit <ExternalLink className="w-4 h-4" />
                  </Link>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
