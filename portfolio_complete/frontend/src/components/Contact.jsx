import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Mail, Linkedin, MapPin, Phone, Calendar, Users } from 'lucide-react';

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "laybeentan@yahoo.com",
      href: "mailto:laybeentan@yahoo.com",
      description: "For professional inquiries and opportunities",
      primary: true
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "Connect on LinkedIn",
      href: "https://www.linkedin.com/in/lay-been-tan-1262502",
      description: "Professional network and career updates",
      primary: true
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Ottawa, ON Canada",
      href: null,
      description: "Available for local and remote opportunities",
      primary: false
    }
  ];

  const availability = [
    {
      icon: Users,
      title: "Consulting Opportunities",
      description: "Available for telecommunications security consulting and vulnerability management projects"
    },
    {
      icon: Calendar,
      title: "Speaking Engagements", 
      description: "Open to industry conferences and professional development sessions on telecom security"
    },
    {
      icon: Phone,
      title: "Professional Mentoring",
      description: "Offering guidance to emerging project managers in telecommunications industry"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Let's Connect</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Ready to discuss telecommunications security, vulnerability management, or program leadership opportunities? 
              I'd love to hear from you.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-8">Get In Touch</h3>
              
              <div className="space-y-6 mb-12">
                {contactMethods.map((method, index) => (
                  <Card key={index} className={`bg-slate-800 border-slate-700 hover:bg-slate-750 transition-all duration-300 ${method.primary ? 'ring-2 ring-blue-500/30' : ''}`}>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${method.primary ? 'bg-blue-600' : 'bg-slate-700'}`}>
                          <method.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold text-white mb-1">{method.title}</h4>
                          {method.href ? (
                            <a 
                              href={method.href}
                              target={method.href.startsWith('http') ? '_blank' : '_self'}
                              rel={method.href.startsWith('http') ? 'noopener noreferrer' : ''}
                              className="text-blue-400 hover:text-blue-300 transition-colors font-medium block mb-2"
                            >
                              {method.value}
                            </a>
                          ) : (
                            <p className="text-slate-300 font-medium mb-2">{method.value}</p>
                          )}
                          <p className="text-slate-400 text-sm">{method.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Quick Action Buttons */}
              <div className="space-y-4">
                <Button 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 text-lg rounded-lg transition-all duration-300 hover:scale-105"
                  onClick={() => window.open('mailto:laybeentan@yahoo.com', '_blank')}
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Send Email
                </Button>
                <Button 
                  variant="outline"
                  className="w-full border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900 py-4 text-lg rounded-lg transition-all duration-300"
                  onClick={() => window.open('https://www.linkedin.com/in/lay-been-tan-1262502', '_blank')}
                >
                  <Linkedin className="w-5 h-5 mr-2" />
                  Connect on LinkedIn
                </Button>
              </div>
            </div>

            {/* Availability & Services */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-8">Professional Availability</h3>
              
              <div className="space-y-6 mb-8">
                {availability.map((item, index) => (
                  <Card key={index} className="bg-slate-800 border-slate-700 hover:bg-slate-750 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center">
                          <item.icon className="w-5 h-5 text-slate-300" />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-2">{item.title}</h4>
                          <p className="text-slate-400">{item.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Professional Summary Card */}
              <Card className="bg-gradient-to-br from-blue-900/50 to-slate-800/50 border-blue-500/30">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                      <Users className="w-4 h-4 text-white" />
                    </div>
                    Why Work With Me?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-slate-300">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span>31+ years of telecommunications expertise</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span>Proven vulnerability management leadership</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span>Quick learner who works with minimal supervision</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span>Dedicated to delivering exceptional results</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Response Time Notice */}
          <div className="text-center mt-16 p-6 bg-slate-800 rounded-xl border border-slate-700">
            <p className="text-slate-300">
              <span className="text-blue-400 font-medium">Response Time:</span> I typically respond to professional inquiries within 24-48 hours. 
              For urgent matters, please indicate priority in your subject line.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;