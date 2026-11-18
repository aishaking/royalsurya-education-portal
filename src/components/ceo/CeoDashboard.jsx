import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { 
  Briefcase, 
  DollarSign, 
  Users, 
  ShieldCheck, 
  TrendingUp, 
  Award, 
  Building2, 
  Download, 
  Search, 
  Star, 
  Filter, 
  AlertTriangle, 
  CheckCircle2, 
  Clock, 
  Sparkles, 
  FileSpreadsheet,
  Globe,
  ChevronDown
} from 'lucide-react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  BarChart, 
  Bar, 
  PieChart, 
  Pie, 
  Cell, 
  Legend 
} from 'recharts';

export default function CeoDashboard() {
  const { 
    ceo, 
    toggleApplicantVip, 
    updateApplicantStage, 
    toggleDepositPaid, 
    showToast,
    setCurrentView 
  } = useApp();

  const [activeTab, setActiveTab] = useState('overview'); // 'overview' | 'pipeline' | 'branches' | 'radar'
  const [pipelineSearch, setPipelineSearch] = useState('');
  const [pipelineCountryFilter, setPipelineCountryFilter] = useState('all');

  const filteredApplicants = ceo.pipelineApplicants.filter(app => {
    const matchesSearch = pipelineSearch === '' || 
      app.name.toLowerCase().includes(pipelineSearch.toLowerCase()) ||
      app.targetUni.toLowerCase().includes(pipelineSearch.toLowerCase()) ||
      app.counselor.toLowerCase().includes(pipelineSearch.toLowerCase());

    const matchesCountry = pipelineCountryFilter === 'all' || 
      app.country.toLowerCase() === pipelineCountryFilter.toLowerCase();

    return matchesSearch && matchesCountry;
  });

  const handleExportReport = () => {
    showToast('Executive Financial & Enrollment PDF/CSV report generated and ready for download.');
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 pb-20">
      
      {/* CEO Command Center Top Header */}
      <div className="bg-slate-950 border-b border-slate-800 pt-8 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            
            {/* Title & Badge */}
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30 flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-amber-400" />
                  Executive Command Center
                </span>
                <span className="text-xs text-slate-400">
                  Fiscal Year 2025 • Fall Intake Operations
                </span>
              </div>
              <h1 className="text-3xl font-extrabold tracking-tight text-white flex items-center gap-2">
                RoyalSurya Education Foundation HQ
              </h1>
              <p className="text-xs text-slate-400">
                Managing Director / CEO Suite • Live oversight across Kathmandu, Pokhara, Chitwan, Butwal & Sydney
              </p>
            </div>

            {/* Actions & Report Export */}
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={handleExportReport}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-all shadow-sm"
              >
                <FileSpreadsheet className="w-4 h-4 text-emerald-400" />
                <span>Export Board Report (CSV)</span>
              </button>

              <button
                onClick={() => {
                  showToast('Live system sync triggered across all 5 branches.');
                }}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 transition-all shadow-md shadow-amber-400/20"
              >
                <TrendingUp className="w-4 h-4 text-slate-950" />
                <span>Sync Branch Metrics</span>
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* KPI Cards Strip */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {ceo.kpis.map((kpi) => (
            <div
              key={kpi.id}
              className="bg-slate-800/95 rounded-2xl p-5 border border-slate-700/80 shadow-lg backdrop-blur-md flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold text-slate-400">{kpi.title}</span>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${kpi.badgeColor}`}>
                  {kpi.change}
                </span>
              </div>

              <div>
                <p className="text-3xl font-black text-white tracking-tight">{kpi.value}</p>
                <p className="text-[11px] text-slate-400 mt-1">{kpi.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-2 flex flex-wrap items-center justify-between gap-2">
          
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'overview'
                  ? 'bg-amber-500 text-slate-950 shadow-md font-extrabold'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
              }`}
            >
              📊 Performance & Analytics
            </button>

            <button
              onClick={() => setActiveTab('pipeline')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'pipeline'
                  ? 'bg-amber-500 text-slate-950 shadow-md font-extrabold'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
              }`}
            >
              👥 CRM Applicant Pipeline ({ceo.pipelineApplicants.length})
            </button>

            <button
              onClick={() => setActiveTab('branches')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'branches'
                  ? 'bg-amber-500 text-slate-950 shadow-md font-extrabold'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
              }`}
            >
              🏢 Counselors & Branch Network
            </button>

            <button
              onClick={() => setActiveTab('radar')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'radar'
                  ? 'bg-amber-500 text-slate-950 shadow-md font-extrabold'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
              }`}
            >
              🌐 Visa Policy Radar (Global Updates)
            </button>
          </div>

          <div className="hidden lg:flex items-center gap-2 text-xs text-slate-400 pr-2">
            <span>Operating Status:</span>
            <span className="text-emerald-400 font-bold flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              All Branches Synchronized
            </span>
          </div>

        </div>
      </div>

      {/* TAB CONTENT PANELS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        
        {/* TAB 1: OVERVIEW & CHARTS */}
        {activeTab === 'overview' && (
          <div className="space-y-8 animate-fade-in">
            
            {/* Top Charts Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              
              {/* Monthly Revenue Trend (2 cols) */}
              <div className="lg:col-span-2 bg-slate-800/90 rounded-2xl border border-slate-700/80 p-6 shadow-md">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-base font-bold text-white">Monthly Revenue & Student Enrollment</h3>
                    <p className="text-xs text-slate-400">Commission revenue ($USD) generated across monthly intake cycles.</p>
                  </div>
                  <span className="text-xs font-semibold text-emerald-400 bg-emerald-950/70 px-2.5 py-1 rounded border border-emerald-800">
                    Peak Intake: August ($108K)
                  </span>
                </div>

                <div className="h-72 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={ceo.monthlyFinancials} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                      <defs>
                        <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.8}/>
                          <stop offset="95%" stopColor="#f59e0b" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
                      <XAxis dataKey="month" stroke="#94a3b8" fontSize={12} />
                      <YAxis stroke="#94a3b8" fontSize={12} tickFormatter={(val) => `$${val/1000}k`} />
                      <Tooltip 
                        contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '12px' }}
                        formatter={(val) => [`$${val.toLocaleString()}`, 'Revenue']}
                      />
                      <Area type="monotone" dataKey="revenue" stroke="#f59e0b" strokeWidth={2.5} fillOpacity={1} fill="url(#colorRev)" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Destination Share Donut */}
              <div className="bg-slate-800/90 rounded-2xl border border-slate-700/80 p-6 shadow-md flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold text-white mb-1">Destination Distribution</h3>
                  <p className="text-xs text-slate-400 mb-4">Share of total active student applications.</p>
                </div>

                <div className="h-52 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={ceo.countryBreakdown}
                        cx="50%"
                        cy="50%"
                        innerRadius={55}
                        outerRadius={80}
                        paddingAngle={4}
                        dataKey="value"
                      >
                        {ceo.countryBreakdown.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip 
                        contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '8px' }}
                        formatter={(val) => [`${val}%`, 'Share']}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs pt-2 border-t border-slate-700">
                  {ceo.countryBreakdown.map((c, i) => (
                    <div key={i} className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: c.color }} />
                      <span className="text-slate-300">{c.name}:</span>
                      <strong className="text-white">{c.value}%</strong>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Agency Funnel */}
            <div className="bg-slate-800/90 rounded-2xl border border-slate-700/80 p-6 shadow-md">
              <h3 className="text-base font-bold text-white mb-1">Total Agency Intake Conversion Funnel</h3>
              <p className="text-xs text-slate-400 mb-6">Stage-by-stage conversion metrics for 2024-2025 intake cycles.</p>

              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                {ceo.funnelStages.map((f, idx) => (
                  <div key={idx} className="bg-slate-900/80 p-4 rounded-xl border border-slate-700/60 relative">
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
                      Stage 0{idx + 1}
                    </span>
                    <h4 className="text-xs font-bold text-slate-300 mb-2 leading-snug">{f.stage}</h4>
                    <p className="text-2xl font-black text-amber-400">{f.count.toLocaleString()}</p>
                    <span className="text-[11px] font-semibold text-emerald-400 mt-1 block">
                      {f.pct} of Inquiries
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

        {/* TAB 2: CRM APPLICANT PIPELINE TABLE */}
        {activeTab === 'pipeline' && (
          <div className="bg-slate-800/90 rounded-2xl border border-slate-700/80 p-6 shadow-md space-y-6 animate-fade-in">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-700">
              <div>
                <h3 className="text-xl font-bold text-white">Master Student Application CRM</h3>
                <p className="text-xs text-slate-400">High-priority applicants, visa stages, and deposit statuses under counselor management.</p>
              </div>

              {/* Filters */}
              <div className="flex flex-wrap items-center gap-2">
                <div className="relative">
                  <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Search applicant or university..."
                    value={pipelineSearch}
                    onChange={(e) => setPipelineSearch(e.target.value)}
                    className="bg-slate-900 border border-slate-700 rounded-xl pl-9 pr-3 py-1.5 text-xs text-slate-200 focus:outline-none focus:ring-1 focus:ring-amber-500"
                  />
                </div>

                <select
                  value={pipelineCountryFilter}
                  onChange={(e) => setPipelineCountryFilter(e.target.value)}
                  className="bg-slate-900 border border-slate-700 rounded-xl px-3 py-1.5 text-xs text-slate-200 focus:outline-none"
                >
                  <option value="all">All Countries</option>
                  <option value="USA">USA</option>
                  <option value="UK">UK</option>
                  <option value="Canada">Canada</option>
                  <option value="Australia">Australia</option>
                  <option value="Germany">Germany</option>
                  <option value="Ireland">Ireland</option>
                </select>
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-slate-300">
                <thead className="bg-slate-900/90 text-slate-400 uppercase tracking-wider font-bold text-[11px] border-y border-slate-700">
                  <tr>
                    <th className="py-3 px-3">VIP</th>
                    <th className="py-3 px-3">Student Name</th>
                    <th className="py-3 px-3">Destination</th>
                    <th className="py-3 px-3">University & Program</th>
                    <th className="py-3 px-3">Assigned Counselor</th>
                    <th className="py-3 px-3">Intake</th>
                    <th className="py-3 px-3">Application Stage</th>
                    <th className="py-3 px-3">Deposit</th>
                    <th className="py-3 px-3">Next Action</th>
                    <th className="py-3 px-3 text-right">Stage Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-700/60">
                  {filteredApplicants.map((app) => (
                    <tr key={app.id} className="hover:bg-slate-700/30 transition-colors">
                      
                      {/* VIP Toggle */}
                      <td className="py-3.5 px-3">
                        <button
                          onClick={() => toggleApplicantVip(app.id)}
                          title="Toggle VIP Status"
                          className="p-1 rounded hover:bg-slate-700"
                        >
                          <Star className={`w-4 h-4 ${app.vip ? 'text-amber-400 fill-amber-400' : 'text-slate-600'}`} />
                        </button>
                      </td>

                      {/* Name */}
                      <td className="py-3.5 px-3 font-bold text-white">
                        <span>{app.name}</span>
                        <span className="block text-[10px] text-slate-500 font-normal">{app.id}</span>
                      </td>

                      {/* Country */}
                      <td className="py-3.5 px-3">
                        <span className="flex items-center gap-1 font-medium">
                          <span>{app.flag}</span>
                          <span>{app.country}</span>
                        </span>
                      </td>

                      {/* University */}
                      <td className="py-3.5 px-3">
                        <span className="font-semibold text-slate-200 block">{app.targetUni}</span>
                        <span className="text-[11px] text-blue-400">{app.program}</span>
                      </td>

                      {/* Counselor */}
                      <td className="py-3.5 px-3 text-slate-300 font-medium">
                        {app.counselor}
                      </td>

                      {/* Intake */}
                      <td className="py-3.5 px-3 text-slate-400">
                        {app.intake}
                      </td>

                      {/* Stage Badge */}
                      <td className="py-3.5 px-3">
                        <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold border ${app.stageBadge}`}>
                          {app.stage}
                        </span>
                      </td>

                      {/* Deposit Toggle */}
                      <td className="py-3.5 px-3">
                        <button
                          onClick={() => toggleDepositPaid(app.id)}
                          className={`px-2 py-0.5 rounded text-[10px] font-bold border transition-colors ${
                            app.depositPaid 
                              ? 'bg-emerald-950 text-emerald-300 border-emerald-700' 
                              : 'bg-rose-950 text-rose-300 border-rose-700'
                          }`}
                        >
                          {app.depositPaid ? 'Paid' : 'Unpaid'}
                        </button>
                      </td>

                      {/* Pending Action */}
                      <td className="py-3.5 px-3 text-slate-400 text-[11px]">
                        {app.pendingAction}
                      </td>

                      {/* Fast Action */}
                      <td className="py-3.5 px-3 text-right">
                        <select
                          value={app.stage}
                          onChange={(e) => updateApplicantStage(app.id, e.target.value, 'bg-emerald-100 text-emerald-800')}
                          className="bg-slate-900 border border-slate-700 text-[11px] text-slate-300 rounded px-2 py-1 focus:outline-none"
                        >
                          <option value="Faculty Review">Faculty Review</option>
                          <option value="Offer Letter Received">Offer Letter Received</option>
                          <option value="Conditional Offer">Conditional Offer</option>
                          <option value="Visa Lodged">Visa Lodged</option>
                          <option value="Visa Granted">Visa Granted</option>
                        </select>
                      </td>

                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

          </div>
        )}

        {/* TAB 3: COUNSELORS & BRANCH NETWORK */}
        {activeTab === 'branches' && (
          <div className="space-y-8 animate-fade-in">
            
            {/* Counselor Leaderboard */}
            <div className="bg-slate-800/90 rounded-2xl border border-slate-700/80 p-6 shadow-md">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-lg font-bold text-white">Senior Education Counselor Leaderboard</h3>
                  <p className="text-xs text-slate-400">Rankings based on active caseload, visa success percentage, and student reviews.</p>
                </div>
                <span className="text-xs font-bold text-amber-400 bg-amber-950/60 px-3 py-1 rounded-full border border-amber-800">
                  Q1 Performance Cycle
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {ceo.counselorLeaderboard.map((c) => (
                  <div key={c.id} className="bg-slate-900/90 p-5 rounded-2xl border border-slate-700 flex flex-col justify-between space-y-4">
                    <div>
                      <div className="flex items-center gap-3">
                        <img src={c.avatar} alt={c.name} className="w-12 h-12 rounded-xl object-cover border border-amber-400" />
                        <div>
                          <h4 className="text-sm font-bold text-white leading-tight">{c.name}</h4>
                          <p className="text-[11px] text-slate-400">{c.role}</p>
                          <span className="text-[10px] text-amber-400 font-semibold">{c.branch}</span>
                        </div>
                      </div>

                      <div className="mt-4 space-y-2 bg-slate-800/80 p-3 rounded-xl border border-slate-700 text-xs">
                        <div className="flex justify-between">
                          <span className="text-slate-400">Active Students:</span>
                          <strong className="text-white">{c.activeStudents}</strong>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-400">Visas Secured:</span>
                          <strong className="text-emerald-400">{c.visasSecured}</strong>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-400">Conversion Rate:</span>
                          <strong className="text-blue-400">{c.conversionRate}</strong>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-400">Commission Earned:</span>
                          <strong className="text-amber-400">{c.commission}</strong>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-xs pt-2 border-t border-slate-700">
                      <span className="flex items-center gap-1 text-amber-400 font-bold">
                        <Star className="w-3.5 h-3.5 fill-amber-400" />
                        {c.rating} Rating
                      </span>
                      <button
                        onClick={() => showToast(`Counselor review opened for ${c.name}`)}
                        className="text-xs text-blue-400 hover:text-blue-300 font-semibold"
                      >
                        View Caseload →
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Regional Branches Breakdown */}
            <div className="bg-slate-800/90 rounded-2xl border border-slate-700/80 p-6 shadow-md">
              <h3 className="text-lg font-bold text-white mb-1">Official Regional Network & Branches</h3>
              <p className="text-xs text-slate-400 mb-6">Financial performance and placed student figures by center location.</p>

              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                {ceo.branchPerformance.map((b, idx) => (
                  <div key={idx} className="bg-slate-900/80 p-4 rounded-xl border border-slate-700/70 space-y-3">
                    <div className="flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-amber-400" />
                      <h4 className="text-xs font-bold text-white leading-tight">{b.branch}</h4>
                    </div>
                    <p className="text-[11px] text-slate-400">Manager: <strong className="text-slate-200">{b.manager}</strong></p>
                    <div className="pt-2 border-t border-slate-800 space-y-1 text-xs">
                      <div className="flex justify-between text-slate-400">
                        <span>Leads:</span>
                        <span className="text-white font-bold">{b.activeLeads}</span>
                      </div>
                      <div className="flex justify-between text-slate-400">
                        <span>Placed:</span>
                        <span className="text-emerald-400 font-bold">{b.placedStudents}</span>
                      </div>
                      <div className="flex justify-between text-slate-400">
                        <span>Revenue:</span>
                        <span className="text-amber-400 font-bold">{b.revenue}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

        {/* TAB 4: VISA POLICY RADAR */}
        {activeTab === 'radar' && (
          <div className="bg-slate-800/90 rounded-2xl border border-slate-700/80 p-6 shadow-md space-y-6 animate-fade-in">
            <div>
              <h3 className="text-xl font-bold text-white">Global Visa & Immigration Regulatory Intelligence</h3>
              <p className="text-xs text-slate-400">Critical policy updates affecting international student intake, work permits, and financial proofs.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {ceo.policyRadar.map((p) => (
                <div key={p.id} className="bg-slate-900/90 rounded-xl p-5 border border-slate-700 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
                        <span className="text-lg">{p.flag}</span>
                        <span>{p.country}</span>
                      </span>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${p.badge}`}>
                        {p.impact}
                      </span>
                    </div>

                    <h4 className="text-sm font-bold text-white leading-snug">{p.title}</h4>
                    <p className="text-xs text-slate-300 mt-2 leading-relaxed">{p.summary}</p>
                  </div>

                  <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
                    <span className="text-[11px] text-slate-500">RoyalSurya Compliance Team Verified</span>
                    <button
                      onClick={() => showToast(`Compliance circular broadcasted to all counselors for ${p.country}.`)}
                      className="text-xs text-amber-400 hover:text-amber-300 font-semibold"
                    >
                      Broadcast to Counselors →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>

    </div>
  );
}
