import { ScrollAnimation } from "./scroll-animations";
import { skills } from "../lib/data";
import { AnimatedText, StaggeredText } from "./animated-text";

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-900 relative">
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
            text="My Skills"
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
            Technologies and tools I use to bring ideas to life
          </StaggeredText>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <ScrollAnimation
              key={skill.name}
              delay={index * 0.1}
              className="skill-card p-6 rounded-xl glass-effect text-center hover:shadow-2xl"
            >
              <div className={`text-5xl mb-4 ${skill.color}`}>{skill.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
              <p className="text-gray-400 text-sm">{skill.description}</p>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
