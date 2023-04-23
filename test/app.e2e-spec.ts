import { AppModule } from './../src/app.module';

import { Test } from '@nestjs/testing';
describe('App e2e tests', () => {
  beforeAll(async () => {
    const moduleRef = Test.createTestingModule({
      imports: [AppModule],
    }).compile();
  });
  it.todo('Return Tests Passed');
});
