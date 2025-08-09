"use client";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollAnimation } from "@/components/scroll-animations";
import { projects } from "@/lib/data";
import { useParams } from "next/navigation";
import Image from "next/image";

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link href="/">
            <Button className="bg-gradient-to-r from-primary-500 to-secondary-500">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-effect">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                FZ
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent hidden md:block">
                Faisal Zaman
              </span>
            </Link>
            <Link href="/">
              <Button variant="ghost" className="text-white">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Portfolio
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="container mx-auto px-6">
          <ScrollAnimation>
            <div className="text-center mb-8">
              <div className="flex justify-center mb-4 flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                {project.title}
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                {project.description}
              </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={0.2}>
            <div className="flex justify-center gap-4 mb-12">
              <Button
                onClick={() => window.open(project.liveUrl, "_blank")}
                className="bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600"
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                View Live Demo
              </Button>
              <Button
                variant="outline"
                onClick={() => window.open(project.githubUrl, "_blank")}
                className="border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white"
              >
                <Github className="mr-2 h-4 w-4" />
                View Code
              </Button>
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={0.4}>
            <div className="rounded-2xl overflow-hidden shadow-2xl ">
              <div className="w-full h-auto">
                <Image
                  src={project.image}
                  alt={`${project.title} Screenshot`}
                  width={1920}
                  height={1080}
                />
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <ScrollAnimation direction="left">
              <Card className="bg-gray-800 border-gray-700">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-4 text-white">
                    Key Features
                  </h3>
                  <ul className="space-y-3">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation direction="right">
              <Card className="bg-gray-800 border-gray-700">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-4 text-white">
                    Technologies Used
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {project.technologies.map((tech, index) => (
                      <div
                        key={index}
                        className="flex items-center p-3 bg-gray-700 rounded-lg"
                      >
                        <div className="w-2 h-2 bg-accent-500 rounded-full mr-3" />
                        <span className="text-gray-300">{tech}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </ScrollAnimation>
          </div>

          <ScrollAnimation className="mt-12 text-center">
            <h3 className="text-3xl font-bold mb-6 text-white">
              Interested in Similar Work?
            </h3>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              I&apos;d love to discuss your project and help bring your ideas to
              life with modern web technologies.
            </p>
            <Link href="/#contact">
              <Button className="bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 px-8 py-3 text-lg">
                Get In Touch
              </Button>
            </Link>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
}
