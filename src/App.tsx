import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Subjects from './components/Subjects'
import Courses from './components/Courses'
import WhyChooseUs from './components/WhyChooseUs'
import Admissions from './components/Admissions'
import Results from './components/Results'
import Location from './components/Location'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import LegalModal from './components/LegalModal'
import { MessageCircle } from 'lucide-react'

function App() {
  const [legalModal, setLegalModal] = useState<'privacy' | 'terms' | null>(null)

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        <Hero />
        <About />
        <Subjects />
        <Courses />
        <WhyChooseUs />
        <Admissions />
        <Results />
        <Location />
        <FAQ />
      </main>
      
      <Footer onOpenLegal={setLegalModal} />

      <LegalModal 
        isOpen={!!legalModal} 
        type={legalModal} 
        onClose={() => setLegalModal(null)} 
      />

      {/* Floating CTAs */}
      <div className="fixed bottom-6 right-6 z-[999]">
        <a 
          href="https://wa.me/919870326626" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-[#0f0f0f] border border-[#25D366]/40 text-white pl-1.5 pr-6 py-1.5 rounded-full shadow-[0_0_20px_rgba(37,211,102,0.15)] hover:shadow-[0_0_25px_rgba(37,211,102,0.3)] transition-all flex items-center justify-center gap-3 active:scale-95 group text-sm md:text-base font-bold"
          title="WhatsApp Us"
        >
          <div className="w-10 h-10 bg-[#25D366] rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(37,211,102,0.6)] group-hover:scale-110 transition-transform">
            <MessageCircle size={20} className="text-white fill-white" />
          </div>
          Chat with us
        </a>
      </div>
    </div>
  )
}

export default App
