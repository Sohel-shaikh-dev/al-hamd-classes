import { Star, MapPin, MessageCircle, ArrowRight, Users, Trophy, SquarePen, ShieldCheck, BookOpen, ClipboardCheck, ChevronRight } from 'lucide-react'

const Hero = () => {
  return (
    <>
      <section className="relative pt-24 md:pt-32 pb-8 md:pb-16 overflow-hidden min-h-screen flex flex-col justify-start md:justify-center" id="hero">
      
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#E62B8A]/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 mix-blend-screen pointer-events-none lg:hidden"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#F7C32E]/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3 mix-blend-screen pointer-events-none lg:hidden"></div>

      <style>{`
        #hero {
          background-image: url('/Assets/hero bg  for mobile view.jpeg');
          background-size: cover;
          background-position: right center;
          background-repeat: no-repeat;
        }
        @media (min-width: 1024px) {
          #hero {
            background-image: url('/Assets/hero bg for laptop view.jpeg');
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
          <div className="flex-1 lg:w-[50%] relative flex justify-center items-center min-h-[380px] sm:min-h-[450px] lg:min-h-[500px]">
            {/* Right side has been cleared as requested */}
          </div>
        </div>
      </div>

      {/* Bottom Stats Bar */}
      <div className="container mx-auto px-2 sm:px-4 md:px-6 relative z-20 mt-12 md:mt-8 flex md:justify-start">
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

    {/* New Feature List Card Section */}
    <section className="relative z-20 w-full pt-2 pb-16 md:py-16 -mt-[25vh] md:-mt-24 lg:-mt-[12vh]">
      {/* Mobile background block */}
      <div className="absolute inset-x-0 top-[25vh] bottom-0 bg-gradient-to-r from-[#430b66] via-[#6b0c65] to-[#a40c65] md:hidden"></div>
      
      {/* Desktop background block */}
      <div className="absolute inset-x-0 top-[24px] lg:top-[12vh] bottom-0 bg-gradient-to-r from-[#220a4f] via-[#300951] to-[#580d59] hidden md:block"></div>
      
      {/* Universal bottom fade */}
      <div className="absolute inset-x-0 top-[25vh] md:top-[24px] lg:top-[12vh] bottom-0 bg-gradient-to-b from-transparent to-[#0F0123] opacity-90"></div>
      
      <div className="w-full max-w-4xl md:max-w-7xl mx-auto px-3 sm:px-6 relative z-30">
        <div className="bg-[#FAF8FC] rounded-[2rem] md:rounded-[3rem] w-full shadow-[0_30px_60px_rgba(0,0,0,0.4)] p-4 md:p-6 lg:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-0">
          
          {/* Feature 1 */}
          <div className="flex items-center py-3 md:py-0 border-b md:border-b-0 md:border-r border-purple-100/60 last:border-b-0 md:last:border-r-0 md:px-4 lg:px-6 md:w-1/4">
            <div className="w-12 h-12 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full bg-[#310D70] flex items-center justify-center flex-shrink-0 mr-4 md:mr-3 lg:mr-4 shadow-sm">
              <ShieldCheck className="w-6 h-6 md:w-5 md:h-5 lg:w-6 lg:h-6 text-white stroke-[2]" />
            </div>
            <div className="flex-1 pr-2 md:pr-0">
              <h3 className="text-[#1E0A45] font-bold text-[13px] md:text-[11px] lg:text-[14px] leading-[1.2] mb-1">
                Trusted by Thousands<br className="md:hidden lg:block" />of Students & Parents
              </h3>
              <p className="text-[#3B226D] text-[10px] md:text-[9px] lg:text-[11px] leading-[1.2] font-semibold opacity-90">
                For Quality Education &<br className="md:hidden lg:block" />Outstanding Results
              </p>
            </div>
            <ChevronRight className="w-5 h-5 md:hidden text-[#8A7B9D] flex-shrink-0" />
          </div>

          {/* Feature 2 */}
          <div className="flex items-center py-3 md:py-0 border-b md:border-b-0 md:border-r border-purple-100/60 last:border-b-0 md:last:border-r-0 md:px-4 lg:px-6 md:w-1/4">
            <div className="w-12 h-12 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full bg-[#FFD6EA] flex items-center justify-center flex-shrink-0 mr-4 md:mr-3 lg:mr-4 shadow-sm">
              <Users className="w-6 h-6 md:w-5 md:h-5 lg:w-6 lg:h-6 text-[#C61168] stroke-[2]" />
            </div>
            <div className="flex-1 pr-2 md:pr-0">
              <h3 className="text-[#1E0A45] font-bold text-[13px] md:text-[11px] lg:text-[14px] leading-[1.2] mb-1">
                Personalized Attention
              </h3>
              <p className="text-[#3B226D] text-[10px] md:text-[9px] lg:text-[11px] leading-[1.2] font-semibold opacity-90">
                Small Batches for<br className="md:hidden lg:block" />Better Understanding
              </p>
            </div>
            <ChevronRight className="w-5 h-5 md:hidden text-[#8A7B9D] flex-shrink-0" />
          </div>

          {/* Feature 3 */}
          <div className="flex items-center py-3 md:py-0 border-b md:border-b-0 md:border-r border-purple-100/60 last:border-b-0 md:last:border-r-0 md:px-4 lg:px-6 md:w-1/4">
            <div className="w-12 h-12 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full bg-[#E2D5F8] flex items-center justify-center flex-shrink-0 mr-4 md:mr-3 lg:mr-4 shadow-sm">
              <BookOpen className="w-6 h-6 md:w-5 md:h-5 lg:w-6 lg:h-6 text-[#461376] stroke-[2]" />
            </div>
            <div className="flex-1 pr-2 md:pr-0">
              <h3 className="text-[#1E0A45] font-bold text-[13px] md:text-[11px] lg:text-[14px] leading-[1.2] mb-1">
                Comprehensive Study Material
              </h3>
              <p className="text-[#3B226D] text-[10px] md:text-[9px] lg:text-[11px] leading-[1.2] font-semibold opacity-90">
                Well Researched &<br className="md:hidden lg:block" />Exam Focused
              </p>
            </div>
            <ChevronRight className="w-5 h-5 md:hidden text-[#8A7B9D] flex-shrink-0" />
          </div>

          {/* Feature 4 */}
          <div className="flex items-center py-3 md:py-0 border-b md:border-b-0 md:border-r border-purple-100/60 last:border-b-0 md:last:border-r-0 md:px-4 lg:px-6 md:w-1/4">
            <div className="w-12 h-12 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full bg-[#FDE6C5] flex items-center justify-center flex-shrink-0 mr-4 md:mr-3 lg:mr-4 shadow-sm">
              <ClipboardCheck className="w-6 h-6 md:w-5 md:h-5 lg:w-6 lg:h-6 text-[#CD7A00] stroke-[2]" />
            </div>
            <div className="flex-1 pr-2 md:pr-0">
              <h3 className="text-[#1E0A45] font-bold text-[13px] md:text-[11px] lg:text-[14px] leading-[1.2] mb-1">
                Regular Tests &<br className="md:hidden lg:block" />Performance Tracking
              </h3>
              <p className="text-[#3B226D] text-[10px] md:text-[9px] lg:text-[11px] leading-[1.2] font-semibold opacity-90">
                Continuous Evaluation for<br className="md:hidden lg:block" />Consistent Improvement
              </p>
            </div>
            <ChevronRight className="w-5 h-5 md:hidden text-[#8A7B9D] flex-shrink-0" />
          </div>

        </div>
      </div>
    </section>
  </>
  )
}

export default Hero
