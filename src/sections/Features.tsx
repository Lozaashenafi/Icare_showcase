import { Eye, BarChart3, Moon } from "lucide-react"

const features = [
  {
    title: "Smart Eye Lockout",
    description:
      "ICare creates an invisible wall around your screen and freezes your PC until you step away. No snooze, no skip — your eyes will thank you later.",
    icon: Eye, // Swapped to match "Smart Eye" from your sidebar
    large: true,
  },
  {
    title: "Savage Analytics",
    description:
      "Track streaks, success rates, and earn badges. The data doesn't lie, and neither does ICare.",
    icon: BarChart3, // Swapped to match "Statistics"
  },
  {
    title: "Developer Moods",
    description:
      "Black Mood and Light Mood — two themes built for long hours in code-heavy environments. Your eyes, your rules.",
    icon: Moon, // Swapped to match "Black Mood"
  },
]

export default function Features() {
  return (
    <section className="px-6 py-24 bg-[#f8fafc]">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((f) => {
          const Icon = f.icon
          
          return (
            <div
              key={f.title}
              className={`transition-all duration-300 rounded-2xl border ${
                f.large 
                  ? "md:col-span-2 md:row-span-2 p-8 bg-[#04152d] text-white border-transparent shadow-xl relative overflow-hidden" 
                  : "p-6 bg-white text-[#001f3f] border-[#e2e8f0] hover:border-[#001f3f]"
              }`}
            >
              {/* Decorative Subtle Scanlines / UI border touch on the large feature card to match 'The Watcher' look */}
              {f.large && (
                <div className="absolute top-4 right-4 text-[10px] uppercase font-mono tracking-widest text-red-500 bg-red-500/10 px-2 py-0.5 rounded flex items-center gap-1.5 font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
                  REC
                </div>
              )}

              {/* Icon Container styling based on card type */}
              <div className={`w-fit p-3 rounded-xl mb-6 ${
                f.large ? "bg-white/10 text-white" : "bg-[#001f3f]/5 text-[#001f3f]"
              }`}>
                <Icon className="w-5 h-5" />
              </div>

              {/* Header */}
              <h3 className={`font-sans text-xl font-bold uppercase tracking-wide mb-3 ${
                f.large ? "text-white" : "text-[#001f3f]"
              }`}>
                {f.title}
              </h3>

              {/* Description */}
              <p className={`text-sm leading-relaxed ${
                f.large ? "text-slate-300 italic" : "text-slate-500 font-medium"
              }`}>
                {f.large ? `"${f.description}"` : f.description}
              </p>
            </div>
          )
        })}
      </div>
    </section>
  )
}