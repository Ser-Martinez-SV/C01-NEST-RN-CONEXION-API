import { Controller, Get } from '@nestjs/common';
import { PizzasService } from './pizzas.service';

@Controller('pizzas')
export class PizzasController {
    constructor(private readonly pizzasService: PizzasService) {}
    
    @Get('pizzas')
    pizzas(): any {
        return this.pizzasService.findAll();
    }
}
