'use client';

import {
  GraduationCap,
  Mail,
  Phone,
  Linkedin,
  Github,
  MapPin,
  Calendar,
  Palette,
  TvMinimalPlay,
  Workflow 
} from 'lucide-react';

import { Card, Button, Box } from '@mui/material';

const skills = [
  { name: 'React.js', level: 95 },
  { name: 'ASP .NET Web API', level: 95 },
  { name: 'Node.js (Express.js)', level: 95 },
  { name: 'Next.js', level: 90 },
  { name: 'Angular', level: 85 },  
  { name: '.Net WPF', level: 75 },
  { name: 'C#', level: 95 },
  { name: 'JavaScript', level: 95 },
  { name: 'HTML/CSS', level: 98 },
  { name: 'Python', level: 83 },
  { name: 'MySQL', level: 98 },
  { name: 'Microsoft SQL Server', level: 98 },
  { name: 'PostgreSQL', level: 90 },
  { name: 'Azure Devops', level: 20 },
];

const achievements = [
  { number: '10+', label: 'Projects' },
  { number: '6+', label: 'Happy Clients' },
  { number: '2', label: 'Years Exp' },
  { number: '97.5%', label: 'Success Rate' }
]

const features = [
  { icon: TvMinimalPlay, title: 'Frontend Development', description: 'Build responsive and dynamic web applications with modern technologies and best practices.' },
  { icon: Palette, title: 'UI/UX Design', description: 'Create beautiful and intuitive user interfaces that enhance user experience and engagement.' },
  { icon: Workflow , title: 'Backend Development', description: 'Develop scalable server-side applications with robust architecture and database design.' },
];

const dowloadResume = (domain: string) => {
  if (domain === "react-dotnet") {
    const link = document.createElement("a");
    link.href = "/assets/SriramResume_React_DotNet.pdf";
    link.download = "SriramKannan_React-DotNet_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  if (domain === "react-node") {
    const link = document.createElement("a");
    link.href = "/assets/SriramResume_ReactNodeJS.pdf";
    link.download = "SriramKannan_React-NodeJS_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  if (domain === "angular-dotnet") {
    const link = document.createElement("a");
    link.href = "/assets/SriramResume_Angular_DotNet.pdf";
    link.download = "SriramKannan_Angular-DotNet_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  if (domain === "react") {
    const link = document.createElement("a");
    link.href = "/assets/SriramResume_ReactDeveloper.pdf";
    link.download = "SriramKannan_React-Developer_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

}

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold">
            <span className="text-gray-800">Sriram</span>
            <span className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-2 rounded ml-2">Kannan</span>
          </div>

          <div className="hidden md:flex items-center gap-8" style={{cursor:"pointer"}}>
            <a href="#home" className="text-gray-600 hover:text-emerald-600 transition">Home</a>
            <a href="#about" className="text-gray-600 hover:text-emerald-600 transition">About Us</a>
            <a href="#features" className="text-gray-600 hover:text-emerald-600 transition">Features</a>
            <a href="#expertise" className="text-gray-600 hover:text-emerald-600 transition">Skills</a>
            <a href="#contact" className="text-gray-600 hover:text-emerald-600 transition">Contact Us</a>
          </div>

          <Button variant='contained' color='success' className="bg-emerald-500 hover:bg-emerald-600 text-white rounded-full px-6" style={{cursor:"pointer"}}>
            <a href="#contact" className="flex items-center gap-2">
              Hire Me
            </a>
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 to-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-400 rounded-full opacity-10 blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
          {/* Left Content */}
          <div>
            <span className="text-emerald-600 font-semibold text-sm tracking-wide">WELCOME TO MY PORTFOLIO</span>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mt-4 leading-tight">
              Sriram Kannan
            </h1>
            <p className="text-gray-600 text-lg mt-4 mb-2">Full Stack Developer</p>
            <p className="text-gray-600 italic text-base mt-6 leading-relaxed">
              A Creative Full Stack Developer with expertise in building end to end scalable web applications. 
              Specialized in modern web technologies like <br></br> 
              <span className="font-semibold not-italic text-black">React, ASP.NET, Angular, Node.js, Next.js</span>. 
              <br></br>Passionate about clean code and user-centric design.
            </p>
            <div className="flex gap-4 mt-8">
              <Button variant='contained' color='success' className="bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg px-8 py-6 text-base font-semibold transition-all duration-300 hover:shadow-lg">
                <a href="#contact" className="flex items-center gap-2" style={{cursor:"pointer"}}>
                  Hire Me
                </a>
              </Button>
              {/* <Button variant="outline" className="border-2 border-gray-300 hover:border-emerald-500 text-gray-800 rounded-lg px-8 py-6 text-base font-semibold transition-all duration-300">
                Explore
              </Button> */}
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-10">
              <a href="https://www.linkedin.com/in/sriram-kannan-913458247/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-emerald-500 hover:text-white transition-all duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://github.com/SriramKannan04" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-emerald-500 hover:text-white transition-all duration-300">
                <Github className="w-5 h-5" />
              </a>
              <a href="mailto:sriramka@outlook.com" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-emerald-500 hover:text-white transition-all duration-300">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right - Profile Image */}
          <div className="relative h-96 md:h-full flex items-center justify-center">
            <div className="absolute w-80 h-80 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full opacity-20 blur-2xl"></div>
            <div className="relative w-72 h-72 md:w-80 md:h-80 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center text-white text-9xl font-bold shadow-2xl">
              SK
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          <div className="h-full w-full flex items-center justify-center">
            <img src="/assets/SriramKannan.jpg" width={350} alt="" className='rounded-4xl' style={{boxShadow:"5px 5px 90px black"}}/>
          </div>

          <div>
            <span className="text-emerald-600 font-semibold text-sm tracking-wide">ABOUT ME</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-4 mb-4">
              Why hire me for your next project?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              I'm a Full Stack Developer with 2+ years of professional experience at ZGrow Solutions. I specialize in building responsive web applications using React, Next.js, Node.js and ASP.NET technologies. My expertise spans frontend design, backend API development, and database architecture.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              I believe in writing clean, maintainable code and creating intuitive user experiences. Every project I work on reflects my commitment to excellence, attention to detail, and collaborative problem-solving approach.
            </p>

            <section className='flex gap-2 flex-col'>
              <Button variant='contained' color='success' onClick={()=>dowloadResume("react-dotnet")} style={{ cursor: "pointer" }} className="bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg px-8 py-3 font-semibold transition-all duration-300 hover:shadow-lg">
                <div className='w-full flex justify-between items-center'>
                  <p>Resume </p>
                  <p>React and .Net</p>
                </div>
              </Button>
              <Button variant='contained' color='success' onClick={()=>dowloadResume("react-node")} style={{ cursor: "pointer" }} className="bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg px-8 py-3 font-semibold transition-all duration-300 hover:shadow-lg">
                <div className='w-full flex justify-between items-center'>
                  <p>Resume </p>
                  <p>React and Node.js</p>
                </div>
              </Button>
              <Button variant='contained' color='success' onClick={()=>dowloadResume("angular-dotnet")} style={{ cursor: "pointer" }} className="bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg px-8 py-3 font-semibold transition-all duration-300 hover:shadow-lg">
                <div className='w-full flex justify-between items-center'>
                  <p>Resume </p>
                  <p>Angular and .Net</p>
                </div>
              </Button>
              <Button variant='contained' color='success' onClick={()=>dowloadResume("react")} style={{ cursor: "pointer" }} className="bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg px-8 py-3 font-semibold transition-all duration-300 hover:shadow-lg">
                <div className='w-full flex justify-between items-center'>
                  <p>Resume </p>
                  <p>React Developer</p>
                </div>
              </Button>
            </section>
            
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-emerald-600 font-semibold text-sm tracking-wide">MY EXPERTISE</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-4">
              Were am I best at?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <aside key={index} className="border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden">
                  <Box className="p-8">
                    <div className="w-16 h-16 bg-emerald-100 rounded-lg flex items-center justify-center mb-6">
                      <Icon className="w-8 h-8 text-emerald-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </Box>
                </aside>
              );
            })}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-emerald-600 font-semibold text-sm tracking-wide">MY SKILLS</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-4">
              My Technical Knowledge
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {skills.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-gray-900 font-semibold">{skill.name}</span>
                  <span className="text-emerald-600 font-bold">{skill.level}%</span>
                </div>
                <div className="w-full bg-green-100 rounded-full h-2">
                  <div
                    className="bg-emerald-500 h-2 rounded-full transition-all duration-500 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            {achievements.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="relative w-24 h-24 mx-auto mb-4">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="45" fill="none" stroke="#e5e7eb" strokeWidth="3" />
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="#10b981"
                      strokeWidth="3"
                      //strokeDasharray={`${250 * 0.85} 283`}
                      strokeLinecap="round"
                    />
                  </svg>
                  <span className="absolute inset-0 flex items-center justify-center text-gray-900 font-bold text-lg">
                    {stat.number}
                  </span>
                </div>
                <p className="text-gray-600 text-sm font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-emerald-600 font-semibold text-sm tracking-wide">MY CAREER</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-4">
              Work Experience
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <Card className="border border-gray-200 shadow-lg" sx={{borderRadius:"10px"}}>
              <Box className="p-8">
                <div className="flex flex-col justify-center items-center lg:justify-start lg:items-start lg:flex-row gap-6">
                  <div className="w-20 h-20 flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
                    <img src="/assets/Zgrow-logo.png" alt="ZGrow Logo" className='rounded-md'/>
                  </div>

                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">
                      ZGrow Solutions Private Limited
                    </h3>
                    <p className="text-emerald-600 font-semibold mb-3">Full Stack Developer</p>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-gray-600 mb-4">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>Chennai, India</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>April 2024 - December 2025</span>
                      </div>
                    </div>

                    <div className='flex flex-col justify-start gap-5'>
                      <p className="text-gray-600 leading-relaxed">
                      Designed and developed end-to-end web and desktop applications from front end to back end, ensuring high scalability, maintainability, and superior user experience.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      Actively collaborated with clients through frequent discussions to have clearly understanding business requirements in order to deliver effective technical solutions.                    
                    </p>
                    <p className='text-gray-600 leading-relaxed'>
                      Proactively performed R&D activities to improve application performance, architecture, and overall project outcomes.
                    </p>
                    </div>
                    
                  </div>
                </div>
              </Box>
            </Card>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-emerald-600 font-semibold text-sm tracking-wide">MY EDUCATION</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-4">
              Academic Background
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <Card className="border border-gray-200 shadow-lg" sx={{borderRadius:"10px"}}>
              <Box className="p-8">
                <div className="flex flex-col justify-center items-center lg:justify-start lg:items-start lg:flex-row gap-6">
                  <div className="w-20 h-20 flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
                    <img src="/assets/SRM-TRP-logo.png" alt="ZGrow Logo" className='rounded-md'/>
                  </div>

                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">
                      SRM TRP Engineering College
                    </h3>
                    <p className="text-emerald-600 font-semibold mb-3">Bachelor of Engineering</p>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-gray-600 mb-4">
                      <div className="flex items-center gap-2">
                        <GraduationCap className="w-4 h-4" />
                        <span>Mechanical Engineering</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>Trichy, India</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>Graduated 2021</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Box>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-emerald-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-emerald-600 font-semibold text-sm tracking-wide">CONTACT ME</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-4">
              Let's Get in Touch
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <a href="tel:7094676538" className="group p-6 bg-white rounded-2xl border border-gray-200 hover:border-emerald-500 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-emerald-500 transition-colors duration-300">
                <Phone className="w-6 h-6 text-emerald-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <p className="text-gray-600 text-sm font-medium mb-1">Phone</p>
              <p className="text-gray-900 font-bold text-lg">7094896529</p>
            </a>

            <a href="mailto:sriramka@outlook.com" className="group p-6 bg-white rounded-2xl border border-gray-200 hover:border-emerald-500 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-emerald-500 transition-colors duration-300">
                <Mail className="w-6 h-6 text-emerald-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <p className="text-gray-600 text-sm font-medium mb-1">Email</p>
              <p className="text-gray-900 font-bold text-lg">sriramkannan04@outlook.com</p>
            </a>

            <a href="https://www.linkedin.com/in/sriram-kannan-913458247/" target="_blank" rel="noopener noreferrer" className="group p-6 bg-white rounded-2xl border border-gray-200 hover:border-emerald-500 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-emerald-500 transition-colors duration-300">
                <Linkedin className="w-6 h-6 text-emerald-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <p className="text-gray-600 text-sm font-medium mb-1">LinkedIn</p>
              <p className="text-gray-900 font-bold text-lg">Sriram Kannan</p>
            </a>

            <a href="https://github.com/SriramKannan04" target="_blank" rel="noopener noreferrer" className="group p-6 bg-white rounded-2xl border border-gray-200 hover:border-emerald-500 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-emerald-500 transition-colors duration-300">
                <Github className="w-6 h-6 text-emerald-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <p className="text-gray-600 text-sm font-medium mb-1">GitHub</p>
              <p className="text-gray-900 font-bold text-lg">SriramKannan04</p>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-5">
        <div className="max-w-7xl mx-auto px-6 text-center">         
          <p className="mb-4 text-sm">Copyright © 2025 by Sriram Kannan All rights reserved</p>
        </div>
      </footer>
    </div>
  );
}
