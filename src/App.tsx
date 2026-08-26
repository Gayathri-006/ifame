import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { WhoWeAreSection } from './components/WhoWeAreSection';
import { VisionMissionSection } from './components/VisionMissionSection';
import { ExpertiseStrip } from './components/ExpertiseStrip';
import { IndustriesAndInsightsSection } from './components/IndustriesAndInsightsSection';
import { CorePillarsSection } from './components/CorePillarsSection';
import { EcosystemInitiativeSection } from './components/EcosystemInitiativeSection';
import { SmartAgricultureSection } from './components/SmartAgricultureSection';
import { RnDInnovationSection } from './components/RnDInnovationSection';
import { LangkawiInnovationHubSection } from './components/LangkawiInnovationHubSection';
import { InvestmentProjectDevelopmentSection } from './components/InvestmentProjectDevelopmentSection';
import { OurEcosystemSection } from './components/OurEcosystemSection';
import { PartnersSection } from './components/PartnersSection';
import { FinalCTASection } from './components/FinalCTASection';
import { Footer } from './components/Footer';
import { DetailModal } from './components/DetailModal';
import { ContactModal } from './components/ContactModal';
import { AgriTechPage } from './agritech/pages/AgriTechPage';

import { CONSULTING_PILLARS } from './data/services';
import { CAPABILITIES } from './data/capabilities';
import { INDUSTRIES } from './data/industries';
import { ConsultingPillarId, ConsultingPillar, CapabilityItem, IndustryItem } from './types';

type ModalState =
  { type: 'pillar'; data: ConsultingPillar } |
  { type: 'capability'; data: CapabilityItem } |
  { type: 'industry'; data: IndustryItem } |
  null;

export default function App() {
  const [modalState, setModalState] = useState<ModalState>(null);

  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [contactTopic, setContactTopic] = useState('');

  // Full-page takeover for the dedicated AgTech industry page.
  const [showAgriTechPage, setShowAgriTechPage] = useState(false);

  // Remembers which home-page section the Navbar (while on the AgTech page)
  // actually wants to land on. Set right before we call history.back(), and
  // read once popstate fires and closeAgriTechPage() runs. A ref (not state)
  // because we need the value synchronously inside an event handler that
  // fires asynchronously after the browser's back navigation completes.
  const pendingSectionRef = useRef<string | null>(null);

  const handleOpenContact = (topic?: string) => {
    setContactTopic(topic || '');
    setContactModalOpen(true);
  };

  const handleSelectPillar = (pillarId: ConsultingPillarId) => {
    const found = CONSULTING_PILLARS.find((p) => p.id === pillarId);
    if (found) {
      setModalState({ type: 'pillar', data: found });
    }
  };

  const handleSelectCapability = (capId: string) => {
    const found = CAPABILITIES.find((c) => c.id === capId);
    if (found) {
      setModalState({ type: 'capability', data: found });
    }
  };

  // Scrolls to a section while accounting for the height of the fixed navbar
  // (plus a small breathing-room gap), so the section's own heading lands
  // just below the navbar instead of underneath it or too far down the page.
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    const header = document.getElementById('main-navigation-bar');
    const headerHeight = header ? header.offsetHeight : 80;
    const extraGap = 16;

    const top =
      el.getBoundingClientRect().top +
      window.scrollY -
      headerHeight -
      extraGap;

    window.scrollTo({
      top: Math.max(top, 0),
      behavior: 'smooth',
    });
  };

  // Leaving the AgTech page always goes through this single path, so the
  // Chrome/browser back button and the in-page back-arrow/nav-link buttons
  // behave identically: both end up calling window.history.back(), and this
  // popstate handler is what actually closes the AgTech page and returns
  // home — then scrolls to whatever section was actually requested
  // (falling back to 'industries' for a plain physical back-button press,
  // since that's contextually where AgTech lives).
  const closeAgriTechPage = useCallback(() => {
    const target = pendingSectionRef.current || 'industries';
    pendingSectionRef.current = null;

    setShowAgriTechPage(false);
    window.scrollTo({ top: 0, behavior: 'auto' });
    setTimeout(() => scrollTo(target), 50);
  }, []);

  useEffect(() => {
    const handlePopState = () => {
      if (window.location.hash !== '#agri-tech') {
        closeAgriTechPage();
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [closeAgriTechPage]);

  const handleSelectIndustry = (indId: string) => {
    // AgTech gets its own dedicated deep-dive page instead of the quick-view modal.
    if (indId === 'agtech') {
      window.history.pushState({ page: 'agri-tech' }, '', '#agri-tech');
      setShowAgriTechPage(true);
      window.scrollTo({ top: 0, behavior: 'auto' });
      return;
    }
    const found = INDUSTRIES.find((i) => i.id === indId);
    if (found) {
      setModalState({ type: 'industry', data: found });
    }
  };

  // While the AgTech page is active, it fully replaces the main site (its own
  // navbar/footer included). Every "go home" action from within it — nav
  // links, the back arrow, the logo, the Chrome back button — funnels
  // through onNavigate(section), which stashes the target section and calls
  // window.history.back(). That triggers the popstate handler above, which
  // calls closeAgriTechPage() to actually return here and scroll.
  if (showAgriTechPage) {
    return (
      <AgriTechPage
        onNavigate={(section: string) => {
          pendingSectionRef.current = section;
          window.history.back();
        }}
      />
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col relative selection:bg-[#0055d4] selection:text-white">
      {/* 1. Header Navigation */}
      <Navbar
        onOpenContact={() => handleOpenContact('General Enterprise Advisory')}
        onSelectPillar={handleSelectPillar}
        onSelectCapability={handleSelectCapability}
        onSelectIndustry={handleSelectIndustry}
        onNavigate={(section) => scrollTo(section)}
        currentPage="home"
      />

      {/* 2. Main Hero Section (with Digital Wave Canvas) */}
      <main className="flex-1">
        <HeroSection
          onExploreSolutions={() => scrollTo('who-we-are')}
          onExploreExpertise={() => scrollTo('expertise')}
        />

        {/* 3. Who We Are Section (Elevated Card, replaces old What We Do layout) */}
        <WhoWeAreSection />

        {/* 3.5. Vision & Mission Section (overlapping cards, dark brand background) */}
        <VisionMissionSection />

        {/* 4. Our Expertise Strip (8 Strategic Capabilities) */}
        <ExpertiseStrip onSelectCapability={handleSelectCapability} />

        {/* 5. Industries We Empower & Insights Strip (Dark Bottom Section) */}
        <IndustriesAndInsightsSection
          onSelectIndustry={handleSelectIndustry}
          onExploreInsights={() => scrollTo('insights')}
          onViewAllIndustries={() => scrollTo('industries')}
        />

        {/* 5.5. Our Core Pillars Section */}
        <CorePillarsSection />

        {/* 5.6. MAITI Ecosystem Initiative */}
        <EcosystemInitiativeSection />

        {/* 5.7. Smart Agriculture & Agrofood */}
        <SmartAgricultureSection />

        {/* 5.8. R&D, Innovation & Technology */}
        <RnDInnovationSection />

        {/* 5.9. Langkawi Innovation Hub */}
        <LangkawiInnovationHubSection
          onOpenContact={() => handleOpenContact('Langkawi Innovation Hub')}
        />

        {/* 5.10. Investment & Project Development */}
        <InvestmentProjectDevelopmentSection />

        {/* 5.11. Our Ecosystem (stakeholder hub diagram) */}
        <OurEcosystemSection />

        {/* 6. Our Partners / Alliances Section */}
        <PartnersSection />

        {/* 7. Final CTA Section ("Let's discuss what's next.") */}
        <FinalCTASection onOpenContact={() => handleOpenContact('Direct Consultation Request')} />
      </main>

      {/* 8. Footer */}
      <Footer
        onSelectPillar={handleSelectPillar}
        onSelectIndustry={handleSelectIndustry}
        onSelectCapability={handleSelectCapability}
        onOpenContact={() => handleOpenContact('Consultation Desk')}
      />

      {/* Detail Deep-Dive Modal (Pillar, Capability, Industry) */}
      <DetailModal
        content={modalState}
        onClose={() => setModalState(null)}
        onOpenContact={handleOpenContact}
      />

      {/* Consultation Request Modal */}
      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
        initialTopic={contactTopic}
      />
    </div>
  );
}