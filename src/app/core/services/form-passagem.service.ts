import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { MatDialog } from '@angular/material/dialog';

import { ModalComponent } from 'src/app/shared/modal/modal.component';

import { Estado } from '../models/estado';

@Injectable({
  providedIn: 'root'
})
export class FormPassagemService {

  readonly formPassagem;
  readonly somenteIda: FormControl<boolean | null>;
  readonly origem: FormControl<string | Estado | null>;
  readonly destino: FormControl<string | Estado | null>;
  readonly categoria: FormControl<'Econômica' | 'Executiva' | null>;
  readonly adultos: FormControl<number | null>;
  readonly criancas: FormControl<number | null>;
  readonly bebes: FormControl<number | null>;

  constructor(
    private dialog: MatDialog,
  ) {
    this.formPassagem = new FormGroup({
      somenteIda: this.somenteIda = new FormControl(false),
      origem: this.origem = new FormControl(''),
      destino: this.destino = new FormControl(''),
      categoria: this.categoria = new FormControl('Executiva'),
      adultos: this.adultos = new FormControl(1),
      criancas: this.criancas = new FormControl(0),
      bebes: this.bebes = new FormControl(0),
    });
  }

  get descricaoPassageiros(): string {
    const listaQuantidade = [
      { quantidade: this.adultos.value ?? 0, singular: 'Adulto', plural: 'Adultos' },
      { quantidade: this.criancas.value ?? 0, singular: 'Criança', plural: 'Crianças' },
      { quantidade: this.bebes.value ?? 0, singular: 'Bebê', plural: 'Bebês' },
    ];

    return listaQuantidade
      .filter(({ quantidade }) => quantidade > 0)
      .map(({ quantidade, singular, plural }) => `${quantidade} ${quantidade > 1 ? plural : singular}`)
      .reduce((descricao, passageiro, indice, lista) => {
        if (!descricao) return passageiro;
        return descricao += `${indice < lista.length - 1 ? ',' : ' e'} ${passageiro}`;
      }, '');
  }

  openDialog(): void {
    this.dialog.open(ModalComponent, { width: '50%' });
  }

  categoriaSelected(categoria: 'Econômica' | 'Executiva'): void {
    this.categoria.setValue(categoria);
  }

}
