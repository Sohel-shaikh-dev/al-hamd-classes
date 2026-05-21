import { Phone, Menu, X, Home, User, BookOpen, GraduationCap, Trophy, FileText, PhoneCall, MessageCircle, Award, ShieldCheck, MapPin, Code } from 'lucide-react'
import { useState, useEffect } from 'react'
import OptimizedImage from './OptimizedImage'

const tickerItems = [
  "⭐ Trusted Coaching Institute Since 2002",
  "🏆 22+ Years of Academic Excellence",
  "📚 School + Degree + Special Batches Available",
  "🎯 Expert Faculty for Board & Competitive Exams",
  "💯 Personalized Attention for Every Student",
  "📍 Bandra East, Mumbai",
  "📞 Admissions Open Now",
  "🔥 Limited Seats Available for New Batch",
  "🎓 Strong Academic Results Every Year",
  "✨ Modern Learning Environment",
  "📖 Weekly Tests & Performance Tracking",
  "🚀 Career-Focused Student Guidance"
]

interface HeaderProps {
  onOpenDeveloper: () => void;
}

const Header = ({ onOpenDeveloper }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 w-full z-[100]">
      {/* Top Announcement Ticker */}
      <div className="bg-brand-purple text-white py-2.5 overflow-hidden relative shadow-[0_0_15px_rgba(67,49,168,0.5)] border-b border-brand-purple/20">
        {/* Fade Edges */}
        <div className="absolute inset-y-0 left-0 w-8 md:w-24 bg-gradient-to-r from-brand-purple to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-8 md:w-24 bg-gradient-to-l from-brand-purple to-transparent z-10 pointer-events-none"></div>
        
        <div className="flex animate-marquee whitespace-nowrap hover:[animation-play-state:paused] w-max">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center text-[13px] md:text-sm font-bold tracking-wide">
              {tickerItems.map((item, idx) => (
                <div key={idx} className="flex items-center group">
                  <span className="px-6 md:px-10 text-gray-100 group-hover:text-brand-yellow group-hover:scale-105 transition-all cursor-default">
                    {item}
                  </span>
                  <span className="text-white/20 text-xs md:text-sm">•</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Main Navbar */}
      <div className="bg-white/95 backdrop-blur-md border-b border-brand-purple/10 shadow-sm relative z-50">
        <div className="container mx-auto px-4 md:px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 md:h-12 flex-shrink-0 flex items-center justify-center">
              <OptimizedImage priority={true} src="/Alhamd Logo.png" alt="AL-HAMD CLASSES Logo" className="w-auto h-full object-contain drop-shadow-sm" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl md:text-2xl font-heading font-bold text-brand-purple leading-none uppercase">AL-HAMD</span>
              <span className="text-xs md:text-sm font-heading font-bold text-brand-red tracking-widest uppercase leading-tight">CLASSES</span>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 font-heading font-bold text-sm tracking-wide">
            <a href="#hero" className="hover:text-brand-magenta transition-colors">HOME</a>
            <a href="#about" className="hover:text-brand-magenta transition-colors">ABOUT US</a>
            <a href="#subjects" className="hover:text-brand-magenta transition-colors">SUBJECTS</a>
            <a href="#courses" className="hover:text-brand-magenta transition-colors">COURSES</a>
            <a href="#results" className="hover:text-brand-magenta transition-colors">HALL OF FAME</a>
            <a href="#admissions" className="hover:text-brand-magenta transition-colors">ADMISSIONS</a>
            <a href="#location" className="hover:text-brand-magenta transition-colors">CONTACT</a>
          </nav>

          <div className="flex items-center gap-4">
            <a 
              href="tel:+919870326626" 
              className="bg-brand-red hover:bg-red-600 text-white px-6 py-2 rounded-full font-heading font-bold text-sm transition-all hover:scale-105 active:scale-95 shadow-md hidden sm:block"
            >
              ENROLL NOW
            </a>

            {/* About Developer Premium Button */}
            <button 
              onClick={onOpenDeveloper}
              className="hidden lg:flex items-center justify-center bg-white/5 backdrop-blur-md border border-[#E0A82E]/50 text-[#E0A82E] px-4 py-2 rounded-full font-bold text-[11px] uppercase tracking-wider transition-all duration-300 hover:bg-[#E0A82E]/10 hover:border-[#F4C35A] hover:text-[#FFD76A] hover:scale-105 hover:shadow-[0_0_15px_rgba(224,168,46,0.3)] group relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E0A82E] group-hover:bg-[#FFD76A] group-hover:animate-pulse shadow-[0_0_5px_#E0A82E]"></span>
                About Developer
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
            </button>
            
            {/* Hamburger Button for Mobile */}
            <button 
              className="lg:hidden p-2 text-brand-purple hover:bg-brand-cream rounded-xl transition-colors focus:outline-none"
              onClick={toggleMobileMenu}
              aria-label="Toggle Mobile Menu"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={toggleMobileMenu}
      />
      
      {/* Mobile Menu Panel */}
      <div 
        className={`fixed top-0 right-0 h-full w-[85%] max-w-[400px] bg-white z-[110] lg:hidden transform transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] shadow-[0_0_50px_rgba(0,0,0,0.2)] flex flex-col ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* Header Section of Mobile Menu */}
        <div className="relative pt-8 pb-6 px-6 flex flex-col items-center border-b border-gray-100 bg-gradient-to-b from-brand-purple/5 to-transparent flex-shrink-0">
          {/* Curved bottom effect */}
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-brand-purple via-brand-magenta to-brand-yellow opacity-30"></div>
          
          <button 
            onClick={toggleMobileMenu}
            className="absolute top-4 right-4 p-2 bg-gray-50 text-brand-dark hover:bg-brand-red hover:text-white rounded-xl transition-colors shadow-sm"
          >
            <X size={24} />
          </button>
          
          <OptimizedImage priority={true} src="/Alhamd Logo.png" alt="AL-HAMD CLASSES Logo" className="h-16 w-auto object-contain mb-3 drop-shadow-md" />
          <div className="text-center">
            <h3 className="text-2xl font-heading font-bold text-brand-purple leading-none uppercase">AL-HAMD</h3>
            <h4 className="text-xl font-heading font-bold text-brand-red tracking-widest uppercase">CLASSES</h4>
            <p className="text-[11px] font-medium text-gray-600 mt-1 italic font-serif tracking-wide">Where Learning Gets Better</p>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden p-6 custom-scrollbar pb-24">
          {/* Navigation Links */}
          <nav className="flex flex-col mb-8">
            <a href="#hero" onClick={handleLinkClick} className="flex items-center gap-4 py-4 px-4 bg-brand-purple/5 rounded-xl border-l-4 border-brand-purple text-brand-purple font-bold text-lg mb-2 transition-colors">
              <Home size={22} className="opacity-90" />
              HOME
            </a>
            
            <a href="#about" onClick={handleLinkClick} className="flex items-center gap-4 py-4 px-4 text-brand-dark hover:text-brand-purple font-bold text-lg border-b border-gray-100/80 transition-colors">
              <User size={22} className="opacity-70" />
              ABOUT US
            </a>
            
            <a href="#subjects" onClick={handleLinkClick} className="flex items-center gap-4 py-4 px-4 text-brand-dark hover:text-brand-purple font-bold text-lg border-b border-gray-100/80 transition-colors">
              <BookOpen size={22} className="opacity-70" />
              SUBJECTS
            </a>
            
            <a href="#courses" onClick={handleLinkClick} className="flex items-center gap-4 py-4 px-4 text-brand-dark hover:text-brand-purple font-bold text-lg border-b border-gray-100/80 transition-colors">
              <GraduationCap size={22} className="opacity-70" />
              COURSES
            </a>
            
            <a href="#results" onClick={handleLinkClick} className="flex items-center gap-4 py-4 px-4 text-brand-dark hover:text-brand-purple font-bold text-lg border-b border-gray-100/80 transition-colors">
              <Trophy size={22} className="opacity-70" />
              HALL OF FAME
            </a>
            
            <a href="#admissions" onClick={handleLinkClick} className="flex items-center gap-4 py-4 px-4 text-brand-dark hover:text-brand-purple font-bold text-lg border-b border-gray-100/80 transition-colors">
              <FileText size={22} className="opacity-70" />
              ADMISSIONS
            </a>
            
            <a href="#location" onClick={handleLinkClick} className="flex items-center gap-4 py-4 px-4 text-brand-dark hover:text-brand-purple font-bold text-lg transition-colors">
              <PhoneCall size={22} className="opacity-70" />
              CONTACT
            </a>
          </nav>
          
          {/* CTA Buttons */}
          <div className="flex flex-col gap-4 mb-8">
            <a 
              href="tel:+919870326626" 
              className="bg-gradient-to-r from-brand-red to-[#e6194b] text-white p-1 rounded-2xl shadow-[0_8px_20px_rgba(242,46,46,0.25)] hover:shadow-[0_10px_25px_rgba(242,46,46,0.35)] transition-all active:scale-[0.98] group flex"
            >
              <div className="flex items-center gap-4 w-full px-4 py-2.5">
                <div className="bg-white text-brand-red p-2.5 rounded-full shadow-inner group-hover:scale-110 transition-transform">
                  <Phone size={24} className="fill-current" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="font-bold text-[16px] leading-tight tracking-wide">CALL FOR ENROLLMENT</span>
                  <span className="text-[13px] text-white/90 font-medium">Speak to our expert</span>
                </div>
              </div>
            </a>
            
            <a 
              href="https://wa.me/919870326626" 
              className="bg-gradient-to-r from-[#25D366] to-[#1ebe57] text-white p-1 rounded-2xl shadow-[0_8px_20px_rgba(37,211,102,0.25)] hover:shadow-[0_10px_25px_rgba(37,211,102,0.35)] transition-all active:scale-[0.98] group flex"
            >
              <div className="flex items-center gap-4 w-full px-4 py-2.5">
                <div className="bg-white text-[#25D366] p-2.5 rounded-full shadow-inner group-hover:scale-110 transition-transform">
                  <MessageCircle size={24} className="fill-current" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="font-bold text-[16px] leading-tight tracking-wide">WHATSAPP US</span>
                  <span className="text-[13px] text-white/90 font-medium">Chat with our team</span>
                </div>
              </div>
            </a>

            {/* About Developer Button (Mobile) */}
            <button 
              onClick={() => {
                onOpenDeveloper();
                handleLinkClick();
              }}
              className="bg-gradient-to-r from-[#0A0A0A] to-[#1A1A1A] text-[#F4C35A] p-1 rounded-2xl shadow-[0_8px_20px_rgba(244,195,90,0.15)] hover:shadow-[0_10px_25px_rgba(244,195,90,0.25)] border border-[#F4C35A]/30 transition-all active:scale-[0.98] group flex w-full"
            >
              <div className="flex items-center gap-4 w-full px-4 py-2.5">
                <div className="bg-[#111] border border-[#F4C35A]/30 text-[#F4C35A] p-2.5 rounded-full shadow-inner group-hover:scale-110 group-hover:bg-[#F4C35A]/10 transition-all">
                  <Code size={24} />
                </div>
                <div className="flex flex-col text-left">
                  <span className="font-bold text-[16px] leading-tight tracking-wide">ABOUT DEVELOPER</span>
                  <span className="text-[13px] text-gray-400 font-medium">Crafted by AI MetaWorld ✨</span>
                </div>
              </div>
            </button>
          </div>

          {/* Trust Badge Section */}
          <div className="bg-[#FFFAF4] border border-brand-yellow/20 rounded-[1.5rem] p-5 flex flex-col gap-5">
            <div className="flex items-center gap-4 pb-4 border-b border-brand-yellow/20 border-dashed">
              <div className="bg-white text-brand-yellow p-2.5 rounded-full shadow-[0_2px_10px_rgba(255,184,0,0.15)] flex-shrink-0">
                <Award size={24} className="fill-brand-yellow/20" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-brand-red text-[15px] leading-tight tracking-wide">SINCE 2002</span>
                <span className="text-[13px] text-gray-600 font-medium">24+ Years of Excellence</span>
              </div>
            </div>
            
            <div className="flex items-center gap-4 pb-4 border-b border-brand-yellow/20 border-dashed">
              <div className="bg-white text-brand-purple p-2.5 rounded-full shadow-[0_2px_10px_rgba(67,49,168,0.15)] flex-shrink-0">
                <ShieldCheck size={24} className="fill-brand-purple/10" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-brand-purple text-[15px] leading-tight tracking-wide">TRUSTED BY 2000+</span>
                <span className="text-[13px] text-gray-600 font-medium">Students & Parents</span>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="bg-white text-brand-red p-2.5 rounded-full shadow-[0_2px_10px_rgba(242,46,46,0.15)] flex-shrink-0">
                <MapPin size={24} className="fill-brand-red/10" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-brand-purple text-[15px] leading-tight tracking-wide">MUMBAI, MAHARASHTRA</span>
                <span className="text-[13px] text-gray-600 font-medium">Proudly Serving Since 2002</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
