import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { SuperheroesModule } from '../superheroes/superheroes.module';

describe('SuperheroesController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [SuperheroesModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe()); // Apply validation
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('POST /superheroes should create a superhero', async () => {
    const superheroData = {
      name: 'Spider-Man',
      superpower: 'Web-slinging',
      humilityScore: 8,
    };

    const response = await request(app.getHttpServer())
      .post('/superheroes')
      .send(superheroData)
      .expect(201);

    expect(response.body).toMatchObject(superheroData);
  });

  it('POST /superheroes should return 400 for invalid humilityScore', async () => {
    const invalidData = {
      name: 'Hulk',
      superpower: 'Super strength',
      humilityScore: 15,
    };

    const response = await request(app.getHttpServer())
      .post('/superheroes')
      .send(invalidData)
      .expect(400);

    expect(response.body.message).toContain('humilityScore must not be greater than 10');
  });

  it('POST /superheroes should return 400 for missing fields', async () => {
    const response = await request(app.getHttpServer())
      .post('/superheroes')
      .send({})
      .expect(400);

    expect(response.body.message).toEqual(
      expect.arrayContaining([
        'name must be a string',
        'superpower must be a string',
        'humilityScore must be an integer number',
      ]),
    );
  });
});
