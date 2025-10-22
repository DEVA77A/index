import React, { useEffect, useRef } from 'react'

export default function CursorTrail() {
	const canvasRef = useRef(null)
	useEffect(() => {
		const canvas = canvasRef.current
		const ctx = canvas.getContext('2d', { alpha: true })

		let width = canvas.width = window.innerWidth
		let height = canvas.height = window.innerHeight

		const dpr = Math.min(window.devicePixelRatio || 1, 2)
		canvas.width = width * dpr
		canvas.height = height * dpr
		ctx.scale(dpr, dpr)

		const particles = []
		const max = 40

		function addParticle(x, y) {
			particles.push({ x, y, alpha: 1, r: 3 + Math.random()*2, vx: (Math.random()-0.5)*0.6, vy: (Math.random()-0.5)*0.6 })
			if (particles.length > max) particles.shift()
		}

		function draw() {
			ctx.clearRect(0, 0, width, height)
			for (const p of particles) {
				p.x += p.vx; p.y += p.vy; p.alpha *= 0.96
				ctx.beginPath()
				ctx.arc(p.x, p.y, p.r, 0, Math.PI*2)
				ctx.fillStyle = `rgba(0,255,204,${p.alpha})`
				ctx.shadowColor = 'rgba(0,255,204,0.8)'
				ctx.shadowBlur = 10
				ctx.fill()
			}
			requestAnimationFrame(draw)
		}
		draw()

		function onMove(e) {
			const x = e.clientX; const y = e.clientY
			for (let i=0;i<2;i++) addParticle(x, y)
		}

		function onResize() {
			width = canvas.width = window.innerWidth
			height = canvas.height = window.innerHeight
		}

		window.addEventListener('pointermove', onMove)
		window.addEventListener('resize', onResize)
		return () => {
			window.removeEventListener('pointermove', onMove)
			window.removeEventListener('resize', onResize)
		}
	}, [])

	return <canvas id="cursor-canvas" ref={canvasRef} />
}
