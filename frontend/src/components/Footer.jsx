import React from 'react';
import { Mail, Linkedin, MapPin, Phone, Calendar, Award } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Professional Profile",
      items: [
        "31+ Years Experience",
        "Senior Program Manager",
        "Vulnerability Management Expert", 
        "Telecommunications Specialist"
      ]
    },
    {
      title: "Core Expertise",
      items: [
        "Risk Assessment & Management",
        "Security Frameworks",
        "Program Leadership", 
        "Team Management"
      ]
    },
    {
      title: "Technologies",
      items: [
        "Ethernet & GSM",
        "SIP Protocols",
        "5G Infrastructure",
        "Security Analytics"
      ]
    }
  ];

  const quickLinks = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-800 text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid lg:grid-cols-4 gap-8 mb-12">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <button 
                onClick={scrollToTop}
                className="text-2xl font-bold text-white hover:text-blue-400 transition-colors mb-4 block"
              >
                Lay Been <span className="text-blue-400">Tan</span>
              </button>
              <p className="text-slate-400 mb-6 leading-relaxed">
                Senior Program Manager specializing in vulnerability management and telecommunications security, 
                with over three decades of industry leadership experience.
              </p>
              
              {/* Contact Information */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-slate-400">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">Ottawa, ON Canada</span>
                </div>
                <div className="flex items-center gap-3 text-slate-400">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">Available for Consulting</span>
                </div>
                <div className="flex items-center gap-3 text-slate-400">
                  <Award className="w-4 h-4" />
                  <span className="text-sm">SAFe® 4 Certified</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
              <div className="space-y-2">
                {quickLinks.map((link, index) => (
                  <button
                    key={index}
                    onClick={() => scrollToSection(link.href)}
                    className="block text-slate-400 hover:text-blue-400 transition-colors text-sm py-1"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Professional Highlights */}
            {footerSections.map((section, index) => (
              <div key={index}>
                <h4 className="text-lg font-semibold text-white mb-4">{section.title}</h4>
                <ul className="space-y-2">
                  {section.items.map((item, i) => (
                    <li key={i} className="text-slate-400 text-sm py-1">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Contact Section */}
          <div className="border-t border-slate-700 pt-8 mb-8">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Ready to Connect?</h4>
                <p className="text-slate-400">
                  Let's discuss telecommunications security and vulnerability management opportunities.
                </p>
              </div>
              
              <div className="flex items-center gap-4">
                <button
                  onClick={() => window.open('mailto:laybeentan@yahoo.com', '_blank')}
                  className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105"
                >
                  <Mail className="w-4 h-4" />
                  <span>Send Email</span>
                </button>
                <button
                  onClick={() => window.open('https://www.linkedin.com/in/lay-been-tan-1262502', '_blank')}
                  className="flex items-center gap-2 border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900 px-6 py-3 rounded-lg transition-all duration-300"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-slate-700 pt-8">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 text-sm text-slate-400">
              <div className="flex items-center gap-4">
                <p>© {currentYear} Lay Been Tan. All rights reserved.</p>
                <div className="hidden lg:block w-px h-4 bg-slate-600"></div>
                <p className="hidden lg:block">Professional Portfolio</p>
              </div>
              
              <div className="flex items-center gap-6">
                <button
                  onClick={() => window.open('mailto:laybeentan@yahoo.com', '_blank')}
                  className="text-slate-400 hover:text-blue-400 transition-colors"
                  title="Email"
                >
                  <Mail className="w-4 h-4" />
                </button>
                <button
                  onClick={() => window.open('https://www.linkedin.com/in/lay-been-tan-1262502', '_blank')}
                  className="text-slate-400 hover:text-blue-400 transition-colors"
                  title="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </button>
                <button
                  onClick={scrollToTop}
                  className="text-slate-400 hover:text-blue-400 transition-colors ml-4 text-xs"
                >
                  Back to Top ↑
                </button>
              </div>
            </div>

            {/* Professional Notice */}
            <div className="mt-6 pt-4 border-t border-slate-700">
              <p className="text-xs text-slate-500 text-center lg:text-left">
                This portfolio showcases professional experience and expertise. All project details are presented 
                in accordance with confidentiality agreements and industry standards.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;