import { Component } from "@angular/core";

@Component({
  selector: "app-data-binding",
  templateUrl: "./data-binding.component.html",
  styleUrls: ["./data-binding.component.scss"],
})
export class DataBindingComponent {
  url: string = "http://loaiane.com";
  cursoAngular: boolean = true;
  urlImagem: string = "https://picsum.photos/400/200";

  getValor() {
    return 1;
  }

  getCurtirCurso() {
    return true;
  }
}
