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
  },{id: "nav-projects",
          title: "Projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-blog",
          title: "Blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-talks",
          title: "Talks",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/talks/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-photos",
          title: "Photos",
          description: "Some photos I have taken at work and in my free time!",
          section: "Navigation",
          handler: () => {
            window.location.href = "/photos/";
          },
        },{id: "post-testing-iphone-13-sensors",
      
        title: "Testing iPhone 13 Sensors",
      
      description: "Playing with the IMU and GPS on the iPhone 13",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/iphonesensors/";
        
      },
    },{id: "post-wii-sensor-hacking",
      
        title: "Wii Sensor Hacking",
      
      description: "Trying some crazy things with the Wii remote",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/wii-homebrew/";
        
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
            },},{id: "projects-object-detection-using-esp-cam",
          title: 'Object Detection Using ESP-Cam',
          description: "Sending ESP-32 video to laptop to run YOLO models.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/espcam/";
            },},{id: "projects-esp-32-line-follower",
          title: 'ESP-32 Line Follower',
          description: "Line following robot + FreeRTOS + Bluetooth",
          section: "Projects",handler: () => {
              window.location.href = "/projects/line-robotx/";
            },},{id: "projects-plasrov",
          title: 'PlasRov',
          description: "Using computer vision and near-infrared spectroscopy to detect microplastics.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/plasrov/";
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
