"use client";
import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Twitter,
  Instagram,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "@/components/ui/textarea";
// import { useToast } from "@/hooks/use-toast";
import { ScrollAnimation } from "./scroll-animations";
// import { useMutation } from "@tanstack/react-query";
// import { apiRequest } from "@/lib/queryClient";
import { AnimatedText, StaggeredText } from "./animated-text";

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export function Contact() {
  const [formData, setFormData] = useState<ContactForm>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  // const { toast } = useToast();

  // const contactMutation = useMutation({
  //   mutationFn: async (data: ContactForm) => {
  //     const response = await apiRequest("POST", "/api/contact", data);
  //     return response.json();
  //   },
  //   onSuccess: () => {
  //     toast({
  //       title: "Message sent successfully!",
  //       description: "Thank you for reaching out. I'll get back to you soon.",
  //     });
  //     setFormData({ name: "", email: "", subject: "", message: "" });
  //   },
  //   onError: (error: any) => {
  //     toast({
  //       title: "Failed to send message",
  //       description: error.message || "Please try again later.",
  //       variant: "destructive",
  //     });
  //   },
  // });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // contactMutation.mutate(formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/faisalzaman",
      label: "LinkedIn",
    },
    { icon: Github, href: "https://github.com/faisalzaman", label: "GitHub" },
    {
      icon: Twitter,
      href: "https://twitter.com/faisalzaman",
      label: "Twitter",
    },
    {
      icon: Instagram,
      href: "https://instagram.com/faisalzaman",
      label: "Instagram",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-900 relative">
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <AnimatedText
            text="Get In Touch"
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
            Let&apos;s discuss your next project and bring your ideas to life
          </StaggeredText>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <ScrollAnimation direction="left">
            <h3 className="text-2xl font-bold mb-8 text-white">
              Let&apos;s Connect
            </h3>

            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] rounded-lg flex items-center justify-center mr-4">
                  <Mail className="text-white h-5 w-5" />
                </div>
                <div>
                  <div className="text-gray-400 text-sm">Email</div>
                  <div className="text-white font-semibold">
                    faisal.zaman@example.com
                  </div>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] rounded-lg flex items-center justify-center mr-4">
                  <Phone className="text-white h-5 w-5" />
                </div>
                <div>
                  <div className="text-gray-400 text-sm">Phone</div>
                  <div className="text-white font-semibold">
                    +1 (555) 123-4567
                  </div>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] rounded-lg flex items-center justify-center mr-4">
                  <MapPin className="text-white h-5 w-5" />
                </div>
                <div>
                  <div className="text-gray-400 text-sm">Location</div>
                  <div className="text-white font-semibold">New York, NY</div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-4 text-white">
                Follow Me
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <Button
                      key={social.label}
                      variant="ghost"
                      size="sm"
                      onClick={() => window.open(social.href, "_blank")}
                      className="w-12 h-12 bg-gray-800 rounded-lg hover:bg-gradient-to-r hover:from-primary-500 hover:to-accent-500 transition-all duration-300 hover:scale-110 p-0"
                    >
                      <Icon className="text-white h-5 w-5" />
                    </Button>
                  );
                })}
              </div>
            </div>
          </ScrollAnimation>

          {/* Contact Form */}
          <ScrollAnimation direction="right">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Full Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white placeholder-gray-400"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white placeholder-gray-400"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project inquiry"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white placeholder-gray-400"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white placeholder-gray-400 resize-none"
                />
              </div>

              <Button
                type="submit"
                // disabled={contactMutation.isPending}
                className="w-full px-8 py-4 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] hover:from-primary-600 hover:to-secondary-600 font-semibold hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {/* {contactMutation.isPending ? "Sending..." : "Send Message"} */}
                <Mail className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
