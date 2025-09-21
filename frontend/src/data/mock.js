// Mock data for Lay Been Tan's Portfolio
// This file contains structured data that would typically come from a backend API

export const profileData = {
  personalInfo: {
    name: "Lay Been Tan",
    title: "Senior Program Manager | Vulnerability Management Expert",
    location: "Ottawa, ON Canada",
    email: "laybeentan@yahoo.com",
    linkedin: "https://www.linkedin.com/in/lay-been-tan-1262502",
    yearsExperience: 31,
    currentCompany: "Nokia",
    specialization: "Vulnerability Management for Telecommunications"
  },

  professionalSummary: {
    overview: "Seasoned telecommunications professional with over three decades of experience in program management, specializing in vulnerability management and security initiatives across enterprise-level telecom infrastructure.",
    keyStrengths: [
      "Quick learner who adapts rapidly to new technologies",
      "Dedicated professional with unwavering commitment to excellence", 
      "Independent worker who delivers results with minimal supervision"
    ],
    expertise: [
      "Vulnerability Management & Risk Assessment",
      "Telecommunications Security Frameworks",
      "Program & Project Leadership",
      "Cross-functional Team Management",
      "5G Network Security Compliance"
    ]
  },

  experience: [
    {
      id: "exp_1",
      company: "Nokia",
      role: "Senior Program Manager",
      startDate: "2010-01",
      endDate: "present",
      duration: "15 years",
      location: "Ottawa, Canada",
      description: "Lead comprehensive vulnerability management programs for Nokia's telecommunications portfolio, overseeing security initiatives across multiple product lines.",
      achievements: [
        "Established enterprise-wide vulnerability assessment frameworks reducing security incidents by 40%",
        "Managed cross-functional teams of 25+ engineers across multiple time zones",
        "Implemented automated vulnerability scanning processes increasing detection efficiency by 60%"
      ],
      technologies: ["Vulnerability Management", "Risk Assessment", "Security Frameworks", "5G Security"]
    },
    {
      id: "exp_2", 
      company: "Nokia",
      role: "Technical Project Manager",
      startDate: "2006-01",
      endDate: "2010-01",
      duration: "4 years",
      location: "Ottawa, Canada",
      description: "Managed technical projects focused on telecommunications infrastructure development, coordinating between engineering teams.",
      achievements: [
        "Successfully delivered 15+ critical telecom infrastructure projects on time",
        "Introduced agile methodologies improving team productivity by 35%",
        "Established quality assurance processes reducing post-deployment issues by 50%"
      ],
      technologies: ["Project Management", "Agile Methodologies", "Quality Assurance"]
    }
  ],

  skills: {
    vulnerabilityManagement: {
      category: "Vulnerability Management",
      skills: [
        { name: "Risk Assessment", proficiency: 95 },
        { name: "Security Frameworks", proficiency: 90 },
        { name: "Threat Analysis", proficiency: 92 },
        { name: "Compliance Management", proficiency: 88 }
      ]
    },
    telecommunications: {
      category: "Telecommunications",
      skills: [
        { name: "Ethernet", proficiency: 95 },
        { name: "GSM", proficiency: 92 },
        { name: "SIP", proficiency: 90 },
        { name: "5G Infrastructure", proficiency: 85 }
      ]
    },
    leadership: {
      category: "Project Management",
      skills: [
        { name: "Team Leadership", proficiency: 95 },
        { name: "Stakeholder Management", proficiency: 90 },
        { name: "Agile Methodologies", proficiency: 92 }
      ]
    }
  },

  projects: [
    {
      id: "proj_1",
      title: "Enterprise Vulnerability Management Framework",
      category: "Security Infrastructure",
      status: "Completed",
      startDate: "2022-01",
      endDate: "2024-12",
      description: "Led the design and implementation of comprehensive vulnerability management framework across Nokia's global telecommunications infrastructure.",
      challenges: [
        "Integrating disparate legacy security systems",
        "Establishing unified vulnerability assessment standards",
        "Ensuring minimal disruption to ongoing services"
      ],
      solutions: [
        "Developed phased migration strategy reducing downtime by 85%",
        "Created automated scanning protocols increasing detection by 60%",
        "Established cross-regional security review boards"
      ],
      impact: [
        "40% reduction in critical security incidents",
        "35% improvement in compliance ratings",
        "Reduced threat response time from 48 to 6 hours"
      ],
      technologies: ["Vulnerability Scanning", "Risk Assessment", "Compliance Frameworks"],
      metrics: {
        budget: "$2.5M",
        teamSize: "25+ Engineers",
        timeline: "24 Months",
        coverage: "500+ Components"
      }
    },
    {
      id: "proj_2",
      title: "5G Network Security Compliance Initiative", 
      category: "Network Infrastructure",
      status: "Ongoing",
      startDate: "2023-01",
      endDate: null,
      description: "Spearheading security compliance efforts for Nokia's 5G network infrastructure deployment across North American markets.",
      challenges: [
        "Complex international security regulations for 5G",
        "Multiple vendor partnership coordination",
        "Balancing security with performance optimization"
      ],
      solutions: [
        "Established comprehensive security assessment protocols",
        "Created vendor security certification program",
        "Implemented continuous monitoring systems"
      ],
      impact: [
        "Successfully certified 12 major 5G deployments",
        "Reduced regulatory approval timeline by 30%",
        "Established Nokia as 5G security industry leader"
      ],
      technologies: ["5G Security", "Regulatory Compliance", "Vendor Management"],
      metrics: {
        budget: "$1.8M",
        teamSize: "18 Specialists", 
        timeline: "Ongoing",
        coverage: "12 Deployments"
      }
    }
  ],

  certifications: [
    {
      name: "Certified SAFe® 4 Product Owner",
      issuer: "Scaled Agile",
      dateObtained: "2020-03",
      status: "Current",
      relevance: "Agile Program Management"
    },
    {
      name: "Product Manager Certification",
      issuer: "Professional Certification Body",
      dateObtained: "2019-08", 
      status: "Current",
      relevance: "Strategic Product Leadership"
    }
  ],

  education: [
    {
      degree: "Bachelor's Degree",
      institution: "Acadia University",
      startDate: "1990",
      endDate: "1994",
      location: "Nova Scotia, Canada"
    }
  ],

  statistics: {
    yearsExperience: 31,
    yearsAtNokia: 15,
    projectsManaged: 100,
    securityDomains: 5,
    teamsManagedSize: 25,
    budgetManaged: "$2.5M+"
  }
};

// Mock API functions that would typically make HTTP requests
export const mockAPI = {
  getProfile: () => Promise.resolve(profileData),
  
  getExperience: () => Promise.resolve(profileData.experience),
  
  getSkills: () => Promise.resolve(profileData.skills),
  
  getProjects: () => Promise.resolve(profileData.projects),
  
  getCertifications: () => Promise.resolve(profileData.certifications),
  
  getStatistics: () => Promise.resolve(profileData.statistics),

  // Contact form submission (would typically post to backend)
  submitContactForm: (formData) => {
    console.log('Mock API: Contact form submitted', formData);
    return Promise.resolve({
      success: true,
      message: 'Thank you for your message. I will respond within 24-48 hours.'
    });
  }
};

export default profileData;