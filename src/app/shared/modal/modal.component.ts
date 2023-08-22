import { Component, OnInit } from '@angular/core';

import { FormPassagemService } from 'src/app/core/services/form-passagem.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  constructor(
    public formPassagemService: FormPassagemService,
  ) { }

  ngOnInit(): void {
  }

}
