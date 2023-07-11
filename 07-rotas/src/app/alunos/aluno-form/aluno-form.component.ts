import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { AlunosService } from '../alunos.service';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.scss'],
})
export class AlunoFormComponent {
  aluno: any;
  incricao!: Subscription;

  constructor(
    private route: ActivatedRoute,
    private alunosService: AlunosService
  ) {}

  ngOnInit(): void {
    this.incricao = this.route.params.subscribe((params: any) => {
      let id = params['id'];

      if (id == undefined) {
        this.aluno = {};
      } else {
        this.aluno = this.alunosService.getAluno(id);
      }
    });
  }

  ngOnDestroy(): void {
    this.incricao.unsubscribe();
  }
}
