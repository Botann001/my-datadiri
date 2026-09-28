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
  ],

  langColors: {
    PHP: "#777bb4",
    HTML: "#e34c26",
    MySQL: "#00758f",
  },

  skills: [
    {
      group: "Pemrograman & Web",
      items: [
        ["PHP", 88],
        ["Python", 86],
        ["Java", 82],
        ["HTML", 90],
      ],
    },
    {
      group: "Keahlian & Pendekatan",
      items: [
        ["Eksplorasi Perangkat Keras", 85],
        ["Analisis Sistem", 84],
        ["Pemecahan Masalah", 88],
      ],
    },
  ],
};
