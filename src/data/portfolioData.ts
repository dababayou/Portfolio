export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'frontend' | 'ai' | 'competition' | 'featured';
  period: string;
  role: string;
  summary: {
    en: string;
    id: string;
  };
  details: {
    en: string[];
    id: string[];
  };
  tech: string[];
  metrics?: string;
  liveUrl?: string;
  badge?: string;
  badgeColor?: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  type: string;
  summary: {
    en: string;
    id: string;
  };
  achievements: {
    en: string[];
    id: string[];
  };
  tech: string[];
  liveUrl?: string;
}

export interface Achievement {
  id: string;
  title: string;
  issuer: string;
  date: string;
  award: string;
  category: 'international' | 'regional' | 'competition';
  description: {
    en: string;
    id: string;
  };
  iconName: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  skills: string[];
  badgeUrl?: string;
}

export const PERSONAL_INFO = {
  name: 'Bayu Nismara Nagatama',
  shortName: 'Bayu Nismara',
  title: {
    en: 'Front-End Web Developer & Informatics Engineering Student',
    id: 'Pengembang Web Front-End & Mahasiswa Teknik Informatika'
  },
  university: 'Institut Teknologi Sepuluh Nopember (ITS) Surabaya',
  degree: 'Bachelor of Informatics Engineering (Teknik Informatika)',
  semester: '7th Semester',
  gpa: '3.68 / 4.00',
  location: 'Surabaya, East Java, Indonesia',
  email: 'bayunismaranagatama036@gmail.com',
  phone: '+62 888-7083-077',
  linkedin: 'https://linkedin.com/in/bayu-nismara-nagatama-836b77288',
  github: 'https://github.com/dababayou',
  cvPath: `${import.meta.env.BASE_URL}CV_Bayu_Nismara_Nagatama.pdf`,
  bio: {
    en: 'Motivated and detail-oriented Informatics Engineering student at ITS Surabaya (7th Semester, GPA 3.68/4.00) specializing in Front-End Web Development. Professional experience at PLN Group (Vue.js 3, TypeScript, Tailwind, LLM Qwen2.5) and Roundbytes agency, alongside AI medical imaging research (YOLO CBCT) and award-winning web innovation (1st Place TIC 9.0, 2nd Runner-Up INOVBOYO 2025).',
    id: 'Mahasiswa Teknik Informatika ITS Surabaya (Semester 7, IPK 3.68/4.00) yang berfokus pada Pengembang Web Front-End. Berpengalaman profesional di PLN Group (Vue.js 3, TypeScript, Tailwind, LLM Qwen2.5) dan agensi Roundbytes, serta aktif dalam riset AI medis (YOLO CBCT) dan kompetisi inovasi web berprestasi (Juara 1 TIC 9.0, Juara Harapan 2 INOVBOYO 2025).'
  }
};

export const EXPERIENCES: Experience[] = [
  {
    id: 'pln-group',
    company: 'PT PLN (Persero) / PLN Group',
    role: 'Front-End Web Developer (Contract)',
    period: 'Oct 2025 – Present',
    location: 'Surabaya, Indonesia',
    type: 'Contract',
    liveUrl: 'https://pln-ai.vercel.app/',
    summary: {
      en: 'Developed the front-end for LegalBot ID (Legal AI Suite), an internal AI-powered legal assistant platform for PT PLN (Persero) comprising a Legal AI Assistant chatbot, Document Analysis Tool for automated contract/regulation review, and Legal Search Engine.',
      id: 'Mengembangkan front-end untuk LegalBot ID (Legal AI Suite), platform asisten hukum AI internal PT PLN (Persero) yang mencakup chatbot Legal AI Assistant, Document Analysis Tool untuk review dokumen/regulasi otomatis, dan Legal Search Engine.'
    },
    achievements: {
      en: [
        'Built user interface for LegalBot ID using Vue.js 3, TypeScript, Tailwind CSS, and shadcn-vue, consuming FastAPI backend integrated with a fine-tuned open-source LLM (Qwen2.5-7B-Instruct) specialized for Indonesian legal Q&A.',
        'Engineered 3 core tools: Legal AI Chatbot for natural language Q&A, Document Analysis Tool for automated clause review, and Legal Search Engine with semantic understanding.',
        'Designed and built responsive landing page and dashboard ensuring cross-browser compatibility and mobile responsiveness.',
        'Collaborated closely with enterprise AI/ML and backend teams, translating API contracts into polished UI with modular component-based architecture.'
      ],
      id: [
        'Membangun antarmuka pengguna LegalBot ID menggunakan Vue.js 3, TypeScript, Tailwind CSS, dan shadcn-vue, mengonsumsi FastAPI backend yang terintegrasi LLM fine-tuned (Qwen2.5-7B-Instruct) untuk tanya jawab hukum Indonesia.',
        'Mengembangkan 3 fitur utama: Chatbot Legal AI untuk tanya jawab bahasa alami, Document Analysis Tool untuk review klausul otomatis, dan Legal Search Engine dengan pemahaman kontekstual.',
        'Merancang dan membangun landing page dan dashboard responsif dengan standar enterprise dan responsivitas seluler.',
        'Bekerja sama erat dengan tim AI/ML & Backend enterprise dalam mengimplementasikan integrasi API ke antarmuka yang intuitif dan modular.'
      ]
    },
    tech: ['Vue.js 3', 'TypeScript', 'Tailwind CSS', 'shadcn-vue', 'Qwen2.5-7B-Instruct', 'FastAPI', 'REST API']
  },
  {
    id: 'roundbytes',
    company: 'Roundbytes Agency',
    role: 'Full-Time Web Developer Intern',
    period: 'Apr 2024 – Aug 2024',
    location: 'Surabaya, Indonesia',
    type: 'Internship',
    summary: {
      en: 'Built responsive client web applications and websites using TypeScript, Tailwind CSS, and WordPress.',
      id: 'Membangun aplikasi web klien dan situs web responsif menggunakan TypeScript, Tailwind CSS, dan WordPress.'
    },
    achievements: {
      en: [
        'Coded high-performance responsive web components with TypeScript and Tailwind CSS for commercial client projects.',
        'Designed and deployed custom WordPress client websites with cross-device compatibility and optimized FCP speed.',
        'Participated in sprint planning, client requirement alignment, and peer code reviews in an agile agency workflow.',
        'Gained hands-on experience in production deployment and web performance optimization.'
      ],
      id: [
        'Mengembangkan komponen web responsif performa tinggi dengan TypeScript dan Tailwind CSS untuk proyek klien komersial.',
        'Merancang dan merilis situs web WordPress kustom dengan kompatibilitas antar-perangkat dan waktu muat cepat.',
        'Terlibat aktif dalam sprint planning, alokasi tugas klien, dan code review dalam tim agensi agile.',
        'Memperoleh pengalaman praktis dalam alur kerja rilis produksi dan optimasi performa web.'
      ]
    },
    tech: ['TypeScript', 'Tailwind CSS', 'WordPress', 'HTML5/CSS3', 'Agile/Scrum']
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'pln-legalbot',
    title: 'LegalBot ID (PLN Legal AI Suite)',
    subtitle: 'Enterprise Legal AI Assistant Platform for PT PLN (Persero)',
    category: 'featured',
    period: 'Oct 2025 – Present',
    role: 'Front-End Web Developer',
    badge: 'PLN Enterprise Web App',
    badgeColor: 'cyan',
    liveUrl: 'https://pln-ai.vercel.app/',
    summary: {
      en: 'Enterprise AI legal platform for PT PLN (Persero) powered by a fine-tuned Qwen2.5-7B-Instruct LLM. Features Legal AI Assistant chatbot, Document Analysis Tool for contract review, and Legal Search Engine.',
      id: 'Platform AI hukum enterprise PT PLN (Persero) berbasis fine-tuned Qwen2.5-7B-Instruct LLM. Dilengkapi chatbot Legal AI, Document Analysis Tool untuk analisis kontrak, dan Legal Search Engine.'
    },
    details: {
      en: [
        'Built front-end architecture using Vue.js 3, TypeScript, Tailwind CSS, and shadcn-vue.',
        'Integrated with FastAPI backend serving fine-tuned Qwen2.5-7B-Instruct LLM tailored for Indonesian legal domain queries.',
        'Developed Legal AI Chatbot, Document Analysis Tool for clause breakdown, and Legal Search Engine with semantic understanding.'
      ],
      id: [
        'Membangun arsitektur antarmuka menggunakan Vue.js 3, TypeScript, Tailwind CSS, dan shadcn-vue.',
        'Terintegrasi dengan FastAPI backend penyaji fine-tuned LLM Qwen2.5-7B-Instruct khusus hukum Indonesia.',
        'Mengembangkan Chatbot Legal AI, Document Analysis Tool untuk pembacaan klausul, dan Legal Search Engine.'
      ]
    },
    tech: ['Vue.js 3', 'TypeScript', 'Tailwind CSS', 'shadcn-vue', 'Qwen2.5-7B', 'FastAPI', 'REST API']
  },
  {
    id: 'skillbridge',
    title: 'SkillBridge',
    subtitle: 'Career Matching & Competency Gap Analyzer',
    category: 'featured',
    period: 'Feb – Jun 2026',
    role: 'Front-End Developer (7-Member Capstone Team)',
    badge: 'Industry Capstone w/ SEVIMA',
    badgeColor: 'cyan',
    metrics: 'Passed 55 backend, 8 frontend, 23 integration tests',
    summary: {
      en: 'AI-powered capstone platform in collaboration with PT Sentra Vidya Utama (SEVIMA) that parses CVs via Claude Sonnet 4.6, analyzes competency gaps against 5 IT standard roles, and serves MCQ skill testing with tailored learning paths.',
      id: 'Platform capstone berbasis AI bekerja sama dengan PT Sentra Vidya Utama (SEVIMA) yang mengesktrak skill CV via Claude Sonnet 4.6, menganalisis gap kompetensi 5 standar peran IT, serta menyajikan tes verifikasi & rekomendasi alur belajar.'
    },
    details: {
      en: [
        'Built the Laravel 12 + Tailwind CSS v4 front-end consuming a centralized FastAPI microservices backend.',
        'Implemented custom session proxy layer (ApiAuth & ApiGuest middleware) bridging Laravel web sessions with JWT FastAPI backend tokens.',
        'Developed interactive Blade views for CV file upload, target role selection, visual competency radar charts, and personalized learning roadmaps.'
      ],
      id: [
        'Membangun front-end Laravel 12 + Tailwind CSS v4 yang mengonsumsi FastAPI microservices backend terpusat.',
        'Mengimplementasikan layer autentikasi proxy kustom (middleware ApiAuth & ApiGuest) yang menghubungkan sesi Laravel dengan token JWT FastAPI.',
        'Mengembangkan tampilan Blade interaktif untuk unggah CV, pemiliham peran target, grafik radar gap kompetensi, dan roadmap alur belajar.'
      ]
    },
    tech: ['Laravel 12', 'Tailwind CSS v4', 'Claude Sonnet 4.6', 'FastAPI', 'JWT Proxy', 'Blade', 'TypeScript']
  },
  {
    id: 'tenuna',
    title: 'TENUNA: The Living Threads',
    subtitle: 'Interactive Editorial Documentary Website',
    category: 'frontend',
    period: '2026',
    role: 'Lead Front-End Architect',
    badge: 'BytesFest 2026 Cultural Winner',
    badgeColor: 'purple',
    liveUrl: 'https://dababayou.github.io/The-Living-Threads/',
    summary: {
      en: 'Editorial web documentary celebrating Sumba Ikat weaving heritage (SDG 11) using React 19, GSAP ScrollTrigger, and 3D WebGL (OGL) circular gallery.',
      id: 'Dokumenter web editorial interaktif seputar warisan tenun Ikat Sumba (SDG 11) menggunakan React 19, GSAP ScrollTrigger, dan galeri circular 3D WebGL (OGL).'
    },
    details: {
      en: [
        'Engineered scroll-driven storytelling with GSAP and ScrollTrigger, sync\'d with an animated SVG "Global Thread" that mutates thickness and color on scroll.',
        'Created a drag-and-flip language switcher powered by Framer Motion and custom bilingual React Context API.',
        'Built a 3D WebGL circular motif viewer (OGL) and Bento Grid layout for philosophical motif exploration with instant First Contentful Paint.'
      ],
      id: [
        'Merancang scroll-driven storytelling dengan GSAP dan ScrollTrigger yang sinkron dengan "Global Thread" SVG animated berkustomisasi warna & ketebalan.',
        'Membuat switcher bahasa drag-and-flip interaktif berbasis Framer Motion dan React Context API bilingual terpusat.',
        'Membangun galeri motif 3D WebGL circular (OGL) dan bento grid interaktif dengan optimasi First Contentful Paint tanpa layout shift.'
      ]
    },
    tech: ['React 19', 'TypeScript', 'Vite 8', 'GSAP ScrollTrigger', 'Framer Motion', 'WebGL (OGL)', 'React Context']
  },
  {
    id: 'pharmacare',
    title: 'PharmaCare+',
    subtitle: 'AI-Powered Medication Adherence Platform',
    category: 'competition',
    period: 'Oct – Dec 2025',
    role: 'Lead Front-End & AI Integration',
    badge: '2nd Runner-Up INOVBOYO 2025',
    badgeColor: 'emerald',
    liveUrl: 'https://pharmacare-gericommunity.lovable.app',
    summary: {
      en: 'AI healthcare web platform assisting elderly patients & caregivers with automated reminders, dangerous drug-interaction detection, and online pharmacy consultation.',
      id: 'Platform kesehatan berbasis AI untuk pasien lansia & pendamping yang menyediakan pengingat otomatis, pendeteksi interaksi obat berbahaya, dan konsultasi apotek.'
    },
    details: {
      en: [
        'Competed in INOVBOYO 2025 regional innovation competition held by BRIDA East Java, winning 2nd Runner-Up (Juara Harapan 2).',
        'Implemented real-time drug interaction screening workflows and responsive alert notifications.',
        'Deployed as a fully working web application accessible at pharmacare-gericommunity.lovable.app.'
      ],
      id: [
        'Meraih Juara Harapan 2 pada kompetisi inovasi regional INOVBOYO 2025 yang diselenggarakan Badan Riset dan Inovasi Daerah (BRIDA) Jawa Timur.',
        'Mengimplementasikan alur kerja penapisan interaksi obat berisiko secara real-time dan notifikasi pengingat lansia.',
        'Di-deploy dan beroperasi secara penuh di pharmacare-gericommunity.lovable.app.'
      ]
    },
    tech: ['React', 'AI Drug Interaction Engine', 'Tailwind CSS', 'Lovable Platform', 'REST API']
  },
  {
    id: 'nutriwise',
    title: 'NutriWise',
    subtitle: 'Interactive Digital Nutrition Assistant Platform',
    category: 'competition',
    period: 'Jul – Aug 2025',
    role: 'Lead & Front-End Developer',
    badge: '1st Place TIC 9.0 National',
    badgeColor: 'emerald',
    liveUrl: 'https://nutriwise-rose.vercel.app/',
    summary: {
      en: 'Interactive digital health platform combining a BMI/caloric/fluid calculator, NCD risk screening quiz, and Myth vs Fact nutrition education module aligned with SDG 3.',
      id: 'Platform kesehatan digital interaktif yang mengombinasikan kalkulator BMI/kalori/cairan, kuis skrining Penyakit Tidak Menular (PTM), dan modul edukasi nutrisi Mitos vs Fakta selaras dengan SDG 3.'
    },
    details: {
      en: [
        'Won 1st Place in Technology Innovative Challenge (TIC) 9.0, a national web development competition organized by HMTI Universitas Jember themed "Push the Impact: Web Innovation for SDGs".',
        'Built presentation layer with React (Vite) and vanilla CSS, featuring personalized healthy-lifestyle recommendation algorithms aligned with SDG 3 (Good Health and Well-Being).',
        'Engineered a hybrid data layer combining browser LocalStorage and Supabase cloud storage synchronized through a deep-merge strategy.'
      ],
      id: [
        'Meraih Juara 1 pada Technology Innovative Challenge (TIC) 9.0, kompetisi pengembangan web tingkat nasional yang diselenggarakan HMTI Universitas Jember.',
        'Membangun antarmuka dengan React (Vite) dan vanilla CSS yang menyajikan rekomendasi gaya hidup sehat terpersonalisasi selaras dengan SDG 3 (Good Health and Well-Being).',
        'Mengimplementasikan layer data hibrid yang mengombinasikan LocalStorage browser dan cloud Supabase dengan strategi pembaruan deep-merge.'
      ]
    },
    tech: ['React', 'Vite', 'Vanilla CSS', 'Supabase', 'LocalStorage', 'REST API', 'SDG 3']
  }
];

export const RESEARCH_THESIS = {
  title: 'Undergraduate Thesis: Dental Alveolar Bone Quality Classification via YOLO-based Semantic Segmentation',
  period: '2025 – Present',
  institution: 'ITS Surabaya (Supervised Research)',
  advisor: 'Department of Informatics Engineering, ITS',
  summary: {
    en: 'Researching deep learning semantic segmentation on dental CBCT (Cone Beam Computed Tomography) images to automatically classify alveolar bone quality based on the Lekholm & Zarb D1–D4 clinical grading system.',
    id: 'Riset deep learning segmentasi semantik pada citra CBCT dental untuk mengklasifikasikan kualitas tulang alveolar secara otomatis berdasarkan sistem grading klinis Lekholm & Zarb D1–D4.'
  },
  highlights: {
    en: [
      'Developed a YOLO-based neural network architecture tailored for small-sample medical CBCT slice segmentation.',
      'Formulated the Cortical-to-Trabecular ratio metric to quantify bone structural density objectively.',
      'Established a full quantitative evaluation pipeline: DSC (Dice Similarity Coefficient), IoU, HD95 (Hausdorff Distance), Accuracy, Precision, Recall, and F1 Score.',
      'Authored full bilingual proposal (Indonesian & English abstract) including literature gap analysis, detailed pseudocode, and Gantt chart.'
    ],
    id: [
      'Mengembangkan arsitektur jaringan saraf berbasis YOLO yang dioptimalkan untuk segmentasi irisan CBCT medis.',
      'Meresmikan metrik rasio Kortikal-ke-Trabekular untuk mengukur densitas struktur tulang secara objektif.',
      'Menyusun kerangka evaluasi kuantitatif lengkap: DSC, IoU, HD95, Akurasi, Presisi, Recall, dan F1 Score.',
      'Menyusun proposal bilingua lengkap (abstrak Indonesia & Inggris), analisis perbandingan literatur, pseudocode, dan Gantt chart.'
    ]
  },
  tech: ['PyTorch', 'YOLO', 'OpenCV', 'Python', 'Medical Image Segmentation', 'CBCT Imaging']
};

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 'tic-9',
    title: '1st Place (Juara 1) — Technology Innovative Challenge 9.0',
    issuer: 'Universitas Jember (HMTI) — National Competition',
    date: 'Aug 2025',
    award: 'National Web Innovation Champion',
    category: 'competition',
    description: {
      en: 'Won 1st Place in national web development competition for NutriWise under the "Good Health and Well-Being" SDG 3 theme.',
      id: 'Meraih Juara 1 dalam kompetisi pengembangan web tingkat nasional untuk platform NutriWise kategori SDG 3 (Good Health and Well-Being).'
    },
    iconName: 'Trophy'
  },
  {
    id: 'inovboyo-2025',
    title: '2nd Runner-Up (Juara Harapan 2)',
    issuer: 'Inovasi Surabaya (INOVBOYO) 2025 — BRIDA Jatim',
    date: 'Dec 2025',
    award: 'Regional Innovation Award',
    category: 'regional',
    description: {
      en: 'Awarded 3rd place overall in the East Java regional innovation competition for PharmaCare+ AI medication platform.',
      id: 'Meraih Juara Harapan 2 dalam kompetisi inovasi daerah Provinsi Jawa Timur untuk platform AI PharmaCare+.'
    },
    iconName: 'Award'
  },
  {
    id: 'ubaya-ilpc',
    title: 'Semifinalist — Programming & Logic Competition',
    issuer: 'Ubaya ILPC 2023',
    date: 'Feb 2023',
    award: 'Semifinalist',
    category: 'competition',
    description: {
      en: 'Reached top semifinal stages in competitive programming and logic reasoning contest at Universitas Surabaya.',
      id: 'Mencapai babak semifinal dalam kompetisi pemrograman kompetitif dan penalaran logika di Universitas Surabaya.'
    },
    iconName: 'Code'
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: 'ibm-agent',
    name: 'Build an AI Agent',
    issuer: 'IBM SkillsBuild',
    skills: ['AI Agents', 'IBM watsonx.ai', 'Agentic AI', 'Generative AI', 'AI Ethics']
  },
  {
    id: 'ibm-hacktiv8',
    name: 'IT — AI Agent for Programming',
    issuer: 'IBM SkillsBuild & Hacktiv8 Indonesia',
    skills: ['AI Coding Tools', 'Agent Workflows', 'Prompt Engineering']
  },
  {
    id: 'aws-security',
    name: 'AWS Academy Cloud Security Foundations',
    issuer: 'Amazon Web Services (AWS)',
    skills: ['AWS Cloud', 'Identity & Access Management', 'Cloud Security']
  },
  {
    id: 'palo-alto',
    name: 'Palo Alto Cybersecurity Foundation',
    issuer: 'Palo Alto Networks',
    skills: ['Network Security', 'Threat Prevention', 'Cyber Hygiene']
  }
];

export const SKILL_CATEGORIES = [
  {
    title: { en: 'Front-End Development', id: 'Pengembangan Front-End' },
    skills: [
      { name: 'Vue.js 3', level: 'Advanced', icon: '⚡' },
      { name: 'React 19', level: 'Advanced', icon: '⚛️' },
      { name: 'TypeScript', level: 'Advanced', icon: '📘' },
      { name: 'Tailwind CSS v4', level: 'Advanced', icon: '🎨' },
      { name: 'shadcn-vue', level: 'Advanced', icon: '💎' },
      { name: 'GSAP & ScrollTrigger', level: 'Intermediate', icon: '✨' },
      { name: 'Framer Motion', level: 'Intermediate', icon: '🎭' },
      { name: 'HTML5 & CSS3', level: 'Expert', icon: '🌐' },
      { name: 'WordPress', level: 'Intermediate', icon: '📝' }
    ]
  },
  {
    title: { en: 'AI & Deep Learning', id: 'Kecerdasan Buatan & ML' },
    skills: [
      { name: 'PyTorch', level: 'Intermediate', icon: '🔥' },
      { name: 'TensorFlow', level: 'Intermediate', icon: '🧠' },
      { name: 'YOLO (Semantic Segmentation)', level: 'Advanced', icon: '👁️' },
      { name: 'Whisper STT', level: 'Intermediate', icon: '🎙️' },
      { name: 'IBM watsonx.ai', level: 'Intermediate', icon: '🤖' },
      { name: 'Hugging Face & Qwen2.5', level: 'Intermediate', icon: '🤗' },
      { name: 'OpenCV & Scikit-Learn', level: 'Intermediate', icon: '📊' }
    ]
  },
  {
    title: { en: 'Backend & Database (BaaS)', id: 'Backend & Basis Data' },
    skills: [
      { name: 'Supabase', level: 'Intermediate', icon: '⚡' },
      { name: 'Python', level: 'Advanced', icon: '🐍' },
      { name: 'JavaScript (ES6+)', level: 'Advanced', icon: '💛' },
      { name: 'Laravel 12 / PHP', level: 'Intermediate', icon: '🔴' },
      { name: 'PostgreSQL / SQL', level: 'Intermediate', icon: '🗄️' },
      { name: 'C++', level: 'Intermediate', icon: '⚙️' }
    ]
  },
  {
    title: { en: 'Tools & Workflows', id: 'Alat & Metodologi' },
    skills: [
      { name: 'Git & GitHub', level: 'Advanced', icon: '🐙' },
      { name: 'VS Code & Jupyter', level: 'Advanced', icon: '💻' },
      { name: 'Agile & Scrum', level: 'Advanced', icon: '🔄' },
      { name: 'REST API & WebSockets', level: 'Advanced', icon: '🔌' },
      { name: 'Linux / Ubuntu', level: 'Intermediate', icon: '🐧' }
    ]
  }
];

export const ORGANIZATIONAL_EXPERIENCE: Array<{
  role: string;
  organization: string;
  period: string;
  description: { en: string; id: string };
}> = [];
