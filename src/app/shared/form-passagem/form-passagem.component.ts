import { Component, OnInit } from '@angular/core';

import { FormPassagemService } from 'src/app/core/services/form-passagem.service';

@Component({
  selector: 'app-form-passagem',
  templateUrl: './form-passagem.component.html',
  styleUrls: ['./form-passagem.component.scss'],
  providers: [
    FormPassagemService,
  ]
})
export class FormPassagemComponent implements OnInit {

  constructor(
    public formPassagemService: FormPassagemService,
  ) { }

  ngOnInit(): void {
  }

  buscar(): void {
    console.log(this.formPassagemService.formPassagem.value);
  }

}
