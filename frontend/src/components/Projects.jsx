import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Shield, Network, Zap, Users, Target, AlertTriangle, CheckCircle, TrendingUp } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      icon: Shield,
      title: "Enterprise Vulnerability Management Framework",
      category: "Security Infrastructure",
      status: "Completed",
      duration: "2022 - 2024",
      description: "Led the design and implementation of a comprehensive vulnerability management framework across Nokia's global telecommunications infrastructure, covering 500+ network components and serving millions of users.",
      challenges: [
        "Integrating disparate legacy security systems across multiple product lines",
        "Establishing unified vulnerability assessment standards for global teams",
        "Ensuring minimal disruption to ongoing telecommunications services"
      ],
      solutions: [
        "Developed phased migration strategy reducing system downtime by 85%",
        "Created automated vulnerability scanning protocols increasing detection speed by 60%",
        "Established cross-regional security review boards ensuring consistent standards"
      ],
      impact: [
        "40% reduction in critical security incidents across the portfolio",
        "Improved compliance ratings from regulatory bodies by 35%",
        "Enhanced threat response time from 48 hours to 6 hours average"
      ],
      technologies: ["Vulnerability Scanning", "Risk Assessment", "Compliance Frameworks", "Automation Tools", "Security Analytics"],
      metrics: {
        budget: "$2.5M",
        teamSize: "25+ Engineers", 
        timeline: "24 Months",
        coverage: "500+ Components"
      }
    },
    {
      icon: Network,
      title: "5G Network Security Compliance Initiative",
      category: "Network Infrastructure",
      status: "Ongoing",
      duration: "2023 - Present", 
      description: "Spearheading security compliance efforts for Nokia's 5G network infrastructure deployment, ensuring adherence to international security standards and regulatory requirements across North American markets.",
      challenges: [
        "Navigating complex international security regulations for 5G deployment",
        "Coordinating security assessments across multiple vendor partnerships",
        "Balancing security requirements with performance optimization needs"
      ],
      solutions: [
        "Established comprehensive security assessment protocols for 5G components",
        "Created vendor security certification program reducing evaluation time by 50%",
        "Implemented continuous monitoring systems for real-time compliance tracking"
      ],
      impact: [
        "Successfully achieved security certification for 12 major 5G deployments",
        "Reduced regulatory approval timeline by 30% through proactive compliance",
        "Established Nokia as industry leader in 5G security best practices"
      ],
      technologies: ["5G Security", "Regulatory Compliance", "Vendor Management", "Continuous Monitoring", "Risk Analysis"],
      metrics: {
        budget: "$1.8M",
        teamSize: "18 Specialists",
        timeline: "Ongoing",
        coverage: "12 Deployments"
      }
    },
    {
      icon: TrendingUp,
      title: "Legacy System Modernization Program",
      category: "Infrastructure Transformation",
      status: "Completed",
      duration: "2020 - 2022",
      description: "Managed the strategic modernization of legacy telecommunications systems, transitioning critical infrastructure to modern platforms while maintaining service continuity for enterprise clients.",
      challenges: [
        "Migrating mission-critical systems with zero-downtime requirements",
        "Managing complex dependencies between legacy and modern systems", 
        "Training teams on new technologies while maintaining operational excellence"
      ],
      solutions: [
        "Developed parallel running strategy enabling seamless system transitions",
        "Created comprehensive testing frameworks ensuring system reliability",
        "Implemented knowledge transfer programs for technical teams"
      ],
      impact: [
        "Successfully migrated 50+ legacy systems with 99.9% uptime maintained",
        "Reduced operational costs by 25% through system optimization",
        "Improved system performance benchmarks by 45% post-migration"
      ],
      technologies: ["System Migration", "Legacy Modernization", "Performance Optimization", "Change Management", "Quality Assurance"],
      metrics: {
        budget: "$3.2M", 
        teamSize: "32 Engineers",
        timeline: "30 Months",
        coverage: "50+ Systems"
      }
    },
    {
      icon: Users,
      title: "Cross-Functional Security Training Initiative", 
      category: "Organizational Development",
      status: "Completed",
      duration: "2021 - 2023",
      description: "Designed and implemented comprehensive security awareness and training programs for telecommunications teams, establishing security-first culture across multiple departments and geographical locations.",
      challenges: [
        "Creating engaging security training for diverse technical skill levels",
        "Ensuring consistent security practices across global teams",
        "Measuring and improving security awareness effectiveness"
      ],
      solutions: [
        "Developed role-specific security training modules for different technical domains",
        "Created interactive simulation exercises based on real vulnerability scenarios",
        "Implemented gamified learning platforms increasing engagement by 70%"
      ],
      impact: [
        "Trained 200+ engineers across 5 countries on security best practices",
        "Achieved 95% completion rate for mandatory security training programs",
        "Reduced human-error security incidents by 60% within first year"
      ],
      technologies: ["Training Development", "Security Awareness", "E-Learning Platforms", "Performance Metrics", "Cultural Change"],
      metrics: {
        budget: "$450K",
        teamSize: "8 Trainers",
        timeline: "18 Months", 
        coverage: "200+ Engineers"
      }
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed': return 'bg-green-100 text-green-800 border-green-300';
      case 'Ongoing': return 'bg-blue-100 text-blue-800 border-blue-300';
      case 'Planning': return 'bg-yellow-100 text-yellow-800 border-yellow-300';
      default: return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Key Projects</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Flagship vulnerability management and security initiatives that have shaped Nokia's 
              telecommunications infrastructure and established industry-leading security standards.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="space-y-12">
            {projects.map((project, index) => (
              <Card key={index} className="border border-slate-200 hover:shadow-xl transition-all duration-300 overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-slate-50 to-blue-50 border-b border-slate-200">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-3">
                        <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                          <project.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-2xl text-slate-900">{project.title}</CardTitle>
                          <p className="text-blue-600 font-medium">{project.category}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-slate-600">
                        <Badge className={`${getStatusColor(project.status)} font-medium`}>
                          {project.status}
                        </Badge>
                        <span>{project.duration}</span>
                      </div>
                    </div>
                    
                    {/* Project Metrics */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">
                      {Object.entries(project.metrics).map(([key, value], i) => (
                        <div key={i} className="bg-white rounded-lg p-3 border border-slate-200">
                          <div className="text-lg font-bold text-slate-900">{value}</div>
                          <div className="text-xs text-slate-500 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="p-8">
                  <p className="text-slate-700 text-lg mb-8 leading-relaxed">{project.description}</p>
                  
                  <div className="grid lg:grid-cols-3 gap-8 mb-8">
                    {/* Challenges */}
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <AlertTriangle className="w-5 h-5 text-orange-600" />
                        <h4 className="text-lg font-semibold text-slate-900">Key Challenges</h4>
                      </div>
                      <ul className="space-y-2">
                        {project.challenges.map((challenge, i) => (
                          <li key={i} className="flex items-start gap-2 text-slate-700">
                            <div className="w-1.5 h-1.5 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm">{challenge}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Solutions */}
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <Zap className="w-5 h-5 text-blue-600" />
                        <h4 className="text-lg font-semibold text-slate-900">Solutions Implemented</h4>
                      </div>
                      <ul className="space-y-2">
                        {project.solutions.map((solution, i) => (
                          <li key={i} className="flex items-start gap-2 text-slate-700">
                            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm">{solution}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Impact */}
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <h4 className="text-lg font-semibold text-slate-900">Measurable Impact</h4>
                      </div>
                      <ul className="space-y-2">
                        {project.impact.map((impact, i) => (
                          <li key={i} className="flex items-start gap-2 text-slate-700">
                            <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm">{impact}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900 mb-4">Technologies & Methodologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <Badge 
                          key={i} 
                          variant="secondary" 
                          className="bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors px-3 py-1"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Ready to discuss your next telecommunications security initiative?
              </h3>
              <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
                With proven expertise in vulnerability management and program leadership, I'm ready to help 
                your organization tackle complex security challenges in telecommunications infrastructure.
              </p>
              <Button 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg rounded-lg transition-all duration-300 hover:scale-105"
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              >
                Let's Connect
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;