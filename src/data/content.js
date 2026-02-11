export const profile = {
  name: "Asish Ghosh",
  title: "Software Developer",
  phone: "+91 7384384861",
  email: "asish.malda1tbss@gmail.com",
  location: "India",
  github: "asishghos",
  links: [
    { label: "LinkedIn", href: "https://linkedin.com/in/asish-ghosh" },
    { label: "GitHub", href: "https://github.com/asishghos" },
    { label: "CodeChef", href: "https://www.codechef.com/users/asish001" },
    { label: "Codeforces", href: "https://codeforces.com/profile/asishghosh" },
    { label: "LeetCode", href: "https://leetcode.com/u/asishghosh/" },
    { label: "AtCoder", href: "https://atcoder.jp/users/asishghosh" },
    { label: "Codolio", href: "https://codolio.com/profile/SuhZrEbkhdy" },
  ],
};

export const githubActivity = {
  summary:
    "Actively solving data-structure problems, contributing to side projects, and building full‑stack apps with React, Node.js, and Flutter.",
  highlights: [
    "700+ problems solved across coding platforms including Codeforces and CodeChef.",
    "Regularly contributing to personal projects like URL shortener and contest‑tracking apps.",
    "Exploring backend performance patterns with Redis caching, Kafka, and MongoDB.",
  ],
};

export const education = [
  {
    school: "National Institute of Technology",
    degree: "Bachelor of Technology · Electrical Engineering",
    location: "Durgapur, India",
    period: "November 2022 – Present",
  },
  {
    school: "Mathurapur B.S.S. High School",
    degree: "(10+2) WBCSE Boards",
    location: "Malda, India",
    period: "May 2019 – March 2021",
  },
];

export const experiences = [
  {
    role: "Software Developer Intern",
    company: "AmplifyWorks",
    location: "Kolkata, India",
    period: "May 2025 – July 2025",
    bullets: [
      "Built a complete Flutter mobile application from scratch featuring AI outfit suggestions, event-based styling, fashion magazines, and image generation tied to calendar-linked occasions.",
      "Developed and integrated Node.js + Express.js backend with HuggingFace models to power features like body shape and skin undertone detection, product scraping from fashion platforms, image handling, and consistent JSON APIs for the frontend.",
      "Successfully tested and validated the app with feedback from 20+ users, improving performance, accuracy, and user experience.",
      "Tech stack: Flutter, Node.js, Express.js, Python, HuggingFace, Selenium, ChromeDriver.",
    ],
  },
];

export const achievements = [
  'Winner - Smart India Hackathon 2024; our team was among the top 5 finalists from 492,960 students for the problem "Paperless Scholarship Disbursement System for PMSSS".',
  "Achieved Pupil (1250+) on Codeforces and 3 stars (1600+) on CodeChef.",
  "Secured a Global Rank 97 out of 19,000+ participants in Starters 113 Division 4 by CodeChef.",
  "Solved 700+ problems across various coding platforms.",
];

export const projects = [
  {
    name: "Student Placement Predictor",
    stack: "Python, scikit-learn, Pandas, NumPy, Matplotlib, Seaborn",
    period: "Jul 2025",
    description:
      "Machine learning project predicting student placement outcomes using end-to-end data science workflow and high-accuracy classification models.",
    details: [
      "Performed EDA, data cleaning, feature engineering, and model comparison.",
      "Achieved ~99.9% accuracy using Random Forest classifier.",
      "Visualized insights using heatmaps, boxplots, and feature importance charts.",
      "Demonstrated real-world ML pipeline from raw data to evaluation.",
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/asishghos/Student-Placement",
      },
      { label: "Live Demo", href: "#" },
    ],
  },

  {
    name: "Contestify",
    stack: "Flutter, GetX, Firebase, REST APIs",
    period: "2024 – 2025",
    description:
      "Cross-platform competitive programming companion app with contest tracking, reminders, and CP resources.",
    details: [
      "Achieved ~90% feature parity with web version.",
      "Used GetX for state management and Firestore for secure storage.",
      "Integrated Codeforces, CodeChef, LeetCode, and Clist APIs.",
      "Added calendar-based reminders, profiles, and tech news feed.",
      "Improved engagement by ~15% with clean UI and UX.",
    ],
    links: [
      { label: "GitHub", href: "https://github.com/asishghos/contestify" },
      { label: "Live Demo", href: "https://contest-lake.vercel.app/" },
    ],
  },

  {
    name: "Outfit Stylizer",
    stack: "React, Node.js, Express, AI Image Generation",
    period: "2025",
    description:
      "AI-powered outfit styling app that generates stylized looks (office, party, vacation) from user-uploaded images.",
    details: [
      "Built full-stack app with React frontend and Express backend.",
      "Integrated AI image generation APIs for style transformation.",
      "Implemented image upload, storage, and serving pipeline.",
      "Designed clean responsive UI for quick outfit previews.",
    ],
    links: [
      { label: "GitHub", href: "https://github.com/asishghos/outfit_stylizer" },
      { label: "Live Demo", href: "https://outfit-stylizer.vercel.app" },
    ],
  },

  {
    name: "Pinterest Clone",
    stack: "Flutter, Riverpod, Firebase, GoRouter",
    period: "Jan 2026 – Present",
    description:
      "Pinterest-style cross-platform app featuring image feeds, authentication, and media storage.",
    details: [
      "Single codebase for Android, iOS, Web, Windows, macOS, Linux.",
      "Riverpod-based scalable state management.",
      "Firebase Auth, Firestore, and Storage integration.",
      "Staggered grid layout with optimized image caching.",
      "Secure storage and Google OAuth login.",
    ],
    links: [
      { label: "GitHub", href: "https://github.com/asishghos/pinterest_clone" },
      { label: "Live Demo", href: "#" },
    ],
  },
  {
    name: "URL Shortener with Analytics",
    stack: "Node.js, Express.js, MongoDB, Redis, Kafka",
    period: "February 2025 – March 2025",
    description:
      "Scalable URL shortener service with branded links, expiry management, and real-time analytics.",
    details: [
      "Implemented custom aliases, hot-link caching with Redis, and IP-based rate limiting.",
      "Used Kafka to process click events in real time and feed a decoupled analytics pipeline.",
    ],
    links: [{ label: "GitHub", href: "#" }],
  },
];

export const skills = {
  languages: "C/C++, Advanced SQL, Dart",
  core: "Data Structures and Algorithms, Object-Oriented Programming, Operating System, DBMS",
  frameworks: "MongoDB, Flutter, Node.js, REST APIs, Firebase, AWS EC2",
  tools: "Git, Postman, VS Code, Visual Studio, Sublime Text Editor",
};
