import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { Shield, Network, Code, Users, Target, Zap } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Shield,
      title: "Vulnerability Management",
      color: "bg-red-500",
      skills: [
        { name: "Risk Assessment", level: 95 },
        { name: "Security Frameworks", level: 90 },
        { name: "Threat Analysis", level: 92 },
        { name: "Compliance Management", level: 88 },
        { name: "Incident Response", level: 85 }
      ]
    },
    {
      icon: Network,
      title: "Telecommunications", 
      color: "bg-blue-500",
      skills: [
        { name: "Ethernet", level: 95 },
        { name: "GSM", level: 92 },
        { name: "SIP", level: 90 },
        { name: "5G Infrastructure", level: 85 },
        { name: "Network Architecture", level: 88 }
      ]
    },
    {
      icon: Users,
      title: "Project Management",
      color: "bg-green-500", 
      skills: [
        { name: "Agile Methodologies", level: 92 },
        { name: "Team Leadership", level: 95 },
        { name: "Stakeholder Management", level: 90 },
        { name: "Resource Planning", level: 88 },
        { name: "Quality Assurance", level: 90 }
      ]
    },
    {
      icon: Code,
      title: "Technical Leadership",
      color: "bg-purple-500",
      skills: [
        { name: "Software Engineering", level: 85 },
        { name: "System Architecture", level: 82 },
        { name: "Process Improvement", level: 92 },
        { name: "Technical Mentoring", level: 88 },
        { name: "Innovation Management", level: 85 }
      ]
    }
  ];

  const certifications = [
    {
      name: "Certified SAFe® 4 Product Owner",
      issuer: "Scaled Agile",
      status: "Current",
      relevance: "Agile Program Management"
    },
    {
      name: "Product Manager Certification", 
      issuer: "Professional Certification",
      status: "Current",
      relevance: "Strategic Product Leadership"
    }
  ];

  const coreCompetencies = [
    "Strategic Planning", "Cross-functional Leadership", "Risk Mitigation", 
    "Security Architecture", "Vendor Management", "Budget Management",
    "Process Optimization", "Quality Systems", "International Projects",
    "Technology Innovation", "Team Building", "Client Relations"
  ];

  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Skills & Expertise</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive skill set developed through three decades of telecommunications leadership, 
              specializing in vulnerability management and program leadership.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <Card key={index} className="border border-slate-200 hover:shadow-lg transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center`}>
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl text-slate-900">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {category.skills.map((skill, i) => (
                      <div key={i}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-slate-700 font-medium">{skill.name}</span>
                          <span className="text-slate-500 text-sm">{skill.level}%</span>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Certifications */}
            <Card className="border border-slate-200">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                    <Target className="w-5 h-5 text-yellow-600" />
                  </div>
                  <CardTitle className="text-xl text-slate-900">Professional Certifications</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {certifications.map((cert, index) => (
                    <div key={index} className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                      <h4 className="font-semibold text-slate-900 mb-1">{cert.name}</h4>
                      <p className="text-slate-600 text-sm mb-2">{cert.issuer}</p>
                      <div className="flex items-center gap-2">
                        <Badge className="bg-green-100 text-green-800 border-green-300">
                          {cert.status}
                        </Badge>
                        <span className="text-slate-500 text-xs">{cert.relevance}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Core Competencies */}
            <Card className="border border-slate-200">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Zap className="w-5 h-5 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl text-slate-900">Core Competencies</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {coreCompetencies.map((competency, index) => (
                    <Badge 
                      key={index} 
                      variant="secondary" 
                      className="bg-white text-slate-700 border border-slate-300 hover:bg-slate-100 transition-colors px-3 py-1"
                    >
                      {competency}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;