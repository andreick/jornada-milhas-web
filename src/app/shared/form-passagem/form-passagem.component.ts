import { Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';

import { ModalComponent } from 'src/app/shared/modal/modal.component';

@Component({
  selector: 'app-form-passagem',
  templateUrl: './form-passagem.component.html',
  styleUrls: ['./form-passagem.component.scss']
})
export class FormPassagemComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    this.dialog.open(ModalComponent, { width: '50%' });
  }

}
