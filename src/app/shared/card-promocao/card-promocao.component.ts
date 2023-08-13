import { Component, Input, OnInit } from '@angular/core';

import { Promocao } from 'src/app/core/models/promocao';

@Component({
  selector: 'app-card-promocao',
  templateUrl: './card-promocao.component.html',
  styleUrls: ['./card-promocao.component.scss']
})
export class CardPromocaoComponent implements OnInit {

  @Input() promocao!: Promocao;

  constructor() { }

  ngOnInit(): void {
  }

}
