import { Users, User, BookOpen, IndianRupee, ClipboardCheck, Trophy, ShieldCheck, ExternalLink, ChevronLeft, ChevronRight, Phone, Award } from 'lucide-react'

const GoogleG = ({ className = "w-12 h-12" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
    <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
    <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
    <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
    <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
  </svg>
)

const LaurelRight = () => (
  <svg width="24" height="36" viewBox="0 0 24 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 2C10 8 18 15 12 28C18 20 18 10 5 2Z" fill="#FBBF24"/>
    <path d="M3 10C8 14 14 20 8 32C14 24 12 14 3 10Z" fill="#FBBF24"/>
  </svg>
)

const LaurelLeft = () => (
  <svg width="24" height="36" viewBox="0 0 24 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform scale-x-[-1]">
    <path d="M5 2C10 8 18 15 12 28C18 20 18 10 5 2Z" fill="#FBBF24"/>
    <path d="M3 10C8 14 14 20 8 32C14 24 12 14 3 10Z" fill="#FBBF24"/>
  </svg>
)

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <Users size={28} className="text-brand-purple" />,
      title: "EXPERIENCED TEACHERS",
      desc: "Expert guidance from educators who deeply understand student needs.",
      bg: "bg-brand-purple/10"
    },
    {
      icon: <User size={28} className="text-brand-red" />,
      title: "PERSONAL ATTENTION",
      desc: "Small batches ensuring focus on every single student's progress.",
      bg: "bg-brand-red/10"
    },
    {
      icon: <ClipboardCheck size={28} className="text-brand-yellow" />,
      title: "REGULAR TESTS",
      desc: "Consistent assessment to rigorously track and improve performance.",
      bg: "bg-brand-yellow/20"
    },
    {
      icon: <BookOpen size={28} className="text-brand-purple" />,
      title: "CONCEPT CLARITY",
      desc: "We focus on understanding core concepts rather than memorization.",
      bg: "bg-brand-purple/10"
    },
    {
      icon: <IndianRupee size={28} className="text-brand-red" />,
      title: "AFFORDABLE FEES",
      desc: "Premium quality education made accessible for everyone.",
      bg: "bg-brand-red/10"
    },
    {
      icon: <Trophy size={28} className="text-brand-purple" />,
      title: "LEGACY SINCE 2002",
      desc: "Over two decades of proven academic success in Bandra East.",
      bg: "bg-brand-purple/10"
    }
  ]

  const reviews = [
    { name: "Farhan Ansari", initial: "F", bg: "bg-brand-red", text: "AL-HAMD classes not only best and best but also ladder to success. Study is the only way to complete your life dreams and reaching the hights." },
    { name: "Yasmin Khan", initial: "Y", bg: "bg-brand-purple", text: "It was a very great experience to learn n to enhance my self with the great & amazing teachers, they actually work on every student." },
    { name: "Shaikh Nasiha", initial: "S", bg: "bg-brand-red", text: "They are doing amazing work to get their students excellent achievement. Experienced Teachers they have, regular test, feedback, HW, and other academic stuff is very helpful." },
    { name: "Mazna Shaikh", initial: "M", bg: "bg-brand-purple", text: "Alhamd classes is very well experienced and having a excellent teachers .this is a right decision to take admission in this classes. Everything is enjoyable and good." }
  ]

  return (
    <section className="py-20 bg-[#FFFAF5]" id="why-choose-us">
      <div className="container mx-auto px-6">
        
        {/* Top Header & Grid Section */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 mb-12">
          
          {/* Left: Titles */}
          <div className="w-full lg:w-[40%] flex flex-col justify-center">
            <div className="flex items-center gap-2 text-brand-red font-bold text-sm tracking-wider uppercase mb-6 bg-brand-red/10 w-fit px-4 py-2 rounded-full border border-brand-red/20">
              <Award size={18} /> WHY PEOPLE TRUST US
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-brand-purple mb-6 leading-[1.1] uppercase tracking-tight">
              WHY PEOPLE TRUST <br />
              <span className="text-brand-red">AL-HAMD CLASSES</span>
            </h2>
            <div className="w-16 h-1.5 bg-brand-yellow mb-8 rounded-full"></div>
            
            <p className="text-lg md:text-xl text-brand-dark/80 leading-relaxed font-medium">
              We provide more than just tuitions; we build a foundation for lifelong academic success through care, discipline, and consistency.
            </p>
          </div>

          {/* Right: Feature Grid */}
          <div className="w-full lg:w-[60%] grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
            {reasons.map((reason, index) => (
              <div 
                key={index} 
                className="bg-white p-4 sm:p-5 rounded-2xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-50 flex flex-col gap-3 sm:gap-4 hover:-translate-y-1 transition-transform"
              >
                <div className="flex items-center">
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 ${reason.bg} rounded-full flex items-center justify-center shrink-0`}>
                    {reason.icon}
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-brand-purple text-[13px] sm:text-base leading-tight mb-1.5 sm:mb-2">{reason.title}</h3>
                  <p className="text-gray-600 text-[11px] sm:text-[13px] leading-snug sm:leading-relaxed">{reason.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Google Review Banner */}
        <div className="bg-white rounded-[2rem] border-l-[12px] border-l-brand-yellow shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col md:flex-row items-center justify-between p-6 md:px-10 md:py-8 gap-8 mb-20 relative overflow-hidden">
          <div className="absolute inset-0 border border-gray-100 rounded-[2rem] pointer-events-none"></div>
          
          {/* Rating */}
          <div className="flex items-center gap-6 shrink-0 z-10">
            <GoogleG />
            <div className="flex flex-col">
              <div className="flex items-center gap-4">
                <span className="text-4xl font-bold text-brand-dark">4.9</span>
                <div className="flex text-brand-yellow gap-1">
                  {"★★★★★".split('').map((star, i) => <span key={i} className="text-xl">{star}</span>)}
                </div>
              </div>
              <span className="text-brand-purple font-bold text-lg leading-tight">Google Rating</span>
              <span className="text-gray-500 text-sm">Based on 68+ Reviews</span>
            </div>
          </div>

          {/* Shield Trust */}
          <div className="flex items-center gap-4 shrink-0 z-10 border-t md:border-t-0 md:border-l border-gray-100 pt-6 md:pt-0 md:pl-10">
            <div className="bg-brand-purple/10 p-3 rounded-full">
              <ShieldCheck className="text-brand-purple" size={32} />
            </div>
            <p className="font-bold text-brand-dark max-w-[200px] leading-snug">
              Trusted by Students, Parents & Well Wishers in Bandra East
            </p>
          </div>

          {/* Button */}
          <div className="flex flex-col items-center gap-2 shrink-0 z-10 w-full md:w-auto">
            <a 
              href="https://www.google.com/search?sca_esv=53836d9b32ba3aab&rlz=1C1ONGR_enIN1192IN1192&sxsrf=ANbL-n6UhbYcO62hYX_WL9ymeNVo2ZH-iw:1778940833590&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qObBxEcSjBYwikC5NuwBUhc6Y-PoeMWgeFvnt9DKqBnDkPEqndKZeI8BMaXZDRMms-dkNHaDpIQrA11RoY5ZtWBjuvKHP&q=AL-HAMD+CLASSES+Reviews&sa=X&ved=2ahUKEwiat9mD_72UAxVzevUHHSC-D78Q0bkNegQIKhAF&biw=1536&bih=738&dpr=1.25" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-full md:w-auto bg-[#1A0B2E] text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-brand-purple transition-colors shadow-lg"
            >
              <span className="text-xl">★</span> SEE ALL GOOGLE REVIEWS <ExternalLink size={18} />
            </a>
            <div className="flex items-center gap-2 text-sm text-gray-500 font-medium">
              on <span className="font-bold text-brand-dark">Google</span> <GoogleG className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* Testimonials Carousel Section */}
        <div className="flex flex-col items-center mb-16 relative">
          <div className="flex items-center justify-center gap-4 mb-10 w-full">
            <LaurelLeft />
            <h3 className="text-2xl md:text-3xl font-bold text-brand-purple text-center uppercase">
              WHAT PEOPLE SAY ABOUT <span className="text-brand-red">AL-HAMD CLASSES</span>
            </h3>
            <LaurelRight />
          </div>

          {/* Carousel Arrows */}
          <button className="hidden md:flex absolute left-0 top-[60%] -translate-y-1/2 -translate-x-4 bg-[#1A0B2E] text-white p-3 rounded-full shadow-xl hover:scale-110 transition-transform z-20">
            <ChevronLeft size={24} />
          </button>
          
          <button className="hidden md:flex absolute right-0 top-[60%] -translate-y-1/2 translate-x-4 bg-[#1A0B2E] text-white p-3 rounded-full shadow-xl hover:scale-110 transition-transform z-20">
            <ChevronRight size={24} />
          </button>

          {/* Reviews Grid (Acts like a carousel strip) */}
          <div className="w-full overflow-x-auto pb-8 px-4 -mx-4 md:px-0 md:mx-0 snap-x snap-mandatory" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            <style>{`
              .w-full.overflow-x-auto::-webkit-scrollbar {
                display: none;
              }
            `}</style>
            <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 min-w-max md:min-w-0 px-2 md:px-0">
              {reviews.map((review, i) => (
                <div key={i} className="snap-center bg-white p-6 rounded-2xl shadow-[0_4px_20px_rgb(0,0,0,0.04)] border border-gray-50 flex flex-col relative overflow-hidden w-[300px] md:w-auto shrink-0 transition-transform hover:-translate-y-1">
                  
                  {/* Quote Watermark */}
                  <div className="absolute -bottom-6 -right-2 text-gray-50 select-none">
                    <span className="text-[120px] font-serif leading-none">"</span>
                  </div>

                  <div className="flex justify-between items-start mb-4 relative z-10">
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 rounded-full ${review.bg} text-white flex items-center justify-center font-bold text-xl`}>
                        {review.initial}
                      </div>
                      <div className="flex flex-col">
                        <span className="font-bold text-brand-purple leading-tight">{review.name}</span>
                      </div>
                    </div>
                    <GoogleG className="w-6 h-6 shrink-0" />
                  </div>
                  
                  <div className="flex text-brand-yellow gap-1 mb-4 relative z-10">
                    {"★★★★★".split('').map((star, idx) => <span key={idx}>{star}</span>)}
                  </div>
                  
                  <p className="text-gray-700 text-[14px] leading-relaxed relative z-10">
                    {review.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Dots */}
          <div className="flex items-center justify-center gap-2 mt-2">
            <div className="w-2.5 h-2.5 rounded-full bg-brand-purple"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-gray-300"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-gray-300"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-gray-300"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-gray-300"></div>
          </div>
        </div>

        {/* Footer CTA Banner */}
        <div className="bg-[#FFF6E5] rounded-[2rem] p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 border border-brand-yellow/20 relative overflow-hidden">
          <div className="flex items-center gap-6 z-10">
            <div className="bg-white text-brand-red p-4 rounded-2xl shadow-sm hidden sm:block">
              <Award size={36} />
            </div>
            <div>
              <h4 className="text-xl md:text-2xl font-bold text-brand-purple mb-1">Join Thousands of Successful Students</h4>
              <p className="text-gray-700 font-medium text-sm md:text-base">Be a part of AL-HAMD family and achieve your academic goals with confidence.</p>
            </div>
          </div>
          
          <a href="tel:+919870326626" className="w-full md:w-auto bg-brand-red text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-red-600 transition-colors shadow-[0_4px_15px_rgba(242,46,46,0.3)] z-10 shrink-0">
            <Phone size={20} className="fill-current" /> CALL FOR ENROLLMENT
          </a>
        </div>

      </div>
    </section>
  )
}

export default WhyChooseUs
