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
    // Add your code here.
    // Run `ng test` to see if your code passes.
    return {};
  }
}
