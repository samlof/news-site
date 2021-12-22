import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';
import { HomePageComponent } from './home-page.component';
import { NewsCardComponent } from './news-card/news-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [HomePageComponent, NewsCardComponent],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    MatCardModule,
    MatListModule,
    MatProgressSpinnerModule,
  ],
})
export class HomePageModule {}
