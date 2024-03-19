import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterBarComponent } from './components/counter-bar/counter-bar.component';
import { HomeServiceCardComponent } from './components/home-service-card/home-service-card.component';
import { JumbotronComponent } from './components/jumbotron/jumbotron.component';
import { MaterialsCardComponent } from './components/materials-card/materials-card.component';
import { ResponsiveImageGridComponent } from './components/responsive-image-grid/responsive-image-grid.component';
import { ServiceCardComponent } from './components/service-card/service-card.component';
import { TechnologiesCardComponent } from './components/technologies-card/technologies-card.component';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { HeroComponent } from './components/hero/hero.component';
import { AppRoutingModule } from 'src/app/app-routing.module';

const UICOMPONENTS = [
  HeroComponent,
  CounterBarComponent,
  HomeServiceCardComponent,
  JumbotronComponent,
  MaterialsCardComponent,
  ResponsiveImageGridComponent,
  ServiceCardComponent,
  TechnologiesCardComponent
]


@NgModule({
  declarations: [
    [...UICOMPONENTS]
  ],
  imports: [
    CommonModule,
    AngularMaterialModule
  ],
  exports: [
    [...UICOMPONENTS]
  ],
})
export class UikitModule { }
