import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.scss'],
})
export class ExemplosPipesComponent {
  livro: any = {
    titulo: 'Aprendendo Javascript',
    rating: 4.54321,
    numeroPaginas: 314,
    preco: 44.99,
    dataLancamento: new Date(2016, 5, 23),
    url: 'http://a.co/glgjpRP',
  };

  livros: string[] = ['Angular', 'React', 'Java'];
  @Input() filtro!: string;

  addCurso(valor: string) {
    this.livros.push(valor);
    console.log(this.livros);
  }
}
