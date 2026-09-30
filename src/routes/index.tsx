import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/')({
  component: FrontierSystems,
})

// ─── Data ────────────────────────────────────────────────────────────────────

const services = [
  {
    title: 'Software Development',
    desc: 'Custom web and mobile applications built with modern frameworks, tailored to your operational requirements.',
    icon: '💻',
  },
  {
    title: 'Data & Analytics',
    desc: 'End-to-end data pipelines, dashboards, and BI solutions that turn raw information into actionable insight.',
    icon: '📊',
  },
  {
    title: 'IT Consulting',
    desc: 'Strategic technology advisory to help organisations evaluate, adopt, and scale the right digital tools.',
    icon: '🔍',
  },
  {
    title: 'Cloud Infrastructure',
    desc: 'Secure, resilient cloud architectures on AWS, Azure and GCP — from provisioning to ongoing management.',
    icon: '☁️',
  },
]

const team = [
  {
    role: 'Developers',
    desc: 'Our full-stack engineers ship robust, scalable software across web, mobile, and embedded platforms using current best practices.',
    icon: '👨‍💻',
  },
  {
    role: 'Business Analysts',
    desc: 'We bridge the gap between stakeholders and delivery teams, translating complex requirements into clear technical specifications.',
    icon: '📋',
  },
  {
    role: 'Project Managers',
    desc: 'Experienced PMs keep every engagement on schedule and on budget, ensuring transparent communication at every milestone.',
    icon: '🗂️',
  },
]

const projects = [
  {
    id: 1,
    tag: 'Defence & Security',
    title: 'Nigerian Defence Academy Application Portal',
    desc: 'A secure, high-traffic applicant portal streamlining the entire NDA admissions process — from registration through result publication — for thousands of candidates nationwide.',
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=900&q=80',
  },
  {
    id: 2,
    tag: 'Government / FinTech',
    title: 'Design and Development of GEEP Dashboard',
    desc: 'An executive-level analytics dashboard for the Government Enterprise & Empowerment Programme, providing real-time visibility into loan disbursements and beneficiary data across all 36 states.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80',
  },
  {
    id: 3,
    tag: 'Healthcare & Training',
    title: 'Training of Mobile Cadre Personnel of KADRS',
    desc: 'A digital learning management system deployed to train Kaduna State rural health workers, supporting curriculum delivery, assessments, and certification tracking in low-bandwidth environments.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=900&q=80',
  },
]

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Our Work', href: '#work' },
  { label: 'Contact', href: '#contact' },
]

// ─── Component ───────────────────────────────────────────────────────────────

function FrontierSystems() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      {/* ── Navbar ───────────────────────────────────────── */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-5 md:px-10 h-16 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-brand rounded flex items-center justify-center flex-shrink-0">
              <span className="text-white font-black text-sm">FS</span>
            </div>
            <span className="font-black text-lg tracking-tight leading-none">
              <span className="text-brand">FRONTIER</span>
              <span className="text-gray-800"> SYSTEMS</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="nav-link text-sm font-medium text-gray-600 hover:text-brand"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              className="ml-2 bg-brand text-white text-sm font-semibold px-5 py-2 rounded-full hover:bg-red-700 transition-colors"
            >
              Get in Touch
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded text-gray-600 hover:text-brand"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4l14 14M18 4L4 18" />
              </svg>
            ) : (
              <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 6h16M3 12h16M3 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 px-5 py-4 flex flex-col gap-4">
            {navLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium text-gray-700 hover:text-brand"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="bg-brand text-white text-sm font-semibold px-5 py-2 rounded-full text-center hover:bg-red-700 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        )}
      </header>

      {/* ── Hero ─────────────────────────────────────────── */}
      <section
        id="home"
        className="relative min-h-screen flex items-center pt-16"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1605379399642-870262d3d051?w=1600&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 hero-gradient" />
        <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-10 py-24">
          <p className="text-brand text-sm font-semibold uppercase tracking-widest mb-4 animate-fade-up">
            Technology · Innovation · Results
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6 max-w-3xl animate-fade-up animate-delay-100">
            Technical{' '}
            <span className="text-brand">Solutions</span>{' '}
            That Fit Your Business Needs
          </h1>
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-10 max-w-xl animate-fade-up animate-delay-200">
            Frontier Systems delivers custom software, data platforms, and IT consulting that drive measurable impact for organisations across Nigeria and beyond.
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-up animate-delay-300">
            <a
              href="#contact"
              className="bg-brand text-white font-bold px-8 py-4 rounded-full hover:bg-red-700 transition-colors text-sm md:text-base"
            >
              Get in Touch
            </a>
            <a
              href="#work"
              className="border border-white/50 text-white font-semibold px-8 py-4 rounded-full hover:bg-white/10 transition-colors text-sm md:text-base"
            >
              View Our Work
            </a>
          </div>

          {/* Trust badges */}
          <div className="mt-16 flex flex-wrap items-center gap-6">
            {['NDA', 'GEEP', 'KADRS', 'Govt. Certified'].map((badge) => (
              <div
                key={badge}
                className="bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-white/80 text-xs font-medium backdrop-blur-sm"
              >
                {badge}
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/50">
          <span className="text-xs">Scroll</span>
          <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M8 3v10M4 9l4 4 4-4" />
          </svg>
        </div>
      </section>

      {/* ── About ────────────────────────────────────────── */}
      <section id="about" className="section-pink py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-brand text-sm font-semibold uppercase tracking-widest mb-3">
                Who We Are
              </p>
              <h2 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight mb-6">
                About Us
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                Frontier Systems is a Nigerian technology company committed to building digital infrastructure that works. We partner with government agencies, financial institutions, and private enterprises to design and deliver software that solves real operational challenges.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Our team combines deep domain knowledge with engineering excellence, delivering projects on time and at scale — from mission-critical portals serving millions to targeted analytics platforms that inform policy decisions.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-brand text-white font-semibold px-7 py-3 rounded-full hover:bg-red-700 transition-colors"
              >
                Work With Us
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </a>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=700&q=80"
                  alt="Frontier Systems team collaboration"
                  className="w-full h-80 md:h-96 object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-brand text-white rounded-2xl p-5 shadow-xl">
                <div className="text-3xl font-black">10+</div>
                <div className="text-xs font-medium opacity-90">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services ─────────────────────────────────────── */}
      <section id="services" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <div className="text-center mb-14">
            <p className="text-brand text-sm font-semibold uppercase tracking-widest mb-3">
              What We Do
            </p>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight mb-4">
              Our Services
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto text-base leading-relaxed">
              A focused range of technology services designed to move organisations forward.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className="card-hover bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:border-red-100"
              >
                <div className="text-3xl mb-4">{s.icon}</div>
                <h3 className="font-bold text-gray-900 text-base mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team ─────────────────────────────────────────── */}
      <section className="section-pink py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <div className="text-center mb-14">
            <p className="text-brand text-sm font-semibold uppercase tracking-widest mb-3">
              The People Behind the Work
            </p>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight mb-4">
              Our Team of Excellence
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto text-base leading-relaxed">
              A multidisciplinary team united by a single goal: delivering technology that creates lasting value for our clients.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((t) => (
              <div
                key={t.role}
                className="card-hover bg-white rounded-2xl p-8 shadow-sm border border-red-50 text-center"
              >
                <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-5">
                  {t.icon}
                </div>
                <h3 className="font-black text-gray-900 text-xl mb-3">{t.role}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our Work ─────────────────────────────────────── */}
      <section id="work" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <div className="text-center mb-16">
            <p className="text-brand text-sm font-semibold uppercase tracking-widest mb-3">
              Portfolio
            </p>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight mb-4">
              Our Work
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto text-base leading-relaxed">
              Selected projects that demonstrate our range, rigour, and results.
            </p>
          </div>

          <div className="space-y-24">
            {projects.map((p, i) => (
              <div
                key={p.id}
                className={`flex flex-col ${i % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-10 items-center`}
              >
                {/* Image */}
                <div className="w-full md:w-[55%]">
                  <div className="relative rounded-2xl overflow-hidden shadow-xl group">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-72 md:h-96 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  </div>
                </div>

                {/* Content */}
                <div className="w-full md:w-[45%]">
                  <span className="project-tag">{p.tag}</span>
                  <h3 className="text-2xl md:text-3xl font-black text-gray-900 leading-snug mb-4">
                    {p.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed mb-6">{p.desc}</p>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-brand font-semibold text-sm hover:underline"
                  >
                    Discuss a similar project
                    <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M2 7h10M8 3l4 4-4 4" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Us ───────────────────────────────────────── */}
      <section className="section-pink py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-14 h-14 bg-brand rounded-2xl flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl">⚡</span>
            </div>
            <p className="text-brand text-sm font-semibold uppercase tracking-widest mb-3">
              Why Frontier Systems
            </p>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight mb-6">
              Timely and Efficient Team
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6 text-lg">
              We understand that in technology, speed without quality is noise. Our agile delivery model ensures projects land on schedule while our quality engineering practices guarantee stability at scale.
            </p>
            <p className="text-gray-500 leading-relaxed">
              From initial scoping to post-launch support, every engagement is managed with the rigour of a mature engineering organisation — transparent reporting, clear escalation paths, and a team you can actually reach.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {[
              { value: '50+', label: 'Projects Delivered' },
              { value: '10+', label: 'Years in Business' },
              { value: '98%', label: 'On-Time Delivery' },
              { value: '30+', label: 'Happy Clients' },
            ].map((stat) => (
              <div key={stat.label} className="bg-white rounded-2xl p-6 text-center shadow-sm border border-red-50">
                <div className="text-3xl font-black text-brand mb-1">{stat.value}</div>
                <div className="text-gray-500 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact ──────────────────────────────────────── */}
      <section id="contact" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-brand text-sm font-semibold uppercase tracking-widest mb-3">
              Get in Touch
            </p>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight mb-4">
              Interested in Working With Us?
            </h2>
            <p className="text-gray-500 leading-relaxed mb-12 text-lg">
              Whether you have a project in mind, a challenge to solve, or simply want to explore what's possible — reach out and let's talk.
            </p>

            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-6">
              {/* Email */}
              <a
                href="mailto:project@frontiersystems.io"
                className="card-hover group flex flex-col items-center gap-4 bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:border-red-200"
              >
                <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center group-hover:bg-brand transition-colors">
                  <svg
                    className="text-brand group-hover:text-white transition-colors"
                    width="24"
                    height="24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Email Us</p>
                  <p className="font-semibold text-gray-900 text-sm group-hover:text-brand transition-colors">
                    project@frontiersystems.io
                  </p>
                </div>
              </a>

              {/* Phone */}
              <a
                href="tel:+2348036591626"
                className="card-hover group flex flex-col items-center gap-4 bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:border-red-200"
              >
                <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center group-hover:bg-brand transition-colors">
                  <svg
                    className="text-brand group-hover:text-white transition-colors"
                    width="24"
                    height="24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 11a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .18h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Call Us</p>
                  <p className="font-semibold text-gray-900 text-sm group-hover:text-brand transition-colors">
                    08036591626
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ───────────────────────────────────────── */}
      <footer className="bg-gray-950 text-gray-400 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <div className="grid md:grid-cols-4 gap-10 mb-12">
            {/* Brand */}
            <div className="md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-brand rounded flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-black text-sm">FS</span>
                </div>
                <span className="font-black text-base tracking-tight text-white">
                  <span className="text-brand">FRONTIER</span> SYSTEMS
                </span>
              </div>
              <p className="text-sm leading-relaxed text-gray-500">
                Technical solutions that drive real outcomes for organisations across Nigeria and beyond.
              </p>
            </div>

            {/* Navigate */}
            <div>
              <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">Navigate</h4>
              <ul className="space-y-3">
                {[
                  { label: 'Home', href: '#home' },
                  { label: 'About Us', href: '#about' },
                  { label: 'Services', href: '#services' },
                  { label: 'Our Work', href: '#work' },
                ].map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="text-sm hover:text-brand transition-colors">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">Services</h4>
              <ul className="space-y-3">
                {['Software Development', 'Data & Analytics', 'IT Consulting', 'Cloud Infrastructure'].map((s) => (
                  <li key={s}>
                    <a href="#services" className="text-sm hover:text-brand transition-colors">
                      {s}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Details */}
            <div>
              <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">Details</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="mailto:project@frontiersystems.io"
                    className="text-sm hover:text-brand transition-colors break-all"
                  >
                    project@frontiersystems.io
                  </a>
                </li>
                <li>
                  <a href="tel:+2348036591626" className="text-sm hover:text-brand transition-colors">
                    08036591626
                  </a>
                </li>
                <li>
                  <span className="text-sm">Nigeria</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
            <p className="text-xs text-gray-600">
              © {new Date().getFullYear()} Frontier Systems. All rights reserved.
            </p>
            <p className="text-xs text-gray-700">
              Built with precision.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
