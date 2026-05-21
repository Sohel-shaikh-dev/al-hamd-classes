import { BookOpen, GraduationCap, School, UserCheck, MessageCircle } from 'lucide-react'
import { useState, useEffect } from 'react'

const Courses = () => {
  const [typedText, setTypedText] = useState('')
  const fullText = "ACADEMIC PROGRAMS"
  
  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;
    
    const type = (currentText: string, currentIndex: number) => {
      if (currentIndex < fullText.length) {
        setTypedText(currentText + fullText[currentIndex]);
        timeoutId = setTimeout(() => type(currentText + fullText[currentIndex], currentIndex + 1), 100);
      } else {
        // Pause at the end, then restart
        timeoutId = setTimeout(() => {
          setTypedText('');
          type('', 0);
        }, 3000);
      }
    };
    
    type('', 0);
    
    return () => clearTimeout(timeoutId);
  }, [])

  const handleInquiry = (courseName: string) => {
    const message = `Hello AL-HAMD CLASSES, I am interested in ${courseName}. Please share details.`;
    const whatsappUrl = `https://wa.me/919870326626?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const sections = [
    {
      title: "School Section",
      icon: <School className="text-brand-purple" size={48} />,
      items: ["All Mediums", "Class X & XII", "Regular Batches", "Private Batches"],
      gradient: "from-brand-purple to-[#6B51E0]",
      textColor: "text-brand-purple",
      shadow: "hover:shadow-[0_20px_40px_rgba(67,49,168,0.15)]",
      borderColor: "border-brand-purple/20 group-hover:border-brand-purple/50"
    },
    {
      title: "Degree Section",
      icon: <GraduationCap className="text-brand-magenta" size={48} />,
      items: ["BA / B.Com", "M.Com / B.Sc", "BMS", "Career Guidance"],
      gradient: "from-brand-magenta to-[#FF5CBA]",
      textColor: "text-brand-magenta",
      shadow: "hover:shadow-[0_20px_40px_rgba(230,43,138,0.15)]",
      borderColor: "border-brand-magenta/20 group-hover:border-brand-magenta/50"
    },
    {
      title: "Teacher Courses",
      icon: <BookOpen className="text-brand-teal" size={48} />,
      items: ["ECC.Ed", "D.Ed", "B.Ed", "Teaching Support"],
      gradient: "from-brand-teal to-[#36D1E3]",
      textColor: "text-brand-teal",
      shadow: "hover:shadow-[0_20px_40px_rgba(24,183,201,0.15)]",
      borderColor: "border-brand-teal/20 group-hover:border-brand-teal/50"
    },
    {
      title: "Special Batches",
      icon: <UserCheck className="text-brand-red" size={48} />,
      items: ["SSC / HSC Private", "Separate Batches", "Personal Attention", "Result Focused"],
      gradient: "from-brand-red to-[#FF5E5E]",
      textColor: "text-brand-red",
      shadow: "hover:shadow-[0_20px_40px_rgba(242,46,46,0.15)]",
      borderColor: "border-brand-red/20 group-hover:border-brand-red/50"
    }
  ]

  // Split typed text to color "PROGRAMS" differently
  const academicPart = typedText.substring(0, 9); // "ACADEMIC " (length 9)
  const programsPart = typedText.length > 9 ? typedText.substring(9) : "";

  return (
    <section className="py-24 bg-white relative" id="courses">
      {/* Background decoration */}
      <div className="absolute top-0 w-full h-1/2 bg-gradient-to-b from-brand-cream/50 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 min-h-[120px]">
          <h2 className="text-4xl md:text-6xl font-bold text-brand-dark mb-4 tracking-tighter">
            {academicPart}
            <span className="text-brand-purple">{programsPart}</span>
            <span className="inline-block w-[3px] h-[40px] md:h-[60px] ml-2 bg-brand-magenta animate-pulse align-middle"></span>
          </h2>
          <div className="w-32 h-2 bg-gradient-to-r from-brand-purple to-brand-magenta mx-auto rounded-full"></div>
          <p className="mt-8 text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
            Expert guidance and specialized coaching for school, degree, and professional courses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 xl:gap-10">
          {sections.map((section, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-[2.5rem] p-8 xl:p-10 transition-all duration-500 hover:-translate-y-3 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] flex flex-col h-full relative overflow-hidden border border-gray-50"
            >
              {/* Premium Gradient Top Line */}
              <div className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r ${section.gradient} opacity-80 group-hover:opacity-100 transition-opacity`}></div>
              
              {/* Soft Inner Highlight */}
              <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-transparent opacity-50 pointer-events-none rounded-[2.5rem]"></div>
              
              <div className="mb-8 mt-2 flex justify-center transform group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-500">
                <div className="relative">
                  <div className={`absolute inset-0 bg-gradient-to-br ${section.gradient} opacity-0 group-hover:opacity-10 rounded-[2rem] blur-xl transition-opacity duration-500`}></div>
                  <div className={`p-5 rounded-[1.5rem] bg-gray-50/80 border border-gray-100/50 shadow-sm group-hover:bg-white group-hover:shadow-md transition-all duration-500 relative z-10`}>
                    {section.icon}
                  </div>
                </div>
              </div>
              
              <h3 className={`text-2xl md:text-3xl font-bold ${section.textColor} mb-8 text-center uppercase tracking-tight`}>
                {section.title}
              </h3>
              
              <ul className="space-y-4 mb-12 flex-grow relative z-10">
                {section.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-lg text-gray-700 font-medium group/item">
                    <div className={`w-2.5 h-2.5 rounded-full bg-gradient-to-r ${section.gradient} flex-shrink-0 shadow-sm group-hover/item:scale-125 transition-transform`}></div>
                    <span className="group-hover/item:text-brand-dark transition-colors">{item}</span>
                  </li>
                ))}
              </ul>
              
              <button 
                onClick={() => handleInquiry(section.title)}
                className={`w-full py-4 rounded-xl bg-gray-50 text-gray-600 font-bold hover:bg-gradient-to-r ${section.gradient} hover:text-white transition-all duration-300 uppercase tracking-widest flex items-center justify-center gap-3 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-lg active:scale-[0.98] relative z-10`}
              >
                <MessageCircle size={22} className="group-hover:animate-bounce" />
                Inquire Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Courses
