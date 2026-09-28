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
      url: "https://github.com/oktamaulana01/project-bucin",
      cta: "Lihat di GitHub →",
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
      group: "Pengembangan Web",
      items: [
        ["PHP Native", 88],
        ["HTML", 90],
        ["MySQL", 84],
      ],
    },
    {
      group: "Pendekatan Kerja",
      items: [
        ["Vibe Coding", 88],
        ["Analisis Sistem", 82],
        ["Pemecahan Masalah", 86],
      ],
    },
  ],
};
