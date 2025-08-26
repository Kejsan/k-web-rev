import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const apps = [
    {
      title: 'AI Summarizer',
      description: 'Generate concise summaries for any block of text.',
      url: 'https://ai-summarizer.netlify.app',
    },
    {
      title: 'Alt Text Generator',
      description: 'Create accessible image descriptions using AI.',
      url: 'https://alt-text-generator.netlify.app',
    },
    {
      title: 'Code Translator',
      description: 'Translate code between programming languages.',
      url: 'https://code-translator.netlify.app',
    },
    {
      title: 'SEO Meta Writer',
      description: 'Craft SEO-friendly titles and descriptions for pages.',
      url: 'https://seo-meta-writer.netlify.app',
    },
    {
      title: 'Email Copywriter',
      description: 'Draft professional emails from short prompts.',
      url: 'https://email-copywriter.netlify.app',
    },
    {
      title: 'Tagline Maker',
      description: 'Generate catchy marketing taglines.',
      url: 'https://tagline-maker.netlify.app',
    },
  ]

  await prisma.webApp.createMany({ data: apps, skipDuplicates: true })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
