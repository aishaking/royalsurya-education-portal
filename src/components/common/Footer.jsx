import React from 'react';
import { useApp } from '../../context/AppContext';
import { 
  GraduationCap, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ShieldCheck, 
  Award, 
  HeartHandshake, 
  ArrowRight,
  ExternalLink
} from 'lucide-react';

export default function Footer() {
  const { setCurrentView, setIsBookingOpen, setIsEligibilityOpen } = useApp();

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand & Credibility */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-amber-500 p-0.5 shadow-md">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-amber-400" />
                </div>
              </div>
              <div>
                <span className="text-xl font-extrabold text-white">
                  Royal<span className="text-blue-400">Surya</span> Education Foundation
                </span>
                <p className="text-xs text-amber-400 font-semibold uppercase tracking-wider">
                  MoEST Govt. Approved Study Abroad Consultancy
                </p>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-md">
              Empowering ambitious students since 2012 with world-class educational counseling, university admissions in top global destinations, transparent visa processing, and guaranteed pre-departure assistance.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-slate-800 text-blue-400 border border-slate-700">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                ECAN Member #142
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-slate-800 text-emerald-400 border border-slate-700">
                <Award className="w-3.5 h-3.5 text-emerald-400" />
                QEAC Certified Counselors
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-slate-800 text-amber-400 border border-slate-700">
                <HeartHandshake className="w-3.5 h-3.5 text-amber-400" />
                British Council Certified Partner
              </span>
            </div>
          </div>

          {/* Study Destinations */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Top Destinations
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><button onClick={() => setCurrentView('public')} className="hover:text-amber-400 transition-colors">Study in USA 🇺🇸 (F-1 & STEM OPT)</button></li>
              <li><button onClick={() => setCurrentView('public')} className="hover:text-amber-400 transition-colors">Study in UK 🇬🇧 (Russell Group & PSW)</button></li>
              <li><button onClick={() => setCurrentView('public')} className="hover:text-amber-400 transition-colors">Study in Canada 🇨🇦 (U15 & PGWP)</button></li>
              <li><button onClick={() => setCurrentView('public')} className="hover:text-amber-400 transition-colors">Study in Australia 🇦🇺 (Go8 & Subclass 500)</button></li>
              <li><button onClick={() => setCurrentView('public')} className="hover:text-amber-400 transition-colors">Study in Germany 🇩🇪 (Free Tuition STEM)</button></li>
              <li><button onClick={() => setCurrentView('public')} className="hover:text-amber-400 transition-colors">Study in Ireland 🇮🇪 (Tech Silicon Hub)</button></li>
            </ul>
          </div>

          {/* Services & Portals */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Portals & Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button onClick={() => setCurrentView('student')} className="text-emerald-400 hover:text-emerald-300 font-semibold flex items-center gap-1.5">
                  Student Portal Login <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentView('ceo')} className="text-amber-400 hover:text-amber-300 font-semibold flex items-center gap-1.5">
                  CEO Executive Suite <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </li>
              <li><button onClick={() => setIsEligibilityOpen(true)} className="hover:text-white transition-colors">Eligibility Points Calculator</button></li>
              <li><button onClick={() => setIsBookingOpen(true)} className="hover:text-white transition-colors">1-on-1 Counselor Appointment</button></li>
              <li><span className="text-slate-400">IELTS / TOEFL / PTE Prep Classes</span></li>
              <li><span className="text-slate-400">Mock Visa Interview Coaching</span></li>
            </ul>
          </div>

          {/* Contact & Headquarters */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Head Office & Support
            </h4>
            <div className="space-y-3 text-sm text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-1" />
                <span>RoyalSurya Tower, Putalisadak (Opposite Kumari Bank), Kathmandu, Nepal</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <span>+977 01-4439876 / 9801-234567</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>admissions@royalsurya.edu.np</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-indigo-400 shrink-0" />
                <span>Sun - Fri: 7:00 AM - 6:00 PM</span>
              </div>
            </div>
          </div>

        </div>

        {/* Regional Network & Branches */}
        <div className="py-6 border-b border-slate-800 text-xs text-slate-400">
          <p className="font-semibold text-slate-300 mb-2">Our Official Branch Network:</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <span>📍 <strong>Kathmandu HQ:</strong> Putalisadak & New Baneshwor</span>
            <span>📍 <strong>Pokhara:</strong> Lakeside, Ward No. 6</span>
            <span>📍 <strong>Chitwan:</strong> Lions Chowk, Narayangarh</span>
            <span>📍 <strong>Butwal:</strong> Traffic Chowk</span>
            <span>📍 <strong>Biratnagar:</strong> Main Road</span>
            <span>📍 <strong>Sydney Office:</strong> George Street, NSW, Australia</span>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} RoyalSurya Education Foundation Pvt. Ltd. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="hover:text-slate-400 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-slate-400 cursor-pointer">Terms of Service</span>
            <span className="hover:text-slate-400 cursor-pointer">Anti-Fraud & Code of Conduct</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
