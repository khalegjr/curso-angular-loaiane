import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CursosService {
  constructor() {}

  getCursos() {
    return [
      { id: 1, nome: 'Angular' },
      { id: 2, nome: 'Java' },
      { id: 3, nome: 'React' },
      { id: 4, nome: 'Vue' },
    ];
  }

  getCurso(id: number) {
    let curso = this.getCursos().find((v) => v.id == id);

    return curso;
  }
}
