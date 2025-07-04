import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const projects = [
  {
    title: "Digital Twin Pet Feeder App",
    description:
      "An Android app controlling an Internet pet feeder via Raspberry Pi. 2024-25 GRP Runner-up.",
    tags: ["Android", "React Native", "Expo", "Raspberry Pi", "Azure"],
    link: "https://www.linkedin.com/posts/activity-7328467635942141953-jgUq?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEecxTUBJnaHY2Ecy87n6cXglXoUmfzkl20",
    difficulty: "Advanced",
  },
  {
    title: "Library of Things",
    description:
      "University project: An investigation into Human Computer Interaction and design principles. A mobile prototype for a library of things.",
    tags: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
    link: "https://libraryofthings.markthenorman.com",
    difficulty: "Advanced",
  },
  {
    title: "Drag Race Logger",
    description:
      "An automation tool for a game development studio: First-Last Studios. Logs races for administration purposes.",
    tags: ["Automation", "API", "Databases", "Google Sheets"],
    link: "#",
    difficulty: "Intermediate",
  },
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio website built with Next.js and Tailwind CSS.",
    tags: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
    link: "https://markthenorman.com",
    difficulty: "Intermediate",
  },
  {
    title: "The Dead Man's Clock",
    description:
      "A web application that calculates and displays your remaining life expectancy based on average statistics.",
    tags: ["JavaScript", "Web Development", "Life Expectancy"],
    link: "https://deathclock.markthenorman.com/",
    difficulty: "Intermediate",
  },
  {
    title: "SUU-tellite - CanSat Competition",
    description:
      "National Finalists: A simulated satellite using Arduino, radio transmission, and sensor-based data modelling.",
    tags: ["Arduino", "Sensors", "Radio Transmission", "Python"],
    link: "https://www.youtube.com/watch?v=qEYImwNrZ7A",
    difficulty: "Advanced",
  },
  {
    title: "Weather App",
    description:
      "Learning project: A Basic weather app. Built with React, Next.js and Tailwind CSS.",
    tags: ["React", "Next.js", "Tailwind CSS", "Weather API"],
    link: "https://weather.markthenorman.com",
    difficulty: "Beginner",
  },
];

// Function to get the appropriate color for difficulty
function getDifficultyColor(difficulty: string): string {
  switch (difficulty.toLowerCase()) {
    case "beginner":
      return "text-green-400 border-green-400";
    case "intermediate":
      return "text-yellow-400 border-yellow-400";
    case "advanced":
      return "text-red-400 border-red-400";
    default:
      return "text-white border-white";
  }
}

export default function Projects() {
  return (
    <div className="flex flex-col items-center justify-center px-4">
      <Card className="w-full max-w-4xl bg-black border-white/10 card-hover-effect">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center text-white">
            Projects
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {projects.map((project, index) => (
            <div key={index}>
              <div className="flex justify-between items-start mb-2">
                <h2 className="text-xl font-semibold text-white">
                  {project.title}
                </h2>
                <Badge
                  variant="outline"
                  className={`${getDifficultyColor(project.difficulty)}`}
                >
                  {project.difficulty}
                </Badge>
              </div>
              <p className="text-sm text-white mb-2">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-2">
                {project.tags.map((tag, tagIndex) => (
                  <Badge
                    key={tagIndex}
                    variant="outline"
                    className="text-white border-white"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
              <Link
                href={project.link}
                className="text-green-400 hover:text-red-400 hover:underline text-sm"
              >
                View Project
              </Link>
              {index < projects.length - 1 && (
                <Separator className="border-dashed border-white/20 mt-4" />
              )}
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
