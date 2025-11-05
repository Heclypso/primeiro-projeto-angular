import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  nome = "gabriel"
  id = "1"

  submit(evento: any) {
    console.log("Olá, Mundo", evento)
  }
}
