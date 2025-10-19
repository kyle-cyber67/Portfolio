import React, { useState } from 'react';
import { Mail, Github, Linkedin, ExternalLink, Menu, X, Code2, Briefcase, User, MessageSquare } from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('about');
  const [menuOpen, setMenuOpen] = useState(false);

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack online shopping platform with payment integration and admin dashboard.',
      tech: ['React', 'Node.js', 'MongoDB'],
      link: '#'
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task manager with real-time updates and team features.',
      tech: ['React', 'Firebase', 'Tailwind'],
      link: '#'
    },
    {
      title: 'Weather Dashboard',
      description: 'Interactive weather application with forecasts and location-based data.',
      tech: ['React', 'API Integration', 'Charts'],
      link: '#'
    },
    {
      title: 'Portfolio CMS',
      description: 'Content management system for portfolio websites with drag-and-drop functionality.',
      tech: ['Next.js', 'PostgreSQL', 'Prisma'],
      link: '#'
    },
    {
      title: 'Social Media Analytics',
      description: 'Dashboard for tracking social media metrics and engagement across platforms.',
      tech: ['Vue.js', 'Python', 'D3.js'],
      link: '#'
    },
    {
      title: 'Fitness Tracker',
      description: 'Mobile-responsive fitness app with workout plans and progress tracking.',
      tech: ['React Native', 'Express', 'MongoDB'],
      link: '#'
    }
  ];

  const skills = [
    'JavaScript', 'React', 'Node.js', 'TypeScript', 'Python',
    'HTML/CSS', 'Git', 'REST APIs', 'MongoDB', 'SQL'
  ];

  const navItems = [
    { id: 'about', icon: User, label: 'About' },
    { id: 'projects', icon: Briefcase, label: 'Projects' },
    { id: 'skills', icon: Code2, label: 'Skills' },
    { id: 'contact', icon: MessageSquare, label: 'Contact' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-950 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50 border-b border-blue-500/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-500">
            JD
          </h1>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`flex items-center gap-2 transition-colors ${
                    activeSection === item.id
                      ? 'text-blue-500'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <Icon size={18} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-black border-t border-gray-800">
            <div className="flex flex-col gap-4 px-6 py-4">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveSection(item.id);
                      setMenuOpen(false);
                    }}
                    className={`flex items-center gap-2 text-left ${
                      activeSection === item.id
                        ? 'text-blue-500'
                        : 'text-gray-400'
                    }`}
                  >
                    <Icon size={18} />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 pt-24 pb-12">
        {/* About Section */}
        {activeSection === 'about' && (
          <div className="animate-fadeIn">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row items-center gap-12 mb-16">
                <div className="w-48 h-48 bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-400 rounded-2xl flex items-center justify-center text-6xl font-bold shadow-2xl shadow-blue-500/50">
                  JD
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h2 className="text-6xl font-bold mb-4">Kyle Huang</h2>
                  <p className="text-2xl text-blue-500 mb-6">Full Stack Developer</p>
                  <div className="flex gap-4 justify-center md:justify-start">
                    <a href="#" className="w-12 h-12 bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors flex items-center justify-center border border-gray-800 hover:border-blue-500">
                      <Github size={20} />
                    </a>
                    <a href="#" className="w-12 h-12 bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors flex items-center justify-center border border-gray-800 hover:border-blue-500">
                      <Linkedin size={20} />
                    </a>
                    <a href="mailto:kyle.huang2011@gmail.com" className="w-12 h-12 bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors flex items-center justify-center border border-gray-800 hover:border-blue-500">
                      <Mail size={20} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-gray-900/80 to-blue-900/30 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20 shadow-xl shadow-blue-500/10">
                <p className="text-lg text-gray-300 leading-relaxed">
                  I'm a passionate full stack developer with 3+ years of experience building web applications. 
                  I love creating elegant solutions to complex problems and am always eager to learn new technologies. 
                  When I'm not coding, you can find me contributing to open source or exploring the latest in tech.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Projects Section */}
        {activeSection === 'projects' && (
          <div className="animate-fadeIn">
            <h2 className="text-5xl font-bold mb-12">Projects</h2>
            <div className="space-y-6">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-gray-900/80 to-blue-900/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-blue-500 transition-all hover:-translate-y-1 shadow-lg hover:shadow-blue-500/20"
                >
                  <h3 className="text-3xl font-bold mb-4 group-hover:text-blue-500 transition-colors">{project.title}</h3>
                  <p className="text-gray-400 mb-6 leading-relaxed text-lg">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-lg text-sm text-blue-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-400 transition-colors font-medium"
                  >
                    View Project <ExternalLink size={18} />
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Skills Section */}
        {activeSection === 'skills' && (
          <div className="animate-fadeIn">
            <h2 className="text-5xl font-bold mb-12">Skills</h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="group h-32 bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800 hover:border-blue-500 transition-all flex items-center justify-center hover:-translate-y-1"
                  >
                    <span className="text-lg font-medium text-gray-300 group-hover:text-blue-500 transition-colors">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Contact Section */}
        {activeSection === 'contact' && (
          <div className="animate-fadeIn">
            <h2 className="text-5xl font-bold mb-12">Get In Touch</h2>
            <div className="max-w-2xl mx-auto">
              <p className="text-xl text-gray-400 mb-12 text-center leading-relaxed">
                I'm always open to new opportunities and collaborations. 
                Feel free to reach out if you'd like to work together!
              </p>
              <div className="space-y-4">
                <a
                  href="mailto:kyle.huang2011@gmail.com"
                  className="group flex items-center gap-4 p-6 bg-gray-900/50 rounded-2xl border border-gray-800 hover:border-blue-500 transition-all hover:-translate-x-1"
                >
                  <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                    <Mail className="text-blue-500" size={20} />
                  </div>
                  <span className="text-gray-300 group-hover:text-white transition-colors">john@example.com</span>
                </a>
                <a
                  href="https://github.com"
                  className="group flex items-center gap-4 p-6 bg-gray-900/50 rounded-2xl border border-gray-800 hover:border-blue-500 transition-all hover:-translate-x-1"
                >
                  <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                    <Github className="text-blue-500" size={20} />
                  </div>
                  <span className="text-gray-300 group-hover:text-white transition-colors">github.com/johndoe</span>
                </a>
                <a
                  href="https://linkedin.com"
                  className="group flex items-center gap-4 p-6 bg-gray-900/50 rounded-2xl border border-gray-800 hover:border-blue-500 transition-all hover:-translate-x-1"
                >
                  <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                    <Linkedin className="text-blue-500" size={20} />
                  </div>
                  <span className="text-gray-300 group-hover:text-white transition-colors">linkedin.com/in/johndoe</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </main>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </div>
  );
}