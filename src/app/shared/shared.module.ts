import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

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

import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { ContainerComponent } from './container/container.component';
import { FooterComponent } from './footer/footer.component';
import { CardComponent } from './card/card.component';
import { CardPromocaoComponent } from './card-promocao/card-promocao.component';
import { CardTestimonialComponent } from './card-testimonial/card-testimonial.component';
import { FormPassagemComponent } from './form-passagem/form-passagem.component';
import { ModalComponent } from './modal/modal.component';
import { ButtonCounterComponent } from './button-counter/button-counter.component';

@NgModule({
  declarations: [
    HeaderComponent,
    BannerComponent,
    ContainerComponent,
    FooterComponent,
    CardComponent,
    CardPromocaoComponent,
    CardTestimonialComponent,
    FormPassagemComponent,
    ModalComponent,
    ButtonCounterComponent,
  ],
  imports: [
    CommonModule,
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
  ],
  exports: [
    CommonModule,
    HeaderComponent,
    BannerComponent,
    ContainerComponent,
    FooterComponent,
    CardComponent,
    CardPromocaoComponent,
    CardTestimonialComponent,
    FormPassagemComponent,
  ]
})
export class SharedModule { }
