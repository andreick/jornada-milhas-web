import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { ContainerComponent } from './container/container.component';

@NgModule({
  declarations: [
    HeaderComponent,
    BannerComponent,
    ContainerComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
  ],
  exports: [
    HeaderComponent,
    BannerComponent,
    ContainerComponent,
  ]
})
export class SharedModule { }
