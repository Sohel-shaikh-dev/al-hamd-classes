import { BookOpen, Star, Users, Trophy, Target, BookMarked } from 'lucide-react'
import OptimizedImage from './OptimizedImage'

const About = () => {
  return (
    <section className="py-16 md:py-24 bg-[#FCF8F3] overflow-hidden relative" id="about">
      
      {/* Decorative Background Elements (Desktop) */}
      {/* Left gradient blob */}
      <div className="absolute left-0 top-[15%] w-[40vw] h-[600px] bg-gradient-to-br from-[#E1D1F5] via-[#FCE7CE] to-transparent rounded-r-full blur-[80px] opacity-70 hidden lg:block -translate-x-1/4"></div>
      
      {/* Top Left Sparkle */}
      <div className="absolute left-8 top-16 hidden lg:block opacity-80">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 0L13.5 10.5L24 12L13.5 13.5L12 24L10.5 13.5L0 12L10.5 10.5L12 0Z" fill="#451272"/>
        </svg>
      </div>

      {/* Bottom Left Dot Grid */}
      <div className="absolute left-8 bottom-16 hidden lg:block opacity-30">
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <pattern id="dots" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="2" fill="#451272" />
          </pattern>
          <rect width="100" height="100" fill="url(#dots)" />
        </svg>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-7xl">
        
        {/* Mobile Header (Hidden on Desktop) */}
        <div className="lg:hidden mb-8 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EAE0F5] text-[#3B1963] font-bold text-[10px] sm:text-xs uppercase tracking-widest mb-4">
            <BookOpen size={14} />
            About Our Institute
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-bold text-[#11052C] mb-2 leading-[1] uppercase tracking-tight font-heading">
            A Trusted Learning<br/>Destination
          </h2>
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-6 h-[2px] bg-[#FDE65C]"></span>
            <Star className="text-[#FDE65C] w-4 h-4 fill-current" />
            <span className="text-[#D71D3A] font-bold text-3xl sm:text-4xl uppercase tracking-wider font-heading">Since 2002</span>
            <Star className="text-[#FDE65C] w-4 h-4 fill-current" />
            <span className="w-6 h-[2px] bg-[#FDE65C]"></span>
          </div>
          
          <p className="text-sm sm:text-base text-[#4A3E5D] leading-relaxed font-medium max-w-md mx-auto">
            AL-HAMD CLASSES has earned the trust of families in Bandra East through consistent teaching, careful student attention, and a strong focus on academic growth. We believe in nurturing potential into excellence.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          
          {/* Left Side: Image Visuals & Founders (Desktop) */}
          <div className="w-full lg:w-[45%] flex flex-col gap-12">
            
            {/* Image Box */}
            <div className="relative">
              <div className="relative rounded-[2.5rem] md:rounded-[3rem] border-[8px] md:border-[12px] border-white shadow-[0_30px_60px_rgba(0,0,0,0.08)] overflow-hidden">
                <OptimizedImage 
                  src="/Assets/First_image.png" 
                  alt="AL-HAMD Classroom" 
                  className="w-full h-[400px] sm:h-[500px] lg:h-[650px] object-cover object-center"
                />
              </div>
              
              {/* 24+ Badge */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 lg:translate-x-0 lg:-bottom-8 lg:right-6 lg:left-auto bg-gradient-to-r from-[#D71D3A] to-[#451272] p-4 md:p-6 rounded-2xl md:rounded-[2rem] shadow-[0_20px_40px_rgba(69,18,114,0.3)] flex items-center gap-3 md:gap-4 w-[90%] sm:w-auto sm:min-w-[320px]">
                <span className="text-6xl md:text-7xl font-bold text-[#FDE65C] leading-none tracking-tighter">24+</span>
                <div className="flex flex-col">
                  <span className="text-white text-xs md:text-[13px] font-bold tracking-widest uppercase leading-tight">Years of</span>
                  <span className="text-white text-xs md:text-[13px] font-bold tracking-widest uppercase leading-tight">Academic</span>
                  <span className="text-white text-xs md:text-[13px] font-bold tracking-widest uppercase leading-tight">Excellence</span>
                </div>
              </div>
            </div>

            {/* Desktop Founders Section (Hidden on Mobile) */}
            <div className="hidden lg:flex flex-row justify-between gap-6 pt-4">
              
              {/* Founder 1 (Desktop) */}
              <div className="flex items-start gap-4 w-1/2 group">
                <div className="w-16 h-16 rounded-full border-[3px] border-white shadow-lg overflow-hidden flex-shrink-0 group-hover:border-[#451272] transition-colors">
                  <OptimizedImage src="/Assets/Co-founder.png" alt="Kasim Shaikh" className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-col">
                  <h5 className="text-[#11052C] font-bold text-[19px] leading-none mb-1 uppercase font-heading tracking-tight">Kasim Shaikh</h5>
                  <span className="text-[#D71D3A] font-bold text-[11px] uppercase tracking-widest mb-2.5">Founder & Director</span>
                  <div className="relative">
                    <span className="absolute -left-2 -top-1.5 text-2xl text-[#451272] font-serif font-bold leading-none opacity-80">"</span>
                    <p className="text-[#4A3E5D] text-[13px] font-medium leading-[1.5] pl-3 italic">
                      Our mission is simple – to provide the right guidance, strong foundation, and a positive environment for every student.
                    </p>
                  </div>
                </div>
              </div>

              {/* Founder 2 (Desktop) */}
              <div className="flex items-start gap-4 w-1/2 group">
                <div className="w-16 h-16 rounded-full border-[3px] border-white shadow-lg overflow-hidden flex-shrink-0 group-hover:border-[#D71D3A] transition-colors">
                  <OptimizedImage src="/Assets/Founder.png" alt="Zeenat Shaikh" className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-col">
                  <h5 className="text-[#11052C] font-bold text-[19px] leading-none mb-1 uppercase font-heading tracking-tight">Zeenat Shaikh</h5>
                  <span className="text-[#D71D3A] font-bold text-[11px] uppercase tracking-widest mb-2.5">Co-Founder & Director</span>
                  <div className="relative">
                    <span className="absolute -left-2 -top-1.5 text-2xl text-[#451272] font-serif font-bold leading-none opacity-80">"</span>
                    <p className="text-[#4A3E5D] text-[13px] font-medium leading-[1.5] pl-3 italic">
                      We believe in care, support, and mentorship to help students build confidence and achieve their best.
                    </p>
                  </div>
                </div>
              </div>

            </div>

          </div>
          
          {/* Right Side: Content */}
          <div className="w-full lg:w-[55%] mt-6 lg:mt-0 flex flex-col">
            
            {/* Desktop Header (Hidden on Mobile) */}
            <div className="hidden lg:flex flex-col items-start text-left mb-10">
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#EAE0F5] text-[#3B1963] font-bold text-xs uppercase tracking-widest mb-6">
                <BookOpen size={16} />
                About Our Institute
              </div>
              
              <h2 className="text-[3.5rem] xl:text-[4rem] font-bold text-[#11052C] mb-2 leading-[0.95] uppercase tracking-tight font-heading">
                A Trusted Learning<br/>Destination
              </h2>
              <div className="flex items-center justify-start gap-4 mb-6">
                <span className="w-8 h-[2px] bg-[#FDE65C]"></span>
                <Star className="text-[#FDE65C] w-5 h-5 fill-current" />
                <span className="text-[#D71D3A] font-bold text-5xl uppercase tracking-wider font-heading">Since 2002</span>
                <Star className="text-[#FDE65C] w-5 h-5 fill-current" />
                <span className="w-8 h-[2px] bg-[#FDE65C]"></span>
              </div>
              
              <p className="text-lg text-[#4A3E5D] leading-[1.6] font-medium max-w-2xl">
                AL-HAMD CLASSES has earned the trust of families in Bandra East through consistent teaching, careful student attention, and a strong focus on academic growth. We believe in nurturing potential into excellence.
              </p>
            </div>

            {/* Stats Strip */}
            <div className="bg-white rounded-2xl md:rounded-[2rem] shadow-[0_15px_40px_rgba(0,0,0,0.04)] p-6 mb-8 w-full border border-gray-100">
              <div className="grid grid-cols-2 lg:flex lg:flex-row lg:items-center justify-between gap-y-8 lg:gap-y-0 lg:divide-x divide-gray-200">
                
                {/* Stat 1 */}
                <div className="flex flex-col items-center text-center lg:w-1/4 px-2 lg:px-4 border-r border-gray-200 lg:border-r-0">
                  <div className="text-[#451272] mb-3"><Users size={32} /></div>
                  <span className="font-bold text-[#11052C] text-2xl md:text-3xl mb-1 leading-none">2000+</span>
                  <span className="text-[11px] md:text-sm text-[#4A3E5D] font-semibold leading-tight">Students<br/>Guided</span>
                </div>
                
                {/* Stat 2 */}
                <div className="flex flex-col items-center text-center lg:w-1/4 px-2 lg:px-4">
                  <div className="text-[#FDE65C] mb-3"><Star size={32} className="fill-current" /></div>
                  <span className="font-bold text-[#D71D3A] text-2xl md:text-3xl mb-1 leading-none">4.9</span>
                  <span className="text-[11px] md:text-sm text-[#4A3E5D] font-semibold leading-tight">Google Rating</span>
                  <div className="flex text-[#FDE65C] mt-1.5 gap-0.5"><Star size={12} className="fill-current"/><Star size={12} className="fill-current"/><Star size={12} className="fill-current"/><Star size={12} className="fill-current"/><Star size={12} className="fill-current"/></div>
                </div>

                {/* Stat 3 */}
                <div className="flex flex-col items-center text-center lg:w-1/4 px-2 lg:px-4 border-r border-t lg:border-t-0 border-gray-200 lg:border-r-0 pt-6 lg:pt-0">
                  <div className="text-[#D71D3A] mb-3"><Trophy size={32} /></div>
                  <span className="text-[10px] md:text-xs text-[#D71D3A] font-bold uppercase mb-0.5 leading-none">Since</span>
                  <span className="font-bold text-[#D71D3A] text-2xl md:text-3xl mb-1 leading-none">2002</span>
                  <span className="text-[11px] md:text-xs text-[#4A3E5D] font-semibold leading-tight">24+ Years of<br/>Excellence</span>
                </div>

                {/* Stat 4 */}
                <div className="flex flex-col items-center text-center lg:w-1/4 px-2 lg:px-4 border-t lg:border-t-0 border-gray-200 pt-6 lg:pt-0">
                  <div className="text-[#11052C] mb-3"><BookMarked size={32} /></div>
                  <span className="font-bold text-[#11052C] text-[13px] md:text-[15px] leading-tight mb-1.5">Structured<br/>Learning</span>
                  <span className="text-[10px] md:text-xs text-[#4A3E5D] font-semibold leading-tight">Conceptual Clarity<br/>& Regular Testing</span>
                </div>
                
              </div>
            </div>

            {/* Feature Cards */}
            <div className="flex flex-col gap-4 mb-4">
              {/* Feature 1 */}
              <div className="bg-white rounded-[1.5rem] md:rounded-[2rem] shadow-[0_10px_30px_rgba(0,0,0,0.03)] p-4 md:p-6 flex items-center group hover:shadow-[0_15px_40px_rgba(69,18,114,0.1)] transition-all border border-gray-100">
                <div className="flex items-center gap-4 md:gap-6">
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#EAE0F5] flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-105">
                    <Target className="text-[#451272] w-7 h-7 md:w-8 md:h-8" />
                  </div>
                  <div>
                    <h4 className="text-[#2D1656] font-bold text-sm md:text-[17px] uppercase tracking-wide mb-1 transition-colors">Structured Learning</h4>
                    <p className="text-[#4A3E5D] text-xs md:text-[15px] font-medium leading-snug max-w-[240px] md:max-w-md">Well-organized batches with a focus on conceptual clarity and regular testing.</p>
                  </div>
                </div>

              </div>

              {/* Feature 2 */}
              <div className="bg-white rounded-[1.5rem] md:rounded-[2rem] shadow-[0_10px_30px_rgba(0,0,0,0.03)] p-4 md:p-6 flex items-center group hover:shadow-[0_15px_40px_rgba(215,29,58,0.1)] transition-all border border-gray-100">
                <div className="flex items-center gap-4 md:gap-6">
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#FCE5E8] flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-105">
                    <Users className="text-[#D71D3A] w-7 h-7 md:w-8 md:h-8" />
                  </div>
                  <div>
                    <h4 className="text-[#D71D3A] font-bold text-sm md:text-[17px] uppercase tracking-wide mb-1 transition-colors">Personalized Attention</h4>
                    <p className="text-[#4A3E5D] text-xs md:text-[15px] font-medium leading-snug max-w-[240px] md:max-w-md">Smaller batch sizes to ensure every student receives the guidance they need to excel.</p>
                  </div>
                </div>

              </div>
            </div>

            {/* Mobile Founders Section (Hidden on Desktop) */}
            <div className="flex lg:hidden flex-col gap-8 mt-8">
              
              {/* Founder 1 (Mobile) */}
              <div className="flex items-start gap-4 group">
                <div className="w-16 h-16 rounded-full border-[3px] border-white shadow-lg overflow-hidden flex-shrink-0 group-hover:border-[#451272] transition-colors">
                  <OptimizedImage src="/Assets/Co-founder.png" alt="Kasim Shaikh" className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-col">
                  <h5 className="text-[#11052C] font-bold text-lg leading-none mb-1 uppercase font-heading">Kasim Shaikh</h5>
                  <span className="text-[#D71D3A] font-bold text-[10px] uppercase tracking-widest mb-2.5">Founder & Director</span>
                  <div className="relative">
                    <span className="absolute -left-2 -top-1.5 text-2xl text-[#451272] font-serif font-bold leading-none opacity-80">"</span>
                    <p className="text-[#4A3E5D] text-[13px] font-medium leading-[1.6] pl-3 italic">
                      Our mission is simple – to provide the right guidance, strong foundation, and a positive environment for every student.
                    </p>
                  </div>
                </div>
              </div>

              {/* Founder 2 (Mobile) */}
              <div className="flex items-start gap-4 group">
                <div className="w-16 h-16 rounded-full border-[3px] border-white shadow-lg overflow-hidden flex-shrink-0 group-hover:border-[#D71D3A] transition-colors">
                  <OptimizedImage src="/Assets/Founder.png" alt="Zeenat Shaikh" className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-col">
                  <h5 className="text-[#11052C] font-bold text-lg leading-none mb-1 uppercase font-heading">Zeenat Shaikh</h5>
                  <span className="text-[#D71D3A] font-bold text-[10px] uppercase tracking-widest mb-2.5">Co-Founder & Director</span>
                  <div className="relative">
                    <span className="absolute -left-2 -top-1.5 text-2xl text-[#451272] font-serif font-bold leading-none opacity-80">"</span>
                    <p className="text-[#4A3E5D] text-[13px] font-medium leading-[1.6] pl-3 italic">
                      We believe in care, support, and mentorship to help students build confidence and achieve their best.
                    </p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default About
