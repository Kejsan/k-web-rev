import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import NewsletterPopup from "@/components/newsletter-popup"

export const metadata: Metadata = {
  title: "Kejsan - Digital Marketing Specialist",
  description:
    "Digital Marketing Specialist specializing in SEO, content marketing, and growth strategies for tech companies and e-commerce brands.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <style>{`
          html {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
          }
        `}</style>
      </head>
      <body>
        {children}
        <NewsletterPopup />
      </body>
    </html>
  )
}
