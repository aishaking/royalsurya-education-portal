import React from 'react';
import { useApp } from '../../context/AppContext';
import { Globe, GraduationCap, BriefcaseBusiness, Sparkles, ChevronRight } from 'lucide-react';

export default function RoleSwitcher() {
  const { currentView, setCurrentView, student } = useApp();

  return (
    <div className="bg-slate-900 border-b border-slate-800 text-slate-200 py-2.5 px-4 text-xs font-medium sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        {/* Left: Indicator */}
        <div className="flex items-center gap-2">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-slate-400 hidden sm:inline">Portal Mode Switcher:</span>
          <span className="text-amber-400 font-semibold tracking-wide uppercase text-[11px] flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5" />
            RoyalSurya Unified Platform
          </span>
        </div>

        {/* Center: Switcher Buttons */}
        <div className="inline-flex p-1 bg-slate-800/90 rounded-lg border border-slate-700/80 shadow-inner">
          <button
            onClick={() => setCurrentView('public')}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-md transition-all duration-200 ${
              currentView === 'public'
                ? 'bg-blue-600 text-white font-semibold shadow-sm'
                : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
            }`}
          >
            <Globe className="w-3.5 h-3.5" />
            <span>Public Website</span>
          </button>

          <button
            onClick={() => setCurrentView('student')}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-md transition-all duration-200 ${
              currentView === 'student'
                ? 'bg-emerald-600 text-white font-semibold shadow-sm'
                : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
            }`}
          >
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Student Dashboard</span>
            <span className="hidden md:inline px-1.5 py-0.2 text-[10px] bg-emerald-950/60 text-emerald-300 rounded border border-emerald-500/30">
              Aarav
            </span>
          </button>

          <button
            onClick={() => setCurrentView('ceo')}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-md transition-all duration-200 ${
              currentView === 'ceo'
                ? 'bg-amber-600 text-white font-semibold shadow-sm'
                : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
            }`}
          >
            <BriefcaseBusiness className="w-3.5 h-3.5" />
            <span>CEO Executive Suite</span>
            <span className="hidden md:inline px-1.5 py-0.2 text-[10px] bg-amber-950/60 text-amber-300 rounded border border-amber-500/30">
              Agency HQ
            </span>
          </button>
        </div>

        {/* Right: Quick Context Info */}
        <div className="hidden lg:flex items-center gap-3 text-slate-400 text-[11px]">
          <span>Logged in as:</span>
          {currentView === 'public' && (
            <span className="text-slate-200 bg-slate-800 px-2 py-0.5 rounded border border-slate-700">
              Prospective Student / Visitor
            </span>
          )}
          {currentView === 'student' && (
            <span className="text-emerald-300 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/50">
              {student.profile.name} (MS CS Applicant)
            </span>
          )}
          {currentView === 'ceo' && (
            <span className="text-amber-300 bg-amber-950/60 px-2 py-0.5 rounded border border-amber-800/50">
              Managing Director & CEO Office
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
