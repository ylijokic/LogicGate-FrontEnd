import { Spectator, createComponentFactory } from '@ngneat/spectator';
import { MockComponent } from 'ng-mocks';
import { of } from 'rxjs/internal/observable/of';

import { AnimalCardComponent } from './animal-card.component';
import { AnimalService } from './animal.service';
import { AnimalClass } from './enums/animal-class';
import { Continent } from './enums/continents';
import { MainComponent } from './main.component';
import { IStringMap } from './utils/string-map';
import { Animal } from './models/animal';

describe('MainComponent', () => {
  let spectator: Spectator<MainComponent>;
  const createComponent = createComponentFactory({
    component: MainComponent,
    declarations: [
      MockComponent(AnimalCardComponent),
    ],
    detectChanges: false,
    mocks: [ AnimalService ],
  });

  const initial: IStringMap<Animal[]> = getMockAnimalsByContinent();
  const expected: IStringMap<Animal[]> = getMockAnimalsByClass();

  beforeEach(() => {
    spectator = createComponent();
    spectator.inject(AnimalService).getAnimalsByContinent.and.returnValue(of(initial));
    spectator.detectChanges();
  });

  it('should be defined', () => {
    expect(spectator.component).toBeDefined();
  });

  it('should sort animals by class, alphabetize by name and remove duplicates', () => {
    spectator.component.getAnimalsByClass(initial);
    expect(spectator.component.animalsByClass).toEqual(expected);
  });

  function getMockAnimalsByContinent(): IStringMap<Animal[]> {
    return {
      [Continent.AFRICA]: [
        new Animal({
          class: AnimalClass.MAMMAL,
          id: 'H7vLUZhb',
          name: 'African bush elephant',
        }),
        new Animal({
          class: AnimalClass.BIRD,
          id: 'PKAw4l6S',
          name: 'Common Barn Owl',
        }),
      ],
      [Continent.ANTARCTICA]: [
        new Animal({
          class: AnimalClass.BIRD,
          id: '2q3wJmx5',
          name: 'Chinstrap Penguin',
        }),
      ],
      [Continent.ASIA]: [
        new Animal({
          class: AnimalClass.BIRD,
          id: 'PKAw4l6S',
          name: 'Common Barn Owl',
        }),
      ],
    };
  }

  function getMockAnimalsByClass(): IStringMap<Animal[]> {
    return {
      [AnimalClass.MAMMAL]: [
        new Animal({
          class: AnimalClass.MAMMAL,
          id: 'H7vLUZhb',
          name: 'African bush elephant',
        }),
      ],
      [AnimalClass.BIRD]: [
        new Animal({
          class: AnimalClass.BIRD,
          id: '2q3wJmx5',
          name: 'Chinstrap Penguin',
        }),
        new Animal({
          class: AnimalClass.BIRD,
          id: 'PKAw4l6S',
          name: 'Common Barn Owl',
        }),
      ],
    };
  }
});
