// Single source of truth for portfolio content.
// Edit here → whole site updates.

export const profile = {
  name: 'Berto Barata',
  role: 'Web Developer & Designer',
  location: 'Lisboa, Portugal',
  tagline: 'Construo websites feitos à mão, do briefing ao launch.',
  intro:
    'Tenho base em Engenharia Informática e de Computadores e trabalho também em mediação de seguros e financeira, ' +
    'em contacto diário com quem gere um negócio. Fundei o Barata Studio, onde desenho e programo websites e apps à medida.',
  email: 'berto.barata77@gmail.com',
  available: 'Disponível para projetos',
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

// Client work, ordered like baratastudio.com (strongest first).
export type Project = {
  name: string;
  category: string;
  description: string;
  stack: string[];
  href?: string;      // live site
  repo?: string;      // public source only
  image: string;      // 1200x750 webp
  status: 'live' | 'wip';
};

export const projects: Project[] = [
  {
    name: 'Valejas Atlético Clube',
    category: 'Clube desportivo · plataforma',
    description:
      'Plataforma do clube de Valejas, Oeiras: loja online com MB WAY e Multibanco, inscrições e pedidos de sócio, área privada da Direção e comunicados publicados automaticamente nas redes sociais.',
    stack: ['Next.js', 'Sanity CMS', 'GSAP', 'Vercel'],
    href: 'https://valejasac.pt',
    repo: 'https://github.com/bertobarata/valejas-ac',
    image: '/images/projects/valejas.webp',
    status: 'live',
  },
  {
    name: 'Greenbond',
    category: 'Finanças · sector público',
    description:
      'Plataforma de gestão e tokenização de ativos para organizações do sector público. Multi-idioma (PT/EN/FR/ES), com acessibilidade Google 100/100.',
    stack: ['HTML', 'CSS', 'JavaScript', 'Multi-idioma'],
    href: 'https://greenbond.pt',
    image: '/images/projects/greenbond.webp',
    status: 'live',
  },
  {
    name: 'Ludy Artes',
    category: 'E-commerce · personalização',
    description:
      'Loja de agendas feitas à medida, do pedido à entrega, com identidade própria. Mais de 800 agendas entregues.',
    stack: ['HTML', 'CSS', 'JavaScript', 'Formspree'],
    href: 'https://ludyartes.pt',
    image: '/images/projects/ludyartes.webp',
    status: 'live',
  },
  {
    name: 'Cão na Rua',
    category: 'Serviços · animais',
    description:
      'Presença digital para creche e hotel canino em Sintra. Reservas, serviços e galeria, com um tom próximo e caloroso.',
    stack: ['HTML', 'CSS', 'JavaScript', 'PurgeCSS'],
    href: 'https://caonarua.pt',
    repo: 'https://github.com/bertobarata/caonarua-public',
    image: '/images/projects/caonarua.webp',
    status: 'live',
  },
  {
    name: 'Gentle Laughter',
    category: 'Eventos · produção',
    description:
      'Produção, agenciamento e coordenação de eventos em Lisboa. Site multi-secção com testes E2E em Playwright.',
    stack: ['HTML', 'CSS', 'JavaScript', 'Playwright'],
    href: 'https://gentlelaughter.com',
    repo: 'https://github.com/bertobarata/gentlelaughter-website',
    image: '/images/projects/gentlelaughter.webp',
    status: 'live',
  },
  {
    name: 'Queen Bee Hair',
    category: 'Beleza · extensões de cabelo',
    description:
      'Redesign claro e confiante para especialista em extensões de cabelo em Benfica, Lisboa.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    href: 'https://bertobarata.github.io/queen-bee-hair/',
    repo: 'https://github.com/bertobarata/queen-bee-hair',
    image: '/images/projects/queenbeehair.webp',
    status: 'wip',
  },
  {
    name: 'Barbearia Supra',
    category: 'Serviços · barbearia',
    description:
      'Landing vintage para barbearia em São Domingos de Benfica, com marcações diretas por telefone e WhatsApp.',
    stack: ['HTML', 'CSS', 'JavaScript', 'GitHub Pages'],
    href: 'https://bertobarata.github.io/barbearia-supra/',
    repo: 'https://github.com/bertobarata/barbearia-supra',
    image: '/images/projects/barbeariasupra.webp',
    status: 'wip',
  },
];

// Own products, shown as compact rows (icon or monogram).
export type App = {
  name: string;
  status: string;
  description: string;
  stack: string;
  icon?: string;
  shot?: boolean;     // icon is a 16:10 screenshot, not a square app icon
  mono?: string;
  links: { label: string; href: string }[];
};

export const apps: App[] = [
  {
    name: 'Barata Studio',
    status: 'Online',
    description:
      'O meu estúdio de websites personalizados: site em quatro idiomas, terminal interativo e modo noite automático.',
    stack: 'HTML · CSS · JavaScript',
    icon: '/images/projects/baratastudio.webp',
    shot: true,
    links: [
      { label: 'Ver site', href: 'https://baratastudio.com' },
      { label: 'Código', href: 'https://github.com/bertobarata/baratastudio' },
    ],
  },
  {
    name: 'Meet Tracker',
    status: 'Na App Store',
    description:
      'App para iPhone que regista a atividade comercial do dia e gera o relatório semanal. Começou como web app em React e passou a nativa. Sem contas: os dados ficam no iPhone e no iCloud de cada pessoa.',
    stack: 'SwiftUI · SwiftData · CloudKit',
    icon: '/images/projects/meet-tracker-icon.webp',
    links: [{ label: 'Ver na App Store', href: 'https://apps.apple.com/pt/app/meet-tracker/id6813061781' }],
  },
  {
    name: 'App TVDE',
    status: 'Em desenvolvimento',
    description:
      'Preparação para o exame de motorista TVDE: 653 perguntas com explicações, sinais de trânsito e revisão por repetição espaçada.',
    stack: 'iOS e Android',
    icon: '/images/projects/tvde-icon.webp',
    links: [{ label: 'Ver site', href: 'https://apptvde.store' }],
  },
  {
    name: 'FINE RAG',
    status: 'Protótipo',
    description:
      'Assistente que responde a perguntas sobre fichas FINE de crédito habitação a partir dos próprios PDFs, a correr no computador, sem enviar dados para fora.',
    stack: 'Next.js · Ollama · LanceDB',
    mono: 'F',
    links: [],
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
    note: 'Regime pós-laboral, média atual de 15,9 valores. Concluídas: Algoritmos e Estruturas de Dados · Arquitetura de Computadores · Redes de Computadores · Introdução à Programação Web · Introdução a Sistemas de Informação.',
  },
];

export const facets = [
  {
    title: 'Barata Studio',
    kicker: 'Web dev',
    body: 'Fundador. Websites e apps à medida, do briefing ao lançamento.',
  },
  {
    title: 'Mediação de seguros e financeira',
    kicker: 'Consultoria',
    body: 'Consultor premium. Acompanho clientes e negócios, da análise de necessidades à proposta.',
  },
  {
    title: 'ISEL · Eng. Informática',
    kicker: 'Formação',
    body: 'A construir fundamentos sólidos de engenharia informática.',
  },
];
