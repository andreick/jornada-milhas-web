import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { PromocaoService } from 'src/app/core/services/promocao.service';
import { DepoimentoService } from 'src/app/core/services/depoimento.service';
import { Promocao } from 'src/app/core/models/promocao';
import { Depoimento } from 'src/app/core/models/depoimento';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  promocoes$!: Observable<Promocao[]>;
  depoimentos$!: Observable<Depoimento[]>;

  constructor(
    private promocaoService: PromocaoService,
    private depoimentoService: DepoimentoService,
  ) { }

  ngOnInit(): void {
    this.promocoes$ = this.promocaoService.fetch();
    this.depoimentos$ = this.depoimentoService.fetch();
  }

}
