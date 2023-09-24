import { Component, Inject, OnInit } from '@angular/core';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { DadosModal } from './dados-modal';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public dadosModal: DadosModal,
    private dialogRef: MatDialogRef<ModalComponent>,
  ) { }

  ngOnInit(): void {
  }

  selecionarCategoria(categoria: 'Econômica' | 'Executiva'): void {
    this.dadosModal.categoria = categoria;
  }

  cancelar(): void {
    this.dialogRef.close();
  }

}
