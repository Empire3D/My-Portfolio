import React, { useState, useEffect } from 'react';
import { Menu, X, ExternalLink, Download, Mail, Phone, MapPin, Linkedin, Code, BarChart3, Database, TrendingUp } from 'lucide-react';

export default function DurgeshPortfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
      setIsMenuOpen(false);
    }
  };

  const projects = [
    {
      id: 1,
      title: "MIS Automation Platform",
      company: "Highspring India",
      challenge: "40+ hours/week spent on manual verification across production, training, and WFH operations",
      solution: "Engineered end-to-end automated dashboard system with real-time data feeds and multi-layer validation",
      tech: ["Advanced Excel", "VBA", "SQL", "Google Sheets", "Data Validation"],
      impact: [
        "15% reduction in manual verification time",
        "99.8% accuracy maintained",
        "100% on-time reporting for senior leadership"
      ],
      highlights: "Automated dashboard reduces verification workload from 40+ hours to 35 hours/week with higher accuracy"
    },
    {
      id: 2,
      title: "Data Quality Governance Model",
      company: "Highspring India",
      challenge: "Inconsistent data submission quality across analyst teams causing escalations and delays",
      solution: "Designed performance-based incentive model tied directly to data quality KPIs with transparent metrics",
      tech: ["Excel", "Power Query", "Dashboard Design", "Process Documentation"],
      impact: [
        "Measurable improvement in submission accuracy",
        "Reduced escalations by ~30%",
        "Model adopted across entire operations team"
      ],
      highlights: "Performance model became template for team-wide quality improvement"
    },
    {
      id: 3,
      title: "Virat Kohli IPL Performance Analysis",
      company: "Personal Project",
      challenge: "Analyze complex ball-by-ball IPL data to identify performance patterns and vulnerabilities",
      solution: "Built complete analytics pipeline from data ingestion through visualization with pattern recognition",
      tech: ["Python", "Pandas", "NumPy", "Tableau", "Data Visualization"],
      impact: [
        "Identified strike rate patterns across delivery types",
        "Correlated batting performance with pitch conditions",
        "RCA on dismissal trends against specific bowlers"
      ],
      highlights: "Demonstrates end-to-end analytics: raw data → transformation → insight visualization"
    }
  ];

  const experience = [
    {
      role: "Subject-Matter Expert — Data Quality & MIS Analyst",
      company: "Highspring India (Google Ecosystem Client)",
      period: "Apr 2024 - Present",
      duration: "24+ months",
      metrics: ["99.8% Accuracy", "15% Efficiency Gain", "100% On-Time", "Global Teams"],
      highlights: [
        "Maintain data integrity across large-scale Google ecosystem datasets",
        "Engineer automated WFH/Production/Training dashboards with real-time visibility",
        "Lead client calibration sessions with global cross-functional teams",
        "Conduct Pareto and root-cause analysis on recurring data discrepancies",
        "Own end-to-end MIS reporting lifecycle (Daily/Weekly/Monthly)"
      ]
    },
    {
      role: "Operations Data Analyst",
      company: "Highspring India",
      period: "Apr 2022 - Mar 2024",
      duration: "24 months",
      metrics: ["Accuracy Improvement", "Escalation Reduction", "Real-Time Dashboards"],
      highlights: [
        "Design and enforce performance-based incentive model for data quality compliance",
        "Investigate and resolve complex validation requests using structured RCA",
        "Build operational trackers and KPI dashboards in Advanced Excel",
        "Eliminate persistent data discrepancies through root-cause analysis"
      ]
    },
    {
      role: "System Support Engineer L1",
      company: "Wipro Limited (Airtel RF Project)",
      period: "Jul 2021 - Mar 2022",
      duration: "9 months",
      metrics: ["100% Uptime", "SLA Compliance", "Infrastructure Support"],
      highlights: [
        "Manage L1 support operations for Airtel RF infrastructure",
        "Resolve complex router issues within strict SLA commitments",
        "Coordinate with field engineers and stakeholders for timely resolution"
      ]
    }
  ];

  const skillsData = {
    expert: [
      "Data Quality Management",
      "MIS Reporting (Daily/Weekly/Monthly)",
      "Advanced Excel (Pivot, VLOOKUP, Macros)",
      "SQL (Queries, Joins, Aggregations)",
      "Root Cause Analysis (RCA)",
      "SOP Documentation & Governance"
    ],
    proficient: [
      "Python (Pandas, NumPy)",
      "Tableau Dashboard Design",
      "Data Profiling & Validation",
      "Process Improvement",
      "Stakeholder Management",
      "Google Workspace"
    ],
    growing: [
      "Google Cloud Data Analytics",
      "Power BI",
      "Data Pipeline Development"
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white font-sans">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-700 to-teal-600 bg-clip-text text-transparent">DJ</div>
          
          <div className="hidden md:flex gap-8">
            {['home', 'about', 'projects', 'experience', 'skills', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`capitalize text-sm font-medium transition-colors ${
                  activeSection === item
                    ? 'text-blue-700'
                    : isScrolled ? 'text-gray-700 hover:text-blue-700' : 'text-gray-800 hover:text-blue-700'
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="flex flex-col gap-4 p-4">
              {['home', 'about', 'projects', 'experience', 'skills', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="capitalize text-left font-medium text-gray-700 hover:text-blue-700 py-2"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4 bg-gradient-to-br from-blue-50 via-slate-50 to-teal-50">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-blue-100 rounded-full">
            <span className="text-blue-700 text-sm font-semibold">MIS Analyst & Data Quality Expert</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            I Turn Raw Data Into <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Strategic Intelligence</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            4+ years building automated reporting systems and maintaining 99.8% data accuracy for Fortune 500 companies. Let's transform your operational data into actionable insights.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-4 bg-gradient-to-r from-blue-700 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all"
            >
              View My Work
            </button>
            <button
              className="px-8 py-4 bg-white border-2 border-blue-700 text-blue-700 rounded-lg font-semibold hover:bg-blue-50 transition-all flex items-center justify-center gap-2"
            >
              <Download size={20} />
              Resume (PDF)
            </button>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <BarChart3 size={18} className="text-teal-600" />
              <span className="text-gray-700">MIS & Reporting</span>
            </div>
            <div className="flex items-center gap-2">
              <Database size={18} className="text-blue-600" />
              <span className="text-gray-700">Data Quality</span>
            </div>
            <div className="flex items-center gap-2">
              <Code size={18} className="text-amber-600" />
              <span className="text-gray-700">SQL & Python</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp size={18} className="text-emerald-600" />
              <span className="text-gray-700">Tableau & Excel</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">About Me</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-gradient-to-br from-blue-100 to-teal-100 rounded-2xl p-8 h-80 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-bold text-blue-700 mb-2">99.8%</div>
                  <p className="text-xl text-gray-700">Data Accuracy Benchmark</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                I'm a data-driven analyst specializing in transforming operational chaos into clear business intelligence. With 4+ years at Highspring India and Wipro, I've built automated reporting systems serving Fortune 500 companies and reduced manual reporting time by 15% through intelligent automation.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                My edge: I don't just process data—I improve processes. I use Pareto analysis and root-cause investigation to identify systemic improvements, then translate them into measurable outcomes.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded">
                <p className="text-gray-800">
                  <span className="font-semibold">Currently:</span> Earning Google Cloud Data Analytics certification (Expected Mar 2026)
                </p>
              </div>

              <div className="flex gap-4 pt-4">
                <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">B.Sc. IT (A+ Grade)</span>
                <span className="px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-semibold">4+ Years Experience</span>
              </div>
            </div>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {[
              { value: '99.8%', label: 'Data Accuracy' },
              { value: '15%', label: 'Efficiency Gain' },
              { value: '100%', label: 'On-Time Delivery' },
              { value: '50+', label: 'Global Stakeholders' }
            ].map((stat, idx) => (
              <div key={idx} className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-700 mb-2">{stat.value}</div>
                <p className="text-gray-600 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Featured Projects</h2>
          <p className="text-center text-gray-600 mb-12">Real-world solutions with measurable impact</p>

          <div className="grid gap-8">
            {projects.map((project, idx) => (
              <div key={idx} className="bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="md:grid md:grid-cols-3 gap-8 p-8">
                  <div className="md:col-span-2">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{project.title}</h3>
                        <p className="text-sm text-blue-600 font-semibold">{project.company}</p>
                      </div>
                    </div>

                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Challenge</h4>
                        <p className="text-gray-600">{project.challenge}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Solution</h4>
                        <p className="text-gray-600">{project.solution}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((t, i) => (
                        <span key={i} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-semibold">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="md:col-span-1">
                    <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-6 h-full flex flex-col justify-center">
                      <h4 className="font-semibold text-gray-900 mb-4">Impact</h4>
                      <ul className="space-y-3">
                        {project.impact.map((item, i) => (
                          <li key={i} className="flex gap-3">
                            <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                      <p className="text-xs text-gray-600 mt-6 pt-6 border-t border-emerald-200 italic">
                        {project.highlights}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Experience</h2>

          <div className="space-y-8">
            {experience.map((exp, idx) => (
              <div key={idx} className="bg-white rounded-xl border-2 border-gray-100 p-8 hover:border-blue-300 transition-all">
                <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{exp.role}</h3>
                    <p className="text-blue-600 font-semibold mt-1">{exp.company}</p>
                  </div>
                  <div className="text-right text-sm">
                    <p className="font-semibold text-gray-900">{exp.period}</p>
                    <p className="text-gray-600">{exp.duration}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {exp.metrics.map((metric, i) => (
                    <span key={i} className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-xs font-semibold">
                      {metric}
                    </span>
                  ))}
                </div>

                <ul className="space-y-2">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="flex gap-3 text-gray-700">
                      <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Skills & Expertise</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Expert */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                <h3 className="text-xl font-bold text-gray-900">Expert</h3>
              </div>
              <ul className="space-y-3">
                {skillsData.expert.map((skill, i) => (
                  <li key={i} className="text-gray-800 font-medium flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            {/* Proficient */}
            <div className="bg-gradient-to-br from-teal-50 to-emerald-100 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 bg-teal-600 rounded-full"></div>
                <h3 className="text-xl font-bold text-gray-900">Proficient</h3>
              </div>
              <ul className="space-y-3">
                {skillsData.proficient.map((skill, i) => (
                  <li key={i} className="text-gray-800 font-medium flex items-center gap-2">
                    <span className="w-2 h-2 bg-teal-600 rounded-full"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            {/* Growing */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-100 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 bg-amber-600 rounded-full"></div>
                <h3 className="text-xl font-bold text-gray-900">Growing</h3>
              </div>
              <ul className="space-y-3">
                {skillsData.growing.map((skill, i) => (
                  <li key={i} className="text-gray-800 font-medium flex items-center gap-2">
                    <span className="w-2 h-2 bg-amber-600 rounded-full"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Tools */}
          <div className="mt-12 bg-white rounded-xl border-2 border-gray-200 p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Tools & Platforms</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['Advanced Excel', 'Tableau', 'SQL', 'Python', 'Google Cloud', 'Power BI', 'Google Workspace', 'MS Access'].map((tool, i) => (
                <div key={i} className="bg-gray-50 rounded-lg p-4 text-center">
                  <p className="font-semibold text-gray-800">{tool}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Let's Connect</h2>
          <p className="text-center text-gray-600 mb-12">Interested in discussing data quality, MIS strategies, or analytics projects?</p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <a href="mailto:official.durgeshjha@gmail.com" className="flex items-start gap-4 p-6 bg-white rounded-xl hover:shadow-lg transition-all group">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-all">
                  <Mail size={24} className="text-blue-700" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Email</h3>
                  <p className="text-gray-600">official.durgeshjha@gmail.com</p>
                </div>
              </a>

              <a href="tel:+919113110035" className="flex items-start gap-4 p-6 bg-white rounded-xl hover:shadow-lg transition-all group">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center group-hover:bg-teal-200 transition-all">
                  <Phone size={24} className="text-teal-700" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Phone</h3>
                  <p className="text-gray-600">+91 9113110035 (WhatsApp)</p>
                </div>
              </a>

              <a href="https://linkedin.com/in/durgeshjha-dataanalyst" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 p-6 bg-white rounded-xl hover:shadow-lg transition-all group">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center group-hover:bg-emerald-200 transition-all">
                  <Linkedin size={24} className="text-emerald-700" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">LinkedIn</h3>
                  <p className="text-gray-600">durgeshjha-dataanalyst</p>
                </div>
              </a>

              <div className="flex items-start gap-4 p-6 bg-white rounded-xl">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                  <MapPin size={24} className="text-amber-700" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Location</h3>
                  <p className="text-gray-600">Gurugram, Haryana, India</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form className="space-y-4 bg-white p-8 rounded-xl border-2 border-gray-100">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-blue-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-blue-500"
              />
              <textarea
                placeholder="Your Message"
                rows="4"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-blue-500 resize-none"
              ></textarea>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-blue-700 to-teal-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Durgesh Jha</h3>
              <p className="text-sm">Data-driven MIS Analyst transforming operational data into strategic intelligence.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><button onClick={() => scrollToSection('about')} className="hover:text-blue-400">About</button></li>
                <li><button onClick={() => scrollToSection('projects')} className="hover:text-blue-400">Projects</button></li>
                <li><button onClick={() => scrollToSection('experience')} className="hover:text-blue-400">Experience</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="hover:text-blue-400">Contact</button></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Connect</h4>
              <div className="flex gap-4">
                <a href="mailto:official.durgeshjha@gmail.com" className="hover:text-blue-400" title="Email">
                  <Mail size={20} />
                </a>
                <a href="tel:+919113110035" className="hover:text-blue-400" title="Phone">
                  <Phone size={20} />
                </a>
                <a href="https://linkedin.com/in/durgeshjha-dataanalyst" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400" title="LinkedIn">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8 text-center text-sm">
            <p>© 2026 Durgesh Kumar Jha. All rights reserved. | Designed for impact.</p>
          </div>
        </div>
      </footer>

      {/* SEO Meta Tags */}
      <head>
        <title>Durgesh Jha | MIS Analyst & Data Quality Specialist | Portfolio</title>
        <meta name="description" content="Results-driven MIS Analyst with 4+ years building automated reporting systems and maintaining 99.8% data accuracy. View portfolio & projects." />
        <meta name="keywords" content="MIS Analyst, Data Quality Specialist, Reporting Dashboard, SQL, Python, Tableau, Data Analyst, Business Analyst, Gurugram" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Durgesh Jha | MIS Analyst & Data Quality Specialist" />
        <meta property="og:description" content="4+ years of expertise in MIS reporting, data quality, and analytics." />
        <meta property="og:type" content="website" />
      </head>
    </div>
  );
}
