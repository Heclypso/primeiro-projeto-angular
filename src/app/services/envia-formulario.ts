import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EnviaFormulario {
  enviaInformaçãoParaBackend(info: string) {
    console.log("Enviando para o Back-end")
  }
}
