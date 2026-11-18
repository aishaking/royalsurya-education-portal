import React, { createContext, useContext, useState, useEffect } from 'react';
import { destinationsData } from '../data/destinationsData';
import { universitiesData } from '../data/universitiesData';
import { studentMockData } from '../data/studentMockData';
import { ceoMockData } from '../data/ceoMockData';

const AppContext = createContext();

export function AppProvider({ children }) {
  const [currentView, setCurrentView] = useState(() => {
    return localStorage.getItem('rs_current_view') || 'public';
  });

  const [student, setStudent] = useState(() => {
    const saved = localStorage.getItem('rs_student_data');
    return saved ? JSON.parse(saved) : studentMockData;
  });

  const [ceo, setCeo] = useState(() => {
    const saved = localStorage.getItem('rs_ceo_data');
    return saved ? JSON.parse(saved) : ceoMockData;
  });

  const [selectedDestination, setSelectedDestination] = useState(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isEligibilityOpen, setIsEligibilityOpen] = useState(false);
  const [toast, setToast] = useState(null);

  // Sync to localStorage
  useEffect(() => {
    localStorage.setItem('rs_current_view', currentView);
  }, [currentView]);

  useEffect(() => {
    localStorage.setItem('rs_student_data', JSON.stringify(student));
  }, [student]);

  useEffect(() => {
    localStorage.setItem('rs_ceo_data', JSON.stringify(ceo));
  }, [ceo]);

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => {
      setToast(null);
    }, 4000);
  };

  // Student Actions
  const sendStudentMessage = (text) => {
    if (!text.trim()) return;
    const newMsg = {
      id: 'msg-' + Date.now(),
      sender: 'student',
      text,
      time: 'Just now'
    };
    
    setStudent(prev => ({
      ...prev,
      chatMessages: [...prev.chatMessages, newMsg]
    }));

    showToast('Message sent to Counselor Priya Nair');

    // Simulate counselor reply
    setTimeout(() => {
      const autoReply = {
        id: 'msg-' + (Date.now() + 1),
        sender: 'counselor',
        text: "Hello Aarav, I received your note: \"" + text.slice(0, 45) + (text.length > 45 ? "..." : "") + "\". Let me review this with our visa committee and share the exact next steps.",
        time: 'Just now'
      };
      setStudent(prev => ({
        ...prev,
        chatMessages: [...prev.chatMessages, autoReply]
      }));
      showToast('New message from Counselor Priya Nair', 'info');
    }, 2200);
  };

  const updateDocumentStatus = (docId, newStatus) => {
    setStudent(prev => ({
      ...prev,
      documents: prev.documents.map(d => d.id === docId ? { ...d, status: newStatus, uploadDate: 'Just now' } : d)
    }));
    showToast('Document status updated to ' + newStatus);
  };

  const uploadSimulatedDocument = (docId, fileName) => {
    setStudent(prev => ({
      ...prev,
      documents: prev.documents.map(d => d.id === docId ? { 
        ...d, 
        status: 'Pending Review', 
        fileSize: '2.8 MB', 
        uploadDate: 'Just now',
        notes: 'Uploaded ' + fileName + ' — Awaiting counselor compliance check.'
      } : d)
    }));
    showToast('File uploaded successfully! Under counselor review.');
  };

  const acceptUniversityOffer = (appId) => {
    setStudent(prev => ({
      ...prev,
      applications: prev.applications.map(app => 
        app.id === appId ? { ...app, status: 'Offer Accepted & I-20 Requested', statusCode: 'accepted', hasI20: true } : app
      )
    }));
    showToast('Offer accepted! RoyalSurya has notified the university admissions office.');
  };

  // CEO Actions
  const toggleApplicantVip = (applicantId) => {
    setCeo(prev => ({
      ...prev,
      pipelineApplicants: prev.pipelineApplicants.map(app => 
        app.id === applicantId ? { ...app, vip: !app.vip } : app
      )
    }));
    showToast('Applicant VIP priority status updated.');
  };

  const updateApplicantStage = (applicantId, newStage, badgeClass) => {
    setCeo(prev => ({
      ...prev,
      pipelineApplicants: prev.pipelineApplicants.map(app => 
        app.id === applicantId ? { ...app, stage: newStage, stageBadge: badgeClass } : app
      )
    }));
    showToast('Applicant stage updated to ' + newStage);
  };

  const toggleDepositPaid = (applicantId) => {
    setCeo(prev => ({
      ...prev,
      pipelineApplicants: prev.pipelineApplicants.map(app => 
        app.id === applicantId ? { ...app, depositPaid: !app.depositPaid } : app
      )
    }));
    showToast('Deposit payment status toggled.');
  };

  const bookConsultation = (formData) => {
    showToast('Consultation confirmed for ' + formData.name + ' with Senior Counselor!', 'success');
    setIsBookingOpen(false);
  };

  return (
    <AppContext.Provider value={{
      currentView,
      setCurrentView,
      student,
      ceo,
      destinations: destinationsData,
      universities: universitiesData,
      selectedDestination,
      setSelectedDestination,
      isBookingOpen,
      setIsBookingOpen,
      isEligibilityOpen,
      setIsEligibilityOpen,
      toast,
      showToast,
      sendStudentMessage,
      updateDocumentStatus,
      uploadSimulatedDocument,
      acceptUniversityOffer,
      toggleApplicantVip,
      updateApplicantStage,
      toggleDepositPaid,
      bookConsultation
    }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}
