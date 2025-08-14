"use client";
import { ScrollAnimation } from "./scroll-animations";
import { firms, skills } from "../lib/data";
import { AnimatedText, StaggeredText } from "./animated-text";
import { Button } from "./ui/button";
import { Github } from "lucide-react";

export const ProfessionalExperienced = () => {
  const routeParams = 1;
  return (
    <section
      id="professionalExperienced"
      className="py-20 bg-gray-900 relative"
    >
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <AnimatedText
            text="Professional Experience"
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
            I have over 2+year of industrial experience.
          </StaggeredText>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {firms.map(({ id, name, companyLogo, description, color }, index) => (
            <div
              onClick={() =>
                window.open(`/detail/${routeParams}/#${id}`, "_blank")
              }
              className="cursor-pointer"
              key={id}
            >
              <ScrollAnimation
                key={name}
                delay={index * 0.1}
                className="skill-card p-6 rounded-xl glass-effect text-center hover:shadow-2xl"
              >
                <div className={`text-5xl mb-4 ${color}`}>
                  <div className="flex justify-center items-center ">
                    <img
                      src={companyLogo}
                      className="w-40 h-40 object-contain"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{name}</h3>
                <p className="text-gray-400 text-sm">{description}</p>
              </ScrollAnimation>
            </div>
          ))}
        </div>

        <ScrollAnimation className="text-center mt-12">
          <Button
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] hover:from-primary-600 hover:to-secondary-600 font-semibold hover:scale-105 transition-all duration-300"
            onClick={() => window.open(`/detail/${routeParams}`, "_blank")}
          >
            View Details
          </Button>
        </ScrollAnimation>
      </div>
    </section>
  );
};
