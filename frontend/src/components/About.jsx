import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Shield, Users, Target, Lightbulb, Clock, Award } from 'lucide-react';

const About = () => {
  const strengths = [
    {
      icon: Lightbulb,
      title: "Quick Learner",
      description: "Rapidly adapts to new technologies and evolving security landscapes in telecommunications"
    },
    {
      icon: Target,
      title: "Dedicated Professional",
      description: "Consistently delivers high-quality results with unwavering commitment to excellence"
    },
    {
      icon: Users,
      title: "Independent Worker",
      description: "Effectively manages complex projects with minimal supervision while maintaining high standards"
    }
  ];

  const stats = [
    { number: "31+", label: "Years Experience", icon: Clock },
    { number: "15+", label: "Years at Nokia", icon: Award },
    { number: "100+", label: "Projects Managed", icon: Target },
    { number: "5", label: "Security Domains", icon: Shield }
  ];

  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">About Me</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              A seasoned telecommunications professional with over three decades of experience in program management, 
              specializing in vulnerability management and security initiatives across enterprise-level telecom infrastructure.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center bg-white rounded-xl p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="w-6 h-6 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-1">{stat.number}</div>
                <div className="text-sm text-slate-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Professional Summary */}
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Professional Summary</h3>
              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  As a Senior Program Manager at Nokia, I lead critical vulnerability management initiatives that protect 
                  telecommunications infrastructure serving millions of users worldwide. My expertise spans across multiple 
                  domains including Ethernet, GSM, and SIP technologies.
                </p>
                <p>
                  With a distinguished career beginning at Newbridge Networks Corporation in 1994, I've witnessed and 
                  contributed to the evolution of telecommunications technology. My role encompasses strategic planning, 
                  risk assessment, cross-functional team leadership, and the implementation of comprehensive security 
                  frameworks.
                </p>
                <p>
                  My approach combines technical depth with strategic vision, ensuring that vulnerability management 
                  processes not only address current threats but also anticipate future challenges in the rapidly 
                  evolving telecommunications landscape.
                </p>
              </div>
              
              {/* Education */}
              <div className="mt-8 p-6 bg-white rounded-xl border border-slate-200">
                <h4 className="text-lg font-semibold text-slate-900 mb-3">Education</h4>
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h5 className="font-semibold text-slate-900">Bachelor's Degree</h5>
                    <p className="text-slate-600">Acadia University</p>
                    <p className="text-sm text-slate-500">1990 - 1994</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Core Strengths */}
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Core Strengths</h3>
              <div className="space-y-6">
                {strengths.map((strength, index) => (
                  <Card key={index} className="border border-slate-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <CardHeader className="pb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                          <strength.icon className="w-5 h-5 text-blue-600" />
                        </div>
                        <CardTitle className="text-lg text-slate-900">{strength.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-600">{strength.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Certifications */}
              <div className="mt-8 p-6 bg-white rounded-xl border border-slate-200">
                <h4 className="text-lg font-semibold text-slate-900 mb-4">Certifications</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Award className="w-4 h-4 text-blue-600" />
                    <span className="text-slate-700">Certified SAFe® 4 Product Owner</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Award className="w-4 h-4 text-blue-600" />
                    <span className="text-slate-700">Product Manager Certification</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;