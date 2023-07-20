import { Component, OnDestroy, OnInit } from '@angular/core';
import { EnviarValorService } from '../enviar-valor.service';

@Component({
  selector: 'app-poc',
  template: `
    <app-poc-base [nome]="nome" [valor]="valor" estilo="bg-danger">
    </app-poc-base>
  `,
})
export class PocComponent implements OnInit, OnDestroy {
  nome = 'Componente sem unsubscribe';
  valor!: string;

  constructor(private service: EnviarValorService) {}

  ngOnInit() {}

  ngOnDestroy() {
    console.log(`${this.nome} foi destruido`);
  }
}
