import { useState, useEffect } from 'react'
import { Trophy, Star, ChevronLeft, ChevronRight } from 'lucide-react'

const Results = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Real Result Banners uploaded by the admin
  const results = [
    { src: "/WhatsApp Image 2026-04-28 at 9.08.00 PM (3).jpeg", alt: "Outstanding Result 1" },
    { src: "/WhatsApp Image 2026-04-28 at 9.08.01 PM.jpeg", alt: "Outstanding Result 2" },
    { src: "/WhatsApp Image 2026-04-28 at 9.08.01 PM (1).jpeg", alt: "Outstanding Result 3" },
    { src: "/WhatsApp Image 2026-04-28 at 9.08.01 PM (2).jpeg", alt: "Outstanding Result 4" },
    { src: "/WhatsApp Image 2026-04-28 at 9.08.04 PM.jpeg", alt: "Outstanding Result 5" },
    { src: "/WhatsApp Image 2026-04-28 at 9.08.05 PM.jpeg", alt: "Outstanding Result 6" },
    { src: "/WhatsApp Image 2026-04-28 at 9.08.11 PM (1).jpeg", alt: "Outstanding Result 7" }
  ]

  // Auto-slide every 2.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % results.length)
    }, 2500)
    return () => clearInterval(timer)
  }, [results.length])

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % results.length)
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + results.length) % results.length)

  return (
    <section className="py-24 bg-gradient-to-b from-white to-brand-cream/30 overflow-hidden" id="results">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Trophy className="text-brand-yellow" size={40} />
            <h2 className="text-4xl md:text-6xl font-bold text-brand-purple uppercase tracking-tight">Hall of Fame</h2>
            <Trophy className="text-brand-yellow" size={40} />
          </div>
          <div className="w-32 h-2 bg-brand-yellow mx-auto rounded-full"></div>
          <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-medium">
            Celebrating the outstanding academic achievements and top scores of our dedicated students.
          </p>
        </div>

        {/* Auto-Slider Carousel */}
        <div className="max-w-4xl mx-auto relative group">
          <div className="bg-[#FFFAF4] rounded-[2.5rem] p-4 md:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.08)] border-4 border-white flex flex-col items-center relative overflow-hidden transition-all duration-500 hover:shadow-[0_30px_60px_rgba(0,0,0,0.12)]">
            
            {/* Soft background glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-yellow/10 to-transparent pointer-events-none"></div>

            {/* Top decorative pins/stars */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-brand-yellow to-[#FFD700] text-brand-purple p-3.5 rounded-full shadow-[0_4px_20px_rgba(255,215,0,0.4)] z-30 ring-4 ring-white">
              <Star size={32} className="fill-current animate-pulse" />
            </div>

            {/* Image Container */}
            <div className="w-full h-[400px] md:h-[550px] relative rounded-[2rem] overflow-hidden bg-white flex items-center justify-center border border-gray-100/50 shadow-inner z-10">
              {results.map((res, index) => (
                <div 
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ease-in-out flex items-center justify-center ${
                    index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                  }`}
                >
                  <img 
                    src={res.src} 
                    alt={res.alt} 
                    className="max-w-full max-h-full object-contain p-2 md:p-4 drop-shadow-2xl"
                  />
                </div>
              ))}
            </div>
            
            {/* Navigation Buttons (appear on hover) */}
            <button 
              onClick={prevSlide}
              className="absolute left-2 md:-left-6 top-1/2 -translate-y-1/2 bg-white text-brand-purple p-4 rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.12)] opacity-0 group-hover:opacity-100 transition-all z-30 hover:scale-110 hover:bg-brand-yellow hover:text-brand-dark"
            >
              <ChevronLeft size={28} />
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-2 md:-right-6 top-1/2 -translate-y-1/2 bg-white text-brand-purple p-4 rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.12)] opacity-0 group-hover:opacity-100 transition-all z-30 hover:scale-110 hover:bg-brand-yellow hover:text-brand-dark"
            >
              <ChevronRight size={28} />
            </button>
            
            {/* Dots indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-30 bg-black/30 px-4 py-2.5 rounded-full backdrop-blur-md shadow-lg border border-white/20">
              {results.map((_, index) => (
                <button 
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2.5 rounded-full transition-all duration-300 shadow-sm ${
                    index === currentIndex ? "bg-brand-yellow w-10" : "bg-white/70 hover:bg-white w-2.5"
                  }`}
                />
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Results
