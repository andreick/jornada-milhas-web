import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { PromocaoService } from 'src/app/core/services/promocao.service';
import { Promocao } from 'src/app/core/models/promocao';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  promocoes$!: Observable<Promocao[]>;

  testimonials = [
    {
      src: 'assets/imagens/avatar3.png',
      alt: 'Imagem do autor',
      text:
        `Minha viagem com a Jornada foi incrível! Recomendo muito a agência para quem busca uma experiência
         emocionante e personalizada a partir das nossas necessidades.`,
      authorship: 'Mariana Faustino',
    },
    {
      src: 'assets/imagens/avatar3.png',
      alt: 'Imagem do autor',
      text:
        `Minha viagem com a Jornada foi incrível! Recomendo muito a agência para quem busca uma experiência
         emocionante e personalizada a partir das nossas necessidades.`,
      authorship: 'Mariana Faustino',
    },
    {
      src: 'assets/imagens/avatar3.png',
      alt: 'Imagem do autor',
      text:
        `Minha viagem com a Jornada foi incrível! Recomendo muito a agência para quem busca uma experiência
         emocionante e personalizada a partir das nossas necessidades.`,
      authorship: 'Mariana Faustino',
    },
  ];

  constructor(
    private promocaoService: PromocaoService,
  ) { }

  ngOnInit(): void {
    this.promocoes$ = this.promocaoService.fetch();
  }

}
