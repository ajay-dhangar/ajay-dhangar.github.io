export interface SocialLink {
  name: string;
  handle: string;
  url: string;
  category: 'Professional'
  | 'Social'
  | 'Competitive Programming'
  | 'Open Source'
  | 'Learning'
  | 'Content & Media'
  | 'Developer Community'
  | 'Portfolio'
  | 'Productivity'
  | 'Finance & Support'
  | 'Gaming'
  | 'Sustainability'
  | 'Analytics'
  | 'Other';
  iconName: string;
}

export const SOCIAL_LINKS: SocialLink[] = [
  // ─── Professional ───────────────────────────────
  {
    name: "GitHub",
    handle: "@ajay-dhangar",
    url: "https://github.com/ajay-dhangar",
    category: "Professional",
    iconName: "Github",
  },
  {
    name: "LinkedIn",
    handle: "ajay-dhangar",
    url: "https://www.linkedin.com/in/ajay-dhangar/",
    category: "Professional",
    iconName: "Linkedin",
  },
  {
    name: "Topmate",
    handle: "ajay_dhangar",
    url: "https://topmate.io/ajay_dhangar",
    category: "Professional",
    iconName: "Handshake",
  },

  // ─── Competitive Programming ───────────────────
  {
    name: "LeetCode",
    handle: "ajaydhangar49",
    url: "https://leetcode.com/u/ajaydhangar49/",
    category: "Competitive Programming",
    iconName: "Code",
  },
  {
    name: "CodeWars",
    handle: "ajay-dhangar",
    url: "https://www.codewars.com/users/ajay-dhangar",
    category: "Competitive Programming",
    iconName: "Swords",
  },
  {
    name: "GeeksforGeeks",
    handle: "ajaydhangar49",
    url: "https://www.geeksforgeeks.org/profile/ajaydhangar49",
    category: "Competitive Programming",
    iconName: "GraduationCap",
  },
  {
    name: "Exercism",
    handle: "ajay-dhangar",
    url: "https://exercism.org/profiles/ajay-dhangar",
    category: "Competitive Programming",
    iconName: "Terminal",
  },
  {
    name: "Frontend Mentor",
    handle: "ajay-dhangar",
    url: "https://www.frontendmentor.io/profile/ajay-dhangar",
    category: "Competitive Programming",
    iconName: "Layout",
  },

  // ─── Learning ──────────────────────────────────
  {
    name: "Coursera",
    handle: "ajay-dhangar",
    url: "https://www.coursera.org/learner/ajay-dhangar",
    category: "Learning",
    iconName: "BookOpen",
  },

  // ─── Content & Media ───────────────────────────
  {
    name: "YouTube",
    handle: "@ajay-dhangar",
    url: "https://www.youtube.com/@ajay-dhangar",
    category: "Content & Media",
    iconName: "Youtube",
  },
  {
    name: "Medium",
    handle: "ajaydhangar49",
    url: "https://ajaydhangar49.medium.com/",
    category: "Content & Media",
    iconName: "PenLine",
  },

  // ─── Developer Community ───────────────────────
  {
    name: "daily.dev (Profile)",
    handle: "ajaydhangar49",
    url: "https://app.daily.dev/ajaydhangar49",
    category: "Developer Community",
    iconName: "Users",
  },
  {
    name: "daily.dev Squad",
    handle: "CodeHarborHub",
    url: "https://app.daily.dev/squads/codeharborhub",
    category: "Developer Community",
    iconName: "Layers",
  },

  // ─── Social ────────────────────────────────────
  {
    name: "Instagram",
    handle: "_ajay.dhangar",
    url: "https://www.instagram.com/_ajay.dhangar/",
    category: "Social",
    iconName: "Instagram",
  },
  {
    name: "Facebook",
    handle: "CodeHarborHub",
    url: "https://www.facebook.com/codeharborhub",
    category: "Social",
    iconName: "Facebook",
  },
  {
    name: "X (Twitter)",
    handle: "@CodesWithAjay",
    url: "https://x.com/CodesWithAjay",
    category: "Social",
    iconName: "Twitter",
  },

  // ─── Gaming ────────────────────────────────────
  {
    name: "Chess.com",
    handle: "ajay-dhangar",
    url: "https://www.chess.com/member/ajay-dhangar",
    category: "Gaming",
    iconName: "Crown",
  },

  // ─── Sustainability ───────────────────────────
  {
    name: "Tree Nation",
    handle: "ajay-dhangar",
    url: "https://tree-nation.com/profile/ajay-dhangar",
    category: "Sustainability",
    iconName: "Leaf",
  },

  // ─── Finance & Support ─────────────────────────
  {
    name: "OpenCollective",
    handle: "ajay-dhangar",
    url: "https://opencollective.com/ajay-dhangar",
    category: "Finance & Support",
    iconName: "Wallet",
  },

  // ─── Analytics ─────────────────────────────────
  {
    name: "GitHub Profile Summary",
    handle: "ajay-dhangar",
    url: "https://profile-summary-for-github.com/user/ajay-dhangar",
    category: "Analytics",
    iconName: "BarChart",
  },
  {
    name: "GitHub Productivity Card",
    handle: "ajay-dhangar",
    url: "https://github-profile-summary-cards.vercel.app/api/cards/productive-time?username=ajay-dhangar&theme=gruvbox&hide_border=true",
    category: "Analytics",
    iconName: "Activity",
  },
];
