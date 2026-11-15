const fs = require('fs');
const path = './public/data/portfolio-data.json';
const data = JSON.parse(fs.readFileSync(path, 'utf8'));

// 1. Meta & Nav
data.nav.status = { en: 'AVAILABLE', id_lang: 'TERSEDIA' };
data.nav.resumeButtonText = { en: 'Download CV', id_lang: 'Unduh CV' };

// 2. Hero
data.hero.greeting = { en: "Hi, I'm", id_lang: 'Halo, saya' };
data.hero.badge = { en: 'AVAILABLE FOR NEW OPPORTUNITIES', id_lang: 'SIAP MENGHADAPI TANTANGAN BARU' };
data.hero.ctaProjects = { en: 'View Projects', id_lang: 'Lihat Proyek' };
data.hero.ctaResume = { en: 'Download CV', id_lang: 'Unduh CV' };

// 3. Profile
data.profile.degreeBadge = { en: 'B.Des VCD', id_lang: 'S1 DKV' };

// 4. Stats
data.stats[0].value = { en: '6+', id_lang: '6+' };
data.stats[1].value = { en: '100M+', id_lang: '100Jt+' };
data.stats[2].value = { en: '3', id_lang: '3' };
data.stats[3].value = { en: '100%', id_lang: '100%' };

// 5. Experience
data.experience = [
  {
    role: {
      en: 'English Language Training Participant (CPMI)',
      id_lang: 'Pelatihan Bahasa Inggris bagi Calon Pekerja Migran Indonesia (CPMI)'
    },
    period: {
      en: '26 Oct 2026 - 14 Nov 2026',
      id_lang: '26 Okt 2026 - 14 Nov 2026'
    },
    type: {
      en: 'Language Training',
      id_lang: 'Pelatihan Bahasa'
    },
    company: 'Universitas Binawan',
    location: 'Bogor / Jakarta',
    highlights: {
      en: [
        'Officially certified in completing the English Language Training Program for Prospective Indonesian Migrant Workers (CPMI) organized by Universitas Binawan.',
        'Learned fundamental workplace vocabulary and daily conversational expressions for professional international environments.',
        'Engaged in extensive speaking practice and self-introductions in English with confidence.',
        'Developed verbal communication skills and applied accurate English grammatical structures.',
        'Trained in spoken fluency, listening comprehension, and foundational reading in workplace English.'
      ],
      id_lang: [
        'Tersertifikasi resmi menyelesaikan Pelatihan Bahasa Inggris bagi Calon Pekerja Migran Indonesia (CPMI) yang diselenggarakan oleh Universitas Binawan.',
        'Mempelajari kosakata dasar dan ungkapan sehari-hari untuk komunikasi di lingkungan kerja profesional.',
        'Mendapatkan banyak kesempatan untuk melatih kemampuan berbicara dan memperkenalkan diri (self-introduction) dalam bahasa Inggris dengan percaya diri.',
        'Mengembangkan kemampuan komunikasi verbal dan menerapkan struktur tata bahasa (grammar) dalam bahasa Inggris yang tepat.',
        'Melatih kelancaran berbicara (fluency), pemahaman mendengarkan (listening), dan pemahaman dalam membaca (reading) dasar bahasa Inggris.'
      ]
    }
  },
  {
    role: {
      en: '3G GMAW Plate Welder',
      id_lang: 'Welder Plat 3G GMAW'
    },
    period: {
      en: '05 Oct - 14 Nov 2026',
      id_lang: '05 Okt - 14 Nov 2026'
    },
    type: {
      en: 'Vocational Training',
      id_lang: 'Pelatihan Kerja'
    },
    company: 'BP3MI DKI Jakarta',
    location: 'Jakarta Timur',
    highlights: {
      en: [
        'Mastered Gas Metal Arc Welding (GMAW / MIG-MAG) techniques adhering to American Welding Society (AWS) standards and official BNSP certification.',
        'Strictly implemented Occupational Safety and Health (K3/OSHA) standards alongside 5R/5S workplace discipline in the fabrication shop.',
        'Mastered 1F, 2F, 3F fillet welds and 1G, 2G, 3G vertical-up groove joints on steel plates using continuous solid wire and shielding gas.',
        'Skilled in voltage tuning, wire feed speed calibration, shielding gas flow rate regulation, and plate distortion prevention.',
        'Competent in reading engineering blueprints, performing visual defect inspection, and executing repairs according to Welding Procedure Specifications (WPS).'
      ],
      id_lang: [
        'Mendalami dan menguasai teknik pengelasan Gas Metal Arc Welding (GMAW / MIG-MAG) sesuai pedoman American Welding Society (AWS) dan sertifikasi resmi BNSP.',
        'Menerapkan standar Keselamatan dan Kesehatan Kerja (K3) serta budaya 5R/5S secara ketat di bengkel fabrikasi pengelasan.',
        'Menguasai teknik pengelasan plat posisi 1F, 2F, 3F sambungan fillet dan kampuh groove 1G, 2G, 3G (posisi vertikal naik) menggunakan elektroda kawat kontinu dan gas pelindung.',
        'Terampil dalam penyetelan voltase las, kalibrasi kecepatan pengumpanan kawat (wire feed speed), regulasi flow rate gas pelindung, serta pencegahan distorsi plat.',
        'Mampu membaca gambar teknik, mengidentifikasi cacat las secara visual (visual inspection), serta melakukan perbaikan sesuai Welding Procedure Specification (WPS).'
      ]
    }
  },
  {
    role: {
      en: 'Quality Control (QC) Inspector',
      id_lang: 'Quality Control (QC)'
    },
    period: {
      en: '06 Jul - 03 Oct 2026',
      id_lang: '06 Juli - 03 Okt 2026'
    },
    type: {
      en: 'Industrial Internship',
      id_lang: 'Magang Industri'
    },
    company: 'PT Futaba Industrial Indonesia',
    location: 'Cikarang Barat, Bekasi',
    highlights: {
      en: [
        'Implemented 5R/5S methodology across plant production floors to maintain a safe, clean, and organized manufacturing environment.',
        'Committed to rigorous Occupational Safety and Health (K3) procedures throughout daily operational shifts.',
        'Conducted Quality Control (QC) inspections on automotive exhaust components to ensure zero-defect standards and minimize Not Good (NG) rates.',
        'Proficient in precision measurement instruments including Go/No-Go gauges, steel feeler gauges, and vernier calipers.',
        'Skilled in technical drawing interpretation and visual inspection of welding defects on automotive exhaust assemblies.'
      ],
      id_lang: [
        'Menerapkan budaya 5R/5S di lingkungan pabrik selama melaksanakan pekerjaan guna menciptakan area kerja aman, bersih, dan rapih.',
        'Memahami dan berkomitmen untuk menerapkan prosedur Keselamatan dan Kesehatan Kerja (K3) dalam pekerjaan.',
        'Melakukan Quality Control (QC) terhadap hasil produksi untuk memastikan produksi memenuhi standar dan meminimalkan terjadinya produksi Not Good (NG).',
        'Terampil dalam penggunaan berbagai alat ukur teknik dengan menggunakan Go/No-Go Gauge, pengukur celah baja (Feeler Gauge), dan jangka sorong (Caliper).',
        'Mampu membaca dan memahami gambar kerja (Drawing) dan mengidentifikasi cacat hasil pengelasan pada knalpot secara visual.'
      ]
    }
  },
  {
    role: {
      en: '3G SMAW Plate Welder',
      id_lang: 'Welder Plat 3G SMAW'
    },
    period: {
      en: '06 Apr 2026 - 19 Jun 2026',
      id_lang: '06 April 2026 - 19 Juni 2026'
    },
    type: {
      en: 'Vocational Training',
      id_lang: 'Pelatihan Kerja'
    },
    company: 'PPKD Jakarta Timur',
    location: 'Jakarta Timur',
    highlights: {
      en: [
        'Studied theoretical and practical welding standards under American Welding Society (AWS) guidelines to ensure high-integrity weld joints.',
        'Strictly adhered to K3 safety protocols and maintained 5R organization across metal fabrication workstations.',
        'Mastered 1F, 2F, 3F fillet welds and 1G, 2G, 3G vertical-up groove welds on plates using Shielded Metal Arc Welding (SMAW).',
        'Proficient in thermal cutting machinery including oxy-fuel cutting torches (oxygen-acetylene) and handheld angle grinders.',
        'Skilled in technical drawing interpretation, visual inspection of surface defects, and corrective repair adhering to WPS standards.'
      ],
      id_lang: [
        'Mempelajari materi soft skill tentang pengelasan sesuai standar American Welding Society (AWS) untuk memastikan hasil las berkualitas tinggi.',
        'Memahami dan berkomitmen untuk menerapkan prosedur Keselamatan dan Kesehatan Kerja (K3) dalam pekerjaan pengelasan serta menerapkan kerja 5R di area kerja.',
        'Menguasai teknik pengelasan posisi plat 1F, 2F, 3F sambungan fillet (plate to plate) dan sambungan kampuh (groove joint) 1G, 2G, 3G menggunakan metode Shielded Metal Arc Welding (SMAW).',
        'Terampil dalam penggunaan berbagai alat pemotongan dengan mesin potong blender, mesin potong oxy-fuel (Oksigen dan Asetilen), dan mesin gerinda tangan.',
        'Mampu membaca gambar teknik, mengidentifikasi cacat secara visual dan melakukan perbaikan sesuai Welding Procedure Specification (WPS).'
      ]
    }
  },
  {
    role: {
      en: 'Store Leader & Branch Manager',
      id_lang: 'Leader Store'
    },
    period: {
      en: '20 Jan 2025 - 20 Jul 2025',
      id_lang: '20 Januari 2025 - 20 Juli 2025'
    },
    type: {
      en: 'Full-time',
      id_lang: 'Purna Waktu'
    },
    company: 'Pstore Tarakan',
    location: 'Tarakan, Kalimantan Utara',
    highlights: {
      en: [
        'Assigned to launch and build the new Pstore branch from ground zero in Tarakan, leveraging national brand presence.',
        'Fully responsible for daily retail branch operations, achieving peak daily sales revenue targets up to IDR 100,000,000.',
        'Developed local promotional and marketing strategies in partnership with local media and regional influencers to maximize foot traffic and sales.',
        'Fostered strong stakeholder relationships with local communities, government institutions, and commercial partners.',
        'Managed official Instagram and TikTok accounts actively, driving community engagement, brand awareness, and conversions through creative content.'
      ],
      id_lang: [
        'Ditugaskan membuka dan membangun cabang Pstore dari nol di Tarakan, Kalimantan Utara, dengan memanfaatkan kekuatan brand nasional yang sudah dikenal luas.',
        'Bertanggung jawab penuh atas pengelolaan operasional harian cabang, termasuk pencapaian target penjualan harian hingga Rp100.000.000.',
        'Mengembangkan strategi promosi dan pemasaran dengan menggandeng media lokal dan selebritas daerah untuk meningkatkan eksposur dan penjualan.',
        'Membangun serta menjaga hubungan baik dengan berbagai kalangan, termasuk komunitas lokal, instansi pemerintah, dan pelaku bisnis.',
        'Mengelola akun media sosial (Instagram dan TikTok) secara aktif untuk meningkatkan engagement, awareness, dan penjualan melalui konten kreatif dan interaktif.'
      ]
    }
  },
  {
    role: {
      en: 'Culture & People Experience Officer',
      id_lang: 'Pelaksana Culture & People Experience'
    },
    period: {
      en: '17 May 2024 - 23 Aug 2024',
      id_lang: '17 Mei 2024 - 23 Agustus 2024'
    },
    type: {
      en: 'Internship',
      id_lang: 'Magang'
    },
    company: 'PT Kimia Farma Apotek',
    location: 'Jakarta Pusat',
    highlights: {
      en: [
        'Produced viral creative video content on TikTok CeritaPharmacytizen, honing video shooting, editing, and corporate storytelling capabilities.',
        'Designed engaging social media visual assets on Instagram Genbi_KFA using professional graphic design software.',
        'Captured photographic and video documentation of employees in corporate attire across multiple branch locations with optimized lighting and camera setups.',
        'Served as key documentation team member for major corporate events including Pharmacist Training and Kimia Farma Group Mengajar 2024.'
      ],
      id_lang: [
        'Membuat video konten di TikTok CeritaPharmacytizen, mengasah kemampuan dalam produksi video, pengeditan, dan storytelling visual.',
        'Membuat desain grafis di Instagram Genbi_KFA, yang melibatkan pembuatan konten visual yang menarik dengan perangkat lunak desain grafis.',
        'Mengambil foto dan video karyawan dalam seragam kerja Kimia Farma Apotek di berbagai lokasi, memastikan pencahayaan yang tepat dan pengaturan kamera optimal.',
        'Menjadi bagian dari tim dokumentasi dalam acara Pharmacist Training dan Kimia Farma Group Mengajar 2024.'
      ]
    }
  },
  {
    role: {
      en: 'Sales & Marketing Specialist',
      id_lang: 'Sales Marketing'
    },
    period: {
      en: '25 Feb 2022 - 03 Mar 2023',
      id_lang: '25 Februari 2022 - 03 Maret 2023'
    },
    type: {
      en: 'Contract',
      id_lang: 'Kontrak'
    },
    company: 'Pstore Depok',
    location: 'Depok, Jawa Barat',
    highlights: {
      en: [
        'Experienced in organizing and controlling multi-category inventory, ensuring accurate stock tracking, labeling, and secure storage.',
        'Managed daily sales turnover, recorded comprehensive bookkeeping, and maintained financial administration.',
        'Monitored budget allocations and activity expenditures in full compliance with corporate bylaws.',
        'Directly engaged with retail customers to provide product recommendations, enhance communication, and build long-term customer loyalty.',
        'Authored and scheduled promotional content for social media channels, designing visual marketing flyers to boost in-store foot traffic.'
      ],
      id_lang: [
        'Memiliki pengalaman dalam mengorganisir dan mengelola inventaris untuk berbagai proyek, memastikan semua barang tercatat dan disimpan dengan benar.',
        'Mengelola omset penjualan dan bertanggung jawab dalam pencatatan administrasi keuangan dan pengelolaan.',
        'Mengawasi implementasi aturan terkait penggunaan dana kegiatan sesuai dengan Anggaran Dasar/Anggaran Rumah Tangga.',
        'Dalam pemasaran telah memberikan kesempatan untuk berinteraksi dengan pelanggan, mengembangkan keterampilan komunikasi dan membangun hubungan yang kuat.',
        'Menciptakan dan mengelola konten untuk platform media sosial, merancang materi promosi untuk menarik pelanggan dan meningkatkan penjualan.'
      ]
    }
  },
  {
    role: {
      en: 'Field Work Practice (PKL) Intern',
      id_lang: 'Praktek Kerja Lapangan (PKL)'
    },
    period: {
      en: '06 Sep 2021 - 03 Dec 2021',
      id_lang: '06 September 2021 - 03 Desember 2021'
    },
    type: {
      en: 'Internship',
      id_lang: 'Praktek Kerja Lapangan'
    },
    company: 'BKKBN RI - Dithanlan',
    location: 'Jakarta Timur',
    highlights: {
      en: [
        'Produced and edited documentary video content on the official Dithanlan YouTube channel, honing video production and narrative sequencing.',
        'Designed branding-compliant social media graphic posters for Dithanlan channels to increase public health program awareness.',
        'Compiled daily Zoom meeting minutes and structured executive summaries for inter-departmental archiving.',
        'Accompanied official departmental visits to the Depok Mayor office, gaining hands-on protocol communication and time management experience in government.'
      ],
      id_lang: [
        'Membuat video dokumenter di channel YouTube Dithanlan, mengasah kemampuan produksi video, pengeditan, dan storytelling visual.',
        'Membuat desain grafis di media sosial Dithanlan sesuai branding untuk meningkatkan keterlibatan audiens publik.',
        'Membuat rangkuman notulen rapat Zoom harian guna pendokumentasian jelas dan terstruktur.',
        'Mengikuti dinas harian ke Walikota Depok, memberikan pengalaman komunikasi profesional dan pengelolaan waktu di lingkungan pemerintahan.'
      ]
    }
  }
];

// 6. Certificates
data.certificates = [
  {
    id: 'binawan-english-training',
    title: {
      en: 'English Language Training for Prospective Indonesian Migrant Workers (CPMI)',
      id_lang: 'Pelatihan Bahasa Inggris bagi Calon Pekerja Migran Indonesia (CPMI)'
    },
    issuer: 'Universitas Binawan',
    year: '2026',
    location: 'Jakarta',
    category: {
      en: 'Language & Professional Communication',
      id_lang: 'Bahasa & Komunikasi Profesional'
    },
    fileUrl: '/sertifikat/SERTIFIKAT PELATIHAN BAHASA INGGRIS.pdf'
  },
  {
    id: 'bnsp-welder-gmaw',
    title: {
      en: 'Plate Welder : 3G GMAW',
      id_lang: 'Plate Welder : 3G GMAW'
    },
    issuer: 'Badan Nasional Sertifikasi Profesi (BNSP)',
    year: '2026',
    location: 'Jakarta',
    category: {
      en: 'Industrial Welding',
      id_lang: 'Pengelasan Industri'
    },
    fileUrl: '/sertifikat/Sertifikat Welder 3G GMAW.pdf'
  },
  {
    id: 'bp3mi-welder-gmaw',
    title: {
      en: '3G GMAW Welding Vocational Training',
      id_lang: 'Pelatihan Kejuruan Las GMAW 3G'
    },
    issuer: 'BP3MI DKI Jakarta',
    year: '2026',
    location: 'Jakarta',
    category: {
      en: 'Industrial Welding',
      id_lang: 'Pengelasan Industri'
    },
    fileUrl: null
  },
  {
    id: 'bnsp-welder',
    title: {
      en: 'Plate Welder : 3G SMAW',
      id_lang: 'Plate Welder : 3G SMAW'
    },
    issuer: 'Badan Nasional Sertifikasi Profesi (BNSP)',
    year: '2026',
    location: 'Jakarta',
    category: {
      en: 'Industrial Welding',
      id_lang: 'Pengelasan Industri'
    },
    fileUrl: '/sertifikat/Sertifikat Welder 3G SMAW.pdf'
  },
  {
    id: 'ppkd-welder',
    title: {
      en: '3G SMAW Welding Vocational Training',
      id_lang: 'Pelatihan Kejuruan Las SMAW 3G'
    },
    issuer: 'PPKD Jakarta Timur',
    year: '2026',
    location: 'Jakarta',
    category: {
      en: 'Industrial Welding',
      id_lang: 'Pengelasan Industri'
    },
    fileUrl: null
  },
  {
    id: 'bnsp-hr-admin',
    title: {
      en: 'HR Administration Staff',
      id_lang: 'Staff Administrasi SDM'
    },
    issuer: 'Badan Nasional Sertifikasi Profesi (BNSP)',
    year: '2024',
    location: 'Jakarta',
    category: {
      en: 'Human Resources & Administration',
      id_lang: 'Administrasi & SDM'
    },
    fileUrl: null
  },
  {
    id: 'kimia-farma-exp',
    title: {
      en: 'Culture & People Experience Officer',
      id_lang: 'Pelaksana Culture & People Experience'
    },
    issuer: 'PT Kimia Farma Apotek',
    year: '2024',
    location: 'Jakarta',
    category: {
      en: 'Corporate Culture & Media',
      id_lang: 'Budaya Perusahaan & Media'
    },
    fileUrl: null
  },
  {
    id: 'bkkbn-pkl',
    title: {
      en: 'Field Work Practice (PKL) Certification',
      id_lang: 'Praktek Kerja Lapangan (PKL)'
    },
    issuer: 'BKKBN RI - Dithanlan',
    year: '2021',
    location: 'Jakarta',
    category: {
      en: 'Public Communication & Media',
      id_lang: 'Komunikasi Publik & Media'
    },
    fileUrl: null
  },
  {
    id: 'depok-10k-cert',
    title: {
      en: 'Media and Documentation Official',
      id_lang: 'Media & Dokumentasi Resmi'
    },
    issuer: 'Depok 10K Open Marathon',
    year: '2019',
    location: 'Depok',
    category: {
      en: 'Event Media & Documentation',
      id_lang: 'Media & Dokumentasi Event'
    },
    fileUrl: null
  },
  {
    id: 'samahita-expo',
    title: {
      en: 'Media The 3rd Photobook Exhibition & Photography Expo',
      id_lang: 'Media Pameran Foto & Expo Samahita ke-3'
    },
    issuer: 'Samahita Photo Exhibition',
    year: '2018',
    location: 'Jakarta',
    category: {
      en: 'Photography & Arts Exhibition',
      id_lang: 'Pameran Fotografi & Seni'
    },
    fileUrl: null
  }
];

// 7. Organizations
data.organizations = [
  {
    year: '2026',
    role: {
      en: 'Crew Shopkeeper',
      id_lang: 'Crew Shopkeeper (Operasional Toko)'
    },
    event: 'Hyrox Jakarta',
    description: {
      en: 'Managed store merchandise logistics, customer sales assistance, and retail checkout for international fitness racing event Hyrox.',
      id_lang: 'Bertanggung jawab atas manajemen operasional merchandise store, transaksi kasir, serta pelayanan pengunjung pada kejuaraan kebugaran internasional Hyrox Jakarta.'
    }
  },
  {
    year: '2023',
    role: {
      en: 'Floor Operational Crew',
      id_lang: 'Crew Floor (Operasional Acara)'
    },
    event: 'Pesta Semalam Minggu Vol.4',
    description: {
      en: 'Floor management, crowd coordination, safety protocol enforcement, and backstage operational support for prominent music festival.',
      id_lang: 'Manajemen area festival, koordinasi alur penonton, penerapan protokol keamanan, serta dukungan operasional backstage festival musik.'
    }
  },
  {
    year: '2019',
    role: {
      en: 'Media & Documentation Team',
      id_lang: 'Tim Media & Dokumentasi'
    },
    event: 'Depok 10K Run',
    description: {
      en: 'Official event photography coverage, athletic action shots, and rapid social media publication for city marathon.',
      id_lang: 'Peliputan fotografi resmi event lari, dokumentasi aksi pelari, dan publikasi media sosial berkala selama maraton.'
    }
  },
  {
    year: '2018',
    role: {
      en: 'Media Exhibition Team',
      id_lang: 'Tim Media Pameran'
    },
    event: 'Samahita - The 3rd Photobook Exhibition & Photography Expo',
    description: {
      en: 'Curating visual documentation, cataloging photographic works, visitor reception, and press media relations.',
      id_lang: 'Kurasi dokumentasi visual, katalogisasi karya fotografi, penyambutan tamu apresiasi, dan hubungan media pers.'
    }
  }
];

fs.writeFileSync(path, JSON.stringify(data, null, 2), 'utf8');
console.log('Successfully updated portfolio-data.json with complete bilingual datasets!');
