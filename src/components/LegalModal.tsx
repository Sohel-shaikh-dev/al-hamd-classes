import { X } from 'lucide-react'
import { useEffect } from 'react'

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'privacy' | 'terms' | null;
}

const LegalModal = ({ isOpen, onClose, type }: LegalModalProps) => {
  // Prevent scrolling on body when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  if (!isOpen || !type) return null;

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 sm:p-6 md:p-12">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative w-full max-w-4xl max-h-full bg-white rounded-[2rem] shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 md:p-8 border-b border-gray-100 bg-gray-50/50">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-purple uppercase tracking-tight">
            {type === 'privacy' ? 'Privacy Policy' : 'Terms of Service'}
          </h2>
          <button 
            onClick={onClose}
            className="p-2 bg-white hover:bg-brand-red hover:text-white text-gray-400 rounded-full transition-colors shadow-sm"
          >
            <X size={24} />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8">
          <div className="space-y-8 text-gray-700 text-base md:text-lg leading-relaxed">
            
            {type === 'privacy' && (
              <>
                <section>
                  <h2 className="text-2xl font-bold text-brand-dark mb-4">1. Introduction</h2>
                  <p>
                    At <strong className="text-brand-purple">AL-HAMD CLASSES</strong>, we prioritize the privacy and security of our students and parents. 
                    This Privacy Policy outlines how we collect, use, and protect the personal information 
                    you provide when interacting with our educational institute.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-brand-dark mb-4">2. Information Collection</h2>
                  <p>
                    We collect information to provide better educational guidance and admission assistance. This includes:
                  </p>
                  <ul className="list-disc pl-6 mt-3 space-y-2 marker:text-brand-yellow">
                    <li><strong>Personal Data:</strong> Student names, age, grade level, and academic history.</li>
                    <li><strong>Contact Data:</strong> Parent/Guardian phone numbers, email addresses, and residential addresses (specifically in Bandra East or surrounding areas).</li>
                    <li><strong>Communication Data:</strong> Inquiries submitted via our website, WhatsApp, phone calls, or email.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-brand-dark mb-4">3. WhatsApp & Contact Privacy</h2>
                  <p>
                    When you use our floating "WhatsApp Us" feature or call our official numbers, 
                    we securely store your contact details solely for the purpose of assisting you with admission inquiries, counseling, and academic updates. 
                    We do <strong className="text-brand-red">NOT</strong> spam or sell your phone numbers to third-party marketing agencies.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-brand-dark mb-4">4. Data Protection & Usage</h2>
                  <p>
                    The information we collect is strictly used for internal administrative purposes, such as:
                  </p>
                  <ul className="list-disc pl-6 mt-3 space-y-2 marker:text-brand-yellow">
                    <li>Processing student enrollments for our School and College sections.</li>
                    <li>Providing updates regarding batches, fees, and examination schedules.</li>
                    <li>Sharing student progress and results with respective parents/guardians.</li>
                  </ul>
                  <p className="mt-4">
                    All physical and digital records are stored securely at our institute premise and protected digital systems.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-brand-dark mb-4">5. Third-Party Services</h2>
                  <p>
                    Our website may utilize essential third-party services (like Google Maps for location guidance or WhatsApp for messaging). 
                    These services adhere to their own strict privacy policies. AL-HAMD CLASSES ensures that no sensitive academic data 
                    is shared externally without explicit parental consent.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-brand-dark mb-4">6. Contact Us</h2>
                  <p>
                    If you have any questions or concerns regarding this Privacy Policy or your data, please visit us directly for a counseling session at:
                  </p>
                  <div className="mt-6 bg-brand-purple text-white p-6 md:p-8 rounded-2xl shadow-lg border-l-4 border-brand-yellow">
                    <strong className="text-xl tracking-wider">AL-HAMD CLASSES</strong><br /><br />
                    <span className="opacity-90">
                      356, Behram Nagar, Bandra East, Mumbai, Maharashtra 400051<br />
                      Email: kasimjamadar@gmail.com<br />
                      Phone: +91 98703 26626
                    </span>
                  </div>
                </section>
                
                <p className="text-sm text-gray-500 pt-8 border-t border-gray-200 font-medium">
                  Last updated: May 2026. This policy is subject to change at the discretion of the AL-HAMD CLASSES administration.
                </p>
              </>
            )}

            {type === 'terms' && (
              <>
                <section>
                  <h2 className="text-2xl font-bold text-brand-dark mb-4">1. Acceptance of Terms</h2>
                  <p>
                    By accessing the <strong className="text-brand-purple">AL-HAMD CLASSES</strong> website and enrolling in our educational programs, 
                    students and parents/guardians agree to abide by these Terms of Service. 
                    Our primary goal is to maintain a disciplined, respectful, and highly productive academic environment where "Dedication Meets Destination."
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-brand-dark mb-4">2. Admission Policies & Fees</h2>
                  <ul className="list-disc pl-6 space-y-2 marker:text-brand-yellow">
                    <li><strong>Enrollment:</strong> Admission is granted based on available seats and an initial counseling session. AL-HAMD CLASSES reserves the right to accept or decline admissions.</li>
                    <li><strong>Fee Structure:</strong> Fees must be paid according to the scheduled timeline provided during admission. Late fees may apply if deadlines are missed.</li>
                    <li><strong>Refund Policy:</strong> Paid admission and tuition fees are generally non-refundable unless specifically stated in a separate written agreement during enrollment.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-brand-dark mb-4">3. Student Responsibilities & Conduct</h2>
                  <p>
                    AL-HAMD CLASSES maintains strict disciplinary standards to ensure the best outcomes for all students.
                  </p>
                  <ul className="list-disc pl-6 mt-3 space-y-2 marker:text-brand-yellow">
                    <li><strong>Attendance:</strong> Regular attendance and punctuality are mandatory for all scheduled batches (School Section, Private Students, and College Sections).</li>
                    <li><strong>Behavior:</strong> Students must maintain respectful behavior towards faculty, staff, and peers at all times. Any form of harassment, bullying, or disruption of classes will result in strict disciplinary action or suspension.</li>
                    <li><strong>Property:</strong> Students are responsible for the care of institute property. Any intentional damage will be financially recovered from the student's guardian.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-brand-dark mb-4">4. Course Information & Results Disclaimer</h2>
                  <p>
                    While AL-HAMD CLASSES employs highly experienced and qualified faculty to provide top-tier academic coaching, 
                    we do not guarantee specific grades or board exam results. Academic success requires equal dedication and hard work from the student at home. 
                    The "Hall of Fame" results displayed on our website represent real past achievements of our dedicated students, but individual results may vary.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-brand-dark mb-4">5. Communication Terms</h2>
                  <p>
                    Official communication regarding academic updates, holidays, and performance will be sent to the registered parent/guardian's mobile number via WhatsApp or SMS. 
                    Parents are expected to respond promptly to calls from our faculty regarding student performance.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-brand-dark mb-4">6. Institute Rights</h2>
                  <p>
                    AL-HAMD CLASSES reserves the right to modify class schedules, batch timings, or assign different faculty members to specific subjects as deemed necessary for optimal educational delivery. We also reserve the right to update these terms at any time.
                  </p>
                </section>
                
                <p className="text-sm text-gray-500 pt-8 border-t border-gray-200 font-medium">
                  Last updated: May 2026. For detailed physical copies of the rulebook, please consult the administration office in Bandra East.
                </p>
              </>
            )}

          </div>
        </div>

        {/* Footer */}
        <div className="p-6 md:px-8 border-t border-gray-100 bg-gray-50 flex justify-end">
          <button 
            onClick={onClose}
            className="px-8 py-3 bg-brand-purple hover:bg-brand-dark text-white rounded-xl font-medium transition-colors shadow-md hover:shadow-lg"
          >
            I Understand & Close
          </button>
        </div>
      </div>
    </div>
  )
}

export default LegalModal
