import React from 'react';
import { Button } from './ui/button';
import { Mail, Linkedin, MapPin, Calendar } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-slate-900 flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-left">
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 bg-blue-600/20 text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Calendar className="w-4 h-4" />
                31+ Years in Telecommunications
              </div>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Lay Been
              <br />
              <span className="text-blue-400">Tan</span>
            </h1>
            
            <h2 className="text-xl lg:text-2xl text-slate-300 font-light mb-6">
              Senior Program Manager | Vulnerability Management Expert
            </h2>
            
            <p className="text-lg text-slate-400 mb-8 leading-relaxed max-w-lg">
              Leading critical vulnerability management initiatives across Nokia's global telecommunications infrastructure. Specialized in securing enterprise-level telecom products with proven expertise in risk assessment and remediation strategies.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg rounded-lg transition-all duration-300 hover:scale-105"
                onClick={() => document.getElementById('experience').scrollIntoView({ behavior: 'smooth' })}
              >
                View Experience
              </Button>
              <Button 
                variant="outline" 
                className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900 px-8 py-3 text-lg rounded-lg transition-all duration-300"
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              >
                Get In Touch
              </Button>
            </div>
            
            <div className="flex items-center gap-6 text-slate-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>Ottawa, ON Canada</span>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="w-5 h-5 hover:text-blue-400 transition-colors cursor-pointer" />
                <Linkedin className="w-5 h-5 hover:text-blue-400 transition-colors cursor-pointer" />
              </div>
            </div>
          </div>
          
          {/* Right Column - Professional Image Placeholder */}
          <div className="lg:flex justify-center hidden">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-blue-600/20 to-slate-700/20 rounded-full flex items-center justify-center border border-blue-400/30">
                <div className="w-72 h-72 bg-slate-800 rounded-full flex items-center justify-center border-2 border-blue-400/50">
                  <div className="text-center text-slate-300">
                    <div className="w-24 h-24 bg-blue-600/30 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-3xl font-bold text-blue-400">LT</span>
                    </div>
                    <p className="text-sm">Professional Photo</p>
                    <p className="text-xs text-slate-500">Upload your photo here</p>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-blue-600/20 rounded-lg border border-blue-400/30 flex items-center justify-center">
                <span className="text-blue-400 font-bold">31Y</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-20 h-12 bg-slate-700/50 rounded-lg border border-slate-600 flex items-center justify-center">
                <span className="text-slate-300 text-sm">Nokia</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-blue-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-blue-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;