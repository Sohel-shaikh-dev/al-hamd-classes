import { CheckCircle2 } from 'lucide-react'

const PamphletSection = () => {
  const benefits = [
    "Expert Faculty",
    "Concept Clarity",
    "Regular Tests",
    "Result Oriented",
    "Personal Attention",
    "Small Batch Size",
    "Friendly Environment",
    "Proven Results Since 2002"
  ]

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-brand-purple mb-4">Why Students Choose AL-HAMD CLASSES</h2>
          <div className="w-32 h-2 bg-brand-yellow mx-auto rounded-full"></div>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Pamphlet Image */}
          <div className="w-full lg:w-1/2 group">
            <div className="relative">
              <div className="absolute inset-0 bg-brand-magenta rounded-[2rem] rotate-3 scale-105 opacity-10 group-hover:rotate-6 transition-transform"></div>
              <img 
                src="/Alhamd Pamplet 1.jpeg" 
                alt="AL-HAMD Pamphlet" 
                className="rounded-[2rem] shadow-2xl relative z-10 w-full hover:scale-[1.02] transition-transform duration-500 cursor-zoom-in"
              />
            </div>
          </div>

          {/* Benefits Content */}
          <div className="w-full lg:w-1/2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-4 bg-brand-cream/50 p-5 rounded-2xl border-l-4 border-brand-teal shadow-sm hover:shadow-md transition-shadow">
                  <CheckCircle2 className="text-brand-teal flex-shrink-0" size={28} />
                  <span className="text-xl font-bold text-brand-dark">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="text-center lg:text-left">
              <a 
                href="#admissions" 
                className="inline-block bg-brand-purple hover:bg-brand-magenta text-white font-bold py-5 px-12 rounded-full text-2xl shadow-xl transition-all hover:scale-105 active:scale-95 uppercase tracking-widest"
              >
                Enroll Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PamphletSection
