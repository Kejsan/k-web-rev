import { forwardRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Search, PenTool, Users, BarChart3, Podcast, TrendingUp } from "lucide-react"

const skills = [
  { name: "SEO Strategy", level: 95, icon: <Search className="w-8 h-8 text-[#fb6163]" /> },
  { name: "Content Marketing", level: 92, icon: <PenTool className="w-8 h-8 text-[#fb6163]" /> },
  { name: "Social Media Marketing", level: 90, icon: <Users className="w-8 h-8 text-[#fb6163]" /> },
  { name: "Analytics & Reporting", level: 88, icon: <BarChart3 className="w-8 h-8 text-[#fb6163]" /> },
  { name: "Podcast Production", level: 85, icon: <Podcast className="w-8 h-8 text-[#fb6163]" /> },
  { name: "Growth Marketing", level: 87, icon: <TrendingUp className="w-8 h-8 text-[#fb6163]" /> },
]

const SkillsSection = forwardRef<HTMLDivElement>(function SkillsSection(_, ref) {
  return (
    <section id="skills" ref={ref} className="skills-section py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-16">Core Expertise</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill) => (
            <Card
              key={skill.name}
              className="skill-card bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
            >
              <CardContent className="p-6 text-center">
                <div className="text-[#fb6163] mb-4 flex justify-center">{skill.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4">{skill.name}</h3>
                <div className="w-full bg-white/10 rounded-full h-2 mb-2">
                  <div
                    className="bg-gradient-to-r from-[#fb6163] to-[#000080] h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <div className="text-white/60">{skill.level}% Proficiency</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
})

export default SkillsSection
