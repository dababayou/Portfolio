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
  semester: '6th Semester',
  gpa: '3.64 / 4.00',
  location: 'Surabaya, East Java, Indonesia',
  email: 'bayunismaranagatama036@gmail.com',
  phone: '+62 888-7083-077',
  linkedin: 'https://linkedin.com/in/bayu-nismara-nagatama-836b77288',
  github: 'https://github.com/dababayou',
  cvPath: `${import.meta.env.BASE_URL}CV_Bayu_Nismara_Nagatama.pdf`,
  bio: {
    en: 'Motivated Informatics Engineering student at ITS Surabaya with hands-on enterprise experience at PT PLN (Persero) and Roundbytes agency. Specializing in Vue.js 3, React, TypeScript, Tailwind CSS, and shadcn-vue, while integrating AI & deep learning capabilities into production web systems.',
    id: 'Mahasiswa Teknik Informatika ITS Surabaya yang berdedikasi dengan pengalaman kerja profesional di PT PLN (Persero) dan agensi Roundbytes. Spesialisasi dalam Vue.js 3, React, TypeScript, Tailwind CSS, dan shadcn-vue, serta berpengalaman mengintegrasikan kecerdasan buatan (AI) ke dalam aplikasi web modern.'
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
    id: 'visulearn',
    title: 'VISULEARN AI',
    subtitle: 'AI-Powered Visual Learning Card System',
    category: 'ai',
    period: '2025',
    role: 'AI Pipeline & System Architect',
    badge: 'Samsung Solve for Tomorrow 2026',
    badgeColor: 'amber',
    summary: {
      en: 'AI pipeline converting teacher speech into structured visual learning card templates tailored for Deaf students in Indonesian SMP/SMA science classes.',
      id: 'Pipeline AI yang mengubah ucapan guru menjadi 5 templat kartu pembelajaran visual terstruktur untuk siswa Tuli di kelas IPA SMP/SMA.'
    },
    details: {
      en: [
        'Designed pipeline with 5 visual card formats: Process, Comparison, Hierarchy, Timeline, and Concept templates.',
        'Integrated OpenAI Whisper STT with an academic-to-plain-language dictionary and teacher verification gate for pedagogical control.',
        'Authored system architecture specification document and competition proposal for Samsung Solve for Tomorrow 2026.'
      ],
      id: [
        'Merancang pipeline dengan 5 format templat kartu visual: Proses, Komparasi, Hierarki, Garis Waktu, dan Konsep.',
        'Mengintegrasikan Whisper STT dengan kamus istilah akademik-ke-bahasa sederhana serta gerbang verifikasi guru.',
        'Menyusun dokumen arsitektur sistem dan proposal kompetisi Samsung Solve for Tomorrow 2026.'
      ]
    },
    tech: ['Whisper STT', 'Python', 'AI Natural Language Pipeline', 'System Architecture']
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
    id: 'soegijapranata-choir',
    title: 'Gold Medal (x3) & 1st Place (Folklore Category)',
    issuer: '3rd Soegijapranata International Choir Competition',
    date: 'Nov 2024',
    award: 'International Champion',
    category: 'international',
    description: {
      en: 'Competed with ITS Choir Ensemble across Folklore, Sacred, and Mixed Voice categories, achieving 3 Gold Medals and 1st Place overall in Folklore.',
      id: 'Berkompetisi bersama tim Paduan Suara Mahasiswa ITS di 3 kategori (Folklore, Sacred, Mixed Voice), mengandalkan 3 Gold Medal dan Juara 1 Kategori Folklore.'
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
  },
  {
    id: 'bebras-logic',
    title: '2nd Place Regional — Computational Thinking',
    issuer: 'Bebras International Competition (Ubaya Region)',
    date: 'Nov 2021',
    award: '2nd Place Regional',
    category: 'competition',
    description: {
      en: 'Achieved 2nd place in regional computational thinking and algorithmic problem solving competition.',
      id: 'Meraih Juara 2 regional dalam kompetisi berpikir komputasional dan pemecahan masalah algoritmik Bebras.'
    },
    iconName: 'Sparkles'
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
    title: { en: 'Languages & Backend', id: 'Bahasa & Backend' },
    skills: [
      { name: 'Python', level: 'Advanced', icon: '🐍' },
      { name: 'JavaScript (ES6+)', level: 'Advanced', icon: '💛' },
      { name: 'Laravel 12 / PHP', level: 'Intermediate', icon: '🔴' },
      { name: 'SQL & Database Systems', level: 'Intermediate', icon: '🗄️' },
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

export const ORGANIZATIONAL_EXPERIENCE = [
  {
    role: 'Staff — Departemen Rumah Tangga',
    organization: 'UKM PSM ITS (Student Choir ITS)',
    period: 'Mar 2025 – Feb 2026',
    description: {
      en: 'Handled organizational welfare and served as PIC for official organization jacket procurement end-to-end.',
      id: 'Mengelola kesejahteraan anggota serta menjadi PIC pengadaan jaket resmi organisasi dari konseptual hingga distribusi.'
    }
  },
  {
    role: 'Head of Operational Division',
    organization: 'Organizing Committee, UKM PSM ITS',
    period: 'Jul 2024 – Jul 2025',
    description: {
      en: 'Led the Operational Division for a year-long new member cadre program (kaderisasi), coordinating venue, logistics, and multi-division alignment.',
      id: 'Ketua Divisi Operasional program kaderisasi anggota baru selama 1 tahun, mengordinasikan logistik, lokasi, dan kolaborasi antar-divisi.'
    }
  },
  {
    role: 'Head of Regular Group',
    organization: 'Dewan Ambalan (Scout Leadership), Frateran High School',
    period: 'Aug 2020 – Jun 2023',
    description: {
      en: 'Led scout activities, leadership development workshops, and outdoor programs across 3 years.',
      id: 'Memimpin kelompok pramuka, lokakarya kepemimpinan, dan kegiatan outdoor selama 3 tahun.'
    }
  }
];
