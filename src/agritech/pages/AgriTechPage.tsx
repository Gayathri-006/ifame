import React, { useState } from 'react';
import { Navbar } from '../../components/Navbar';
import { AgriTechHero } from '../components/AgriTechHero';
import { AgriTechChallenges } from '../components/AgriTechChallenges';
import { AgriTechFramework } from '../components/AgriTechFramework';
import { AgriTechServices } from '../components/AgriTechServices';
import { AgriTechEcosystem } from '../components/AgriTechEcosystem';
import { AgriTechMaturity } from '../components/AgriTechMaturity';
import { AgriTechProcess } from '../components/AgriTechProcess';
import { AgriTechOutcomes } from '../components/AgriTechOutcomes';
import { AgriTechCTA } from '../components/AgriTechCTA';
import { Footer } from '../../components/Footer';
import { ContactModal } from '../../components/ContactModal';
import { ServiceItem } from '../types';

interface AgriTechPageProps {
  onNavigate?: (section: string) => void;
}

export const AgriTechPage: React.FC<AgriTechPageProps> = ({ onNavigate = () => {} }) => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState('General Agri-Tech Advisory');

  const handleExploreClick = () => {
    const el = document.getElementById('framework-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenContact = (topic = 'General Agri-Tech Advisory') => {
    setSelectedTopic(topic);
    setIsContactOpen(true);
  };

  const handleServiceSelect = (service: ServiceItem) => {
    handleOpenContact(service.title);
  };

  return (
    <div className="min-h-screen bg-white text-stone-900 selection:bg-[#c6c6c6] selection:text-stone-950 font-sans antialiased overflow-x-hidden">
      {/* Top Navbar — shared component. currentPage is intentionally NOT
          "home" here, since we're on the AgTech page. This makes isHome
          false inside Navbar, which routes every section click through
          onNavigate(sectionId) + a poll-and-scroll once back on the home
          page, instead of trying (and failing) to scroll to sections that
          don't exist on this page. */}
      <Navbar
  currentPage="agritech"
  onNavigate={onNavigate}
  onOpenContact={() => handleOpenContact('Executive Agri-Tech Consultation')}
  onSelectPillar={() => onNavigate('what-we-do')}
  onSelectCapability={() => onNavigate('expertise')}
  onSelectIndustry={() => onNavigate('industries')}
/>

      {/* 1. HERO SECTION */}
      <AgriTechHero
        onExploreClick={handleExploreClick}
        onContactClick={() => handleOpenContact('Executive Agri-Tech Consultation')}
      />

      {/* 2. THE CHALLENGE */}
      <AgriTechChallenges />

      {/* 3. AGRI-TECH TRANSFORMATION FRAMEWORK */}
      <AgriTechFramework />

      {/* 4. AGRI-TECH SERVICES */}
      <AgriTechServices onServiceSelect={handleServiceSelect} />

      {/* 5. COLLABORATIVE AGRI-TECH ECOSYSTEM */}
      <AgriTechEcosystem />

      {/* 6. AGRI-TECH CAPABILITY MATURITY MODEL */}
      <AgriTechMaturity />

      {/* 7. HOW WE WORK */}
      <AgriTechProcess />

      {/* 8. OUTCOMES */}
      <AgriTechOutcomes />

      {/* 9. CALL TO ACTION BANNER */}
      <AgriTechCTA onContactClick={() => handleOpenContact('Enterprise Agri-Tech Modernization')} />

      {/* 10. FOOTER */}
      <Footer onNavigate={onNavigate} />

      {/* Contact & Consultation Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        defaultTopic={selectedTopic}
      />
    </div>
  );
};