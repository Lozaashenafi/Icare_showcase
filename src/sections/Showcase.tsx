import video from '../../public/video.mp4'
export default function Showcase() {
  return (
    <section className="flex flex-col items-center px-6 py-24 bg-[#f8fafc]">
      <div className="w-full max-w-4xl mx-auto">
        
        {/* Main Application Window Framing mimicking the iCARE client wrapper */}
        <div className="bg-white rounded-2xl border border-[#e2e8f0] shadow-xl overflow-hidden">
          
          {/* Mock Window Top Bar Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-[#e2e8f0] bg-slate-50/50">
            <div className="flex items-center gap-3">
              <div className="bg-[#001f3f] text-white px-2.5 py-1 rounded-md text-xs font-black italic tracking-wider">I</div>
              <span className="font-sans text-xs font-black tracking-wider text-[#001f3f] uppercase">CARE &bull; LIVE VIEW</span>
            </div>
            
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#00a896]" />
              <span className="text-[10px] font-extrabold text-[#00a896] uppercase tracking-wider">
                Active & Watching
              </span>
            </div>
          </div>

          {/* Video Container Styled to look identical to "The Watcher" layout popup */}
          <div className="p-6 bg-[#f8fafc]">
            <div className="relative rounded-2xl border border-transparent overflow-hidden shadow-2xl bg-[#04152d] aspect-video flex items-center justify-center">
              
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover opacity-90 mix-blend-screen"
              >
                <source src={video} type="video/mp4" />
              </video>

              {/* Crisp App Scanlines */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  backgroundImage:
                    "",
                }}
              />

              {/* REC Badge Layout matching your exact component position */}
              <div className="absolute top-6 left-6 bg-[#04152d]/60 backdrop-blur-sm px-3 py-1.5 rounded-md border border-white/5 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse shadow-[0_0_10px_rgba(239,68,68,0.8)]" />
                <span className="text-[10px] font-extrabold text-white uppercase tracking-widest">
                  REC
                </span>
              </div>
              
              {/* Subtle design element overlay mimicking the overlay close indicator cross */}
              <div className="absolute top-6 right-6 text-white/20 text-xs font-bold pointer-events-none">
                &times;
              </div>
            </div>
          </div>

          {/* App Window Bottom Status Footer */}
          <div className="flex items-center justify-between px-6 py-3 border-t border-[#e2e8f0] bg-slate-50/50 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
            <span>ICARE V1.0.4</span>
            <div className="flex items-center gap-4">
              <span>MODE: <span className="text-[#001f3f]">LIGHT</span></span>
              <span>• ENGINE ONLINE</span>
            </div>
          </div>

        </div>

        {/* Lower Warning Subtitle Text */}
        <p className="mt-6 text-center text-xs font-extrabold tracking-widest text-[#001f3f]/40 uppercase">
          ⚠️ "Think of this as a hug for your eyeballs. Go on, look away."
        </p>
      </div>
    </section>
  )
}