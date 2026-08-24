import vardaanGlobal from '../assets/images/partners/vardaan-global.png';
import vardaanDataSciences from '../assets/images/partners/vardaan-data-sciences.png';
import vardaanSdnBhd from '../assets/images/partners/vardaan-sdn-bhd.png';
import vardaanUk from '../assets/images/partners/vardaan-uk.png';
import infodrive from '../assets/images/partners/infodrive.png';
import exalio from '../assets/images/partners/exalio.png';
import aiPlanet from '../assets/images/partners/ai-planet.png';
import recodeSolutions from '../assets/images/partners/recode-solutions.png';
import kamerAI from '../assets/images/partners/kamerai.png';
import abmKnowledgeware from '../assets/images/partners/abm-knowledgeware.png';
import inteliwaves from '../assets/images/partners/inteliwaves.png';
import posidex from '../assets/images/partners/posidex.png';
import mark from '../assets/images/partners/mark.png';
import metis from '../assets/images/partners/metis.png';
import savvyan from '../assets/images/partners/savvyan.png';

export interface PartnerLogo {
  id: string;
  name: string;
  logo: string;
}

export const PARTNER_LOGOS: PartnerLogo[] = [
  { id: 'vardaan-global', name: 'Vardaan Global', logo: vardaanGlobal },
  { id: 'vardaan-data-sciences', name: 'Vardaan Data Sciences', logo: vardaanDataSciences },
  { id: 'vardaan-sdn-bhd', name: 'Vardaan SDN BHD', logo: vardaanSdnBhd },
  { id: 'vardaan-uk', name: 'Vardaan UK', logo: vardaanUk },
  { id: 'infodrive', name: 'Infodrive', logo: infodrive },
  { id: 'exalio', name: 'Exalio', logo: exalio },
  { id: 'ai-planet', name: 'AI Planet', logo: aiPlanet },
  { id: 'recode-solutions', name: 'Recode Solutions', logo: recodeSolutions },
  { id: 'kamerai', name: 'KamerAI', logo: kamerAI },
  { id: 'abm-knowledgeware', name: 'ABM Knowledgeware Ltd', logo: abmKnowledgeware },
  { id: 'inteliwaves', name: 'Inteliwaves', logo: inteliwaves },
  { id: 'posidex', name: 'Posidex', logo: posidex },
  { id: 'mark', name: 'Mark', logo: mark },
  { id: 'metis', name: 'Metis', logo: metis },
  { id: 'savvyan', name: 'Savvyan Technologies', logo: savvyan }
];
