import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  name = 'Gabriel'

  @Input("saudacao") minhaPropsDeFora!: string

  @Output() emitindoValorName = new EventEmitter<string>()

  submit() {
    this.emitindoValorName.emit(this.name)
  }
}
