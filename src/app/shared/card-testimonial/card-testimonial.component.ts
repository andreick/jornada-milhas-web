import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-testimonial',
  templateUrl: './card-testimonial.component.html',
  styleUrls: ['./card-testimonial.component.scss']
})
export class CardTestimonialComponent implements OnInit {

  @Input() src: string = '';
  @Input() alt: string = '';
  @Input() text: string = '';
  @Input() authorship: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
