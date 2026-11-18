import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { 
  Search, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  Plane, 
  GraduationCap, 
  ShieldCheck, 
  Award,
  Users,
  Compass
} from 'lucide-react';

export default function HeroSection({ onSearchFilter }) {
  const { setIsBookingOpen, setIsEligibilityOpen, setCurrentView } = useApp();
  const [selectedCountry, setSelectedCountry] = useState('all');
  const [selectedDegree, setSelectedDegree] = useState('all');
  const [selectedField, setSelectedField] = useState('all');

  const handleSearch = (e) => {
    e.preventDefault();
    if (onSearchFilter) {
      onSearchFilter({ country: selectedCountry, degree: selectedDegree, field: selectedField });
    }
    document.getElementById('universities-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-950 via-slate-900 to-slate-900 text-white pt-12 pb-20">
      {/* Background Glows & Patterns */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Announcement Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-900/60 border border-blue-700/60 text-blue-200 text-xs sm:text-sm font-medium backdrop-blur-md shadow-sm">
            <span className="flex h-2 w-2 rounded-full bg-amber-400 animate-pulse"></span>
            <span className="text-amber-400 font-bold">Fall 2025 Admissions Open:</span>
            <span>USA, UK, Canada & Australia Application Deadlines Approaching</span>
            <ArrowRight className="w-3.5 h-3.5 text-blue-300" />
          </div>
        </div>

        {/* Hero Main Content */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] text-white">
            Study at Top Universities Worldwide With <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-amber-300">
              RoyalSurya Education Foundation
            </span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-slate-300 leading-relaxed font-normal max-w-3xl mx-auto">
            Nepal’s premier international education agency. We deliver transparent admissions, dedicated SOP & documentation mentoring, 
            high-value scholarships, and an industry-leading <strong className="text-amber-400 font-bold">98.4% visa grant rate</strong>.
          </p>

          {/* Quick Action Buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => setIsBookingOpen(true)}
              className="flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-bold text-slate-900 bg-amber-400 hover:bg-amber-300 shadow-lg shadow-amber-400/25 transition-all transform hover:-translate-y-0.5"
            >
              <GraduationCap className="w-5 h-5 text-slate-950" />
              Book Free Counseling Session
            </button>

            <button
              onClick={() => setIsEligibilityOpen(true)}
              className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-white bg-slate-800/90 hover:bg-slate-700 border border-slate-700 backdrop-blur-md transition-all"
            >
              <Sparkles className="w-4 h-4 text-indigo-400" />
              Calculate My Admission Chances
            </button>

            <button
              onClick={() => setCurrentView('student')}
              className="flex items-center gap-2 px-5 py-3.5 rounded-xl font-medium text-emerald-400 bg-emerald-950/40 hover:bg-emerald-900/60 border border-emerald-800/60 transition-all text-sm"
            >
              <span>Explore Student Dashboard</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Interactive Search Bar / Course Finder Card */}
        <div className="max-w-5xl mx-auto bg-slate-900/90 rounded-2xl border border-slate-800 p-4 sm:p-6 shadow-2xl backdrop-blur-xl">
          <form onSubmit={handleSearch} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
            {/* Country Selector */}
            <div>
              <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">
                Destination Country
              </label>
              <select
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3.5 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium"
              >
                <option value="all">🌍 All Destinations</option>
                <option value="USA">🇺🇸 United States</option>
                <option value="UK">🇬🇧 United Kingdom</option>
                <option value="Canada">🇨🇦 Canada</option>
                <option value="Australia">🇦🇺 Australia</option>
                <option value="Germany">🇩🇪 Germany</option>
                <option value="Ireland">🇮🇪 Ireland</option>
              </select>
            </div>

            {/* Study Level */}
            <div>
              <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">
                Degree Level
              </label>
              <select
                value={selectedDegree}
                onChange={(e) => setSelectedDegree(e.target.value)}
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3.5 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium"
              >
                <option value="all">🎓 All Degree Levels</option>
                <option value="Bachelor">Bachelor Degree (Undergraduate)</option>
                <option value="Master">Master Degree (Postgraduate)</option>
                <option value="PhD">Doctorate / PhD Research</option>
              </select>
            </div>

            {/* Program Area */}
            <div>
              <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">
                Field of Study
              </label>
              <select
                value={selectedField}
                onChange={(e) => setSelectedField(e.target.value)}
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3.5 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium"
              >
                <option value="all">💡 All Study Fields</option>
                <option value="Computer Science">Computer Science & AI</option>
                <option value="Business">Business, Finance & MBA</option>
                <option value="Engineering">Engineering & Robotics</option>
                <option value="Health">Health Sciences & Nursing</option>
              </select>
            </div>

            {/* Search Submit Button */}
            <div className="flex items-end">
              <button
                type="submit"
                className="w-full h-[46px] flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl shadow-md transition-all"
              >
                <Search className="w-4 h-4" />
                <span>Search Programs</span>
              </button>
            </div>

          </form>

          {/* Quick tags */}
          <div className="mt-4 pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between text-xs text-slate-400 gap-2">
            <span className="font-semibold text-slate-300">Trending Searches:</span>
            <div className="flex flex-wrap gap-2">
              <span className="px-2.5 py-1 bg-slate-800 rounded-md border border-slate-700/60 text-slate-300">
                🇺🇸 US STEM OPT (3 Years)
              </span>
              <span className="px-2.5 py-1 bg-slate-800 rounded-md border border-slate-700/60 text-slate-300">
                🇬🇧 1-Year UK Masters
              </span>
              <span className="px-2.5 py-1 bg-slate-800 rounded-md border border-slate-700/60 text-slate-300">
                🇩🇪 Germany Public Universities (Zero Tuition)
              </span>
              <span className="px-2.5 py-1 bg-slate-800 rounded-md border border-slate-700/60 text-slate-300">
                🇦🇺 Australia Subclass 500
              </span>
            </div>
          </div>
        </div>

        {/* Credibility & Statistics Strip */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center border-t border-slate-800/80 pt-10">
          <div className="p-4 rounded-xl bg-slate-800/30 border border-slate-800">
            <p className="text-3xl sm:text-4xl font-extrabold text-amber-400">98.4%</p>
            <p className="text-xs sm:text-sm font-semibold text-slate-300 mt-1">Visa Success Rate</p>
            <p className="text-[11px] text-slate-500">Over 1,140 visas granted in 2024</p>
          </div>

          <div className="p-4 rounded-xl bg-slate-800/30 border border-slate-800">
            <p className="text-3xl sm:text-4xl font-extrabold text-blue-400">12,500+</p>
            <p className="text-xs sm:text-sm font-semibold text-slate-300 mt-1">Students Placed Globally</p>
            <p className="text-[11px] text-slate-500">Across 6 key continents</p>
          </div>

          <div className="p-4 rounded-xl bg-slate-800/30 border border-slate-800">
            <p className="text-3xl sm:text-4xl font-extrabold text-emerald-400">450+</p>
            <p className="text-xs sm:text-sm font-semibold text-slate-300 mt-1">Partner Universities</p>
            <p className="text-[11px] text-slate-500">Direct authorized representations</p>
          </div>

          <div className="p-4 rounded-xl bg-slate-800/30 border border-slate-800">
            <p className="text-3xl sm:text-4xl font-extrabold text-purple-400">$18M+</p>
            <p className="text-xs sm:text-sm font-semibold text-slate-300 mt-1">Scholarships Secured</p>
            <p className="text-[11px] text-slate-500">Merit & need-based waivers</p>
          </div>
        </div>

      </div>
    </section>
  );
}
