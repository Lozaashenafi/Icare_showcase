import { motion } from "framer-motion"
import {  Zap, MessageSquareQuote, MonitorOff } from "lucide-react"

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
}

const childVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

const platforms = [
  { name: "WINDOWS", ext: ".exe", icon: "🪟" },
  { name: "MAC", ext: ".zip", icon: "🍎" },
  { name: "LINUX", ext: ".AppImage", icon: "🐧" },
]

export default function Hero() {
  return (
    <section id="hero" className="relative flex flex-col items-center justify-center min-h-[90vh] px-6 pb-20 pt-32 bg-white">
      {/* Background Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#002147]/5 blur-[120px] rounded-full" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto text-center"
      >
        {/* Status Pill */}
        <motion.div variants={childVariants} className="flex justify-center mb-8">
          <span className="flex items-center gap-2 text-[10px] font-black tracking-[0.2em] text-[#002147] uppercase bg-[#002147]/5 border border-[#002147]/10 px-4 py-1.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00E5C3] animate-pulse" />
            System Active & Watching
          </span>
        </motion.div>

        {/* Improved Headline */}
        <motion.h1
          variants={childVariants}
          className="font-sans text-5xl md:text-7xl font-black text-[#002147] uppercase tracking-tighter leading-[0.95]"
        >
          Your eyes are failing. <br />
          <span className="italic text-[#7C5CFC] font-serif lowercase">ICare actually helps.</span>
        </motion.h1>

        {/* More Descriptive Paragraph */}
        <motion.p
          variants={childVariants}
          className="mt-8 text-base md:text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed font-medium"
        >
          ICare enforces the <span className="text-[#002147] font-bold">20-20-20 rule</span> by monitoring your screen time and 
          playfully roasting your lack of discipline. From sarcastic reminders to a 
          <span className="text-[#002147] font-bold"> full-screen stealth lockout</span>, we ensure you look 20ft away 
          before your vision becomes a memory.
        </motion.p>

        {/* Feature Highlights - Helps understanding */}
        <motion.div 
          variants={childVariants}
          className="mt-10 flex flex-wrap justify-center gap-3"
        >
          <FeaturePill icon={<MonitorOff size={14} />} text="Forced Lockout" />
          <FeaturePill icon={<MessageSquareQuote size={14} />} text="Savage Roasts" />
          <FeaturePill icon={<Zap size={14} />} text="Health Analytics" />
        </motion.div>

        {/* Download Buttons */}
        <motion.div
          variants={childVariants}
          className="mt-12 flex flex-wrap justify-center gap-4"
        >
          {platforms.map((p, index) => (
            <button
              key={p.name}
              className={`group flex items-center gap-3 px-8 py-4 rounded-2xl font-black text-[10px] tracking-[0.2em] transition-all duration-300 border
                ${index === 0 
                  ? "bg-[#002147] text-white border-[#002147] hover:scale-105 shadow-xl shadow-[#002147]/20" 
                  : "bg-white text-[#002147] border-[#E2E8F0] hover:border-[#002147] hover:bg-slate-50"
                }`}
            >
              <span className="text-base">{p.icon}</span>
              <div className="flex items-baseline gap-1.5">
                <span>{p.name}</span>
                <span className="opacity-40 font-normal">{p.ext}</span>
              </div>
            </button>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

function FeaturePill({ icon, text }: { icon: any, text: string }) {
  return (
    <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 border border-slate-100 rounded-xl text-slate-600 font-bold text-[11px] uppercase tracking-wider transition-colors hover:border-[#002147]/20">
      <span className="text-[#002147]">{icon}</span>
      {text}
    </div>
  )
}