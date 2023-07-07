import { EventEmitter, Injectable } from '@angular/core';
import { LogService } from '../shared/log.service';

@Injectable()
export class CursosService {
  emitirCursoCriado = new EventEmitter<string>();
  // um atributo estático é acessível independente de instância
  static criouNovoCurso = new EventEmitter<string>();

  private cursos: string[] = ['Angular', 'Java', 'Vue', 'React'];

  constructor(private logService: LogService) {
    console.log('CursoService');
  }

  getCursos() {
    this.logService.consoleLog('Obtendo a lista de cursos');
    return this.cursos;
  }

  addCurso(curso: string) {
    this.logService.consoleLog(`Criando um novo curso ${curso}`);
    this.cursos.push(curso);
    this.emitirCursoCriado.emit(curso);
    CursosService.criouNovoCurso.emit(curso);
  }
}
