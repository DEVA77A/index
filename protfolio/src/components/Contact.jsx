import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { profile } from '../data/content'

gsap.registerPlugin(ScrollTrigger)

export default function Contact() {
	const ref = useRef(null)
	useEffect(() => {
		const el = ref.current
		gsap.from(el.querySelectorAll('.field'), {
			opacity: 0,
			y: 20,
			stagger: 0.1,
			scrollTrigger: { trigger: el, start: 'top 85%' }
		})
	}, [])

	const CONTACT = profile.contact

	return (
		<section id="contact" ref={ref} className="section min-h-[100svh] py-24">
			<div className="max-w-6xl mx-auto px-6">
				<div className="p-6 sm:p-8 rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-white/0 backdrop-blur">
					<div className="flex items-center justify-between mb-6">
						<h2 className="text-3xl sm:text-4xl font-bold">Contact</h2>
						<div className="h-1 w-24 bg-neon/70 rounded-full shadow-glow" />
					</div>

					<div className="grid md:grid-cols-2 gap-6">
						{/* Quick links / info card */}
						<div className="p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
							<div className="text-white/80 mb-4">Let’s connect. I’m open to internships, collaborations, and interesting AI/ML projects.</div>
							<div className="flex flex-wrap items-center gap-3 text-sm">
								{CONTACT?.linkedin && (
									<a href={CONTACT.linkedin} target="_blank" rel="noreferrer" className="px-3 py-2 rounded-lg border border-neon/50 text-neon hover:bg-neon hover:text-black transition">LinkedIn</a>
								)}
								{CONTACT?.github && (
									<a href={CONTACT.github} target="_blank" rel="noreferrer" className="px-3 py-2 rounded-lg border border-neon/50 text-neon hover:bg-neon hover:text-black transition">GitHub</a>
								)}
								{CONTACT?.email && (
									<a href={`mailto:${CONTACT.email}`} className="px-3 py-2 rounded-lg border border-neon/50 text-neon hover:bg-neon hover:text-black transition">Email</a>
								)}
								{CONTACT?.phone && (
									<a href={`tel:${CONTACT.phone}`} className="px-3 py-2 rounded-lg border border-neon/50 text-neon hover:bg-neon hover:text-black transition">Call</a>
								)}
							</div>

							<div className="mt-6 space-y-2 text-white/70 text-sm">
								{CONTACT?.email && <div><span className="text-white/50">Email:</span> {CONTACT.email}</div>}
								{CONTACT?.phone && <div><span className="text-white/50">Phone:</span> {CONTACT.phone}</div>}
							</div>
						</div>

						{/* Form card */}
						<div className="p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
							<form className="space-y-4">
								<input className="field w-full px-4 py-3 rounded-xl bg-black/30 border border-neon/40 focus:border-neon outline-none text-white placeholder:text-white/40" placeholder="Your name"/>
								<input className="field w-full px-4 py-3 rounded-xl bg-black/30 border border-neon/40 focus:border-neon outline-none text-white placeholder:text-white/40" placeholder="Email" defaultValue={CONTACT?.email || ''}/>
								<textarea rows="5" className="field w-full px-4 py-3 rounded-xl bg-black/30 border border-neon/40 focus:border-neon outline-none text-white placeholder:text-white/40" placeholder="Message"/>
								<button type="button" onClick={() => {
									const tl = gsap.timeline()
									tl.to('#send-btn', { scale: 0.96, duration: 0.06 })
										.to('#send-btn', { scale: 1, duration: 0.2, ease: 'back.out(2)' })
								}} id="send-btn" className="px-6 py-3 rounded-full bg-neon text-black font-semibold shadow-glow hover:shadow-[0_0_40px_rgba(0,255,204,0.8)] transition">Send</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
