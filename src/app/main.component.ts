import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/models/animal';
import { IStringMap } from 'src/app/utils/string-map';
import { AnimalService } from './animal.service';

@Component({
  selector: 'fe-main',
  templateUrl: './main.component.html'
})
export class MainComponent implements OnInit {

  public animalsByClass: IStringMap<Animal[]> = {};

  constructor(private animalService: AnimalService) {}

  public ngOnInit(): void {
    this.getAnimalsByContinent();
  }

  public getAnimalsByContinent(): void {
    this.animalService.getAnimalsByContinent()
      .subscribe((animals) => {
        this.animalsByClass = this.getAnimalsByClass(animals);
      });
  }

  // Transform the "animalsByContinent" object (see mock-animals.ts) so that animals
  // across every continent are organized by "class" and alphabetized by "name".
  // Remove any duplicates. Try to make the transformation efficient as you may have
  // to manipulate a very large dataset.
  //
  // The result should be an object with a single key for each distinct animal
  // class within the dataset (mammal, reptile, bird, etc.) Each of these class
  // keys should map to a list of animal objects of that class (see the adjacent
  // test file and view the getMockAnimalsByClass() function for an example).
  // These lists should not contain duplicates and should be alphabetized from
  // "A" to "z".
  public getAnimalsByClass(animals: IStringMap<Animal[]>): IStringMap<Animal[]> {
    // 1. Create flattened array of all animals
    const flattenedAnimalsArray: Animal[] = [].concat(...Object.values(animals));

    // 2. Set to keep track of unique animals
    const uniqueAnimalIds = new Set<string>();

    // 3. Build output IStringMap
    const animalsGroupedByClass = flattenedAnimalsArray.reduce(
      (animalClassMap, currAnimal) => {
        // 4. Only add unique animals
        if (!uniqueAnimalIds.has(currAnimal.id)) {
          // 5. Get list of Animals for class
          animalClassMap[currAnimal.class] = animalClassMap[currAnimal.class] ?? [];

          // 6. Add Animal to class key
          animalClassMap[currAnimal.class].push(currAnimal);

          // 7. Store Animal Id to avoid duplicates
          uniqueAnimalIds.add(currAnimal.id);
        }
        return animalClassMap;
      },
      {} as IStringMap<Animal[]>
    );

    // 8. Sort Animals in alphabetic order
    Object.entries(animalsGroupedByClass).forEach((entry: [string, Animal[]]) => {
      const [animalClass, animalsForClass] = entry;
      animalsGroupedByClass[animalClass] = animalsForClass.sort(
        (a: Animal, b: Animal) => {
          return a.name > b.name ? 1 : b.name > a.name ? -1 : 0;
        }
      );
    });

    return animalsGroupedByClass;
  }
}
