import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CursosService } from '../cursos.service';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.scss'],
})
export class CursoDetalheComponent implements OnInit, OnDestroy {
  id!: number;
  inscricao!: Subscription;
  curso?: any;

  constructor(
    private route: ActivatedRoute,
    private cursosService: CursosService,
    private router: Router
  ) {
    // this.id = route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.inscricao = this.route.params.subscribe((params) => {
      this.id = params['id'];
      this.curso = this.cursosService.getCurso(this.id);

      if (this.curso === undefined || this.curso === null) {
        this.router.navigate(['/cursos/naoEncontrado']);
      }
    });
  }

  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
  }
}
