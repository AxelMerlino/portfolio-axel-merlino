import { useEffect, useRef, useState } from 'react'

const TOKENS = ['</>', '{}', '=>', 'const', '01', '#', ';', '[]', 'C#', '.NET']
const MAX_BITS = 12

function canTrackPointer() {
  return (
    window.matchMedia('(hover: hover) and (pointer: fine)').matches &&
    !window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )
}

export function CursorField() {
  const glowRef = useRef<HTMLDivElement>(null)
  const bitsRef = useRef<HTMLDivElement>(null)
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const fineQuery = window.matchMedia('(hover: hover) and (pointer: fine)')
    const reduceQuery = window.matchMedia('(prefers-reduced-motion: reduce)')

    const sync = () => setEnabled(canTrackPointer())
    sync()
    fineQuery.addEventListener('change', sync)
    reduceQuery.addEventListener('change', sync)

    return () => {
      fineQuery.removeEventListener('change', sync)
      reduceQuery.removeEventListener('change', sync)
    }
  }, [])

  useEffect(() => {
    if (!enabled) {
      return
    }

    const root = document.documentElement
    const target = { x: window.innerWidth * 0.72, y: window.innerHeight * 0.28 }
    const current = { x: target.x, y: target.y }
    let frame = 0
    let running = false
    let alive = 0
    let lastSpawn = 0
    let lastX = target.x
    let lastY = target.y

    const tick = () => {
      current.x += (target.x - current.x) * 0.14
      current.y += (target.y - current.y) * 0.14

      const glow = glowRef.current
      if (glow) {
        glow.style.transform = `translate3d(${current.x - 160}px, ${current.y - 160}px, 0)`
      }

      root.style.setProperty('--pointer-x', (current.x / window.innerWidth).toFixed(4))
      root.style.setProperty('--pointer-y', (current.y / window.innerHeight).toFixed(4))

      if (Math.abs(target.x - current.x) > 0.4 || Math.abs(target.y - current.y) > 0.4) {
        frame = window.requestAnimationFrame(tick)
      } else {
        running = false
      }
    }

    const kick = () => {
      if (running) {
        return
      }
      running = true
      frame = window.requestAnimationFrame(tick)
    }

    const spawn = (x: number, y: number) => {
      const layer = bitsRef.current
      if (!layer || alive >= MAX_BITS) {
        return
      }

      const bit = document.createElement('span')
      bit.className = 'code-bit'
      bit.textContent = TOKENS[Math.floor(Math.random() * TOKENS.length)] ?? ''
      bit.style.setProperty('--x', `${x + (Math.random() * 22 - 11)}px`)
      bit.style.setProperty('--y', `${y + (Math.random() * 14 - 10)}px`)
      bit.style.setProperty('--dx', `${(Math.random() * 16 - 8).toFixed(1)}px`)
      bit.style.setProperty('--dur', `${(0.55 + Math.random() * 0.4).toFixed(2)}s`)
      alive += 1
      bit.addEventListener(
        'animationend',
        () => {
          bit.remove()
          alive = Math.max(0, alive - 1)
        },
        { once: true },
      )
      layer.appendChild(bit)
    }

    const onMove = (event: PointerEvent) => {
      if (event.pointerType !== 'mouse') {
        return
      }

      target.x = event.clientX
      target.y = event.clientY

      const dist = Math.hypot(event.clientX - lastX, event.clientY - lastY)
      const now = performance.now()
      if (dist > 42 && now - lastSpawn > 130) {
        lastSpawn = now
        lastX = event.clientX
        lastY = event.clientY
        spawn(event.clientX, event.clientY)
      }

      kick()
    }

    const bitsLayer = bitsRef.current
    window.addEventListener('pointermove', onMove, { passive: true })
    kick()

    return () => {
      window.cancelAnimationFrame(frame)
      window.removeEventListener('pointermove', onMove)
      bitsLayer?.replaceChildren()
      root.style.removeProperty('--pointer-x')
      root.style.removeProperty('--pointer-y')
    }
  }, [enabled])

  if (!enabled) {
    return null
  }

  return (
    <>
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
        <div ref={glowRef} className="cursor-glow" />
      </div>
      <div ref={bitsRef} className="pointer-events-none fixed inset-0 z-30 overflow-hidden" aria-hidden="true" />
    </>
  )
}
