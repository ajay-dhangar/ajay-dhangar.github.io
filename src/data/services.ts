export interface Service {
  id: string;
  title: string;
  category: string;
  description: string;
  icon: string;
  whatIs: string;
  whyNeeded: string;
  benefits: string[];
  howWeHelp: string;
}

export const services: Service[] = [
  {
    id: 'birth-death-certificate',
    title: 'Birth & Death Certificates',
    category: 'Government',
    description: 'Get official birth and death certificates online quickly and easily.',
    icon: '📋',
    whatIs: 'Birth and Death certificates are official documents issued by the government that serve as legal proof of birth and death events. It includes details such as name, date of birth/death, place of occurrence, and parentage.',
    whyNeeded: 'These certificates are essential for various legal procedures, school admissions, passport applications, property matters, and insurance claims. They are also required for government benefits and schemes.',
    benefits: [
      'Legal proof of identity and age',
      'Required for passport and visa applications',
      'Essential for school and college admissions',
      'Needed for property inheritance',
      'Required for insurance claims',
      'Access to government schemes and benefits',
      'Facilitates demographic and health statistics'
    ],
    howWeHelp: 'We handle the entire application process, from document verification to submission and tracking, ensuring you receive your certificates without any hassle. Our experienced team guides you through each step, making it quick and easy.'
  },
  {
    id: 'ration-card',
    title: 'Ration Card Services',
    category: 'Government',
    description: 'Apply for new ration cards or update existing ones with complete assistance.',
    icon: '🏪',
    whatIs: 'Ration Card is an official document issued by the government to identify beneficiaries under the Public Distribution System (PDS). It allows families to purchase subsidized food grains and essential commodities from government-authorized shops. It also serves as an important identity and address proof document.',
    whyNeeded: 'It provides access to subsidized food grains and other essential commodities, and serves as an important identity and address proof document. It is also required for various government schemes and subsidies.',
    benefits: [
      'Access to subsidized food grains',
      'Valid identity and address proof',
      'Required for various government schemes',
      'Essential for LPG subsidy',
      'Needed for voter ID applications',
      'Facilitates access to social welfare programs',
      'Helps in availing healthcare benefits'
    ],
    howWeHelp: 'We assist with new applications, corrections, additions/deletions of family members, and provide complete guidance throughout the process. Our team ensures accurate documentation and timely submission to get your ration card hassle-free.'
  },
  {
    id: 'aeps-banking',
    title: 'Aadhaar Enabled Payment (AEPS)',
    category: 'Banking',
    description: 'Secure banking transactions using Aadhaar authentication.',
    icon: '💳',
    whatIs: 'AEPS is a payment service that allows customers to access their bank account and perform basic banking transactions using Aadhaar authentication.',
    whyNeeded: 'It provides financial inclusion for people in remote areas and enables secure, convenient banking without the need for cards or PINs.',
    benefits: [
      'No need to carry ATM cards or remember PINs',
      'Available 24/7 banking services',
      'Secure biometric authentication',
      'Instant cash withdrawal',
      'Balance inquiry and mini statements'
    ],
    howWeHelp: 'We provide AEPS services with trained operators, ensuring secure transactions and helping customers with cash withdrawal, balance inquiry, and fund transfers.'
  },
  {
    id: 'online-exam-forms',
    title: 'Online Exam Forms',
    category: 'Education',
    description: 'Submit examination forms for various competitive and academic exams.',
    icon: '📚',
    whatIs: 'Online exam form submission service for various competitive examinations, board exams, and entrance tests.',
    whyNeeded: 'Many students face difficulties in filling online forms due to technical issues, documentation problems, or lack of internet access.',
    benefits: [
      'Expert assistance in form filling',
      'Document verification before submission',
      'Timely submission before deadlines',
      'Technical support for online issues',
      'Follow-up until confirmation'
    ],
    howWeHelp: 'We provide complete assistance from form filling to document upload, ensuring error-free submissions and timely completion of all examination forms.'
  },
  {
    id: 'ayushman-bharat',
    title: 'Ayushman Bharat Card',
    category: 'Healthcare',
    description: 'Get your Ayushman Bharat health insurance card for free medical treatment.',
    icon: '🏥',
    whatIs: 'Ayushman Bharat is a national health insurance scheme providing free healthcare coverage up to ₹5 lakh per family per year.',
    whyNeeded: 'It provides financial protection against high medical expenses and ensures access to quality healthcare for economically weaker sections.',
    benefits: [
      'Free treatment up to ₹5 lakh per year',
      'Cashless treatment at empaneled hospitals',
      'Coverage for pre and post hospitalization',
      'No restrictions on family size or age',
      'Covers secondary and tertiary care'
    ],
    howWeHelp: 'We assist in checking eligibility, applying for new cards, downloading existing cards, and provide guidance on how to use the benefits.'
  },
  {
    id: 'gst-business',
    title: 'GST & Business Services',
    category: 'Business',
    description: 'Complete GST registration, filing, and business compliance services.',
    icon: '💼',
    whatIs: 'GST and business services include registration, return filing, compliance management, and other business-related documentation.',
    whyNeeded: 'Businesses need to comply with GST regulations and maintain proper documentation for legal operations and tax benefits.',
    benefits: [
      'Legal compliance with tax regulations',
      'Input tax credit benefits',
      'Professional documentation',
      'Timely filing of returns',
      'Business growth support'
    ],
    howWeHelp: 'We provide end-to-end GST services including registration, monthly/quarterly return filing, and complete business compliance support.'
  },
  {
    id: 'land-records',
    title: 'Land Records & Revenue Services',
    category: 'Panchayat',
    description: 'Access and update land records, revenue documents, and property papers.',
    icon: '🏞️',
    whatIs: 'Land records and revenue services involve accessing, updating, and managing property documents and revenue records.',
    whyNeeded: 'These documents are essential for property transactions, loan applications, legal matters, and establishing ownership rights.',
    benefits: [
      'Legal proof of land ownership',
      'Required for property transactions',
      'Essential for loan applications',
      'Helps in legal disputes',
      'Needed for property registration'
    ],
    howWeHelp: 'We assist in obtaining land records, updating property details, and provide complete guidance for all revenue-related documentation.'
  },
  {
    id: 'digital-payments',
    title: 'Digital Payment Solutions',
    category: 'Digital',
    description: 'All types of digital payments, money transfers, and online transactions.',
    icon: '📱',
    whatIs: 'Digital payment solutions include money transfers, bill payments, recharges, and various online transaction services.',
    whyNeeded: 'Digital payments provide convenience, security, and instant transaction capabilities for modern financial needs.',
    benefits: [
      'Instant money transfers',
      'Secure transaction processing',
      'Bill payment convenience',
      'Mobile and DTH recharges',
      '24/7 availability'
    ],
    howWeHelp: 'We facilitate all types of digital payments with secure processing, competitive rates, and instant transaction confirmations.'
  }
];

export const categories = [
  'All',
  'Government',
  'Banking',
  'Digital',
  'Education',
  'Healthcare',
  'Business',
  'Panchayat'
];