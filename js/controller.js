/* =====================================================================
   CONTROLLER — listens to the user, updates the Model, tells the View.
   ===================================================================== */

const Controller = {

  transitioning: false,
  audioUnlocked: false,

  init() {
    View.init();
    this.bindMenu();
    this.bindKeyboard();
    this.bindAudioUnlock();
    this.bindBgm();
    this.tryAutoPlayBgm();
  },

  /* ---------- Navigation ---------- */
goTo(screen) { 
  if (this.transitioning || screen === Model.state.screen) return; 
  this.transitioning = true; 
  this.play(); 

  View.wipe( 
      () => {                       // mid-wipe: swap screens while covered
        Model.state.screen = screen;
        View.showScreen(screen);
        if (screen === "projects") this.loadProjects();
        if (screen === "skills") this.loadSkills();
      },
      () => { this.transitioning = false; }
    );
  },

  select(index) {
    const n = View.els.menuItems.length;
    const next = (index + n) % n;
    if (next !== Model.state.menuIndex) this.play();
    Model.state.menuIndex = next;
    View.setMenuSelection(next);
  },

  /* ---------- Screen data loading ---------- */
  async loadProjects() {
    View.renderFeatured(Model.featured);
    Model.state.reposLoaded = true;
  },

  loadSkills() {
    if (!Model.state.skillsBuilt) {
      View.renderSkills(Model.skills);
      Model.state.skillsBuilt = true;
    }
    View.animateSkillBars();
  },

  /* ---------- Sound (browsers block audio until first user gesture) ---------- */
  play() {
    if (this.audioUnlocked) View.playSelect();
  },

  toggleBgm() {
    if (Model.state.bgmPlaying) {
      View.pauseBgm();
      Model.state.bgmPlaying = false;
      View.updateBgmUI(false);
    } else {
      const p = View.playBgm();
      if (p && p.then) {
        p.then(() => {
          Model.state.bgmPlaying = true;
          View.updateBgmUI(true);
        }).catch(() => {});
      } else {
        Model.state.bgmPlaying = true;
        View.updateBgmUI(true);
      }
    }
  },

  bindBgm() {
    if (View.els.bgmToggle) {
      View.els.bgmToggle.addEventListener("click", e => {
        e.stopPropagation();
        this.toggleBgm();
      });
    }

    if (View.els.bgmPlayer) {
      View.els.bgmPlayer.addEventListener("play", () => {
        Model.state.bgmPlaying = true;
        View.updateBgmUI(true);
      });
      View.els.bgmPlayer.addEventListener("pause", () => {
        Model.state.bgmPlaying = false;
        View.updateBgmUI(false);
      });
    }
  },

  tryAutoPlayBgm() {
    const p = View.playBgm();
    if (p && p.then) {
      p.then(() => {
        this.audioUnlocked = true;
        Model.state.bgmPlaying = true;
        View.updateBgmUI(true);
      }).catch(() => {
        // Jika diblokir oleh browser autoplay policy, pasang listener interaksi instan pertama
        const startOnGesture = () => {
          this.audioUnlocked = true;
          if (!Model.state.bgmPlaying) {
            const playPromise = View.playBgm();
            if (playPromise && playPromise.then) {
              playPromise.then(() => {
                Model.state.bgmPlaying = true;
                View.updateBgmUI(true);
              }).catch(() => {});
            }
          }
          ["pointerdown", "click", "keydown", "touchstart"].forEach(evt => {
            removeEventListener(evt, startOnGesture, { capture: true });
          });
        };

        ["pointerdown", "click", "keydown", "touchstart"].forEach(evt => {
          addEventListener(evt, startOnGesture, { once: true, capture: true });
        });
      });
    }
  },

  bindAudioUnlock() {
    const unlock = () => {
      this.audioUnlocked = true;
      if (!Model.state.bgmPlaying) {
        const p = View.playBgm();
        if (p && p.then) {
          p.then(() => {
            Model.state.bgmPlaying = true;
            View.updateBgmUI(true);
          }).catch(() => {});
        }
      }
    };

    ["pointerdown", "click", "keydown", "touchstart"].forEach(evt => {
      addEventListener(evt, unlock, { once: true, capture: true });
    });
  },
  /* ---------- Input bindings ---------- */
  bindMenu() {
    View.els.menuItems.forEach((item, i) => {
      item.addEventListener("mouseenter", () => this.select(i));
      item.addEventListener("click", () => this.goTo(item.dataset.target));
    });

    document.querySelectorAll("[data-back]").forEach(b =>
      b.addEventListener("click", () => this.goTo("home")));

    // Clicking the name always takes you home
    document.getElementById("big-name").addEventListener("click", () => {
      if (Model.state.screen !== "home") this.goTo("home");
      else this.play();
    });
  },

  bindKeyboard() {
    addEventListener("keydown", e => {
      if (Model.state.screen === "home") {
        if (e.key === "ArrowDown") { this.select(Model.state.menuIndex + 1); e.preventDefault(); }
        else if (e.key === "ArrowUp") { this.select(Model.state.menuIndex - 1); e.preventDefault(); }
        else if (e.key === "Enter") {
          this.goTo(View.els.menuItems[Model.state.menuIndex].dataset.target);
        }
      } else if (e.key === "Escape") {
        this.goTo("home");
      }
      if (e.key === "m" || e.key === "M") {
        this.toggleBgm();
      }
    });
  },
};

Controller.init();
