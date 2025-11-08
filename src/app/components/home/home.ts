import { Component, inject } from '@angular/core';

import { EnviaFormulario } from '../../services/envia-formulario';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  private enviaFormularioService = inject(EnviaFormulario)
  nome = "Gabriel"
  id = "1"
  deveMostrarTitulo = false
  listItens = ['Banana', 'Maça']


  submit(){
    this.enviaFormularioService.enviaInformaçãoParaBackend("enviando informacao para o backend")
  }
}
