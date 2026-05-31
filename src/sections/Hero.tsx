'use client'

import { useState } from "react"
import { motion, AnimatePresence, Variants } from "framer-motion"
import { 
  Zap, 
  MessageSquareQuote, 
  MonitorOff, 
  X, 
  Terminal, 
  ShieldAlert, 
  Check,
  MousePointerClick 
} from "lucide-react"

const containerVariants: Variants = {
  hidden: {},
  visible: { 
    transition: { 
      staggerChildren: 0.1, 
      delayChildren: 0.2 
    } 
  },
}

const childVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { 
      duration: 0.6, 
      ease: [0.22, 1, 0.36, 1] // Now works because variants are explicitly typed
    },
  },
}
const platforms = [
  {
    name: "WINDOWS",
    ext: ".exe",
    icon: "🪟",
    file: "https://github.com/Lozaashenafi/Icare_showcase/releases/download/v1.0.0/ICare%20Setup%201.0.0.exe"
  },
  {
    name: "LINUX (UBUNTU)",
    ext: ".deb",
    icon: "🐧",
    file: "https://github.com/Lozaashenafi/Icare_showcase/releases/download/v1.0.0/icare_1.0.0_amd64.deb",
    needsGuide: true
  }
]


export default function Hero() {
  const [showLinuxGuide, setShowLinuxGuide] = useState(false)

  return (
    <section id="hero" className="relative flex flex-col items-center justify-center min-h-[90vh] px-6 pb-20 pt-32 bg-white overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#002147]/5 blur-[120px] rounded-full" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto text-center"
      >
        <motion.div variants={childVariants} className="flex justify-center mb-8">
          <span className="flex items-center gap-2 text-[10px] font-black tracking-[0.2em] text-[#002147] uppercase bg-[#002147]/5 border border-[#002147]/10 px-4 py-1.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00E5C3] animate-pulse" />
            System Active & Watching
          </span>
        </motion.div>

        <motion.h1
          variants={childVariants}
          className="font-sans text-5xl md:text-7xl font-black text-[#002147] uppercase tracking-tighter leading-[0.95]"
        >
          Your eyes are failing. <br />
          <span className="italic text-[#667a91] font-serif lowercase">ICare actually helps.</span>
        </motion.h1>

        <motion.p
          variants={childVariants}
          className="mt-8 text-base md:text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed font-medium"
        >
          ICare enforces the <span className="text-[#002147] font-bold">20-20-20 rule</span>. 
          From sarcastic roasts to <span className="text-[#002147] font-bold">full-screen lockouts</span>, 
          we ensure you look 20ft away before your vision becomes a memory.
        </motion.p>

        <motion.div variants={childVariants} className="mt-10 flex flex-wrap justify-center gap-3">
          <FeaturePill icon={<MonitorOff size={14} />} text="Forced Lockout" />
          <FeaturePill icon={<MessageSquareQuote size={14} />} text="Savage Roasts" />
          <FeaturePill icon={<Zap size={14} />} text="Health Analytics" />
        </motion.div>

        <motion.div variants={childVariants} className="mt-12 flex flex-wrap justify-center gap-4">
          {platforms.map((p, index) => (
            <a
              key={p.name}
              href={p.file}
              download
              onClick={() => {
                if (p.needsGuide) setShowLinuxGuide(true)
              }}
              className={`group flex items-center gap-3 px-8 py-4 rounded-2xl font-black text-[10px] tracking-[0.2em] transition-all duration-300 border no-underline
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
            </a>
          ))}
        </motion.div>
      </motion.div>

      {/* --- Linux Setup Modal --- */}
      <AnimatePresence>
        {showLinuxGuide && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-[#002147]/60 backdrop-blur-md">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative max-w-xl w-full bg-white rounded-[32px] p-8 shadow-2xl border border-slate-100"
            >
              <button 
                onClick={() => setShowLinuxGuide(false)}
                className="absolute top-6 right-6 p-2 text-slate-400 hover:text-slate-900 transition-colors"
              >
                <X size={20} />
              </button>

              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-blue-50 rounded-2xl text-[#002147]">
                  <ShieldAlert size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-black text-[#002147] uppercase tracking-tighter">Ubuntu / Debian Setup</h3>
                  <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">Follow this to add ICare to your app list</p>
                </div>
              </div>

              <div className="space-y-6">
                <Step 
                  number="01" 
                  title="Right-Click & Install" 
                  icon={<MousePointerClick size={16} />}
                  desc="Don't just double-click (it might just extract). Right-click the file and select 'Open With Software Install' or 'App Center'."
                />
                <Step 
                  number="02" 
                  title="Terminal Method (Reliable)" 
                  icon={<Terminal size={16} />}
                  desc="If the GUI fails, use the terminal to force a proper system installation. This ensures the icon appears in your menu."
                  cmd={`sudo apt install ./icare_1.0.0_amd64.deb`}
                />
                <Step 
                  number="03" 
                  title="Launch Surveillance" 
                  desc="Search for 'ICare' in your Applications menu. Unlike your eyesight, this install should be crystal clear."
                />
              </div>

              <button 
                onClick={() => setShowLinuxGuide(false)}
                className="mt-10 w-full bg-[#002147] text-white py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-[10px] hover:bg-black transition-all"
              >
                Got it, install the watcher
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}

function FeaturePill({ icon, text }: { icon: React.ReactNode, text: string }) {
  return (
    <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 border border-slate-100 rounded-xl text-slate-600 font-bold text-[11px] uppercase tracking-wider transition-colors hover:border-[#002147]/20">
      <span className="text-[#002147]">{icon}</span>
      {text}
    </div>
  )
}

function Step({ number, title, desc, cmd, icon }: { number: string, title: string, desc: string, cmd?: string, icon?: React.ReactNode }) {
  const [copied, setCopied] = useState(false)

  const copy = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="flex gap-4">
      <span className="text-xs font-black text-slate-300 pt-1 tracking-tighter">{number}</span>
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          {icon && <span className="text-[#002147]">{icon}</span>}
          <h4 className="text-sm font-bold text-[#002147] uppercase tracking-tight">{title}</h4>
        </div>
        <p className="text-[11px] text-slate-500 leading-relaxed mb-3">{desc}</p>
        {cmd && (
          <div 
            onClick={() => copy(cmd)}
            className="group relative flex items-center justify-between bg-slate-50 border border-slate-100 p-3 rounded-xl cursor-pointer hover:border-[#002147]/20 transition-all"
          >
            <code className="text-[10px] font-mono text-[#002147] font-bold truncate pr-4">{cmd}</code>
            <div className="text-slate-400 group-hover:text-[#002147] shrink-0">
              {copied ? <Check size={14} className="text-emerald-500" /> : <Terminal size={14} />}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}