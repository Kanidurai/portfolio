import { Injectable } from '@nestjs/common';

@Injectable()
export class PortfolioService {
  /**
   * Returns the full portfolio data derived from Kanimozhi's CV
   */
  getPortfolioData() {
    return {
      about: this.getAbout(),
      skills: this.getSkills(),
      experience: this.getExperience(),
      projects: this.getProjects(),
      education: this.getEducation(),
      certifications: this.getCertifications(),
      extracurricular: this.getExtracurricular(),
    };
  }

  getAbout() {
    return {
      name: 'Kanimozhi D',
      title: 'Junior Software Engineer (Backend)',
      tagline: 'MERN Stack Developer, Junior Software Engineer, Full Stack Web Developer',
      summary:
        'Junior Software Engineer with 1 year and 9 months of experience in backend development and e-commerce solutions. Skilled in Magento, PHP, MySQL, and the MERN stack, with hands-on experience in building and maintaining web applications. Proficient in using Jira for project management and Git/GitHub for version control. Strong team player with a focus on delivering clean, efficient code. Passionate about continuous learning and solving real-world problems through technology.',
      contact: {
        phone: '9790319725',
        email: 'kanimozhiduraisamy2002@gmail.com',
        github: 'https://github.com/Kanidurai',
        location: 'Chennimalai, Erode, 638051, Tamil Nadu',
      },
    };
  }

  getSkills() {
    return [
      {
        category: 'Programming Languages',
        items: ['PHP', 'JavaScript', 'Node.js', 'SQL'],
      },
      {
        category: 'E-Commerce & Magento',
        items: ['Magento', 'Admin Panel Management', 'E-Commerce Solutions', 'Project Setup'],
      },
      {
        category: 'MERN Stack',
        items: ['MongoDB', 'Express.js', 'React', 'Node.js', 'GraphQL'],
      },
      {
        category: 'Database & API',
        items: ['MySQL', 'phpMyAdmin', 'REST APIs', 'API Development', 'Payment Integration'],
      },
      {
        category: 'Tools & Workflow',
        items: ['Git', 'GitHub', 'Jira', 'Agile', 'Frontend Development', 'Backend Development'],
      },
    ];
  }

  getExperience() {
    return [
      {
        id: 1,
        company: 'Pheonix Solutions',
        role: 'Junior Software Engineer',
        period: 'July 2024 – Present',
        location: 'Erode, TamilNadu',
        description:
          'Worked on multiple projects spanning e-commerce (Magento), PHP APIs, and MERN stack product development.',
        highlights: [
          'Medi Therapie - Magento Applications: Collaborated on a Magento project, expanding expertise in e-commerce solutions. Managed project setup, admin panel, and custom changes.',
          'Magneri-Web - PHP | API: Worked on an existing codebase to separate the frontend, backend, and API. Currently focused on frontend development flow.',
          'Billing Application - MERN Stack: Working on Taxary, a company-owned product for buying and selling products with multiple modules. Contributed to quotation, invoice, and payment modules and Developed APIs, payment integration, and UI using MongoDB, React, GraphQL, Node.js.',
        ],
      },
      {
        id: 2,
        company: 'Future Vineto AI Technology',
        role: 'Junior Software Engineer (Backend)',
        period: 'Jan 2024 – Apr 2024',
        location: 'Tamil Nadu',
        description:
          'Worked on backend support using Node.js and SQL for the MyAIProfile project.',
        highlights: [
          'Worked on backend development using Node.js and SQL (phpMyAdmin) to support application functionality and data management.',
          "Contributed to the 'MyAIProfile' project by adding and managing job-related data.",
          'Strengthened problem-solving skills by addressing technical challenges and debugging issues during development.',
        ],
      },
    ];
  }

  getProjects() {
    return [
      {
        id: 1,
        name: 'Taxary',
        description:
          'A company-owned product for buying and selling products with multiple business modules. Full-featured e-commerce and business management system.',
        tech: ['MongoDB', 'React', 'GraphQL', 'Node.js', 'Express.js'],
        contributions: [
          'Developed APIs for quotation, invoice, and payment modules',
          'Integrated payment features end-to-end',
          'Built responsive UI components using React',
          'Designed and implemented GraphQL schemas',
        ],
        type: 'Professional',
      },
      {
        id: 2,
        name: 'Medi Therapie',
        description:
          'Magento-based e-commerce application for medical/therapy products. Focused on e-commerce solutions and Magento customization.',
        tech: ['Magento', 'PHP', 'MySQL', 'Admin Panel'],
        contributions: [
          'Initiated project setup and installation',
          'Managed Magento admin panel configurations',
          'Implemented required e-commerce changes',
          'Expanded expertise in e-commerce solutions',
        ],
        type: 'Professional',
      },
      {
        id: 3,
        name: 'Magneri-Web',
        description:
          'Refactored an existing monolithic PHP application by separating concerns into frontend, backend, and API layers for better maintainability.',
        tech: ['PHP', 'REST API', 'JavaScript'],
        contributions: [
          'Separated frontend, backend, and API into distinct layers',
          'Improved codebase maintainability',
          'Focused on frontend development flow',
          'Applied clean architecture principles',
        ],
        type: 'Professional',
      },
      {
        id: 4,
        name: 'MyAIProfile',
        description:
          'AI-powered profile management project developed at Future Vineto AI Technology. Backend support using Node.js and SQL.',
        tech: ['Node.js', 'SQL', 'phpMyAdmin'],
        contributions: [
          'Built backend support with Node.js',
          'Managed database using phpMyAdmin',
          'Added job-related data features',
          'Handled technical backend challenges',
        ],
        type: 'Professional',
      },
    ];
  }

  getEducation() {
    return [
      {
        degree: 'Bachelor of Computer Science',
        institution: 'Vellalar College for Women',
        year: '2023',
        location: 'Tamil Nadu',
      },
    ];
  }

  getCertifications() {
    return [
      {
        title: 'MERN Stack Developer Course',
        issuer: 'IDM Tech Park',
        description: 'Achieved a certification in MERN Stack Developer Course - IDM Tech Park.',
      },
      {
        title: 'TCS NQT - Cognitive',
        issuer: 'Tata Consultancy Services',
        description: 'Cognitive Authority by TCS NQT. Score: 69%. ID: 22071431636.',
      },
      {
        title: 'English Typewriting (Junior & Senior)',
        issuer: 'Tamil Nadu Government',
        description: 'Completed a Both Junior and Senior English Typewriting exam and got a Distinction level Certificate.',
      },
    ];
  }

  getExtracurricular() {
    return [
      'Authored a blog on PheonixSolutions about web development',
      'Conducted a JavaScript session to share technical expertise',
      'Currently reading "Good Vibes, Good Life" for self-improvement',
      'Actively interested in both indoor and outdoor sports',
    ];
  }
}
