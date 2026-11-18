import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { 
  Search, 
  MapPin, 
  Award, 
  DollarSign, 
  GraduationCap, 
  CheckCircle, 
  SlidersHorizontal, 
  Sparkles,
  ExternalLink,
  ChevronRight
} from 'lucide-react';

export default function UniversityFinder({ searchFilter }) {
  const { universities, setIsBookingOpen, showToast } = useApp();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCountry, setSelectedCountry] = useState(searchFilter?.country || 'all');
  const [selectedDegree, setSelectedDegree] = useState(searchFilter?.degree || 'all');
  const [onlyScholarships, setOnlyScholarships] = useState(false);

  // Sync if parent updates filter
  React.useEffect(() => {
    if (searchFilter?.country && searchFilter.country !== 'all') setSelectedCountry(searchFilter.country);
    if (searchFilter?.degree && searchFilter.degree !== 'all') setSelectedDegree(searchFilter.degree);
  }, [searchFilter]);

  const filteredUniversities = universities.filter(uni => {
    const matchesSearch = searchTerm === '' || 
      uni.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      uni.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
      uni.popularCourses.some(c => c.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesCountry = selectedCountry === 'all' || 
      uni.country.toLowerCase() === selectedCountry.toLowerCase();

    const matchesDegree = selectedDegree === 'all' || 
      uni.degrees.includes(selectedDegree);

    const matchesScholarship = !onlyScholarships || uni.scholarshipAvailable;

    return matchesSearch && matchesCountry && matchesDegree && matchesScholarship;
  });

  return (
    <section id="universities-section" className="py-20 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider mb-2">
              <GraduationCap className="w-3.5 h-3.5 text-blue-600" />
              Partner Institutions
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Featured Global Partner Universities
            </h2>
            <p className="mt-2 text-slate-600 text-sm sm:text-base">
              Direct authorized representation, application fee waivers, and guaranteed priority admission processing.
            </p>
          </div>

          <div className="text-xs font-semibold text-slate-500 bg-slate-100 px-3 py-2 rounded-xl border border-slate-200 self-start md:self-auto">
            Showing <strong className="text-slate-900">{filteredUniversities.length}</strong> of {universities.length} Partner Universities
          </div>
        </div>

        {/* Filter Toolbar */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-5 mb-8 shadow-sm space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            
            {/* Search input */}
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search university, major (e.g. AI, MBA), or city..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-white border border-slate-300 rounded-xl pl-10 pr-4 py-2.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-inner"
              />
            </div>

            {/* Country Dropdown */}
            <div>
              <select
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
                className="w-full bg-white border border-slate-300 rounded-xl px-3 py-2.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">🌍 All Countries</option>
                <option value="USA">🇺🇸 USA</option>
                <option value="UK">🇬🇧 United Kingdom</option>
                <option value="Canada">🇨🇦 Canada</option>
                <option value="Australia">🇦🇺 Australia</option>
                <option value="Germany">🇩🇪 Germany</option>
                <option value="Ireland">🇮🇪 Ireland</option>
              </select>
            </div>

            {/* Degree Level */}
            <div>
              <select
                value={selectedDegree}
                onChange={(e) => setSelectedDegree(e.target.value)}
                className="w-full bg-white border border-slate-300 rounded-xl px-3 py-2.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">🎓 All Levels</option>
                <option value="Bachelor">Bachelor (Undergraduate)</option>
                <option value="Master">Master (Postgraduate)</option>
                <option value="PhD">Doctorate / PhD</option>
              </select>
            </div>

          </div>

          {/* Toggle pill */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-slate-200 text-xs">
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="scholarshipToggle"
                checked={onlyScholarships}
                onChange={(e) => setOnlyScholarships(e.target.checked)}
                className="w-4 h-4 text-blue-600 rounded border-slate-300 focus:ring-blue-500"
              />
              <label htmlFor="scholarshipToggle" className="font-semibold text-slate-700 cursor-pointer flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                Show only universities with active scholarships available
              </label>
            </div>

            {(searchTerm || selectedCountry !== 'all' || selectedDegree !== 'all' || onlyScholarships) && (
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCountry('all');
                  setSelectedDegree('all');
                  setOnlyScholarships(false);
                }}
                className="text-xs text-blue-600 hover:text-blue-800 font-semibold"
              >
                Reset Filters
              </button>
            )}
          </div>
        </div>

        {/* University Listings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredUniversities.map((uni) => (
            <div
              key={uni.id}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              {/* Header with image */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={uni.image}
                  alt={uni.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                
                {/* Ranking tag */}
                <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md px-2.5 py-1 rounded-md text-[11px] font-bold text-amber-400 border border-slate-700/80 flex items-center gap-1">
                  <Award className="w-3.5 h-3.5 text-amber-400" />
                  {uni.globalRank}
                </div>

                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <h3 className="text-lg font-bold leading-snug drop-shadow">{uni.name}</h3>
                  <p className="text-xs text-slate-300 flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3 h-3 text-red-400" />
                    {uni.city}, {uni.country} {uni.flag}
                  </p>
                </div>
              </div>

              {/* Specs & Tags */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                
                {/* Badges */}
                <div className="flex flex-wrap gap-1.5">
                  {uni.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 bg-blue-50 text-blue-700 text-[10px] font-bold rounded border border-blue-100"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Info block */}
                <div className="space-y-2 bg-slate-50 p-3 rounded-xl border border-slate-100 text-xs">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500">Estimated Tuition:</span>
                    <span className="font-bold text-slate-900">{uni.tuition}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500">Min. English Requirement:</span>
                    <span className="font-semibold text-slate-800">IELTS {uni.minIelts} / Duolingo 115</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500">GRE / GMAT Requirement:</span>
                    <span className="font-semibold text-slate-800">{uni.greRequired}</span>
                  </div>
                  {uni.scholarshipAvailable && (
                    <div className="flex justify-between items-center pt-1 border-t border-slate-200 text-emerald-700 font-semibold">
                      <span className="flex items-center gap-1">
                        <Sparkles className="w-3 h-3 text-emerald-600" />
                        Scholarship Grant:
                      </span>
                      <span>{uni.scholarshipAmount}</span>
                    </div>
                  )}
                </div>

                {/* Popular Programs */}
                <div>
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                    Featured Programs
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {uni.popularCourses.map((c, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 bg-slate-100 text-slate-700 text-[11px] rounded font-medium"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action button */}
                <div className="pt-2 border-t border-slate-100 flex items-center justify-between gap-2">
                  <button
                    onClick={() => {
                      showToast(`Added ${uni.name} to counseling inquiry.`);
                      setIsBookingOpen(true);
                    }}
                    className="flex-1 py-2.5 px-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold shadow-sm transition-all text-center"
                  >
                    Apply Through RoyalSurya
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

        {filteredUniversities.length === 0 && (
          <div className="text-center py-16 bg-slate-50 rounded-2xl border border-dashed border-slate-300">
            <GraduationCap className="w-12 h-12 text-slate-400 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-800">No partner universities matched your filter</h3>
            <p className="text-sm text-slate-500 mt-1">Try resetting the country or degree filter criteria.</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCountry('all');
                setSelectedDegree('all');
                setOnlyScholarships(false);
              }}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg text-xs font-semibold shadow-sm"
            >
              Reset All Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
