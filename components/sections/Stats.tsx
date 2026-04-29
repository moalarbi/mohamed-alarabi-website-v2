'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

const stats = [
  { value: 5, suffix: '+', label: 'سنوات خبرة في السوق السعودي', description: 'من 2019 إلى اليوم' },
  { value: 50, suffix: '+', label: 'متجر إلكتروني ناجح', description: 'سلة وزد وشوبيفاي' },
  { value: 300, suffix: '%', label: 'متوسط نمو المبيعات', description: 'خلال أول 90 يوم' },
  { value: 1200, suffix: '+', label: 'متدرب استفاد', description: 'من كورساتنا وورش العمل' },
]

function Counter({ value, suffix, duration = 2 }: { value: number; suffix: string; duration?: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return
    let startTime: number
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)
      const eased = 1 - Math.pow(1 - progress, 3) // cubic ease-out
      setCount(Math.floor(eased * value))
      if (progress < 1) requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)
  }, [isInView, value, duration])

  return (
    <span ref={ref}>
      {count.toLocaleString('ar-SA')}
      {suffix}
    </span>
  )
}

export default function Stats() {
  return (
    <section className="py-20 bg-navy relative overflow-hidden">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }}
      />
      <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full opacity-10"
        style={{ background: 'radial-gradient(circle, #C5A059 0%, transparent 70%)' }} />

      <div className="container-max px-4 md:px-8 lg:px-16 relative">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            أرقام تتحدث عن نفسها
          </h2>
          <div className="w-16 h-1 bg-gold rounded-full mx-auto" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="text-center"
            >
              <p className="text-4xl md:text-5xl lg:text-6xl font-black text-gold mb-2">
                <Counter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-white font-semibold text-lg mb-1">{stat.label}</p>
              <p className="text-white/50 text-sm">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
