const roasts = [
  "Your eyes are drier than leftover injera. Blink, abet!",
  "Is that code or a cry for help? Look away.",
  "Even a donkey knows when to stop. Why don't you?",
  "Your eyes just filed a formal complaint with HR.",
]

export default function Roasts() {
  return (
    <section className="px-6 py-24 overflow-hidden bg-[#f8fafc]">
      <div className="max-w-5xl mx-auto mb-10">
        {/* Styled like the 'System Status' subheader tracker */}
        <p className="font-sans text-xs uppercase font-extrabold tracking-widest text-[#001f3f]/40 text-center">
          ⚡ Live From The Watcher
        </p>
      </div>

      <div className="relative">
        {/* Soft edge fading to blend the infinite marquee beautifully */}

        <div className="flex gap-6 animate-[scroll-left_30s_linear_infinite] w-max hover:[animation-play-state:paused] py-4">
          {[...roasts, ...roasts].map((text, i) => (
            <div
              key={i}
              className="flex-shrink-0 max-w-[340px] rounded-2xl bg-[#04152d] border border-[#ffffff]/10 p-6 shadow-lg relative group transition-transform duration-200 hover:-translate-y-1"
            >
              {/* Subtle top horizontal rule resembling the app design lines */}
              <div className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-red-500/40 to-transparent" />
              
              {/* Eye Accent Icon placeholder representing 'The Watcher' */}
              <div className="flex items-center gap-2 mb-3 text-red-400 font-mono text-[10px] tracking-wider uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
                THE WATCHER SAYS:
              </div>

              <p className="text-sm leading-relaxed text-slate-200 italic font-medium">
                &ldquo;{text}&rdquo;
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  )
}