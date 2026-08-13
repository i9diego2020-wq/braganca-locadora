import { WorkCombo } from '../types';

export const WORK_COMBOS: WorkCombo[] = [
  {
    id: 'combo-concretagem',
    title: 'Combo Concretagem Completa',
    description: 'Tudo pronto para preparar e lançar concreto na sua laje ou viga sem paradas.',
    iconName: 'Betoneira',
    equipmentIds: ['betoneira-400l-eletrica', 'guincho-de-coluna-400kg'],
    discountPercentage: 15
  },
  {
    id: 'combo-demolicao',
    title: 'Combo Demolição & Limpeza',
    description: 'Derrube alvenaria e remova os resíduos imediatamente em caçamba regulamentada.',
    iconName: 'Martelete',
    equipmentIds: ['martelete-demolidor-30kg', 'cacamba-entulho-5m3'],
    discountPercentage: 12
  },
  {
    id: 'combo-fachada',
    title: 'Combo Reforma de Fachada',
    description: 'Estrutura completa de andaimes com trava e pranchões para pintura e reboque seguro.',
    iconName: 'Andaime',
    equipmentIds: ['andaime-tubular-1m', 'martelete-rompedor-10kg'],
    discountPercentage: 10
  },
  {
    id: 'combo-terraplanagem',
    title: 'Combo Preparo de Solo & Pavimento',
    description: 'Compacte o solo e assente pisos ou contrapiso de forma profissional e sem trincas.',
    iconName: 'Sapo',
    equipmentIds: ['compactador-sapo-gasolina', 'placa-vibratoria-gasolina'],
    discountPercentage: 15
  }
];
