import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador-passageiro',
  templateUrl: './contador-passageiro.component.html',
  styleUrls: ['./contador-passageiro.component.scss']
})
export class ContadorPassageiroComponent implements OnInit {

  @Input() titulo: string = '';
  @Input() subtitulo: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
