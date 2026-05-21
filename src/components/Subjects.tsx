import { GraduationCap, Star, BookOpen, FlaskConical, Calculator, Laptop, ClipboardList, Users, Trophy, TrendingUp, Briefcase, Monitor } from 'lucide-react'
import OptimizedImage from './OptimizedImage'

const Subjects = () => {
  const subjectsList = [
    { name: "English", desc: "Grammar, Literature &\nComprehension", icon: <BookOpen className="w-5 h-5 md:w-6 md:h-6 text-[#451272]"/>, bg: "bg-[#F3EBF8]" },
    { name: "Science", desc: "Physics, Chemistry &\nBiology Fundamentals", icon: <FlaskConical className="w-5 h-5 md:w-6 md:h-6 text-[#D71D3A]"/>, bg: "bg-[#FCE5E8]" },
    { name: "Mathematics", desc: "Concept Building &\nAdvanced Problem Solving", icon: <Calculator className="w-5 h-5 md:w-6 md:h-6 text-[#451272]"/>, bg: "bg-[#F3EBF8]" },
    { name: "Computer Science", desc: "Programming, Logic &\nPractical Applications", icon: <Laptop className="w-5 h-5 md:w-6 md:h-6 text-[#D71D3A]"/>, bg: "bg-[#FCE5E8]" },
    { name: "Accountancy (HSC)", desc: "Financial Accounting &\nManagement Principles", icon: <ClipboardList className="w-5 h-5 md:w-6 md:h-6 text-[#D71D3A]"/>, bg: "bg-[#FCE5E8]" },
    { name: "Marketing", desc: "Strategies, Branding &\nMarket Analysis", icon: <TrendingUp className="w-5 h-5 md:w-6 md:h-6 text-[#0D9488]"/>, bg: "bg-[#E0F2F1]" },
    { name: "Business Management", desc: "Organization, Leadership &\nOperations", icon: <Briefcase className="w-5 h-5 md:w-6 md:h-6 text-[#451272]"/>, bg: "bg-[#F3EBF8]" },
    { name: "Information Technology", desc: "Networking, Systems &\nTech Solutions", icon: <Monitor className="w-5 h-5 md:w-6 md:h-6 text-[#D71D3A]"/>, bg: "bg-[#FCE5E8]" },
  ]

  const HeaderGroup = () => (
    <div className="flex flex-col items-start text-left mb-6 lg:mb-8">
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EAE0F5] text-[#3B1963] font-bold text-[10px] sm:text-xs uppercase tracking-widest mb-4 md:mb-5">
        <GraduationCap size={16} className="text-[#FDE65C]" />
        Academic Excellence Across Every Stream
      </div>
      
      <h2 className="text-4xl sm:text-5xl lg:text-[4rem] font-bold text-[#11052C] mb-2 leading-[0.95] uppercase tracking-tight font-heading">
        Subjects We Offer
      </h2>
      
      <div className="flex items-center gap-1 mb-5 md:mb-6">
        <Star className="text-[#FDE65C] w-4 h-4 md:w-5 md:h-5 fill-current" />
        <div className="h-1 md:h-1.5 w-20 md:w-32 bg-[#FDE65C] rounded-full"></div>
      </div>
      
      <p className="text-sm md:text-base lg:text-[17px] text-[#4A3E5D] leading-[1.6] font-medium max-w-2xl pr-4 lg:pr-0">
        We provide comprehensive coaching for a wide range of subjects, ensuring conceptual clarity and academic excellence for every student.
      </p>
    </div>
  )

  const ImageGroup = () => (
    <div className="relative w-full h-full">
      <div className="relative rounded-[2.5rem] md:rounded-[3rem] border-[8px] md:border-[12px] border-[#F7EDE1] shadow-[0_30px_60px_rgba(0,0,0,0.06)] overflow-hidden w-full h-full min-h-[350px] md:min-h-[450px] lg:min-h-[600px] bg-white">
        <OptimizedImage 
          src="/Assets/Second_image.png" 
          alt="AL-HAMD Classroom Learning" 
          className="w-full h-full object-contain absolute inset-0"
        />
      </div>
      
      {/* Floating Concept Card */}
      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 lg:-bottom-8 lg:-left-12 lg:translate-x-0 bg-gradient-to-r from-[#D71D3A] to-[#451272] p-4 md:p-6 rounded-2xl md:rounded-[2rem] shadow-[0_20px_40px_rgba(69,18,114,0.25)] flex items-center gap-4 md:gap-5 w-[90%] sm:w-auto sm:min-w-[360px] md:min-w-[420px] z-20">
        <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white flex items-center justify-center flex-shrink-0 shadow-inner">
          <GraduationCap className="text-[#D71D3A] w-6 h-6 md:w-8 md:h-8" />
        </div>
        <div className="flex flex-col">
          <span className="text-white font-bold text-sm md:text-lg leading-tight uppercase tracking-wide mb-0.5">Concept Focused<br/>Learning</span>
          <span className="text-white/90 text-[11px] md:text-sm font-medium leading-snug">Building strong fundamentals<br/>for lifelong success.</span>
        </div>
      </div>
    </div>
  )

  return (
    <section className="py-16 md:py-24 bg-[#FCF8F3] overflow-hidden relative" id="subjects">
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-[1400px]">
        
        {/* Desktop Split Layout */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-stretch">
          
          {/* Left Column (Content) */}
          <div className="w-full lg:w-[55%] flex flex-col justify-between">
            
            {/* Header (Always visible, but layout order matters) */}
            <HeaderGroup />

            {/* Mobile Image (Hidden on Desktop, shows after header) */}
            <div className="block lg:hidden my-8 w-full h-[400px] sm:h-[450px]">
              <ImageGroup />
            </div>

            {/* Subject Cards Grid */}
            <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4 lg:gap-5 mb-10 mt-6 lg:mt-0">
              {subjectsList.map((subject, index) => (
                <div key={index} className="bg-white rounded-2xl md:rounded-[1.5rem] p-2.5 sm:p-4 md:p-5 flex items-center gap-2 sm:gap-4 border border-gray-100/50 shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_15px_40px_rgba(69,18,114,0.08)] transition-all cursor-pointer group">
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl sm:rounded-[1rem] flex items-center justify-center flex-shrink-0 ${subject.bg} group-hover:scale-105 transition-transform`}>
                    {subject.icon}
                  </div>
                  <div className="flex flex-col justify-center">
                    <h4 className="text-[#11052C] font-bold text-[11px] sm:text-[15px] md:text-[17px] leading-tight mb-0.5 group-hover:text-[#451272] transition-colors">{subject.name}</h4>
                    <p className="text-[#4A3E5D] text-[9px] sm:text-[11px] md:text-[13px] font-medium leading-[1.2] sm:leading-snug whitespace-pre-line">{subject.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Stats Strip */}
            <div className="bg-white rounded-[1.5rem] md:rounded-[2rem] shadow-[0_10px_40px_rgba(0,0,0,0.04)] p-5 md:p-6 w-full border border-gray-100">
              <div className="grid grid-cols-2 lg:flex lg:flex-row lg:items-center justify-between gap-y-6 lg:gap-y-0 lg:divide-x divide-gray-100">
                
                {/* Stat 1 */}
                <div className="flex flex-col items-center text-center lg:w-1/4 px-2 lg:px-4 border-r border-gray-100 lg:border-r-0">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#451272] flex items-center justify-center mb-3 text-white">
                    <BookOpen size={18} className="md:w-5 md:h-5" />
                  </div>
                  <span className="font-bold text-[#11052C] text-lg md:text-xl leading-none mb-1">15+</span>
                  <span className="text-[10px] md:text-xs text-[#4A3E5D] font-bold leading-tight uppercase tracking-wide">Subjects<br/>Covered</span>
                </div>
                
                {/* Stat 2 */}
                <div className="flex flex-col items-center text-center lg:w-1/4 px-2 lg:px-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#D71D3A] flex items-center justify-center mb-3 text-white">
                    <Users size={18} className="md:w-5 md:h-5" />
                  </div>
                  <span className="font-bold text-[#D71D3A] text-sm md:text-base leading-none mb-1 uppercase">HSC / SSC</span>
                  <span className="text-[10px] md:text-xs text-[#4A3E5D] font-bold leading-tight uppercase tracking-wide">College & Degree<br/>Programs</span>
                </div>

                {/* Stat 3 */}
                <div className="flex flex-col items-center text-center lg:w-1/4 px-2 lg:px-4 border-r border-t lg:border-t-0 border-gray-100 lg:border-r-0 pt-5 lg:pt-0">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#FDE65C] flex items-center justify-center mb-3 text-white">
                    <Star size={18} className="md:w-5 md:h-5 fill-current" />
                  </div>
                  <span className="font-bold text-[#FBBF24] text-sm md:text-base leading-none mb-1 uppercase">Expert</span>
                  <span className="text-[10px] md:text-xs text-[#4A3E5D] font-bold leading-tight uppercase tracking-wide">Faculty<br/>Support</span>
                </div>

                {/* Stat 4 */}
                <div className="flex flex-col items-center text-center lg:w-1/4 px-2 lg:px-4 border-t lg:border-t-0 border-gray-100 pt-5 lg:pt-0">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#451272] flex items-center justify-center mb-3 text-white">
                    <Trophy size={18} className="md:w-5 md:h-5" />
                  </div>
                  <span className="text-[10px] md:text-[11px] text-[#11052C] font-bold uppercase mb-0.5 leading-none">Since</span>
                  <span className="font-bold text-[#11052C] text-lg md:text-xl leading-none mb-1">2002</span>
                  <span className="text-[10px] md:text-xs text-[#4A3E5D] font-bold leading-tight uppercase tracking-wide">24+ Years of<br/>Excellence</span>
                </div>
                
              </div>
            </div>

          </div>

          {/* Right Column (Visual) - Desktop Only */}
          <div className="hidden lg:block lg:w-[45%]">
            <ImageGroup />
          </div>

        </div>
      </div>
    </section>
  )
}

export default Subjects
