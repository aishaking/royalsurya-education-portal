import React from 'react';
import { useApp } from '../../context/AppContext';
import { X, CheckCircle, GraduationCap, DollarSign, Briefcase, Calendar, ShieldCheck, ArrowRight } from 'lucide-react';

export default function DestinationModal() {
  const { selectedDestination, setSelectedDestination, setIsBookingOpen } = useApp();
  if (!selectedDestination) return null;

  const dest = selectedDestination;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-slate-200 animate-scale-up">
        
        {/* Header Image banner */}
        <div className="relative h-56 w-full">
          <img 
            src={dest.heroImage} 
            alt={dest.name} 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/50 to-transparent" />
          
          <button 
            onClick={() => setSelectedDestination(null)}
            className="absolute top-4 right-4 bg-slate-900/70 hover:bg-slate-900 text-white p-2 rounded-full backdrop-blur-md transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-6 right-6 flex items-end justify-between">
            <div>
              <span className="text-3xl">{dest.flag}</span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">Study in {dest.name}</h3>
              <p className="text-xs sm:text-sm text-slate-300 font-medium">{dest.tagline}</p>
            </div>
            <div className="hidden sm:block text-right">
              <span className="inline-block px-3 py-1 bg-emerald-500/90 text-white text-xs font-bold rounded-full">
                {dest.visaSuccessRate} Visa Grant Rate
              </span>
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto">
          
          {/* Key Facts Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
              <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium mb-1">
                <DollarSign className="w-3.5 h-3.5 text-blue-600" />
                <span>Avg Tuition</span>
              </div>
              <p className="text-xs sm:text-sm font-bold text-slate-900">{dest.avgTuition}</p>
            </div>

            <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
              <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium mb-1">
                <Briefcase className="w-3.5 h-3.5 text-emerald-600" />
                <span>Work Visa</span>
              </div>
              <p className="text-xs sm:text-sm font-bold text-slate-900">{dest.postStudyWork}</p>
            </div>

            <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
              <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium mb-1">
                <ShieldCheck className="w-3.5 h-3.5 text-indigo-600" />
                <span>Min IELTS</span>
              </div>
              <p className="text-xs sm:text-sm font-bold text-slate-900">{dest.minIelts}</p>
            </div>

            <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
              <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium mb-1">
                <Calendar className="w-3.5 h-3.5 text-amber-600" />
                <span>Intakes</span>
              </div>
              <p className="text-xs sm:text-sm font-bold text-slate-900">{dest.intakes.join(', ')}</p>
            </div>
          </div>

          {/* Highlights */}
          <div>
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2.5">
              Why Choose {dest.name} with RoyalSurya?
            </h4>
            <div className="space-y-2">
              {dest.highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-sm text-slate-700">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Popular Fields */}
          <div>
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2">
              High-Demand Programs & Majors
            </h4>
            <div className="flex flex-wrap gap-2">
              {dest.popularFields.map((field, idx) => (
                <span key={idx} className="px-3 py-1 bg-blue-50 text-blue-800 text-xs font-semibold rounded-lg border border-blue-100">
                  {field}
                </span>
              ))}
            </div>
          </div>

          {/* Top Institutions Represented */}
          <div>
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2">
              Key Represented Universities
            </h4>
            <div className="flex flex-wrap gap-2">
              {dest.topInstitutions.map((uni, idx) => (
                <span key={idx} className="px-3 py-1 bg-slate-100 text-slate-800 text-xs font-medium rounded-lg border border-slate-200">
                  🏛️ {uni}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Footer CTAs */}
        <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs text-slate-500">
            Official RoyalSurya admissions representation & visa guidance available.
          </span>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={() => setSelectedDestination(null)}
              className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-800"
            >
              Close
            </button>
            <button
              onClick={() => {
                setSelectedDestination(null);
                setIsBookingOpen(true);
              }}
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl shadow-md transition-all"
            >
              <span>Apply for {dest.name}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
