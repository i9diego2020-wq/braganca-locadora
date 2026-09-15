import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Bragança Locadora | Locação de Equipamentos em Bragança Paulista e Região',
  description:
    'Locação de equipamentos para construção em Bragança Paulista. Martelete, andaime, compactador, betoneira e caçamba. Entrega rápida e orçamento online via WhatsApp.',
  metadataBase: new URL('https://www.bragancalocadora.com.br'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.bragancalocadora.com.br/',
    title: 'Bragança Locadora | Locação de Equipamentos em Bragança Paulista',
    description:
      'Aluguel de martelete, andaime, compactador, betoneira e caçamba em Bragança Paulista. Entrega no mesmo dia com frete grátis na cidade!',
    locale: 'pt_BR',
    siteName: 'Bragança Locadora',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bragança Locadora | Locação de Equipamentos em Bragança Paulista',
    description:
      'Aluguel de martelete, andaime, compactador, betoneira e caçamba. Entrega no mesmo dia. Orçamento pelo WhatsApp!',
  },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://www.bragancalocadora.com.br/#business',
  name: 'Bragança Locadora',
  alternateName: 'Bragança Locadora de Equipamentos',
  description:
    'Locação de equipamentos para construção civil em Bragança Paulista e região. Aluguel de martelete demolidor, andaime tubular, compactador de solo, betoneira 400L e caçamba de entulho. Entrega no mesmo dia com frete grátis na cidade.',
  url: 'https://www.bragancalocadora.com.br/',
  telephone: '+55-11-96593-9300',
  priceRange: '$$',
  currenciesAccepted: 'BRL',
  paymentAccepted: 'Pix, Cartão de Crédito, Cartão de Débito, Boleto Bancário',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '07:00',
      closes: '18:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '07:00',
      closes: '13:00',
    },
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Bragança Paulista',
    addressRegion: 'SP',
    addressCountry: 'BR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -22.9538,
    longitude: -46.5416,
  },
  areaServed: [
    { '@type': 'City', name: 'Bragança Paulista', sameAs: 'https://www.wikidata.org/wiki/Q1026694' },
    { '@type': 'City', name: 'Atibaia' },
    { '@type': 'City', name: 'Itatiba' },
    { '@type': 'City', name: 'Extrema' },
    { '@type': 'City', name: 'Mairiporã' },
    { '@type': 'City', name: 'Socorro' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Catálogo de Equipamentos para Locação',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Aluguel de Martelete Demolidor 30kg',
          description: 'Locação de martelete demolidor de 30kg para quebra de concreto, pisos e estruturas em Bragança Paulista.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Locação de Andaime Tubular',
          description: 'Aluguel de andaimes tubulares para obras, fachadas e reformas em Bragança Paulista.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Aluguel de Compactador de Solo Tipo Sapo',
          description: 'Locação de compactador de percussão (sapo) para valas, fundações e aterros em Bragança Paulista.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Locação de Betoneira 400 Litros',
          description: 'Aluguel de betoneira 400L elétrica para preparo de concreto e argamassa em obras.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Caçamba de Entulho Bragança Paulista',
          description: 'Locação de caçamba estacionária 5m³ para descarte de entulho com destinação ecológica certificada.',
        },
      },
    ],
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    bestRating: '5',
    worstRating: '1',
    ratingCount: '47',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+55-11-96593-9300',
    contactType: 'customer service',
    availableLanguage: 'Portuguese',
    areaServed: 'BR',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Como funciona a entrega do equipamento no meu endereço?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nossa equipe própria entrega e retira o equipamento diretamente na sua obra em Bragança Paulista e toda a região. No momento da entrega, nosso técnico faz um teste operacional e orienta sobre os cuidados básicos de uso.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quais documentos preciso para alugar como Pessoa Física ou Jurídica?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Para Pessoa Física: Documento com foto (RG ou CNH), CPF e comprovante de endereço recente. Para Pessoa Jurídica (Empresas/Construtoras): Cartão CNPJ, Contrato Social e documento do responsável. O processo de aprovação de cadastro é feito em minutos via WhatsApp!',
      },
    },
    {
      '@type': 'Question',
      name: 'Qual o tempo mínimo de locação de um equipamento?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oferecemos diárias avulsas (24 horas), pacotes semanais (7 dias com desconto), quinzenais (15 dias) e mensais (30 dias com o maior desconto). Para caçambas de entulho, a permanência padrão é de 3 a 5 dias.',
      },
    },
    {
      '@type': 'Question',
      name: 'E se o equipamento apresentar alguma falha durante o uso?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nossa garantia de funcionamento é imediata! Se o equipamento apresentar qualquer problema técnico, enviamos nossa equipe de assistência técnica no mesmo dia para consertar ou efetuar a troca por um equipamento reserva sem custo adicional.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quais as formas de pagamento aceitas?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Aceitamos Pix, cartões de crédito/débito na entrega, e faturamento por boleto bancário mediante aprovação prévia para empresas e construtoras.',
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Montserrat:wght@600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body className="bg-[#fff8f6] text-[#261812] antialiased">
        {children}
      </body>
    </html>
  );
}
