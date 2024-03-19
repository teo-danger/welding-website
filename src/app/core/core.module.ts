import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { FixedInfoBarComponent } from './fixed-info-bar/fixed-info-bar.component';
import { FloatingInfoBarComponent } from './floating-info-bar/floating-info-bar.component';
import { ResponsiveNavbarComponent } from './responsive-navbar/responsive-navbar.component';
import { AngularMaterialModule } from '../shared/uikit/angular-material/angular-material.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from '../app-routing.module';

const CORECOMPONENTS = [
  FooterComponent,
  FixedInfoBarComponent,
  FloatingInfoBarComponent,
  ResponsiveNavbarComponent]

@NgModule({
  declarations: [
    [...CORECOMPONENTS]
  ],

  imports: [
    CommonModule,
    FontAwesomeModule,
    AngularMaterialModule,
    AppRoutingModule
  ],

  exports: [
    [...CORECOMPONENTS]
  ]
})
export class CoreModule { }
