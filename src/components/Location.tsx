import { MapPin, Phone, Mail, Clock, Youtube, MessageSquare, Star, Users, ArrowRight, Play, Building, Train, Car, Navigation } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import OptimizedImage from './OptimizedImage'

const Location = () => {
  return (
    <section className="bg-[#F8F3E7] relative overflow-hidden py-16 md:py-24 font-sans" id="location">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
        
        {/* HEADER SECTION */}
        <div className="flex flex-col items-center text-center mb-8 md:mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EAE0F5] text-[#3B1D78] font-bold text-[10px] md:text-xs uppercase tracking-widest mb-4 border border-[#3B1D78]/10 shadow-sm">
            <MessageSquare size={14} />
            Contact Our Institute
          </div>
          
          <h2 className="text-[2.5rem] md:text-5xl lg:text-6xl font-black text-[#3B1D78] uppercase tracking-tighter leading-[0.9] mb-4 font-heading">
            Let's Build Your Future <span className="text-[#F5333F]">Together</span>
          </h2>
          
          <div className="flex items-center justify-center gap-2 mb-4 md:mb-6">
            <div className="w-12 md:w-24 h-0.5 bg-gradient-to-r from-transparent to-[#F5B400]"></div>
            <Star className="text-[#F5B400] w-5 h-5 md:w-6 md:h-6 fill-current" />
            <div className="w-12 md:w-24 h-0.5 bg-gradient-to-l from-transparent to-[#F5B400]"></div>
          </div>
          
          <p className="text-gray-600 text-[13px] md:text-base max-w-2xl font-medium leading-relaxed px-4">
            We are here to help you make the best decision for your child's future. Visit us or reach out anytime.
          </p>
        </div>

        {/* TRUST INFO ROW */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-10 mb-10 md:mb-16">
          <div className="flex items-center gap-3 bg-white sm:bg-transparent px-6 py-3 sm:p-0 rounded-2xl w-full sm:w-auto shadow-sm sm:shadow-none border border-gray-100 sm:border-none">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#F5B400] flex items-center justify-center text-white shadow-md">
              <Star size={18} className="fill-current" />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-gray-500 text-[10px] md:text-[11px] font-medium leading-tight">Trusted Since</span>
              <span className="text-[#F5333F] font-bold text-base md:text-lg leading-tight">2002</span>
            </div>
          </div>
          
          <div className="hidden sm:block w-px h-8 bg-gray-300"></div>
          
          <div className="flex items-center gap-3 bg-white sm:bg-transparent px-6 py-3 sm:p-0 rounded-2xl w-full sm:w-auto shadow-sm sm:shadow-none border border-gray-100 sm:border-none">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#3B1D78] flex items-center justify-center text-white shadow-md">
              <Users size={18} />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-gray-500 text-[10px] md:text-[11px] font-medium leading-tight">Students</span>
              <span className="text-[#F5333F] font-bold text-base md:text-lg leading-tight">2000+</span>
            </div>
          </div>
          
          <div className="hidden sm:block w-px h-8 bg-gray-300"></div>
          
          <div className="flex items-center gap-3 bg-white sm:bg-transparent px-6 py-3 sm:p-0 rounded-2xl w-full sm:w-auto shadow-sm sm:shadow-none border border-gray-100 sm:border-none">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#F5333F] flex items-center justify-center text-white shadow-md">
              <MapPin size={18} className="fill-current" />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-gray-500 text-[10px] md:text-[11px] font-medium leading-tight">Located in</span>
              <span className="text-[#F5333F] font-bold text-base md:text-lg leading-tight">Bandra East</span>
            </div>
          </div>
        </div>

        {/* MAIN LAYOUT: CARDS & MAP */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 mb-6 md:mb-8">
          
          {/* LEFT: CONTACT CARDS (35%) */}
          <div className="w-full lg:w-[35%] flex flex-col gap-4 md:gap-5">
            
            {/* Call Card */}
            <a href="tel:+919870326626" className="bg-white p-5 md:p-6 rounded-[2rem] shadow-[0_10px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 flex flex-col justify-center border border-transparent hover:border-gray-100 group">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#EAE0F5] flex items-center justify-center text-[#3B1D78] group-hover:scale-110 transition-transform">
                    <Phone size={22} className="md:w-6 md:h-6" />
                  </div>
                  <div>
                    <h4 className="text-[#3B1D78] font-bold text-base md:text-lg leading-tight mb-1">CALL US</h4>
                    <p className="text-gray-500 text-[13px] md:text-sm font-medium">+91 98703 26626</p>
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-[#EAE0F5] group-hover:text-[#3B1D78] transition-colors">
                  <ArrowRight size={16} />
                </div>
              </div>
            </a>

            {/* Email Card */}
            <a href="mailto:kasimjamadar@gmail.com" className="bg-white p-5 md:p-6 rounded-[2rem] shadow-[0_10px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 flex flex-col justify-center border border-transparent hover:border-gray-100 group">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#FCE5E8] flex items-center justify-center text-[#F5333F] group-hover:scale-110 transition-transform">
                    <Mail size={22} className="md:w-6 md:h-6" />
                  </div>
                  <div>
                    <h4 className="text-[#F5333F] font-bold text-base md:text-lg leading-tight mb-1">EMAIL US</h4>
                    <p className="text-[#3B1D78] text-[13px] md:text-sm font-medium">kasimjamadar@gmail.com</p>
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-[#FCE5E8] group-hover:text-[#F5333F] transition-colors">
                  <ArrowRight size={16} />
                </div>
              </div>
            </a>

            {/* YouTube Card */}
            <a href="https://www.youtube.com/@kasimshaikh1016" target="_blank" rel="noopener noreferrer" className="bg-white p-5 md:p-6 rounded-[2rem] shadow-[0_10px_30px_rgba(245,51,63,0.06)] hover:shadow-[0_15px_40px_rgba(245,51,63,0.12)] transition-all duration-300 hover:-translate-y-1 flex flex-col justify-center border border-transparent hover:border-red-50 group">
              <div className="flex items-center justify-between mb-4 md:mb-5">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#F5333F] flex items-center justify-center text-white group-hover:scale-110 transition-transform shadow-md">
                    <Youtube size={22} className="md:w-6 md:h-6" />
                  </div>
                  <div>
                    <h4 className="text-[#F5333F] font-bold text-base md:text-lg leading-tight mb-0.5">YOUTUBE</h4>
                    <p className="text-[#3B1D78] text-[12px] md:text-[13px] font-bold leading-tight">@kasimshaikh1016</p>
                    <p className="text-gray-400 text-[10px] md:text-[11px] font-medium mt-0.5">Subscribe for updates & tips!</p>
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-[#FCE5E8] group-hover:text-[#F5333F] transition-colors">
                  <ArrowRight size={16} />
                </div>
              </div>
              
              <div className="w-full flex items-stretch gap-2 md:gap-3">
                <div className="relative flex-grow h-14 md:h-16 rounded-xl overflow-hidden bg-gray-200">
                  <OptimizedImage src="/Assets/classroom-contact.jpg" className="w-full h-full object-cover" alt="YouTube Preview" onError={(e: any) => { e.currentTarget.src = "/Assets/alhamd_subjects_classroom.png" }} />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center transition-colors group-hover:bg-black/20">
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#F5333F] shadow-lg">
                      <Play size={14} className="ml-0.5 fill-current" />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col text-center min-w-[70px] md:min-w-[80px] bg-gray-50 rounded-xl px-2 py-1 justify-center border border-gray-100">
                  <span className="text-[#F5333F] font-black text-[13px] md:text-sm">1.2K+</span>
                  <span className="text-[#3B1D78] text-[9px] md:text-[10px] font-bold uppercase tracking-wider mt-0.5">Subscribers</span>
                </div>
              </div>
            </a>

            {/* WhatsApp Card */}
            <a href="https://wa.me/919870326626" target="_blank" rel="noopener noreferrer" className="bg-white p-5 md:p-6 rounded-[2rem] shadow-[0_10px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 flex flex-col justify-center border border-transparent hover:border-green-50 group">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#E2F5EA] flex items-center justify-center text-[#25D366] group-hover:scale-110 transition-transform">
                    <FaWhatsapp size={22} className="md:w-6 md:h-6" />
                  </div>
                  <div>
                    <h4 className="text-[#25D366] font-bold text-base md:text-lg leading-tight mb-1">WHATSAPP</h4>
                    <p className="text-gray-500 text-[12px] md:text-[13px] font-medium leading-tight">Message us anytime</p>
                    <div className="flex items-center gap-1.5 px-2.5 py-1 bg-[#E2F5EA] rounded-full mt-1.5 w-max">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse"></div>
                      <span className="text-[#25D366] text-[9px] font-bold uppercase tracking-wide">Instant Support</span>
                    </div>
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-[#E2F5EA] group-hover:text-[#25D366] transition-colors">
                  <ArrowRight size={16} />
                </div>
              </div>
            </a>
          </div>

          {/* RIGHT: MAP AREA (65%) */}
          <div className="w-full lg:w-[65%] relative h-[500px] sm:h-[600px] lg:h-auto min-h-[500px] lg:min-h-[600px] rounded-[2rem] overflow-hidden bg-gray-100 shadow-[0_15px_40px_rgba(0,0,0,0.06)] border-[6px] border-white z-20">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.056637330594!2d72.8465063!3d19.061266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c917f694e507%3A0xc68295b9d2903362!2sAL-HAMD%20CLASSES!5e0!3m2!1sen!2sin!4v1714056637330!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: 'grayscale(0.1) contrast(1.1) opacity(0.9)' }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 z-0"
              title="AL-HAMD CLASSES Location"
            ></iframe>
            
            {/* FLOATING TIMING CARD (Top Right) */}
            <div className="absolute top-4 right-4 md:top-6 md:right-6 bg-gradient-to-r from-[#2C1052] to-[#3B1D78] p-3 md:p-4 rounded-[1.25rem] shadow-xl flex items-center gap-3 md:gap-4 z-10 border border-white/10 max-w-[200px] md:max-w-none">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/10 flex items-center justify-center text-[#F5B400] shrink-0">
                <Clock size={16} className="md:w-5 md:h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-white text-[9px] md:text-[10px] font-bold tracking-widest mb-0.5">TIMING</span>
                <span className="text-white font-bold text-[11px] md:text-xs mb-1.5 leading-none">9:00 AM - 9:00 PM</span>
                <span className="bg-[#F5B400] text-[#3B1D78] text-[8px] md:text-[9px] font-bold px-2 md:px-2.5 py-0.5 md:py-1 rounded-md w-max shadow-sm">Open Today</span>
              </div>
            </div>

            {/* FLOATING ADDRESS CARD (Bottom Left) */}
            <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 w-[calc(100%-2rem)] md:w-[380px] lg:w-[400px] bg-white rounded-3xl p-4 md:p-5 shadow-2xl z-20 border border-gray-100">
              <div className="flex items-start gap-3 md:gap-4 mb-4 md:mb-5">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#3B1D78] flex items-center justify-center text-white shrink-0 shadow-md">
                  <Building size={20} className="md:w-6 md:h-6" />
                </div>
                <div>
                  <h4 className="text-[#3B1D78] font-black text-base md:text-lg leading-tight mb-1">AL-HAMD CLASSES</h4>
                  <p className="text-gray-500 text-[11px] md:text-xs font-medium leading-relaxed max-w-[200px]">
                    356, Behram Nagar,<br/>Bandra East, Mumbai 400051
                  </p>
                </div>
              </div>
              
              <div className="border-t border-dashed border-gray-200 my-4 md:my-5"></div>
              
              <div className="flex justify-between items-center mb-4 md:mb-5 px-1">
                {/* 3 Icons */}
                <div className="flex flex-col items-center gap-1.5 text-center">
                  <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-[#EAE0F5] flex items-center justify-center text-[#3B1D78]">
                    <MapPin size={12} className="md:w-3.5 md:h-3.5" />
                  </div>
                  <span className="text-gray-500 text-[8px] md:text-[9px] font-bold leading-tight">Easy<br/>Accessibility</span>
                </div>
                <div className="w-px h-6 md:h-8 bg-gray-200"></div>
                <div className="flex flex-col items-center gap-1.5 text-center">
                  <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-[#FCE5E8] flex items-center justify-center text-[#F5333F]">
                    <Train size={12} className="md:w-3.5 md:h-3.5" />
                  </div>
                  <span className="text-gray-500 text-[8px] md:text-[9px] font-bold leading-tight">Near Station<br/>Bandra</span>
                </div>
                <div className="w-px h-6 md:h-8 bg-gray-200"></div>
                <div className="flex flex-col items-center gap-1.5 text-center">
                  <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-[#FEF3C7] flex items-center justify-center text-[#F5B400]">
                    <Car size={12} className="md:w-3.5 md:h-3.5" />
                  </div>
                  <span className="text-gray-500 text-[8px] md:text-[9px] font-bold leading-tight">Parking<br/>Available</span>
                </div>
              </div>
              
              <a href="https://maps.google.com/?q=AL-HAMD+CLASSES+Bandra+East" target="_blank" rel="noopener noreferrer" className="w-full bg-[#3B1D78] hover:bg-[#2C1052] text-white py-2.5 md:py-3 rounded-[0.85rem] font-bold text-[13px] md:text-sm flex items-center justify-center gap-2 transition-colors shadow-md shadow-[#3B1D78]/20">
                <Navigation size={14} className="md:w-4 md:h-4" />
                Get Directions
              </a>
            </div>

            {/* FLOATING CLASSROOM IMAGE (Desktop only, Bottom Right) */}
            <div className="hidden lg:block absolute bottom-6 right-6 w-48 xl:w-56 h-32 xl:h-36 rounded-2xl overflow-hidden shadow-2xl border-4 border-white z-10 bg-gray-100">
              <OptimizedImage src="/Assets/alhamd_about_classroom.png" alt="Classroom view" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* BOTTOM CTA STRIP */}
        <div className="w-full bg-[#EAE0F5] rounded-3xl p-4 md:p-6 lg:p-8 flex flex-col md:flex-row items-center justify-between gap-5 border border-white shadow-[0_10px_30px_rgba(0,0,0,0.03)] relative z-20">
          <div className="flex items-center gap-5 text-center md:text-left">
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#3B1D78] flex items-center justify-center text-white shrink-0 shadow-md">
              <Users size={22} className="md:w-6 md:h-6" />
            </div>
            <div>
              <h4 className="text-[#3B1D78] font-black text-sm md:text-lg tracking-wide uppercase mb-0.5 md:mb-1">Free Career Guidance Available</h4>
              <p className="text-[#3B1D78]/80 text-[11px] md:text-[13px] font-bold">Walk in today and get expert advice for your child's future.</p>
            </div>
          </div>
          <a 
            href="https://wa.me/919870326626?text=Hello%20AL-HAMD%20CLASSES,%20I%20want%20to%20book%20a%20visit%20for%20admission%20inquiry."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto bg-[#F5333F] hover:bg-[#D71D3A] text-white py-3.5 px-8 md:py-4 md:px-10 rounded-xl font-bold text-[13px] md:text-sm flex items-center justify-center gap-2 transition-transform hover:-translate-y-0.5 hover:shadow-xl shadow-[#F5333F]/30 whitespace-nowrap cursor-pointer"
          >
            <FaWhatsapp size={16} className="text-white" />
            Book a Visit
          </a>
        </div>

      </div>
    </section>
  )
}

export default Location
