export interface GeologicalEra {
  name: string;
  period: string;
  startMya: number;
  endMya: number;
  description: string;
  color: string;
  continentConfig: string;
  climate: string;
  keyEvents: string[];
}

export const GEOLOGICAL_ERAS: GeologicalEra[] = [
  {
    name: 'Pennsylvanian',
    period: 'Late Carboniferous',
    startMya: 323,
    endMya: 299,
    description: 'Vast swamp forests covered the land. Giant insects thrived in the oxygen-rich atmosphere. Coal deposits formed from the massive plant life.',
    color: '#2d5a27',
    continentConfig: 'pangaea_forming',
    climate: 'Warm and humid, with extensive tropical rainforests',
    keyEvents: [
      'Formation of extensive coal deposits',
      'Giant insects (Meganeura, 70cm wingspan dragonflies)',
      'First reptiles appear',
      'Pangaea begins assembling',
    ],
  },
  {
    name: 'Permian',
    period: 'Permian',
    startMya: 299,
    endMya: 252,
    description: 'Pangaea fully assembled. Diverse reptile lineages evolved. Ended with the largest mass extinction in Earth history — the Great Dying.',
    color: '#8b4513',
    continentConfig: 'pangaea',
    climate: 'Increasingly arid, extreme seasons on supercontinent',
    keyEvents: [
      'Pangaea supercontinent fully formed',
      'Therapsids (mammal ancestors) diversify',
      'Massive Siberian Traps volcanism',
      'Great Dying: 96% of marine species extinct',
    ],
  },
  {
    name: 'Triassic',
    period: 'Triassic',
    startMya: 252,
    endMya: 201,
    description: 'Recovery from the Great Dying. First dinosaurs and mammals appeared. Pangaea began to break apart.',
    color: '#d4a574',
    continentConfig: 'pangaea_breaking',
    climate: 'Hot and dry, no polar ice caps',
    keyEvents: [
      'First dinosaurs appear (~230 MYA)',
      'First mammals evolve',
      'Pangaea begins rifting',
      'Triassic-Jurassic extinction event',
    ],
  },
  {
    name: 'Jurassic',
    period: 'Jurassic',
    startMya: 201,
    endMya: 145,
    description: 'The age of giants. Massive sauropods roamed the land. Pangaea split into Laurasia and Gondwana. First birds evolved.',
    color: '#3a7d44',
    continentConfig: 'laurasia_gondwana',
    climate: 'Warm and humid globally, lush vegetation',
    keyEvents: [
      'Giant sauropods dominate (Brachiosaurus, Diplodocus)',
      'First birds (Archaeopteryx)',
      'Pangaea splits into Laurasia + Gondwana',
      'Atlantic Ocean begins forming',
    ],
  },
  {
    name: 'Cretaceous',
    period: 'Cretaceous',
    startMya: 145,
    endMya: 66,
    description: 'Flowering plants transformed ecosystems. T. rex and Triceratops thrived. Ended with the asteroid impact that killed the dinosaurs.',
    color: '#4a8c5c',
    continentConfig: 'fragmenting',
    climate: 'Warm greenhouse, high sea levels',
    keyEvents: [
      'Flowering plants (angiosperms) diversify',
      'T. rex, Triceratops, Velociraptor',
      'Continents approach modern positions',
      'Chicxulub asteroid impact → K-Pg extinction',
    ],
  },
  {
    name: 'Paleogene',
    period: 'Paleogene',
    startMya: 66,
    endMya: 23,
    description: 'Mammals diversified rapidly to fill niches left by dinosaurs. Primates, whales, and horses evolved. India collided with Asia forming the Himalayas.',
    color: '#6b8e23',
    continentConfig: 'near_modern',
    climate: 'Warm early, then gradual cooling',
    keyEvents: [
      'Rapid mammal diversification',
      'First primates and early whales',
      'India-Asia collision → Himalayas rise',
      'Antarctic ice sheet forms (~34 MYA)',
    ],
  },
  {
    name: 'Neogene',
    period: 'Neogene',
    startMya: 23,
    endMya: 2.6,
    description: 'Grasslands expanded worldwide. Great apes evolved. The Isthmus of Panama formed, connecting the Americas and altering ocean currents.',
    color: '#9acd32',
    continentConfig: 'modern',
    climate: 'Cooling trend, grasslands expand',
    keyEvents: [
      'Grasslands spread globally',
      'Great apes evolve in Africa',
      'Isthmus of Panama forms',
      'Mediterranean dried up (Messinian crisis)',
    ],
  },
  {
    name: 'Quaternary',
    period: 'Quaternary',
    startMya: 2.6,
    endMya: 0,
    description: 'The age of ice ages and humans. Glacial cycles shaped the landscape. Homo sapiens emerged and spread across the globe.',
    color: '#87ceeb',
    continentConfig: 'modern',
    climate: 'Glacial-interglacial cycles, current interglacial',
    keyEvents: [
      'Multiple ice ages reshape continents',
      'Homo sapiens emerge (~300,000 years ago)',
      'Megafauna extinctions',
      'Human civilization develops (~10,000 years ago)',
    ],
  },
];
