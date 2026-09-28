/* Data dan status aplikasi portofolio Muhammad Okta Maulana. */
const Model = {
  state: {
    screen: "home",
    menuIndex: 0,
    reposLoaded: false,
    skillsBuilt: false,
    bgmPlaying: false,
  },

  featured: [
    {
      title: "MAN 2 HULU SUNGAI UTARA",
      tag: "Website Sekolah",
      color: "#ff2f3d",
      live: true,
      url: "https://man2hsu.my.id",
      cta: "Kunjungi website →",
      img: "assets/projects/man2hsu.svg",
      desc: "Pusat informasi digital madrasah yang menyajikan profil dan informasi sekolah dalam satu website yang mudah diakses.",
    },
    {
      title: "PROJECT BUCIN",
      tag: "Web Interaktif",
      color: "#ff4d79",
      live: true,
      url: "https://oktamaulana01.github.io/project-bucin/",
      cta: "Mainkan →",
      img: "assets/projects/project-bucin.svg",
      desc: "Aplikasi web interaktif bertema bucin yang playful dengan animasi GIF, tombol responsif, dan interaksi seru.",
    },
    {
      title: "VELVET TASK",
      tag: "To-Do Tracker",
      color: "#0055ff",
      live: true,
      url: "https://oktamaulana01.github.io/velvet-task/",
      cta: "Buka aplikasi →",
      img: "assets/projects/velvet-task.svg",
      desc: "Aplikasi to-do tracker interaktif bertema Persona 5 & Velvet Room dengan streak counter, sound effects (SFX), dan sistem kontrak.",
    },
  ],

  langColors: {
    PHP: "#777bb4",
    HTML: "#e34c26",
    MySQL: "#00758f",
  },

  skills: [
    {
      group: "PEMROGRAMAN & WEB",
      items: [
        ["PHP", 88],
        ["PYTHON", 86],
        ["JAVA", 82],
        ["HTML", 90],
      ],
    },
    {
      group: "AI & VIBE CODING",
      items: [
        ["CHAT GPT", 90],
        ["GEMINI", 88],
        ["CLAUDE", 85],
        ["MUSE AI", 82],
      ],
    },
    {
      group: "KEAHLIAN & REKAYASA",
      items: [
        ["EKSPLORASI PERANGKAT KERAS", 85],
        ["ANALISIS SISTEM", 84],
        ["PEMECAHAN MASALAH", 88],
      ],
    },
    {
      group: "SPOKEN LANGUAGES",
      items: [
        ["BAHASA INDONESIA", 100],
        ["BAHASA INGGRIS", 40],
      ],
    },
  ],
};
