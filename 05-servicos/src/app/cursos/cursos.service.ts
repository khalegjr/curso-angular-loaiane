import { EventEmitter, Injectable } from '@angular/core';

@Injectable()
export class CursosService {
  emitirCursoCriado = new EventEmitter<string>();
  // um atributo estático é acessível independente de instância
  static criouNovoCurso = new EventEmitter<string>();

  private cursos: string[] = ['Angular', 'Java', 'Vue', 'React'];

  constructor() {
    console.log('CursoService');
  }

  getCursos() {
    return this.cursos;
  }

  addCurso(curso: string) {
    this.cursos.push(curso);
    this.emitirCursoCriado.emit(curso);
    CursosService.criouNovoCurso.emit(curso);
  }
}
