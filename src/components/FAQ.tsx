import { 
  MessageSquare, 
  Star, 
  GraduationCap, 
  Users, 
  ClipboardList, 
  MapPin, 
  IndianRupee, 
  Plus, 
  Minus, 
  Headset, 
  Phone, 
  ArrowRight,
  ShieldCheck 
} from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import { useState } from 'react'

const FAQ = () => {
  const faqs = [
    {
      q: "Which classes do you offer coaching for?",
      a: "We offer coaching for the School Section (SSC, HSC), Degree Section (BA, B.Com, B.Sc, BMS, M.Com), and Teacher Training courses (ECC.Ed, D.Ed, B.Ed).",
      icon: GraduationCap,
      iconBg: "bg-[#EAE0F5]",
      iconColor: "text-[#3B1D78]"
    },
    {
      q: "Do you provide separate batches for private students?",
      a: "Yes, we have specialized separate batches for private students (SSC/HSC and above) with focused personal attention to ensure their success.",
      icon: Users,
      iconBg: "bg-[#FCE5E8]",
      iconColor: "text-[#F5333F]"
    },
    {
      q: "How often do you conduct tests?",
      a: "We conduct regular weekly and monthly tests to track student progress and provide detailed feedback to parents.",
      icon: ClipboardList,
      iconBg: "bg-[#FEF3C7]",
      iconColor: "text-[#F5B400]"
    },
    {
      q: "Where is AL-HAMD CLASSES located?",
      a: "We are located at 356, Behram Nagar, Bandra East, Mumbai. We are easily accessible and well-known in the local area since 2002.",
      icon: MapPin,
      iconBg: "bg-[#E2F5EA]",
      iconColor: "text-[#25D366]"
    },
    {
      q: "How can I inquire about the fee structure?",
      a: "You can call us directly at +91 98703 26626 or visit our center for a free counseling session where we can discuss the fee structure based on the course selected.",
      icon: IndianRupee,
      iconBg: "bg-[#E0F2FE]",
      iconColor: "text-[#0284C7]"
    }
  ]

  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-16 md:py-24 bg-[#F8F3E7] relative overflow-hidden" id="faq">
      {/* Background Dots/Meshes (Subtle) */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.03] bg-[radial-gradient(#3B1D78_1px,transparent_1px)] [background-size:20px_20px]"></div>
      
      <div className="container mx-auto px-4 md:px-6 max-w-[1100px] relative z-10">
        
        {/* HEADER SECTION */}
        <div className="flex flex-col items-center text-center mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EAE0F5] text-[#3B1D78] font-bold text-[10px] md:text-[11px] uppercase tracking-widest mb-4 md:mb-5">
            <MessageSquare size={14} />
            FAQ • STUDENT HELP
          </div>
          
          <h2 className="text-[2.5rem] md:text-5xl lg:text-[4rem] font-black text-[#3B1D78] uppercase tracking-tighter leading-[0.9] mb-4 font-heading">
            COMMON <span className="text-[#F5333F]">QUESTIONS</span>
          </h2>
          
          <div className="flex items-center justify-center gap-2 mb-4 md:mb-6">
            <div className="w-12 md:w-20 h-0.5 bg-gradient-to-r from-transparent to-[#F5B400]"></div>
            <Star className="text-[#F5B400] w-5 h-5 md:w-6 md:h-6 fill-current" />
            <div className="w-12 md:w-20 h-0.5 bg-gradient-to-l from-transparent to-[#F5B400]"></div>
          </div>
          
          <p className="text-gray-600 text-[13px] md:text-base max-w-2xl font-medium leading-relaxed px-4">
            Find answers to the most frequently asked questions by students and parents.
          </p>
        </div>

        {/* ACCORDION LIST */}
        <div className="flex flex-col gap-3 md:gap-4 max-w-[900px] mx-auto w-full">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            
            return (
              <div 
                key={index} 
                className={`bg-white rounded-[1.25rem] md:rounded-[1.75rem] overflow-hidden transition-all duration-500 hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)]
                  ${isOpen ? 'border border-[#3B1D78] shadow-[0_15px_40px_rgba(59,29,120,0.1)]' : 'border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)]'}`}
              >
                <button 
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-4 md:p-6 lg:p-7 text-left group"
                >
                  <div className="flex items-center gap-4 md:gap-6 pr-4">
                    <div className={`w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 ${faq.iconBg} ${faq.iconColor}`}>
                      <faq.icon size={22} className="md:w-6 md:h-6" />
                    </div>
                    <span className="text-[14px] md:text-[17px] font-bold text-[#11052C] leading-tight md:leading-snug pr-2">
                      {faq.q}
                    </span>
                  </div>
                  
                  {isOpen ? (
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#3B1D78] flex items-center justify-center text-white shrink-0 shadow-md shadow-[#3B1D78]/30 transition-transform duration-300">
                      <Minus size={18} className="md:w-5 md:h-5" />
                    </div>
                  ) : (
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-transparent flex items-center justify-center text-gray-400 shrink-0 transition-transform duration-300">
                      <Plus size={20} className="md:w-6 md:h-6" />
                    </div>
                  )}
                </button>
                
                {isOpen && (
                  <div className="mx-4 md:mx-6 lg:mx-8 mb-4 md:mb-6 lg:mb-7 border-l-4 border-[#3B1D78] bg-[#F5F3FF] p-4 md:p-5 lg:p-6 rounded-r-xl transition-all duration-500 animate-in fade-in slide-in-from-top-2">
                    <p className="text-[#3B1D78] text-[13px] md:text-[15px] font-medium leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* CTA SUPPORT BOX */}
        <div className="bg-[#F5F3FF] border border-[#EAE0F5] rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_10px_30px_rgba(0,0,0,0.03)] mt-8 md:mt-10 lg:mt-12 w-full max-w-[900px] mx-auto">
           <div className="flex flex-col md:flex-row items-center text-center md:text-left gap-4 md:gap-5 w-full md:w-auto">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#3B1D78] flex items-center justify-center text-white shrink-0 shadow-lg shadow-[#3B1D78]/20 ring-[6px] ring-white">
                 <Headset size={24} className="md:w-7 md:h-7" />
              </div>
              <div>
                 <h3 className="text-[#3B1D78] font-black text-lg md:text-2xl uppercase tracking-tighter mb-1">STILL HAVE QUESTIONS?</h3>
                 <p className="text-gray-600 text-[13px] md:text-[15px] font-medium">Talk directly with our counseling team.</p>
              </div>
           </div>
           
           <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto mt-2 md:mt-0">
              <a href="tel:+919870326626" className="w-full sm:w-auto bg-white hover:bg-gray-50 text-[#3B1D78] border border-gray-100 py-3.5 px-6 md:py-4 md:px-8 rounded-[0.85rem] md:rounded-xl font-bold text-[13px] md:text-[15px] flex items-center justify-center gap-2 transition-all hover:-translate-y-0.5 hover:shadow-lg shadow-sm whitespace-nowrap">
                 <Phone size={16} className="md:w-[18px] md:h-[18px]" />
                 Call Us Now
              </a>
              <a href="https://wa.me/919870326626?text=Hello%20AL-HAMD%20CLASSES,%20I%20have%20some%20queries." target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-[#00A859] hover:bg-[#00914D] text-white py-3.5 px-6 md:py-4 md:px-8 rounded-[0.85rem] md:rounded-xl font-bold text-[13px] md:text-[15px] flex items-center justify-center gap-2 transition-all hover:-translate-y-0.5 hover:shadow-xl shadow-[#00A859]/30 whitespace-nowrap">
                 <FaWhatsapp size={16} className="md:w-[18px] md:h-[18px]" />
                 WhatsApp Inquiry
                 <ArrowRight size={16} className="md:w-[18px] md:h-[18px] ml-1" />
              </a>
           </div>
        </div>

        {/* TRUST BADGE */}
        <div className="flex items-center justify-center gap-2 mt-8 md:mt-10">
           <ShieldCheck size={20} className="text-white fill-[#3B1D78]" />
           <span className="text-[#3B1D78] font-semibold text-[13px] md:text-sm">
              Trusted by <span className="text-[#F5333F] font-black">2000+</span> Students & Parents
           </span>
        </div>

      </div>
    </section>
  )
}

export default FAQ
