import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

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

  constructor() { }

  ngOnInit(): void {
  }

}
