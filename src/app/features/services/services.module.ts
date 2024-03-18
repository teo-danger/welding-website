import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesRoutingModule } from './services-routing.module';
import { ServicesComponent } from './services.component';
import { UikitModule } from 'src/app/shared/uikit/uikit.module';
import { AngularMaterialModule } from 'src/app/shared/uikit/angular-material/angular-material.module';


@NgModule({
  declarations: [
    ServicesComponent
  ],
  imports: [
    CommonModule,
    ServicesRoutingModule,
    UikitModule,
    AngularMaterialModule

  ]
})
export class ServicesModule { }
