import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Animal } from 'src/app/models/animal';
import { IStringMap } from 'src/app/utils/string-map';
import { ANIMALS } from './utils/mock-animals';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  public getAnimalsByContinent(): Observable<IStringMap<Animal[]>> {
    const animalsByContinent = of(ANIMALS);
    return animalsByContinent;
  }
}
