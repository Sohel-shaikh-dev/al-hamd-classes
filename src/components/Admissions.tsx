import { PhoneCall, Trophy, Star, Users, CheckCircle2 } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import OptimizedImage from './OptimizedImage'

const Admissions = () => {
  return (
    <section className="py-20 md:py-32 bg-white" id="admissions">
      <div className="container mx-auto px-4 sm:px-6 max-w-[1400px]">
        
        {/* Massive Gradient Banner Container */}
        <div className="relative rounded-[2.5rem] md:rounded-[3rem] bg-gradient-to-b lg:bg-gradient-to-r from-[#D71D3A] via-[#F15A24] to-[#FBBF24] shadow-[0_30px_60px_rgba(215,29,58,0.25)] overflow-hidden pt-10 md:pt-16 pb-8 md:pb-0 px-5 md:px-12 lg:px-16 flex flex-col lg:flex-row items-center lg:items-end justify-between">
          
          {/* Background Decorative SVG Patterns */}
          <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
            {/* Concentric Circles */}
            <svg className="absolute top-1/4 lg:top-0 right-0 lg:right-1/3 w-80 lg:w-96 h-80 lg:h-96 -translate-y-1/2 translate-x-1/4 lg:translate-x-1/2" viewBox="0 0 100 100" fill="none">
              <circle cx="50" cy="50" r="40" stroke="white" strokeWidth="0.5" />
              <circle cx="50" cy="50" r="30" stroke="white" strokeWidth="0.5" />
              <circle cx="50" cy="50" r="20" stroke="white" strokeWidth="0.5" />
              <circle cx="50" cy="50" r="10" stroke="white" strokeWidth="0.5" />
            </svg>
            {/* Dot Grid */}
            <svg className="absolute bottom-10 left-10 w-48 h-48" viewBox="0 0 100 100" fill="none">
              <pattern id="dots_admissions" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1.5" fill="white" />
              </pattern>
              <rect width="100" height="100" fill="url(#dots_admissions)" />
            </svg>
            <svg className="absolute top-10 right-10 w-32 h-32 hidden lg:block" viewBox="0 0 100 100" fill="none">
              <rect width="100" height="100" fill="url(#dots_admissions)" />
            </svg>
            <svg className="absolute top-4 right-4 w-20 h-20 block lg:hidden" viewBox="0 0 100 100" fill="none">
              <rect width="100" height="100" fill="url(#dots_admissions)" />
            </svg>
          </div>

          {/* Left Area: Text & Desktop Stats */}
          <div className="relative z-20 w-full lg:w-[42%] flex flex-col items-start lg:pb-16 text-left">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 lg:px-4 lg:py-1.5 rounded-full bg-black/10 backdrop-blur-sm text-white font-bold text-[10px] lg:text-[11px] xl:text-xs uppercase tracking-widest mb-4 lg:mb-6 border border-white/20 shadow-sm">
              <Star className="w-3.5 h-3.5 text-[#FDE65C] fill-current" />
              Academic Session 2026-27
            </div>
            
            <h2 className="text-5xl sm:text-5xl lg:text-[4rem] xl:text-[4.5rem] font-black text-white leading-[0.9] uppercase tracking-tighter mb-4 lg:mb-6 drop-shadow-md font-heading relative z-20">
              Admissions<br/>Open For New<br/>
              <span className="text-[#FBBF24] inline-block mt-1 lg:mt-2">Batches 2026-27</span>
            </h2>
            
            <p className="text-white/90 text-[13px] lg:text-lg font-medium w-[55%] sm:w-[60%] lg:w-full max-w-md leading-snug lg:leading-relaxed mb-6 lg:mb-10 text-shadow-sm relative z-20">
              Secure your child's future with expert guidance, concept-focused learning, and trusted mentorship from Bandra East's leading coaching institute.
            </p>

            {/* Desktop Stats Row (Hidden on Mobile) */}
            <div className="hidden lg:flex items-center gap-8 mt-4 relative z-20">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white backdrop-blur-sm border border-white/30">
                  <Users size={20} />
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-bold text-[17px] leading-tight">2000+</span>
                  <span className="text-white/80 text-[10px] font-bold uppercase tracking-wider">Students Guided</span>
                </div>
              </div>
              <div className="w-px h-10 bg-white/20"></div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white backdrop-blur-sm border border-white/30">
                  <Star size={20} className="fill-current" />
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-bold text-[17px] leading-tight">4.9</span>
                  <span className="text-white/80 text-[10px] font-bold uppercase tracking-wider">Google Rating</span>
                </div>
              </div>
              <div className="w-px h-10 bg-white/20"></div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white backdrop-blur-sm border border-white/30">
                  <Trophy size={20} />
                </div>
                <div className="flex flex-col">
                  <span className="text-white/80 text-[10px] font-bold uppercase tracking-wider leading-none mb-0.5">Since</span>
                  <span className="text-white font-bold text-[17px] leading-none">2002</span>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Student Cutout (Absolute positioned for Mobile) */}
          <div className="block lg:hidden absolute top-[210px] sm:top-[200px] right-[-10px] w-[55%] sm:w-[45%] z-10 pointer-events-none">
            <OptimizedImage 
              src="/Assets/alhamd_admissions_student.png" 
              alt="Successful Student" 
              className="w-full h-auto object-contain drop-shadow-xl"
            />
          </div>

          {/* Middle Area: Glassmorphism Action Card */}
          <div className="relative z-30 w-full sm:w-[90%] md:w-[70%] lg:w-[35%] lg:pb-16 flex justify-center lg:justify-start mt-32 sm:mt-40 lg:mt-0 mb-8 lg:mb-0 lg:ml-8">
            <div className="bg-white/10 backdrop-blur-md border border-white/30 p-5 md:p-8 rounded-[1.5rem] md:rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.15)] w-full max-w-md relative">
              <h3 className="text-[#11052C] lg:text-white font-bold text-[15px] md:text-xl mb-4 lg:mb-6 flex items-center gap-2">
                Get Instant Admission Guidance
              </h3>
              
              <div className="flex flex-col gap-3 lg:gap-4 mb-4 lg:mb-6">
                <a 
                  href="https://wa.me/919870326626" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-white hover:bg-gray-50 text-[#11052C] py-3.5 px-4 lg:py-4 lg:px-5 rounded-full font-bold text-sm md:text-base flex items-center justify-between shadow-[0_8px_20px_rgba(255,255,255,0.2)] transition-transform hover:-translate-y-1 active:scale-95 group border border-white"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 lg:w-8 lg:h-8 rounded-full bg-[#25D366] flex items-center justify-center text-white shadow-inner">
                      <FaWhatsapp size={16} className="lg:w-[18px] lg:h-[18px]" />
                    </div>
                    <span className="text-[#D71D3A] lg:text-[#11052C]">WhatsApp Us</span>
                  </div>
                  <span className="text-[#D71D3A] lg:text-gray-400 group-hover:text-[#25D366] group-hover:translate-x-1 transition-all">→</span>
                </a>
                
                <a 
                  href="tel:+919870326626" 
                  className="w-full bg-gradient-to-r from-[#2C1052] to-[#451272] hover:from-[#1d0a36] hover:to-[#340c57] text-white py-3.5 px-4 lg:py-4 lg:px-5 rounded-full font-bold text-sm md:text-base flex items-center justify-between shadow-[0_10px_25px_rgba(69,18,114,0.4)] transition-transform hover:-translate-y-1 active:scale-95 group border border-white/10"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 lg:w-8 lg:h-8 rounded-full bg-white/20 flex items-center justify-center text-white shadow-inner">
                      <PhoneCall size={14} className="lg:w-4 lg:h-4" />
                    </div>
                    Call +91 98703 26626
                  </div>
                  <span className="text-white/60 group-hover:text-white group-hover:translate-x-1 transition-all">→</span>
                </a>
              </div>

              <div className="flex items-center gap-2 text-white/90 text-[10px] md:text-xs font-medium mb-4 lg:mb-6">
                <svg className="w-3.5 h-3.5 opacity-80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div className="flex flex-col">
                  <span className="font-bold text-white">Mon - Sat | 9:00 AM - 8:00 PM</span>
                  <span className="text-white/80">We are here to help you!</span>
                </div>
              </div>

              <div className="bg-[#FAE9D1] lg:bg-white/20 rounded-[12px] p-3 flex items-center justify-between border border-white/20 lg:backdrop-blur-sm shadow-sm">
                <p className="text-[#8B2D1B] lg:text-white text-[9px] md:text-[11px] font-bold leading-tight max-w-[180px]">
                  Trusted by thousands of students & parents for over 24 years.
                </p>
                <div className="w-7 h-7 rounded-full bg-[#E86720] flex items-center justify-center text-white shadow-md flex-shrink-0">
                  <CheckCircle2 size={14} />
                </div>
              </div>
            </div>
          </div>

          {/* Right Area: Floating Student Cutout (Desktop Only) */}
          <div className="hidden lg:block relative z-10 w-[30%] self-end">
            <OptimizedImage 
              src="/Assets/alhamd_admissions_student.png" 
              alt="Successful Student" 
              className="w-[120%] max-w-[550px] object-contain object-bottom -mb-2 translate-x-12"
              style={{ filter: 'drop-shadow(-10px 20px 30px rgba(0,0,0,0.3))' }}
            />
          </div>

          {/* Mobile Stats Row (Hidden on Desktop) */}
          <div className="flex lg:hidden justify-between items-center w-full relative z-20 border-t border-white/10 pt-6 px-2">
            <div className="flex flex-col items-center text-center">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white backdrop-blur-sm border border-white/20 mb-2">
                <Users size={18} />
              </div>
              <span className="text-white font-bold text-[19px] leading-none mb-1">2000+</span>
              <span className="text-white/90 text-[9px] font-bold uppercase tracking-wider">Students<br/>Guided</span>
            </div>
            
            <div className="w-px h-16 bg-white/20"></div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white backdrop-blur-sm border border-white/20 mb-2">
                <Star size={18} className="fill-current" />
              </div>
              <span className="text-white font-bold text-[19px] leading-none mb-1">4.9</span>
              <span className="text-white/90 text-[9px] font-bold uppercase tracking-wider">Google<br/>Rating</span>
            </div>
            
            <div className="w-px h-16 bg-white/20"></div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white backdrop-blur-sm border border-white/20 mb-2">
                <Trophy size={18} />
              </div>
              <span className="text-white/90 text-[8px] font-bold uppercase tracking-wider leading-none mb-0.5">Since</span>
              <span className="text-white font-bold text-[19px] leading-none mb-1">2002</span>
              <span className="text-white/90 text-[9px] font-bold uppercase tracking-wider">24+ Years of<br/>Excellence</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Admissions
