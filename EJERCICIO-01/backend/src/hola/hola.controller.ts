import { Controller, Get } from '@nestjs/common';
import { AppService } from '../app.service';

@Controller('hola')
export class HolaController {
    constructor(private readonly appService: AppService) {}

    @Get()
      getHello(): string {
        return this.appService.getHello();
      }
    
      @Get('id')
      saludar(): string {
        return "Endpoint modificado";
      }
}
