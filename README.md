# RoyalSurya Education Foundation - Study Abroad Platform

A comprehensive, full-featured **Study Abroad Consultancy & EdTech Web Platform** built with **React 19**, **Vite**, **Tailwind CSS v4**, **Recharts**, and **Lucide Icons**.

---

## 🌟 Key Features

### 1. Unified Role Switcher (Top Sticky Bar)
A permanent, high-visibility role switcher bar at the very top of every screen allows instant toggling between:
- **🌐 Public Website**: Prospective student & family landing portal.
- **🎓 Student Dashboard**: Logged-in applicant portal (*Aarav Sharma*).
- **👔 CEO Executive Suite**: Command center for the Managing Director & Agency Leadership.

### 2. Public Portal
- **High-Converting Hero Section**: Dynamic search widget for Country, Degree Level, Intake Year, and Field of Study.
- **Live Credibility Metrics**: 98.4% Visa Success Rate, 12,500+ Students Placed, 450+ Partner Universities, $18M+ Scholarships Secured.
- **Destination Guides**: Interactive cards and modal for USA, UK, Canada, Australia, Germany, and Ireland with tuition, work visa rules (OPT/PSW), and top institutions.
- **Partner University Finder**: Search & filter by country, degree level, budget, and active scholarship waivers.
- **AI Eligibility Calculator**: Interactive 3-step evaluation assessing admission odds, Dream/Target university tiers, and scholarship estimates.
- **1-on-1 Counseling Scheduler**: Booking modal for in-person or Zoom appointments across Kathmandu HQ, Pokhara, Chitwan, Butwal, etc.
- **Services Hub**: IELTS/PTE test prep, SOP mentorship, visa mock interviews, student loan assistance, and pre-departure orientations.

### 3. Student Dashboard Portal
- **Applicant Profile**: Aarav Sharma (B.Tech Graduate, 3.64 GPA, 7.5 IELTS, 322 GRE) applying for Fall 2025 MSc Computer Science.
- **Assigned Senior Counselor**: Priya Nair (Senior US/UK Advisor, Kathmandu HQ).
- **Application Lifecycle Stepper**: 6-stage visual pipeline tracker (Stage 4 currently active: 2 official offers received).
- **University Offers Hub**: Status tracker for Arizona State University ($8,500/yr scholarship), University of Manchester, and University of Melbourne, with one-click "Accept Offer & Request I-20".
- **Document Vault**: Verified upload checklist for Passport, Transcripts, IELTS TRF, SOP, and Bank Solvency with simulated upload & verification.
- **Counselor Messenger**: Direct simulated two-way chat with Counselor Priya Nair.
- **Matched Scholarships**: Curated funding opportunities matching student qualifications.

### 4. CEO Executive Suite Dashboard
- **Executive KPIs**: Gross Agency Revenue ($684,200), Active Pipeline (1,420), Visa Success Rate (98.4%), Pending Partner Commissions ($148,500).
- **Visual Analytics Suite (Recharts)**:
  - Monthly Revenue & Enrollment Trend (Area Chart).
  - Destination Country Breakdown (Donut Chart: USA 38%, UK 26%, Canada 17%, Australia 12%, Germany 7%).
  - 5-Stage Intake Conversion Funnel.
- **Counselor Leaderboard & Branch Network**: Staff ranking by visas secured, conversion rate, and commission; plus branch performance (*Kathmandu HQ, Pokhara, Chitwan, Butwal, Sydney*).
- **Master CRM Application Pipeline**: Filterable applicant table with live stage updates, VIP star toggling, and deposit status tracking.
- **Visa Policy Radar**: Global immigration regulatory updates.

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- npm (v9+)

### Installation & Run
```bash
# Navigate to project directory
cd royalsurya-education-portal

# Install dependencies (already installed)
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173/](http://localhost:5173/) in your browser.

### Build for Production
```bash
npm run build
```
Build outputs are generated in the `dist/` directory.

---

## 📁 Project Architecture

```
royalsurya-education-portal/
├── index.html
├── package.json
├── vite.config.js
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── index.css
│   ├── context/
│   │   └── AppContext.jsx          # Reactive state, role switching, & localStorage
│   ├── data/
│   │   ├── destinationsData.js      # Country profiles & visa rules
│   │   ├── universitiesData.js      # Global partner university listings
│   │   ├── studentMockData.js       # Applications, checklist, & chat
│   │   └── ceoMockData.js           # KPIs, revenue charts, CRM pipeline
│   └── components/
│       ├── common/
│       │   ├── Navbar.jsx           # Brand header & quick navigation
│       │   ├── Footer.jsx           # Branch directory & accreditation
│       │   ├── RoleSwitcher.jsx     # Top persistent role switcher
│       │   └── Toast.jsx            # Notification alerts
│       ├── public/
│       │   ├── HeroSection.jsx      # Hero search & credibility metrics
│       │   ├── DestinationCards.jsx # Country explorer cards
│       │   ├── DestinationModal.jsx # Country deep-dive modal
│       │   ├── UniversityFinder.jsx # Search & filter university catalog
│       │   ├── EligibilityQuizModal.jsx # Admissions calculator
│       │   ├── BookingModal.jsx     # Consultation scheduler modal
│       │   └── ServicesSection.jsx  # Test prep & visa solutions
│       ├── student/
│       │   └── StudentDashboard.jsx # Stepper, offers, document vault, chat
│       └── ceo/
│           └── CeoDashboard.jsx     # Executive KPIs, charts, CRM & radar
```

---

## 🏛️ About RoyalSurya Education Foundation
RoyalSurya Education Foundation is a premier study abroad consultancy registered with the Ministry of Education, Science & Technology (MoEST), member of ECAN, with certified QEAC and British Council trained counselors. Headquartered in Putalisadak, Kathmandu with branches across Pokhara, Chitwan, Butwal, Biratnagar, and a Sydney liaison office.

