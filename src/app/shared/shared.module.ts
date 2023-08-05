import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { ContainerComponent } from './container/container.component';
import { FooterComponent } from './footer/footer.component';
import { CardComponent } from './card/card.component';
import { CardSearchComponent } from './card-search/card-search.component';
import { CardTestimonialComponent } from './card-testimonial/card-testimonial.component';

@NgModule({
  declarations: [
    HeaderComponent,
    BannerComponent,
    ContainerComponent,
    FooterComponent,
    CardComponent,
    CardSearchComponent,
    CardTestimonialComponent,
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
  ],
  exports: [
    CommonModule,
    HeaderComponent,
    BannerComponent,
    ContainerComponent,
    FooterComponent,
    CardComponent,
    CardSearchComponent,
    CardTestimonialComponent,
  ]
})
export class SharedModule { }
