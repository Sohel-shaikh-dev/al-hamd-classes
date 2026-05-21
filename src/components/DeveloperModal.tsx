import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, Star, Users, Zap, Rocket, Code, BrainCircuit, 
  PenTool, LayoutDashboard, 
  Layers, Instagram, Linkedin, Github, Youtube, MessageCircle, Send,
  Trophy, Facebook, Mail, Globe
} from 'lucide-react';
import { useEffect } from 'react';

interface DeveloperModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DeveloperModal = ({ isOpen, onClose }: DeveloperModalProps) => {
  
  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const mobileStats = [
    { icon: Star, number: "15+", text: "PROJECTS\nCOMPLETED" },
    { icon: Users, number: "8+", text: "HAPPY\nCLIENTS" },
    { icon: Zap, number: "24/7", text: "SUPPORT\nAVAILABLE" },
    { icon: Trophy, number: "100%", text: "CLIENT\nSATISFACTION" }
  ];

  const skills = [
    { icon: Code, text: "Web Development" },
    { icon: BrainCircuit, text: "AI Solutions" },
    { icon: PenTool, text: "UI/UX Design" },
    { icon: Star, text: "Branding" },
    { icon: LayoutDashboard, text: "Power BI Dashboards" },
    { icon: Layers, text: "React & Supabase" }
  ];

  const socialLinks = [
    { icon: Globe, color: "hover:shadow-[0_0_15px_#F4C35A] border-[#F4C35A]/50 hover:border-[#F4C35A] text-[#F4C35A]", link: "https://ai-metaworld.vercel.app/#" },
    { icon: Linkedin, color: "hover:shadow-[0_0_15px_#0077B5] border-[#0077B5]/50 hover:border-[#0077B5] text-[#0077B5]", link: "https://www.linkedin.com/in/sohel-shaikhh/" },
    { icon: Github, color: "hover:shadow-[0_0_15px_#ffffff] border-white/50 hover:border-white text-gray-300", link: "https://github.com/Sohel-shaikh-dev" },
    { icon: Instagram, color: "hover:shadow-[0_0_15px_#E1306C] border-[#E1306C]/50 hover:border-[#E1306C] text-[#E1306C]", link: "https://instagram.com/ai_metaworld" },
    { icon: Facebook, color: "hover:shadow-[0_0_15px_#1877F2] border-[#1877F2]/50 hover:border-[#1877F2] text-[#1877F2]", link: "https://www.facebook.com/share/1asBpmQEbw/" },
    { icon: Youtube, color: "hover:shadow-[0_0_15px_#FF0000] border-[#FF0000]/50 hover:border-[#FF0000] text-[#FF0000]", link: "https://www.youtube.com/@Aimetaworld" },
    { icon: Mail, color: "hover:shadow-[0_0_15px_#EA4335] border-[#EA4335]/50 hover:border-[#EA4335] text-[#EA4335]", link: "mailto:aimetaworldd@gmail.com" }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[1000] flex items-center justify-center p-3 md:p-6 lg:p-10 bg-black/80 backdrop-blur-md"
          onClick={onClose}
        >
          {/* Main Modal Container */}
          <motion.div 
            initial={{ scale: 0.92, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.92, y: 20, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-[480px] max-h-[calc(100vh-1.5rem)] bg-[#050505] rounded-[2rem] border border-[#F4C35A]/20 shadow-[0_0_80px_rgba(224,168,46,0.15)] flex flex-col overflow-hidden"
          >
            {/* Background Cinematic Effects */}
            <div className="absolute inset-0 pointer-events-none z-0">
              <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#F4C35A]/10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#E0A82E]/10 rounded-full blur-[120px] translate-x-1/3 translate-y-1/3"></div>
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>
            </div>

            {/* ========================================================= */}
            {/* UNIFIED VIEW (Mobile & Desktop) */}
            {/* ========================================================= */}
            <div className="flex flex-col w-full h-full p-5 sm:p-6 overflow-y-auto custom-scrollbar relative z-10">
              
              {/* Header: ABOUT DEVELOPER + Close */}
              <div className="flex items-center justify-between mb-3 relative">
                <div className="flex items-center gap-1.5 mx-auto">
                  <Users className="text-[#E0A82E]" size={14} />
                  <span className="text-[#E0A82E] text-[11px] font-bold tracking-[0.15em] uppercase">ABOUT DEVELOPER</span>
                </div>
                <button onClick={onClose} className="absolute right-0 text-gray-400 hover:text-white bg-white/5 border border-white/10 hover:border-white/20 rounded-full p-1.5 transition-colors">
                  <X size={16} />
                </button>
              </div>

              {/* Profile Image */}
              <div className="relative mx-auto mb-3 group flex flex-col items-center">
                <div className="absolute inset-0 bg-[#F4C35A] rounded-full blur-xl opacity-30 animate-pulse-slow"></div>
                <div className="relative w-32 h-32 rounded-full p-[2px] bg-gradient-to-b from-[#F4C35A] to-[#8C6011] shadow-[0_0_20px_rgba(244,195,90,0.3)]">
                  <div className="w-full h-full rounded-full overflow-hidden bg-[#0A0A0A] border-[3px] border-[#0A0A0A]">
                    <img src="/Assets/developer.jpg" alt="Developer" className="w-full h-full object-cover object-[center_15%]" />
                  </div>
                </div>
              </div>

              {/* Name & Role */}
              <div className="text-center mb-3">
                <h2 className="text-2xl font-black leading-none mb-1 tracking-tight">
                  <span className="text-white">SOHEL </span>
                  <span className="text-[#F4C35A]">SHAIKH</span>
                </h2>
                <p className="text-gray-400 text-[9px] tracking-[0.2em] uppercase font-semibold">
                  Founder of AI MetaWorld
                </p>
                <div className="flex items-center justify-center gap-3 mt-2">
                  <div className="h-px bg-[#F4C35A]/30 w-8"></div>
                  <Star className="text-[#F4C35A]" size={10} fill="#F4C35A" />
                  <div className="h-px bg-[#F4C35A]/30 w-8"></div>
                </div>
              </div>

              {/* Description */}
              <p className="text-center text-gray-300 text-xs leading-relaxed mb-4 px-2 font-medium">
                I build premium AI-powered digital experiences, modern websites, and creative solutions that help brands grow and stand out.
              </p>

              {/* Expertise Box */}
              <div className="border border-[#F4C35A]/20 bg-[#0A0A0A]/60 backdrop-blur-md rounded-2xl p-3 mb-3 shadow-[0_5px_15px_rgba(0,0,0,0.3)]">
                <h4 className="flex items-center gap-1.5 text-[#E0A82E] font-bold text-[10px] tracking-widest uppercase mb-2.5">
                  <Rocket size={12} /> EXPERTISE
                </h4>
                <div className="flex flex-wrap justify-center gap-2">
                  {skills.map((skill, idx) => (
                    <div key={idx} className="flex items-center gap-1.5 bg-[#1A1A1A] border border-[#F4C35A]/30 px-2 py-1 rounded-lg">
                      <skill.icon size={12} className="text-[#F4C35A]" />
                      <span className="text-gray-200 text-[10px] font-medium">{skill.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stats Box */}
              <div className="border border-[#F4C35A]/20 bg-[#0A0A0A]/60 backdrop-blur-md rounded-[1rem] p-3 mb-4 shadow-[0_5px_15px_rgba(0,0,0,0.3)]">
                <div className="grid grid-cols-4 gap-1 divide-x divide-white/10">
                  {mobileStats.map((stat, idx) => (
                    <div key={idx} className="flex flex-col items-center justify-start text-center px-1">
                      <stat.icon className="text-[#E0A82E] mb-1.5" size={16} strokeWidth={1.5} />
                      <span className="text-[#F4C35A] text-lg font-black mb-1 leading-none">{stat.number}</span>
                      <span className="text-gray-400 text-[8px] font-bold tracking-wider uppercase whitespace-pre-line leading-tight">
                        {stat.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Connect With Me */}
              <div className="mb-4">
                <div className="flex flex-wrap justify-center items-center gap-2">
                  {socialLinks.map((social, idx) => (
                    <a 
                      key={idx}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-9 h-9 rounded-full bg-[#111111] border flex items-center justify-center transition-all ${social.color}`}
                    >
                      <social.icon size={14} />
                    </a>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <a 
                href="https://wa.me/917718938615?text=Hello%20AI%20MetaWorld,%0AI%20want%20to%20build%20a%20premium%20website.%0ALet's%20discuss%20the%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-gradient-to-r from-[#8C6011] via-[#E0A82E] to-[#F4C35A] text-black font-black py-3 rounded-xl flex items-center justify-center gap-2 mb-3 shadow-[0_10px_20px_rgba(224,168,46,0.3)]"
              >
                <Send size={16} strokeWidth={2.5} />
                <span className="text-xs tracking-wide">LET'S BUILD SOMETHING AMAZING</span>
              </a>

              {/* Bottom Text */}
              <p className="text-gray-400 text-[10px] text-center flex items-center justify-center gap-1.5 pb-2">
                <MessageCircle size={12} /> I'm open to exciting opportunities!
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DeveloperModal;
