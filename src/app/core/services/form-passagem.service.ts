import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { MatDialog } from '@angular/material/dialog';

import { ModalComponent } from 'src/app/shared/modal/modal.component';

import { Estado } from '../models/estado';

@Injectable({
  providedIn: 'root'
})
export class FormPassagemService {

  readonly formPassagem: FormGroup;
  readonly somenteIda: FormControl<boolean | null>;
  readonly origem: FormControl<string | Estado | null>;
  readonly destino: FormControl<string | Estado | null>;
  readonly categoria: FormControl<'economica' | 'executiva' | null>;

  constructor(
    private dialog: MatDialog,
  ) {
    this.formPassagem = new FormGroup({
      somenteIda: this.somenteIda = new FormControl(false),
      origem: this.origem = new FormControl(''),
      destino: this.destino = new FormControl(''),
      categoria: this.categoria = new FormControl('executiva'),
    });
  }

  openDialog() {
    this.dialog.open(ModalComponent, { width: '50%' });
  }

  categoriaSelected(categoria: 'economica' | 'executiva'): void {
    this.categoria.setValue(categoria);
  }

}
