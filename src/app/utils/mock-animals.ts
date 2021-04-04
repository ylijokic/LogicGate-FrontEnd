import { Animal } from '../models/animal';
import { AnimalClass } from '../enums/animal-class';
import { Continent } from '../enums/continents';
import { IStringMap } from './string-map';

export const ANIMALS: IStringMap<Animal[]> = {
  [Continent.AFRICA]: [
    new Animal({
      class: AnimalClass.MAMMAL,
      id: 'H7vLUZhb',
      lifespan: '60 – 70 years',
      mass: 'Male: 13,000 lbs (Adult), Female: 6,600 lbs (Adult)',
      name: 'African bush elephant',
      scientificName: 'Loxodonta africana',
    }),
    new Animal({
      class: AnimalClass.BIRD,
      id: 'PKAw4l6S',
      lifespan: '4 - 20 years',
      mass: '0.95 – 1.4 lbs',
      name: 'Common Barn Owl',
      scientificName: 'Tyto alba',
    }),
    new Animal({
      class: AnimalClass.REPTILE,
      id: 'h7A2gViF',
      lifespan: '11 - 20 years',
      mass: '1.15 - 5.3 lbs',
      name: 'Black Mamba',
      scientificName: 'Dendroaspis polylepis',
    }),
  ],
  [Continent.ANTARCTICA]: [
    new Animal({
      class: AnimalClass.BIRD,
      id: '2q3wJmx5',
      lifespan: '15 – 20 years',
      mass: '6.6 – 11 lbs',
      name: 'Chinstrap Penguin',
      scientificName: 'Pygoscelis antarcticus',
    }),
  ],
  [Continent.ASIA]: [
    new Animal({
      class: AnimalClass.BIRD,
      id: 'PKAw4l6S',
      lifespan: '4 - 20 years',
      mass: '0.95 – 1.4 lbs',
      name: 'Common Barn Owl',
      scientificName: 'Tyto alba',
    }),
    new Animal({
      class: AnimalClass.MAMMAL,
      id: 'jr467jIE',
      lifespan: '20 years',
      mass: 'Male: 190 - 275 lbs, Female: 150 – 220 lbs',
      name: 'Giant Panda',
      scientificName: 'Ailuropoda melanoleuca',
    }),
    new Animal({
      class: AnimalClass.AMPHIBIAN,
      id: 'uOnhzG73',
      lifespan: '50 years',
      mass: '55 – 66 lbs',
      name: 'Chinese Giant Salamander',
      scientificName: 'Andrias davidianus',
    }),
  ],
  [Continent.AUSTRALASIA]: [
    new Animal({
      class: AnimalClass.REPTILE,
      id: 'j2yXDt6F',
      lifespan: '15 - 20 years',
      mass: '35 - 55 grams',
      name: 'Crested gecko',
      scientificName: 'Correlophus ciliatus',
    }),
    new Animal({
      class: AnimalClass.BIRD,
      id: 'DutJRz30',
      lifespan: '20 years',
      mass: '11 ounces',
      name: 'Kookaburra',
      scientificName: 'Dacelo',
    }),
  ],
  [Continent.EUROPE]: [
    new Animal({
      class: AnimalClass.AMPHIBIAN,
      id: 'N9qD3Dj8',
      lifespan: '10 years',
      mass: '12 grams',
      name: 'Alpine salamander',
      scientificName: 'Salamandra atra',
    }),
    new Animal({
      class: AnimalClass.BIRD,
      id: 'PKAw4l6S',
      lifespan: '4 - 20 years',
      mass: '0.95 – 1.4 lbs',
      name: 'Common Barn Owl',
      scientificName: 'Tyto alba',
    }),
  ],
  [Continent.NORTHAMERICA]: [
    new Animal({
      class: AnimalClass.MAMMAL,
      id: 'P7Q2p7x4',
      lifespan: '15 – 25 years',
      mass: 'Male: 840 – 1,500 lbs (Adult), Female: 440 – 790 lbs (Adult)',
      name: 'Moose',
      scientificName: 'Alces alces',
    }),
    new Animal({
      class: AnimalClass.REPTILE,
      id: 'weJ6eZo2',
      lifespan: '10 years',
      mass: '10 - 15 lbs',
      name: 'Eyelash viper',
      scientificName: 'Bothriechis schlegelii',
    }),
    new Animal({
      class: AnimalClass.AMPHIBIAN,
      id: 'Q8HgFAv9',
      lifespan: '7 - 9 years',
      mass: '0.25 ounces',
      name: 'Gray treefrog',
      scientificName: 'Hyla versicolor',
    }),
  ],
  [Continent.SOUTHAMERICA]: [
    new Animal({
      class: AnimalClass.REPTILE,
      id: 'weJ6eZo2',
      lifespan: '10 years',
      mass: '10 - 15 lbs',
      name: 'Eyelash viper',
      scientificName: 'Bothriechis schlegelii',
    }),
  ]
};
