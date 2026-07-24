// Single source of truth for portfolio content.
// Edit here → whole site updates.

export const profile = {
  name: 'Berto Barata',
  role: 'Web Developer & Designer',
  location: 'Lisboa, Portugal',
  tagline: 'Construo websites feitos à mão, do briefing ao launch.',
  intro:
    'Estudante de Engenharia Informática e de Computadores, fundador do Barata Studio e consultor financeiro. ' +
    'Desenvolvo websites e aplicações com rigor técnico, código limpo e atenção ao detalhe.',
  email: 'berto.barata77@gmail.com',
  available: 'Disponível para trabalhar',
  cvUrl: '/berto-barata-cv.pdf',
  languages: [
    { name: 'Português', level: 'Nativo (C2)' },
    { name: 'Inglês', level: 'Profissional (C1)' },
    { name: 'Francês', level: 'Profissional (B1)' },
  ],
  socials: [
    { label: 'GitHub', href: 'https://github.com/bertobarata', handle: '@bertobarata' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/bertobarata/', handle: 'in/bertobarata' },
    { label: 'Barata Studio', href: 'https://baratastudio.com', handle: 'baratastudio.com' },
  ],
};

// Rotating roles in the hero (edh.dev-style descriptors).
export const roles = [
  'Web Developer',
  'Digital Designer',
  'Estudante de Engenharia',
  'Fundador do Barata Studio',
  'Pai, o meu melhor projeto',
];

export type Project = {
  name: string;
  category: string;
  description: string;
  stack: string[];
  href?: string;      // live site
  repo?: string;      // source
  image?: string;     // real screenshot
  year: string;
  status: 'live' | 'wip';
  accent?: string;    // per-card accent
};

export const projects: Project[] = [
  {
    name: 'Cão na Rua',
    category: 'Creche & hotel canino',
    description:
      'Presença digital para creche e hotel canino em Sintra. Reservas, serviços e galeria, com um tom próximo e caloroso.',
    stack: ['HTML', 'CSS', 'JavaScript', 'PurgeCSS'],
    href: 'https://caonarua.pt',
    repo: 'https://github.com/bertobarata/caonarua-public',
    image: '/images/projects/caonarua.jpg',
    year: '2025',
    status: 'live',
    accent: '#e8934a',
  },
  {
    name: 'Gentle Laughter',
    category: 'Produção & eventos',
    description:
      'Umbrella de produção com várias linhas de negócio e lançamento de livro. Site multi-secção com testes E2E em Playwright.',
    stack: ['HTML', 'CSS', 'JavaScript', 'Playwright'],
    href: 'https://gentlelaughter.com',
    repo: 'https://github.com/bertobarata/gentlelaughter-website',
    image: '/images/projects/gentlelaughter.jpg',
    year: '2025',
    status: 'live',
    accent: '#c86ff0',
  },
  {
    name: 'GreenBond',
    category: 'Corporativo',
    description:
      'Site corporativo multi-idioma (PT/EN/FR/ES) para empresa de serviços. Arquitetura config-driven e foco em SEO.',
    stack: ['HTML', 'CSS', 'JavaScript', 'Multi-idioma'],
    href: 'https://greenbond.pt',
    repo: 'https://github.com/bertobarata/greenbond',
    image: '/images/projects/greenbond.jpg',
    year: '2025',
    status: 'live',
    accent: '#3fa34d',
  },
  {
    name: 'Barbearia Supra',
    category: 'Barbearia',
    description:
      'Landing vintage para barbearia: marcações, galeria de cortes puxada do Instagram e uma identidade forte.',
    stack: ['HTML', 'CSS', 'JavaScript', 'GitHub Pages'],
    href: 'https://bertobarata.github.io/barbearia-supra/',
    repo: 'https://github.com/bertobarata/barbearia-supra',
    image: '/images/projects/barbearia.jpg',
    year: '2026',
    status: 'wip',
    accent: '#b8863f',
  },
  {
    name: 'Barata Studio',
    category: 'Estúdio · marca própria',
    description:
      'A minha marca de desenvolvimento web. Landing de prospecção com direção premium, motion sofisticado e narrativa em três atos.',
    stack: ['HTML', 'CSS', 'JavaScript', 'PurgeCSS'],
    href: 'https://baratastudio.com',
    repo: 'https://github.com/bertobarata/baratastudio',
    image: '/images/projects/baratastudio.jpg',
    year: '2026',
    status: 'live',
    accent: '#e8b64a',
  },
  {
    name: 'Sales Tracker',
    category: 'Web app · projeto próprio',
    description:
      'Web app full-stack que concebi e construí de raiz para acompanhar atividade comercial. Dashboards de tendências, autenticação Google e sincronização em tempo real entre dispositivos.',
    stack: ['React', 'JavaScript', 'Auth Google', 'Vercel'],
    href: 'https://sales-tracker-red.vercel.app',
    image: '/images/projects/salestracker.jpg',
    year: '2026',
    status: 'live',
    accent: '#3b6ef5',
  },
  {
    name: 'Ludy Artes',
    category: 'Papelaria personalizada',
    description:
      'Agendas e cadernos personalizados com envio para toda a Europa. Catálogo multi-idioma e formulário de encomenda.',
    stack: ['HTML', 'CSS', 'JavaScript', 'Formspree'],
    repo: 'https://github.com/bertobarata/ludyartes-website',
    year: '2025',
    status: 'live',
    accent: '#4ab8a0',
  },
  {
    name: 'Valejas Atlético Clube',
    category: 'Clube desportivo · CMS',
    description:
      'Site institucional para clube de futebol e futsal com várias modalidades. CMS para a Direção publicar comunicados oficiais que saem em simultâneo nas redes sociais.',
    stack: ['Next.js 14', 'Sanity CMS', 'GSAP', 'Vercel'],
    repo: 'https://github.com/bertobarata/valejas-ac',
    image: '/images/projects/valejas.jpg',
    year: '2026',
    status: 'wip',
    accent: '#1554BB',
  },
];

// Tech logos (rendered from the self-hosted `simple-icons` set).
// slug = simple-icons export name; null = no official icon (text fallback).
export const techLogos: { name: string; slug: string | null }[] = [
  { name: 'HTML5', slug: 'siHtml5' },
  { name: 'CSS', slug: 'siCss' },
  { name: 'JavaScript', slug: 'siJavascript' },
  { name: 'TypeScript', slug: 'siTypescript' },
  { name: 'Python', slug: 'siPython' },
  { name: 'Java', slug: 'siOpenjdk' },
  { name: 'Kotlin', slug: 'siKotlin' },
  { name: 'React', slug: 'siReact' },
  { name: 'Next.js', slug: 'siNextdotjs' },
  { name: 'Astro', slug: 'siAstro' },
  { name: 'Vite', slug: 'siVite' },
  { name: 'Tailwind CSS', slug: 'siTailwindcss' },
  { name: 'GSAP', slug: 'siGreensock' },
  { name: 'Three.js', slug: 'siThreedotjs' },
  { name: 'Electron', slug: 'siElectron' },
  { name: 'Sanity', slug: 'siSanity' },
  { name: 'Firebase', slug: 'siFirebase' },
  { name: 'Node.js', slug: 'siNodedotjs' },
  { name: 'Playwright', slug: null },
  { name: 'Vitest', slug: 'siVitest' },
  { name: 'ESLint', slug: 'siEslint' },
  { name: 'Git', slug: 'siGit' },
  { name: 'GitHub', slug: 'siGithub' },
  { name: 'Vercel', slug: 'siVercel' },
];

// Academic foundations (no logos) shown as a text line.
export const fundamentos = [
  'Algoritmos & Estruturas de Dados',
  'Arquitetura de Computadores',
  'Redes de Computadores',
  'SQL',
];

export const education = [
  {
    title: 'Licenciatura em Engenharia Informática e de Computadores',
    org: 'ISEL, Instituto Superior de Engenharia de Lisboa',
    period: 'em curso',
    note: 'Concluídas: Algoritmos e Estruturas de Dados · Arquitetura de Computadores · Redes de Computadores · Introdução à Programação Web · Introdução a Sistemas de Informação.',
  },
];

export const facets = [
  {
    title: 'Barata Studio',
    kicker: 'Web dev',
    body: 'Fundador. Websites feitos à mão para contextos formais.',
  },
  {
    title: 'MetLife',
    kicker: 'Mediação financeira',
    body: 'Analista empresarial e mediador financeiro e de seguros.',
  },
  {
    title: 'ISEL · Eng. Informática',
    kicker: 'Formação',
    body: 'A construir fundamentos sólidos de engenharia informática.',
  },
];
