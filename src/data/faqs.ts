import { FAQItem } from '../types';

export const FAQS: FAQItem[] = [
  {
    question: 'Como funciona a entrega do equipamento no meu endereço?',
    answer: 'Nossa equipe própria entrega e retira o equipamento diretamente na sua obra em Bragança Paulista e toda a região. No momento da entrega, nosso técnico faz um teste operacional e orienta sobre os cuidados básicos de uso.',
    category: 'entrega'
  },
  {
    question: 'Quais documentos preciso para alugar como Pessoa Física ou Jurídica?',
    answer: 'Para Pessoa Física: Documento com foto (RG ou CNH), CPF e comprovante de endereço recente. Para Pessoa Jurídica (Empresas/Construtoras): Cartão CNPJ, Contrato Social e documento do responsável. O processo de aprovação de cadastro é feito em minutos via WhatsApp!',
    category: 'documentos'
  },
  {
    question: 'Qual o tempo mínimo de locação de um equipamento?',
    answer: 'Oferecemos diárias avulsas (24 horas), pacotes semanais (7 dias com desconto), quinzenais (15 dias) e mensais (30 dias com o maior desconto). Para caçambas de entulho, a permanência padrão é de 3 a 5 dias.',
    category: 'entrega'
  },
  {
    question: 'E se o equipamento apresentar alguma falha durante o uso?',
    answer: 'Nossa garantia de funcionamento é imediata! Se o equipamento apresentar qualquer problema técnico, enviamos nossa equipe de assistência técnica no mesmo dia para consertar ou efetuar a troca por um equipamento reserva sem custo adicional.',
    category: 'manutencao'
  },
  {
    question: 'Quais as formas de pagamento aceitas?',
    answer: 'Aceitamos Pix, cartões de crédito/débito na entrega, e faturamento por boleto bancário mediante aprovação prévia para empresas e construtoras.',
    category: 'pagamento'
  }
];
