import { Injectable } from '@nestjs/common';

@Injectable()
export class JuegosService {
    private readonly juegos = [
        { id: 1, nombre: 'The Legend of Zelda: Breath of the Wild', genero: 'Aventura' },
        { id: 2, nombre: 'Super Mario Odyssey', genero: 'Aventura' },
        { id: 3, nombre: 'The Witcher 3: Wild Hunt', genero: 'Shooter' },
        { id: 4, nombre: 'Overwatch', genero: 'Shooter' },
        { id: 5, nombre: 'Minecraft', genero: 'Sandbox' },

    ];

    findAll(genero?: string) {
        if (!genero) return this.juegos;
            return this.juegos.filter(j => j.genero === genero);
    }
}
