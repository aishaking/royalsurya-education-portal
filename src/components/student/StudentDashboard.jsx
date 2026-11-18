import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { 
  GraduationCap, 
  Clock, 
  CheckCircle2, 
  AlertCircle, 
  FileText, 
  Upload, 
  Send, 
  Award, 
  Sparkles, 
  Calendar, 
  Phone, 
  Mail, 
  ChevronRight, 
  Download, 
  ShieldCheck, 
  MessageSquare, 
  ExternalLink,
  Building,
  Check,
  FileCheck
} from 'lucide-react';

export default function StudentDashboard() {
  const { 
    student, 
    sendStudentMessage, 
    updateDocumentStatus, 
    uploadSimulatedDocument, 
    acceptUniversityOffer, 
    showToast,
    setCurrentView 
  } = useApp();

  const [activeTab, setActiveTab] = useState('overview'); // 'overview' | 'documents' | 'counselor' | 'scholarships'
  const [chatInput, setChatInput] = useState('');
  const [selectedFileDocId, setSelectedFileDocId] = useState(null);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!chatInput.trim()) return;
    sendStudentMessage(chatInput);
    setChatInput('');
  };

  const handleSimulatedUpload = (docId, docName) => {
    uploadSimulatedDocument(docId, docName + '_2025_Updated.pdf');
  };

  return (
    <div className="min-h-screen bg-slate-100/70 pb-20">
      
      {/* Top Banner & Profile Header */}
      <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white pt-10 pb-14 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            {/* Student info */}
            <div className="flex items-start sm:items-center gap-4">
              <div className="relative">
                <img
                  src={student.profile.avatar}
                  alt={student.profile.name}
                  className="w-18 h-18 sm:w-20 sm:h-20 rounded-2xl object-cover border-2 border-amber-400/80 shadow-lg"
                />
                <span className="absolute -bottom-1 -right-1 bg-emerald-500 text-white p-1 rounded-full text-xs shadow-md" title="Active Applicant">
                  <CheckCircle2 className="w-4 h-4" />
                </span>
              </div>

              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
                    {student.profile.name}
                  </h1>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-900/80 text-blue-200 border border-blue-700">
                    ID: {student.profile.id}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-950 text-emerald-300 border border-emerald-700/60 flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-amber-400" />
                    Offers Active
                  </span>
                </div>

                <p className="text-sm text-slate-300 mt-1">
                  Target: <strong className="text-white">{student.profile.targetDegree}</strong> • Intake: <strong className="text-amber-400">{student.profile.targetIntake}</strong>
                </p>

                {/* Scores pill row */}
                <div className="flex flex-wrap items-center gap-3 mt-3 text-xs text-slate-300">
                  <span className="bg-slate-800/80 px-2.5 py-1 rounded-lg border border-slate-700">
                    🎓 Undergrad CGPA: <strong className="text-white">{student.profile.undergradGpa}</strong>
                  </span>
                  <span className="bg-slate-800/80 px-2.5 py-1 rounded-lg border border-slate-700">
                    🇬🇧 IELTS Academic: <strong className="text-white">{student.profile.ieltsScore}</strong>
                  </span>
                  <span className="bg-slate-800/80 px-2.5 py-1 rounded-lg border border-slate-700">
                    📊 GRE Score: <strong className="text-white">{student.profile.greScore}</strong>
                  </span>
                </div>
              </div>
            </div>

            {/* Assigned Counselor Widget */}
            <div className="bg-slate-800/90 rounded-2xl p-4 border border-slate-700/80 max-w-md backdrop-blur-md">
              <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                <span className="font-semibold uppercase tracking-wider text-amber-400">Assigned Senior Counselor</span>
                <span className="text-[11px] bg-emerald-900/60 text-emerald-300 px-2 py-0.5 rounded">Online Now</span>
              </div>
              <div className="flex items-center gap-3">
                <img
                  src={student.profile.assignedCounselor.avatar}
                  alt={student.profile.assignedCounselor.name}
                  className="w-11 h-11 rounded-xl object-cover border border-slate-600"
                />
                <div className="flex-1">
                  <h4 className="text-sm font-bold text-white leading-tight">
                    {student.profile.assignedCounselor.name}
                  </h4>
                  <p className="text-xs text-slate-300">{student.profile.assignedCounselor.role}</p>
                  <p className="text-[11px] text-slate-400">{student.profile.assignedCounselor.office}</p>
                </div>
                <button
                  onClick={() => setActiveTab('counselor')}
                  className="px-3 py-1.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-semibold shadow-sm transition-all flex items-center gap-1 shrink-0"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  Chat
                </button>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        <div className="bg-white rounded-2xl shadow-md border border-slate-200/90 p-2 flex flex-wrap items-center justify-between gap-2">
          
          <div className="flex items-center gap-1 overflow-x-auto w-full sm:w-auto">
            <button
              onClick={() => setActiveTab('overview')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'overview'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              <span>Applications & Progress</span>
              <span className="ml-1 px-1.5 py-0.2 bg-white/20 text-white rounded text-[10px]">
                {student.applications.length}
              </span>
            </button>

            <button
              onClick={() => setActiveTab('documents')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'documents'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <FileText className="w-4 h-4" />
              <span>Document Vault</span>
              <span className="ml-1 px-1.5 py-0.2 bg-amber-100 text-amber-800 rounded text-[10px] font-bold">
                Checklist
              </span>
            </button>

            <button
              onClick={() => setActiveTab('counselor')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'counselor'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <MessageSquare className="w-4 h-4" />
              <span>Counselor Chat</span>
              <span className="ml-1 px-1.5 py-0.2 bg-emerald-100 text-emerald-800 rounded text-[10px]">
                Live
              </span>
            </button>

            <button
              onClick={() => setActiveTab('scholarships')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'scholarships'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <Award className="w-4 h-4" />
              <span>Scholarship Portal</span>
              <span className="ml-1 px-1.5 py-0.2 bg-purple-100 text-purple-800 rounded text-[10px]">
                $15k+
              </span>
            </button>
          </div>

          <div className="hidden md:flex items-center gap-3 pr-2 text-xs text-slate-500 font-medium">
            <span>Kathmandu RoyalSurya Student Portal</span>
            <button
              onClick={() => setCurrentView('public')}
              className="text-blue-600 hover:underline font-semibold"
            >
              Back to Home
            </button>
          </div>

        </div>
      </div>

      {/* Main Tab Panels */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        
        {/* TAB 1: OVERVIEW & APPLICATIONS */}
        {activeTab === 'overview' && (
          <div className="space-y-8 animate-fade-in">
            
            {/* Milestone Application Stepper */}
            <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 pb-4 border-b border-slate-100 gap-2">
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Application Lifecycle Roadmap</h3>
                  <p className="text-xs text-slate-500">Track your verified progression from counseling to university enrolment.</p>
                </div>
                <div className="text-xs font-bold px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full border border-emerald-200 self-start sm:self-auto">
                  Stage 4 of 6: Offer Letters Issued
                </div>
              </div>

              {/* Stepper items */}
              <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
                {student.applicationStages.map((stg) => (
                  <div
                    key={stg.id}
                    className={`relative p-4 rounded-xl border flex flex-col justify-between transition-all ${
                      stg.status === 'completed'
                        ? 'bg-emerald-50/60 border-emerald-200 text-emerald-950'
                        : stg.status === 'current'
                        ? 'bg-blue-50/90 border-blue-500 shadow-md ring-2 ring-blue-500/20 text-blue-950'
                        : 'bg-slate-50 border-slate-200 text-slate-500 opacity-70'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className={`text-[11px] font-extrabold px-2 py-0.5 rounded ${
                          stg.status === 'completed' ? 'bg-emerald-200/70 text-emerald-900' :
                          stg.status === 'current' ? 'bg-blue-600 text-white' : 'bg-slate-200 text-slate-700'
                        }`}>
                          Step 0{stg.id}
                        </span>
                        {stg.status === 'completed' && <CheckCircle2 className="w-4 h-4 text-emerald-600" />}
                        {stg.status === 'current' && <Sparkles className="w-4 h-4 text-blue-600 animate-spin" />}
                      </div>
                      <h4 className="text-xs font-bold leading-snug mb-1">{stg.title}</h4>
                      <p className="text-[11px] leading-relaxed line-clamp-3">{stg.description}</p>
                    </div>

                    <div className="mt-3 pt-2 border-t border-slate-200/60 text-[10px] font-semibold text-slate-500">
                      {stg.date}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* University Applications Grid */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Active University Applications</h3>
                  <p className="text-xs text-slate-500">Official status updates lodged by RoyalSurya processing team.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {student.applications.map((app) => (
                  <div
                    key={app.id}
                    className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between space-y-5"
                  >
                    <div>
                      {/* Top Badges */}
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-bold text-slate-500">{app.country}</span>
                        <span className={`text-xs font-bold px-2.5 py-1 rounded-full border ${app.statusBadge}`}>
                          {app.status}
                        </span>
                      </div>

                      <h4 className="text-lg font-bold text-slate-900 leading-snug">{app.university}</h4>
                      <p className="text-xs font-medium text-blue-700 mt-1">{app.course}</p>

                      {/* Detail points */}
                      <div className="mt-4 space-y-2 bg-slate-50 p-3.5 rounded-xl border border-slate-100 text-xs text-slate-700">
                        <div className="flex justify-between">
                          <span className="text-slate-500">Intake Term:</span>
                          <span className="font-semibold text-slate-900">{app.intake}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-500">Estimated Tuition:</span>
                          <span className="font-semibold text-slate-900">{app.tuition}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-500">Deposit Deadline:</span>
                          <span className="font-bold text-rose-600">{app.depositDeadline}</span>
                        </div>
                        {app.scholarship && (
                          <div className="pt-2 border-t border-slate-200 text-emerald-800 font-semibold flex items-center justify-between">
                            <span>Scholarship:</span>
                            <span className="text-right">{app.scholarship}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="space-y-2 pt-2 border-t border-slate-100">
                      {app.statusCode === 'offer_received' && !app.hasI20 && (
                        <button
                          onClick={() => acceptUniversityOffer(app.id)}
                          className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold shadow-sm transition-all flex items-center justify-center gap-1.5"
                        >
                          <Check className="w-4 h-4" />
                          <span>Accept Offer & Request I-20 / CAS</span>
                        </button>
                      )}

                      {app.hasI20 && (
                        <div className="w-full py-2 bg-emerald-50 text-emerald-800 rounded-xl text-xs font-bold text-center border border-emerald-200">
                          ✓ Offer Accepted (I-20 Form Pending University Dispatch)
                        </div>
                      )}

                      <button
                        onClick={() => showToast(`Simulated download of ${app.university} official offer letter.`)}
                        className="w-full py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-semibold transition-all flex items-center justify-center gap-1.5"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>Download Offer Letter (PDF)</span>
                      </button>
                    </div>

                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

        {/* TAB 2: DOCUMENT VAULT */}
        {activeTab === 'documents' && (
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6 animate-fade-in">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
              <div>
                <h3 className="text-xl font-bold text-slate-900">Document Vault & Compliance Checklist</h3>
                <p className="text-xs text-slate-500">Secure cloud storage audited by RoyalSurya visa and admissions officers.</p>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-500">Checklist Completion:</span>
                <span className="px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-xs font-bold">
                  5 of 7 Verified
                </span>
              </div>
            </div>

            {/* Document Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-slate-700">
                <thead className="bg-slate-50 text-slate-500 uppercase tracking-wider font-bold text-[11px] border-y border-slate-200">
                  <tr>
                    <th className="py-3 px-4">Document Title</th>
                    <th className="py-3 px-4">Category</th>
                    <th className="py-3 px-4">Status</th>
                    <th className="py-3 px-4">Last Updated</th>
                    <th className="py-3 px-4">Officer Notes</th>
                    <th className="py-3 px-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {student.documents.map((doc) => (
                    <tr key={doc.id} className="hover:bg-slate-50/80 transition-colors">
                      <td className="py-4 px-4 font-semibold text-slate-900">
                        <div className="flex items-center gap-2">
                          <FileText className="w-4 h-4 text-blue-600 shrink-0" />
                          <span>{doc.name}</span>
                          {doc.required && (
                            <span className="text-[10px] text-rose-500 font-bold">*Mandatory</span>
                          )}
                        </div>
                      </td>

                      <td className="py-4 px-4">
                        <span className="px-2 py-0.5 bg-slate-100 text-slate-700 rounded text-[11px]">
                          {doc.category}
                        </span>
                      </td>

                      <td className="py-4 px-4">
                        <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full font-bold text-[11px] ${
                          doc.status === 'Verified' ? 'bg-emerald-100 text-emerald-800 border border-emerald-200' :
                          doc.status === 'Pending Review' ? 'bg-amber-100 text-amber-800 border border-amber-200' :
                          'bg-rose-100 text-rose-800 border border-rose-200'
                        }`}>
                          {doc.status === 'Verified' && <CheckCircle2 className="w-3 h-3 text-emerald-600" />}
                          {doc.status === 'Pending Review' && <Clock className="w-3 h-3 text-amber-600" />}
                          {doc.status === 'Missing' && <AlertCircle className="w-3 h-3 text-rose-600" />}
                          {doc.status}
                        </span>
                      </td>

                      <td className="py-4 px-4 text-slate-500 font-medium">
                        {doc.uploadDate} {doc.fileSize !== '-' && `(${doc.fileSize})`}
                      </td>

                      <td className="py-4 px-4 text-slate-600 max-w-xs">
                        {doc.notes}
                      </td>

                      <td className="py-4 px-4 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <button
                            onClick={() => handleSimulatedUpload(doc.id, doc.name)}
                            className="px-2.5 py-1.5 bg-blue-50 text-blue-700 hover:bg-blue-100 rounded-lg font-semibold flex items-center gap-1 border border-blue-200"
                          >
                            <Upload className="w-3 h-3" />
                            {doc.status === 'Missing' ? 'Upload' : 'Replace'}
                          </button>

                          {doc.status !== 'Verified' && (
                            <button
                              onClick={() => updateDocumentStatus(doc.id, 'Verified')}
                              className="px-2 py-1.5 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 rounded-lg font-semibold border border-emerald-200"
                              title="Mark Verified (For demo/testing)"
                            >
                              Verify
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 3: COUNSELOR MESSENGER */}
        {activeTab === 'counselor' && (
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm flex flex-col h-[650px] animate-fade-in">
            
            {/* Chat header */}
            <div className="bg-slate-900 text-white p-4 flex items-center justify-between border-b border-slate-800">
              <div className="flex items-center gap-3">
                <img
                  src={student.profile.assignedCounselor.avatar}
                  alt={student.profile.assignedCounselor.name}
                  className="w-10 h-10 rounded-xl object-cover border border-amber-400"
                />
                <div>
                  <h4 className="text-sm font-bold flex items-center gap-1.5">
                    {student.profile.assignedCounselor.name}
                    <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  </h4>
                  <p className="text-xs text-slate-300">
                    {student.profile.assignedCounselor.role} • RoyalSurya Putalisadak Desk
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={`tel:${student.profile.assignedCounselor.phone}`}
                  className="p-2 bg-slate-800 hover:bg-slate-700 rounded-lg text-slate-300 hover:text-white"
                  title="Call Counselor"
                >
                  <Phone className="w-4 h-4" />
                </a>
                <button
                  onClick={() => showToast('Virtual Zoom counseling link sent to student email.')}
                  className="px-3 py-1.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-semibold"
                >
                  Schedule Zoom Call
                </button>
              </div>
            </div>

            {/* Messages Feed */}
            <div className="flex-1 p-5 overflow-y-auto space-y-4 bg-slate-50">
              {student.chatMessages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.sender === 'student' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-md rounded-2xl p-4 text-xs shadow-sm leading-relaxed ${
                      msg.sender === 'student'
                        ? 'bg-blue-600 text-white rounded-br-none'
                        : 'bg-white border border-slate-200 text-slate-800 rounded-bl-none'
                    }`}
                  >
                    <p>{msg.text}</p>
                    <span
                      className={`text-[10px] block mt-1.5 text-right font-medium ${
                        msg.sender === 'student' ? 'text-blue-200' : 'text-slate-400'
                      }`}
                    >
                      {msg.time}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Input form */}
            <form onSubmit={handleSendMessage} className="p-3 bg-white border-t border-slate-200 flex items-center gap-2">
              <input
                type="text"
                placeholder="Ask Priya Nair about offer letters, I-20, or visa mock test..."
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                className="flex-1 bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold shadow-md transition-all flex items-center gap-1.5 shrink-0"
              >
                <span>Send</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>

          </div>
        )}

        {/* TAB 4: SCHOLARSHIPS */}
        {activeTab === 'scholarships' && (
          <div className="space-y-6 animate-fade-in">
            <div className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 rounded-2xl p-6 text-white shadow-md flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider bg-black/20 px-2.5 py-0.5 rounded-full inline-block mb-1">
                  Financial Assistance & Grants
                </span>
                <h3 className="text-2xl font-black">Matched Scholarship Opportunities</h3>
                <p className="text-xs text-amber-100 mt-1 max-w-xl">
                  Matched based on Aarav Sharma's 3.64 GPA, 7.5 IELTS, and Graduate STEM application for Fall 2025.
                </p>
              </div>

              <div className="text-right bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20">
                <p className="text-xs font-semibold text-amber-100">Total Potential Awards</p>
                <p className="text-3xl font-black">$23,500+</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {student.matchedScholarships.map((sch) => (
                <div
                  key={sch.id}
                  className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between space-y-4"
                >
                  <div>
                    <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full ${sch.badge}`}>
                      {sch.status}
                    </span>
                    <h4 className="text-base font-bold text-slate-900 mt-2">{sch.title}</h4>
                    <p className="text-xs text-slate-500">Sponsor: {sch.sponsor}</p>
                    <div className="mt-4 p-3 bg-slate-50 rounded-xl border border-slate-100">
                      <span className="text-xs text-slate-500 block">Grant Amount:</span>
                      <span className="text-base font-extrabold text-emerald-700">{sch.amount}</span>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-100">
                    <p className="text-[11px] text-slate-500 mb-2">Deadline: {sch.deadline}</p>
                    <button
                      onClick={() => showToast(`Counselor notified to assist with application for ${sch.title}`)}
                      className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold shadow-sm transition-all"
                    >
                      Request Counselor Guidance
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
