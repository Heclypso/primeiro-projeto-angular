import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  nome = "Gabriel"
  id = "1"
  deveMostrarTitulo = false
  listItens = ['Banana', 'Maça']

  submit(evento: any) {
    console.log("Olá, Mundo", evento)
  }
}
