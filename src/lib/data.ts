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
    description: "Contributed to a Fiverr-like freelance platform supporting employer-employee workflows and service listings",
    // image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    image: "/images/midlynk.png",
    tags: ["Next.js", "Javascipt",  "Antdesign","Django"],
    liveUrl: "https://midlynk.com/",
    githubUrl: "#",
    features: [
      
      "Payment gateway integration",
      "Service Marketplace",
      "Seamless Hiring Process",
      "Transparent Communication",
      "Verified Profiles & Ratings",
       "Modern responsive design",
       "Category & Search Filters"
    ],
    technologies: ["Next.js", "Javascript", "AntDesign", "Stripe", "Django", "Push Notifications","Prisma"]
  },
  {
    id: "Reelo",
    title: "Reelo",
    description: "Reelo is a user-focused ad management platform that empowers individuals and businesses to create, run, and track ad campaigns while rewarding users for engagement.",
    // image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    image: "/images/reelo.png",
    tags: ["Refine", "Material Design", "Shadecn","Django"],
    liveUrl: "#",
    githubUrl: "#",
    features: [
      "Ad Campaign Management ",
      "Real-time collaboration",
      "Reward-Based Engagement",
      "Performance Tracking & Analytics",
      "Modern Frontend Experience ",
      "Integrated Payment System","Cross-Device Accessibility"
    ],
    technologies: ["Refine", "Material Design", "Shadecn","Push Notifications","Django"]
  },
  {
    id: "Q100",
    title: "Q100",
    description: "Q-100 is a role-based Learning Management System tailored for the Saudi Arabian education system, enabling efficient national test preparation through personalized dashboards for teachers and students.",
    // image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    image: "/images/Q100.png",
    tags: ["React", "AntDesign", "Django"],
    liveUrl: "https://q100-4ca4a.web.app/log-in",
    githubUrl: "#",
    features: [
      "Role-Based Access Control",
      "Comprehensive Exam Preparation",
      "Student Portal",
      "Teacher Portal",
      "Performance Analytics",
      "Course & Test Management",
      "Interactive Learning Experience"
    ],
    technologies: ["React", "Antdesign", "Django", "Plate js","Tanstack Query"]
  },
  {
    id: "GSL",
    title: "GSL",
    description: "Grow Smart Live is an interactive crop advisory platform that connects farmers and agricultural enthusiasts with experts, enabling article sharing, expert guidance, and community knowledge exchange.",
    // image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    image: "/images/gsl.png",
    tags: ["Next js", "Shadecn", "Nodejs"],
    liveUrl: "https://growsmartlive.com/",
    githubUrl: "#",
    features: [
      "Article Posting & Knowledge Sharing",
      "Expert Consultation",
      "Optimized Navigation & Data Loading",
      "Backend Collaboration",
      "Engagement tracking",
      "Community Engagement Tools"
    ],
    technologies: ["Nextjs", "Shadecn", "AGgrid", "Platejs", "Tanstack Router", "Firebase Auth" ,"Push Notifications"]
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
    id: "aiter",
    title: "AI-ITER",
    description: "Developed an AI-powered platform to automate NHS referral workflows, streamlining communication between GPs, specialists, and hospitals.",
    image:"/images/AITER.png",
    // image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    tags: ["React", "Javascript", "Django", "Tailwind","Auth0","Firebase Notifications"],
    liveUrl: "#",
    githubUrl: "#",
    features: [
      "Referral Automation",
      "UI Development",
      "Real-time Communication",
      "AI Integration",
      "Workflow Optimization",
      "Healthcare Efficiency",
      "Responsive Design",
      "Access Control",
      "Role-based Permissions"
    ],
    technologies: ["React", "Javascript", "Django", "Tailwind","Auth0","Firebase Notifications"]
  }
];

export const firms=[
  {
    id:"bitsPro",
    name: "BitsPro",
    companyLogo: "/images/bitsPro.png",
    description: "React Developer",
    color: "text-blue-400",
    detail:`
     Developed and integrated dynamic user interfaces using React with Type Script,emphasizing
     performance,maintainability, and type safety
     Used Tan Stack Router for routing for routing and Infinite Query for efficient data fetching.
     Worked extensively with AG Grid for complex data tables and used Plate js for Editor usage.
     Worked with Google Apis for Google Maps and Google Places integration.
     Implementation of firebase for real-time notifications and authentication.
     Technologies: React, TypeScript ,Shadcn,Figma Design,Plate js
    `
  },
  {
    id:"gybCommerce",
    name: "GYBCOMMERCE",
    companyLogo: "/images/GYB.png",
    description: "Junior Frontend Developer",
    color: "text-blue-400",
  detail:`
     Developed and integrated dynamic user interfaces using React with Type Script,emphasizing
     performance,maintainability, and type safety
     Utilized React Query for efficient data fetching and state management.
     Improved application performance by leveraging various React Hooks.
Developed small projects on WordPress and Shopify using JavaScript, CSS, and Polaris.
Collaborated with Figma and Adobe XD to implement and refine designs.
Implemented CI/CD pipelines for streamlined deployment and version control.
Utilized Firebase for deployment, real-time notifications, and authentication.
Integrated Auth0 for secure authentication and authorization.
Implemented Stripe for seamless payment integration.
Built projects using the Refine framework.
Worked with various design libraries including AntDesign, Bootstrap, Material Design, Tailwind CSS, and Shadcn.
Developed backend services using Node js and Express js.
     Technologies: React,Javascript,TypeScript ,AntDesign,Ploaris,Shadcn,Figma Design, Adobe,Plate js 
    `
  },

     {
      id:"mythod",
    name: "Mythod",
    companyLogo: "/images/mythod_logos.png",
    description: "React Developer",
    color: "text-blue-400",
    detail:`
     Developed Qntar, a travel booking platform, using React.

Enabled users to browse and book tours across different parts of the world.

Implemented dynamic tour listings, search, and filtering functionality for a smooth user experience.

Integrated React Query for efficient data fetching and state management.

Designed responsive UI to ensure seamless experience across devices.

Implemented user authentication and authorization for secure bookings.

Handled booking workflow and payment integration (Stripe or other payment solutions if applicable).

Collaborated with design tools like Figma or Adobe XD to match the UI with the design vision.
     
     Technologies: React, TypeScript ,Shadcn,Figma Design,Plate js.
    `
  },
  {
    id:"hassoft",
    name: "HassSoft Soultion",
    companyLogo: "/images/hassoft.png",
    description: "Internee",
    color: "text-blue-400",
    detail:`
     Joined here as Frontend Developer (Internship) using React.
      The main domain which I was working was creating different pages for UI.
       Work on the basics of React Architecture
    `
  },

]