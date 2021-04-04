export class Animal {
  public class: string;
  public id: string;
  public lifespan: string;
  public mass: string;
  public name: string;
  public scientificName: string;

  constructor(animal?: Partial<Animal>) {
    Object.assign(this, animal);
  }
}
