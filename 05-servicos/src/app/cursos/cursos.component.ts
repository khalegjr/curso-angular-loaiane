import { Component, OnInit } from '@angular/core';

import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss'],
})
export class CursosComponent implements OnInit {
  cursos: string[] = [];

  constructor(private cursosService: CursosService) {}

  ngOnInit(): void {
    this.cursos = this.cursosService.getCursos();

    // utilizando atributo estático para comunicação entre instâncias
    CursosService.criouNovoCurso.subscribe((curso) => this.cursos.push(curso));
  }
}
