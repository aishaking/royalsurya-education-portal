import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { ArrowRight, DollarSign, Clock, ShieldCheck, Sparkles, ExternalLink } from 'lucide-react';

export default function DestinationCards() {
  const { destinations, setSelectedDestination, setIsBookingOpen } = useApp();
  const [activeFilter, setActiveFilter] = useState('all');

  const filtered = activeFilter === 'all' 
    ? destinations 
    : destinations.filter(d => {
        if (activeFilter === 'english') return ['usa', 'uk', 'canada', 'australia', 'ireland'].includes(d.id);
        if (activeFilter === 'stem') return ['usa', 'germany', 'canada'].includes(d.id);
        if (activeFilter === 'pr') return ['canada', 'australia'].includes(d.id);
        return true;
      });

  return (
    <section id="destinations-section" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            Global Study Destinations
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Explore Your Dream Country to Study & Work
          </h2>
          <p className="mt-3 text-slate-600 text-base">
            Compare post-study work rights, living costs, and visa success benchmarks across top destination hubs.
          </p>

          {/* Quick Filter Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                activeFilter === 'all' 
                  ? 'bg-blue-600 text-white shadow-sm' 
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              All Destinations
            </button>
            <button
              onClick={() => setActiveFilter('english')}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                activeFilter === 'english' 
                  ? 'bg-blue-600 text-white shadow-sm' 
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              Native English Speaking
            </button>
            <button
              onClick={() => setActiveFilter('stem')}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                activeFilter === 'stem' 
                  ? 'bg-blue-600 text-white shadow-sm' 
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              Top STEM & Tech Hubs
            </button>
            <button
              onClick={() => setActiveFilter('pr')}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                activeFilter === 'pr' 
                  ? 'bg-blue-600 text-white shadow-sm' 
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              PR & Migration Pathways
            </button>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((dest) => (
            <div
              key={dest.id}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              {/* Image banner */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={dest.heroImage}
                  alt={dest.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                
                {/* Flag & Title on image */}
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{dest.flag}</span>
                    <h3 className="text-xl font-bold">{dest.name}</h3>
                  </div>
                  <span className="px-2 py-0.5 bg-emerald-500 text-white text-[11px] font-bold rounded-md shadow-sm">
                    {dest.visaSuccessRate} Visa Success
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                
                {/* Tagline */}
                <p className="text-xs text-slate-600 font-medium line-clamp-2">
                  {dest.tagline}
                </p>

                {/* Specs Box */}
                <div className="bg-slate-50 rounded-xl p-3 space-y-2 border border-slate-100 text-xs text-slate-700">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 flex items-center gap-1.5">
                      <DollarSign className="w-3.5 h-3.5 text-blue-600" />
                      Tuition:
                    </span>
                    <span className="font-bold text-slate-900">{dest.avgTuition}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-emerald-600" />
                      Post-Study Work:
                    </span>
                    <span className="font-semibold text-slate-800">{dest.postStudyWork}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-indigo-600" />
                      Visa Stream:
                    </span>
                    <span className="text-slate-800 font-medium">{dest.visaType}</span>
                  </div>
                </div>

                {/* Popular Majors */}
                <div>
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">
                    Popular Majors
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {dest.popularFields.slice(0, 3).map((field, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 bg-slate-100 text-slate-700 text-[11px] font-medium rounded border border-slate-200"
                      >
                        {field}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action button */}
                <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedDestination(dest)}
                    className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1 transition-colors"
                  >
                    <span>Full Country Guide</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </button>

                  <button
                    onClick={() => setIsBookingOpen(true)}
                    className="px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg shadow-sm transition-colors"
                  >
                    Consult Advisor
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
