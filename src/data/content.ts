/**
 * Content configuration for 150 Mapas Mentais de Cultura Indígena para Professores
 * All URLs, copy, and settings can be easily customized here.
 */

export interface MindMapSlide {
  id: string;
  title: string;
  subtitle: string;
  theme: string;
  imageUrl: string;
}

export interface DemoSlide {
  id: string;
  senderName: string;
  time: string;
  incomingMessage: string;
  imageUrl: string;
  outgoingMessage: string;
}

export interface BonusItem {
  id: number;
  name: string;
  description: string;
  originalPrice: string;
  imageUrl: string;
}

export interface Testimonial {
  id: number;
  author: string;
  role: string;
  text: string;
  rating: number;
}

export interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

export const SITE_CONFIG = {
  productName: "+150 Mapas Mentais de Cultura Indígena para Professores",
  headlineHighlighted: "Com +150 Mapas Mentais",
  headlineRest: "Ensine a Cultura Indígena Prontos",
  subheadline: "Economize tempo de preparação com +150 mapas mentais ilustrados, organizados por temas e prontos para imprimir ou apresentar.",
  
  // Section 1
  announcementDate: "28/10/2026",
  announcementText: "OFERTA ESPECIAL DISPONÍVEL APENAS HOJE 28/10/2026",
  
  // Images
  mainMockupUrl: "https://i.postimg.cc/cCGgdnht/mockup-princip.webp",
  
  // Social Proof
  teacherCount: "+2.367 Professores já utilizam em suas aulas",
  
  // Checkout URLs
  checkoutEssentialUrl: "https://pay.wiapy.com/52_1H4UOY1SZ",
  checkoutCompleteUrl: "https://pay.wiapy.com/tXr8DXukxitq",
};

export const MIND_MAP_SLIDES: MindMapSlide[] = [
  {
    id: "mapa-1",
    title: "Povos Indígenas do Brasil",
    subtitle: "Diversidade, territórios e demografia",
    theme: "Territórios e Demografia",
    imageUrl: "https://i.postimg.cc/y6RpnCSg/mapa01.webp",
  },
  {
    id: "mapa-2",
    title: "Troncos Linguísticos: Tupi e Macro-Jê",
    subtitle: "Riqueza e variedades linguísticas",
    theme: "Linguística e Comunicação",
    imageUrl: "https://i.postimg.cc/tg72xKjx/mapa08.webp",
  },
  {
    id: "mapa-3",
    title: "Arte plumária, cestaria e cerâmica",
    subtitle: "Técnicas milenares e significados sagrados",
    theme: "Artes e Manufaturas",
    imageUrl: "https://i.postimg.cc/7h1V4Dgm/mapa05.webp",
  },
  {
    id: "mapa-4",
    title: "Pinturas Corporais e Grafismos",
    subtitle: "Identidade, rituais e simbologias",
    theme: "Tradições e Cosmologias",
    imageUrl: "https://i.postimg.cc/L6TT094f/mapa14.webp",
  },
  {
    id: "mapa-5",
    title: "Contribuições na Culinária e Agricultura",
    subtitle: "Mandioca, milho, ervas e técnicas de plantio",
    theme: "Saberes e Alimentação",
    imageUrl: "https://i.postimg.cc/SND6fgVX/mapa09.webp",
  },
];

export const WHAT_YOU_RECEIVE = [
  "+150 mapas mentais ilustrados",
  "Culturas dos povos indígenas brasileiros",
  "Tradições, costumes e conhecimentos",
  "Arte e manifestações culturais",
  "Línguas e diversidade dos povos indígenas",
  "Contribuições indígenas para a cultura brasileira",
  "Material pronto para imprimir e apresentar",
  "Acesso imediato e vitalício",
];

export const BONUSES: BonusItem[] = [
  {
    id: 1,
    name: "+100 Atividades de Cultura Indígena",
    description: "Atividades prontas para imprimir e aplicar em sala de aula.",
    originalPrice: "R$ 57,90",
    imageUrl: "https://i.postimg.cc/PqY1YgMR/bonus01-(1).webp",
  },
  {
    id: 2,
    name: "Kit Consciência Indígena",
    description: "Materiais pedagógicos para trabalhar o respeito e a valorização das culturas indígenas.",
    originalPrice: "R$ 67,90",
    imageUrl: "https://i.postimg.cc/Df89qHv2/bonus02-(1).webp",
  },
  {
    id: 3,
    name: "Feira Cultural dos Povos Indígenas",
    description: "Ideias e roteiros práticos para organizar projetos culturais na escola.",
    originalPrice: "R$ 77,90",
    imageUrl: "https://i.postimg.cc/jqw1WfcW/bonus03-(1).webp",
  },
  {
    id: 4,
    name: "+50 Dinâmicas de Cultura Indígena para Sala de Aula",
    description: "Jogos, debates e dinâmicas interativas para engajar seus alunos.",
    originalPrice: "R$ 47,90",
    imageUrl: "https://i.postimg.cc/d175yM8z/bonus04-(1).webp",
  },
];

export const DEMO_SLIDES: DemoSlide[] = [
  {
    id: "demo-1",
    senderName: "Prof. Juliana Rocha",
    time: "14:27",
    incomingMessage: "Oi! Passando pra avisar que deu tudo certo por aqui com os mapas mentais! Consegui imprimir a coleção para a aula de amanhã.",
    imageUrl: "", // URL_DEMONSTRACAO_1
    outgoingMessage: "Que notícia maravilhosa! Seus alunos vão amar a visualização colorida e detalhada.",
  },
  {
    id: "demo-2",
    senderName: "Prof. Marcos Andrade",
    time: "10:15",
    incomingMessage: "Projetei os mapas na lousa digital hoje. A atenção da turma foi total, eles adoraram entender os grafismos!",
    imageUrl: "", // URL_DEMONSTRACAO_2
    outgoingMessage: "Excelente ideia usar na lousa digital! Fica muito nítido para todos acompanharem.",
  },
  {
    id: "demo-3",
    senderName: "Prof. Renata Silveira",
    time: "16:40",
    incomingMessage: "Montei um mural temático no corredor da escola com os mapas sobre troncos linguísticos e tradições.",
    imageUrl: "", // URL_DEMONSTRACAO_3
    outgoingMessage: "Incrível! Toda a comunidade escolar aprende junta assim.",
  },
  {
    id: "demo-4",
    senderName: "Prof. Cristina V.",
    time: "11:05",
    incomingMessage: "Economizei pelo menos 4 horas de pesquisa essa semana. O conteúdo é completo e tem respaldo histórico impecável.",
    imageUrl: "", // URL_DEMONSTRACAO_4
    outgoingMessage: "Esse é o objetivo: poupar o tempo do professor com conteúdo seguro e bem preparado.",
  },
  {
    id: "demo-5",
    senderName: "Prof. Eduardo Santos",
    time: "09:30",
    incomingMessage: "Os mapas sobre a culinária e botânica indígena renderam uma das melhores discussões do bimestre.",
    imageUrl: "", // URL_DEMONSTRACAO_5
    outgoingMessage: "São tópicos fundamentais e muito ricos para trabalhar interdisciplinaridade!",
  },
  {
    id: "demo-6",
    senderName: "Prof. Beatriz M.",
    time: "15:18",
    incomingMessage: "Imprimi plastificado em formato A4 para os alunos manusearem em grupos. Ficou perfeito!",
    imageUrl: "", // URL_DEMONSTRACAO_6
    outgoingMessage: "Plastificar é uma ótima dica para manter o material preservado por vários anos.",
  },
  {
    id: "demo-7",
    senderName: "Prof. Patrícia Lima",
    time: "17:50",
    incomingMessage: "Material didático de verdade. Direto ao ponto, visualmente atrativo e com respeito aos povos originários.",
    imageUrl: "", // URL_DEMONSTRACAO_7
    outgoingMessage: "Muito obrigado pelo relato carinhoso, Patrícia!",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    author: "Carla M.",
    role: "Professora do Ensino Fundamental",
    text: "Me ajudou muito a organizar as aulas. Os mapas são didáticos, claros e fáceis de apresentar para os alunos.",
    rating: 5,
  },
  {
    id: 2,
    author: "Fernanda S.",
    role: "Coordenadora Pedagógica",
    text: "Eu gastava muito tempo procurando conteúdos separados. Agora tenho tudo organizado por temas.",
    rating: 5,
  },
  {
    id: 3,
    author: "Juliana P.",
    role: "Professora de História e Geografia",
    text: "Usei alguns dos mapas com minha turma e eles adoraram a explicação muito mais visual.",
    rating: 5,
  },
];

export const FAQS: FaqItem[] = [
  {
    id: 1,
    question: "Como recebo o material?",
    answer: "O acesso é enviado imediatamente após a confirmação do pagamento.",
  },
  {
    id: 2,
    question: "Para quais professores o material é indicado?",
    answer: "O material é indicado para professores do Ensino Fundamental que desejam trabalhar conteúdos relacionados às culturas dos povos indígenas brasileiros.",
  },
  {
    id: 3,
    question: "Posso imprimir?",
    answer: "Sim. Os mapas mentais são disponibilizados em formato digital e podem ser impressos para utilização em sala de aula.",
  },
  {
    id: 4,
    question: "Posso apresentar os mapas em sala?",
    answer: "Sim. Os mapas podem ser utilizados em apresentações e explicações durante as aulas.",
  },
  {
    id: 5,
    question: "Tem garantia?",
    answer: "Sim. Você tem 7 dias de garantia após a compra.",
  },
  {
    id: 6,
    question: "O acesso é vitalício?",
    answer: "Sim. Após a compra, você poderá acessar o material sem prazo de expiração.",
  },
];
