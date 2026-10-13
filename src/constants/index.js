const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
];

const navIcons = [
  {
    id: 1,
    img: "/icons/wifi.svg",
  },
  {
    id: 2,
    img: "/icons/search.svg",
  },
  {
    id: 3,
    img: "/icons/user.svg",
  },
  {
    id: 4,
    img: "/icons/mode.svg",
  },
];

const dockApps = [
  {
    id: "finder",
    name: "Portfolio", // was "Finder"
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Articles", // was "Safari"
    icon: "safari.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact", // or "Get in touch"
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills", // was "Terminal"
    icon: "terminal.png",
    canOpen: true,
  },
  {
    id: "trash",
    name: "Archive", // was "Trash"
    icon: "trash.png",
    canOpen: false,
  },
];

const blogPosts = [
  {
    id: 1,
    title:
      "Web Development: Building responsive and interactive web applications using React, Next.js, and modern frontend technologies.",
    image: "/images/pict1.png",
  },
  {
    id: 2,
    title:
      "Android Development: Developing Android applications with Kotlin, Jetpack Compose, and Firebase.",
    image: "/images/pict2.png",
  },
  {
    id: 3,
    title:
      "Backend Development: Creating REST APIs and backend services using Node.js and Flask.",
    image: "/images/pict3.png",
  },
];

const techStack = [
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "JavaScript", "HTML", "CSS"],
  },
  {
    category: "Mobile",
    items: ["Kotlin", "Jetpack Compose", "Android"],
  },
  {
    category: "Styling",
    items: ["Tailwind CSS", "Bootstrap", "CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "PHP", "Python", "Flask"],
  },
  {
    category: "Database",
    items: ["MongoDB", "MySQL", "Firebase"],
  },
  {
    category: "Dev Tools",
    items: ["Git", "GitHub", "Docker", "Android Studio", "VS Code"],
  },
];

const socials = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#f4656b",
    link: "https://github.com/hafisakbar",
  },
  {
    id: 2,
    text: "Email",
    icon: "/icons/email.svg",
    bg: "#4bcb63",
    link: "mailto:hafis.akbar1459@gmail.com",
  },
  {
    id: 3,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#05b6f6",
    link: "https://www.linkedin.com/in/hafis-akbar-500918202/",
  },
];

const photosLinks = [
  {
    id: 1,
    icon: "/icons/gicon1.svg",
    title: "Library",
  },
  {
    id: 2,
    icon: "/icons/gicon2.svg",
    title: "Memories",
  },
  {
    id: 3,
    icon: "/icons/file.svg",
    title: "Places",
  },
  {
    id: 4,
    icon: "/icons/gicon4.svg",
    title: "People",
  },
  {
    id: 5,
    icon: "/icons/gicon5.svg",
    title: "Favorites",
  },
];

const gallery = [
  {
    id: 1,
    img: "/images/gal1.png",
  },
  {
    id: 2,
    img: "/images/gal2.png",
  },
  {
    id: 3,
    img: "/images/gal3.png",
  },
  {
    id: 4,
    img: "/images/gal4.png",
  },
];

export {
  navLinks,
  navIcons,
  dockApps,
  blogPosts,
  techStack,
  socials,
  photosLinks,
  gallery,
};

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    // ▶ Project 1
    {
      id: 5,
      name: "Android Attendance System - Edukasi Ceria",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-5", // icon position inside Finder
      windowPosition: "top-[10vh] left-5", // optional: Finder window position
      children: [
        {
          id: 1,
          name: "Android Attendance System - Edukasi Ceria.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "Edukasi Ceria Attendance System is a modern Android-based workforce attendance and activity tracking solution tailored for educational institutions and operations.",
            "It streamlines employee check-ins and check-outs using GPS geofencing radius validation, selfie verification, and real-time client visit logging.",
            "Equipped with a comprehensive administrative dashboard for leave/permit validation, automated attendance recaps, and employee record management.",
            "Engineered natively with Kotlin, Jetpack Compose, Firebase, and Clean Architecture (MVVM + Hilt) for a fluid, responsive, and robust user experience.",
          ],
        },
        {
          id: 2,
          name: "Android Attendance System.video",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://youtu.be/x0rhO4l7oZY?si=962Kv8CAtkyaxGXp",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "Android Attendance System.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-60",
          imageUrl: "/images/project-1.png",
        },
      ],
    },

    // ▶ Project 2
    {
      id: 6,
      name: "Seulawah.Co",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-52 right-80",
      windowPosition: "top-[30vh] left-14",
      children: [
        {
          id: 1,
          name: "seulawahCo.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          description: [
            "The Seulawah.Co website is a modern, interactive landing page crafted for a premier beachfront cafe and restaurant in Meulaboh, Aceh Barat.",
            "Beyond a standard cafe site, it offers an engaging digital experience featuring an interactive menu catalog, real-time cart drawer, and seamless WhatsApp order integration.",
            "Think of it like capturing the coastal breeze, specialty coffee culture, and sunset ocean views right from your screen.",
            "Built with React 19, Vite, Tailwind CSS, and Framer Motion, delivering silky-smooth animations, fluid dark mode transitions, and blazing-fast performance.",
          ],
        },
        {
          id: 2,
          name: "SeulawahCo.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://seulawahco.netlify.app/",
          position: "top-20 left-20",
        },
        {
          id: 4,
          name: "SeulawahCo.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 left-80",
          imageUrl: "/images/project-2.png",
        },
        {
          id: 5,
          name: "Design.fig",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://google.com",
          position: "top-60 left-5",
        },
      ],
    },

    // ▶ Project 3
    {
      id: 7,
      name: "Chabot-AI",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-80",
      windowPosition: "top-[50vh] left-16",
      children: [
        {
          id: 1,
          name: "Chabot-AI.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "The BPKD AI Assistant is an intelligent web-based chatbot designed to provide real-time guidance on regional taxes.",
            "Instead of searching through lengthy bureaucratic documents, it delivers instant answers regarding local tax categories, payment procedures, requirements, and current rates.",
            "Think of it like having a dedicated public service tax consultant available 24/7 directly from your browser.",
            "It's built with HTML5, CSS3, and Vanilla JavaScript integrated with the Google Gemini 2.5 Flash API, ensuring fast responses, responsive layout, and an intuitive user experience.",
          ],
        },
        {
          id: 2,
          name: "Chabot-AI.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://chatbotbphtb.netlify.app/",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "Chabot-AI.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/project-3.png",
        },
        {
          id: 5,
          name: "Design.fig",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://google.com",
          position: "top-60 right-20",
        },
      ],
    },
  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-5",
      imageUrl: "/images/hafis.jpeg",
    },
    {
      id: 2,
      name: "casual-me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-28 right-72",
      imageUrl: "/images/hafis-2.jpeg",
    },
    {
      id: 3,
      name: "formal-me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-52 left-80",
      imageUrl: "/images/hafis-3.jpeg",
    },
    {
      id: 4,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-60 left-5",
      subtitle: "Meet the Developer Behind the Code",
      image: "/images/me.png",
      description: [
        "Hey! I’m Hafis 👋, a developer who enjoys turning ideas into web and Android applications that are simple, useful, and enjoyable to use.",
        "I mostly work with React, Next.js, JavaScript, and Kotlin, while also exploring backend development, REST APIs, Firebase, and cloud-based services.",
        "I care about clean interfaces, smooth interactions, and code that stays understandable even when the project starts getting bigger.",
        "Most of my projects start with a simple idea, followed by way too many tabs, a lot of debugging, and eventually something I’m actually proud of 😅",
      ],
    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
      // you can add `href` if you want to open a hosted resume
      // href: "/your/resume/path.pdf",
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "trash1.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-10",
      imageUrl: "/images/trash-1.png",
    },
    {
      id: 2,
      name: "trash2.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-40 left-80",
      imageUrl: "/images/trash-2.png",
    },
  ],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };
