import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { profile } from '../data/content'

gsap.registerPlugin(ScrollTrigger)

export default function About() {
	const ref = useRef(null)
	useEffect(() => {
		const el = ref.current
		gsap.from(el.querySelectorAll('.card'), {
			opacity: 0,
			y: 40,
			duration: 0.8,
			stagger: 0.1,
			scrollTrigger: {
				trigger: el,
				start: 'top 80%'
			}
		})
	}, [])

	return (
		<section id="about" ref={ref} className="section min-h-[100svh] py-24">
			<div className="max-w-6xl mx-auto px-6">
				<h2 className="text-3xl sm:text-4xl font-bold mb-8">About Me</h2>
				<div className="grid md:grid-cols-2 gap-6">
					<div className="card p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur">
						<p className="text-white/80">
							I’m <span className="text-neon">{profile.name}</span>, {profile.title}. {profile.summary}
						</p>
						<div className="mt-4 text-white/70">
							{profile.education?.map((e, i) => (
								<div key={i} className="flex items-center gap-2">
									<span className="text-neon">•</span>
									<span>{e.degree} — {e.college}{e.year ? ` (${e.year})` : ''}</span>
								</div>
							))}
						</div>
					</div>
					<div className="card p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur">
						<h3 className="font-semibold text-white/90 mb-3">Quick Highlights</h3>
						<ul className="list-disc list-inside text-white/70 space-y-1">
							<li>Strong foundation in Python and core ML</li>
							<li>Hands-on with DL, CV, and deployment basics</li>
							<li>Frontend experience with React + Tailwind</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	)
}
