import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormPassagemService {

  readonly formPassagem: FormGroup;

  constructor() {
    this.formPassagem = new FormGroup({
      somenteIda: new FormControl(false),
    });
  }

  get somenteIda(): FormControl {
    return this.formPassagem.get('somenteIda') as FormControl;
  }

}
