import React, { useState } from 'react';
import { AppProvider, useApp } from './context/AppContext';
import RoleSwitcher from './components/common/RoleSwitcher';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Toast from './components/common/Toast';
import HeroSection from './components/public/HeroSection';
import DestinationCards from './components/public/DestinationCards';
import DestinationModal from './components/public/DestinationModal';
import UniversityFinder from './components/public/UniversityFinder';
import ServicesSection from './components/public/ServicesSection';
import BookingModal from './components/public/BookingModal';
import EligibilityQuizModal from './components/public/EligibilityQuizModal';
import StudentDashboard from './components/student/StudentDashboard';
import CeoDashboard from './components/ceo/CeoDashboard';

function MainLayout() {
  const { currentView } = useApp();
  const [heroFilter, setHeroFilter] = useState(null);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 selection:bg-blue-600 selection:text-white">
      {/* Top Persistent Role Switcher for Seamless Testing */}
      <RoleSwitcher />

      {/* Main Brand Navigation Bar */}
      <Navbar />

      {/* Main View Router */}
      <main className="flex-1">
        {currentView === 'public' && (
          <div>
            <HeroSection onSearchFilter={setHeroFilter} />
            <DestinationCards />
            <UniversityFinder searchFilter={heroFilter} />
            <ServicesSection />
          </div>
        )}

        {currentView === 'student' && (
          <StudentDashboard />
        )}

        {currentView === 'ceo' && (
          <CeoDashboard />
        )}
      </main>

      {/* Footer */}
      <Footer />

      {/* Global Modals & Notifications */}
      <BookingModal />
      <EligibilityQuizModal />
      <DestinationModal />
      <Toast />
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <MainLayout />
    </AppProvider>
  );
}
