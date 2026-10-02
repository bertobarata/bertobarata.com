// Single source of truth for portfolio content, in Portuguese and English.
// Edit here → both versions of the site update.

export type Lang = 'pt' | 'en';
export const langs: Lang[] = ['pt', 'en'];
export const homePath: Record<Lang, string> = { pt: '/', en: '/en/' };

export const profile = {
  name: 'Berto Barata',
  location: 'Lisboa, Portugal',
  email: 'berto.barata77@gmail.com',
  socials: [
    { label: 'GitHub', href: 'https://github.com/bertobarata', handle: '@bertobarata' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/bertobarata/', handle: 'in/bertobarata' },
    { label: 'Barata Studio', href: 'https://baratastudio.com', handle: 'baratastudio.com' },
  ],
};

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
  wide?: boolean;     // featured: spans two columns on desktop
};

// Own products, shown as compact rows (icon or monogram).
export type App = {
  name: string;
  status: string;
  description: string;
  stack: string;
  icon?: string;
  logo?: boolean;     // use the Barata Studio mark instead of an image
  mono?: string;
  links: { label: string; href: string }[];
};

type Content = {
  role: string;
  description: string;
  intro: string;
  available: string;
  roles: string[];
  languages: { name: string; level: string }[];
  facets: { kicker: string; title: string; body: string }[];
  fundamentos: string[];
  education: { title: string; org: string; period: string; note: string }[];
  projects: Project[];
  apps: App[];
  ui: Record<string, string>;
};

// Shared, language-neutral project facts.
const P = {
  valejas: { name: 'Valejas Atlético Clube', stack: ['Next.js', 'Sanity CMS', 'GSAP', 'Vercel'], href: 'https://valejasac.pt', repo: 'https://github.com/bertobarata/valejas-ac', image: '/images/projects/valejas.webp', status: 'live', wide: true },
  greenbond: { name: 'Greenbond', stack: ['HTML', 'CSS', 'JavaScript', 'i18n'], href: 'https://greenbond.pt', image: '/images/projects/greenbond.webp', status: 'live', wide: true },
  ludy: { name: 'Ludy Artes', stack: ['HTML', 'CSS', 'JavaScript', 'Formspree'], href: 'https://ludyartes.pt', image: '/images/projects/ludyartes.webp', status: 'live' },
  cnr: { name: 'Cão na Rua', stack: ['HTML', 'CSS', 'JavaScript', 'PurgeCSS'], href: 'https://caonarua.pt', repo: 'https://github.com/bertobarata/caonarua-public', image: '/images/projects/caonarua.webp', status: 'live' },
  gentle: { name: 'Gentle Laughter', stack: ['HTML', 'CSS', 'JavaScript', 'Playwright'], href: 'https://gentlelaughter.com', repo: 'https://github.com/bertobarata/gentlelaughter-website', image: '/images/projects/gentlelaughter.webp', status: 'live' },
  queenbee: { name: 'Queen Bee Hair', stack: ['HTML', 'CSS', 'JavaScript'], href: 'https://bertobarata.github.io/queen-bee-hair/', repo: 'https://github.com/bertobarata/queen-bee-hair', image: '/images/projects/queenbeehair.webp', status: 'wip' },
  supra: { name: 'Barbearia Supra', stack: ['HTML', 'CSS', 'JavaScript', 'GitHub Pages'], href: 'https://bertobarata.github.io/barbearia-supra/', repo: 'https://github.com/bertobarata/barbearia-supra', image: '/images/projects/barbeariasupra.webp', status: 'wip' },
} as const;

const proj = (k: keyof typeof P, category: string, description: string): Project =>
  ({ ...P[k], stack: [...P[k].stack], category, description }) as Project;

export const content: Record<Lang, Content> = {
  pt: {
    role: 'Web Developer & Designer',
    description:
      'Berto Barata, web developer em Lisboa e fundador do Barata Studio. Websites e apps à medida, com base em Engenharia Informática e de Computadores.',
    intro:
      'Tenho base em Engenharia Informática e de Computadores e trabalho também em mediação de seguros e financeira, ' +
      'em contacto diário com quem gere um negócio. Fundei o Barata Studio, onde desenho e programo websites e apps à medida.',
    available: 'Disponível para projetos',
    roles: ['Web Developer', 'Digital Designer', 'Estudante de Engenharia', 'Fundador do Barata Studio', 'Pai, o meu melhor projeto'],
    languages: [
      { name: 'Português', level: 'Nativo (C2)' },
      { name: 'Inglês', level: 'Profissional (C1)' },
      { name: 'Francês', level: 'Profissional (B1)' },
    ],
    facets: [
      { kicker: 'Web dev', title: 'Barata Studio', body: 'Fundador. Websites e apps à medida, do briefing ao lançamento.' },
      { kicker: 'Consultoria', title: 'Mediação de seguros e financeira', body: 'Consultor premium. Acompanho clientes e negócios, da análise de necessidades à proposta.' },
      { kicker: 'Formação', title: 'ISEL · Eng. Informática', body: 'A construir fundamentos sólidos de engenharia informática, em regime pós-laboral.' },
    ],
    fundamentos: ['Algoritmos e Estruturas de Dados', 'Arquitetura de Computadores', 'Redes de Computadores', 'SQL'],
    education: [
      {
        title: 'Licenciatura em Engenharia Informática e de Computadores',
        org: 'ISEL, Instituto Superior de Engenharia de Lisboa',
        period: 'em curso',
        note: 'Regime pós-laboral, média atual de 15,9 valores. Concluídas: Algoritmos e Estruturas de Dados · Arquitetura de Computadores · Redes de Computadores · Introdução à Programação Web · Introdução a Sistemas de Informação.',
      },
    ],
    projects: [
      proj('valejas', 'Clube desportivo · plataforma', 'Plataforma do clube de Valejas, Oeiras: loja online com MB WAY e Multibanco, inscrições e pedidos de sócio, área privada da Direção e comunicados publicados automaticamente nas redes sociais.'),
      proj('greenbond', 'Finanças · sector público', 'Plataforma de gestão e tokenização de ativos para organizações do sector público. Quatro idiomas e acessibilidade Google 100/100.'),
      proj('ludy', 'E-commerce · personalização', 'Loja de agendas feitas à medida, do pedido à entrega, com identidade própria. Mais de 800 agendas entregues.'),
      proj('cnr', 'Serviços · animais', 'Presença digital para creche e hotel canino em Sintra. Reservas, serviços e galeria, com um tom próximo e caloroso.'),
      proj('gentle', 'Eventos · produção', 'Produção, agenciamento e coordenação de eventos em Lisboa. Site multi-secção com testes E2E em Playwright.'),
      proj('queenbee', 'Beleza · extensões de cabelo', 'Redesign claro e confiante para especialista em extensões de cabelo em Benfica, Lisboa.'),
      proj('supra', 'Serviços · barbearia', 'Landing vintage para barbearia em São Domingos de Benfica, com marcações diretas por telefone e WhatsApp.'),
    ],
    apps: [
      {
        name: 'Barata Studio', status: 'Online', stack: 'HTML · CSS · JavaScript',
        description: 'O meu estúdio de websites personalizados: site em quatro idiomas, terminal interativo e modo noite automático.',
        logo: true,
        links: [{ label: 'Ver site', href: 'https://baratastudio.com' }, { label: 'Código', href: 'https://github.com/bertobarata/baratastudio' }],
      },
      {
        name: 'Meet Tracker', status: 'Na App Store', stack: 'SwiftUI · SwiftData · CloudKit',
        description: 'App para iPhone que regista a atividade comercial do dia e gera o relatório semanal. Começou como web app em React e passou a nativa. Sem contas: os dados ficam no iPhone e no iCloud de cada pessoa.',
        icon: '/images/projects/meet-tracker-icon.webp',
        links: [{ label: 'Ver na App Store', href: 'https://apps.apple.com/pt/app/meet-tracker/id6813061781' }],
      },
      {
        name: 'App TVDE', status: 'Em desenvolvimento', stack: 'iOS e Android',
        description: 'Preparação para o exame de motorista TVDE: 653 perguntas com explicações, sinais de trânsito e revisão por repetição espaçada.',
        icon: '/images/projects/tvde-icon.webp',
        links: [{ label: 'Ver site', href: 'https://apptvde.store' }],
      },
      {
        name: 'FINE RAG', status: 'Protótipo', stack: 'Next.js · Ollama · LanceDB',
        description: 'Assistente que responde a perguntas sobre fichas FINE de crédito habitação a partir dos próprios PDFs, a correr no computador, sem enviar dados para fora.',
        mono: 'F', links: [],
      },
    ],
    ui: {
      skip: 'Saltar para o conteúdo',
      hello: 'Olá, o meu nome é',
      iam: 'Sou',
      seeWork: 'Ver projetos →',
      talk: 'Falar comigo',
      aboutTitle: 'Uma pessoa, três frentes, todas com o mesmo cuidado.',
      aboutBio: 'Lisboeta, engenheiro informático em formação e obcecado por detalhe. Gosto de transformar ideias em coisas que funcionam, do primeiro rascunho ao deploy, e de as deixar melhor do que as encontrei.',
      photoAlt: 'Berto Barata, de fato e sobretudo, num retrato noturno em Lisboa',
      skillsTitle: 'Tecnologias com que já trabalhei.',
      fundamentos: 'Fundamentos',
      idiomas: 'Idiomas',
      workTitle: 'Projetos para clientes.',
      workLede: 'Sites entregues a negócios reais, do briefing ao deploy.',
      live: 'online',
      wip: 'em curso',
      visit: 'Ver site ↗',
      code: 'Código',
      siteOf: 'Website',
      appsTitle: 'Em desenvolvimento.',
      appsLede: 'Apps e projetos próprios, desenhados e programados por mim.',
      eduTitle: 'A caminho de engenheiro informático.',
      contactEyebrow: 'Contacto',
      contactTitle: 'Tens um projeto em mente?',
      contactLede: 'Websites e apps à medida, do briefing ao lançamento. Escreve-me e falamos.',
      next: 'Próximo',
      top: 'Início',
      nextAria: 'Próxima secção',
      topAria: 'Voltar ao início',
      langLabel: 'Idioma',
    },
  },

  en: {
    role: 'Web Developer & Designer',
    description:
      'Berto Barata, web developer in Lisbon and founder of Barata Studio. Custom websites and apps, built on a Computer Science and Engineering background.',
    intro:
      'I have a background in Computer Science and Engineering and also work in insurance and financial brokerage, ' +
      'talking every day with people who run a business. I founded Barata Studio, where I design and build custom websites and apps.',
    available: 'Available for projects',
    roles: ['a Web Developer', 'a Digital Designer', 'an Engineering student', 'the founder of Barata Studio', 'a dad, my best project'],
    languages: [
      { name: 'Portuguese', level: 'Native (C2)' },
      { name: 'English', level: 'Professional (C1)' },
      { name: 'French', level: 'Professional (B1)' },
    ],
    facets: [
      { kicker: 'Web dev', title: 'Barata Studio', body: 'Founder. Custom websites and apps, from brief to launch.' },
      { kicker: 'Consulting', title: 'Insurance and financial brokerage', body: 'Premium consultant. I support clients and businesses, from needs analysis to proposal.' },
      { kicker: 'Education', title: 'ISEL · Computer Engineering', body: 'Building solid engineering foundations, studying in the evenings.' },
    ],
    fundamentos: ['Algorithms and Data Structures', 'Computer Architecture', 'Computer Networks', 'SQL'],
    education: [
      {
        title: 'BSc in Computer Science and Engineering',
        org: 'ISEL, Lisbon School of Engineering',
        period: 'in progress',
        note: 'Evening programme, current average 15.9/20. Completed: Algorithms and Data Structures · Computer Architecture · Computer Networks · Introduction to Web Programming · Introduction to Information Systems.',
      },
    ],
    projects: [
      proj('valejas', 'Sports club · platform', 'Platform for the Valejas club in Oeiras: online shop with MB WAY and Multibanco, sign-ups and membership requests, a private area for the board and announcements posted automatically to social media.'),
      proj('greenbond', 'Finance · public sector', 'Asset management and tokenisation platform for public sector organisations. Four languages and a Google accessibility score of 100/100.'),
      proj('ludy', 'E-commerce · personalisation', 'Shop for made-to-order planners, from order to delivery, with its own identity. Over 800 planners delivered.'),
      proj('cnr', 'Services · pets', 'Digital presence for a dog daycare and hotel in Sintra. Bookings, services and gallery, with a warm, friendly tone.'),
      proj('gentle', 'Events · production', 'Event production, booking and coordination in Lisbon. Multi-section site with Playwright end-to-end tests.'),
      proj('queenbee', 'Beauty · hair extensions', 'A bright, confident redesign for a hair extension specialist in Benfica, Lisbon.'),
      proj('supra', 'Services · barbershop', 'Vintage landing page for a barbershop in São Domingos de Benfica, with direct booking by phone and WhatsApp.'),
    ],
    apps: [
      {
        name: 'Barata Studio', status: 'Live', stack: 'HTML · CSS · JavaScript',
        description: 'My custom website studio: a site in four languages, an interactive terminal and automatic dark mode.',
        logo: true,
        links: [{ label: 'Visit site', href: 'https://baratastudio.com/en/' }, { label: 'Code', href: 'https://github.com/bertobarata/baratastudio' }],
      },
      {
        name: 'Meet Tracker', status: 'On the App Store', stack: 'SwiftUI · SwiftData · CloudKit',
        description: 'iPhone app that logs the day’s sales activity and builds the weekly report. It started as a React web app and became native. No accounts: data stays on each person’s iPhone and iCloud.',
        icon: '/images/projects/meet-tracker-icon.webp',
        links: [{ label: 'View on the App Store', href: 'https://apps.apple.com/pt/app/meet-tracker/id6813061781' }],
      },
      {
        name: 'App TVDE', status: 'In development', stack: 'iOS and Android',
        description: 'Prep for the Portuguese TVDE ride-hailing driver exam: 653 questions with explanations, road signs and spaced-repetition review.',
        icon: '/images/projects/tvde-icon.webp',
        links: [{ label: 'Visit site', href: 'https://apptvde.store' }],
      },
      {
        name: 'FINE RAG', status: 'Prototype', stack: 'Next.js · Ollama · LanceDB',
        description: 'Assistant that answers questions about Portuguese mortgage disclosure sheets (FINE) from the PDFs themselves, running locally, with no data leaving the computer.',
        mono: 'F', links: [],
      },
    ],
    ui: {
      skip: 'Skip to content',
      hello: 'Hi, my name is',
      iam: 'I’m',
      seeWork: 'See projects →',
      talk: 'Get in touch',
      aboutTitle: 'One person, three fronts, the same care in each.',
      aboutBio: 'Born in Lisbon, engineer in the making and obsessed with detail. I like turning ideas into things that work, from the first sketch to deploy, and leaving them better than I found them.',
      photoAlt: 'Berto Barata in a suit and overcoat, in a night portrait in Lisbon',
      skillsTitle: 'Technologies I have worked with.',
      fundamentos: 'Foundations',
      idiomas: 'Languages',
      workTitle: 'Client projects.',
      workLede: 'Sites delivered to real businesses, from brief to deploy.',
      live: 'live',
      wip: 'in progress',
      visit: 'Visit site ↗',
      code: 'Code',
      siteOf: 'Website for',
      appsTitle: 'In development.',
      appsLede: 'Apps and side projects, designed and built by me.',
      eduTitle: 'On the way to becoming an engineer.',
      contactEyebrow: 'Contact',
      contactTitle: 'Have a project in mind?',
      contactLede: 'Custom websites and apps, from brief to launch. Write to me and let’s talk.',
      next: 'Next',
      top: 'Top',
      nextAria: 'Next section',
      topAria: 'Back to top',
      langLabel: 'Language',
    },
  },
};

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
  { name: 'Swift', slug: 'siSwift' },
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
