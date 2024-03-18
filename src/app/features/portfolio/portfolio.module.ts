import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { PortfolioComponent } from './portfolio.component';
import { UikitModule } from 'src/app/shared/uikit/uikit.module';
import { AngularMaterialModule } from 'src/app/shared/uikit/angular-material/angular-material.module';


@NgModule({
  declarations: [
    PortfolioComponent
  ],
  imports: [
    CommonModule,
    PortfolioRoutingModule,
    UikitModule,
    AngularMaterialModule
  ]
})
export class PortfolioModule { }
