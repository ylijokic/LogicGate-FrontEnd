import { Component, Input } from '@angular/core';
import { Animal } from './models/animal';

@Component({
  selector: 'fe-animal-card',
  templateUrl: './animal-card.component.html'
})
export class AnimalCardComponent {
  @Input() public animal: Animal;
}
