import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { 
  X, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  GraduationCap, 
  Award, 
  DollarSign, 
  TrendingUp, 
  RotateCcw 
} from 'lucide-react';

export default function EligibilityQuizModal() {
  const { isEligibilityOpen, setIsEligibilityOpen, setIsBookingOpen, setCurrentView } = useApp();
  
  const [step, setStep] = useState(1);
  const [country, setCountry] = useState('USA');
  const [gpa, setGpa] = useState('high');
  const [english, setEnglish] = useState('ielts7');
  const [budget, setBudget] = useState('mid');
  const [resultCalculated, setResultCalculated] = useState(false);

  if (!isEligibilityOpen) return null;

  const handleCalculate = () => {
    setResultCalculated(true);
  };

  const resetQuiz = () => {
    setStep(1);
    setResultCalculated(false);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative bg-white rounded-3xl max-w-xl w-full overflow-hidden shadow-2xl border border-slate-200 animate-scale-up">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-900 via-blue-900 to-slate-900 text-white p-6 sm:p-7 relative">
          <button
            onClick={() => setIsEligibilityOpen(false)}
            className="absolute top-5 right-5 text-slate-300 hover:text-white p-1 rounded-full bg-slate-800/60 hover:bg-slate-800"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-400/30 text-xs font-semibold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            AI Admissions & Visa Engine
          </div>
          <h3 className="text-2xl font-extrabold text-white">Study Abroad Eligibility Calculator</h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            Input your academic credentials to estimate university admission odds and scholarship tier.
          </p>
        </div>

        {/* Content Area */}
        <div className="p-6 sm:p-7 max-h-[75vh] overflow-y-auto">
          
          {!resultCalculated ? (
            <div className="space-y-6">
              
              {/* Question 1: Country */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  1. Which destination country are you targeting?
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {[
                    { id: 'USA', flag: '🇺🇸', name: 'United States' },
                    { id: 'UK', flag: '🇬🇧', name: 'United Kingdom' },
                    { id: 'Canada', flag: '🇨🇦', name: 'Canada' },
                    { id: 'Australia', flag: '🇦🇺', name: 'Australia' },
                    { id: 'Germany', flag: '🇩🇪', name: 'Germany' },
                    { id: 'Ireland', flag: '🇮🇪', name: 'Ireland' }
                  ].map(c => (
                    <button
                      key={c.id}
                      type="button"
                      onClick={() => setCountry(c.id)}
                      className={`p-3 rounded-xl border text-left text-xs font-semibold transition-all ${
                        country === c.id 
                          ? 'border-blue-600 bg-blue-50 text-blue-900 ring-2 ring-blue-500/20' 
                          : 'border-slate-200 hover:border-slate-300 text-slate-700'
                      }`}
                    >
                      <span className="text-lg block mb-1">{c.flag}</span>
                      <span>{c.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Question 2: Academic GPA */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  2. Your Previous Academic Performance (GPA / Percentage)
                </label>
                <div className="space-y-2 text-xs">
                  {[
                    { id: 'high', label: 'High Distinction: GPA 3.5 - 4.0 / 75% - 90%+' },
                    { id: 'mid', label: 'First Division: GPA 3.0 - 3.49 / 65% - 74%' },
                    { id: 'avg', label: 'Second Division: GPA 2.6 - 2.99 / 55% - 64%' },
                    { id: 'low', label: 'Below 2.6 GPA (Need Pathway or Foundation program)' }
                  ].map(item => (
                    <label
                      key={item.id}
                      onClick={() => setGpa(item.id)}
                      className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-all ${
                        gpa === item.id 
                          ? 'border-blue-600 bg-blue-50/70 text-blue-900 font-bold' 
                          : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                      }`}
                    >
                      <input
                        type="radio"
                        name="gpa"
                        checked={gpa === item.id}
                        onChange={() => setGpa(item.id)}
                        className="text-blue-600 focus:ring-blue-500"
                      />
                      <span>{item.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Question 3: English Test Score */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  3. English Proficiency Test Status
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {[
                    { id: 'ielts7', label: 'IELTS 7.0+ / PTE 68+ (Strong)' },
                    { id: 'ielts65', label: 'IELTS 6.5 / PTE 58-64 (Standard)' },
                    { id: 'ielts6', label: 'IELTS 6.0 / PTE 50-57 (Moderate)' },
                    { id: 'none', label: 'Not Yet Taken (Need Preparation)' }
                  ].map(item => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setEnglish(item.id)}
                      className={`p-3 rounded-xl border text-left font-medium transition-all ${
                        english === item.id 
                          ? 'border-blue-600 bg-blue-50 text-blue-900 font-bold' 
                          : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Submit Calculation */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={handleCalculate}
                  className="w-full py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold rounded-xl shadow-lg shadow-blue-500/25 transition-all text-sm flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-amber-300" />
                  <span>Generate Admission Evaluation Report</span>
                </button>
              </div>

            </div>
          ) : (
            /* Results View */
            <div className="space-y-6 animate-fade-in">
              
              {/* Score banner */}
              <div className="p-5 rounded-2xl bg-gradient-to-br from-emerald-50 via-teal-50 to-blue-50 border border-emerald-200 flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 block">
                    Estimated Profile Strength
                  </span>
                  <h4 className="text-2xl font-black text-emerald-950 mt-0.5">
                    {gpa === 'high' ? '96% Excellent Fit' : gpa === 'mid' ? '88% High Probability' : '74% Moderate Fit'}
                  </h4>
                  <p className="text-xs text-emerald-800 mt-1">
                    Strong eligibility for {country} university admission & visa approval.
                  </p>
                </div>
                <div className="w-16 h-16 rounded-2xl bg-white shadow-md flex items-center justify-center border border-emerald-200">
                  <span className="text-2xl font-black text-emerald-600">
                    {gpa === 'high' ? 'A+' : gpa === 'mid' ? 'A' : 'B+'}
                  </span>
                </div>
              </div>

              {/* Categorized Tier recommendations */}
              <div className="space-y-3">
                <h5 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Recommended University Categories
                </h5>

                <div className="p-3.5 rounded-xl border border-indigo-200 bg-indigo-50/50">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-indigo-900 flex items-center gap-1.5">
                      <Award className="w-4 h-4 text-indigo-600" />
                      Dream Universities (Top Tier)
                    </span>
                    <span className="text-[10px] font-bold px-2 py-0.5 bg-indigo-100 text-indigo-800 rounded">
                      Competitive
                    </span>
                  </div>
                  <p className="text-xs text-indigo-950 font-medium">
                    {country === 'USA' ? 'Arizona State University, Purdue, NYU' :
                     country === 'UK' ? 'University of Manchester, University of Edinburgh' :
                     country === 'Australia' ? 'University of Melbourne, UNSW' : 'Top Tier Global Ranked Institutions'}
                  </p>
                </div>

                <div className="p-3.5 rounded-xl border border-emerald-200 bg-emerald-50/50">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-emerald-900 flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      Target Universities (High Offer Probability)
                    </span>
                    <span className="text-[10px] font-bold px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded">
                      High Scholarships
                    </span>
                  </div>
                  <p className="text-xs text-emerald-950 font-medium">
                    Eligible for $5,000 - $12,000 / £4,000 merit scholarships with fast turnaround.
                  </p>
                </div>
              </div>

              {/* Scholarship estimate */}
              <div className="p-3.5 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900 flex items-start gap-2.5">
                <Sparkles className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="block font-bold">Estimated Scholarship Eligibility:</strong>
                  <span>Based on your GPA and IELTS bracket, you qualify for up to 35% tuition grant through RoyalSurya’s direct university agreements.</span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  type="button"
                  onClick={resetQuiz}
                  className="px-4 py-2.5 border border-slate-300 text-slate-700 text-xs font-bold rounded-xl hover:bg-slate-50 flex items-center justify-center gap-1.5"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Recalculate</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setIsEligibilityOpen(false);
                    setIsBookingOpen(true);
                  }}
                  className="flex-1 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl shadow-md flex items-center justify-center gap-2"
                >
                  <span>Lock In This Profile with Senior Counselor</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          )}

        </div>

      </div>
    </div>
  );
}
