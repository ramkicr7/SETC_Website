import {
  Award,
  BookOpen,
  GraduationCap,
  Headphones,
  Mic,
  Languages,
  Globe2,
  ShieldCheck,
  Target,
  Users,
  Clock3,
  MapPin,
  Monitor,
  Building2,
  Plane,
  Compass,
  FileText,
  type LucideIcon,
} from 'lucide-react';

export type Course = {
  slug: string;
  title: string;
  short: string;
  description: string;
  icon: LucideIcon;
  tone: 'blue' | 'red';
  image: string;
};

export const courses: Course[] = [
  { slug: 'ielts', title: 'IELTS Preparation', short: 'English exam preparation', description: 'Structured preparation for the IELTS exam, covering the skills and strategies needed for each section.', icon: Target, tone: 'blue', image: 'https://images.pexels.com/photos/7156125/pexels-photo-7156125.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { slug: 'pte', title: 'PTE Preparation', short: 'English exam preparation', description: 'Focused training for the PTE Academic exam, with practice for speaking, writing, reading and listening.', icon: Award, tone: 'red', image: 'https://images.pexels.com/photos/5428012/pexels-photo-5428012.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { slug: 'oet', title: 'OET Preparation', short: 'Professional exam preparation', description: 'Preparation for the Occupational English Test, designed for healthcare professionals.', icon: ShieldCheck, tone: 'blue', image: 'https://images.pexels.com/photos/3985154/pexels-photo-3985154.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { slug: 'naati-ccl', title: 'NAATI CCL', short: 'Professional exam preparation', description: 'Training for the NAATI Credentialed Community Language test, supporting migration-related goals.', icon: Globe2, tone: 'red', image: 'https://images.pexels.com/photos/6502822/pexels-photo-6502822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { slug: 'celpip', title: 'CELPIP Preparation', short: 'English exam preparation', description: 'Preparation for the CELPIP exam, with practice across all test components.', icon: BookOpen, tone: 'blue', image: 'https://images.pexels.com/photos/261956/pexels-photo-261956.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { slug: 'languagecert', title: 'LanguageCert Preparation', short: 'English exam preparation', description: 'Focused preparation for LanguageCert English language qualifications.', icon: GraduationCap, tone: 'red', image: 'https://images.pexels.com/photos/6503100/pexels-photo-6503100.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { slug: 'spoken-english', title: 'Spoken English', short: 'Practical language skills', description: 'Build practical communication skills and confidence in everyday English.', icon: Mic, tone: 'blue', image: 'https://images.pexels.com/photos/8872474/pexels-photo-8872474.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { slug: 'english-language-skills', title: 'English Language Skills', short: 'Practical language skills', description: 'Develop broader English language skills for work, study and daily life.', icon: Languages, tone: 'red', image: 'https://images.pexels.com/photos/5905961/pexels-photo-5905961.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
];

export const trustItems = [
  { icon: Target, title: 'Expert-focused preparation', text: 'Structured training for internationally recognised exams.' },
  { icon: Clock3, title: 'Flexible learning options', text: 'Classroom and online learning where applicable.' },
  { icon: Globe2, title: 'Online & classroom training', text: 'Choose the format that suits your schedule.' },
  { icon: MapPin, title: 'Dubai-based training center', text: 'Located in Al Barsha, Sheikh Zayed Road.' },
];

export const benefits = [
  { icon: Users, title: 'Learner-focused approach', text: 'Training that starts with your individual goals and needs.' },
  { icon: Target, title: 'Practical training', text: 'Build real skills and confidence, not just theory.' },
  { icon: BookOpen, title: 'Structured preparation', text: 'Clear, organised preparation for your chosen exam.' },
  { icon: Globe2, title: 'Online learning', text: 'Flexible online training options for applicable courses.' },
  { icon: MapPin, title: 'Classroom learning in Dubai', text: 'Learn in person at our Al Barsha training center.' },
  { icon: Headphones, title: 'Personalised support', text: 'Guidance based on your current level and next step.' },
];

export const journeySteps = [
  { num: '01', title: 'Contact Us', text: 'Reach out by phone, WhatsApp or the website enquiry form.' },
  { num: '02', title: 'Share Your Learning Goal', text: 'Tell us about the course or exam you are interested in.' },
  { num: '03', title: 'Speak With Our Team', text: 'Our team guides you through available training options.' },
  { num: '04', title: 'Choose Your Training Option', text: 'Select the appropriate course and learning format.' },
  { num: '05', title: 'Complete Enrolment', text: 'Complete the required registration and enrolment process.' },
  { num: '06', title: 'Start Learning', text: 'Begin your training and work towards your goals.' },
];

export const faqs = [
  { q: 'What courses does Students Everywhere Training Center offer?', a: 'We offer training and preparation for IELTS, PTE, OET, NAATI CCL, CELPIP, LanguageCert, Spoken English and other English language and test preparation needs.' },
  { q: 'Where is Students Everywhere Training Center located?', a: 'Our training center is located at Office 215, Pinnacle Building, Sheikh Zayed Road, Al Barsha, Dubai, UAE.' },
  { q: 'Do you offer classroom training?', a: 'Yes. Classroom training options are available in Dubai for applicable courses. Please contact our team for current course availability.' },
  { q: 'Do you offer online training?', a: 'Online training may be available for applicable courses. Contact our team to discuss the course and learning options currently available.' },
  { q: 'Which English language exams can I prepare for at SETC?', a: 'Depending on course availability, SETC provides preparation and training for exams including IELTS, PTE, OET, NAATI CCL, CELPIP and LanguageCert.' },
  { q: 'Do you offer Spoken English classes?', a: 'Yes, we offer Spoken English and English language skills training for learners who want to improve their communication and practical English skills.' },
  { q: 'How can I enquire about a course?', a: 'You can contact our team by phone, WhatsApp or through the website enquiry form. Our team can provide information about the relevant course and available training options.' },
  { q: 'How do I enrol?', a: 'Contact us with the course or training you are interested in. Our team will guide you through the available options and the enrolment process.' },
  { q: 'How can I contact Students Everywhere Training Center?', a: 'You can call or WhatsApp us on +971 58 589 6200, or contact us through the website enquiry form.' },
  { q: 'Do you guarantee exam scores or results?', a: 'Training and preparation are designed to help learners develop relevant knowledge and skills. Individual results depend on several factors, and SETC does not make guaranteed score or outcome claims unless explicitly stated and contractually supported.' },
  { q: 'Do you offer accommodation for students?', a: 'Accommodation options may be available. Please contact our team directly to discuss current availability and details. Verified information will be provided through our team and published when confirmed.' },
  { q: 'Do you offer immigration or visa services?', a: 'No. Students Everywhere Training Center is a training center focused on English language and examination preparation. We do not provide immigration, visa or study-abroad consultancy services.' },
];

export type NavChild = { label: string; href: string };
export type NavItem = { label: string; href: string; children?: NavChild[] };

export const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  {
    label: 'Brands',
    href: '/englishwise',
    children: [
      { label: 'Students Dubai', href: 'https://www.studentsdubai.com' },
      { label: 'Language Skills Dubai', href: '/language-skills' },
      { label: 'EnglishWise UAE', href: '/englishwise' },
    ],
  },
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'Language Training', href: '/courses/spoken-english' },
      { label: 'Test Preparation', href: '/courses' },
      { label: 'Study Abroad', href: '/global-learning' },
    ],
  },
  { label: 'Courses', href: '/courses' },
  { label: 'Dubai', href: '/dubai' },
  { label: 'Blog', href: '/blog' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
];

export const dubaiHighlights = [
  { icon: Globe2, title: 'Global Hub', text: 'Dubai connects learners from across the world in one dynamic city.' },
  { icon: Compass, title: 'Rich Culture', text: 'A multicultural environment that supports international learning.' },
  { icon: Building2, title: 'Modern Infrastructure', text: 'World-class facilities and a safe, modern urban environment.' },
  { icon: Plane, title: 'Accessible Location', text: 'A well-connected international destination for learners.' },
];

export const dubaiActivities = [
  { icon: Compass, title: 'Explore the City', text: 'Discover Dubai landmarks, cultural sites and modern attractions.' },
  { icon: Users, title: 'Multicultural Community', text: 'Meet learners and professionals from around the world.' },
  { icon: Globe2, title: 'International Environment', text: 'Practice English in a truly global, multilingual setting.' },
];

export const accommodationFeatures = [
  { icon: Building2, title: 'Room Options', text: 'Shared and single room options may be available. Contact us for details.' },
  { icon: MapPin, title: 'Convenient Location', text: 'Accommodation options in accessible areas of Dubai.' },
  { icon: Clock3, title: 'Flexible Stays', text: 'Stay arrangements can be discussed based on your training schedule.' },
];

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  author: string;
  cover: string;
  content: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: 'ielts-preparation-tips',
    title: 'Practical Tips for IELTS Preparation',
    excerpt: 'A few practical approaches to help you structure your IELTS preparation and build confidence before test day.',
    category: 'Exam Preparation',
    date: '2025-01-15',
    author: 'SETC Team',
    cover: 'https://images.pexels.com/photos/8199653/pexels-photo-8199653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    content: [
      'Preparing for the IELTS exam can feel challenging, but a structured approach can make a significant difference. Here are a few practical tips to help you prepare effectively.',
      'First, understand the test format. The IELTS exam includes four sections — listening, reading, writing and speaking. Knowing what to expect in each section helps you focus your preparation on the right areas.',
      'Second, practice regularly. Consistent practice across all four sections helps you build familiarity and confidence. Use practice materials that reflect the actual test format.',
      'Third, focus on your weaker areas. If you find one section more challenging than others, allocate extra time to developing those specific skills.',
      'Finally, consider professional guidance. Working with a training center can provide structure, feedback and targeted preparation that self-study alone may not offer.',
    ],
  },
  {
    slug: 'improving-spoken-english',
    title: 'Building Confidence in Spoken English',
    excerpt: 'Practical strategies for improving your spoken English and building confidence in everyday communication.',
    category: 'Language Skills',
    date: '2025-01-10',
    author: 'SETC Team',
    cover: 'https://images.pexels.com/photos/5538583/pexels-photo-5538583.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    content: [
      'Spoken English is one of the most valuable skills for learners. Whether for work, study or daily life, confident communication opens doors.',
      'One effective approach is regular conversation practice. Finding opportunities to speak English in real situations helps you become more comfortable and fluent over time.',
      'Listening is equally important. Exposing yourself to spoken English through conversations, audio content and real-world interactions helps you absorb natural patterns of speech.',
      'Don\'t be afraid of making mistakes. Every learner makes them — what matters is continuing to practice and improving gradually.',
    ],
  },
];

export const WHATSAPP_NUMBER = '971585896200';
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;
export const PHONE_NUMBER = '+971 58 589 6200';
export const PHONE_LINK = 'tel:+971585896200';
export const ADDRESS_LINES = ['Office 215, Pinnacle Building', 'Sheikh Zayed Road, Al Barsha', 'Dubai, United Arab Emirates'];

export const heroImage = 'https://images.pexels.com/photos/5538583/pexels-photo-5538583.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';
export const aboutImage = 'https://images.pexels.com/photos/8199653/pexels-photo-8199653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';
export const classroomImage = 'https://images.pexels.com/photos/37898351/pexels-photo-37898351.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';
export const dubaiImage = 'https://images.pexels.com/photos/2044434/pexels-photo-2044434.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';
export const accommodationImage = 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';
export const onlineLearningImage = 'https://images.pexels.com/photos/7776433/pexels-photo-7776433.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';

export const languages = [
  { name: 'English', script: 'English', native: 'English', note: 'Primary training language' },
  { name: '中文', script: '中文', native: 'Chinese / Mandarin', note: 'CMS-ready — available when confirmed' },
  { name: 'Français', script: 'Français', native: 'French', note: 'CMS-ready — available when confirmed' },
  { name: 'العربية', script: 'العربية', native: 'Arabic', note: 'CMS-ready — available when confirmed' },
];

export type Brand = {
  name: string;
  tagline: string;
  description: string;
  focus: string[];
  logo: string;
  url?: string;
  internalHref?: string;
};

export const brands: Brand[] = [
  {
    name: 'Students Dubai',
    tagline: 'Languages · Test Preparation · Study Abroad',
    description: 'Supporting learners through language development, examination preparation and international study opportunities.',
    focus: ['Languages', 'Test Preparation', 'Study Abroad'],
    logo: '/assets/images/logos/SETC_(1).png',
    url: 'https://www.studentsdubai.com',
  },
  {
    name: 'Language Skills Dubai',
    tagline: 'Language Training',
    description: 'Focused language training designed to help learners develop practical communication skills.',
    focus: ['Language Training'],
    logo: '/assets/images/brands/Languageskills.png',
    internalHref: '/language-skills',
  },
  {
    name: 'EnglishWise UAE',
    tagline: 'Test Preparation',
    description: 'Focused preparation for English language and relevant professional examinations.',
    focus: ['Test Preparation'],
    logo: '/assets/images/brands/Englishwise_UAE.png',
    url: 'https://www.englishwise.ae/',
  },
];

export const services = [
  { num: '01', title: 'Language Training', text: 'Build stronger language and communication skills for academic, professional and everyday opportunities.' },
  { num: '02', title: 'Test Preparation', text: 'Structured preparation for IELTS, PTE, OET, NAATI CCL, CELPIP, LanguageCert and other relevant examinations.' },
  { num: '03', title: 'Study Abroad', text: 'Guidance and support for students exploring international study opportunities.' },
];

export const whySetc = [
  { num: '01', title: 'Specialised Brand Ecosystem', text: 'Three focused brands under one connected vision — each with clear expertise.' },
  { num: '02', title: 'Dubai-Based, Globally Minded', text: 'A training ecosystem rooted in Dubai, built for international opportunities.' },
  { num: '03', title: 'Multiple Learning Pathways', text: 'Classroom and online learning options across language and exam preparation.' },
  { num: '04', title: 'Focused On Real Opportunities', text: 'Training that supports your next step — wherever it may lead.' },
];

export const dubaiGallery = [
  { url: 'https://images.pexels.com/photos/2044434/pexels-photo-2044434.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Dubai skyline at dusk' },
  { url: 'https://images.pexels.com/photos/28350363/pexels-photo-28350363.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Dubai Marina skyscrapers' },
  { url: 'https://images.pexels.com/photos/36813102/pexels-photo-36813102.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Dubai sunset silhouette with Burj Khalifa' },
  { url: 'https://images.pexels.com/photos/19612571/pexels-photo-19612571.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Modern Dubai skyscrapers close-up' },
  { url: 'https://images.pexels.com/photos/692102/pexels-photo-692102.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Dubai skyline at sunset' },
  { url: 'https://images.pexels.com/photos/7168609/pexels-photo-7168609.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Dubai glass facade towers' },
];

export const accommodationGallery = [
  { url: 'https://images.pexels.com/photos/31728412/pexels-photo-31728412.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Bright modern room' },
  { url: 'https://images.pexels.com/photos/6588579/pexels-photo-6588579.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Modern apartment interior' },
  { url: 'https://images.pexels.com/photos/4115551/pexels-photo-4115551.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Simple bedroom interior' },
];

export const heroImages = {
  main: heroImage,
  dubai: dubaiImage,
  classroom: classroomImage,
  online: onlineLearningImage,
};
