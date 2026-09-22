export interface NeighborhoodGroup {
  category: string;
  items: string[];
}

export const BRAGANCA_NEIGHBORHOODS: NeighborhoodGroup[] = [
  {
    category: 'Condomínios Fechados',
    items: [
      'Euroville I e II',
      'Quinta da Baroneza',
      'Vale das Águas',
      'Campos do Conde',
      'Residencial Teriva',
      'Residencial Colinas da Mantiqueira',
      'Portal das Braganças',
      'Quinta das Vinhedos',
      'Rosário de Fátima',
      'Jardim Europa',
      'Terras de Santa Cruz',
      'Villa Verde',
      'Residencial das Ilhas',
      'Jardim das Palmeiras',
      'Bosque das Pedras',
    ],
  },
  {
    category: 'Bairros & Regiões Urbanas',
    items: [
      'Taboão',
      'Centro',
      'Santa Luzia',
      'Distrito Industrial',
      'Bragança C',
      'Planejada I e II',
      'Vila Aparecida',
      'Matadouro',
      'Lavapés',
      'Santa Helena',
      'Uberaba',
      'Penha',
      'Jardim Público',
      'Parque das Blotas',
    ],
  },
];
