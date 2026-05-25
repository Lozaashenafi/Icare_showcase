export default function Footer() {
  return (
    <footer className="border-t border-[#e2e8f0] bg-white px-6 py-8">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Left Side: Copyright styled like the app version tracking format */}
        <p className="font-sans text-[10px] font-bold text-slate-400 uppercase tracking-wider">
          &copy; {new Date().getFullYear()} ICARE v1.0.4 &bull; ALL RIGHTS RESERVED
        </p>
        
        {/* Right Side: Status context elements modeled from your footer settings */}
        <div className="flex items-center gap-4 font-sans text-[10px] font-bold text-slate-400 uppercase tracking-wider">
          <p>
            MODE: <span className="text-[#001f3f]">LIGHT</span>
          </p>
          <span>&bull;</span>
          <p className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00a896]" />
            ENGINE ONLINE
          </p>
        </div>

      </div>
    </footer>
  )
}