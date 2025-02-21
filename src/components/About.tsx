import React from 'react';
import { Code, Globe, Database } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80"
              alt="Workspace"
              className="rounded-lg shadow-lg"
            />
          </div>
          
          <div>
            <p className="text-lg text-gray-600 mb-6">
              I'm a passionate Full Stack Developer with expertise in modern web technologies.
              I love creating elegant solutions to complex problems and building applications
              that make a difference.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <Code className="text-blue-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Frontend Development</h3>
                  <p className="text-gray-600">React, TypeScript, Tailwind CSS, Next.js</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-green-100 rounded-lg">
                  <Database className="text-green-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Backend Development</h3>
                  <p className="text-gray-600">Node.js, Express, MongoDB, PostgreSQL</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-purple-100 rounded-lg">
                  <Globe className="text-purple-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Web Technologies</h3>
                  <p className="text-gray-600">RESTful APIs, GraphQL, Docker, AWS</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About