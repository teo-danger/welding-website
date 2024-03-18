import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { UikitModule } from 'src/app/shared/uikit/uikit.module';
import { HeroModule } from './modules/hero/hero.module';
import { AngularMaterialModule } from 'src/app/shared/uikit/angular-material/angular-material.module';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    UikitModule,
    HeroModule,
    AngularMaterialModule
  ]
})
export class HomeModule { }
