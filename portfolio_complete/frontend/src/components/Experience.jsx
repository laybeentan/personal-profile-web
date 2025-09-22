import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Building, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: "Nokia",
      role: "Senior Program Manager",
      duration: "January 2010 - Present",
      years: "15 years",
      location: "Ottawa, Canada",
      type: "Current Role",
      description: "Lead comprehensive vulnerability management programs for Nokia's telecommunications portfolio, overseeing security initiatives across multiple product lines and ensuring compliance with international security standards.",
      achievements: [
        "Established enterprise-wide vulnerability assessment frameworks reducing security incidents by 40%",
        "Managed cross-functional teams of 25+ engineers across multiple time zones",
        "Implemented automated vulnerability scanning processes increasing detection efficiency by 60%",
        "Led security compliance initiatives for 5G network infrastructure deployments"
      ],
      technologies: ["Vulnerability Management", "Risk Assessment", "Security Frameworks", "5G Security", "Compliance Management"]
    },
    {
      company: "Nokia",
      role: "Technical Project Manager",
      duration: "2006 - 2010", 
      years: "4 years",
      location: "Ottawa, Canada",
      type: "Previous Role",
      description: "Managed technical projects focused on telecommunications infrastructure development, coordinating between engineering teams and ensuring project deliverables met quality and timeline requirements.",
      achievements: [
        "Successfully delivered 15+ critical telecom infrastructure projects on time and within budget",
        "Introduced agile project management methodologies improving team productivity by 35%",
        "Coordinated with international teams across North America and Europe",
        "Established quality assurance processes that reduced post-deployment issues by 50%"
      ],
      technologies: ["Project Management", "Agile Methodologies", "Quality Assurance", "Team Leadership", "Process Improvement"]
    },
    {
      company: "Nokia",
      role: "Technical Project Manager",
      duration: "1994 - 2006",
      years: "12 years", 
      location: "Ottawa, Canada",
      type: "Foundation Role",
      description: "Started career managing technical projects in telecommunications, developing expertise in GSM, Ethernet, and SIP technologies while building strong foundation in project management and team leadership.",
      achievements: [
        "Managed migration projects from legacy systems to modern telecom infrastructure",
        "Developed standardized project management processes adopted company-wide",
        "Led technical training programs for junior project managers",
        "Maintained 98% project success rate across diverse technical initiatives"
      ],
      technologies: ["GSM", "Ethernet", "SIP", "Legacy System Migration", "Technical Training", "Process Development"]
    },
    {
      company: "Alcatel Canada",
      role: "Software Development Engineering Manager",
      duration: "2000 - 2006",
      years: "6 years",
      location: "Canada",
      type: "Leadership Role",
      description: "Led software development engineering teams, overseeing the design and implementation of telecommunications software solutions while managing engineering resources and project timelines.",
      achievements: [
        "Managed engineering teams developing next-generation telecom software platforms",
        "Implemented software development lifecycle improvements reducing time-to-market by 25%",
        "Established quality metrics and testing frameworks for software products",
        "Mentored 20+ junior engineers in software development best practices"
      ],
      technologies: ["Software Engineering", "Team Management", "SDLC", "Quality Metrics", "Mentoring", "Product Development"]
    },
    {
      company: "Newbridge Networks Corporation", 
      role: "Software Design Manager",
      duration: "1994 - 2000",
      years: "6 years",
      location: "Canada", 
      type: "Career Start",
      description: "Beginning of telecommunications career, managing software design projects and building foundational expertise in network technologies and software development management.",
      achievements: [
        "Led design of innovative network software solutions for enterprise clients",
        "Established design review processes improving software quality and reliability",
        "Collaborated with hardware teams on integrated network solutions",
        "Built expertise in networking protocols and telecommunications standards"
      ],
      technologies: ["Network Software Design", "Software Architecture", "Design Reviews", "Hardware Integration", "Networking Protocols"]
    }
  ];

  const getTypeColor = (type) => {
    switch (type) {
      case 'Current Role': return 'bg-green-100 text-green-800 border-green-300';
      case 'Previous Role': return 'bg-blue-100 text-blue-800 border-blue-300';
      case 'Leadership Role': return 'bg-purple-100 text-purple-800 border-purple-300';
      case 'Foundation Role': return 'bg-orange-100 text-orange-800 border-orange-300';
      case 'Career Start': return 'bg-gray-100 text-gray-800 border-gray-300';
      default: return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Professional Experience</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Three decades of progressive leadership in telecommunications, from software design to vulnerability management, 
              with consistent focus on innovation and team excellence.
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="border border-slate-200 hover:shadow-xl transition-all duration-300 overflow-hidden">
                <CardHeader className="bg-slate-50 border-b border-slate-200">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Building className="w-5 h-5 text-slate-600" />
                        <CardTitle className="text-xl text-slate-900">{exp.role}</CardTitle>
                        <Badge className={`${getTypeColor(exp.type)} font-medium`}>
                          {exp.type}
                        </Badge>
                      </div>
                      <p className="text-lg font-semibold text-blue-600 mb-1">{exp.company}</p>
                      <div className="flex items-center gap-4 text-sm text-slate-600">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.duration}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-slate-900">{exp.years}</div>
                      <div className="text-sm text-slate-500">Duration</div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="p-6">
                  <p className="text-slate-700 mb-6 leading-relaxed">{exp.description}</p>
                  
                  {/* Key Achievements */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-slate-900 mb-3">Key Achievements</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-slate-700">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900 mb-3">Technologies & Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <Badge key={i} variant="secondary" className="bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;