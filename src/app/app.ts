import { Component, signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { Home } from './components/home/home';

@Component({
  selector: 'app-root',
  imports: [Home],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('primeiro-projeto-angular');

  submit(evento: any) {
    console.log(evento)
  }

  logar(evento: string) {
    console.log("Info do filho:", evento)
  }
}
