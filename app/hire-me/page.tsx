"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import {
  CheckCircle2,
  Code,
  Copy,
  Database,
  Layers,
  Mail,
  Palette,
} from "lucide-react";

// Skills data
const skills = [
  {
    name: "Frontend Development",
    icon: <Code className="mr-2 h-4 w-4" />,
    level: "Advanced",
  },
  {
    name: "Backend Development",
    icon: <Database className="mr-2 h-4 w-4" />,
    level: "Intermediate",
  },
  {
    name: "UI/UX Design",
    icon: <Palette className="mr-2 h-4 w-4" />,
    level: "Intermediate",
  },
  {
    name: "Full Stack Development",
    icon: <Layers className="mr-2 h-4 w-4" />,
    level: "Intermediate",
  },
];

// Experience data
const experiences = [
  {
    title: "Freelance Web Developer",
    company: "Self-employed",
    period: "2025 - Present",
    description:
      "Designing and developing websites for small businesses and individuals.",
  },
  {
    title: "Computer Science Student",
    company: "University of Nottingham",
    period: "2023 - Present",
    description:
      "Studying Computer Science with a focus on software engineering and artificial intelligence.",
  },
];

export default function HireMe() {
  const [isEmailRevealed, setIsEmailRevealed] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  // This would be your actual email address
  const email = "mark@markthenorman.com";

  const handleRevealEmail = () => {
    setIsEmailRevealed(true);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setIsCopied(true);

    // Reset the copied state after 2 seconds
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black text-white p-4 py-16">
      <div className="w-full max-w-4xl space-y-8">
        {/* Introduction Section */}
        <Card className="bg-black border-white/10">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center text-white">
              Hire Me
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* <p className="text-white">
              I'm Mark — a software engineer and computer science student who
              builds with precision, clarity, and purpose. I specialise in
              full-stack development, combining clean, maintainable code with
              intuitive design to create web solutions that work — fast,
              elegant, and user-focused.
            </p>
            <p className="text-white">
              Whether you need a performant website, a scalable web app, or
              technical consultation to bring your concept to life, I deliver. I
              prioritise clean architecture, efficient development, and timely
              execution. No fluff, no delays — just solid engineering.
            </p>
            <p className="text-white">Let’s build.</p> */}
            <p className="text-white">I can build things.</p>

            <p className="text-white">
              I'm a web developer with real-world experience shipping clean,
              responsive, and reliable websites. I use React, Next.js, and
              Tailwind to turn ideas into fast, functional web experiences that
              work across devices and scale with your needs.
            </p>

            <p className="text-white">
              If you need something that looks good, works flawlessly, and gets
              delivered without excuses — let's build.
            </p>
          </CardContent>
        </Card>
        {/* Skills Section */}
        <Card className="bg-black border-white/10">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-white">
              Skills
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between p-3 border border-white/10 rounded-md hover:border-green-400/50 transition-colors duration-300">
                    <div className="flex items-center">
                      {skill.icon}
                      <span>{skill.name}</span>
                    </div>
                    <Badge
                      variant="outline"
                      className="text-white border-white"
                    >
                      {skill.level}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        {/* Experience Section */}
        <Card className="bg-black border-white/10">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-white">
              Experience
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {experiences.map((exp, index) => (
              <div key={index}>
                <div>
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="text-lg font-semibold text-white">
                      {exp.title}
                    </h3>
                    <Badge
                      variant="outline"
                      className="text-white border-white"
                    >
                      {exp.period}
                    </Badge>
                  </div>
                  <p className="text-sm text-white/80 mb-1">{exp.company}</p>
                  <p className="text-sm text-white">{exp.description}</p>
                  {index < experiences.length - 1 && (
                    <Separator className="border-dashed border-white/20 mt-4" />
                  )}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
        {/* Contact Section with Reveal Email */}
        <Card className="bg-black border-white/10">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-white">
              Get In Touch
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-white mb-6">
              Interested in working together? Feel free to reach out to me
              directly via email.
            </p>

            <div className="flex flex-col items-center justify-center p-8 border border-white/10 rounded-md">
              {isEmailRevealed ? (
                <div className="flex flex-col items-center space-y-4">
                  <div className="flex items-center space-x-2">
                    <Mail className="text-green-400" />
                    <span className="text-xl font-mono text-white">
                      {email}
                    </span>
                  </div>
                  <Button
                    onClick={handleCopyEmail}
                    variant="outline"
                    className="mt-2 text-white border-white hover:bg-white hover:text-black transition-colors duration-300"
                  >
                    {isCopied ? (
                      <span className="flex items-center">
                        <CheckCircle2 className="mr-2 h-4 w-4" />
                        Copied!
                      </span>
                    ) : (
                      <span className="flex items-center">
                        <Copy className="mr-2 h-4 w-4" />
                        Copy to Clipboard
                      </span>
                    )}
                  </Button>
                </div>
              ) : (
                <div className="text-center">
                  <p className="text-white mb-4">
                    Click the button below to reveal my email address
                  </p>
                  <Button
                    onClick={handleRevealEmail}
                    className="bg-white text-black hover:bg-green-400 hover:text-white transition-colors duration-300"
                  >
                    <Mail className="mr-2 h-4 w-4" />
                    Reveal Email Address
                  </Button>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
        {/* Call to Action */}
        {/* <div className="text-center p-6 border border-white/10 rounded-md bg-gradient-to-b from-black to-gray-900">
          <h2 className="text-2xl font-bold text-white mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-white mb-6">
            I'm currently available for freelance work and open to discussing
            new opportunities.
          </p>
          {!isEmailRevealed ? (
            <Button
              onClick={handleRevealEmail}
              className="bg-white text-black hover:bg-green-400 hover:text-white transition-colors duration-300"
            >
              Let's Work Together
            </Button>
          ) : (
            <Button
              onClick={handleCopyEmail}
              className="bg-white text-black hover:bg-green-400 hover:text-white transition-colors duration-300"
            >
              {isCopied ? "Email Copied!" : "Copy My Email"}
            </Button>
          )}
        </div> */}
      </div>
    </main>
  );
}
