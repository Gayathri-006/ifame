import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { WhatWeDoSection } from './components/WhatWeDoSection';
import { ExpertiseStrip } from './components/ExpertiseStrip';
import { IndustriesAndInsightsSection } from './components/IndustriesAndInsightsSection';
import { CaseStudySection } from './components/CaseStudySection';
import { TeamSection } from './components/TeamSection';
import { InsightsEditorialSection } from './components/InsightsEditorialSection';
import { PartnersSection } from './components/PartnersSection';
import { FinalCTASection } from './components/FinalCTASection';
import { Footer } from './components/Footer';
import { DetailModal } from './components/DetailModal';
import { ContactModal } from './components/ContactModal';
import { AgriTechPage } from './agritech/pages/AgriTechPage';

import { CONSULTING_PILLARS } from './data/services';
import { CAPABILITIES } from './data/capabilities';
import { INDUSTRIES } from './data/industries';
import { ConsultingPillarId, ConsultingPillar, CapabilityItem, IndustryItem, InsightArticle } from './types';

export default function App() {
  const [modalState, setModalState] = useState<
    | { type: 'pillar'; data: ConsultingPillar }
    | { type: 'capability'; data: CapabilityItem }
    | { type: 'industry'; data: IndustryItem }
    | { type: 'insight'; data: InsightArticle }
    | null
  >(null);

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

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
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

  const handleSelectArticle = (article: InsightArticle) => {
    setModalState({ type: 'insight', data: article });
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
      />

      {/* 2. Main Hero Section (with Digital Wave Canvas) */}
      <main className="flex-1">
        <HeroSection
          onExploreSolutions={() => scrollTo('what-we-do')}
          onExploreExpertise={() => scrollTo('expertise')}
        />

        {/* 3. What We Do Card Section (Elevated 4-Column Layout) */}
        <WhatWeDoSection
          onSelectPillar={handleSelectPillar}
          onLearnMoreAboutUs={() => scrollTo('partners')}
        />

        {/* 4. Our Expertise Strip (8 Strategic Capabilities) */}
        <ExpertiseStrip onSelectCapability={handleSelectCapability} />

        {/* 5. Industries We Empower & Insights Strip (Dark Bottom Section) */}
        <IndustriesAndInsightsSection
          onSelectIndustry={handleSelectIndustry}
          onExploreInsights={() => scrollTo('insights')}
          onViewAllIndustries={() => scrollTo('industries')}
        />

        {/* 6. Case Studies / Client Impact Section (Challenge -> Approach -> Transformation -> Outcome) */}
        <CaseStudySection onContactUs={() => handleOpenContact('Case Study Strategy Session')} />

        {/* 7. Leadership & Expert Team Section */}
        <TeamSection onContactTeamMember={(member) => handleOpenContact(`Strategic Advisory with ${member.name} (${member.role})`)} />

        {/* 9. Our Partners / Alliances Section */}
        <PartnersSection />

        {/* 10. Thought Leadership / Insights & Perspectives Editorial Section */}
        <InsightsEditorialSection onSelectArticle={handleSelectArticle} />

        {/* 11. Final CTA Section ("Let's discuss what's next.") */}
        <FinalCTASection onOpenContact={() => handleOpenContact('Direct Consultation Request')} />
      </main>

      {/* 10. Footer */}
      <Footer
        onSelectPillar={handleSelectPillar}
        onSelectIndustry={handleSelectIndustry}
        onSelectCapability={handleSelectCapability}
        onOpenContact={() => handleOpenContact('Consultation Desk')}
      />

      {/* Detail Deep-Dive Modal (Pillar, Capability, Industry, Insight Article) */}
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