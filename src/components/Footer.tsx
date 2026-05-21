import { Facebook, Instagram, MessageCircle, Phone, Mail, Youtube, ArrowRight } from 'lucide-react'
import OptimizedImage from './OptimizedImage'

interface FooterProps {
  onOpenLegal: (type: 'privacy' | 'terms') => void;
  onOpenDeveloper: () => void;
}

const Footer = ({ onOpenLegal, onOpenDeveloper }: FooterProps) => {
  return (
    <footer className="bg-brand-dark text-white pt-24 pb-8 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-purple/5 rounded-full blur-3xl -mr-48 -mt-48 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-magenta/5 rounded-full blur-3xl -ml-48 -mb-48 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-20">
          
          {/* Brand Column */}
          <div className="col-span-1 lg:col-span-1 flex flex-col items-center md:items-start text-center md:text-left">
            <div className="h-24 md:h-32 mb-8 hover:scale-105 transition-transform duration-300 flex items-center justify-center">
              <OptimizedImage src="/Alhamd Logo.png" alt="AL-HAMD Logo" className="w-auto h-full object-contain drop-shadow-xl" />
            </div>
            <h3 className="text-3xl font-bold mb-4 tracking-tighter uppercase">
              AL-HAMD <span className="text-brand-yellow">CLASSES</span>
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-sm">
              Empowering students with quality education and professional guidance since 2002.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <a href="https://www.youtube.com/@kasimshaikh1016" target="_blank" rel="noopener noreferrer" aria-label="Visit our YouTube channel" className="w-12 h-12 bg-white/5 backdrop-blur-md border border-white/20 rounded-[1rem] flex items-center justify-center hover:bg-[#FF0000] hover:border-[#FF0000] hover:text-white transition-all duration-300 shadow-[0_4px_15px_rgba(0,0,0,0.1)] hover:shadow-[0_10px_30px_rgba(255,0,0,0.4)] hover:-translate-y-1.5 hover:scale-110 group">
                <Youtube size={20} className="group-hover:animate-pulse" />
              </a>
              <a href="https://www.facebook.com/share/1TF6Frf8XS/" target="_blank" rel="noopener noreferrer" aria-label="Visit our Facebook page" className="w-12 h-12 bg-white/5 backdrop-blur-md border border-white/20 rounded-[1rem] flex items-center justify-center hover:bg-[#1877F2] hover:border-[#1877F2] hover:text-white transition-all duration-300 shadow-[0_4px_15px_rgba(0,0,0,0.1)] hover:shadow-[0_10px_30px_rgba(24,119,242,0.4)] hover:-translate-y-1.5 hover:scale-110 group">
                <Facebook size={20} className="group-hover:animate-pulse" />
              </a>
              <a href="https://www.instagram.com/__alhamd_2002/" target="_blank" rel="noopener noreferrer" aria-label="Visit our Instagram page" className="w-12 h-12 bg-white/5 backdrop-blur-md border border-white/20 rounded-[1rem] flex items-center justify-center hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] hover:border-transparent hover:text-white transition-all duration-300 shadow-[0_4px_15px_rgba(0,0,0,0.1)] hover:shadow-[0_10px_30px_rgba(220,39,67,0.4)] hover:-translate-y-1.5 hover:scale-110 group">
                <Instagram size={20} className="group-hover:animate-pulse" />
              </a>
              <a href="https://wa.me/919870326626" target="_blank" rel="noopener noreferrer" aria-label="Contact us on WhatsApp" className="w-12 h-12 bg-white/5 backdrop-blur-md border border-white/20 rounded-[1rem] flex items-center justify-center hover:bg-[#25D366] hover:border-[#25D366] hover:text-white transition-all duration-300 shadow-[0_4px_15px_rgba(0,0,0,0.1)] hover:shadow-[0_10px_30px_rgba(37,211,102,0.4)] hover:-translate-y-1.5 hover:scale-110 group">
                <MessageCircle size={20} className="group-hover:animate-pulse" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-8 text-white uppercase tracking-widest flex items-center gap-3">
              <span className="w-2 h-2 bg-brand-yellow rounded-full shadow-[0_0_10px_rgba(247,195,46,0.8)]"></span>
              Navigation
            </h4>
            <ul className="space-y-4">
              {[
                { label: 'HOME', href: '#hero' },
                { label: 'ABOUT US', href: '#about' },
                { label: 'SUBJECTS', href: '#subjects' },
                { label: 'COURSES', href: '#courses' },
                { label: 'HALL OF FAME', href: '#results' },
                { label: 'ADMISSIONS', href: '#admissions' },
                { label: 'CONTACT', href: '#location' },
              ].map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="text-gray-300 hover:text-brand-yellow hover:translate-x-2 transition-all duration-300 text-[15px] font-bold tracking-wider flex items-center gap-2 group uppercase">
                    <ArrowRight size={16} className="opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-brand-yellow" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Main Courses */}
          <div>
            <h4 className="text-xl font-bold mb-8 text-white uppercase tracking-widest flex items-center gap-3">
              <span className="w-2 h-2 bg-brand-teal rounded-full"></span>
              Programs
            </h4>
            <ul className="space-y-4">
              {['School (X & XII)', 'Degree (BA, B.Com, BMS)', 'Teacher Training', 'Special Private Batches'].map((course, idx) => (
                <li key={idx} className="text-gray-400 text-lg hover:text-white transition-colors cursor-default flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-brand-teal rounded-full mt-2.5 opacity-50"></div>
                  {course}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h4 className="text-xl font-bold mb-8 text-white uppercase tracking-widest flex items-center justify-center md:justify-start gap-3">
              <span className="w-2 h-2 bg-brand-red rounded-full"></span>
              Reach Us
            </h4>
            
            <div className="space-y-6">
              <a href="tel:+919870326626" className="group flex items-center justify-center md:justify-start gap-4">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-brand-red transition-colors">
                  <Phone size={20} className="text-gray-300 group-hover:text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-widest mb-1">Call Today</p>
                  <p className="text-xl font-bold text-gray-300 group-hover:text-white transition-colors">+91 98703 26626</p>
                </div>
              </a>

              <a href="mailto:kasimjamadar@gmail.com" className="group flex items-center justify-center md:justify-start gap-4 break-all">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-brand-magenta transition-colors shrink-0">
                  <Mail size={20} className="text-gray-300 group-hover:text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-widest mb-1">Email Us</p>
                  <p className="text-lg font-bold text-gray-300 group-hover:text-white transition-colors">kasimjamadar<wbr/>@gmail.com</p>
                </div>
              </a>
            </div>

            <div className="mt-8 pt-8 border-t border-white/10">
              <p className="text-gray-500 text-base leading-relaxed">
                356, Behram Nagar, Bandra East,<br />Mumbai 400051
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 pb-20 md:pb-4 border-t border-white/10 flex flex-col lg:flex-row items-center justify-between gap-6 text-gray-500 text-sm">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-10">
            <p>© {new Date().getFullYear()} <span className="font-bold text-gray-400 uppercase tracking-wider mx-1">AL-HAMD CLASSES</span>. All rights reserved.</p>
            <div className="flex gap-6 z-20">
              <button onClick={() => onOpenLegal('privacy')} className="hover:text-white transition-colors relative z-20">Privacy Policy</button>
              <button onClick={() => onOpenLegal('terms')} className="hover:text-white transition-colors relative z-20">Terms of Service</button>
            </div>
          </div>
          
          {/* Developer Credit */}
          <div className="flex items-center gap-3 bg-black/20 px-4 py-2 rounded-full border border-white/5 z-20 mr-20 sm:mr-36 md:mr-48 lg:mr-52 xl:mr-60">
            <p className="text-gray-400 text-xs tracking-wider">Crafted by AI MetaWorld ✨</p>
            <div className="w-px h-3 bg-white/20"></div>
            <button 
              onClick={onOpenDeveloper}
              className="text-[#E0A82E] hover:text-[#FFD76A] font-bold text-[10px] uppercase tracking-widest transition-all duration-300 hover:scale-105 hover:drop-shadow-[0_0_8px_rgba(224,168,46,0.5)]"
            >
              About Developer
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
