// ─── All portfolio content in one place ────────────────────────────────────

export const meta = {
  name: 'Daizy Cherotich',
  handle: 'daizy.dev',
  headline: 'ICT Graduate · Future DevOps Engineer · Frontend Developer · Automation Enthusiast',
  location: 'Kenya',
  email: 'daizy@example.com',
  availability: 'Open to internships, junior developer roles and DevOps opportunities.',
  bio: [
    'I recently graduated with an ICT Diploma with an overall Distinction. My passion is building scalable applications, automating workflows and continuously learning modern technologies.',
    "I believe consistency beats talent and I enjoy solving real-world problems with code. Every day I invest time into mastering the tools that will shape tomorrow's infrastructure.",
  ],
  currentFocus: [
    'DevOps', 'Linux', 'Python', 'Networking', 'Bash Scripting',
    'React', 'JavaScript', 'n8n Automation', 'German (B2)', 'AWS Cloud',
  ],
  socials: {
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    email: 'mailto:daizy@example.com',
    twitter: 'https://x.com',
    instagram: 'https://instagram.com',
  },
};

export const stats = [
  { value: 1, suffix: '+', label: 'Years Learning' },
  { value: 10, suffix: '+', label: 'Projects Built' },
  { value: 5, suffix: '+', label: 'Tech Stacks' },
  { value: 100, suffix: '%', label: 'Commitment' },
];

export const skillGroups = [
  {
    category: 'Frontend',
    color: '#38BDF8',
    icon: 'Monitor',
    skills: [
      { name: 'HTML', level: 90 },
      { name: 'CSS', level: 85 },
      { name: 'JavaScript', level: 78 },
      { name: 'React', level: 70 },
      { name: 'Tailwind CSS', level: 80 },
      { name: 'Responsive Design', level: 85 },
    ],
  },
  {
    category: 'Programming',
    color: '#A855F7',
    icon: 'Code2',
    skills: [
      { name: 'Python', level: 65 },
      { name: 'Bash', level: 60 },
      { name: 'Git', level: 75 },
      { name: 'Linux CLI', level: 68 },
    ],
  },
  {
    category: 'Automation',
    color: '#7C3AED',
    icon: 'Zap',
    skills: [
      { name: 'n8n Automation', level: 60 },
      { name: 'REST APIs', level: 65 },
      { name: 'Webhooks', level: 58 },
    ],
  },
  {
    category: 'DevOps Journey',
    color: '#34D399',
    icon: 'Cloud',
    skills: [
      { name: 'Networking', level: 55 },
      { name: 'Docker', level: 35 },
      { name: 'AWS', level: 30 },
      { name: 'CI/CD', level: 25 },
    ],
  },
  {
    category: 'Languages',
    color: '#F59E0B',
    icon: 'Globe',
    skills: [
      { name: 'English', level: 95 },
      { name: 'German (B2)', level: 60 },
      { name: 'Swahili', level: 100 },
    ],
  },
];

export const timeline = [
  {
    year: '2026',
    title: 'ICT Diploma — Overall Distinction',
    org: 'KNEC',
    description: 'Graduated with an Overall Distinction, demonstrating excellence across hardware, software, networking and programming modules.',
    type: 'education',
    icon: 'GraduationCap',
    color: '#7C3AED',
  },
  {
    year: '2026',
    title: 'ICT Attachment',
    org: 'ICT Office',
    description: 'Supported technical operations in a professional ICT office environment — hardware maintenance, network support and user assistance — while independently studying DevOps concepts.',
    type: 'work',
    icon: 'Briefcase',
    color: '#38BDF8',
  },
  {
    year: 'Current',
    title: 'Self-learning DevOps',
    org: 'Self-directed',
    description: 'Daily practice in Linux, Networking fundamentals, Bash scripting, Python automation, AWS architecture and CI/CD pipelines. Documenting every step as personal notes and projects.',
    type: 'current',
    icon: 'Rocket',
    color: '#A855F7',
  },
  {
    year: 'Future',
    title: 'Cloud & DevOps Engineer',
    org: 'Target Role',
    description: 'Working toward a professional DevOps Engineer position — ideally in Germany, leveraging my B2 German language skills alongside strong infrastructure expertise.',
    type: 'future',
    icon: 'Target',
    color: '#34D399',
  },
];

export type ProjectTag = string;
export type Project = {
  id: number;
  title: string;
  description: string;
  tags: ProjectTag[];
  demoUrl: string;
  githubUrl: string;
  featured: boolean;
  gradient: string;
  icon: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: 'Weather App',
    description: 'A real-time weather application fetching live data from OpenWeatherMap API. Displays temperature, humidity, wind speed and a 5-day forecast with smooth UI transitions.',
    tags: ['HTML', 'CSS', 'JavaScript', 'REST API'],
    demoUrl: 'https://github.com',
    githubUrl: 'https://github.com',
    featured: true,
    gradient: 'from-blue-500/20 to-cyan-400/10',
    icon: 'Cloud',
  },
  {
    id: 2,
    title: 'Amazon Clone',
    description: 'A pixel-perfect responsive clone of the Amazon storefront built with React. Features dynamic product cards, a working cart and a fully responsive navigation.',
    tags: ['React', 'CSS', 'JavaScript'],
    demoUrl: 'https://github.com',
    githubUrl: 'https://github.com',
    featured: true,
    gradient: 'from-orange-500/20 to-amber-400/10',
    icon: 'ShoppingCart',
  },
  {
    id: 3,
    title: 'Portfolio Website',
    description: 'This portfolio — designed and built from scratch using React, Tailwind CSS and Framer Motion. Custom cursor, animated sections and dark-first design.',
    tags: ['React', 'Tailwind', 'Framer Motion', 'TypeScript'],
    demoUrl: 'https://github.com',
    githubUrl: 'https://github.com',
    featured: true,
    gradient: 'from-purple-500/20 to-violet-400/10',
    icon: 'Globe',
  },
  {
    id: 4,
    title: 'Task Manager',
    description: 'A clean productivity app with React hooks and localStorage persistence. Create, complete and delete tasks with optimistic UI updates and a minimal dark UI.',
    tags: ['React', 'Hooks', 'localStorage'],
    demoUrl: 'https://github.com',
    githubUrl: 'https://github.com',
    featured: false,
    gradient: 'from-green-500/20 to-emerald-400/10',
    icon: 'CheckSquare',
  },
  {
    id: 5,
    title: 'Linux Notes',
    description: 'Personal documentation site for Linux commands, Bash scripting snippets and networking notes — my growing knowledge base as I progress through the DevOps path.',
    tags: ['Markdown', 'Linux', 'Documentation'],
    demoUrl: 'https://github.com',
    githubUrl: 'https://github.com',
    featured: false,
    gradient: 'from-red-500/20 to-rose-400/10',
    icon: 'Terminal',
  },
  {
    id: 6,
    title: 'Automation Workflow',
    description: 'An n8n workflow integrating a Webhook trigger → data transformation → Google Sheets write-back → email notification. Automates a manual reporting process end-to-end.',
    tags: ['n8n', 'Webhooks', 'REST API', 'Automation'],
    demoUrl: 'https://github.com',
    githubUrl: 'https://github.com',
    featured: false,
    gradient: 'from-teal-500/20 to-cyan-400/10',
    icon: 'GitBranch',
  },
];

export const learningRoadmap = [
  { label: 'Linux', status: 'learning', icon: 'Terminal' },
  { label: 'Networking', status: 'learning', icon: 'Network' },
  { label: 'Python', status: 'learning', icon: 'Code2' },
  { label: 'Bash', status: 'learning', icon: 'Hash' },
  { label: 'Docker', status: 'upcoming', icon: 'Box' },
  { label: 'AWS', status: 'upcoming', icon: 'Cloud' },
  { label: 'Terraform', status: 'future', icon: 'Layers' },
  { label: 'Kubernetes', status: 'future', icon: 'Share2' },
  { label: 'CI/CD', status: 'future', icon: 'RefreshCw' },
];

export const certifications = [
  {
    title: 'ICT Diploma',
    issuer: 'KNEC',
    status: 'completed',
    detail: 'Overall Distinction',
    color: '#7C3AED',
    icon: 'GraduationCap',
    year: '2026',
  },
  {
    title: 'Finance for Everyone',
    issuer: 'University of Michigan',
    status: 'completed',
    detail: 'Certificate of Completion',
    color: '#38BDF8',
    icon: 'Award',
    year: '2025',
  },
  {
    title: 'ALX Virtual Assistant',
    issuer: 'ALX Africa',
    status: 'completed',
    detail: 'Completed',
    color: '#A855F7',
    icon: 'Star',
    year: '2025',
  },
  {
    title: 'German B2',
    issuer: 'Goethe-Institut',
    status: 'in-progress',
    detail: 'Currently Preparing',
    color: '#F59E0B',
    icon: 'Languages',
    year: '2026',
  },
  {
    title: 'AWS Cloud Practitioner',
    issuer: 'Amazon Web Services',
    status: 'in-progress',
    detail: 'In Progress',
    color: '#34D399',
    icon: 'Cloud',
    year: '2026',
  },
];

export const whyMe = [
  {
    icon: 'Zap',
    title: 'Fast Learner',
    description: 'I absorb modern technologies quickly, picking up frameworks, tools and concepts through deliberate daily practice and building real projects.',
    color: '#38BDF8',
  },
  {
    icon: 'Puzzle',
    title: 'Problem Solver',
    description: "I enjoy breaking complex problems into clear, elegant solutions. Every bug is a puzzle I want to crack — every workflow a system I want to improve.",
    color: '#7C3AED',
  },
  {
    icon: 'TrendingUp',
    title: 'Consistent',
    description: 'Showing up every day, even for 30 minutes, compounds into extraordinary results. That mindset drives everything — from learning German to mastering DevOps.',
    color: '#A855F7',
  },
];

export const floatingSnippets = [
  { code: 'git commit -m "fix"', rot: '-6deg', delay: '0s' },
  { code: 'docker run -d nginx', rot: '8deg', delay: '1.2s' },
  { code: 'npm run build', rot: '-3deg', delay: '2.4s' },
  { code: 'bash deploy.sh', rot: '5deg', delay: '0.7s' },
  { code: 'kubectl get pods', rot: '-8deg', delay: '1.8s' },
  { code: 'python automate.py', rot: '4deg', delay: '3s' },
];

export const philosophy =
  '"Small consistent improvements every day eventually become extraordinary results."';
