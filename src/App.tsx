import Navbar from "./components/Navbar"
import Hero from "./sections/Hero"
import Showcase from "./sections/Showcase"
import Features from "./sections/Features"
import Roasts from "./sections/Roasts"
import Footer from "./components/Footer"

function App() {
  return (
    // Replaced dark canvas with the exact light-mode gray-blue background (#f8fafc)
    <div className="relative min-h-screen bg-[#f8fafc] overflow-x-hidden antialiased selection:bg-[#001f3f]/10 selection:text-[#001f3f]">
      
      {/* Decorative Subtle UI Accents that mirror your dashboard instead of harsh blobs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        {/* Soft, clean ambient contrast to make the white cards pop */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#00a896]/5 blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full bg-[#001f3f]/5 blur-[120px]" />
        
        {/* Fine background grid lines matching a professional dashboard canvas layout */}
        <div 
          className="absolute inset-0 opacity-[0.015]" 
          style={{ 
            backgroundImage: `linear-gradient(#001f3f 1px, transparent 1px), linear-gradient(to right, #001f3f 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }} 
        />
      </div>

      <Navbar />

      <main>
        <Hero />
        <Showcase />
        <Features />
        <Roasts />
      </main>

      <Footer />
    </div>
  )
}

export default App