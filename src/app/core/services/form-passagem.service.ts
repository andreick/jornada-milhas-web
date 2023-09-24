import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { MatDialog } from '@angular/material/dialog';

import { ModalComponent } from 'src/app/shared/modal/modal.component';

import { Estado } from '../models/estado';
import { DadosModal } from 'src/app/shared/modal/dados-modal';

@Injectable()
export class FormPassagemService {

  readonly formPassagem;
  readonly somenteIda;
  readonly origem;
  readonly destino;
  readonly categoria;
  readonly adultos;
  readonly criancas;
  readonly bebes;

  constructor(
    private dialog: MatDialog,
  ) {
    this.formPassagem = new FormGroup({
      somenteIda: this.somenteIda = new FormControl<boolean>(false),
      origem: this.origem = new FormControl<string | Estado>(''),
      destino: this.destino = new FormControl<string | Estado>(''),
      categoria: this.categoria = new FormControl<'Econômica' | 'Executiva'>('Executiva'),
      adultos: this.adultos = new FormControl<number>(1),
      criancas: this.criancas = new FormControl<number>(0),
      bebes: this.bebes = new FormControl<number>(0),
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

  trocarOrigemDestino(): void {
    this.formPassagem.patchValue({
      origem: this.destino.value,
      destino: this.origem.value
    })
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '50%',
      data: {
        categoria: this.categoria.value,
        adultos: this.adultos.value,
        criancas: this.criancas.value,
        bebes: this.bebes.value,
      } as DadosModal
    });
    dialogRef.afterClosed().subscribe((dadosModal: DadosModal | undefined) => {
      if (!dadosModal) return;
      this.formPassagem.patchValue({
        categoria: dadosModal.categoria,
        adultos: dadosModal.adultos,
        criancas: dadosModal.criancas,
        bebes: dadosModal.bebes,
      });
    })
  }

}
