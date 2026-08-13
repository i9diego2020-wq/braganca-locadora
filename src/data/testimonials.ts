import { Testimonial } from '../types';

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Mestre Carlos Eduardo',
    role: 'Mestre de Obras',
    company: 'CE Construtora',
    city: 'Bragança Paulista - SP',
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    comment: 'Liguei de manhã precisando de um martelete de 30kg com urgência na obra do Jardim Europa. Em menos de 1h30 o equipamento estava entregue e funcionando. Salvou o cronograma da concretagem!',
    equipmentRented: 'Martelete Demolidor 30kg + Betoneira',
    date: 'Há 3 dias'
  },
  {
    id: 't2',
    name: 'Engª Fernanda Lima',
    role: 'Engenheira Civil',
    company: 'FL Engenharia',
    city: 'Atibaia - SP',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    comment: 'Alugamos toda a estrutura de andaimes e caçambas para reforma de fachada comercial. Preço honesto, máquinas novas e revisadas, além de excelente suporte por WhatsApp.',
    equipmentRented: 'Andaimes Tubulares & Caçambas',
    date: 'Há 1 semana'
  },
  {
    id: 't3',
    name: 'Roberto Souza',
    role: 'Proprietário de Imóvel',
    city: 'Extrema - MG',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    comment: 'Atendimento nota 10. Precisei de um compactador sapo para a garagem da minha casa nova. O técnico me explicou exatamente como ligar e manusear com segurança. Recomendo muito!',
    equipmentRented: 'Compactador Tipo Sapo',
    date: 'Há 2 semanas'
  }
];
