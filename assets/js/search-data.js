// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "news-i-joined-the-human-and-robot-interaction-lab-at-the-university-of-tehran-supervised-by-dr-mehdi-tale-masouleh-to-work-on-learning-based-sound-source-localization",
          title: 'I joined the Human and Robot Interaction Lab at the University of Tehran,...',
          description: "",
          section: "News",},{id: "news-our-paper-sound-source-localization-in-a-3d-multi-surface-environment-using-learning-based-methods-was-accepted-to-icrom-2024",
          title: 'Our paper, Sound Source Localization in a 3D Multi-Surface Environment Using Learning-Based Methods,...',
          description: "",
          section: "News",},{id: "news-i-joined-the-llm-lab-at-the-tehran-institute-for-advanced-studies-to-develop-a-benchmark-for-social-intelligence-in-language-models-supervised-by-dr-mohammad-taher-pilehvar-and-dr-yadollah-yaghoobzadeh",
          title: 'I joined the LLM Lab at the Tehran Institute for Advanced Studies to...',
          description: "",
          section: "News",},{id: "news-i-joined-the-nlp-lab-at-epfl-as-a-research-intern-through-summer-epfl-supervised-by-prof-antoine-bosselut-to-study-reasoning-and-distillation-in-language-models",
          title: 'I joined the NLP Lab at EPFL as a research intern through Summer@EPFL,...',
          description: "",
          section: "News",},{id: "news-our-paper-perso-investigating-facets-of-llms-social-intelligence-in-real-world-persuasion-scenarios-is-now-available-on-arxiv-ali-zamani-and-i-contributed-equally",
          title: 'Our paper PerSo: Investigating Facets of LLMs’ Social Intelligence in Real-World Persuasion Scenarios...',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%53%6F%72%6F%75%73%68.%45%73%66%61%68%61%6E%69%61%6E%38%33@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/Soroushesfn", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/Soroushesfn", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=7mLi8ZcAAAAJ", "_blank");
        },
      },{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/Esfahanian_Soroush_CV.pdf", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
