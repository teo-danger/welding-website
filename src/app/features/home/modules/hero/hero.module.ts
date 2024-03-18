import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroRoutingModule } from './hero-routing.module';
import { HeroComponent } from './hero.component';
import { AngularMaterialModule } from 'src/app/shared/uikit/angular-material/angular-material.module';


@NgModule({
  declarations: [
    HeroComponent
  ],
  imports: [
    CommonModule,
    HeroRoutingModule,
    AngularMaterialModule
  ],
  exports: [
    HeroComponent
  ],
})
export class HeroModule { }
