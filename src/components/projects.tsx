"use client";

import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollAnimation } from "./scroll-animations";
import { projects } from "../lib/data";
import { AnimatedText, StaggeredText } from "./animated-text";
import { useRouter } from "next/navigation";
import Image from "next/image";

export function Projects() {
  const router = useRouter();

  const handleViewCaseStudy = (projectId: string) => {
    // setLocation(`/project/${projectId}`);
    router.push(`/project/${projectId}`);
  };

  return (
    <section id="projects" className="py-20 bg-gray-800 relative">
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <AnimatedText
            text="Featured Projects"
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] bg-clip-text text-transparent"
            delay={0.2}
          />
          <ScrollAnimation delay={0.4}>
            <div className="w-20 h-1 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] mx-auto mb-6" />
          </ScrollAnimation>
          <StaggeredText
            delay={0.6}
            className="text-gray-300 text-xl max-w-2xl mx-auto"
          >
            A showcase of my latest work and creative solutions
          </StaggeredText>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ScrollAnimation
              key={project.id}
              delay={index * 0.1}
              className="project-card bg-gray-900 rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl"
            >
              <div className="w-full h-[400px]">
                <Image
                  src={project.image}
                  alt={`${project.title} Screenshot`}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3 flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex justify-between items-center">
                  <Button
                    variant="ghost"
                    onClick={() => handleViewCaseStudy(project.id)}
                    className="text-primary-500 hover:text-primary-400 font-semibold p-0"
                  >
                    View Case Study <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                  <div className="flex space-x-3">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => window.open(project.liveUrl, "_blank")}
                      className="text-gray-400 hover:text-white p-2"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => window.open(project.githubUrl, "_blank")}
                      className="text-gray-400 hover:text-white p-2"
                    >
                      <Github className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        <ScrollAnimation className="text-center mt-12">
          <Button
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] hover:from-primary-600 hover:to-secondary-600 font-semibold hover:scale-105 transition-all duration-300"
            onClick={() =>
              window.open("https://github.com/faisalzaman", "_blank")
            }
          >
            <Github className="mr-2 h-5 w-5" />
            View All Projects
          </Button>
        </ScrollAnimation>
      </div>
    </section>
  );
}
