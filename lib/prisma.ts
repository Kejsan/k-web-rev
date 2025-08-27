type WebApp = {
  id: number
  title: string
  description: string
  url: string
}

type PrismaClient = {
  webApp: {
    findMany: (args?: unknown) => Promise<WebApp[]>
  }
}

const createClient = (): PrismaClient => {
  try {
    const { PrismaClient } = eval('require')('@prisma/client') as any
    return new PrismaClient({ log: ['error', 'warn'] })
  } catch {
    return {
      webApp: {
        async findMany() {
          return [
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
        },
      },
    }
  }
}

const globalForPrisma = globalThis as { prisma?: PrismaClient }

export const prisma = globalForPrisma.prisma ?? createClient()

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma
}

export default prisma
