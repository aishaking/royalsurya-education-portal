import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { 
  GraduationCap, 
  Search, 
  PhoneCall, 
  Compass, 
  Award, 
  Calendar, 
  Menu, 
  X, 
  BookOpen, 
  Globe2, 
  ShieldCheck, 
  UserCircle,
  Briefcase
} from 'lucide-react';

export default function Navbar() {
  const { currentView, setCurrentView, setIsBookingOpen, setIsEligibilityOpen } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-[41px] z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo */}
          <div 
            onClick={() => setCurrentView('public')}
            className="flex items-center gap-3.5 cursor-pointer group"
          >
            <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-blue-700 via-indigo-600 to-amber-500 p-0.5 shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-slate-900 rounded-[10px] flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-amber-400" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-extrabold tracking-tight text-slate-900">
                  Royal<span className="text-blue-600">Surya</span>
                </span>
                <span className="text-[10px] uppercase font-bold tracking-widest px-1.5 py-0.5 bg-amber-100 text-amber-800 rounded">
                  FOUNDATION
                </span>
              </div>
              <p className="text-[11px] text-slate-500 font-medium tracking-wide">
                Premier Study Abroad & Global Career Pathways
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-7 text-sm font-semibold text-slate-600">
            <button 
              onClick={() => {
                setCurrentView('public');
                document.getElementById('destinations-section')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="hover:text-blue-600 flex items-center gap-1 transition-colors"
            >
              <Globe2 className="w-4 h-4 text-slate-400" />
              Destinations
            </button>

            <button 
              onClick={() => {
                setCurrentView('public');
                document.getElementById('universities-section')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="hover:text-blue-600 flex items-center gap-1 transition-colors"
            >
              <BookOpen className="w-4 h-4 text-slate-400" />
              Universities
            </button>

            <button 
              onClick={() => {
                setCurrentView('public');
                document.getElementById('services-section')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="hover:text-blue-600 flex items-center gap-1 transition-colors"
            >
              <ShieldCheck className="w-4 h-4 text-slate-400" />
              Visa & Test Prep
            </button>

            <button 
              onClick={() => setIsEligibilityOpen(true)}
              className="text-indigo-600 hover:text-indigo-700 flex items-center gap-1 transition-colors font-bold"
            >
              <Award className="w-4 h-4" />
              Eligibility Calculator
            </button>
          </nav>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => setIsBookingOpen(true)}
              className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold text-blue-700 bg-blue-50 hover:bg-blue-100 border border-blue-200 transition-colors shadow-sm"
            >
              <Calendar className="w-4 h-4" />
              Book Counseling
            </button>

            {currentView === 'public' ? (
              <button
                onClick={() => setCurrentView('student')}
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-sm shadow-blue-500/25 transition-all"
              >
                <UserCircle className="w-4 h-4" />
                Student Portal
              </button>
            ) : currentView === 'student' ? (
              <button
                onClick={() => setCurrentView('ceo')}
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 shadow-sm transition-all"
              >
                <Briefcase className="w-4 h-4 text-amber-400" />
                CEO Suite
              </button>
            ) : (
              <button
                onClick={() => setCurrentView('public')}
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-all"
              >
                <Globe2 className="w-4 h-4" />
                Public Website
              </button>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setIsBookingOpen(true)}
              className="px-3 py-1.5 text-xs font-semibold bg-blue-50 text-blue-700 rounded-md border border-blue-200"
            >
              Book
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 shadow-xl animate-fade-in">
          <div className="grid grid-cols-2 gap-2 pb-3 border-b border-slate-100">
            <button
              onClick={() => { setCurrentView('student'); setMobileMenuOpen(false); }}
              className="flex items-center justify-center gap-1.5 p-2.5 bg-emerald-50 text-emerald-800 rounded-lg text-xs font-semibold border border-emerald-200"
            >
              <UserCircle className="w-4 h-4" />
              Student Portal
            </button>
            <button
              onClick={() => { setCurrentView('ceo'); setMobileMenuOpen(false); }}
              className="flex items-center justify-center gap-1.5 p-2.5 bg-amber-50 text-amber-800 rounded-lg text-xs font-semibold border border-amber-200"
            >
              <Briefcase className="w-4 h-4 text-amber-600" />
              CEO Executive
            </button>
          </div>

          <div className="space-y-1">
            <button
              onClick={() => {
                setCurrentView('public');
                setMobileMenuOpen(false);
                document.getElementById('destinations-section')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full text-left px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-md"
            >
              Study Destinations (USA, UK, CA, AU, DE, IE)
            </button>
            <button
              onClick={() => {
                setCurrentView('public');
                setMobileMenuOpen(false);
                document.getElementById('universities-section')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full text-left px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-md"
            >
              Partner Universities & Programs
            </button>
            <button
              onClick={() => {
                setIsEligibilityOpen(true);
                setMobileMenuOpen(false);
              }}
              className="w-full text-left px-3 py-2 text-sm font-semibold text-indigo-600 hover:bg-indigo-50 rounded-md"
            >
              ✨ Check Your Admission Eligibility
            </button>
          </div>

          <div className="pt-2">
            <button
              onClick={() => {
                setIsBookingOpen(true);
                setMobileMenuOpen(false);
              }}
              className="w-full py-2.5 text-center text-sm font-semibold text-white bg-blue-600 rounded-lg shadow-sm"
            >
              Schedule Free 1-on-1 Counseling
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
