import { useState } from 'react';
import { Users, PartyPopper, Dribbble, Award, Smile, HeartHandshake, Palmtree, X } from 'lucide-react';
import OptimizedImage from './OptimizedImage';
import { motion, AnimatePresence } from 'framer-motion';

const features = [
  { icon: Palmtree, title: "Resort\nPicnic", delay: 0.1 },
  { icon: Users, title: "Student\nBonding", delay: 0.2 },
  { icon: PartyPopper, title: "Celebration\nDay", delay: 0.3 },
  { icon: Dribbble, title: "Fun\nActivities", delay: 0.4 }
];

const stats = [
  { value: "24+", label: "Years Together", icon: Award, color: "text-[#3B1D78]", bg: "bg-[#3B1D78]", delay: 0.2 },
  { value: "Annual", label: "Student Picnic", icon: Users, color: "text-[#F5333F]", bg: "bg-[#F5333F]", delay: 0.3 },
  { value: "Happy", label: "Memories", icon: Smile, color: "text-[#3B1D78]", bg: "bg-[#3B1D78]", delay: 0.4 },
  { value: "Stronger", label: "Student Bonding", icon: HeartHandshake, color: "text-[#F5333F]", bg: "bg-[#F5333F]", delay: 0.5 },
];

const PicnicMemories = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="py-20 md:py-28 bg-[#FFF8F3] relative overflow-hidden" id="picnic-memories">
      {/* Decorative Gradients */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-brand-yellow/10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-brand-purple/5 rounded-full blur-[120px] translate-x-1/3 translate-y-1/3 pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Header Area */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#D71D3A] to-[#F5333F] text-white px-5 py-2 rounded-full font-bold text-sm md:text-base tracking-wide mb-6 shadow-[0_8px_20px_rgba(245,51,63,0.3)]"
          >
            <Users size={18} />
            STUDENT LIFE
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-tight mb-6"
          >
            <span className="text-[#3B1D78] block">ANNUAL PICNIC</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#F5333F] to-[#D71D3A]">MEMORIES</span>
          </motion.h2>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center gap-2 mb-8"
          >
            <span className="w-12 h-1 bg-[#3B1D78] rounded-full"></span>
            <span className="w-2 h-2 bg-[#F5333F] rounded-full"></span>
            <span className="w-2 h-2 bg-[#F5333F] rounded-full"></span>
            <span className="w-2 h-2 bg-[#F5333F] rounded-full"></span>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-xl text-[#3B1D78]/80 font-medium leading-relaxed max-w-2xl"
          >
            At AL-HAMD CLASSES, we believe strong student bonding creates better learning experiences. 
            Every year, our students enjoy a special picnic day filled with fun, laughter, and <span className="text-[#F5333F] font-bold">unforgettable memories</span>.
          </motion.p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto mb-20">
          {features.map((feature, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: feature.delay }}
              className="bg-white rounded-[2rem] p-6 flex flex-col items-center justify-center text-center shadow-[0_10px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_15px_40px_rgba(59,29,120,0.1)] transition-all duration-300 hover:-translate-y-2 border border-transparent hover:border-[#3B1D78]/10 group"
            >
              <div className="text-[#3B1D78] mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon size={42} strokeWidth={1.5} />
              </div>
              <h4 className="text-[#3B1D78] font-bold text-sm md:text-base whitespace-pre-line leading-tight">
                {feature.title}
              </h4>
            </motion.div>
          ))}
        </div>

        {/* Image Gallery */}
        <div className="max-w-5xl mx-auto mb-16 relative">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4 md:gap-6"
          >
            {/* Main Hero Image */}
            <div 
              className="w-full h-[250px] sm:h-[400px] md:h-[500px] relative rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] border-4 border-white group cursor-pointer"
              onClick={() => setSelectedImage("/picnic/picnic1.jpg")}
            >
              <OptimizedImage 
                src="/picnic/picnic1.jpg" 
                alt="Annual Resort Picnic Group Photo" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                onError={(e: any) => { e.currentTarget.src = "/Assets/alhamd_subjects_classroom.png" }}
              />
              
              {/* Floating Ribbon Badge */}
              <div className="absolute top-6 right-6 bg-gradient-to-b from-[#7B1D56] to-[#A01D56] text-white p-4 md:p-6 rounded-t-lg rounded-b-[2rem] shadow-2xl flex flex-col items-center justify-center border border-white/20 z-10 origin-top animate-bounce-slow">
                <Palmtree size={28} className="mb-2 opacity-90" />
                <span className="font-bold text-sm md:text-base text-center leading-tight">Annual<br/>Resort Picnic</span>
                <div className="flex gap-1 mt-3">
                  <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                  <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                  <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                </div>
              </div>
            </div>

            {/* Bottom 3 Images Grid */}
            <div className="grid grid-cols-3 gap-3 md:gap-6 h-[120px] sm:h-[200px] md:h-[260px]">
              {[2, 3, 4].map((num, idx) => (
                <div 
                  key={idx} 
                  className="w-full h-full rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.1)] border-4 border-white group cursor-pointer"
                  onClick={() => setSelectedImage(`/picnic/picnic${num}.jpg`)}
                >
                  <OptimizedImage 
                    src={`/picnic/picnic${num}.jpg`}
                    alt={`Picnic Memory ${num}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={(e: any) => { e.currentTarget.src = "/Assets/First_image.png" }}
                  />
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Handwritten Typography Area */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 relative flex justify-center items-center gap-4"
        >
          <h3 className="font-['Caveat',_'Dancing_Script',_cursive,_'Comic_Sans_MS'] text-4xl md:text-5xl text-[#3B1D78] italic font-bold">
            One Day, Many Memories!
          </h3>
          <PartyPopper className="text-[#F5333F] -mt-6 animate-pulse" size={32} />
          {/* Subtle underline SVG */}
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-64 md:w-80 opacity-40">
            <svg viewBox="0 0 200 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M5,15 Q50,5 100,10 T195,15" fill="none" stroke="#3B1D78" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
        </motion.div>

        {/* Stats Box */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-white rounded-[2.5rem] p-6 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-gray-100 mb-16 relative z-10"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-gray-100">
            {stats.map((stat, idx) => (
              <div key={idx} className={`flex items-center gap-4 ${idx !== 0 ? 'pt-6 sm:pt-0 sm:pl-6' : ''}`}>
                <div className={`w-14 h-14 rounded-full ${stat.bg} text-white flex items-center justify-center flex-shrink-0 shadow-lg`}>
                  <stat.icon size={26} strokeWidth={2} />
                </div>
                <div className="flex flex-col">
                  <span className={`text-xl md:text-2xl font-black ${stat.color} leading-none mb-1`}>{stat.value}</span>
                  <span className="text-sm md:text-sm text-gray-600 font-bold uppercase tracking-wide leading-tight">{stat.label}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>

      {/* Bottom Dark CTA Strip */}
      <div className="bg-[#1A0B2E] w-full pt-20 pb-16 relative -mt-32 z-0">
        {/* Dot pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#ffffff_2px,transparent_2px)] [background-size:20px_20px]"></div>
        
        <div className="container mx-auto px-6 relative z-10 mt-16 flex flex-col items-center text-center">
          
          <div className="flex items-center gap-4 mb-2">
            <div className="w-12 h-0.5 bg-brand-yellow"></div>
            <h3 className="text-white text-2xl md:text-3xl font-bold tracking-wide">Relive The Moments</h3>
            <div className="w-12 h-0.5 bg-brand-yellow"></div>
          </div>
          
          <p className="text-gray-400 font-medium mb-8 tracking-widest text-sm">
            Fun • Friends • Memories
          </p>
        </div>
      </div>

      {/* Image Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 md:top-10 md:right-10 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors z-50"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              <X size={28} />
            </button>
            
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-[90vw] max-h-[90vh] rounded-[1rem] md:rounded-[2rem] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.5)] border border-white/20"
              onClick={(e) => e.stopPropagation()} // Prevent clicking image from closing
            >
              <img 
                src={selectedImage} 
                alt="Enlarged Picnic Memory" 
                className="w-full h-full object-contain max-h-[90vh]"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default PicnicMemories;
