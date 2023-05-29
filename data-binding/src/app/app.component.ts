import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'data-binding';
  valor = 5;
  deletarCiclo = false;

  mudarValor() {
    this.valor++;
  }

  destruirCiclo() {
    this.deletarCiclo = true;
  }
}
