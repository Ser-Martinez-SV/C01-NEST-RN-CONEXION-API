import { Controller, Get } from '@nestjs/common';
import { PizzasService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly pizzasService: PizzasService) {}


  @Get('pizzas')
  pizzas(): any {
    return this.pizzasService.findAll();
  }
}
