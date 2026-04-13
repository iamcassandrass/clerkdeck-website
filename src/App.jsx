import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  Users, 
  Globe, 
  FileSignature, 
  LayoutList, 
  Palette, 
  BellRing, 
  Receipt, 
  PenTool, 
  FileDown, 
  Menu, 
  X, 
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

// Custom Logo Component matching the uploaded 3D stacked cards
const Logo = ({ className = "w-8 h-8" }) => (
  <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* Bottom Layer - Orange */}
    <path d="M50 90 L15 70 L50 50 L85 70 Z" fill="#FFA726" stroke="#FFA726" strokeWidth="8" strokeLinejoin="round" />
    {/* Middle Layer - Blue */}
    <path d="M50 70 L15 50 L50 30 L85 50 Z" fill="#42A5F5" stroke="#42A5F5" strokeWidth="8" strokeLinejoin="round" />
    {/* Top Layer - Teal */}
    <path d="M50 50 L15 30 L50 10 L85 30 Z" fill="#26A69A" stroke="#26A69A" strokeWidth="8" strokeLinejoin="round" />
    {/* Checkmark */}
    <path d="M42 30 L48 36 L58 22" stroke="#004D40" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.6"/>
  </svg>
);

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyle = "inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-colors duration-200";
  const variants = {
    primary: "bg-teal-600 text-white hover:bg-teal-700 shadow-sm",
    secondary: "bg-white text-teal-600 border-2 border-teal-100 hover:border-teal-200",
    outline: "border-2 border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50"
  };
  
  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

// --- PAGES ---

const HomePage = ({ navigate }) => (
  <div className="animate-in fade-in duration-500">
    {/* Hero Section */}
    <section className="bg-slate-50 pt-24 pb-16 md:pt-32 md:pb-24 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-100 text-teal-700 font-medium text-sm mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
            </span>
            Now Available for Virtual Assistants
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
            Your All-in-One <span className="text-teal-600">Business Command Center</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0">
            Designed specifically for Virtual Assistants, remote workers, and freelancers. Say goodbye to messy spreadsheets and expensive enterprise software. Manage clients, track tasks, and get paid—all from the palm of your hand.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
            <Button variant="primary" className="w-full sm:w-auto text-lg px-8 py-4">
              Available on the App Store
            </Button>
          </div>
        </div>
        
        {/* Abstract App Mockup */}
        <div className="flex-1 w-full max-w-md lg:max-w-none relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-teal-100 to-emerald-50 rounded-3xl transform rotate-3 scale-105"></div>
          <div className="relative bg-white border border-slate-200 shadow-xl rounded-2xl p-6 overflow-hidden">
            <div className="flex items-center justify-between mb-6">
              <div className="h-4 w-24 bg-slate-200 rounded-full"></div>
              <div className="h-8 w-8 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 font-bold">VA</div>
            </div>
            <div className="space-y-4">
              {/* Task 1 - Teal matching top logo layer */}
              <div className="p-4 rounded-xl border border-slate-100 bg-slate-50 flex gap-4 items-start">
                <div className="w-2 h-10 bg-teal-500 rounded-full"></div>
                <div>
                  <div className="h-4 w-32 bg-slate-300 rounded mb-2"></div>
                  <div className="h-3 w-20 bg-slate-200 rounded"></div>
                </div>
                <div className="ml-auto">
                  <ShieldCheck className="h-6 w-6 text-teal-500" />
                </div>
              </div>
              {/* Task 2 - Blue matching middle logo layer */}
              <div className="p-4 rounded-xl border border-slate-100 bg-slate-50 flex gap-4 items-start opacity-70">
                <div className="w-2 h-10 bg-blue-400 rounded-full"></div>
                <div>
                  <div className="h-4 w-40 bg-slate-300 rounded mb-2"></div>
                  <div className="h-3 w-24 bg-slate-200 rounded"></div>
                </div>
              </div>
              {/* Task 3 - Orange matching bottom logo layer */}
              <div className="p-4 rounded-xl border border-slate-100 bg-slate-50 flex gap-4 items-start opacity-40">
                <div className="w-2 h-10 bg-amber-400 rounded-full"></div>
                <div>
                  <div className="h-4 w-28 bg-slate-300 rounded mb-2"></div>
                  <div className="h-3 w-16 bg-slate-200 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* USP Section */}
    <section className="py-20 bg-teal-700 text-white px-4">
      <div className="max-w-4xl mx-auto text-center">
        <ShieldCheck className="h-16 w-16 mx-auto mb-6 text-teal-200" />
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Build Unshakable Client Trust with Verified Reporting</h2>
        <p className="text-xl text-teal-50 mb-8 leading-relaxed">
          Credibility is the most valuable currency for a VA. ClerkDeck features a unique, unalterable Task Reporting system. Once a task is marked completed, the date is locked in and cannot be altered or fudged.
        </p>
        <p className="text-lg text-teal-100">
          When you export these task reports to your clients, they have 100% peace of mind knowing they are looking at verified, accurate, and trustworthy proof of your hard work.
        </p>
      </div>
    </section>

    {/* Core Features */}
    <section className="py-24 bg-white px-4" id="features">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Everything You Need to Scale</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">ClerkDeck puts your entire freelance business in one place, replacing a dozen disconnected tools.</p>
        </div>

        {/* Feature Category 1 - Blue Theme */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8 border-b border-slate-200 pb-4">
            <Users className="h-8 w-8 text-blue-500" />
            <h3 className="text-2xl font-bold text-slate-800">Seamless Client Management (CRM)</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-50 p-6 rounded-2xl">
              <div className="bg-blue-50 w-12 h-12 flex items-center justify-center rounded-lg shadow-sm mb-4 text-blue-600"><Users /></div>
              <h4 className="text-xl font-semibold mb-2">Centralized Profiles</h4>
              <p className="text-slate-600">Store Company Legal Names, TAX IDs, and key points of contact (Email, Phone, WhatsApp, Telegram) in one secure hub.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl">
              <div className="bg-blue-50 w-12 h-12 flex items-center justify-center rounded-lg shadow-sm mb-4 text-blue-600"><FileSignature /></div>
              <h4 className="text-xl font-semibold mb-2">Smart Contract Tracking</h4>
              <p className="text-slate-600">Upload and securely download client contracts. Get automated notifications exactly 2 weeks before a contract expires.</p>
            </div>
          </div>
        </div>

        {/* Feature Category 2 - Teal Theme */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8 border-b border-slate-200 pb-4">
            <LayoutList className="h-8 w-8 text-teal-600" />
            <h3 className="text-2xl font-bold text-slate-800">Visual & Automated Task Management</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="border border-slate-100 shadow-sm p-6 rounded-2xl">
              <LayoutList className="h-8 w-8 text-teal-500 mb-4" />
              <h4 className="font-semibold mb-2">Flexible Views</h4>
              <p className="text-sm text-slate-600">View your workflow in a clean list format or a detailed, spreadsheet-style grid.</p>
            </div>
            <div className="border border-slate-100 shadow-sm p-6 rounded-2xl">
              <Palette className="h-8 w-8 text-teal-500 mb-4" />
              <h4 className="font-semibold mb-2">Color-Coded "Pills"</h4>
              <p className="text-sm text-slate-600">Sort tasks visually using customizable Pill tags for Priorities (Low, Urgent, etc.) and Stakeholders.</p>
            </div>
            <div className="border border-slate-100 shadow-sm p-6 rounded-2xl">
              <BellRing className="h-8 w-8 text-teal-500 mb-4" />
              <h4 className="font-semibold mb-2">Automated Deadlines</h4>
              <p className="text-sm text-slate-600">Set due dates and receive push and email notifications 24 hours before a deadline strikes.</p>
            </div>
            <div className="border border-slate-100 shadow-sm p-6 rounded-2xl">
              <PenTool className="h-8 w-8 text-teal-500 mb-4" />
              <h4 className="font-semibold mb-2">Rich Task Details</h4>
              <p className="text-sm text-slate-600">Add 1-sentence briefs, creation dates, and special notes to keep context crystal clear.</p>
            </div>
          </div>
        </div>

        {/* Feature Category 3 - Orange/Amber Theme */}
        <div>
          <div className="flex items-center gap-3 mb-8 border-b border-slate-200 pb-4">
            <Receipt className="h-8 w-8 text-amber-500" />
            <h3 className="text-2xl font-bold text-slate-800">Professional Custom Invoicing</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6">
              <div className="bg-amber-50 rounded-full p-4 mb-4 text-amber-600"><Receipt size={32} /></div>
              <h4 className="text-xl font-semibold mb-2">Get Paid Faster</h4>
              <p className="text-slate-600">Generate professional, format-ready invoices tailored to each specific client in seconds.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <div className="bg-amber-50 rounded-full p-4 mb-4 text-amber-600"><PenTool size={32} /></div>
              <h4 className="text-xl font-semibold mb-2">Fully Customizable</h4>
              <p className="text-slate-600">Upload your own custom business logo and digital signature for a premium look.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <div className="bg-amber-50 rounded-full p-4 mb-4 text-amber-600"><FileDown size={32} /></div>
              <h4 className="text-xl font-semibold mb-2">Easy Export</h4>
              <p className="text-slate-600">Extract payment requests instantly as pristine PDFs to send straight to your clients.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* CTA Section */}
    <section className="py-20 bg-slate-900 text-white text-center px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to level up your Virtual Assistant career?</h2>
        <p className="text-xl text-slate-300 mb-10">
          Download ClerkDeck today and turn your busy schedule into a beautifully organized business.
        </p>
        <Button variant="primary" className="text-lg px-8 py-4">
          Available on the App Store
        </Button>
      </div>
    </section>
  </div>
);

const TermsPage = () => (
  <div className="animate-in fade-in duration-500 bg-white pt-32 pb-24 px-4 min-h-screen">
    <div className="max-w-3xl mx-auto prose prose-slate">
      <h1 className="text-4xl font-bold mb-8">Terms of Use</h1>
      <p className="text-slate-500 mb-8">Last Updated: April 2026</p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
        <p className="text-slate-700 mb-4">
          By downloading, installing, or using the ClerkDeck application ("App"), you agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use the App.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">2. Description of Service</h2>
        <p className="text-slate-700 mb-4">
          ClerkDeck is a business management application designed for Virtual Assistants, freelancers, and remote workers to manage clients, track tasks, and generate invoices. The App operates on a local-storage basis.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">3. Data Storage and Responsibility</h2>
        <p className="text-slate-700 mb-4">
          <strong>Crucial Notice regarding Data:</strong> ClerkDeck is designed as a local-first application. We do not store, host, or back up your data on our servers. All client information, task history, and invoices are stored exclusively on your device.
        </p>
        <p className="text-slate-700 mb-4">
          You are solely responsible for maintaining backups of your data. ClerkDeck is not liable for any loss of data due to device failure, app deletion, or accidental modification.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">4. The "Unalterable" Task Feature</h2>
        <p className="text-slate-700 mb-4">
          ClerkDeck provides a feature that locks the completion date of tasks to establish verified reporting. While we build this feature to prevent casual alteration, you understand that because data is stored locally on your device, malicious tampering by an advanced user on their own device is technically outside of our control. We provide this feature as a trust-building tool between you and your clients in good faith.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">5. Limitation of Liability</h2>
        <p className="text-slate-700 mb-4">
          ClerkDeck is provided "as is" without warranty of any kind. In no event shall the creators of ClerkDeck be liable for any damages, lost profits, or loss of data arising out of the use or inability to use the application.
        </p>
      </section>
    </div>
  </div>
);

const PrivacyPage = () => (
  <div className="animate-in fade-in duration-500 bg-white pt-32 pb-24 px-4 min-h-screen">
    <div className="max-w-3xl mx-auto prose prose-slate">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      <p className="text-slate-500 mb-8">Last Updated: April 2026</p>

      <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 mb-8 rounded-r-lg">
        <h3 className="text-xl font-bold text-emerald-800 mb-2">The Short Version: We Don't Want Your Data</h3>
        <p className="text-emerald-700">
          ClerkDeck is built with extreme privacy in mind. We do not collect, store, or transmit your clients' data, your tasks, or your invoices. <strong>Everything you do in the App stays locally on your device.</strong>
        </p>
      </div>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">1. Local Storage</h2>
        <p className="text-slate-700 mb-4">
          All data generated or entered by you using ClerkDeck (including but not limited to Client Profiles, Tax IDs, Contracts, Tasks, and Invoices) is stored locally within the application's storage directory on your personal device. We do not have servers that sync, store, or view your business information.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">2. Data We DO NOT Collect</h2>
        <ul className="list-disc pl-6 text-slate-700 mb-4 space-y-2">
          <li>We do not collect names, email addresses, phone numbers, or Tax IDs of your clients.</li>
          <li>We do not collect or view your task titles, descriptions, or completion dates.</li>
          <li>We do not collect your financial data or view your generated invoices.</li>
          <li>We do not collect your location data.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">3. App Analytics and Crash Reports</h2>
        <p className="text-slate-700 mb-4">
          To help us improve the App, the respective app stores (Apple App Store / Google Play Store) may collect standard, anonymized crash reports and basic usage metrics if you have opted-in through your device's operating system settings. This data is fully anonymized and contains no personal business data.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">4. Third-Party Access</h2>
        <p className="text-slate-700 mb-4">
          Because your data is stored solely on your device, we cannot and do not share your data with any third parties, advertisers, or analytics companies. 
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">5. Your Responsibilities</h2>
        <p className="text-slate-700 mb-4">
          Because your data is entirely local, you are responsible for the physical and digital security of your device. We highly recommend utilizing your device's built-in security features (passcodes, biometrics) to protect the sensitive client data you store within ClerkDeck.
        </p>
      </section>
    </div>
  </div>
);

// --- MAIN APP COMPONENT ---

export default function App() {
  const [currentPage, setCurrentPage] = useState(() => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname;
      if (path.includes('/privacy')) return 'privacy';
      if (path.includes('/terms')) return 'terms';
    }
    return 'home';
  });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle browser back/forward navigation
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      if (path.includes('/privacy')) setCurrentPage('privacy');
      else if (path.includes('/terms')) setCurrentPage('terms');
      else setCurrentPage('home');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMobileMenuOpen(false);
  }, [currentPage]);

  const navigate = (page) => {
    setCurrentPage(page);
    try {
      // Update browser URL without reloading the page
      const path = page === 'home' ? '/' : `/${page}`;
      window.history.pushState({}, '', path);
    } catch (e) {
      // Ignore history API errors in restricted iframes
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 flex flex-col">
      
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-slate-200 z-50">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          {/* Logo */}
          <div 
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => navigate('home')}
          >
            <Logo className="w-8 h-8" />
            <span className="text-xl font-bold tracking-tight">ClerkDeck</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => navigate('home')} className="text-sm font-medium text-slate-600 hover:text-teal-600 transition-colors">Home</button>
            <button onClick={() => { navigate('home'); setTimeout(() => document.getElementById('features')?.scrollIntoView({behavior: 'smooth'}), 100); }} className="text-sm font-medium text-slate-600 hover:text-teal-600 transition-colors">Features</button>
            <Button variant="primary" className="py-2 px-4 text-sm">Available on the App Store</Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-slate-600"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 px-4 py-4 flex flex-col gap-4">
            <button onClick={() => navigate('home')} className="text-left font-medium text-slate-600 py-2 border-b border-slate-50">Home</button>
            <a href="https://clerkdeck.com/terms" onClick={(e) => { e.preventDefault(); navigate('terms'); }} className="block text-left font-medium text-slate-600 py-2 border-b border-slate-50">Terms of Use</a>
            <a href="https://clerkdeck.com/privacy" onClick={(e) => { e.preventDefault(); navigate('privacy'); }} className="block text-left font-medium text-slate-600 py-2 border-b border-slate-50">Privacy Policy</a>
            <Button variant="primary" className="w-full mt-2">Available on the App Store</Button>
          </div>
        )}
      </nav>

      {/* Main Content Area */}
      <main className="flex-grow">
        {currentPage === 'home' && <HomePage navigate={navigate} />}
        {currentPage === 'terms' && <TermsPage />}
        {currentPage === 'privacy' && <PrivacyPage />}
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-12 px-4 mt-auto">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Logo className="w-6 h-6 grayscale opacity-80" />
              <span className="text-xl font-bold text-white tracking-tight">ClerkDeck</span>
            </div>
            <p className="mb-4 max-w-sm">
              The all-in-one business command center for Virtual Assistants, remote workers, and freelancers.
            </p>
            <p className="text-sm font-medium text-slate-500 mb-1">Crafted by Cassandra Sawali</p>
            <p className="text-sm">© {new Date().getFullYear()} ClerkDeck App. All rights reserved.</p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li><button onClick={() => { navigate('home'); setTimeout(() => document.getElementById('features')?.scrollIntoView({behavior: 'smooth'}), 100); }} className="hover:text-white transition-colors">Features</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="https://clerkdeck.com/terms" onClick={(e) => { e.preventDefault(); navigate('terms'); }} className="hover:text-white transition-colors">Terms of Use</a></li>
              <li><a href="https://clerkdeck.com/privacy" onClick={(e) => { e.preventDefault(); navigate('privacy'); }} className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
