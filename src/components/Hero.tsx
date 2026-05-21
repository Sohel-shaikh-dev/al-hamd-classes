import { Star, MapPin, MessageCircle, ArrowRight, Users, Trophy, SquarePen, ShieldCheck, BookOpen, ClipboardCheck } from 'lucide-react'

const Hero = () => {
  return (
    <>
    <div id="hero" className="w-full relative overflow-hidden">
      <section className="relative pt-32 md:pt-40 lg:pt-36 pb-6 md:pb-8 lg:pb-4 flex flex-col justify-start md:justify-center">
      
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#E62B8A]/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 mix-blend-screen pointer-events-none lg:hidden transform-gpu"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#F7C32E]/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3 mix-blend-screen pointer-events-none lg:hidden transform-gpu"></div>

      <style>{`
        #hero {
          background-color: #0F0123;
          background-image: url('/Assets/hero bg  for mobile view.jpeg');
          background-size: auto 115%; /* Made slightly bigger/zoomed in for mobile */
          background-position: 120% 40px; /* Shifted maximum left and down for mobile */
          background-repeat: no-repeat;
        }
        @media (min-width: 1024px) {
          #hero {
            background-image: url('/Assets/hero bg for laptop view.jpeg');
            background-size: cover; /* Original size for laptop */
            background-position: right center;
          }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float 4s ease-in-out infinite 2s;
        }
      `}</style>

      {/* Main Content */}
      <div className="container mx-auto px-0 sm:px-4 md:px-6 relative z-10 flex flex-col justify-start md:justify-center mt-2 md:mt-0 md:flex-none">
        <div className="flex flex-row items-center w-full">
          
          {/* Left Column - Text Content */}
          <div className="w-[55%] max-w-[190px] sm:max-w-none sm:w-[50%] lg:w-[50%] flex flex-col items-start text-white pr-2 md:pr-0 pl-1.5 md:pl-0">
            
            {/* Trusted Pill */}
            <div className="border border-brand-yellow/50 rounded-full px-2.5 py-1.5 md:px-5 md:py-2 flex items-center gap-1.5 md:gap-2 mb-4 md:mb-8 bg-[#1B053A]/30 backdrop-blur-sm w-max shadow-[0_0_15px_rgba(247,195,46,0.1)]">
              <Star className="text-brand-yellow w-3 h-3 md:w-5 md:h-5 fill-transparent stroke-[1.5]" />
              <span className="text-[9px] md:text-base font-medium tracking-wide leading-tight text-white/95">Trusted Coaching Institute Since 2002</span>
            </div>
            
            {/* Main Title */}
            <h1 className="text-[38px] sm:text-[44px] md:text-[6rem] lg:text-[8.5rem] font-bold font-heading leading-[0.85] tracking-tight mb-3 md:mb-4 drop-shadow-lg">
              <span className="text-white">AL-HAMD</span> <br />
              <span className="text-brand-yellow drop-shadow-[0_0_25px_rgba(247,195,46,0.4)]">CLASSES</span>
            </h1>
            
            {/* Script Tagline */}
            <div className="w-full mb-3 md:mb-8 text-left">
              <span className="font-script text-[15px] leading-tight sm:text-[20px] md:text-4xl lg:text-5xl text-brand-yellow drop-shadow-md block">
                <span className="font-sans opacity-70 mr-1.5 text-sm">-</span>Where Learning Gets Better
              </span>
            </div>
            
            {/* Description */}
            <p className="text-[12px] leading-[1.6] sm:text-[13px] md:text-lg lg:text-xl font-medium mb-6 md:mb-10 text-white/90 drop-shadow-md tracking-wide pr-1 md:pr-6 lg:pr-12 md:max-w-[500px] lg:max-w-[600px]">
              Leading coaching institute in Bandra East offering school, degree, and special private batches with personalized guidance to help students achieve excellence.
            </p>
            
            {/* Buttons */}
            <div className="flex flex-col md:flex-row gap-3 md:gap-4 lg:gap-5 w-full max-w-[200px] sm:max-w-none md:w-auto">
              <a href="#admissions" className="bg-[#FF204E] hover:bg-[#E61515] text-white font-bold py-2.5 px-4 md:py-3 lg:py-4 md:px-6 lg:px-8 rounded-[100px] text-[11px] md:text-sm lg:text-lg shadow-[0_0_20px_rgba(255,32,78,0.5)] transition-all hover:-translate-y-1 active:scale-95 flex items-center justify-between md:justify-center w-full md:w-auto border border-white/10">
                <div className="flex items-center gap-2">
                  <SquarePen className="w-3.5 h-3.5 md:w-5 md:h-5 lg:w-6 lg:h-6" /> 
                  <span className="tracking-wide">APPLY NOW</span>
                </div>
                <ArrowRight className="w-3.5 h-3.5 md:hidden" />
              </a>
              <a href="https://wa.me/919870326626" target="_blank" rel="noopener noreferrer" className="bg-[#1DAB61] hover:bg-[#128C7E] text-white font-bold py-2.5 px-4 md:py-3 lg:py-4 md:px-6 lg:px-8 rounded-[100px] text-[11px] md:text-sm lg:text-lg shadow-[0_4px_15px_rgba(29,171,97,0.4)] transition-all hover:-translate-y-1 active:scale-95 flex items-center justify-start md:justify-center gap-2 w-full md:w-auto border border-[#1DAB61]/30">
                <MessageCircle className="w-3.5 h-3.5 md:w-5 md:h-5 lg:w-6 lg:h-6 fill-current" /> 
                <span className="tracking-wide">WHATSAPP INQUIRY</span>
              </a>
            </div>
          </div>
          
          {/* Right Column - Empty (as requested) */}
          <div className="flex-1 lg:w-[50%] relative flex justify-center items-center min-h-[250px] sm:min-h-[300px] lg:min-h-[350px]">
            {/* Right side has been cleared as requested */}
          </div>
        </div>
      </div>

      {/* Bottom Stats Bar */}
      <div className="container mx-auto px-2 sm:px-4 md:px-6 relative z-20 mt-6 md:mt-4 lg:mt-2 flex md:justify-start">
        <div className="w-full md:w-[70%] lg:w-[60%] xl:w-[55%] bg-[#1B053A] rounded-2xl md:rounded-2xl border border-white/10 p-3 py-4 md:p-5 lg:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          <div className="flex items-center justify-between divide-x divide-white/10">
            
            {/* Stat 1 */}
            <div className="flex items-center gap-1.5 md:gap-3 lg:gap-4 px-1 md:px-3 lg:px-5 w-1/4 justify-center">
              <Star className="text-brand-yellow w-4 h-4 md:w-8 md:h-8 lg:w-10 lg:h-10 flex-shrink-0 fill-brand-yellow" />
              <div className="flex flex-col">
                <span className="text-white font-bold text-[10px] md:text-xl lg:text-2xl leading-none mb-0.5">4.9</span>
                <div className="flex text-brand-yellow text-[6px] md:text-[8px] lg:text-[10px] mb-0.5">★★★★★</div>
                <span className="text-white text-[6px] md:text-[10px] lg:text-xs font-medium leading-tight">Google Rating</span>
                <span className="text-gray-400 text-[5px] md:text-[9px] lg:text-[10px]">(68+ Reviews)</span>
              </div>
            </div>
            
            {/* Stat 2 */}
            <div className="flex items-center gap-1.5 md:gap-3 lg:gap-4 px-1 md:px-3 lg:px-5 w-1/4 justify-center">
              <Users className="text-[#E62B8A] w-4 h-4 md:w-8 md:h-8 lg:w-10 lg:h-10 flex-shrink-0" />
              <div className="flex flex-col">
                <span className="text-white font-bold text-[10px] md:text-xl lg:text-2xl leading-none mb-0.5 md:mb-1">2000+</span>
                <span className="text-white text-[6px] md:text-[10px] lg:text-xs font-medium leading-tight mt-0.5 md:mt-1">Students</span>
                <span className="text-white text-[6px] md:text-[10px] lg:text-xs font-medium leading-tight">Guided</span>
              </div>
            </div>
            
            {/* Stat 3 */}
            <div className="flex items-center gap-1.5 md:gap-3 lg:gap-4 px-1 md:px-3 lg:px-5 w-1/4 justify-center">
              <Trophy className="text-brand-yellow w-4 h-4 md:w-8 md:h-8 lg:w-10 lg:h-10 flex-shrink-0" />
              <div className="flex flex-col">
                <span className="text-white font-bold text-[10px] md:text-xl lg:text-2xl leading-none mb-0.5 md:mb-1">Since 2002</span>
                <span className="text-white text-[6px] md:text-[10px] lg:text-xs font-medium leading-tight">24+ Years of</span>
                <span className="text-white text-[6px] md:text-[10px] lg:text-xs font-medium leading-tight">Excellence</span>
              </div>
            </div>
            
            {/* Stat 4 */}
            <div className="flex items-center gap-1.5 md:gap-3 lg:gap-4 px-1 md:px-3 lg:px-5 w-1/4 justify-center">
              <MapPin className="text-[#FF204E] w-4 h-4 md:w-8 md:h-8 lg:w-10 lg:h-10 flex-shrink-0" />
              <div className="flex flex-col">
                <span className="text-white font-bold text-[10px] md:text-lg lg:text-xl leading-none mb-0.5 md:mb-1">Bandra East</span>
                <span className="text-white text-[6px] md:text-[10px] lg:text-xs font-medium leading-tight mt-0.5">Premium Location</span>
                <span className="text-white text-[6px] md:text-[10px] lg:text-xs font-medium leading-tight">Easily Accessible</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>
    </div>

    {/* New Premium Feature Grid Section (Now outside hero) */}
    <section className="relative z-20 w-full pt-10 md:pt-14 lg:pt-16 pb-8 lg:pb-6 mt-0 bg-[#0F0123]">
        <div className="w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-6 relative z-30">
          
          {/* 6-Card Grid */}
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-4 md:gap-5 lg:gap-6">
            
            {/* Card 1 */}
            <div className="bg-[#1B0A3A]/60 backdrop-blur-lg border border-white/5 rounded-xl md:rounded-2xl p-3 sm:p-5 md:p-6 flex flex-col md:flex-row items-center text-center md:text-left gap-2 md:gap-5 hover:bg-[#25104A]/80 transition-all duration-300 group shadow-[0_8px_30px_rgba(0,0,0,0.3)]">
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-full bg-[#6B21A8]/20 border border-[#6B21A8]/40 flex flex-shrink-0 items-center justify-center shadow-[0_0_20px_rgba(107,33,168,0.3)] group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(107,33,168,0.5)] transition-all">
                <div className="relative">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-[#D8B4FE]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                  <Star className="w-3 h-3 md:w-4 md:h-4 text-white absolute -bottom-1 -right-1 md:-right-2 fill-white drop-shadow-[0_0_5px_rgba(255,255,255,0.8)]" />
                </div>
              </div>
              <div className="flex-1 flex flex-col items-center md:items-start">
                <h3 className="text-white font-bold text-[10px] sm:text-[13px] md:text-[16px] leading-[1.2] md:leading-tight mb-1 uppercase tracking-wide">EXPERT FACULTY</h3>
                <p className="text-gray-400 text-[8.5px] sm:text-[11px] md:text-[13px] leading-[1.3] md:leading-[1.4] font-medium hidden sm:block">Experienced teachers dedicated to your academic success.</p>
                <div className="h-0.5 md:h-1 w-6 md:w-8 bg-[#8B5CF6] rounded-full mt-1.5 md:mt-3 shadow-[0_0_10px_rgba(139,92,246,0.6)]"></div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-[#1B0A3A]/60 backdrop-blur-lg border border-white/5 rounded-xl md:rounded-2xl p-3 sm:p-5 md:p-6 flex flex-col md:flex-row items-center text-center md:text-left gap-2 md:gap-5 hover:bg-[#25104A]/80 transition-all duration-300 group shadow-[0_8px_30px_rgba(0,0,0,0.3)]">
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-full bg-[#9D174D]/20 border border-[#9D174D]/40 flex flex-shrink-0 items-center justify-center shadow-[0_0_20px_rgba(157,23,77,0.3)] group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(157,23,77,0.5)] transition-all">
                <Users className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-[#F9A8D4]" />
              </div>
              <div className="flex-1 flex flex-col items-center md:items-start">
                <h3 className="text-white font-bold text-[10px] sm:text-[13px] md:text-[16px] leading-[1.2] md:leading-tight mb-1 uppercase tracking-wide">SMALL BATCHES</h3>
                <p className="text-gray-400 text-[8.5px] sm:text-[11px] md:text-[13px] leading-[1.3] md:leading-[1.4] font-medium hidden sm:block">Limited students per batch for personalized attention.</p>
                <div className="h-0.5 md:h-1 w-6 md:w-8 bg-[#EC4899] rounded-full mt-1.5 md:mt-3 shadow-[0_0_10px_rgba(236,72,153,0.6)]"></div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-[#1B0A3A]/60 backdrop-blur-lg border border-white/5 rounded-xl md:rounded-2xl p-3 sm:p-5 md:p-6 flex flex-col md:flex-row items-center text-center md:text-left gap-2 md:gap-5 hover:bg-[#25104A]/80 transition-all duration-300 group shadow-[0_8px_30px_rgba(0,0,0,0.3)]">
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-full bg-[#9A3412]/20 border border-[#9A3412]/40 flex flex-shrink-0 items-center justify-center shadow-[0_0_20px_rgba(154,52,18,0.3)] group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(154,52,18,0.5)] transition-all">
                <ClipboardCheck className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-[#FDBA74]" />
              </div>
              <div className="flex-1 flex flex-col items-center md:items-start">
                <h3 className="text-white font-bold text-[10px] sm:text-[13px] md:text-[16px] leading-[1.2] md:leading-tight mb-1 uppercase tracking-wide">WEEKLY TESTS</h3>
                <p className="text-gray-400 text-[8.5px] sm:text-[11px] md:text-[13px] leading-[1.3] md:leading-[1.4] font-medium hidden sm:block">Regular tests to track progress and boost performance.</p>
                <div className="h-0.5 md:h-1 w-6 md:w-8 bg-[#F59E0B] rounded-full mt-1.5 md:mt-3 shadow-[0_0_10px_rgba(245,158,11,0.6)]"></div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-[#1B0A3A]/60 backdrop-blur-lg border border-white/5 rounded-xl md:rounded-2xl p-3 sm:p-5 md:p-6 flex flex-col md:flex-row items-center text-center md:text-left gap-2 md:gap-5 hover:bg-[#25104A]/80 transition-all duration-300 group shadow-[0_8px_30px_rgba(0,0,0,0.3)]">
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-full bg-[#1E3A8A]/20 border border-[#1E3A8A]/40 flex flex-shrink-0 items-center justify-center shadow-[0_0_20px_rgba(30,58,138,0.3)] group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(30,58,138,0.5)] transition-all">
                <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-[#93C5FD]" />
              </div>
              <div className="flex-1 flex flex-col items-center md:items-start">
                <h3 className="text-white font-bold text-[10px] sm:text-[13px] md:text-[16px] leading-[1.2] md:leading-tight mb-1 uppercase tracking-wide">BOARD PREP</h3>
                <p className="text-gray-400 text-[8.5px] sm:text-[11px] md:text-[13px] leading-[1.3] md:leading-[1.4] font-medium hidden sm:block">Specialized preparation for SSC, HSC & exams.</p>
                <div className="h-0.5 md:h-1 w-6 md:w-8 bg-[#3B82F6] rounded-full mt-1.5 md:mt-3 shadow-[0_0_10px_rgba(59,130,246,0.6)]"></div>
              </div>
            </div>

            {/* Card 5 */}
            <div className="bg-[#1B0A3A]/60 backdrop-blur-lg border border-white/5 rounded-xl md:rounded-2xl p-3 sm:p-5 md:p-6 flex flex-col md:flex-row items-center text-center md:text-left gap-2 md:gap-5 hover:bg-[#25104A]/80 transition-all duration-300 group shadow-[0_8px_30px_rgba(0,0,0,0.3)]">
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-full bg-[#064E3B]/20 border border-[#064E3B]/40 flex flex-shrink-0 items-center justify-center shadow-[0_0_20px_rgba(6,78,59,0.3)] group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(6,78,59,0.5)] transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-[#6EE7B7]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>
              </div>
              <div className="flex-1 flex flex-col items-center md:items-start">
                <h3 className="text-white font-bold text-[10px] sm:text-[13px] md:text-[16px] leading-[1.2] md:leading-tight mb-1 uppercase tracking-wide">RESULTS DRIVEN</h3>
                <p className="text-gray-400 text-[8.5px] sm:text-[11px] md:text-[13px] leading-[1.3] md:leading-[1.4] font-medium hidden sm:block">Proven strategies focused on concept clarity & results.</p>
                <div className="h-0.5 md:h-1 w-6 md:w-8 bg-[#10B981] rounded-full mt-1.5 md:mt-3 shadow-[0_0_10px_rgba(16,185,129,0.6)]"></div>
              </div>
            </div>

            {/* Card 6 */}
            <div className="bg-[#1B0A3A]/60 backdrop-blur-lg border border-white/5 rounded-xl md:rounded-2xl p-3 sm:p-5 md:p-6 flex flex-col md:flex-row items-center text-center md:text-left gap-2 md:gap-5 hover:bg-[#25104A]/80 transition-all duration-300 group shadow-[0_8px_30px_rgba(0,0,0,0.3)]">
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-full bg-[#4C1D95]/20 border border-[#4C1D95]/40 flex flex-shrink-0 items-center justify-center shadow-[0_0_20px_rgba(76,29,149,0.3)] group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(76,29,149,0.5)] transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-[#C4B5FD]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
              </div>
              <div className="flex-1 flex flex-col items-center md:items-start">
                <h3 className="text-white font-bold text-[10px] sm:text-[13px] md:text-[16px] leading-[1.2] md:leading-tight mb-1 uppercase tracking-wide">SMART CLASS</h3>
                <p className="text-gray-400 text-[8.5px] sm:text-[11px] md:text-[13px] leading-[1.3] md:leading-[1.4] font-medium hidden sm:block">Modern teaching tools for an interactive experience.</p>
                <div className="h-0.5 md:h-1 w-6 md:w-8 bg-[#8B5CF6] rounded-full mt-1.5 md:mt-3 shadow-[0_0_10px_rgba(139,92,246,0.6)]"></div>
              </div>
            </div>

          </div>

          {/* Bottom Trusted Banner */}
          <div className="mt-6 md:mt-8 w-full mx-auto max-w-4xl bg-[#13062C]/70 backdrop-blur-xl border border-white/10 rounded-full py-3 sm:py-4 md:py-5 px-4 sm:px-6 md:px-10 flex items-center justify-center gap-3 sm:gap-4 md:gap-6 shadow-[0_15px_40px_rgba(0,0,0,0.4)]">
            {/* Left Laurel */}
            <div className="hidden sm:block opacity-70">
              <svg width="18" height="30" viewBox="0 0 40 70" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#D4AF37] md:w-[24px] md:h-[40px]">
                <path d="M22.5 68.5C10 55 5 40 5 25C5 15 8 5 15 0C10 8 10 18 15 25C20 30 25 25 30 20C28 28 25 35 22.5 45C20 55 22 62 22.5 68.5Z" fill="currentColor"/>
                <path d="M35 15C25 20 20 30 22.5 40C25 30 32.5 25 40 22.5C38 18 36 16 35 15Z" fill="currentColor"/>
                <path d="M30 35C22.5 40 17.5 50 20 60C22.5 50 30 45 37.5 42.5C35 38 32.5 36 30 35Z" fill="currentColor"/>
                <path d="M25 55C17.5 60 15 70 17.5 75C20 65 25 60 32.5 57.5C30 56 27.5 55 25 55Z" fill="currentColor"/>
              </svg>
            </div>
            
            <div className="flex items-center text-center sm:text-left gap-2 sm:gap-3 md:gap-4 flex-col sm:flex-row">
              <div className="bg-[#2E7D32]/20 p-1.5 sm:p-2 rounded-full border border-[#2E7D32]/30 flex-shrink-0">
                <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#66BB6A]" />
              </div>
              <p className="text-white text-[10px] sm:text-[13px] md:text-[15px] lg:text-[16px] font-medium tracking-wide leading-tight">
                Trusted by <span className="text-[#F7C32E] font-bold">Thousands of Students & Parents</span> for Quality Education
              </p>
            </div>

            {/* Right Laurel */}
            <div className="hidden sm:block opacity-70 transform scale-x-[-1]">
              <svg width="18" height="30" viewBox="0 0 40 70" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#D4AF37] md:w-[24px] md:h-[40px]">
                <path d="M22.5 68.5C10 55 5 40 5 25C5 15 8 5 15 0C10 8 10 18 15 25C20 30 25 25 30 20C28 28 25 35 22.5 45C20 55 22 62 22.5 68.5Z" fill="currentColor"/>
                <path d="M35 15C25 20 20 30 22.5 40C25 30 32.5 25 40 22.5C38 18 36 16 35 15Z" fill="currentColor"/>
                <path d="M30 35C22.5 40 17.5 50 20 60C22.5 50 30 45 37.5 42.5C35 38 32.5 36 30 35Z" fill="currentColor"/>
                <path d="M25 55C17.5 60 15 70 17.5 75C20 65 25 60 32.5 57.5C30 56 27.5 55 25 55Z" fill="currentColor"/>
              </svg>
            </div>
          </div>

        </div>
    </section>
  </>
  )
}

export default Hero
