/* Portfolio application data and state for Muhammad Okta Maulana. */
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
      cta: "View on GitHub →",
      img: "assets/projects/boweather.svg",
      desc: "Interactive Windows desktop app featuring transparent weather effects, window physics, and volumetric snow simulation.",
    },
    {
      title: "PROJECT BUCIN",
      tag: "Interactive Web",
      color: "#ff4d79",
      live: true,
      url: "https://Botann001.github.io/project-bucin/",
      cta: "Play Now →",
      img: "assets/projects/project-bucin.svg",
      desc: "Playful interactive web app featuring animated GIFs, responsive button mechanics, and engaging interactions.",
    },
    {
      title: "VELVET TASK",
      tag: "To-Do Tracker",
      color: "#0055ff",
      live: true,
      url: "https://Botann001.github.io/velvet-task/",
      cta: "Launch App →",
      img: "assets/projects/velvet-task.svg",
      desc: "Interactive Persona 5 & Velvet Room themed to-do tracker with streak counters, sound effects (SFX), and contract system.",
    },
    {
      title: "POMODORO PALACE",
      tag: "Focus Timer",
      color: "#ff2f3d",
      live: true,
      url: "https://Botann001.github.io/POMODORO-PALACE/",
      cta: "Start Focus →",
      img: "assets/projects/pomodoro-palace.svg",
      desc: "Persona 5 themed Pomodoro timer featuring Focus/Break intervals, daily streak counter, and interactive sound effects.",
    },
    {
      title: "MUSIKKU",
      tag: "Android App",
      color: "#b537f2",
      live: true,
      url: "https://github.com/Botann001/MusikKu",
      cta: "View on GitHub →",
      img: "assets/projects/musikku.svg",
      desc: "Modern Android music player built with Jetpack Compose, Media3 ExoPlayer, background playback service, and Jamendo API streaming.",
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
      group: "PROGRAMMING & WEB",
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
      group: "ENGINEERING & PROBLEM SOLVING",
      items: [
        ["HARDWARE EXPLORATION", 85],
        ["SYSTEMS ANALYSIS", 84],
        ["PROBLEM SOLVING", 88],
      ],
    },
    {
      group: "SPOKEN LANGUAGES",
      items: [
        ["INDONESIAN", 100],
        ["ENGLISH", 40],
      ],
    },
  ],
};
