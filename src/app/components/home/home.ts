import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  valorBooleano = true;

  alteraBooleano = (valor: boolean) => {
    this.valorBooleano = valor
  }

}
