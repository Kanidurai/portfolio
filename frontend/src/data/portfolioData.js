export const portfolioData = {
  about: {
    name: "Kanimozhi D",
    title: "Full Stack Developer",
    tagline:
      "Full Stack Developer, React.js Developer, Node.js Developer, NestJS Developer",
    summary:
      "Full Stack Developer with 2+ years of experience building scalable SaaS applications using React, TypeScript, NestJS, MongoDB, RabbitMQ, and REST APIs. Experienced in developing enterprise Learning Management Systems, microservices, RBAC, cloud deployment, and responsive web applications. Passionate about building clean, scalable, and maintainable software solutions.",
    contact: {
      phone: "9790319725",
      email: "dkanimozhi.dev@gmail.com",
      github: "https://github.com/Kanidurai",
      linkedin: "https://www.linkedin.com/in/kanimozhi-duraisamy/",
      location: "Chennimalai, Erode, 638051, Tamil Nadu",
    },
  },
  skills: [
    {
      category: "Frontend",
      items: [
        "React.js",
        "TypeScript",
        "JavaScript ES6+",
        "Tailwind CSS",
        "Responsive Design",
        "Bootstrap",
      ],
    },
    {
      category: "Backend",
      items: ["Node.js", "NestJS", "REST APIs", "GraphQL", "Authentication"],
    },
    {
      category: "Database & Architecture",
      items: ["MongoDB", "RabbitMQ", "Microservices", "RBAC", "MongoDB Atlas"],
    },
    {
      category: "Deployment & DevOps",
      items: ["Nginx", "PM2", "Hostinger VPS", "SSL", "Deployment"],
    },
    {
      category: "Tools & Workflow",
      items: ["Git", "GitHub", "GitLab", "Postman", "Jira", "Agile"],
    },
  ],
  experience: [
    {
      id: 1,
      company: "Injex Knowledge Private Limited",
      role: "Junior Software Engineer (Full Stack)",
      period: "June 2025 - June 2026",
      location: "Tamil Nadu",

      description:
        "Developed a scalable SaaS-based Learning Management System (LMS) using React, TypeScript, NestJS, MongoDB Atlas, RabbitMQ, and microservices architecture for educational institutions.",

      highlights: [
        "Developed complete Student Portal including dashboards, course learning, assignments, certifications, and progress tracking.",
        "Built Program → Course → Module → Chapter → Lesson workflow with structured learning and completion tracking.",
        "Implemented RBAC-based App Admin, College Admin, Tutor, and Student portals.",
        "Developed scalable REST APIs using NestJS with MongoDB Atlas.",
        "Integrated RabbitMQ microservices for asynchronous communication between platform services.",
        "Managed production deployment using Hostinger VPS, Nginx, PM2, SSL, and MongoDB Atlas.",
      ],
    },

    {
      id: 2,
      company: "Phoenix Solutions",
      role: "Junior Software Engineer",
      period: "July 2024 - June 2025",
      location: "Erode, Tamil Nadu",

      description:
        "Worked on Magento, PHP APIs, and MERN stack applications, contributing to e-commerce solutions and company products.",

      highlights: [
        "Developed quotation, invoice, and payment modules for the Taxary MERN application.",
        "Built REST APIs and integrated payment workflows using Node.js, React, GraphQL, and MongoDB.",
        "Worked on Magento project setup, admin panel customization, and e-commerce enhancements.",
        "Separated frontend, backend, and API layers in the Magneri-Web PHP project.",
      ],
    },

    {
      id: 3,
      company: "Future Vineto AI Technology",
      role: "Junior Software Engineer (Backend)",
      period: "Jan 2024 - Apr 2024",
      location: "Tamil Nadu",

      description:
        "Worked on backend development using Node.js and SQL to support AI-based profile management applications.",

      highlights: [
        "Developed backend functionality using Node.js.",
        "Managed SQL database using phpMyAdmin.",
        "Added and maintained job-related data for MyAIProfile.",
        "Resolved backend issues and optimized application workflows.",
      ],
    },
  ],
  projects: [
    {
      id: 1,
      name: "Injex LMS",
      description:
        "A scalable SaaS-based Learning Management System (LMS) built for educational institutions with App Admin, College Admin, Tutor, and Student portals. Supports complete academic management, learning workflows, and role-based access control.",

      tech: [
        "React",
        "TypeScript",
        "NestJS",
        "MongoDB Atlas",
        "RabbitMQ",
        "REST API",
        "Nginx",
        "PM2",
      ],

      contributions: [
        "Developed complete Student Portal including dashboards, course learning, assignments, certifications, and progress tracking.",
        "Implemented RBAC-based App Admin, College Admin, Tutor, and Student portals.",
        "Integrated RabbitMQ microservices for asynchronous communication between platform services.",
        "Developed scalable REST APIs using NestJS with MongoDB Atlas for academic data management.",
        "Managed production deployment using Hostinger VPS, Nginx reverse proxy, PM2, SSL, and MongoDB Atlas.",
      ],

      type: "Professional",
    },
    {
      id: 2,
      name: "Taxary",
      description:
        "A company-owned product for buying and selling products with multiple business modules. Full-featured e-commerce and business management system.",
      tech: ["MongoDB", "React", "GraphQL", "Node.js", "Express.js"],
      contributions: [
        "Developed APIs for quotation, invoice, and payment modules",
        "Integrated payment features end-to-end",
        "Built responsive UI components using React",
        "Designed and implemented GraphQL schemas",
      ],
      type: "Professional",
    },
    {
      id: 3,
      name: "Medi Therapie",
      description:
        "Magento-based e-commerce application for medical/therapy products. Focused on e-commerce solutions and Magento customization.",
      tech: ["Magento", "PHP", "MySQL", "Admin Panel"],
      contributions: [
        "Initiated project setup and installation",
        "Managed Magento admin panel configurations",
        "Implemented required e-commerce changes",
        "Expanded expertise in e-commerce solutions",
      ],
      type: "Professional",
    },
    {
      id: 4,
      name: "Magneri-Web",
      description:
        "Refactored an existing monolithic PHP application by separating concerns into frontend, backend, and API layers for better maintainability.",
      tech: ["PHP", "REST API", "JavaScript"],
      contributions: [
        "Separated frontend, backend, and API into distinct layers",
        "Improved codebase maintainability",
        "Focused on frontend development flow",
        "Applied clean architecture principles",
      ],
      type: "Professional",
    },
    {
      id: 5,
      name: "MyAIProfile",
      description:
        "AI-powered profile management project developed at Future Vineto AI Technology. Backend support using Node.js and SQL.",
      tech: ["Node.js", "SQL", "phpMyAdmin"],
      contributions: [
        "Built backend support with Node.js",
        "Managed database using phpMyAdmin",
        "Added job-related data features",
        "Handled technical backend challenges",
      ],
      type: "Professional",
    },
  ],
  education: [
    {
      degree: "Bachelor of Computer Science",
      institution: "Vellalar College for Women",
      year: "2023",
      location: "Tamil Nadu",
    },
  ],
  certifications: [
    {
      title: "MERN Stack Developer Course",
      issuer: "IDM Tech Park",
      description:
        "Achieved a certification in MERN Stack Developer Course - IDM Tech Park.",
    },
    {
      title: "TCS NQT - Cognitive",
      issuer: "Tata Consultancy Services",
      description:
        "Cognitive Authority by TCS NQT. Score: 69%. ID: 22071431636.",
    },
    {
      title: "English Typewriting (Junior & Senior)",
      issuer: "Tamil Nadu Government",
      description:
        "Completed both Junior and Senior English Typewriting exams and received distinction level certificates.",
    },
  ],
  testimonials: [],
  analytics: {
    experienceYears: "2+",
    projectsCompleted: "5+",
    certifications: "3+",
  },
};
