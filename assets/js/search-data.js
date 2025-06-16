// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "Blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-photos",
          title: "Photos",
          description: "Some photos I have taken at work and in my free time!",
          section: "Navigation",
          handler: () => {
            window.location.href = "/photos/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "A growing collection of your cool projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "This is a description of the page. You can modify it in &#39;_pages/cv.md&#39;. You can also change or remove the top pdf download button.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "Materials for courses you taught. Replace this text with your description.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "dropdown-publications",
              title: "publications",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "";
              },
            },{id: "dropdown-projects",
              title: "projects",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "";
              },
            },{id: "dropdown-blog",
              title: "blog",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/blog/";
              },
            },{id: "post-my-tips-on-passing-casi-level-1",
      
        title: "My Tips on Passing CASI Level 1",
      
      description: "Things I noticed while doing my CASI L1 (and L2)",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/My-tips-on-passing-CASI-Level-1/";
        
      },
    },{id: "post-esa-fly-your-sat-test-opportunity-at-belgium",
      
        title: "ESA Fly Your Sat! Test Opportunity at Belgium",
      
      description: "Redu and Libramont &gt; Brussels",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/belgium/";
        
      },
    },{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "projects-3describe",
          title: '3Describe',
          description: "Creating Touchable AR objects using depth camera",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3describe/";
            },},{id: "projects-bluetooth-controlled-n-line-follow-robot",
          title: 'Bluetooth‑Controlled \n Line‑Follow Robot',
          description: "Building an ESP32‑powered line‑following robot that runs FreeRTOS for real‑time motor control and streams telemetry over Bluetooth to a custom Python dashboard.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/line-robotx/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/test1/";
            },},{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/kzhang47", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/", "_blank");
        },
      },{
        id: 'social-instagram',
        title: 'Instagram',
        section: 'Socials',
        handler: () => {
          window.open("https://instagram.com/kvzhxng", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6B%7A%68%61%6E%67%34%37@%73%74%75%64%65%6E%74.%75%62%63.%63%61", "_blank");
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
