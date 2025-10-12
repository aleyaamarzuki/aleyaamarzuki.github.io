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
  },{id: "nav-cv",
          title: "cv",
          description: "See highlights from my CV here. Otherwise, view the full version by selecting the PDF button.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "Stuff I&#39;ve done that I think is pretty neat.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-i-have-won-a-king-s-prize-fellowship-to-advance-my-research-into-the-impact-of-socioeconomic-stressors-on-mental-health-and-cognitive-functioning",
          title: 'I have won a King’s Prize Fellowship to advance my research into the...',
          description: "",
          section: "News",},{id: "news-i-have-a-new-pre-print-out-where-we-show-that-fluctuations-in-confidence-drive-ocd-symptoms",
          title: 'I have a new pre-print out where we show that fluctuations in confidence...',
          description: "",
          section: "News",},{id: "projects-daily-fluctuations-in-ocd-symptoms-and-metacognition",
          title: 'Daily fluctuations in OCD symptoms and metacognition',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-brain-ageing-cognition-and-socioeconomic-status",
          title: 'Brain ageing, cognition, and socioeconomic status',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-eegmanylabs",
          title: 'EEGManyLabs',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-how-adolescent-ocd-impacts-learning-and-decision-making",
          title: 'How adolescent-OCD impacts learning and decision-making',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{
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
