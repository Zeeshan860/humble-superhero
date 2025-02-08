import { Controller, Get, Post, Body, UsePipes, ValidationPipe } from '@nestjs/common';
import { SuperheroesService, Superhero } from './superheroes.service';
import { CreateSuperheroDto } from './dto';

@Controller('superheroes')
export class SuperheroesController {
  constructor(private readonly superheroesService: SuperheroesService) {}

  // POST endpoint to add super hero
  @Post()
  @UsePipes(new ValidationPipe({ transform: true })) // Enables automatic validation
  addSuperhero(@Body() input: CreateSuperheroDto): Superhero {
    return this.superheroesService.addSuperhero(
        input
    );
  }

  // GET endpoint to retrieve all super heroes sorted by humility score
  @Get()
  getSuperheroes(): Superhero[] {
    return this.superheroesService.getSuperheroes();
  }
}
