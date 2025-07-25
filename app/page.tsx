import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-200px)] px-4">
      <Card className="w-full max-w-md bg-black border-white/10 card-hover-effect">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center text-white">
            Mark Norman
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Separator className="border-dashed border-white/20" />
          <p className="text-sm text-white">
            Software Engineer, Tech Consultant and Computer Science Student at the{" "}
            <Link
              href="https://www.nottingham.ac.uk/computerscience/"
              className="text-green-400 hover:text-red-400 hover:underline"
            >
              University of Nottingham
            </Link>
          </p>
          <Separator className="border-dashed border-white/20" />
          {/* <p className="text-sm italic text-white">
            This website is under construction!
          </p>
          <Separator className="border-dashed border-white/20" /> */}
          <div>
            <p className="text-sm font-semibold mb-2 text-white">
              I am interested in:
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="text-white border-white">
                Web development
              </Badge>
              <Badge variant="outline" className="text-white border-white">
                Artificial intelligence
              </Badge>
              <Badge variant="outline" className="text-white border-white">
                Automation
              </Badge>
            </div>
          </div>
          <Separator className="border-dashed border-white/20" />
          <div>
            <p className="text-sm font-semibold mb-2 text-white">
              Other interests:
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="text-white border-white">
                Fitness
              </Badge>
              <Badge variant="outline" className="text-white border-white">
                Psychology
              </Badge>
              <Badge variant="outline" className="text-white border-white">
                Philosophy
              </Badge>
            </div>
          </div>
          <Separator className="border-dashed border-white/20" />
          <div className="flex justify-center space-x-4">
            <Button
              asChild
              variant="outline"
              className="text-green-400 border-white hover:bg-white hover:text-black"
            >
              <Link href="/projects">View Projects</Link>
            </Button>
            {/* <Button
              asChild
              variant="outline"
              className="text-blue-400 border-white hover:bg-white hover:text-black"
            >
              <Link href="https://www.linkedin.com/in/markthenorman/">
                LinkedIn
              </Link>
            </Button> */}
            <Button
              asChild
              variant="outline"
              className="text-blue-400 border-white hover:bg-white hover:text-black transition-all duration-300"
            >
              <Link href="/hire-me">Hire Me!</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
