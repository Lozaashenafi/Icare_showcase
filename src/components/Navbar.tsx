import { useState, useEffect } from "react"
import { Star } from "lucide-react"

export default function Navbar() {
  const [stars, setStars] = useState(null)

  useEffect(() => {
    // Fetching repository data from GitHub's public API
    fetch("https://api.github.com/repos/Lozaashenafi/ICare")
      .then((res) => res.json())
      .then((data) => {
        if (data.stargazers_count !== undefined) {
          setStars(data.stargazers_count)
        }
      })
      .catch((err) => console.error("Error fetching stars:", err))
  }, [])

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/70 border-b border-[#e2e8f0]">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-6 h-16">
        
        {/* Brand Logo Match - mimicking the sidebar 'I' block icon logo */}
        <a
          href="#hero"
          className="flex items-center gap-2 group"
        >
          <div className="bg-[#001f3f] text-white px-3 py-1 rounded-lg text-sm font-black italic tracking-wider shadow-sm group-hover:bg-[#002f5f] transition-colors">
            I
          </div>
          <span className="font-sans text-sm font-black tracking-wider text-[#001f3f] uppercase">
            CARE
          </span>
        </a>

        {/* GitHub Star Button - Styled like the 'Pause Timer' clean secondary variant */}
        <a
      href="https://github.com/Lozaashenafi/ICare.git"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-white text-[#001f3f] border border-[#e2e8f0] text-xs font-extrabold uppercase tracking-wider transition-all duration-200 hover:border-[#001f3f] hover:bg-slate-50 shadow-sm group"
    >
      <div className="flex items-center gap-1.5">
        <Star className="w-3.5 h-3.5 text-[#001f3f] fill-[#001f3f]/10 group-hover:fill-amber-400 group-hover:text-amber-500 transition-colors" />
        <span>Star on GitHub</span>
      </div>

      {/* Live Star Count Badge - Separated by a clean app border line */}
      {stars !== null && (
        <div className="flex items-center pl-2 border-l border-[#e2e8f0] h-4 font-mono text-[#001f3f]/70 text-[11px]">
          {stars}
        </div>
      )}
    </a>
      </div>
    </nav>
  )
}