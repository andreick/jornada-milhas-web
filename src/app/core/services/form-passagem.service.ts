import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Estado } from '../models/estado';

@Injectable({
  providedIn: 'root'
})
export class FormPassagemService {

  readonly formPassagem: FormGroup;
  readonly somenteIda: FormControl<boolean | null>;
  readonly origem: FormControl<string | Estado | null>;
  readonly destino: FormControl<string | Estado | null>;

  constructor() {
    this.formPassagem = new FormGroup({
      somenteIda: this.somenteIda = new FormControl(false),
      origem: this.origem = new FormControl(''),
      destino: this.destino = new FormControl(''),
    });
  }

}
