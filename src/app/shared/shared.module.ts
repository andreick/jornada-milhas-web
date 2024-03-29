import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { ContainerComponent } from './container/container.component';
import { FooterComponent } from './footer/footer.component';
import { CardComponent } from './card/card.component';
import { CardPromocaoComponent } from './card-promocao/card-promocao.component';
import { CardDepoimentoComponent } from './card-depoimento/card-depoimento.component';
import { FormPassagemComponent } from './form-passagem/form-passagem.component';
import { ModalComponent } from './modal/modal.component';
import { DropdownEstadoComponent } from './dropdown-estado/dropdown-estado.component';
import { ContadorPassageiroComponent } from './contador-passageiro/contador-passageiro.component';

@NgModule({
  declarations: [
    HeaderComponent,
    BannerComponent,
    ContainerComponent,
    FooterComponent,
    CardComponent,
    CardPromocaoComponent,
    CardDepoimentoComponent,
    FormPassagemComponent,
    ModalComponent,
    DropdownEstadoComponent,
    ContadorPassageiroComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatButtonToggleModule,
    MatIconModule,
    MatChipsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    MatAutocompleteModule,
  ],
  exports: [
    CommonModule,
    HeaderComponent,
    BannerComponent,
    ContainerComponent,
    FooterComponent,
    CardComponent,
    CardPromocaoComponent,
    CardDepoimentoComponent,
    FormPassagemComponent,
  ]
})
export class SharedModule { }
