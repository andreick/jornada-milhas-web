import { Component, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-contador-passageiro',
  templateUrl: './contador-passageiro.component.html',
  styleUrls: ['./contador-passageiro.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: ContadorPassageiroComponent
    }
  ]
})
export class ContadorPassageiroComponent implements ControlValueAccessor {

  @Input() titulo: string = '';
  @Input() subtitulo: string = '';

  contador: number = 0;

  onChange = (contador: number) => { };

  onTouched = () => { };

  desabilitado: boolean = false;

  constructor() { }

  incrementar(): void {
    if (!this.desabilitado) {
      this.onTouched();
      this.contador++;
      this.onChange(this.contador);
    }
  }

  decrementar(): void {
    if (!this.desabilitado && this.contador > 0) {
      this.onTouched();
      this.contador--;
      this.onChange(this.contador);
    }
  }

  writeValue(contador: number): void {
    this.contador = contador;
  }

  registerOnChange(onChange: any): void {
    this.onChange = onChange;
  }

  registerOnTouched(onTouched: any): void {
    this.onTouched = onTouched;
  }

  setDisabledState?(desabilitado: boolean): void {
    this.desabilitado = desabilitado;
  }

}
