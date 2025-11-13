import React, { useEffect, useState } from 'react'
import Spline from '@splinetool/react-spline'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Menu,
  X,
  Sparkles,
  Github,
  Linkedin,
  Mail,
  Code2,
  Rocket,
  Cpu,
  Star,
  Briefcase,
  GraduationCap,
  ArrowUpRight,
  ExternalLink,
  Quote,
  Award,
} from 'lucide-react'

function useScroll() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return scrolled
}

function Navbar() {
  const scrolled = useScroll()
  const [open, setOpen] = useState(false)
  const links = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#experience', label: 'Experience' },
    { href: '#education', label: 'Education' },
    { href: '#projects', label: 'Projects' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#contact', label: 'Contact' },
  ]
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${
      scrolled ? 'backdrop-blur-xl bg-black/40 border-b border-white/10' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2 group">
            <div className="relative">
              <Sparkles className="h-6 w-6 text-fuchsia-400" />
              <span className="absolute -inset-2 rounded-full bg-fuchsia-500/20 blur-md opacity-0 group-hover:opacity-100 transition" />
            </div>
            <span className="text-white/90 group-hover:text-white transition font-semibold tracking-wide">
              Software Engineer
            </span>
          </a>
          <nav className="hidden md:flex items-center gap-6">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-sm text-white/70 hover:text-white transition">
                {l.label}
              </a>
            ))}
            <div className="ml-4 flex items-center gap-3">
              <a href="#" aria-label="GitHub" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-white/80 hover:text-white transition">
                <Github className="h-4 w-4" />
              </a>
              <a href="#" aria-label="LinkedIn" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-white/80 hover:text-white transition">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="#contact" aria-label="Email" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-white/80 hover:text-white transition">
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </nav>
          <button className="md:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-white/80" onClick={() => setOpen(!open)}>
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="md:hidden border-t border-white/10 bg-black/70 backdrop-blur-xl">
            <div className="px-4 py-4 space-y-2">
              {links.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block px-3 py-2 rounded-lg text-white/80 hover:bg-white/10 hover:text-white">
                  {l.label}
                </a>
              ))}
              <div className="flex items-center gap-3 pt-2">
                <a href="#" className="p-2 rounded-lg bg-white/5 border border-white/10 text-white/80">
                  <Github className="h-4 w-4" />
                </a>
                <a href="#" className="p-2 rounded-lg bg-white/5 border border-white/10 text-white/80">
                  <Linkedin className="h-4 w-4" />
                </a>
                <a href="#contact" className="p-2 rounded-lg bg-white/5 border border-white/10 text-white/80">
                  <Mail className="h-4 w-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

function GradientOrbs() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-fuchsia-600/20 blur-3xl" />
      <div className="absolute top-40 -right-32 h-80 w-80 rounded-full bg-indigo-600/20 blur-3xl" />
      <div className="absolute -bottom-32 left-1/3 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
    </div>
  )
}

function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] md:h-[86vh] text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/60 to-black/80 pointer-events-none" />
      <GradientOrbs />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-32">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur">
            <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Available for freelance projects
          </div>
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
            Building immersive, futuristic software experiences
          </h1>
          <p className="mt-5 text-white/70 leading-relaxed text-base sm:text-lg max-w-2xl">
            I craft high-performance web apps, delightful UIs, and scalable systems—blending aesthetics with engineering rigor.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="group inline-flex items-center gap-2 rounded-lg bg-fuchsia-500 hover:bg-fuchsia-600 text-white px-5 py-3 transition">
              <Rocket className="h-4 w-4" /> View Projects
              <ArrowUpRight className="h-4 w-4 transition -translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 hover:bg-white/10 text-white px-5 py-3 transition">
              <Mail className="h-4 w-4" /> Contact Me
            </a>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            {[
              { icon: <Cpu className='h-4 w-4' />, label: 'Full‑Stack' },
              { icon: <Code2 className='h-4 w-4' />, label: 'TypeScript' },
              { icon: <Star className='h-4 w-4' />, label: 'Design Systems' },
              { icon: <Award className='h-4 w-4' />, label: 'Performance First' },
            ].map((b, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + i * 0.1 }} className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
                {b.icon}
                {b.label}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="relative py-20 md:py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.01] to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
            <Sparkles className="h-3.5 w-3.5 text-fuchsia-400" />
            {subtitle}
          </div>
          <h2 className="mt-4 text-white text-3xl md:text-4xl font-bold">{title}</h2>
        </div>
        {children}
      </div>
    </section>
  )
}

const skills = [
  { name: 'TypeScript', level: 92 },
  { name: 'React / Next.js', level: 94 },
  { name: 'Node.js', level: 88 },
  { name: 'Python', level: 85 },
  { name: 'System Design', level: 86 },
  { name: 'UI/UX', level: 83 },
]

function Skills() {
  return (
    <Section id="skills" title="Skills & Superpowers" subtitle="What I do best">
      <div className="grid md:grid-cols-2 gap-6">
        {skills.map((s, i) => (
          <motion.div key={s.name} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-5 overflow-hidden">
            <div className="flex items-center justify-between mb-3">
              <span className="text-white/90 font-medium">{s.name}</span>
              <span className="text-white/60 text-sm">{s.level}%</span>
            </div>
            <div className="h-2.5 rounded-full bg-white/10 overflow-hidden">
              <motion.div className="h-full rounded-full bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-400" initial={{ width: 0 }} whileInView={{ width: `${s.level}%` }} viewport={{ once: true }} transition={{ duration: 0.9, ease: 'easeOut' }} />
            </div>
            <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-fuchsia-500/10 blur-2xl" />
          </motion.div>
        ))}
      </div>
      <div className="mt-8 flex flex-wrap gap-2">
        {['GraphQL', 'PostgreSQL', 'MongoDB', 'Docker', 'AWS', 'Tailwind', 'Framer Motion']
          .map((t, i) => (
            <motion.span key={t} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 + i * 0.05 }} className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-white/70">
              {t}
            </motion.span>
          ))}
      </div>
    </Section>
  )
}

const experience = [
  { role: 'Senior Software Engineer', company: 'Quantum Labs', period: '2022 — Present', points: ['Led a platform rewrite to microfrontends', 'Boosted Core Web Vitals by 31%', 'Shipped design system used across 6 teams'] },
  { role: 'Frontend Engineer', company: 'Nebula Systems', period: '2020 — 2022', points: ['Built real‑time analytics dashboards', 'Introduced visual regression pipeline', 'Mentored 4 junior engineers'] },
]

function Experience() {
  return (
    <Section id="experience" title="Experience" subtitle="Where I built cool things">
      <div className="grid md:grid-cols-2 gap-6">
        {experience.map((e, i) => (
          <motion.div key={e.role} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-lg bg-fuchsia-500/10 border border-fuchsia-500/20">
                <Briefcase className="h-5 w-5 text-fuchsia-300" />
              </div>
              <div>
                <h3 className="text-white font-semibold">{e.role}</h3>
                <p className="text-white/60 text-sm">{e.company} • {e.period}</p>
              </div>
            </div>
            <ul className="list-disc list-inside text-white/70 space-y-1">
              {e.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}

const education = [
  { title: 'B.S. Computer Science', org: 'Tech University', period: '2016 — 2020', details: 'Specialized in Human‑Computer Interaction and Distributed Systems.' },
  { title: 'Design for Developers', org: 'Interface School', period: '2019', details: 'Intensive program on visual design, accessibility, and motion.' },
]

function Education() {
  return (
    <Section id="education" title="Education" subtitle="How I learned the craft">
      <div className="grid md:grid-cols-2 gap-6">
        {education.map((e, i) => (
          <motion.div key={e.title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-lg bg-indigo-500/10 border border-indigo-500/20">
                <GraduationCap className="h-5 w-5 text-indigo-300" />
              </div>
              <div>
                <h3 className="text-white font-semibold">{e.title}</h3>
                <p className="text-white/60 text-sm">{e.org} • {e.period}</p>
              </div>
            </div>
            <p className="text-white/70">{e.details}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}

const projects = [
  { title: 'HoloBoard', desc: 'A holographic Kanban with multiplayer cursors and AI planning.', tags: ['React', 'WebRTC', 'Three.js'], link: '#' },
  { title: 'PulseX', desc: 'Real‑time system health with anomaly detection and alerts.', tags: ['Next.js', 'Kafka', 'Tailwind'], link: '#' },
  { title: 'Astra UI', desc: 'A future‑facing component library with motion‑first APIs.', tags: ['TypeScript', 'Framer Motion'], link: '#' },
  { title: 'Neon Notes', desc: 'Offline‑first note app with sync and end‑to‑end encryption.', tags: ['PWA', 'CRDT', 'IndexedDB'], link: '#' },
]

function ProjectCard({ p, i }) {
  return (
    <motion.a
      href={p.link}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.05 }}
      className="group relative rounded-2xl border border-white/10 bg-white/[0.04] p-6 overflow-hidden">
      <div className="absolute inset-px rounded-2xl bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition pointer-events-none" />
      <div className="flex items-center gap-3 mb-3">
        <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
          <Code2 className="h-5 w-5 text-cyan-300" />
        </div>
        <h3 className="text-white font-semibold">{p.title}</h3>
      </div>
      <p className="text-white/70 mb-4">{p.desc}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {p.tags.map((t) => (
          <span key={t} className="px-2.5 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-white/70">
            {t}
          </span>
        ))}
      </div>
      <span className="inline-flex items-center gap-1 text-sm text-white/80 group-hover:text-white">
        Explore <ExternalLink className="h-4 w-4" />
      </span>
      <div className="absolute -bottom-16 -right-16 h-40 w-40 rounded-full bg-cyan-500/10 blur-2xl" />
    </motion.a>
  )
}

function Projects() {
  return (
    <Section id="projects" title="Selected Projects" subtitle="A taste of my builds">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <ProjectCard key={p.title} p={p} i={i} />
        ))}
      </div>
    </Section>
  )
}

const quotes = [
  { text: 'A rare blend of product sense and engineering mastery. Delivered 2 quarters ahead of schedule.', name: 'CTO, Quantum Labs' },
  { text: 'Turns ambiguous ideas into polished, animated experiences users love.', name: 'Design Lead, Nebula Systems' },
  { text: '10/10 would collaborate again. Impact far exceeded expectations.', name: 'PM, Indie Collective' },
]

function Testimonials() {
  return (
    <Section id="testimonials" title="Testimonials" subtitle="Words from collaborators">
      <div className="grid md:grid-cols-3 gap-6">
        {quotes.map((q, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
            <Quote className="h-6 w-6 text-white/30" />
            <p className="mt-3 text-white/80">“{q.text}”</p>
            <p className="mt-4 text-sm text-white/60">{q.name}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}

function About() {
  return (
    <Section id="about" title="About" subtitle="Who I am">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
          <p className="text-white/80 leading-relaxed">
            I’m a software engineer focused on crafting interfaces that feel alive. I love translating complex problems into elegant, animated experiences and building systems that scale. My work spans design systems, real‑time collaboration, and performance engineering.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
            <div className="rounded-xl bg-white/5 border border-white/10 p-4">
              <p className="text-white/60">Years of Experience</p>
              <p className="text-white font-semibold text-xl">5+</p>
            </div>
            <div className="rounded-xl bg-white/5 border border-white/10 p-4">
              <p className="text-white/60">Projects Shipped</p>
              <p className="text-white font-semibold text-xl">30+</p>
            </div>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-2xl border border-white/10 bg-gradient-to-br from-fuchsia-500/10 to-indigo-500/10 p-6">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-fuchsia-500/10 border border-fuchsia-500/20">
              <Cpu className="h-6 w-6 text-fuchsia-300" />
            </div>
            <div>
              <h4 className="text-white font-semibold">Engineering with aesthetics</h4>
              <p className="text-white/70 text-sm">Motion, polish, and accessibility baked into every build.</p>
            </div>
          </div>
          <div className="mt-4 flex items-center gap-4">
            <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20">
              <Rocket className="h-6 w-6 text-cyan-300" />
            </div>
            <div>
              <h4 className="text-white font-semibold">Launch‑ready delivery</h4>
              <p className="text-white/70 text-sm">Clean, scalable code with a product mindset.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  )
}

function Contact() {
  return (
    <Section id="contact" title="Contact" subtitle="Let’s build something">
      <div className="grid md:grid-cols-2 gap-8">
        <motion.form
          onSubmit={(e) => e.preventDefault()}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-white/70">Name</label>
              <input className="mt-1 w-full rounded-lg bg-black/40 border border-white/10 px-3 py-2 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/40" placeholder="Jane Doe" />
            </div>
            <div>
              <label className="text-sm text-white/70">Email</label>
              <input type="email" className="mt-1 w-full rounded-lg bg-black/40 border border-white/10 px-3 py-2 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/40" placeholder="jane@doe.dev" />
            </div>
          </div>
          <div className="mt-4">
            <label className="text-sm text-white/70">Message</label>
            <textarea rows={5} className="mt-1 w-full rounded-lg bg-black/40 border border-white/10 px-3 py-2 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/40" placeholder="Tell me about your project..." />
          </div>
          <button className="mt-5 inline-flex items-center gap-2 rounded-lg bg-fuchsia-500 hover:bg-fuchsia-600 text-white px-5 py-3 transition">
            <Mail className="h-4 w-4" /> Send Message
          </button>
          <p className="mt-3 text-xs text-white/50">This is a demo form. Hook it to your email or backend as needed.</p>
        </motion.form>
        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-2xl border border-white/10 bg-gradient-to-br from-indigo-500/10 to-cyan-500/10 p-6">
          <h4 className="text-white font-semibold">Let’s connect</h4>
          <p className="text-white/70 mt-2">Open to freelance projects, consulting, and full‑time roles.</p>
          <div className="mt-4 flex items-center gap-3">
            <a href="#" className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white/80 hover:text-white hover:bg-white/10 transition">
              <Github className="h-4 w-4" /> GitHub
            </a>
            <a href="#" className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white/80 hover:text-white hover:bg-white/10 transition">
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
            <a href="mailto:hello@example.com" className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white/80 hover:text-white hover:bg-white/10 transition">
              <Mail className="h-4 w-4" /> Email
            </a>
          </div>
        </motion.div>
      </div>
    </Section>
  )
}

function Footer() {
  return (
    <footer className="relative py-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-white/50 text-sm">© {new Date().getFullYear()} Your Name. Crafted with motion and love.</p>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-fuchsia-500/30 selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}
