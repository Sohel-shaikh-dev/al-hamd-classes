import { useState, lazy, Suspense } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import LegalModal from './components/LegalModal'
import { MessageCircle } from 'lucide-react'

// Lazy load below-the-fold components to improve initial load time
const Subjects = lazy(() => import('./components/Subjects'))
const Courses = lazy(() => import('./components/Courses'))
const WhyChooseUs = lazy(() => import('./components/WhyChooseUs'))
const Admissions = lazy(() => import('./components/Admissions'))
const Results = lazy(() => import('./components/Results'))
const PicnicMemories = lazy(() => import('./components/PicnicMemories'))
const Location = lazy(() => import('./components/Location'))
const FAQ = lazy(() => import('./components/FAQ'))
const Footer = lazy(() => import('./components/Footer'))
const DeveloperModal = lazy(() => import('./components/DeveloperModal'))

// A simple loading placeholder
const SectionLoader = () => (
  <div className="w-full h-32 flex items-center justify-center bg-gray-50/50">
    <div className="w-8 h-8 border-4 border-brand-purple border-t-brand-yellow rounded-full animate-spin"></div>
  </div>
)

function App() {
  const [legalModal, setLegalModal] = useState<'privacy' | 'terms' | null>(null)
  const [isDeveloperModalOpen, setIsDeveloperModalOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      <Header onOpenDeveloper={() => setIsDeveloperModalOpen(true)} />
      
      <main>
        <Hero />
        <About />
        
        <Suspense fallback={<SectionLoader />}>
          <Subjects />
          <Courses />
          <WhyChooseUs />
          <Admissions />
          <Results />
          <PicnicMemories />
          <Location />
          <FAQ />
        </Suspense>
      </main>
      
      <Suspense fallback={<SectionLoader />}>
        <Footer onOpenLegal={setLegalModal} onOpenDeveloper={() => setIsDeveloperModalOpen(true)} />
      </Suspense>

      <LegalModal 
        isOpen={!!legalModal} 
        type={legalModal} 
        onClose={() => setLegalModal(null)} 
      />

      <Suspense fallback={null}>
        <DeveloperModal 
          isOpen={isDeveloperModalOpen}
          onClose={() => setIsDeveloperModalOpen(false)}
        />
      </Suspense>

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
