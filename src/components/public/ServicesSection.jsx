import React from 'react';
import { useApp } from '../../context/AppContext';
import { 
  FileCheck2, 
  BookOpenCheck, 
  MessagesSquare, 
  Landmark, 
  ShieldAlert, 
  PlaneTakeoff, 
  CheckCircle2, 
  ArrowRight,
  Sparkles
} from 'lucide-react';

export default function ServicesSection() {
  const { setIsBookingOpen, setIsEligibilityOpen } = useApp();

  const services = [
    {
      icon: <BookOpenCheck className="w-6 h-6 text-blue-600" />,
      title: 'IELTS, PTE & Test Preparation',
      description: 'Certified Cambridge & British Council instructors. Free diagnostic mock exams, unlimited computer lab access & updated 2025 question banks.',
      badge: 'High Score Guarantee'
    },
    {
      icon: <FileCheck2 className="w-6 h-6 text-indigo-600" />,
      title: 'SOP & Documentation Mentorship',
      description: 'Personalized Statement of Purpose editing by native English academics. Thorough compliance checks on transcripts, LORs & financial balance.',
      badge: 'No Plagiarism'
    },
    {
      icon: <MessagesSquare className="w-6 h-6 text-emerald-600" />,
      title: 'Mock Visa Interview Coaching',
      description: 'Simulated 1-on-1 visa interview sessions mimicking US Embassy Kathmandu, UK VI, and Australian GS questions with seasoned ex-visa officers.',
      badge: '98.4% Visa Success'
    },
    {
      icon: <Landmark className="w-6 h-6 text-amber-600" />,
      title: 'Student Education Loans & Forex',
      description: 'Direct tie-ups with leading "A" Class commercial banks in Nepal for collateral-free and mortgage-backed study loans and rapid Swift payments.',
      badge: 'Fast Bank Approvals'
    },
    {
      icon: <PlaneTakeoff className="w-6 h-6 text-purple-600" />,
      title: 'Pre-Departure & Accommodation',
      description: 'Airport pickup assistance, student dormitory bookings, forex travel cards, and essential orientation on culture, part-time work, and tax.',
      badge: 'Post-Landing Care'
    },
    {
      icon: <ShieldAlert className="w-6 h-6 text-rose-600" />,
      title: 'Visa Refusal Re-application Desk',
      description: 'Specialized casework for students who previously faced F-1 or Subclass 500 refusals. Detailed CAIPS/GCMS note analysis and dossier rebuilding.',
      badge: 'Specialized Recovery'
    }
  ];

  return (
    <section id="services-section" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-900/60 text-blue-300 text-xs font-bold uppercase tracking-wider mb-3 border border-blue-700/50">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            Complete End-to-End Solutions
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Comprehensive Services for Your Study Abroad Journey
          </h2>
          <p className="mt-3 text-slate-400 text-base">
            From your very first IELTS practice test to landing at your university campus abroad, RoyalSurya supports you at every single milestone.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, idx) => (
            <div
              key={idx}
              className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-6 hover:border-blue-500/50 hover:bg-slate-800 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {s.icon}
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-blue-950 text-blue-300 border border-blue-800">
                    {s.badge}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{s.title}</h3>
                <p className="text-sm text-slate-300 leading-relaxed">{s.description}</p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-700/60">
                <button
                  onClick={() => setIsBookingOpen(true)}
                  className="text-xs font-bold text-blue-400 group-hover:text-blue-300 flex items-center gap-1.5 transition-colors"
                >
                  <span>Learn More & Consult Advisor</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 rounded-3xl p-8 sm:p-10 border border-blue-700/60 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center lg:text-left">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Ready to begin your international application?
            </h3>
            <p className="text-sm text-blue-200 max-w-xl">
              Meet our Senior Registered Counselors at RoyalSurya Kathmandu HQ or any regional branch for a personalized roadmap.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setIsBookingOpen(true)}
              className="px-6 py-3 rounded-xl font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 shadow-md transition-all text-sm"
            >
              Book In-Person Counseling
            </button>
            <button
              onClick={() => setIsEligibilityOpen(true)}
              className="px-5 py-3 rounded-xl font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-600 transition-all text-sm"
            >
              Test Your Eligibility Online
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
