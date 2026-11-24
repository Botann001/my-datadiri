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
      title: "BOWEATHER",
      tag: "Desktop App",
      color: "#00d2ff",
      live: true,
      url: "https://github.com/Botann001/BoWeather",
      cta: "Lihat di GitHub →",
      img: "assets/projects/boweather.svg",
      desc: "Aplikasi desktop interaktif Windows dengan efek cuaca transparan, fisika jendela (window physics), dan simulasi salju volumetrik.",
    },
    {
      title: "PROJECT BUCIN",
      tag: "Web Interaktif",
      color: "#ff4d79",
      live: true,
      url: "https://Botann001.github.io/project-bucin/",
      cta: "Mainkan →",
      img: "assets/projects/project-bucin.svg",
      desc: "Aplikasi web interaktif bertema bucin yang playful dengan animasi GIF, tombol responsif, dan interaksi seru.",
    },
    {
      title: "VELVET TASK",
      tag: "To-Do Tracker",
      color: "#0055ff",
      live: true,
      url: "https://Botann001.github.io/velvet-task/",
      cta: "Buka aplikasi →",
      img: "assets/projects/velvet-task.svg",
      desc: "Aplikasi to-do tracker interaktif bertema Persona 5 & Velvet Room dengan streak counter, sound effects (SFX), dan sistem kontrak.",
    },
    {
      title: "POMODORO PALACE",
      tag: "Focus Timer",
      color: "#ff2f3d",
      live: true,
      url: "https://Botann001.github.io/POMODORO-PALACE/",
      cta: "Mulai fokus →",
      img: "assets/projects/pomodoro-palace.svg",
      desc: "Aplikasi Pomodoro timer bertema Persona 5 dengan mode Focus/Break, day streak counter, dan efek suara interaktif.",
    },
    {
      title: "MUSIKKU",
      tag: "Aplikasi Android",
      color: "#b537f2",
      live: true,
      url: "https://github.com/Botann001/MusikKu",
      cta: "Lihat di GitHub →",
      img: "assets/projects/musikku.svg",
      desc: "Aplikasi pemutar musik Android modern dengan Jetpack Compose, Media3 ExoPlayer, background playback service, dan streaming Jamendo API.",
    },
  ],

  langColors: {
    PHP: "#777bb4",
    HTML: "#e34c26",
    MySQL: "#00758f",
    "C#": "#178600",
    Kotlin: "#a97bff",
    Python: "#3572A5",
    JavaScript: "#f1e05a",
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
