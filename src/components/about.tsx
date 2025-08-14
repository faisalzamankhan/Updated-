"use client";
import { Button } from "@/components/ui/button";
import { Award, Download, Users } from "lucide-react";
import { AnimatedText } from "./animated-text";
import { ScrollAnimation } from "./scroll-animations";
import Image from "next/image";

export function About() {
  const stats = [
    { icon: Award, value: "2+", label: "Years Experience" },
    { icon: Users, value: "8+", label: "Projects Completed" },
  ];

  return (
    <section id="about" className="py-20 bg-gray-800 relative">
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <AnimatedText
            text="About Me"
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] bg-clip-text text-transparent"
            delay={0.2}
          />
          <ScrollAnimation delay={0.4}>
            <div className="w-20 h-1 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] mx-auto" />
          </ScrollAnimation>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <ScrollAnimation direction="left">
            <div className="relative">
              <div className="rounded-2xl shadow-2xl w-full max-w-md mx-auto">
                <Image
                  // src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600"
                  src="/images/profile.jpg"
                  alt="Faisal Zaman - Frontend Developer"
                  width={600}
                  height={600}
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] rounded-full opacity-20" />
            </div>
          </ScrollAnimation>

          <ScrollAnimation direction="right">
            <h3 className="text-3xl font-bold mb-6 text-white">
              Frontend Developer & UI/UX Enthusiast
            </h3>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              I &apos; am a passionate Frontend Developer with extensive
              experience building modern, responsive web applications. I
              specialize in React, Next.js, and Refine, developing projects
              using both JavaScript and TypeScript—leveraging TypeScript to
              write more secure and maintainable code. I work with cutting-edge
              UI libraries to create exceptional user experiences. Besides
              frontend work, I have also built small-scale projects with
              Node.js, which has strengthened my understanding of backend
              development. I enjoy creating scalable, efficient, and
              user-friendly applications using the latest frontend and backend
              technologies.
            </p>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              I believe in writing clean, maintainable code while staying
              up-to-date with the latest industry trends and best practices.
              Every project is an opportunity to push boundaries and create
              something remarkable.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              {stats.map((stat, index) => {
                // const Icon = stat.icon;
                return (
                  <div
                    key={index}
                    className="text-center p-4 rounded-lg glass-effect"
                  >
                    <div className="text-3xl  font-bold text-[var(--primary)] mb-2">
                      {stat.value}
                    </div>
                    <div className="text-gray-300">{stat.label}</div>
                  </div>
                );
              })}
            </div>

            <Button
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] hover:from-primary-600 hover:to-secondary-600 font-semibold hover:scale-105 transition-all duration-300"
              onClick={() => window.open("/resume.pdf", "_blank")}
            >
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
