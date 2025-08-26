import Portfolio from "@/components/portfolio"
import BlogSection from "@/components/sections/blog-section"

export default async function HomePage() {
  const blogSection = await BlogSection()
  return <Portfolio>{blogSection}</Portfolio>
}
