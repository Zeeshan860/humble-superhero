import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid'; // Import UUID generator
import { CreateSuperheroDto } from './dto';

export interface Superhero {
  id: string;
  name: string;
  superpower: string;
  humilityScore: number;
}

@Injectable()
export class SuperheroesService {
  private superheroes: Superhero[] = [];

  /**
   * @description Adds a new superhero to the in-memory database.
   * @param {CreateSuperheroDto} input - The superhero details (name, superpower, humilityScore).
   * @returns {Superhero} - The created superhero object with a generated UUID.
   * 
   * @example
   * ```ts
   * addSuperhero({ name: "Humble Hero", superpower: "Kindness", humilityScore: 8 })
   * ```
   */
  addSuperhero(input: CreateSuperheroDto): Superhero {
    const newSuperhero: Superhero = {
      id: uuidv4(), // Generate UUID for each superhero
      ...input
    };

    this.superheroes.push(newSuperhero);

    return newSuperhero;
  }

  /**
   * @description Retrieves the list of superheroes sorted by humility score in descending order.
   * @returns {Superhero[]} - An array of superheroes sorted by humility.
   * 
   * @example
   * ```ts
   * getSuperheroes()
   * ```
   */
  getSuperheroes(): Superhero[] {
    return this.superheroes.sort((a, b) => b.humilityScore - a.humilityScore);
  }
}
