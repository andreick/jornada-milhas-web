import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-counter',
  templateUrl: './button-counter.component.html',
  styleUrls: ['./button-counter.component.scss']
})
export class ButtonCounterComponent implements OnInit {

  @Input() operation: 'increment' | 'decrement' = 'increment';

  src: string = '';
  alt: string = '';

  constructor() { }

  ngOnInit(): void {
    switch (this.operation) {
      case 'increment':
        this.src = 'assets/icones/add_circle.png';
        this.alt = 'Operador de adição';
        break;
      case 'decrement':
        this.src = 'assets/icones/do_not_disturb_on.png';
        this.alt = 'Operador de subtração';
        break;
    }
  }

}
