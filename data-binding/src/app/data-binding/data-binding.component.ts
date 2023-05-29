import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss'],
})
export class DataBindingComponent {
  url: string = 'http://loaiane.com';
  cursoAngular: boolean = true;
  urlImagem: string = 'https://picsum.photos/400/200';
  valorAtual: string = '';
  valorSalvo: string = '';
  valorSalvoComVariavelLocal: string = '';

  nome: string = 'abc';

  pessoa: any = {
    nome: 'def',
    idade: 20,
  };

  nomeDoCurso: string = 'Angular';
  valorInicial = 15;

  getValor() {
    return 1;
  }

  getCurtirCurso() {
    return true;
  }

  botaoClicado() {
    alert('Botão clicado!');
  }

  onKeyUp(evento: KeyboardEvent) {
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  salvarValor(valor: Event) {
    this.valorSalvo = (valor.target as HTMLInputElement).value;
  }

  salvarValorComVariavelLocal(valor: HTMLInputElement) {
    this.valorSalvoComVariavelLocal = valor.value;
  }

  onMudouValor(evento: any) {
    console.log(evento.novoValor);
  }
}
