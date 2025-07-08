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
} from "lucide-react"

export default function DocumentCV() {
  return (
    <div className="min-h-screen bg-gray-50 py-8 font-reddit">
      <div className="max-w-4xl mx-auto bg-white shadow-lg">
        {/* Header Section */}
        <div className="bg-gray-900 text-white p-8 relative">
          {/* Download Button */}
          <a
            href="https://drive.google.com/file/d/your-file-id/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-6 right-6 bg-white text-gray-900 p-3 rounded-full hover:bg-gray-100 transition-colors shadow-lg"
            title="Download CV"
          >
            <Download className="w-5 h-5" />
          </a>

          <div className="flex items-center gap-8">
            <div className="flex-shrink-0">
              <Image
                src="/placeholder.svg?height=150&width=150"
                alt="Basit Qayoom"
                width={150}
                height={150}
                className="rounded-full border-4 border-white shadow-lg"
              />
            </div>
            <div className="flex-1">
              <h1 className="text-5xl font-bold mb-3 tracking-tight">BASIT QAYOOM</h1>
              <h2 className="text-2xl text-gray-300 mb-6 font-medium">Software Development Engineer</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-gray-300" />
                  <span className="font-medium">+(91) 9682132612</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-gray-300" />
                  <span className="font-medium">basitqayoomchowdhary@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-gray-300" />
                  <span className="font-medium">Srinagar, IN 190015</span>
                </div>
                <div className="flex items-center gap-3">
                  <Github className="w-4 h-4 text-gray-300" />
                  <span className="font-medium">github.com/basitqayoom</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="p-10">
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

            <div className="border-l-4 border-gray-900 pl-6 space-y-8">
              <div>
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-1">Software Development Engineer (SDE I)</h4>
                    <p className="text-gray-600 font-semibold text-lg">Physics Wallah</p>
                  </div>
                  <span className="text-gray-600 font-medium bg-gray-100 px-3 py-1 rounded-full text-sm">
                    July 2023 - Present
                  </span>
                </div>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex gap-3">
                    <span className="w-2 h-2 bg-gray-900 rounded-full mt-2 flex-shrink-0"></span>
                    <div>
                      <strong className="font-semibold">LMS Architectural Revamp & Performance Optimization:</strong>{" "}
                      Transitioned a legacy iframe LMS to a modern micro-frontend architecture, reducing initial build
                      size by 84% (from 12MB → under 2MB) and load time by 66% (from 15s → under 5s). Integrated dynamic
                      remote loading, background service workers, and Sentry from the shell to each remote module,
                      significantly improving user experience and system performance. Migrated fonts from TTF to WOFF2
                      served via CDN and consolidated CSS, achieving a 3x reduction in asset size and faster load times.
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="w-2 h-2 bg-gray-900 rounded-full mt-2 flex-shrink-0"></span>
                    <div>
                      <strong className="font-semibold">UI Library Development:</strong> Built a complete in-house UI
                      component library from scratch without external dependencies, supporting theme overrides, CSS
                      Modules, and tree-shaking to ensure design consistency and scalability. All components are
                      thoroughly documented with JSDoc and Storybook.
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="w-2 h-2 bg-gray-900 rounded-full mt-2 flex-shrink-0"></span>
                    <div>
                      <strong className="font-semibold">Reusable Web SDK & Analytics Integration:</strong> Developed a
                      modular SDK for authentication, token and cookie management, API clients, and local storage.
                      Integrated analytics event tracking for Google Analytics, MoEngage, and Appsflyer, all driven by a
                      global configuration model for easy integration across products.
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="w-2 h-2 bg-gray-900 rounded-full mt-2 flex-shrink-0"></span>
                    <div>
                      <strong className="font-semibold">Monitoring & Developer Tooling:</strong> Created an in-house
                      Core Web Vitals tracking system processing over 1 million daily entries, cutting third-party tool
                      dependency and reducing operational costs. Standardized GitLab workflows across 80+ projects with
                      commit rules, branch naming, MR templates, and README conventions. Developed a feature-based React
                      boilerplate with Module Federation, ESLint, Husky pre-commit hooks, and automated changelogs.
                      Conducted POCs using StencilJS, Lit.dev, and native HTML to build SEO-friendly web components.
                    </div>
                  </li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-1">Project Intern</h4>
                    <p className="text-gray-600 font-semibold text-lg">Indian Institute of Technology (IIT) Ropar</p>
                  </div>
                  <span className="text-gray-600 font-medium bg-gray-100 px-3 py-1 rounded-full text-sm">
                    Dec 2021 - Jan 2022
                  </span>
                </div>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex gap-3">
                    <span className="w-2 h-2 bg-gray-900 rounded-full mt-2 flex-shrink-0"></span>
                    <div>
                      Developed a data-driven model to optimize chemical process workflows, achieving a 20% improvement
                      in process efficiency through statistical analysis and simulation techniques.
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="w-2 h-2 bg-gray-900 rounded-full mt-2 flex-shrink-0"></span>
                    <div>
                      Proposed an advanced resource management strategy based on utilization data, with strong potential
                      to reduce operational costs and improve sustainability.
                    </div>
                  </li>
                </ul>
              </div>
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
            <div className="border-l-4 border-gray-900 pl-6">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-1">B.Tech in Chemical Engineering</h4>
                  <p className="text-gray-600 font-semibold text-lg">National Institute of Technology (NIT) Srinagar</p>
                  <p className="text-gray-600 font-medium">CGPA: 8.06 / 10</p>
                </div>
                <span className="text-gray-600 font-medium bg-gray-100 px-3 py-1 rounded-full text-sm">
                  2019 - 2023
                </span>
              </div>
              <div className="flex gap-3">
                <span className="w-2 h-2 bg-gray-900 rounded-full mt-2 flex-shrink-0"></span>
                <p className="text-gray-700 font-medium">Qualified GATE 2025 in Data Science</p>
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
                  <h4 className="font-bold text-gray-900 mb-3 text-lg">Frontend</h4>
                  <p className="text-gray-700 leading-relaxed font-medium">
                    HTML, CSS, JavaScript (ES6+), TypeScript, ReactJS, Next.js, Redux, React Query, TanStack, Tailwind
                    CSS, Framer Motion, Storybook, Micro-Frontend (Module Federation), Shadcn cn
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-bold text-gray-900 mb-3 text-lg">Backend & APIs</h4>
                  <p className="text-gray-700 leading-relaxed font-medium">
                    Node.js, Express.js, MongoDB, RESTful APIs, WebSockets, Firebase
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-bold text-gray-900 mb-3 text-lg">Programming Languages & Concepts</h4>
                  <p className="text-gray-700 leading-relaxed font-medium">
                    C, C++, Python, Go, Data Structures & Algorithms, Object-Oriented Programming
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-bold text-gray-900 mb-3 text-lg">DevOps & Tools</h4>
                  <p className="text-gray-700 leading-relaxed font-medium">
                    Git, GitLab, Docker, CI/CD, Google Cloud, Nginx
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-bold text-gray-900 mb-3 text-lg">Build & Bundlers</h4>
                  <p className="text-gray-700 leading-relaxed font-medium">Vite, Webpack, Rollup, ESBuild, RsBuild</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-bold text-gray-900 mb-3 text-lg">Other</h4>
                  <p className="text-gray-700 leading-relaxed font-medium">
                    StencilJS, Lit.dev, Zod, Linting, Prettier, Husky
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-bold text-gray-900 mb-3 text-lg">Testing & Monitoring</h4>
                  <p className="text-gray-700 leading-relaxed font-medium">
                    Jest, Postman, Mocha, JMeter, Sentry, Core Web Vitals, Lighthouse
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-bold text-gray-900 mb-3 text-lg">Soft Skills</h4>
                  <p className="text-gray-700 leading-relaxed font-medium">
                    Leadership, Cross-Functional Collaboration, Decision-Making, Adaptability, Conflict Resolution,
                    Critical Thinking, Time & Task Management, Communication, Problem-Solving, Accountability, Attention
                    to Detail, Strategic Thinking
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
                  <div className="font-medium">
                    Improved wood porosity through chemical treatments and analyzed samples with SEM, XRD, FTIR, and
                    TGA. Developed membranes for micro- and ultrafiltration applications.
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="w-2 h-2 bg-gray-900 rounded-full mt-2 flex-shrink-0"></span>
                  <div className="font-medium">
                    Presented a poster on wood-based nanotechnology membranes at the 2023 Nanotechnology for Better
                    Living conference (NIT Srinagar, SKUAST, IIT BHU). [Link]
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
                  <div className="font-medium">
                    Awarded Best Delegate in the International Press category at the Model United Nations held at NIT
                    Srinagar, recognizing excellence in research, communication, and integrity [Link].
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="w-2 h-2 bg-gray-900 rounded-full mt-2 flex-shrink-0"></span>
                  <div className="font-medium">
                    Organized a Model UN event with over 200 participants, fostering global awareness and enhancing
                    collaborative problem-solving skills to create a positive societal impact.
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="w-2 h-2 bg-gray-900 rounded-full mt-2 flex-shrink-0"></span>
                  <div className="font-medium">
                    Led the Technical Club at NIT Srinagar, driving technology adoption and innovation by organizing
                    workshops, hackathons, and technical sessions that enriched the campus community.
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="w-2 h-2 bg-gray-900 rounded-full mt-2 flex-shrink-0"></span>
                  <div className="font-medium">
                    Nominated for the "Champion of the Quarter" award at Physics Wallah for outstanding performance.
                  </div>
                </li>
              </ul>
            </div>
          </section>

          {/* Links */}
          <section className="mb-8">
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
          </section>
        </div>

        {/* Footer */}
        <footer className="bg-gray-900 text-white p-6">
          <div className="flex justify-center items-center space-x-8">
            <a
              href="https://linkedin.com/in/iambqc"
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
              href="https://leetcode.com/basitqayoomchowdhary"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-gray-300 transition-colors"
            >
              <Globe className="w-5 h-5" />
              <span className="font-medium">LeetCode</span>
            </a>
          </div>
        </footer>
      </div>
    </div>
  )
}
