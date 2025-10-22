import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { profile } from '../data/content'

gsap.registerPlugin(ScrollTrigger)

export default function Projects() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    gsap.from(el.querySelectorAll('.proj'), {
      opacity: 0,
      y: 60,
      rotateX: -10,
      transformOrigin: 'top center',
      duration: 0.8,
      stagger: 0.15,
      scrollTrigger: { trigger: el, start: 'top 75%' }
    })
  }, [])

  const handleMouse = (e) => {
    const card = e.currentTarget
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const rx = -((y / rect.height) - 0.5) * 10
    const ry = ((x / rect.width) - 0.5) * 14
    card.style.transform = `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(10px)`
  }
  const resetMouse = (e) => {
    e.currentTarget.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) translateZ(0)'
  }

  const projects = profile.projects || []

  return (
    <section id="projects" ref={ref} className="section min-h-[100svh] py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8">Projects</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <div key={i} onMouseMove={handleMouse} onMouseLeave={resetMouse}
              className="proj group p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur transition-transform will-change-transform">
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-xl font-semibold group-hover:text-neon transition-colors flex-1">{p.title}</h3>
                {p.year && (
                  <span className="shrink-0 text-xs px-2 py-1 rounded-md border border-white/15 text-white/70 bg-black/30">{p.year}</span>
                )}
              </div>
              {p.desc && <p className="mt-2 text-white/70">{p.desc}</p>}
              {Array.isArray(p.details) && p.details.length > 0 && (
                <ul className="mt-3 space-y-2 text-white/70 text-sm">
                  {p.details.map((d, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-neon/80"></span>
                      <span className="leading-snug">{d}</span>
                    </li>
                  ))}
                </ul>
              )}
              {p.tech && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span key={t} className="px-2 py-0.5 rounded-full text-xs border border-white/20 text-white/70">{t}</span>
                  ))}
                </div>
              )}
              {p.link && (
                <div className="mt-4">
                  <a href={p.link} target="_blank" rel="noreferrer" className="text-neon hover:underline">View</a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
