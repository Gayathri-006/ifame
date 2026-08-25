import mark from '../assets/images/partners/mark.png';
import metis from '../assets/images/partners/metis.png';
import savvyan from '../assets/images/partners/savvyan.png';

export interface PartnerLogo {
  id: string;
  name: string;
  logo: string;
}

export const PARTNER_LOGOS: PartnerLogo[] = [
  { id: 'mark', name: 'Mark', logo: mark },
  { id: 'metis', name: 'Metis', logo: metis },
  { id: 'savvyan', name: 'Savvyan Technologies', logo: savvyan }
];