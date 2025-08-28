type WebApp = {
  id: number
  title: string
  description: string
  url: string
}

type PrismaClient = any

const createClient = (): PrismaClient => {
  try {
    const { PrismaClient } = eval('require')('@prisma/client') as any
    return new PrismaClient({ log: ['error', 'warn'] })
  } catch {
    const data: WebApp[] = [
      {
        id: 1,
        title: 'AI Summarizer',
        description: 'Generate concise summaries for any block of text.',
        url: 'https://ai-summarizer.netlify.app',
      },
      {
        id: 2,
        title: 'Alt Text Generator',
        description: 'Create accessible image descriptions using AI.',
        url: 'https://alt-text-generator.netlify.app',
      },
      {
        id: 3,
        title: 'Code Translator',
        description: 'Translate code between programming languages.',
        url: 'https://code-translator.netlify.app',
      },
      {
        id: 4,
        title: 'SEO Meta Writer',
        description: 'Craft SEO-friendly titles and descriptions for pages.',
        url: 'https://seo-meta-writer.netlify.app',
      },
      {
        id: 5,
        title: 'Email Copywriter',
        description: 'Draft professional emails from short prompts.',
        url: 'https://email-copywriter.netlify.app',
      },
      {
        id: 6,
        title: 'Tagline Maker',
        description: 'Generate catchy marketing taglines.',
        url: 'https://tagline-maker.netlify.app',
      },
    ]

    return {
      webApp: {
        async findMany() {
          return data
        },
        async findUnique({ where: { id } }: { where: { id: number } }) {
          return data.find((app) => app.id === id) ?? null
        },
        async create({ data: app }: { data: Omit<WebApp, 'id'> }) {
          const newApp: WebApp = { id: data.length + 1, ...app }
          data.push(newApp)
          return newApp
        },
        async update(
          { where: { id }, data: app }: { where: { id: number }; data: Partial<WebApp> }
        ) {
          const index = data.findIndex((a) => a.id === id)
          if (index === -1) throw new Error('App not found')
          data[index] = { ...data[index], ...app }
          return data[index]
        },
        async delete({ where: { id } }: { where: { id: number } }) {
          const index = data.findIndex((a) => a.id === id)
          if (index === -1) return null
          const [removed] = data.splice(index, 1)
          return removed
        },
        async createMany({ data: apps }: { data: Omit<WebApp, 'id'>[] }) {
          let count = 0
          for (const app of apps) {
            const newApp: WebApp = { id: data.length + 1, ...app }
            data.push(newApp)
            count++
          }
          return { count }
        },
      },
    }
  }
}

const globalForPrisma = globalThis as { prisma?: PrismaClient }

export const prisma: PrismaClient = globalForPrisma.prisma ?? createClient()

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma
}

export default prisma
