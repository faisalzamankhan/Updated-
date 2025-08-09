import { image } from "framer-motion/client";

export const skills = [
  {
    name: "React",
    icon: "⚛️",
    description: "Component-based UI development",
    color: "text-blue-400"
  },
  {
    name: "Next.js",
    icon: "▲",
    description: "Full-stack React framework",
    color: "text-white"
  },
  {
    name: "TypeScript",
    icon: "🔷",
    description: "Type-safe JavaScript",
    color: "text-blue-500"
  },
  {
    name: "Tailwind CSS",
    icon: "🎨",
    description: "Utility-first CSS framework",
    color: "text-teal-400"
  },
  {
    name: "Shadcn/ui",
    icon: "🧩",
    description: "Modern component library",
    color: "text-gray-300"
  },
  {
    name: "Material UI",
    icon: "🎭",
    description: "React component library",
    color: "text-blue-600"
  },
  {
    name: "JavaScript",
    icon: "🟨",
    description: "ES6+ modern features",
    color: "text-yellow-400"
  },
  {
    name: "HTML5 & CSS3",
    icon: "🌐",
    description: "Semantic markup & styling",
    color: "text-orange-500"
  }
];

export const projects = [
  {
    id: "Midlynk",
    title: "Midlynk",
    description: "Full-featured e-commerce solution with modern UI, payment integration, and admin dashboard.",
    // image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    image: "/images/midlynk.png",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    liveUrl: "#",
    githubUrl: "#",
    features: [
      "Modern responsive design",
      "Payment gateway integration",
      "Admin dashboard",
      "User authentication",
      "Product management",
      "Order tracking"
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "PostgreSQL", "Prisma"]
  },
  {
    id: "Reelo",
    title: "Reelo",
    description: "Collaborative task management with real-time updates, drag-and-drop functionality.",
    // image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    image: "/images/reelo.png",
    tags: ["React", "Shadcn/ui", "Redux"],
    liveUrl: "#",
    githubUrl: "#",
    features: [
      "Drag and drop interface",
      "Real-time collaboration",
      "Task prioritization",
      "Team management",
      "Progress tracking",
      "Notification system"
    ],
    technologies: ["React", "Redux Toolkit", "Shadcn/ui", "Socket.io", "Node.js", "MongoDB"]
  },
  {
    id: "Q100",
    title: "Q100",
    description: "Beautiful weather dashboard with interactive charts, forecasts, and location-based data.",
    // image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    image: "/images/q100.png",
    tags: ["Next.js", "Chart.js", "API"],
    liveUrl: "#",
    githubUrl: "#",
    features: [
      "Interactive weather charts",
      "7-day forecast",
      "Location-based weather",
      "Weather alerts",
      "Historical data",
      "Mobile responsive"
    ],
    technologies: ["Next.js", "Chart.js", "OpenWeather API", "Tailwind CSS", "Framer Motion"]
  },
  {
    id: "GSL",
    title: "GSL",
    description: "Analytics dashboard for social media management with data visualization and insights.",
    // image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    image: "/images/gsl.png",
    tags: ["React", "Material UI", "D3.js"],
    liveUrl: "#",
    githubUrl: "#",
    features: [
      "Social media analytics",
      "Data visualization",
      "Performance metrics",
      "Content scheduling",
      "Engagement tracking",
      "Multi-platform support"
    ],
    technologies: ["React", "Material UI", "D3.js", "Chart.js", "Express.js", "PostgreSQL"]
  },
  {
    id: "Qntar",
    title: "Qntar",
    description: "Personal portfolio with smooth animations, modern design, and optimized performance.",
    // image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    image: "/images/qntar.png",
    tags: ["Next.js", "Framer Motion", "Tailwind"],
    liveUrl: "#",
    githubUrl: "#",
    features: [
      "Smooth animations",
      "Modern design",
      "SEO optimized",
      "Mobile responsive",
      "Contact form",
      "Performance optimized"
    ],
    technologies: ["Next.js", "Framer Motion", "Tailwind CSS", "TypeScript", "Vercel"]
  },
  {
    id: "learning-platform",
    title: "Learning Platform",
    description: "Online learning platform with course management, progress tracking, and interactive content.",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    tags: ["React", "TypeScript", "Firebase"],
    liveUrl: "#",
    githubUrl: "#",
    features: [
      "Course management",
      "Progress tracking",
      "Interactive content",
      "Video streaming",
      "Quizzes and assessments",
      "Certificate generation"
    ],
    technologies: ["React", "TypeScript", "Firebase", "Video.js", "Tailwind CSS", "Node.js"]
  }
];
