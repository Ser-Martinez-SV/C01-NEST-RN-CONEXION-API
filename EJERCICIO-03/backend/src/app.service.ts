import { Injectable } from '@nestjs/common';

@Injectable()
export class MascotasService {
  private mascotas = [
    { id: 1, nombre: 'Shusi', peso: 5 },
    { id: 2, nombre: 'Perez', peso: 80 },
    { id: 3, nombre: 'Royo', peso: 70 }
  ];
  findOne(id: number) {
    return this.mascotas.find(m => m.id === id);
  }
}

