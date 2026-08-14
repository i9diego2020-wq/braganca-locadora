import { Equipment } from '../types';

export const EQUIPMENTS: Equipment[] = [
  {
    id: 'martelete-demolidor-30kg',
    name: 'Martelete Demolidor 30kg',
    category: 'demolicao',
    categoryName: 'Demolição',
    tagline: 'Ideal para demolições de pisos, vigas e estruturas pesadas',
    description: 'O martelete demolidor de 30kg é o equipamento mais potente da categoria para quebra de concreto de alta resistência, pisos de concreto armado, sapatas e fundações com rapidez e eficiência sem esforço físico excessivo.',
    imageUrl: '/src/assets/images/martelete.png',
    dailyRate: 110,
    weeklyRate: 480,
    monthlyRate: 1250,
    featured: true,
    inStock: true,
    powerType: 'Elétrico 220V',
    weight: '30 kg',
    specifications: [
      { label: 'Energia de Impacto', value: '68 Joules' },
      { label: 'Impactos por minuto', value: '1.000 ipm' },
      { label: 'Tensão Elétrica', value: '220V Monofásico' },
      { label: 'Potência', value: '2.000W' },
      { label: 'Encaixe', value: 'Sextavado 28mm' },
    ],
    popularUses: [
      'Quebra de lajes e pisos grossos',
      'Remoção de concreto armado',
      'Abertura de canaletas pesadas',
      'Demolição estrutural'
    ]
  },
  {
    id: 'andaime-tubular-1m',
    name: 'Andaime Tubular 1,0m x 1,0m',
    category: 'elevacao',
    categoryName: 'Andaimes & Elevação',
    tagline: 'Segurança e praticidade para trabalhos em altura',
    description: 'Paineis de andaime tubular fabricados em aço carbono de alta resistência com encaixe rápido e seguro. Acompanha diagonais, travessas e rodízios opcionais para rápida montagem.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDu97dGKJensy0xAC-v3wwI5LBcbIJEi6axKKehXnLWzl1czkHISxiZlmlm4Uzm08DALBV6YEM0vnSb7qG2ek7uBvK_10nE2tWytVeuVkSt1uYMJ3tLVQ5MDv7EJkP32js2NXeC1ZpmwKqm8to0TP1DAi7SFxPbaMv73EyN64y85aWCObTujuBLtp3rPZRNSPNpRMOWEWj5h8xvqogSpZRVvYRnPl4Hm2gwQqIYWSmPKjNXMBKA_Rod',
    dailyRate: 18,
    weeklyRate: 65,
    monthlyRate: 160,
    featured: true,
    inStock: true,
    powerType: 'Manual',
    weight: '12 kg por painel',
    specifications: [
      { label: 'Dimensões (LxC)', value: '1,0m x 1,0m' },
      { label: 'Altura por Painel', value: '1,0 metro' },
      { label: 'Carga Máxima', value: '150 kg/m²' },
      { label: 'Norma de Segurança', value: 'NR-18 Cumprida' },
      { label: 'Acessórios Inclusos', value: 'Travas de segurança' },
    ],
    popularUses: [
      'Pintura e reboco de fachadas',
      'Instalação de calhas e telhados',
      'Revestimentos externos e internos',
      'Manutenção predial'
    ]
  },
  {
    id: 'compactador-sapo-gasolina',
    name: 'Compactador Tipo Sapo (Percussão)',
    category: 'compactacao',
    categoryName: 'Compactação de Solo',
    tagline: 'Compactação eficiente para diversos tipos de solo e valas',
    description: 'Compactador de percussão a gasolina (Sapo) ideal para adensamento de solos coesivos, argila, valas de tubulações e fundações de obra. Garante firmeza e evita futuras trincas no piso.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAb6mj1MtSFKoUidSAaMNamE-isaZ1j5YT3cjYV0AryTgBErvXP7dowzsREhmYyjnLX-p-l59EQ8qV3Bl-d5_mZzF1jCQIDImibzZlf4WvUTZSUBuF136UTZdbmmkZfgnQFvW82qHVG3T8OBkuYWzXF-3qKhXhdIa3mMYOFcE0Q_Jtpi_uCAO8lkChnfDPHuDC3Fhy0yP2U_m7Bz_01SzfX2821OhBhAZFAXd7uiXGXUSOCKjOHvXIq',
    dailyRate: 130,
    weeklyRate: 520,
    monthlyRate: 1390,
    featured: true,
    inStock: true,
    powerType: 'Gasolina 4 Tempos',
    weight: '75 kg',
    specifications: [
      { label: 'Força de Impacto', value: '14 kN' },
      { label: 'Profundidade de Compactação', value: 'Até 60 cm' },
      { label: 'Motor', value: 'Honda 4.0 HP 4T' },
      { label: 'Combustível', value: 'Gasolina Comum' },
      { label: 'Tamanho da Sapata', value: '280 x 330 mm' },
    ],
    popularUses: [
      'Compactação de valas e tubulações',
      'Preparo de solo para contrapiso',
      'Aterros e fundações',
      'Obras de saneamento e pavimentação'
    ]
  },
  {
    id: 'betoneira-400l-eletrica',
    name: 'Betoneira 400 Litros Monofásica',
    category: 'concreto',
    categoryName: 'Concreto & Argamassa',
    tagline: 'Mais agilidade e produtividade no preparo de concreto',
    description: 'Betoneira de 400 litros reforçada com motor elétrico blindado. Capacidade ideal para misturas contínuas de concreto e argamassa em obras de pequeno, médio e grande porte.',
    imageUrl: '/src/assets/images/betoneira.png',
    dailyRate: 85,
    weeklyRate: 360,
    monthlyRate: 890,
    featured: true,
    inStock: true,
    powerType: 'Elétrico 220V',
    weight: '160 kg',
    specifications: [
      { label: 'Capacidade do Tambor', value: '400 Litros' },
      { label: 'Rendimento de Mistura', value: '310 Litros' },
      { label: 'Motor Elétrico', value: '2.0 CV Monofásico' },
      { label: 'Proteção', value: 'Cremalheira reforçada' },
      { label: 'Rodas', value: 'Maciças para transporte fácil' },
    ],
    popularUses: [
      'Preparo de concreto para colunas e lajes',
      'Mistura de argamassa para assentamento',
      'Rendimento contínuo na pedreiragem',
      'Construção civil geral'
    ]
  },
  {
    id: 'cacamba-entulho-5m3',
    name: 'Caçamba Entulho',
    category: 'cacamba',
    categoryName: 'Caçambas & Descarte',
    tagline: 'Descarte seguro, regulamentado e consciente de entulho',
    description: 'Caçamba estacionária em chapa de aço reforçada com capacidade de 5 metros cúbicos. Inclui colocação, permanência no local pelo período contratado e destinação ecológica certificada.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDLTYccBYdFHwM59oXFJ3pf_AO6-oprzD4ln1-jcNM8YPEwtKQIqwAfUnOIqKYjSEJi4UUo64I5652qHsXU3n8WRnz47pkFuc_HfrF3xRJoullphnNvh2sSLJPji5Hq16Tiu0G4kD8Ie3RBaQhWrxfT9Wp-qCwMu0Lojtj1GaIkU6EVsAiVkzqZKLxwnU_5VBTuup21f87ZD-hOjcs9Tv4UYLDs9sr4x2g2RNJ81nXFDUQj81j8MB0i',
    dailyRate: 320,
    weeklyRate: 320,
    monthlyRate: 320,
    featured: true,
    inStock: true,
    powerType: 'Estacionária',
    weight: '450 kg (vazia)',
    specifications: [
      { label: 'Capacidade em Volume', value: '5 m³ (metros cúbicos)' },
      { label: 'Carga Máxima de Resíduo', value: 'Até 4.000 kg' },
      { label: 'Período Padrão', value: 'Até 3 a 5 dias corridos' },
      { label: 'Licença Ambiental', value: 'Aterro Licenciado Cetesb' },
      { label: 'Entrega & Retirada', value: 'Inclusa no frete local' },
    ],
    popularUses: [
      'Remoção de entulhos de alvenaria',
      'Descarte de restos de demolição',
      'Limpeza de terreno e obra',
      'Resíduos de gesso e cerâmica'
    ]
  }
];
