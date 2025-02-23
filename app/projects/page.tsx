import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

const projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio website built with Next.js and Tailwind CSS.",
    tags: ["Next.js", "React", "Tailwind CSS"],
    link: "https://github.com/yourusername/portfolio",
  },
  {
    title: "AI Chatbot",
    description: "An AI-powered chatbot using natural language processing.",
    tags: ["Python", "TensorFlow", "NLP"],
    link: "https://github.com/yourusername/ai-chatbot",
  },
  {
    title: "Fitness Tracker App",
    description: "A mobile app for tracking workouts and nutrition.",
    tags: ["React Native", "Firebase", "Redux"],
    link: "https://github.com/yourusername/fitness-tracker",
  },
]

export default function Projects() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black text-white p-4">
      <Card className="w-full max-w-4xl bg-black border-white/10">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center text-white">Projects</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {projects.map((project, index) => (
            <div key={index}>
              <h2 className="text-xl font-semibold text-white mb-2">{project.title}</h2>
              <p className="text-sm text-white mb-2">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-2">
                {project.tags.map((tag, tagIndex) => (
                  <Badge key={tagIndex} variant="outline" className="text-white border-white">
                    {tag}
                  </Badge>
                ))}
              </div>
              <Link href={project.link} className="text-green-400 hover:text-red-400 hover:underline text-sm">
                View Project
              </Link>
              {index < projects.length - 1 && <Separator className="border-dashed border-white/20 mt-4" />}
            </div>
          ))}
        </CardContent>
      </Card>
    </main>
  )
}

