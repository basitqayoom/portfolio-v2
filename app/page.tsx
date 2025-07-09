'use client'
import Image from "next/image"
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Download,
  User,
  Briefcase,
  GraduationCap,
  Code,
  FolderOpen,
  Award,
  LinkIcon,
  Linkedin,
  Globe,
  Code2,
} from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import React, { useState, useRef } from "react"
import SpeedDial from "@/components/ui/speed-dial"

export default function DocumentCV() {
  // State for controlled Accordion
  const [openAccordion, setOpenAccordion] = useState<string | undefined>(undefined)
  // Timer ref for hover delay
  const hoverTimer = useRef<NodeJS.Timeout | null>(null)

  // Helper to handle mouse enter/leave
  const handleMouseEnter = (value: string) => {
    hoverTimer.current = setTimeout(() => {
      setOpenAccordion(value)
    }, 300) // 300ms delay
  }
  const handleMouseLeave = () => {
    if (hoverTimer.current) {
      clearTimeout(hoverTimer.current)
      hoverTimer.current = null
    }
    setOpenAccordion(undefined)
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 text-sm sm:text-base md:text-lg lg:text-xl">
      <div className="max-w-4xl mx-auto bg-white shadow-lg">
        {/* Header Section */}
        <div className="bg-gray-900 text-white p-4 sm:p-8 relative">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
            <div className="flex-shrink-0 transition-transform duration-300 hover:scale-105">
              <Image
                src="/profile.webp"
                alt="Basit Qayoom"
                width={150}
                height={150}
                className="rounded-full border-4 border-white shadow-lg"
              />
            </div>
            <div className="flex-1 w-full">
              <h1 className="text-3xl md:text-5xl font-bold mb-2 md:mb-3 tracking-tight">BASIT QAYOOM</h1>
              <h2 className="text-lg md:text-2xl text-gray-300 mb-4 md:mb-6 font-medium">Software Development Engineer</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3 text-xs md:text-sm">
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-gray-300" />
                  <a
                    href="tel:+919682132612"
                    className="font-medium hover:underline"
                  >
                    +(91) 9682132612
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-gray-300" />
                  <a
                    href="mailto:basitqayoomchowdhary@gmail.com"
                    className="font-medium hover:underline"
                  >
                    basitqayoomchowdhary@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-gray-300" />
                  <span className="font-medium">Noida, IN 201309</span>
                </div>
                <div className="flex items-center gap-3">
                  <Github className="w-4 h-4 text-gray-300" />
                  <a
                    href="https://github.com/basitqayoom"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium hover:underline flex items-center gap-1"
                  >
                    github.com/basitqayoom
                    <LinkIcon className="w-4 h-4 text-gray-300" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="p-4 md:p-10">
          {/* Professional Summary */}
          <section className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-gray-900 p-2 rounded-lg">
                <User className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 tracking-wide">PROFESSIONAL SUMMARY</h3>
            </div>
            <div className="border-l-4 border-gray-900 pl-6">
              <p className="text-gray-700 leading-relaxed text-base font-medium">
                Software Developer with 2 years of experience in developing high-performance, scalable web applications.
                Specialized in JavaScript, TypeScript, DOM manipulation, and modern frameworks such as React.js and
                Next.js. Proficient in designing and implementing micro-frontend architectures to enhance modularity and
                team autonomy. Demonstrated success in optimizing application performance, reducing infrastructure
                costs, and driving developer productivity through architectural improvements and efficient component
                library design. Skilled in building robust, maintainable systems tailored for scale and long-term
                growth.
              </p>
            </div>
          </section>

          {/* Professional Experience */}
          <section className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-gray-900 p-2 rounded-lg">
                <Briefcase className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 tracking-wide">PROFESSIONAL EXPERIENCE</h3>
            </div>

            <div className="border-l-4 border-gray-900 pl-6">
              <Accordion
                type="single"
                collapsible
                className="w-full space-y-4"
                value={openAccordion}
                onValueChange={setOpenAccordion}
              >
                <AccordionItem
                  value="physics-wallah"
                  className="border border-gray-200 rounded-lg px-4 transition-colors duration-200 hover:bg-gray-100 hover:border-gray-400"
                >
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex justify-between items-start w-full text-left flex-col sm:flex-row gap-1 sm:gap-0">
                      <div>
                        <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-1 sm:mb-0 leading-tight">
                          Software Development Engineer (SDE)
                        </h4>
                        <p className="text-gray-600 font-semibold text-base sm:text-lg">
                          Physics Wallah
                        </p>
                      </div>
                      <span className="text-gray-600 font-medium bg-gray-100 px-3 py-1 rounded-full text-xs sm:text-sm ml-0 sm:ml-4 mt-2 sm:mt-0">
                        July 2023 - Present
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <ul className="space-y-4 text-gray-700 text-sm sm:text-base md:text-lg">
                      <li className="flex gap-3">
                        <span className="w-2 h-2 bg-gray-900 rounded-full mt-2 flex-shrink-0"></span>
                        <div>
                          <strong className="font-semibold">
                            LMS Architectural Revamp & Performance Optimization:
                          </strong>{" "}
                          <span className="block text-xs sm:text-sm md:text-base">
                            Transitioned a legacy iframe LMS to a modern micro-frontend architecture, reducing initial
                            build size by 84% (from 12MB → under 2MB) and load time by 66% (from 15s → under 5s).
                            Integrated dynamic remote loading, background service workers, and Sentry from the shell to
                            each remote module, significantly improving user experience and system performance. Migrated
                            fonts from TTF to WOFF2 served via CDN and consolidated CSS, achieving a 3x reduction in asset
                            size and faster load times.
                          </span>
                        </div>
                      </li>
                      <li className="flex gap-3">
                        <span className="w-2 h-2 bg-gray-900 rounded-full mt-2 flex-shrink-0"></span>
                        <div>
                          <strong className="font-semibold">UI Library Development:</strong>{" "}
                          <span className="block text-xs sm:text-sm md:text-base">
                            Built a complete in-house UI component library from scratch without external dependencies,
                            supporting theme overrides, CSS Modules, and tree-shaking to ensure design consistency and
                            scalability. All components are thoroughly documented with JSDoc and Storybook.
                          </span>
                        </div>
                      </li>
                      <li className="flex gap-3">
                        <span className="w-2 h-2 bg-gray-900 rounded-full mt-2 flex-shrink-0"></span>
                        <div>
                          <strong className="font-semibold">Reusable Web SDK & Analytics Integration:</strong>{" "}
                          <span className="block text-xs sm:text-sm md:text-base">
                            Developed a modular SDK for authentication, token and cookie management, API clients, and
                            local storage. Integrated analytics event tracking for Google Analytics, MoEngage, and
                            Appsflyer, all driven by a global configuration model for easy integration across products.
                          </span>
                        </div>
                      </li>
                      <li className="flex gap-3">
                        <span className="w-2 h-2 bg-gray-900 rounded-full mt-2 flex-shrink-0"></span>
                        <div>
                          <strong className="font-semibold">Monitoring & Developer Tooling:</strong>{" "}
                          <span className="block text-xs sm:text-sm md:text-base">
                            Created an in-house Core Web Vitals tracking system processing over 1 million daily entries,
                            cutting third-party tool dependency and reducing operational costs. Standardized GitLab
                            workflows across 80+ projects with commit rules, branch naming, MR templates, and README
                            conventions. Developed a feature-based React boilerplate with Module Federation, ESLint, Husky
                            pre-commit hooks, and automated changelogs. Conducted POCs using StencilJS, Lit.dev, and
                            native HTML to build SEO-friendly web components.
                          </span>
                        </div>
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="iit-ropar"
                  className="border border-gray-200 rounded-lg px-4 transition-colors duration-200 hover:bg-gray-100 hover:border-gray-400"
                >
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex justify-between items-start w-full text-left flex-col sm:flex-row gap-1 sm:gap-0">
                      <div>
                        <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-1 sm:mb-0 leading-tight">
                          Project Intern
                        </h4>
                        <p className="text-gray-600 font-semibold text-base sm:text-lg">
                          Indian Institute of Technology (IIT) Ropar
                        </p>
                      </div>
                      <span className="text-gray-600 font-medium bg-gray-100 px-3 py-1 rounded-full text-xs sm:text-sm ml-0 sm:ml-4 mt-2 sm:mt-0">
                        Dec 2021 - Jan 2022
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <ul className="space-y-4 text-gray-700 text-sm sm:text-base md:text-lg">
                      <li className="flex gap-3">
                        <span className="w-2 h-2 bg-gray-900 rounded-full mt-2 flex-shrink-0"></span>
                        <div className="text-xs sm:text-sm md:text-base">
                          Developed a data-driven model to optimize chemical process workflows, achieving a 20%
                          improvement in process efficiency through statistical analysis and simulation techniques.
                        </div>
                      </li>
                      <li className="flex gap-3">
                        <span className="w-2 h-2 bg-gray-900 rounded-full mt-2 flex-shrink-0"></span>
                        <div className="text-xs sm:text-sm md:text-base">
                          Proposed an advanced resource management strategy based on utilization data, with strong
                          potential to reduce operational costs and improve sustainability.
                        </div>
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </section>

          {/* Education */}
          <section className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-gray-900 p-2 rounded-lg">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 tracking-wide">EDUCATION</h3>
            </div>
            <div className="border-l-4 border-gray-900 pl-4 sm:pl-6">
              <div className="flex flex-col sm:flex-row justify-between items-start mb-3 gap-2 sm:gap-0">
                <div>
                  <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-1 sm:mb-0">B.Tech in Chemical Engineering</h4>
                  <p className="text-gray-600 font-semibold text-base sm:text-lg">National Institute of Technology (NIT) Srinagar</p>
                  <p className="text-gray-600 font-medium text-sm sm:text-base">CGPA: 8.06 / 10</p>
                </div>
                <span className="text-gray-600 font-medium bg-gray-100 px-3 py-1 rounded-full text-xs sm:text-sm md:text-base ml-0 sm:ml-4 mt-2 sm:mt-0">
                  2019 - 2023
                </span>
              </div>
              <div className="flex gap-3">
                <span className="w-2 h-2 bg-gray-900 rounded-full mt-2 flex-shrink-0"></span>
                <p className="text-gray-700 font-medium text-xs sm:text-sm md:text-base">Qualified GATE 2025 in Data Science</p>
              </div>
            </div>
          </section>

          {/* Technical Skills */}
          <section className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-gray-900 p-2 rounded-lg">
                <Code className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 tracking-wide">TECHNICAL SKILLS</h3>
            </div>
            <div className="border-l-4 border-gray-900 pl-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-bold text-gray-900 mb-3 text-base sm:text-lg md:text-xl">Frontend</h4>
                  <p className="text-gray-700 leading-relaxed font-medium text-xs sm:text-sm md:text-base lg:text-lg">
                    HTML, CSS, JavaScript (ES6+), TypeScript, ReactJS, Next.js, Redux, React Query, TanStack, Tailwind CSS, Framer Motion, Storybook, Micro-Frontend (Module Federation), Shadcn cn
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-bold text-gray-900 mb-3 text-base sm:text-lg md:text-xl">Backend & APIs</h4>
                  <p className="text-gray-700 leading-relaxed font-medium text-xs sm:text-sm md:text-base lg:text-lg">
                    Node.js, Express.js, MongoDB, RESTful APIs, WebSockets, Firebase
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-bold text-gray-900 mb-3 text-base sm:text-lg md:text-xl">Programming Languages & Concepts</h4>
                  <p className="text-gray-700 leading-relaxed font-medium text-xs sm:text-sm md:text-base lg:text-lg">
                    C, C++, Python, Go, Data Structures & Algorithms, Object-Oriented Programming
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-bold text-gray-900 mb-3 text-base sm:text-lg md:text-xl">DevOps & Tools</h4>
                  <p className="text-gray-700 leading-relaxed font-medium text-xs sm:text-sm md:text-base lg:text-lg">
                    Git, GitLab, Docker, CI/CD, Google Cloud, Nginx
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-bold text-gray-900 mb-3 text-base sm:text-lg md:text-xl">Build & Bundlers</h4>
                  <p className="text-gray-700 leading-relaxed font-medium text-xs sm:text-sm md:text-base lg:text-lg">
                    Vite, Webpack, Rollup, ESBuild, RsBuild
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-bold text-gray-900 mb-3 text-base sm:text-lg md:text-xl">Other</h4>
                  <p className="text-gray-700 leading-relaxed font-medium text-xs sm:text-sm md:text-base lg:text-lg">
                    StencilJS, Lit.dev, Zod, Linting, Prettier, Husky
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-bold text-gray-900 mb-3 text-base sm:text-lg md:text-xl">Testing & Monitoring</h4>
                  <p className="text-gray-700 leading-relaxed font-medium text-xs sm:text-sm md:text-base lg:text-lg">
                    Jest, Postman, Mocha, JMeter, Sentry, Core Web Vitals, Lighthouse
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-bold text-gray-900 mb-3 text-base sm:text-lg md:text-xl">Soft Skills</h4>
                  <p className="text-gray-700 leading-relaxed font-medium text-xs sm:text-sm md:text-base lg:text-lg">
                    Leadership, Cross-Functional Collaboration, Decision-Making, Adaptability, Conflict Resolution, Critical Thinking, Time & Task Management, Communication, Problem-Solving, Accountability, Attention to Detail, Strategic Thinking
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Projects & Presentations */}
          <section className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-gray-900 p-2 rounded-lg">
                <FolderOpen className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 tracking-wide">PROJECTS & PRESENTATIONS</h3>
            </div>
            <div className="border-l-4 border-gray-900 pl-6">
              <ul className="space-y-4 text-gray-700">
                <li className="flex gap-3">
                  <span className="w-2 h-2 bg-gray-900 rounded-full mt-2 flex-shrink-0"></span>
                  <div className="font-medium text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed">
                    Improved wood porosity through chemical treatments and analyzed samples with SEM, XRD, FTIR, and TGA. Developed membranes for micro- and ultrafiltration applications.
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="w-2 h-2 bg-gray-900 rounded-full mt-2 flex-shrink-0"></span>
                  <div className="font-medium text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed">
                    Presented a poster on wood-based nanotechnology membranes at the 2023 Nanotechnology for Better Living conference (NIT Srinagar, SKUAST, IIT BHU).{" "}
                    <a
                      href="https://drive.google.com/file/d/1YGRxJQzEduuQ4Ih9WaICg9qH2s9lhXb6/view"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-blue-800 font-bold underline hover:text-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-offset-2"
                      title="IIT BHU Poster Link"
                    >
                      <LinkIcon className="w-4 h-4 inline" />
                      Link
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          {/* Leadership & Awards */}
          <section className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-gray-900 p-2 rounded-lg">
                <Award className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 tracking-wide">LEADERSHIP & ACHIEVEMENTS</h3>
            </div>
            <div className="border-l-4 border-gray-900 pl-6">
              <ul className="space-y-4 text-gray-700">
                <li className="flex gap-3">
                  <span className="w-2 h-2 bg-gray-900 rounded-full mt-2 flex-shrink-0"></span>
                  <div className="font-medium text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed">
                    Nominated for the "Champion of the Quarter" award at Physics Wallah for outstanding performance.
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="w-2 h-2 bg-gray-900 rounded-full mt-2 flex-shrink-0"></span>
                  <div className="font-medium text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed">
                    Nominated as Star Performer of the Year 2025 by Physics Wallah for exceptional contributions towards the company's growth and success.
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="w-2 h-2 bg-gray-900 rounded-full mt-2 flex-shrink-0"></span>
                  <div className="font-medium text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed">
                    Awarded Best Delegate in the International Press category at the Model United Nations held at NIT Srinagar, recognizing excellence in research, communication, and integrity{" "}
                    <a
                      href="https://drive.google.com/file/d/1YGRxJQzEduuQ4Ih9WaICg9qH2s9lhXb6/view"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-blue-800 font-bold underline hover:text-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-offset-2"
                      title="Best MUN Speaker Link"
                    >
                      <LinkIcon className="w-4 h-4 inline" />
                      Link
                    </a>
                    .
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="w-2 h-2 bg-gray-900 rounded-full mt-2 flex-shrink-0"></span>
                  <div className="font-medium text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed">
                    Organized a Model UN event with over 200 participants, fostering global awareness and enhancing collaborative problem-solving skills to create a positive societal impact.
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="w-2 h-2 bg-gray-900 rounded-full mt-2 flex-shrink-0"></span>
                  <div className="font-medium text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed">
                    Led the Technical Club at NIT Srinagar, driving technology adoption and innovation by organizing workshops, hackathons, and technical sessions that enriched the campus community.
                  </div>
                </li>
              </ul>
            </div>
          </section>

          {/* Links */}
          {/* <section className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-gray-900 p-2 rounded-lg">
                <LinkIcon className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 tracking-wide">PROFESSIONAL LINKS</h3>
            </div>
            <div className="border-l-4 border-gray-900 pl-6">
              <p className="text-gray-700 font-medium text-lg">
                LeetCode: basitqayoomchowdhary | GitHub: basitqayoom | LinkedIn: iambqc
              </p>
            </div>
          </section> */}
        </div>

        {/* Footer */}
        <footer className="bg-gray-900 text-white p-4 md:p-6">
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8">
            <a
              href="https://www.linkedin.com/in/bqc/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-gray-300 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              <span className="font-medium">LinkedIn</span>
            </a>
            <a
              href="https://github.com/basitqayoom"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-gray-300 transition-colors"
            >
              <Github className="w-5 h-5" />
              <span className="font-medium">GitHub</span>
            </a>
            <a
              href="https://leetcode.com/u/basitqayoomchowdhary/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-gray-300 transition-colors"
            >
              <Code2 className="w-5 h-5" />
              <span className="font-medium">LeetCode</span>
            </a>
            <a
              href="https://iambqc.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-gray-300 transition-colors"
            >
              <Globe className="w-5 h-5" />
              <span className="font-medium">Portfolio v1</span>
            </a>
          </div>
        </footer>

        {/* Speed Dial - fixed bottom right, replaces download button */}
        <SpeedDial />
      </div>
    </div>
  )
}
