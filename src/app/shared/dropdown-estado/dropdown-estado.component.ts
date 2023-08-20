import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';

import { EstadoService } from 'src/app/core/services/estado.service';
import { Estado } from 'src/app/core/models/estado';

@Component({
  selector: 'app-dropdown-estado',
  templateUrl: './dropdown-estado.component.html',
  styleUrls: ['./dropdown-estado.component.scss']
})
export class DropdownEstadoComponent implements OnInit {

  @Input() label: string = '';
  @Input() matPrefix: string = '';
  @Input() estadoCtrl: FormControl<string | Estado | null> = new FormControl('');

  estadosFiltrados$?: Observable<Estado[]>;

  private estados: Estado[] = [];

  constructor(
    private estadoService: EstadoService,
  ) { }

  ngOnInit(): void {
    this.estadoService.fetch().subscribe(estados => {
      this.estados = estados;
      this.obterEstadosFiltrados();
    });
  }

  obterEstadosFiltrados(): void {
    this.estadosFiltrados$ = this.estadoCtrl.valueChanges.pipe(
      startWith(''),
      map(input => {
        const nome = this.nomeEstado(input);
        return nome ? this.filtrarEstadosPorNome(nome) : this.estados;
      }),
    );
  }

  nomeEstado(input: string | Estado | null): string {
    return typeof input === 'string'
      ? input
      : input ? input.nome : '';
  }

  private filtrarEstadosPorNome(nome: string): Estado[] {
    return this.estados.filter(estado => estado.nome.toLowerCase().includes(nome.toLowerCase()));
  }

}
