'use client'
import Image from "next/image"
import {
  Mail,
  Phone,
  MapPin,
  Github,
  User,
  Briefcase,
  GraduationCap,
  Code,
  FolderOpen,
  Award,
  Linkedin,
  Code2,
  ArrowRight,
  ExternalLink,
  Terminal,
  Layers,
  Zap,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import React from "react"
import SpeedDial from "@/components/ui/speed-dial"

export default function ModernPortfolio() {
  const skills = {
    frontend: ["HTML", "CSS", "JavaScript (ES6+)", "TypeScript", "ReactJS", "Next.js", "Tailwind CSS", "Framer Motion", "Storybook", "Micro-Frontend (Module Federation)"],
    backend: ["Node.js", "Express.js", "MongoDB", "RESTful APIs", "WebSockets", "Firebase"],
    languages: ["C", "C++", "Python", "Go", "Data Structures & Algorithms", "OOP"],
    devops: ["Git", "GitLab", "Docker", "CI/CD", "Google Cloud"],
    build: ["Vite", "Webpack", "Rollup", "ESBuild", "RsBuild"],
    testing: ["Jest", "Postman", "Mocha", "JMeter", "Sentry", "Core Web Vitals", "Lighthouse"],
    other: ["StencilJS", "Lit.dev", "Zod", "Linting", "Prettier", "Husky"]
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white border-b border-gray-200">

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
            {/* Profile Image */}
            <div className="relative">
              <div className="relative">
                <Image
                  src="/profile.webp"
                  alt="Basit Qayoom"
                  width={200}
                  height={200}
                  className="rounded-full border-4 border-gray-200 shadow-md"
                  priority
                />
              </div>
            </div>

            {/* Hero Content */}
            <div className="flex-1 text-center lg:text-left">
              <div className="flex items-center gap-2 justify-center lg:justify-start mb-4">
                <Badge variant="secondary" className="bg-green-50 text-green-700 hover:bg-green-100 border border-green-200">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  Available for opportunities
                </Badge>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-4 tracking-tight">
                Basit Qayoom
              </h1>
              <h2 className="text-xl sm:text-2xl lg:text-3xl text-gray-600 mb-6 font-normal">
                Software Engineer
              </h2>
              <p className="text-base sm:text-lg text-gray-600 mb-8 max-w-2xl leading-relaxed">
                Building scalable, high-performance frontend platforms with expertise in micro-frontend architecture and design systems.
                Focused on maintainable system design and long-term application scalability.
              </p>

              {/* Contact Links */}
              <div className="flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start">
                <a
                  href="mailto:basitqayoomchowdhary@gmail.com"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-sm"
                >
                  <Mail className="w-4 h-4" />
                  <span>Get in touch</span>
                </a>
                <a
                  href="https://github.com/basitqayoom"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors border border-gray-300"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/bqc/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors border border-gray-300"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
              </div>

              {/* Technology Highlights */}
              <div className="mt-12 max-w-2xl mx-auto lg:mx-0">
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4 text-center lg:text-left">
                  Core Expertise
                </h3>
                <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                  {["JavaScript", "TypeScript", "React", "Next JS", "Node.js", "Microfrontends", "Design Systems"].map((tech) => (
                    <div
                      key={tech}
                      className="group relative px-5 py-2.5 bg-white text-gray-700 rounded-full font-medium border-2 border-gray-200 hover:border-blue-500 hover:text-blue-600 transition-all duration-200 shadow-sm hover:shadow-md cursor-default"
                    >
                      <span className="relative z-10">{tech}</span>
                      <div className="absolute inset-0 bg-blue-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        {/* Professional Summary */}
        <section className="mb-16 sm:mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-blue-600 rounded-lg">
              <User className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">About Me</h3>
            </div>
          </div>

          <Card className="border border-gray-200 shadow-sm bg-white">
            <CardContent className="p-6 sm:p-8">
              <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                Software Engineer with <span className="font-semibold text-blue-600">2.5 years of experience</span> building scalable, high-performance frontend platforms.
                Proficient in <span className="font-semibold text-gray-900">JavaScript, TypeScript, React.js, and Next.js</span> with strong expertise in <span className="font-semibold text-gray-900">micro-frontend architecture</span> and design system development.
                Experienced in frontend performance optimization and security auditing across multi-repository product ecosystems.
                Proven ability to take full ownership—from architecture and development to release, monitoring, and iterative refinement.
                Focused on maintainable system design, developer productivity, and long-term application scalability.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Professional Experience */}
        <section className="mb-16 sm:mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-blue-600 rounded-lg">
              <Briefcase className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">Experience</h3>
            </div>
          </div>

          <div className="space-y-6">
            {/* Physics Wallah */}
            <Card className="border border-gray-200 shadow-sm bg-white hover:border-blue-300 transition-colors">
              <CardHeader className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div className="space-y-2">
                    <CardTitle className="text-xl sm:text-2xl text-gray-900">
                      Software Engineer (SWE I)
                    </CardTitle>
                    <CardDescription className="text-base sm:text-lg font-semibold text-gray-600">
                      Physics Wallah
                    </CardDescription>
                  </div>
                  <Badge className="bg-blue-600 text-white border-0 self-start">
                    July 2023 - Present
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <Layers className="w-5 h-5 text-gray-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Micro-Frontend Architecture & Platform Modernization</h4>
                      <p className="text-sm sm:text-base text-gray-700">
                        Led the modernization of the LMS platform by migrating from a legacy iframe-based architecture to a micro-frontend system, enabling independent deployments, improved scalability, and modular code ownership.
                        <span className="font-bold text-blue-600"> (This architecture supports ~2M daily active users</span> across all post-login applications.)
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <Zap className="w-5 h-5 text-gray-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Frontend Performance Optimization</h4>
                      <p className="text-sm sm:text-base text-gray-700">
                        Optimized frontend performance by reducing bundle size from <span className="font-bold text-green-600">~12MB → &lt;2MB</span> and improving initial load time from <span className="font-bold text-green-600">~15s → &lt;5s</span> using Module Federation, CDN-based delivery, service-worker caching, and asset-level compression.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <Code className="w-5 h-5 text-gray-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Design System & UI Component Library</h4>
                      <p className="text-sm sm:text-base text-gray-700">
                        Designed and delivered a comprehensive Design System / UI Component Library featuring multi-theme support, accessibility standards, CSS Modules, and Storybook-driven documentation, ensuring visual consistency and reducing duplicated UI effort across teams.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <Terminal className="w-5 h-5 text-gray-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">SDK Architecture & System Integration</h4>
                      <p className="text-sm sm:text-base text-gray-700">
                        Architected and maintained in-house SDKs for authentication, API clients, feature flagging, contextual configuration, and analytics—standardizing integrations across micro-frontends, reducing error-prone code, and improving system cohesion.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <Code className="w-5 h-5 text-gray-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Performance Monitoring & Engineering Standards</h4>
                      <p className="text-sm sm:text-base text-gray-700">
                        Built a Core Web Vitals auditing & reporting pipeline that continuously collects performance metrics from major user flows. Established standardized frontend engineering practices across multiple repositories, including coding conventions, semantic versioning, and review workflows.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <Award className="w-5 h-5 text-gray-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">End-to-End Product Ownership</h4>
                      <p className="text-sm sm:text-base text-gray-700">
                        Owned product delivery end-to-end: architecture, development, release pipelines, production monitoring, and iterative optimization. Conducted performance and security audits across distributed applications to identify bottlenecks and enforce secure patterns.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* IIT Ropar */}
            <Card className="border border-gray-200 shadow-sm bg-white hover:border-blue-300 transition-colors">
              <CardHeader className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div className="space-y-2">
                    <CardTitle className="text-xl sm:text-2xl text-gray-900">
                      Project Intern
                    </CardTitle>
                    <CardDescription className="text-base sm:text-lg font-semibold text-gray-600">
                      Indian Institute of Technology (IIT) Ropar
                    </CardDescription>
                  </div>
                  <Badge className="bg-blue-600 text-white border-0 self-start">
                    Dec 2021 - Jan 2022
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex gap-3 text-sm sm:text-base text-gray-700">
                    <ArrowRight className="w-5 h-5 text-gray-500 flex-shrink-0 mt-0.5" />
                    <span>Developed a data-driven model to optimize chemical process workflows, achieving a <span className="font-bold text-green-600">20% improvement</span> in process efficiency through statistical analysis and simulation techniques.</span>
                  </li>
                  <li className="flex gap-3 text-sm sm:text-base text-gray-700">
                    <ArrowRight className="w-5 h-5 text-gray-500 flex-shrink-0 mt-0.5" />
                    <span>Proposed an advanced resource management strategy based on utilization data, with strong potential to reduce operational costs and improve sustainability in chemical engineering operations.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Education */}
        <section className="mb-16 sm:mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-blue-600 rounded-lg">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">Education</h3>
            </div>
          </div>

          <Card className="border border-gray-200 shadow-sm bg-white">
            <CardContent className="p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                <div className="space-y-2">
                  <h4 className="text-xl sm:text-2xl font-bold text-gray-900">B.Tech in Chemical Engineering</h4>
                  <p className="text-base sm:text-lg font-semibold text-gray-700">
                    National Institute of Technology (NIT) Srinagar
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <Badge className="bg-green-600 text-white">CGPA: 8.06 / 10</Badge>
                  </div>
                </div>
                <Badge className="bg-blue-600 text-white border-0 self-start">
                  2019 - 2023
                </Badge>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Technical Skills */}
        <section className="mb-16 sm:mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-blue-600 rounded-lg">
              <Code className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">Technical Skills</h3>
            </div>
          </div>

          <Tabs defaultValue="frontend" className="w-full">
            <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2 bg-white border border-gray-200 p-1 h-auto rounded-lg">
              <TabsTrigger value="frontend" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                Frontend
              </TabsTrigger>
              <TabsTrigger value="backend" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                Backend
              </TabsTrigger>
              <TabsTrigger value="languages" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                Languages
              </TabsTrigger>
              <TabsTrigger value="devops" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                DevOps
              </TabsTrigger>
              <TabsTrigger value="build" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                Build Tools
              </TabsTrigger>
              <TabsTrigger value="testing" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                Testing
              </TabsTrigger>
              <TabsTrigger value="other" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                Other
              </TabsTrigger>
            </TabsList>

            <TabsContent value="frontend" className="mt-6">
              <Card className="border border-gray-200 shadow-sm bg-white">
                <CardContent className="p-6">
                  <div className="flex flex-wrap gap-2">
                    {skills.frontend.map((skill) => (
                      <Badge key={skill} variant="secondary" className="px-3 py-1.5 text-sm bg-gray-100 hover:bg-gray-200 transition-colors text-gray-800 border border-gray-300">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="backend" className="mt-6">
              <Card className="border border-gray-200 shadow-sm bg-white">
                <CardContent className="p-6">
                  <div className="flex flex-wrap gap-2">
                    {skills.backend.map((skill) => (
                      <Badge key={skill} variant="secondary" className="px-3 py-1.5 text-sm bg-gray-100 hover:bg-gray-200 transition-colors text-gray-800 border border-gray-300">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="languages" className="mt-6">
              <Card className="border border-gray-200 shadow-sm bg-white">
                <CardContent className="p-6">
                  <div className="flex flex-wrap gap-2">
                    {skills.languages.map((skill) => (
                      <Badge key={skill} variant="secondary" className="px-3 py-1.5 text-sm bg-gray-100 hover:bg-gray-200 transition-colors text-gray-800 border border-gray-300">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="devops" className="mt-6">
              <Card className="border border-gray-200 shadow-sm bg-white">
                <CardContent className="p-6">
                  <div className="flex flex-wrap gap-2">
                    {skills.devops.map((skill) => (
                      <Badge key={skill} variant="secondary" className="px-3 py-1.5 text-sm bg-gray-100 hover:bg-gray-200 transition-colors text-gray-800 border border-gray-300">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="build" className="mt-6">
              <Card className="border border-gray-200 shadow-sm bg-white">
                <CardContent className="p-6">
                  <div className="flex flex-wrap gap-2">
                    {skills.build.map((skill) => (
                      <Badge key={skill} variant="secondary" className="px-3 py-1.5 text-sm bg-gray-100 hover:bg-gray-200 transition-colors text-gray-800 border border-gray-300">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="testing" className="mt-6">
              <Card className="border border-gray-200 shadow-sm bg-white">
                <CardContent className="p-6">
                  <div className="flex flex-wrap gap-2">
                    {skills.testing.map((skill) => (
                      <Badge key={skill} variant="secondary" className="px-3 py-1.5 text-sm bg-gray-100 hover:bg-gray-200 transition-colors text-gray-800 border border-gray-300">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="other" className="mt-6">
              <Card className="border border-gray-200 shadow-sm bg-white">
                <CardContent className="p-6">
                  <div className="flex flex-wrap gap-2">
                    {skills.other.map((skill) => (
                      <Badge key={skill} variant="secondary" className="px-3 py-1.5 text-sm bg-gray-100 hover:bg-gray-200 transition-colors text-gray-800 border border-gray-300">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Soft Skills Card */}
          <Card className="mt-6 border border-gray-200 shadow-sm bg-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="w-5 h-5 text-gray-600" />
                Soft Skills
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {["Leadership", "Cross-Functional Collaboration", "Decision-Making", "Adaptability", "Conflict Resolution", "Critical Thinking", "Time & Task Management", "Communication", "Problem-Solving", "Accountability", "Attention to Detail", "Strategic Thinking"].map((skill) => (
                  <Badge key={skill} variant="outline" className="px-3 py-1.5 text-sm border-gray-300 text-gray-700 hover:bg-gray-100 transition-colors">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Projects & Presentations */}
        <section className="mb-16 sm:mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-blue-600 rounded-lg">
              <FolderOpen className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">Projects & Presentations</h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border border-gray-200 shadow-sm bg-white hover:border-blue-300 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-gray-100 rounded-lg">
                    <FolderOpen className="w-5 h-5 text-gray-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                      Improved wood porosity through chemical treatments and analyzed samples with SEM, XRD, FTIR, and TGA.
                      Developed membranes for micro- and ultrafiltration applications.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 shadow-sm bg-white hover:border-blue-300 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-gray-100 rounded-lg">
                    <Award className="w-5 h-5 text-gray-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                      Presented a poster on wood-based nanotechnology membranes at the 2023 Nanotechnology for Better Living conference (NIT Srinagar, SKUAST, IIT BHU).
                    </p>
                    <a
                      href="https://drive.google.com/file/d/1aa-cauoV5r3tRwPxSN8la3WlXZXa2KLl/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-blue-600 font-semibold hover:text-blue-800 mt-2 transition-colors"
                    >
                      View Certificate
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Leadership & Awards */}
        <section className="mb-16 sm:mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-blue-600 rounded-lg">
              <Award className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">Leadership & Achievements</h3>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <Card className="border-l-4 border-blue-600 shadow-sm bg-white hover:shadow-md transition-shadow">
              <CardContent className="p-5">
                <div className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <p className="text-sm sm:text-base text-gray-700">
                    Nominated for the <span className="font-bold text-gray-900">"Champion of the Quarter"</span> award at Physics Wallah for outstanding performance.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-blue-600 shadow-sm bg-white hover:shadow-md transition-shadow">
              <CardContent className="p-5">
                <div className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <p className="text-sm sm:text-base text-gray-700">
                    Awarded <span className="font-bold text-gray-900">"Star Performer of the Month - July 2025"</span> at Physics Wallah for delivering impactful in-house engineering solutions.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-blue-600 shadow-sm bg-white hover:shadow-md transition-shadow">
              <CardContent className="p-5">
                <div className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <p className="text-sm sm:text-base text-gray-700">
                      Awarded <span className="font-bold text-gray-900">Best Delegate</span> in the International Press category at the Model United Nations held at NIT Srinagar, recognizing excellence in research, communication, and integrity.
                    </p>
                    <a
                      href="https://drive.google.com/file/d/1YGRxJQzEduuQ4Ih9WaICg9qH2s9lhXb6/view"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-blue-600 font-semibold hover:text-blue-800 mt-2 transition-colors"
                    >
                      View Certificate
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-blue-600 shadow-sm bg-white hover:shadow-md transition-shadow">
              <CardContent className="p-5">
                <div className="flex items-start gap-3">
                  <User className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <p className="text-sm sm:text-base text-gray-700">
                    Organized a Model UN event with over <span className="font-bold text-gray-900">200 participants</span>, fostering global awareness and enhancing collaborative problem-solving skills to create a positive societal impact.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-blue-600 shadow-sm bg-white hover:shadow-md transition-shadow">
              <CardContent className="p-5">
                <div className="flex items-start gap-3">
                  <Code className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <p className="text-sm sm:text-base text-gray-700">
                    Led the <span className="font-bold text-gray-900">Technical Club at NIT Srinagar</span>, driving technology adoption and innovation by organizing workshops, hackathons, and technical sessions that enriched the campus community.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-blue-600 shadow-sm bg-white hover:shadow-md transition-shadow">
              <CardContent className="p-5">
                <div className="flex items-start gap-3">
                  <GraduationCap className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <p className="text-sm sm:text-base text-gray-700">
                    <span className="font-bold text-gray-900">GATE 2025 Qualified</span> – Data Science.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

      </div>

      {/* Contact Section */}
      <section className="relative overflow-hidden py-16 sm:py-20 bg-white border-t border-gray-200">

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Let's Connect</h2>
            <p className="text-lg text-gray-600">Feel free to reach out for collaborations or opportunities</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <a
              href="https://www.linkedin.com/in/bqc/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-blue-600 transition-all"
            >
              <div className="flex flex-col items-center gap-3">
                <div className="p-3 bg-blue-600 rounded-lg group-hover:bg-blue-700 transition-colors">
                  <Linkedin className="w-6 h-6 text-white" />
                </div>
                <span className="text-gray-900 font-semibold">LinkedIn</span>
              </div>
            </a>

            <a
              href="https://github.com/basitqayoom"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-blue-600 transition-all"
            >
              <div className="flex flex-col items-center gap-3">
                <div className="p-3 bg-gray-900 rounded-lg group-hover:bg-gray-800 transition-colors">
                  <Github className="w-6 h-6 text-white" />
                </div>
                <span className="text-gray-900 font-semibold">GitHub</span>
              </div>
            </a>

            <a
              href="https://leetcode.com/u/basitqayoomchowdhary/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-[#F89F1B] transition-all"
            >
              <div className="flex flex-col items-center gap-3">
                <div className="relative w-12 h-12 rounded-lg overflow-hidden">
                  {/* Diagonal split background */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    {/* Black triangle (top-left) */}
                    <polygon points="0,0 100,0 0,100" fill="#000000" />
                    {/* Orange triangle (bottom-right) */}
                    <polygon points="100,0 100,100 0,100" fill="#F89F1B" />
                  </svg>
                  {/* White icon in center */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Code2 className="w-6 h-6 text-white relative z-10" />
                  </div>
                </div>
                <span className="text-gray-900 font-semibold">LeetCode</span>
              </div>
            </a>
          </div>

          {/* Contact Info */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 text-gray-700">
              <Phone className="w-5 h-5 text-blue-600" />
              <a href="tel:+919682132612" className="hover:text-blue-600 transition-colors">
                +91 9682132612
              </a>
            </div>
            <div className="flex items-center justify-center gap-3 text-gray-700">
              <Mail className="w-5 h-5 text-blue-600" />
              <a href="mailto:basitqayoomchowdhary@gmail.com" className="hover:text-blue-600 transition-colors">
                Email Me
              </a>
            </div>
            <div className="flex items-center justify-center gap-3 text-gray-700">
              <MapPin className="w-5 h-5 text-blue-600" />
              <span>Noida, IN 201309</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Basit Qayoom. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Speed Dial */}
      <SpeedDial />
    </div>
  )
}
